const agregarMensaje = (req, res) => {
    const {mensaje}  = req.body;
    const longitud = mensaje.length;
    res.json({ mensaje ,longitud });
};

const mostrarMensaje =(res) => {
    res.json({mensaje: "holis"});
}

module.exports = {
    agregarMensaje,
    mostrarMensaje
};
