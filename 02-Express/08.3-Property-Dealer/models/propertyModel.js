const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    imageURL: String,
    ownerName: String,
    propertyTitle: String,
    price: Number,
    contact: Number,
    address: String,
    description: String
})

const propertyModel = mongoose.model('propertyList', propertySchema);

module.exports = propertyModel

console.log("Schema & Model is Created !")