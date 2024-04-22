const fs = require('fs')

// fs.writeFile("./notes.txt", "enter text here...", () => {
fs.writeFile("./notes.txt", "enter text here...", (err) => {
    if (err) {
        // throw err;
        throw new Error("err");
    }
    console.log("File Created - using Async method")
});

fs.writeFileSync("./notes2.txt", "kuch bhi..")
console.log("File Created - Sync Method")

console.log("LEARNING FILE SYSTEM")
