var express = require('express');
var router = express.Router();

const BookCollection = require('../models/bookModel');
const bookCollection = require('../models/bookModel');
const { checkPrice } = require('../utils/middlewares')
const upload = require('../utils/multer');

const fs = require('fs');
const path = require('path');

const {sendMail} = require('../utils/sendMail');

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
// router.post('/create-book', , async function (req, res, next) {
// router.post('/create-book', checkPrice, async function (req, res, next) {
router.post('/create-book', upload.single('poster'), async function (req, res, next) {
  try {
    const newBook = await new BookCollection({ ...req.body, poster: req.file.filename });
    await newBook.save();
    console.log("POSTER File Name: " + req.filename)
    console.log("book created")
    console.log("File Name: " + req.file.originalname)
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

router.post('/update-book/:id', upload.single('poster'), async function (req, res, next) {
  const bookId = req.params.id;
  try {
    const updatedBook = { ...req.body };
    if (req.file) {
      updatedBook.poster = req.file.filename;
      // console.log("Updated book poster ", updatedBook.poster)
      const imagePath = path.join(__dirname, `../public/images/${req.body.oldimage}`)
      // console.log(req.body.oldPosterName);

      console.log(req.body.oldimage);

      fs.unlinkSync(imagePath)
    }

    await BookCollection.findByIdAndUpdate(bookId, req.body);
    await BookCollection.findByIdAndUpdate(bookId, updatedBook);
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
    const specificBook = await BookCollection.findByIdAndDelete(bookId);
    
    const posterPath = path.join(__dirname, `../public/images/${specificBook.poster}`)
    if (fs.existsSync(posterPath)) { 
      // console.log(posterPath);
      fs.unlinkSync(posterPath);
    } else {
      console.error("Book Data Deleted, but Poster Image File NOT FOUND !");
    }
    
  } catch (err) {
    return res.render(err.message);
  }
  return res.redirect('/library');
})

router.get('/about', function (req, res, next) {
  
  res.render('about', { title: 'About Page',  })
})

// 🔁 --------  HANDLE NODEMAILER -------- 🔁
router.post('/send-mail', function (req, res, next) {
  sendMail(req, res);
})

module.exports = router;
