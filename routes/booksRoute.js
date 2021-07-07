const router = require('express').Router();
const deleteBook = require('../controller/books/deleteBook');
const fetchABook = require('../controller/books/getAbook');
const getBooks = require('../controller/books/getAllBooks');
const updateBook = require('../controller/books/updateBook');

const createBook = require('./../controller/books/createBook');

router.post('/', createBook);

router.get('/', getBooks)

router.get('/:id',fetchABook)

router.put('/:id',updateBook)

router.delete('/:id',deleteBook)

module.exports = router;