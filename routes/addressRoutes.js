const express = require('express');
const Address = require('../models/Address');
const User = require('../models/User');
const router = express.Router();

// Create a new address
router.post('/addresses', async (req, res) => {
  const { userId, address } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newAddress = new Address({
      user: user._id,
      address
    });

    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;