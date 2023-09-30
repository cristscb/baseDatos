const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    identificacion: Number,
    imagen: String,

});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
