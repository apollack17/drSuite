const client = require("./client");



async function createProvider({username, password, name, jobCode}) {
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


module.exports={
  createProvider
}