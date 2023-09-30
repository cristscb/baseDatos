const express = require('express');
const cors = require('cors');
const multer = require("multer");
const fs = require('fs');
const mongoose = require('./db'); // Importa la configuración de la base de datos
const bookRouter = require('./Bookrouter');
const path = require("path");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/uploads",express.static("uploads"));


// Rutas
app.use('/books', bookRouter);
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

