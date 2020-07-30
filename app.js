const express = require('express');
const app = express();
const oddEven = require('./odd-even');

app.set('view engine', 'pug');
app.set('views', './public/views')

app.get("/", (req, res) => {
  const paragraphs = oddEven();
  res.render('template', { paragraphs: paragraphs });
});

app.listen(3000, () => console.log("Listening on port: 3000"));