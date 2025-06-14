
const user = require('../models/models.userModel');



exports.getUsers = async (req, res) => {

     try {
        const users = await user.getAllUsers();
        return res.status(200).json({users:users})
        
     } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
        
     }
}

exports.addUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      const newUser = await user.createUser(name, email);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };