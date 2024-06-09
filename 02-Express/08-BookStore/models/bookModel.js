console.log("Book Model is working");

const mongoose = require('mongoose')
// const bookModel = new mongoose.Schema({
//     bookName: String,
//     authorName: String,
//     isbn: String,
//     price: Number,
//     desc: String,
//     poster: String    
// });

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: [true, "Book Name is Required !"],
        minLength: [4, "Book Name must have minimum 4 character"],
        trim: true,
        // uppercase: true,
        // lowercase: true,
        // maxLength: [15, "Max Book Length is Reached."],
        // unique: true,
        // select: true,
        // default: "Demo Text",
        // match: [/regex/, "invalid msg"]
    },
    authorName: {
        type: String,
        required: [true, "Author Name is Required !"],
        minLength: [4, "Author Name must have minimum 4 length"],
        trim: true,
    },
    isbn: {
        type: String,
        required: [true, "ISBN Number is Required !"],
        minLength: [4, "ISBN Number must have minimum 4 length"],
        uppercase: true
    },
    price: {
        type: Number,
        required: [true, "Price is required !"],
        trim: true,
    },
    desc: {
        type: String,
        required: [true, "Description of Book is required !"],
        trim: true
    },
    poster: {
        type: String,
        require: [true, "Enter Valid Poster Link"],
        trim: true
    }    
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel