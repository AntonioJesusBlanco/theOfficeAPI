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
app.get('/api/personajes/:name', (req, res) => {
  const nameParam = req.params.name.toLowerCase().replace(/\s+/g, '');
  const personaje = personajes.find(p =>
    p.nombre_personaje.toLowerCase().replace(/\s+/g, '') === nameParam
  );

  if (!personaje) {
    return res.status(404).json({ error: 'Personaje no encontrado' });
  }

  const characterData = {
    actor: `${personaje.nombre_actor} ${personaje.apellido_actor}`,
    character: personaje.nombre_personaje,
    firstAppearance: personaje.primera_aparicion,
    quotes: personaje.frases.map(f => f.texto),
    image: personaje.foto
  };

  res.json(characterData);
});
// POST - Simular añadir personaje
app.post('/api/personajes', (req, res) => {
  const nuevo = req.body;

  // Validación simple (puedes ajustar)
  if (!nuevo || !nuevo.character || !nuevo.actor || !nuevo.image) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  // Solo simula éxito, no modifica datos
  res.status(201).json({ message: 'Personaje añadido con éxito (simulado)' });
});

// PUT - Simular actualizar personaje
app.put('/api/personajes/:name', (req, res) => {
  const nameParam = req.params.name.toLowerCase().replace(/\s+/g, '');
  const actualizado = req.body;

  // Validación básica
  if (!actualizado || !actualizado.character || !actualizado.actor || !actualizado.image) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  // Simula personaje encontrado y actualizado
  // (O podrías simular error si quieres, según nombre)
  res.json({ message: `Personaje ${nameParam} actualizado correctamente (simulado)` });
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
