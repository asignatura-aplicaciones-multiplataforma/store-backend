const express = require('express');
const app = express();

app.use(express.json()); // Para leer JSON en requests

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando 🚀');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});