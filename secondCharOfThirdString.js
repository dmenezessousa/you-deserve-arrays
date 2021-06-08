//prompts the user for an array then logs the second character in the third item in the array.
// If the third item is not a string, log an error instead

const prompt = require('prompt-sync')();

let array = prompt('Enter an array: ');

array = JSON.parse(array);

const thirdItem =array[2];
const secondCharacter = thirdItem[1];
console.log(secondCharacter);