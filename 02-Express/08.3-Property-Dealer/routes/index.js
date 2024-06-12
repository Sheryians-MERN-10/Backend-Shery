var express = require('express');
var router = express.Router();

const PropertyCollection = require('../models/propertyModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Property Dealer' });
});

router.get('/create-property', function (req, res, next) {
  res.render('createProperty');
})

router.post('/create-property', async function (req, res, next) {
  try { 
    const newProperty = new PropertyCollection(req.body)
    await newProperty.save()
  } catch (err) {
    return res.render(err.message)
  }
  return res.redirect('/');
})

router.get('/viewAll', async function (req, res, next) {
  try {
    const allProperty = await PropertyCollection.find({});
    return res.render('viewAll', {data: allProperty})
  } catch (err) {
    return res.render(err.message)
  }
})

// UPDATE 
router.get('/update/:id', async function (req, res, next) {
  try {
    const specificProperty = await PropertyCollection.findById(req.params.id);
    return res.render('updateProperty', {data: specificProperty})
  } catch (err) {
    return res.send(err.message);
  }
})

router.post('/update/:id', async function (req, res, next) {
  try {
    await PropertyCollection.findByIdAndUpdate(req.params.id, req.body)
    return res.redirect('/viewALl')
  } catch (err) {
    res.send(err.message)
  }
})

// DELETE
router.get('/delete/:id', async function (req, res, next) {
  try {
    await PropertyCollection.findByIdAndDelete(req.params.id);
  } catch (err) {
    return res.send(err.message)
  }
  return res.redirect('/viewAll')
})

module.exports = router;
