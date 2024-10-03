const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  const { name } = req.body;

  try {
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;