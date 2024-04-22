const fs = require('fs');

// Asynchronous Function
fs.unlink("./abc.txt", (err) => {
    if (err)
        throw err;
    console.log("File Deleted.")
})

// Synchronuos Function
fs.unlinkSync("./notes.txt");
console.log("File Deleted - using Sync method")

/*
- Always keep fs sync method in try catch block
*/