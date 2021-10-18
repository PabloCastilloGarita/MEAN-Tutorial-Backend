const express = require('express');
const conectarDB = require('./config/db');
// se crea el servidor
const app = express();

//conectamos a la BD
conectarDB();

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log("El servidor esta corriendo");
})