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
