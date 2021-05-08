const client = require("./client");

const getProviders = async () => {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM providers
      `);
    return rows; 
  } catch (error) {
    throw error;
  }
}
///dont forget to remove password
const createProvider = async ({username, password, firstName, lastName, jobCode}) => {
  try {
    const { rows: [provider] } = await client.query(`
      INSERT INTO providers(username, password, "firstName", "lastName", "jobCode")
      VALUES($1, $2, $3, $4, $5)
      RETURNING *; 
    `, [username, password, firstName, lastName, jobCode])
    return {provider};
  } catch (error) {
    throw error;
  }
}


//RESET THIS QUERY AND TEST
const updateProvider = async (id, username, password, jobCode ) => {
    try {
      const {
        rows: [provider],
      } = await client.query(
        `
        UPDATE providers 
        WHERE "id" = $1
        SET username = $2
        SET password = $3
        SET "jobCode" = $4;
      `,
        [username, password, jobCode]
      );
      delete provider.password
      return provider;
    } catch (error) {
      throw error;
    }
}


module.exports={
  createProvider,
  getProviders,
  updateProvider
}