const client = require("./client");

const getPatients = async () => {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM patients
      `);
    return rows; 
  } catch (error) {
    throw error;
  }
}

const getPatientByName = async ({firstName, lastName}) => {
  try {
    const {
      rows: [patient]
    } = await client.query(`
      SELECT *
      FROM patients
      WHERE firstName=${firstName} && lastName=${lastName};
    `);
    // if (!admin) {
    //   return null;
    // } ADD THIS FOR ADMIN CONTROL
    return patient;
  } catch (error) {
    throw error;
  }
}

async function getServicesByPatient({ patientServiceId }) {
  try {
      const { rows } = await client.query(`
          SELECT * FROM services
          WHERE "patientServiceId"=$1;
      `, [patientServiceId]);
      return rows;
  } catch (error) {
      throw error;
  }
}

async function createPatient(firstName, lastName, middleInit, dob, ssn, streetAddress, city, state, zipcode, email, phone, insuranceProviderName, planId, memberId, groupId, policyNumber, policyHolderName, payerId, planDate) {
  try {
    const { rows: [patient] } = await client.query(`
      INSERT INTO patients("firstName", "lastName", "middleInit", "streetAddress", city, state, zipcode, email, phone, dob, ssn, "insuranceProviderName", "planId", "memberId", "groupId", "policyNumber", "policyHolderName", "payerId", "planDate")
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
      RETURNING *;
    `, [firstName, lastName, middleInit,  dob, ssn, streetAddress, city, state, zipcode, email, phone, insuranceProviderName, planId, memberId, groupId, policyNumber, policyHolderName, payerId, planDate])
      return patient;
  } catch (error) {
      throw error;
  }
}


module.exports={
  getPatients,
  getPatientByName,
  getServicesByPatient,
  createPatient
  
}