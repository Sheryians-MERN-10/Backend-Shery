const express = require('express');

const app = express();
app.listen(3000);

// Middleware
app.use((req, res, next) => {
    console.log("Time: ", Date.now())
    req.newVal = 500;
    next();
})

// Routes
app.get('/', (req, res, next) => {
    res.send("HOME PAGE" + req.newVal);
})

app.get('/about', (req, res, next) => {
    res.send("This is About Page");
})
