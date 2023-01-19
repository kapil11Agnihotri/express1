const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In a Middleware");
  next();
});
app.use((req, res, next) => {
  console.log("In a second Middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
