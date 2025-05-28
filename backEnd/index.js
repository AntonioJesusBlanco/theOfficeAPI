const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const personajes = require('./datos.json');

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/api/personajes', (req, res) => {
  res.json(personajes);
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
