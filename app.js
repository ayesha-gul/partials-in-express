let express = require("express");
let app = express();
let port = 3000;
let path = require('path');
// to use partial require hbs template
//let hbs = require("hbs");

let templatePath = path.join(__dirname, "templates/views");
//let partialPath = path.join(__dirname,"../templates/partials");
// console.log(partialPath);


  app.set("view engine", "hbs");
  app.set('views', templatePath)
  //hbs.registerPartials(partialPath);

  app.get("/", (req,res) => {
      res.render("main")
  });
  app.listen(port, "127.0.0.1", () => {
      console.log("listening to the port no 3000!")
  })