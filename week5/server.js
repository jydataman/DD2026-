

const express = require('express');
const app = express();
const path = require("path"); 
const PORT = 3000;

const hbs = require("express-handlebars");

app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
//app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  let filePath = path.join(__dirname, "static", "homepage.html");
  res.sendFile(filePath);
});

//rendering templates
app.get("/home", (req, res) => {
  res.render("home", { title: "My Website's homepage" });
});

app.get("/about", (req, res) => {
  let filePath = path.join(__dirname, "static", "about.html");
  res.sendFile(filePath);
});

app.get("/images/sample.webp", (req, res) => {
  let filePath = path.join(__dirname, "static", "images", "sample.webp");
  res.sendFile(filePath);
});

// HTTP METHODS GET POST PUT DELETE

//GET
app.get("/api/items", (req, res) => {
res.send("this is a get response from /api/items");
});
//POST
app.post("/api/items", (req, res) => {
res.send("this is a post response from /api/items");
});
//PUT
app.put("/api/items/:id", (req, res) => {
res.send(`this is a put response from /api/items/`);
});
//DELETE
app.delete("/api/items/:id", (req, res) => {
res.send(`this is a delete response from /api/items/`);
});

// 3. Start the server (Must be the LAST thing in the file)
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000');
});
