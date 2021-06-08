//prompts the user for an array then logs out the item at the 3rd index. If there are not four items 
//(i.e., if there is no index 3), it logs out the value at the last index.

const prompt = require('prompt-sync')();
let array = prompt('Enter a array');

array = JSON.parse(array);
console.log(array [array.length -1]);



