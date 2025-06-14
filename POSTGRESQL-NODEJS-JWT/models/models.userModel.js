const db = require('../config/db');



const getAllUsers = async ()=> {
    try{
        const query = 'SELECT * FROM users'
        const result = await db.query(query);
        return result.rows;
    }
    catch(err) {
        console.error('Error',err)
    }
}

const createUser = async (name, email) => {
    const result = await db.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  };



module.exports= { getAllUsers, createUser };