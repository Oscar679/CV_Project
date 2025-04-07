require("dotenv").config({ path: "./.env" });

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
})

// Test the connection and log the DB_HOST variable
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// Log the DB_HOST to verify it's loaded correctly
console.log('DB_HOST:', process.env.DB_HOST);