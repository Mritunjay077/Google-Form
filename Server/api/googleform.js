const express = require('express');
const router = express.Router();
const db = require('../config/db');  // Assuming db.js handles MySQL connection

// Insert form data
router.post('/insert', (req, res) => {
    const {
        name,
        rollno,
        email,
        phone,
        hostelstatus,
        institute,
        course,
        semester,
        section,
        password
    } = req.body;

    // Check if all required fields are provided
    if (!name || !rollno || !email || !phone || !hostelstatus || !institute || !course || !semester || !section || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // SQL query to insert data into the database
    const query = 'INSERT INTO web_user (name, rollno, email, phone, hostelstatus, institute, course, semester, section, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [name, rollno, email, phone, hostelstatus, institute, course, semester, section, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database insertion failed' });
        }
        res.json({ message: 'Successfully Registered' });
    });
});

// Get all user data for the dashboard
router.get('/users', (req, res) => {
    const query = 'SELECT * FROM web_user';  // Query to get all user data
    db.query(query, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(result); // Return the result as JSON
    });
});

// Get user data by ID for the view page
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM web_user WHERE id = ?';  // Query to get user details by id

    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (result.length > 0) {
            res.json(result[0]); // Return the first user if found
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    });
});

module.exports = router;
