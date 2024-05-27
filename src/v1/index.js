const express = require('express');
const letrasRoutes = require('./routes/LetrasRoutes');

const app = express();
const PORT = 3002;

// Middleware para parsear JSON en las solicitudes
app.use(express.json());


app.use('/', letrasRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});