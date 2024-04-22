const fs = require('fs')

const dirs = fs.readdirSync("./assets");
console.log(dirs)

fs.readdir("./assets", (err, files) => {
    if (err) throw err;
    console.log(files)
})