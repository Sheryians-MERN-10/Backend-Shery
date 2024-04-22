const fs = require('fs'); // Import the fs module

// Rename the directory "./assets" to "./newAssest" synchronously
fs.renameSync("./assets", "./newAssest");

// Rename the file "./x.txt" to "./newAssest/x.txt" synchronously
fs.renameSync("./x.txt", "./newAssest/x.txt");

console.log("rename / relocated"); // Log a message indicating that renaming/relocation is done

// 🚨⭐ before using fs.rmdir(), ensure the directory is empty by removing all files and subdirectories within it.