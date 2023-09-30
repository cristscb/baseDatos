const express = require('express');
const router = express.Router();
const Book = require('./models/Book');
const multer = require("multer")  


// Define las rutas get
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);  
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post('/', async (req, res) => {
    try {
        const newBook = new Book(req.body); 
        const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


    // Ruta GET para consultar por id
router.get('/:_id', async (req, res) => {
    try {
      const book = await Book.findById(req.params._id);
  
      if (!book) {
        return res.status(404).json({ message: 'no se encuentra el dato' });
      }
  
      res.json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;






