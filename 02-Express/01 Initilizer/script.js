// ---------- Express Server Setup ----------

// Import Express framework
const express = require('express') 

// Create an Express application instance
const app = express() 

// console.log(app) // Optional: Print the Express application object

// Start the server listening on port 3000
app.listen(3000, () => { 
    console.log("Server started at port 3000")
})
