const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const personajes = require('./datos.json');

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// Logger simple
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Servir frontend Angular estático (antes de las rutas API)
app.use(express.static(path.join(__dirname, 'public')));

// API REST
app.get('/api/personajes', (req, res) => {
  res.json(personajes);
});

app.get('/api/personajes/:name', (req, res) => {
  const nameParam = req.params.name.toLowerCase().replace(/\s+/g, '');
  const personaje = personajes.find(p =>
    p.nombre_personaje.toLowerCase().replace(/\s+/g, '') === nameParam
  );
  if (!personaje) {
    return res.status(404).json({ error: 'Personaje no encontrado' });
  }
  res.json(personaje);
});

app.post('/api/personajes', (req, res) => {
  const nuevo = req.body;
  const camposRequeridos = ['nombre_personaje', 'nombre_actor', 'apellido_actor', 'primera_aparicion', 'version'];
  const faltantes = camposRequeridos.filter(campo => !nuevo[campo]);
  if (faltantes.length > 0) {
    return res.status(400).json({ error: `Faltan campos requeridos: ${faltantes.join(', ')}` });
  }
  const nameParam = nuevo.nombre_personaje.toLowerCase().replace(/\s+/g, '');
  const existe = personajes.find(p =>
    p.nombre_personaje.toLowerCase().replace(/\s+/g, '') === nameParam
  );
  if (existe) {
    return res.status(409).json({ error: 'Personaje ya existente' });
  }
  res.status(201).json({ message: 'Personaje añadido con éxito (simulado)' });
});

app.put('/api/personajes/:name', (req, res) => {
  const nameParam = req.params.name.toLowerCase().replace(/\s+/g, '');
  const actualizado = req.body;
  const personaje = personajes.find(p =>
    p.nombre_personaje.toLowerCase().replace(/\s+/g, '') === nameParam
  );
  if (!personaje) {
    return res.status(404).json({ error: 'Personaje no encontrado' });
  }
  const camposRequeridos = ['nombre_personaje', 'nombre_actor', 'apellido_actor', 'primera_aparicion', 'version'];
  const faltantes = camposRequeridos.filter(campo => !actualizado[campo]);
  if (faltantes.length > 0) {
    return res.status(400).json({ error: `Faltan campos requeridos: ${faltantes.join(', ')}` });
  }
  res.json({ message: `Personaje ${actualizado.nombre_personaje} actualizado correctamente (simulado)` });
});

// Manejar todas las demás rutas con el index.html para Angular routing
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

