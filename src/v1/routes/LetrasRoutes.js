
const express = require('express');
const letrasController = require('../controllers/LetrasController');

const router = express.Router();

router.get('/', letrasController.mostrarMensaje)
router.post('/mensaje', letrasController.agregarMensaje); 

module.exports = router;
