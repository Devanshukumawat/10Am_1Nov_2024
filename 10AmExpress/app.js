const express = require("express");



const app = express();

// const body_parser = require("body-parser")

let apiRoute = require("./routes/user");

app.use(express.json())
app.use("/api", apiRoute);
app.set("view engine", "ejs");
app.use(express.static("public"));

let port = 5000;
app.listen(port, () => {
  console.log(`Server Run ${port} `);
});
