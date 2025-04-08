// Importera beroenden
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

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

// API Endpoint för att hämta kurser
app.get('/api/COURSE', (req, res) => {
  const query = `SELECT * FROM COURSE`;
  dbConnection.query(query, (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send('Database query error');
      return;
    }
    res.json({ info: result });  // Skickar tillbaka: { info: [...] }
  });
});

app.get('/test', (req, res) => {
  res.send('API is working!');
});

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Serve static files (CSS, JS) from the public directory
app.use(express.static('public'));  // Publickatalogen där HTML, CSS och JS ligger

// Serve index.html from the public folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html
});

// Starta servern
app.listen(port, '0.0.0.0', () => {
  console.log(`Servern kör på http://localhost:${port}`);
});