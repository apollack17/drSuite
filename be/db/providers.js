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

const createProvider = async ({username, password, name, jobCode}) => {
  try {
    const { rows: [provider] } = await client.query(`
      INSERT INTO providers(username, password, name, "jobCode")
      VALUES($1, $2, $3, $4)
      RETURNING *; 
    `, [username, password, name, jobCode])
    return {provider};
  } catch (error) {
    throw error;
  }
}

const updateProvider = async () => {

}


module.exports={
  createProvider,
  getProviders,
  updateProvider
}