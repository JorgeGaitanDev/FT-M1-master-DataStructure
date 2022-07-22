'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
   let sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum = sum + num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
let number = num;
  let binario = (number % 2).toString();
  for (;number > 1;) {
    number = parseInt(number / 2);
    binario = (number % 2) + (binario);
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}