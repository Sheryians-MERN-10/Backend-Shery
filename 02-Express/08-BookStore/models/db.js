const mongoose = require('mongoose');

const url = `${process.env.MONGO_URL}${process.env.DB_NAME}`;

console.log("Mongo URL is : ", url);

// mongoose.connect(`mongodb://127.0.0.1:27017/database10`).then(() => {
    mongoose.connect(url).then(() => {
    console.log('connected to mongo db');
}).catch((err) => {
    console.error(err)
})
