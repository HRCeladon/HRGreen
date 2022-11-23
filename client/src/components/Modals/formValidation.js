import axios from 'axios'

// Helper function to format phone to (XXX) XXX-XXXX when the user types it in
const formatPhone = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const len = phoneNumber.length;
  if (len < 4) return phoneNumber;
  if (len < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
}
// Helper function to verify email address
const verifyEmail = (email) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(regex);
};
// Helper function to get selection from drop down menu in contact-us modal
const getDropdownValue = () => {
  let dropdown = document.getElementById('your-preferred-time')
  return dropdown.value;
}
// Helper function to split the traverls string to an array
const formatTravelers = (string) => {
  string = string.trim()
  return string.split('\n')
}
// Helper function to create a span element that shows the error message on submission
const createErrorMsg = (message) => {
  let errorSpan = document.createElement('span');
  errorSpan.innerHTML = `<span>${message}</span><br/>`;
  return errorSpan;
};
const checkContactUsForm = (name, phone, email, message) => {
  // Flags for checking if input is correct
  let valid = true;
  // Remove any error messsage that appeared from previous submission
  let errors = document.getElementsByClassName('error')[0];
  while (errors.firstChild) {
    errors.removeChild(errors.firstChild);
  }
  // Check input fields
  if (name === '') { // Name field
    valid = false;
    let error = createErrorMsg('Name cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  if (phone === '') { // Phone field
    valid = false;
    let error = createErrorMsg('Phone cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  if (email === '') { // Email field
    valid = false;
    let error = createErrorMsg('Email cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  } else if (!verifyEmail(email)) {
    valid = false;
    let error = createErrorMsg('Email is not valid');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  if (message === '') {
    valid = false;
    let error = createErrorMsg('Message cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  return valid;
}

const checkTripPlannerForm = (from, to, start, end) => {
  // Flags for checking if input is correct
  let valid = true;
  // Remove any error messsage that appeared from previous submission
  let errors = document.getElementsByClassName('error')[0];
  while (errors.firstChild) {
    errors.removeChild(errors.firstChild);
  }
  // Check input fields
  if (from === '') { // From field
    valid = false;
    let error = createErrorMsg('From location cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  if (to === '') { // To field
    valid = false;
    let error = createErrorMsg('To location cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  if (start === '') { // Start field
    valid = false;
    let error = createErrorMsg('Start date cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  if (end === '') { // End field
    valid = false;
    let error = createErrorMsg('End date cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  return valid;
}
  // Helper function to handle image uploads and preview them
  const readImages = (e, cb) => {
    let errors = document.getElementsByClassName('error')[0];
    if (errors.firstChild) {
      errors.removeChild(errors.firstChild);
    }
    cb([]);
    let newImages = [];
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      const files = e.target.files;
      const output = document.querySelector('#image-preview');
      output.innerHTML = '';
      if (files.length < 6) {
        for (let i = 0; i < files.length; i++) {
          if (!files[i].type.match('image')) {
            continue;
          }
          const picReader = new FileReader();
          picReader.addEventListener('load', function (event) {
            const picFile = event.target;
            const div = document.createElement('div');
            div.innerHTML = `<img class='thumbnail' src='${picFile.result}' title='${picFile.name}'/>`;
            output.appendChild(div);
            newImages.push(files[i]);
          });
          picReader.readAsDataURL(files[i]);
        }
        console.log('Images:', newImages)
        cb(newImages);
      } else {
        let error = createErrorMsg('Cannot add more than 5 images');
        document.getElementsByClassName('error')[0].appendChild(error);
        e.target.value = null;
      }
    }
  }

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error)
    };
  }

  const submitImage = (e, setImages) => {
    e.preventDefault()
    const submittedImages = []
    let name = event.target.files[0].name
    getBase64(event.target.files[0], (result) => {
      var apiObject = {base64Img: result, nameGiven: name}
      axios.post('./images', apiObject)
        .then((apICallResult) => {
          console.log(apiObjectResult)
          submittedImages.push(apiCallResult.data.url)
          setImages(submittedImages)
          forceUdpate();
        })
        .catch(err => console.log('Failed to upload image:', err))
    })
  }

  let tripDetails =  {
    from: 'Houston, TX',
    to: 'Orlando, FL',
    startDate: '2022-11-16',
    endDate: '2022-11-10',
    travelers: ['John', 'Jane'],
    tripCompleted: false,
    stars: 0,
    reviews: []
  }

export {
  formatPhone,
  verifyEmail,
  getDropdownValue,
  formatTravelers,
  readImages,
  submitImage,
  tripDetails,
  checkContactUsForm,
  checkTripPlannerForm
}