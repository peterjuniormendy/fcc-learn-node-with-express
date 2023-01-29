let express = require("express");
let app = express();

// SERVE STATIC ASSETS
app.use("/public", express.static(__dirname + "/public"));

// LOG TO THE NODE CONSOLE
console.log("Hello World");

// EXPRESS ROUTE THAT SENDS A FILE AS A RESPONCE

app.get("/", function (req, res) {
  //   res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
