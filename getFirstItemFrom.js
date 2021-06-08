// that prompts the user for an array, then logs out the first item in that array

const prompt = require('prompt-sync')();

let array = prompt('Enter an Array: ');

array = JSON.parse(array);
console.log(array);