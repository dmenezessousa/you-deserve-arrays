// that prompts the user for an array, then logs out the first item in that array

const prompt = require('prompt-sync')();

let arr = prompt('Enter an Array: ');

const array = JSON.parse(arr);

const lastArray = array.length -1;

const lastItemArray = array[lastArray];

console.log(lastItemArray);
