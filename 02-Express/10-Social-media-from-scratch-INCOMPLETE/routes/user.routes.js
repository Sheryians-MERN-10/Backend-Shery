const express = require('express')

const router = express.Router();

router.get ("/",  (req, res, next) => {
    // res.send("Home Page");
    res.render("home");
})

module.exports = router;