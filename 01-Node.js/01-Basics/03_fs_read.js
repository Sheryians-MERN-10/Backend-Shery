const fs = require("fs")

// asynchronous funtion
fs.readFile("./notes.txt", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
})

// synchronous function
let data = fs.readFileSync("./notes.txt", "utf-8");
console.log(data)
