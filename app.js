const express = require('express');
const app = express();
const template = require('./template');

app.get("/paragraphs", (req, res) => {
  const templateString = template();
  res.send(templateString);
});

app.listen(3000, () => console.log("Listening on port: 3000"));