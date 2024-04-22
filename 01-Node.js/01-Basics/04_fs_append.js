const fs = require("fs")

// asynchronous funtion
fs.appendFile("./notes.txt", " daaaataaa...", (err) => {
    if (err)
        throw err;

    console.log("Data appended - (Async)")
})

/* Synchronous version of append */
fs.appendFileSync("./notes.txt", "helloo");
console.log("appended")
