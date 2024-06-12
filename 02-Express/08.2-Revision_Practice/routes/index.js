const BookCollection = require('../models/bookModel')

var express = require('express');
var router = express.Router();

/* GET home page. */
// ✨ READ OPERATION ✨
router.get('/', async function (req, res, next) {
  const allBooks = await BookCollection.find({});

  res.render('index', { title: 'Express', data: allBooks });
});

// ✨ CREATE OPERATION ✨
router.post('/create', async function (req, res, next) {
  try {
    const newItem = new BookCollection(req.body);
    await newItem.save();
  } catch (err) {
    return res.json(err.message)
  }
  return res.redirect('/');
})

// ✨ UPDATE OPERATION - show data ✨
router.get('/update/:id', async function (req, res, next) {
  try {
    const specificBook = await BookCollection.findById(req.params.id)
    return res.render('update', { data: specificBook });
  } catch (err) {
    console.log(err.message)
  }
})

// ✨ UPDATE OPERATION - handle update form ✨
router.post('/update/:id', async function (req, res, next) {
  try {
    const bookId = req.params.id;
    await BookCollection.findByIdAndUpdate(bookId, req.body)
  } catch (err) {
    return res.send(err.message)
  }
  return res.redirect('/');
})

// ✨ DELETE OPERATION ✨
router.get('/delete/:id', async function (req, res, next) {
  try {
    await BookCollection.findByIdAndDelete(req.params.id);
  } catch (err) {
    return res.send(err.message)
  }
  return res.redirect('/');
})

module.exports = router;
