
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/database10').then(() => {
    console.log('connected to mongo db');
}).catch((err) => {
    console.error(err)
})

