// Title: Generating HTML, CSS, and JS Boilerplate Files
const htmlBoiler = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <script src="script.js"></script>
</body>
</html>`;

const cssBoiler = `*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
html,body{
height: 100%;
width: 100%;
background-color: green;
}`;

const jsBoiler = `document.body.innerHTML = "Hello World for js";
console.log("Demo JS file")`;

// Importing required modules
const fs = require('fs');
const path = require('path');
const os = require('os');

// Getting the user's home directory and desktop path
let home = os.homedir();
const desktopPath = path.join(os.homedir(), 'Desktop');

// Getting the current date for folder naming
const date = new Date();
const _suffix = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
const folderPath = path.join(desktopPath, `BoilerPlate_${_suffix}`);

// Checking if the folder already exists, if not, create it
if (!fs.existsSync(folderPath)) {
    try {
        fs.mkdir(path.join(folderPath), (err) => {
            if (err) throw err;
            console.log(`"Website" - Folder Created`);
        });
    } catch (err) {
        console.log(err);
    }
}

// Writing HTML, CSS, and JS files to the folder
// Writing HTML file
fs.writeFile(path.join(folderPath, 'index.html'), htmlBoiler, (err) => {
    if (err) throw err;
    // console.log("Content Added to HTML File");
});

// Writing CSS file
fs.writeFile(path.join(folderPath, 'style.css'), cssBoiler, (err) => {
    if (err) throw err;
    // console.log("Content Added to CSS File");
});

// Writing JS file
fs.writeFile(path.join(folderPath, 'script.js'), jsBoiler, (err) => {
    if (err) throw err;
    // console.log("Content Added to JS File");
});

// Logging confirmation message with folder path
console.log("Your Boiler Plate is ready!");
console.log(`You can access the folder from ${folderPath}`);
