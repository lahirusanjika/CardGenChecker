const fs = require('fs');
const path = require('path');

function luhnChecksum(cardNumber) {
  // Same Luhn as before
  const digits = cardNumber.toString().split('').map(Number).reverse();
  let sum = 0;
  digits.forEach((digit, i) => {
    if (i % 2 === 1) {
      const doubled = digit * 2;
      sum += doubled > 9 ? doubled - 9 : doubled;
    } else {
      sum += digit;
    }
  });
  return sum % 10 === 0;
}

function generateCards(bin, count = 10) {
  const cards = [];
  for (let i = 0; i < count; i++) {
    let card = bin + Math.random().toString().slice(2, 16 - bin.length);
    let sum = 0;
    const digits = card.split('').map(Number).reverse();
    digits.forEach((d, idx) => {
      if (idx % 2 === 1) sum += (d * 2 > 9 ? d * 2 - 9 : d * 2);
      else sum += d;
    });
    const checkDigit = (10 - (sum % 10)) % 10;
    card += checkDigit;
    cards.push(`${card}|CVV: ${Math.random().toString().slice(2,5)}|Exp: ${Math.floor(Math.random()*12+1).toString().padStart(2,'0')}/${Math.floor(Math.random()*10+25)}`);
  }
  fs.writeFileSync(path.join(__dirname, '../data/cards.txt'), cards.join('\n'));
  return cards;
}

function checkCards(cards) {
  return cards.map(card => `${card} | LIVE | TEST_OK`); // Edu sim
}

module.exports = { generateCards, checkCards };