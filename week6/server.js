const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const hbs = require("express-handlebars");

// 1. Load Data
let directory = require('./data/directory.json');

// 2. Configure Handlebars
app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// 3. Serve Static Files (Corrected to 'static')
app.use(express.static(path.join(__dirname, 'static')));

// 4. Routes
app.get("/", (req, res) => {
    // This tells Express to use the home.handlebars template
    res.render("home", { title: "Home Page" });
});

// A) LIST PAGE
app.get('/directory', (req, res) => {
  res.render('directory', { people: directory });
});

// B) DETAILS PAGE
app.get('/directory/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = directory.find(p => p.id === id);
  res.render('person', { person });
});

// C) RUNTIME ADD
app.get('/person/add', (req, res) => {
  directory.push({
    id: parseInt(req.query.id),
    first_name: req.query.first_name,
    last_name: req.query.last_name,
    email: req.query.email,
    address: req.query.address,
    city: req.query.city,
    state: req.query.state,
    zip: req.query.zip,
  });
  res.send('Person added to memory! Go check /directory to see them.');
});

// 5. Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});