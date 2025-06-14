const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};