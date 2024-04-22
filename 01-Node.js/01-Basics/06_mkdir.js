const fs = require('fs')
const path = require('path')

// fs.mkdir('./a/assets', (err) => {  // 🚨💀
// Create 'assets' directory asynchronously
fs.mkdir('./assets', (err) => {
    if (err) throw err;
    console.log("Directory Created !")
})

// Create 'images' directory inside 'assets' synchronously
fs.mkdirSync('./assets/images');
console.log("Directory Created (Sync Method)");

// Write content to a file named 'style.css' inside the 'assets/images' directory
fs.writeFileSync(
    path.join(__dirname, "assets", "images", "style.css"), "Styling File"
);