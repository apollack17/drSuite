//what does checking in look like. 
// when a patient checks in they create a patient file 
//the admin then adds the info from insurance from the ins card photo and triggers a checkin for a service


import {useState} from 'react'

const Checkin = () => {
  const firstName, middleInit, lastName, streetAddress, city, state, zipcode, email, phone, dob, ssn = '';


  return 
    <div className="checkIn">
      
      Patient Name  
        First Name
        Middle Initial
        Last Name
      Contact Information
        Street
        city
        state
        zipcode
        email
        phone
      Personal Information
        dob
        ssn

        INSUR capture
    </div>
}