# Imp Points

- Port is similar to domain
- Servers are computer that are 24 hr ON

Different language & their servers:

- Java - tomcat
- Php - apache
- Django - khud se banaa hota hai
- Node - fastest server

# Installation - Basic Template

npm i --save express

MVC:(Model Views Controller)
MVC architecture with Express:

Routing: Handled by controllers in JavaScript files.
Views: Utilize EJS (Embedded JavaScript) templates.
Database Interaction: Managed by Models, typically interfacing with MongoDB.
ejs: embedded javaScript

FOLDER STRUCTURE/:

- routes
- views (Contains EJS view templates.)
- public (Houses controller JavaScript files.)
  - images
  - styles
  - javascripts

# Express Boiler Plate

npm i -g express-generator

express appname --view=ejs
cd appname
npm i
code .

npm start

<h1><%= title %></h1>

<%- include("header) %>
<%- include("partials/header") %>
<%- include("partials/nav") %>

# -------

for get request - req.query
for post request - req.body

- Manually url likhne pr get route hi open hoga
- Anchor tag & redirect mein hamesa - get route pe jaayega
- Dynamic route ka data show karne ke liye: req params

# ----------

res.send()
res.json()
res.render()
res.redirect()

# How to comment out in ejs file

    <% /* %>
        <h2>Name: <%= userName %> </h2>
        <h2>Address: <%= address %> </h2>
    <% */ %>

# Dynamic Route
<form action="/delete/<%= data %>" method="get">

router.get('/delete/:fileName', function (req, res, next) {


<!-- -------- DATABASE --------  -->

# Install

-  Mongodb Compass
-  Shell
- Mongodb Atlas

# Command:

mongo  sh

# FOlder for Database is 'models'
/models/db.js

# db.js

```js
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/dbname").then(()=>{
  console.log("Database Connected !")
}).catch((err)=>{

})
```

# app.js  (starting file jo chalegi)
require('./models/db')

const Book = require('./models/bookModel') // 🔥

# bookModel.js or bookSchema.js // 🔥
```
console.log("Book Model is working");

const mongoose = require('mongoose')
const bookModel = new mongoose.Schema({
    poster: String,
    name: String,
    author: String,
    isbn: String,
    price: Number,
    description: String
});

const bookCollection = mongoose.model("book", bookModel);

module.exports = bookCollection;
```