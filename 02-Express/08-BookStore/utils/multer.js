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

const fileFilter = function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true)
    } else {     
        cb(new Error("Error: Images Only"));
    }

    console.log("mimetype: ", mimetype);
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;
