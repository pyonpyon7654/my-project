// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /users
router.post('/', async (req, res) => {
    try {
        const { name, address, postalCode, phone } = req.body;

        // Check if required fields are missing
        if (!name || !address || !postalCode || !phone) {
            return res.status(400).json({ message: 'Name, address, and postal code, phone are required' });
        }

        // Create a new user document
        const newUser = new User({
            name,
            address,
            postalCode,
            phone
        });

        // Save the user document to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /users
router.get('/', async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



module.exports = router;
