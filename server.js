// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3004;

// Servir los archivos estáticos desde la carpeta build
app.use(express.static(path.join(__dirname, 'build')));

// Manejar todas las solicitudes con la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Escuchar en todas las interfaces de red
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
