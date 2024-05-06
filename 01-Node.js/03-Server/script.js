// Import the HTTP module
const http = require('http') 

// Create a server instance
const server = http.createServer() 

// Start the server listening on port 5000
server.listen(5000, () => { 
    console.log("Server is Listening...")
})
