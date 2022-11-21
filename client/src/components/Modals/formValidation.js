
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

export {
  formatPhone,
  verifyEmail,
  getDropdownValue,
  checkContactUsForm
}