const db = require('../db');

exports.getAllUsers = async (req, res) => {
    try {
      const users = await db('users').findAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users', error: err });
    }
  };
  
  exports.getUserById = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching user', error: err });
    }
  };
  
  exports.createUser = async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: 'Error creating user', error: err });
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await user.update(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Error updating user', error: err });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await user.destroy();
      res.json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting user', error: err });
    }
  };