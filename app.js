const express = require('express');
const app = express();
const template = require('./template');

app.get("/paragraphs", (req, res) => {
  // const templateString = template();

  let templateString = '';
  let status = '';
  for (let i = 1; i <= 50; i++){
    status = (i % 2 === 0) ? 'Par' : 'Impar'; 
    templateString += `<p>${i} Soy ${status}!</p>`;
  }
  // return templateString;

  res.send(templateString);
});

app.listen(3000, () => console.log("Listening on port: 3000"));