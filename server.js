const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// Ruta para recibir registros
app.post('/register', (req, res) => {
    const { name, email, phone } = req.body;

    if(!name || !email){
        return res.status(400).send('Nombre y correo son obligatorios');
    }

    const entry = `Nombre: ${name}, Email: ${email}, Teléfono: ${phone || ''}\n`;
    fs.appendFile('clients.txt', entry, (err) => {
        if(err){
            console.error(err);
            return res.status(500).send('Error al guardar registro');
        }
        res.send('Registro exitoso');
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});