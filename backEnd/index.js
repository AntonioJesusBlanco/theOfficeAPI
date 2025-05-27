const express = require('express');
const cors = require('cors');
const app = express();
const datos = require('./datos.json');

app.use(cors());

app.get('/api/usuarios', (req, res) => {
  res.json(datos);
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
