const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log(file);
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        const modifiedFileName = Date.now() + path.extname(file.originalname);   
        cb(null, modifiedFileName)
    }
})

const upload = multer({ storage: storage });

module.exports = upload;
