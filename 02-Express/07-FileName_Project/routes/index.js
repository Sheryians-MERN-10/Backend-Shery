let path = require('path')
let fs = require('fs');

var express = require('express');
const { fstat } = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(path.join(__dirname, ".."))
  const filePath = path.join(__dirname, "..", "public", "uploads")
  const files = fs.readdirSync(filePath);
  console.log(files)

  files.forEach((elem) => {
    console.log(elem)
  })

  res.render('index', { title: 'Express', files });
});

router.post('/create', function (req, res, next) {
  // console.log(path.dirname(__dirname))
  var currentWorkingFolder = path.join(__dirname, '..')
  // console.log(currentWorkingFolder)
  // console.log(path.join(currentFolder, 'public', 'uploads', req.body.fileName+req.body.selectExtension))
  let newFileName = req.body.fileName + req.body.selectExtension;
  let finalPath = path.join(currentWorkingFolder, 'public', 'uploads', newFileName)
  
  
  fs.writeFileSync(finalPath, "");
  // res.redirect("/")

  // PRINT PATH TO THE CONSOLE 
  console.log(finalPath);

  res.render('create', { finalPath, newFileName })
})

module.exports = router;
