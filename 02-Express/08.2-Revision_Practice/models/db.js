// ✨ Step 1: Generate an Express App ✨

// ✨ Step 2: Install Required Dependencies- npm i mongoose ✨

// ✨ Step 3: Set Up MongoDB Connection ✨
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Practice').then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Connection Error !", err.mesage);
})
