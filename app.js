const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema = new mongoose.Schema({
  name: String,
});
const items = mongoose.model("task", trySchema);
const todo = new item({
  name: "learn dsa",
});
// var items = [];
// var example = "working";
// app.get("/", function (req, res) {
//   res.render("list", { ejes: items });
// });

// app.post("/", function (req, res) {
//   var item = req.body.ele1;
//   items.push(item);
//   res.redirect("/");
// });

// app.listen(8000, function () {
//   console.log("Server started");
// });
