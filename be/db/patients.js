const client = require("./client");



async function createPatient({name, address, email, phone, dob, ssn, insuranceProviderName, planId, memberId, groupId, policyNumber, policyHolderName, payerId, planDate}) {
  try {
      const { rows: [patient] } = await client.query(`
          INSERT INTO patients(name, address, email, phone, dob, ssn, "insuranceProviderName", "planId", "memberId", "groupId", "policyNumber", "policyHolderName", "payerId", "planDate")
          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
          RETURNING *;
     `, [name, address, email, phone, dob, ssn, insuranceProviderName, planId, memberId, groupId, policyNumber, policyHolderName, payerId, planDate])
      return patient;
  } catch (error) {
      throw error;
  }
}


module.exports={
  createPatient
}