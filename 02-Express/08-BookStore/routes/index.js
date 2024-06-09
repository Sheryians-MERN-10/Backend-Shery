var express = require('express');
var router = express.Router();

const BookCollection = require('../models/bookModel');
const bookCollection = require('../models/bookModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Book Store' });
});

// 🔁 --------  READ OPERATION -------- 🔁

router.get('/library', async function (req, res, next) {
  // let data = [
  //   {
  //     title: "Physics",
  //     desc: "A comprehensive guide to the fundamentals of physics, covering classical mechanics, electromagnetism, and thermodynamics."
  //   },
  //   {
  //     title: "Organic Chemistry",
  //     desc: "An in-depth look at the principles of organic chemistry, including reaction mechanisms and the structure of organic compounds."
  //   }
  // ];

  const allBooks = await BookCollection.find({});
  console.log(allBooks);

  res.render('library', { title: 'Library', data: allBooks })
})

// 🔁 --------  CREATE operation - display form -------- 🔁
router.get('/create-book', function (req, res, next) {
  res.render('createBook', { title: "Create Book" })
})
// 🔁 --------  CREATE operation - handle form submission -------- 🔁
router.post('/create-book', async function (req, res, next) {
  try {
    const newBook = await new BookCollection(req.body);
    await newBook.save();
    console.log("book created")
    // console.log(newBook)
  } catch (err) {
    return res.send(err.message);
  }
  return res.redirect('library')
})

// 🔁 --------  READ OPERATION -------- 🔁
router.get('/details/:id', async function (req, res, next) {
  const bookId = req.params.id;
  const specificBooks = await BookCollection.findById(bookId);
  console.log(specificBooks)
  res.render('detailsBook', { title: "Book Details", data: specificBooks })
})

// 🔁 --------  UPDATE OPERATION -------- 🔁
router.get('/update-book/:id', async function (req, res, next) {
  const bookId = req.params.id;
  const specificBook = await BookCollection.findById(bookId);
  res.render('updateBook', { title: "Update - Book", data: specificBook })
})

router.post('/update-book/:id', async function (req, res, next) {
  const bookId = req.params.id;
  try {
    const specificBook = await BookCollection.findByIdAndUpdate(bookId, req.body)
  } catch (err) {
    return res.render(err.message);
  }
  return res.redirect(`/details/${bookId}`)
})

// 🔁 --------  DELETE OPERATION -------- 🔁
router.get('/delete/:id', async function (req, res, next) {
  const bookId = req.params.id;
  try {
    // const specificBook = await BookCollection.deleteOne({_id: bookId})
    const specificBook = await BookCollection.findByIdAndDelete(bookId)
  } catch (err) {
    return res.render(err.message);
  }
  return res.redirect('/library');
})

router.get('/about', function (req, res, next) {
  let data = [
    {
      heading: "Welcome to Bookstore",
      content: "Welcome to Bookstore, where the love for books and community converge to create an exceptional literary experience. Established in 204, we have dedicated ourselves to nurturing the joy of reading and fostering a vibrant community of book lovers."
    },
    {
      heading: "Our Story",
      content: "Our story began with a simple dream: to create a sanctuary for readers and writers alike. From our modest beginnings as a small, independent bookstore, we have grown into a cherished destination for book enthusiasts. Thanks to the unwavering support of our loyal customers and the commitment of our passionate team, Bookstore has become more than just a bookstore — it’s a community hub where stories come to life."
    }
  ]
  res.render('about', { title: 'About Page', data })
})

module.exports = router;
