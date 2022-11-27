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

// Helper function to check if location is inside the US
// Expect location parameter to be string: 'Denver, Colorado, United States'
const isWithinUS = (location) => {
  let country = location.split(', ').pop()
  return country === 'United States'
}
// Helper function to check if trip date is valid i.e. end date does not come before start date
const isValidTime = (start, end) => {
  let [startYear, startMonth, startDay] = start.split('-') // '2022-12-20'-> ['2022', '12', '20']
  let [endYear, endMonth, endDay] = end.split('-') //'2023-01-03'-> ['2023', '01', '03']
  // Check if start year is greater than end year
  if (Number(startYear) > Number(endYear)) return false
  // Check if same year and start month is greater than end month
  if (Number(startYear) === Number(endYear) && Number(startMonth) > Number(endMonth)) return false
  // Check if same month and start day is greater than end day
  if (Number(startMonth) === Number(endMonth) && Number(startDay) > Number(endDay)) return false
  return true // Return true if pass all tests
}

const checkTripPlannerForm = (from, to, start, end) => {
  // Flags for checking if input is correct
  let valid = true;
  // Remove any error messsage that appeared from previous submission
  let errors = document.getElementsByClassName('error')[0];
  while (errors.firstChild) {
    errors.removeChild(errors.firstChild);
  }
  // From input field
  if (from.length <= 1) {
    valid = false;
    let error = createErrorMsg('From location cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  } else if (!isWithinUS(from)) {
    valid = false;
    let error = createErrorMsg(`From location must be in the US`);
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  // To input field
  if (to.length <= 1) {
    valid = false;
    let error = createErrorMsg('To location cannot be blank');
    document.getElementsByClassName('error')[0].appendChild(error);
  } else if (!isWithinUS(to)) {
    valid = false;
    let error = createErrorMsg(`To location must be in the US`);
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
  if (start !== '' && end !== '' && !isValidTime(start, end)) {
    valid = false;
    let error = createErrorMsg('You cannot go back in time');
    document.getElementsByClassName('error')[0].appendChild(error);
  }
  return valid;
}
// Helper function to format image
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
// Helper function to upload image and retrieve a url for it
const submitImage = (e, setImages, images) => {
  e.preventDefault()
  const submittedImages = []
  let name = event.target.files[0].name
  getBase64(event.target.files[0], (result) => {
    var apiObject = { base64Img: result, nameGiven: name }
    axios.post('./images', apiObject)
      .then((apiCallResult) => {
        console.log('apiCallResult:', apiCallResult)
        submittedImages.push(apiCallResult.data.url)
        setImages(images.concat(submittedImages))
      })
      .catch(err => console.log('Failed to upload image:', err))
  })
}
// Helper function to fetch list of locations when user types into input
const fetchPlace = async (text) => {
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${process.env.REACT_APP_MAP_API_KEY}&cachebuster=1625641871908&autocomplete=true&types=place`
    );
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (err) {
    return { error: "Unable to retrieve places" };
  }
};

let tripDetails = {
  from: 'Houston, Texas, United States',
  to: 'Honolulu, Hawaii, United States',
  startDate: '2022-11-16',
  endDate: '2022-11-10',
  travelers: ['John Smith', 'Jane Doe'],
  tripCompleted: false,
  stars: 0,
  reviews: []
}

export {
  formatPhone,
  verifyEmail,
  getDropdownValue,
  formatTravelers,
  submitImage,
  fetchPlace,
  checkContactUsForm,
  checkTripPlannerForm,
  tripDetails
}