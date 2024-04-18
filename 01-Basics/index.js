// Output a simple message to the console
console.log("Hello from js file")

// Require the 'path' module, which provides utilities for working with file and directory paths
const path = require("path")
// Log the 'path' module object to the console
console.log(path);

// Set a variable 'x' to a file name
x = "indexes.html";
// Log the file extension of 'x' using the 'extname' method of the 'path' module
console.log("File extension:", path.extname(x)); // Output: .html

// Demonstrate path joining using the 'join' method of the 'path' module
// This will generate a file path by joining the provided arguments
console.log("a\b\c\d.js");
let y = path.join("a", "b", "c", "d.js")
console.log("Joined path:", y); // Output: a\b\c\d.js

// Log the directory path of the current module
console.log("Directory path:", __dirname); // Output: <current directory path>

// Log the file path of the current module
console.log("File path:", __filename); // Output: <current file path>

// Require the 'os' module, which provides operating system-related utilities
let os = require("os");
// Log the 'os' module object to the console
console.log(os);

// Log the hostname of the operating system
console.log("Hostname:", os.hostname());

// Log the platform of the operating system
console.log("Platform:", os.platform());

// Log information about the CPUs (central processing units) of the system
console.log("CPU information:", os.cpus());
