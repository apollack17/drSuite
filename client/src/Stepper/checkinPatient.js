
const BASE_URL = "http://localhost:3001"

const checkinPatient = async (firstName, middleInitial, lastName, street, city, state, zipcode, phoneNumber, email, dob, ssn) => {
  await fetch(`${BASE_URL}/api/patients/checkin`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  body: JSON.stringify({
    firstName: firstName,
    middleInitial: middleInitial,
    lastName: lastName,
    street: street, 
    city: city,
    state: state,
    zipcode: zipcode,
    phoneNumber: phoneNumber,
    email: email,
    dob: dob,
    ssn: ssn
  })
}).then(response => response.json())
  .then(result => {
    alert(result.message)
    console.log(result)
    alert('Patient checked in');
    window.location.reload(true);
  })
  .catch(console.error);
};

export default checkinPatient;