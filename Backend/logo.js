const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Save generated logo
router.post('/save', (req, res) => {
    const { user_id, description, image_url } = req.body;

    db.query('INSERT INTO logos (user_id, description, image_url) VALUES (?, ?, ?)',
    [user_id, description, image_url], (err, result) => {
        if (err) throw err;
        res.status(201).json({ message: 'Logo saved successfully' });
    });
});

// Get user's logos
router.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    db.query('SELECT * FROM logos WHERE user_id = ?', [userId], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
