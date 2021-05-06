const client = require("./client");



async function createService({serviceName, serviceCode, patientServiceId, date, timeIn}) {
  try {
    const { rows: [service] } = await client.query(`
      INSERT INTO services("serviceName", "serviceCode", "patientServiceId", date, "timeIn")
      VALUES($1, $2, $3, $4, $5) 
      RETURNING *;
      `, [serviceName, serviceCode, patientServiceId, date, timeIn])
    return {service};
  } catch (error) {
    throw error;
  }
}


module.exports={
  createService
}