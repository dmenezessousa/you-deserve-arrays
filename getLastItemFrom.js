// prompts the user for an array, then logs out the last item from that array

const prompt = require('prompt-sync')();

let array = prompt('Enter an array: ');

array = JSON.parse(array);
console.log(array.length - 1);

