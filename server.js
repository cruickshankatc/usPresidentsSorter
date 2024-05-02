const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Example route to fetch data from the database
app.get("/presidents", (req, res) => {
    pool.query("SELECT * FROM presidents", (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(results);
    });
});

// Serve presidents.js from its current location
app.get("/presidents.js", (req, res) => {
    res.sendFile(path.join(__dirname, 'presidents.js'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});