const express = require('express');
const cors = require('cors');
const app = express();
const personajes = require('./datos.json');

app.use(cors());

app.get('/api/personajes', (req, res) => {
  res.json(personajes);
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
