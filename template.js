'use strict'

const template = () => {
  let templateString = '';
  let status = '';
  for (let i = 1; i <= 50; i++){
    status = (i % 2 === 0) ? 'par' : 'impar'; 
    templateString += `<h1>${i} Soy ${status}!</h1>`;
  }
  return templateString;
};

module.exports = template;