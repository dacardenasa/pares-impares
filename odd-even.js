'use strict'

const oddEven = () => {
  let paragraphs = [];
  for (let i = 1; i <= 50; i++){
    paragraphs.push(`${i} Soy ${ i % 2 === 0 ? 'Par' : 'Impar' }!`);
  }
  return paragraphs;
};

module.exports = oddEven;