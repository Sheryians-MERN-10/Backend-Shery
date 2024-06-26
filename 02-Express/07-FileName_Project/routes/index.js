let path = require('path')
let fs = require('fs');

var express = require('express');
const { title } = require('process');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(path.join(__dirname, ".."))
  const folderPath = path.join(__dirname, "..", "public", "uploads")
  const files = fs.readdirSync(folderPath);
  console.log(files)

  files.forEach((fileName, i) => {
    console.log(fileName, i)
  })

  res.render('index', { title: 'Express', files, fileContent: "", fileName: "" });
});

router.post('/create', function (req, res, next) {
  try {
    
    // console.log(path.dirname(__dirname))
    var currentWorkingFolder = path.join(__dirname, '..')
    // console.log(currentWorkingFolder)
    // console.log(path.join(currentFolder, 'public', 'uploads', req.body.fileName+req.body.selectExtension))
    let newFileName = req.body.fileName;
    console.log("FILE-NAME", newFileName)
    let newFileContent = req.body.fileDesc;
    console.log("FILE-CONTENT:", newFileContent);
    let finalPath = path.join(currentWorkingFolder, 'public', 'uploads', newFileName)
    
    // fs.writeFileSync(finalPath, "");
    fs.writeFileSync(finalPath, newFileContent);

    // res.redirect("/")
    // ------- Task (13) -------
    res.redirect(`/${newFileName}`)
    
    // PRINT PATH TO THE CONSOLE 
    console.log(finalPath);
  } catch (err) {
    res.send(err)
  }

  // res.render('create', { finalPath, newFileName })
})

// router.get('/file/:filename', function (req, res, next) {
//   console.log(req.params.filename)
//   // res.send(req.params.filename)
//   res.render('file', {data: req.params.filename})
// })

// --------------- READ THE CONTENT OF THE FILE ------
router.get('/:fileName', function (req, res, next) {
  const folderPath = path.join(__dirname, "..", "public", "uploads")
  const files = fs.readdirSync(folderPath);

  let filePath = path.join(__dirname, "..", "public", "uploads", req.params.fileName);
  let fileContent = fs.readFileSync(filePath, "utf-8")

  // console.log(fileContent)
  // res.render('ShowContent', {title: 'FileContent', fileContent, fileName: req.params.fileName})
  res.render('index', { title: 'FileContent', files, fileContent, fileName: req.params.fileName })
})

router.get('/delete/:fileName', function (req, res, next) {
  let filePath = path.join(__dirname, "..", "public", "uploads", req.params.fileName)
  // console.log(filePath)  
  console.log("PARAMS", req.params.fileName)
  fs.unlinkSync(filePath)
  // res.send("filePath" + filePath)
  res.redirect('/')
})

router.post('/update/:fileName', function (req, res, next) {
  var currentWorkingFolder = path.join(__dirname, '..')
  let newFileName = req.params.fileName;
  console.log("NEW FILE NAME:", newFileName);
  let newFileContent = req.body.updatedData;
  let finalPath = path.join(currentWorkingFolder, 'public', 'uploads', newFileName)

  fs.writeFileSync(finalPath, newFileContent);

  // res.send(req.body.updatedData)
  res.redirect(`/${req.params.fileName}`)

})

module.exports = router;