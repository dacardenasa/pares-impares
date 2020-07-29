'use strict'

const template = () => {
  let templateString = '';
  let status = '';
  for (let i = 1; i <= 50; i++){
    status = (i % 2 === 0) ? 'Par' : 'Impar'; 
    templateString += `<p>${i} Soy ${status}!</p>`;
  }
  return templateString;
};

module.exports = template;