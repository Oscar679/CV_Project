// Importera beroenden
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
// Importera andra filer direkt från samma katalog (om behövs)
// const db = require('./dbConnection');  // dbConnection.js
// const mainFunction = require('./Main');  // Main.js
// const getContent = require('./Content');  // Content.js
// const getElemUtil = require('./ElemUtil');
// const getSectionChecker = require('./SectionChecker');

// Skapa Express-app
const app = express();
const port = 3000;

const path = require('path');

// Serve index.html from the public folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html
});

// Serve static files (CSS, JS) from the public directory
app.use(express.static('public'));  // Publickatalogen där HTML, CSS och JS ligger

// Skapa databasanslutning
const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Kolla om anslutningen till databasen lyckades
dbConnection.connect((err) => {
  if (err) {
    console.error('Fel vid anslutning till databasen:', err);
    return;
  }
  console.log('Ansluten till databasen!');
});

// Starta servern
app.listen(port, () => {
  console.log(`Servern kör på http://localhost:${port}`);
});