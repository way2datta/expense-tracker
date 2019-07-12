const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/login", (req, res) => {
  if (!req.body.email) {
    res.status(400).send({ errors: { password: "Email is required" } });
  }
  if (!req.body.password) {
    res.status(400).send({ errors: { password: "Password is required" } });
  }
  res.status(200).send(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
