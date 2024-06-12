// ✨ Step 4: Define Mongoose Schema and Model ✨
const { name } = require('ejs')
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: [true, "Name is Required"],
        minLength: [3, "Name Must have 3 Minimum Character"],
    },
    desc: String,
})

const bookModel = mongoose.model('manual', bookSchema);

module.exports = bookModel;

console.log("Mongoose Schema and model is Working fine !");