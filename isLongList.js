//prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10
const prompt = require('prompt-sync')();
let array = prompt('Enter an array: ');

array = JSON.parse(array);


if(array.length < 10){
    console.log('This Array Length is: ', array.length);
}
else if(array.lenth >= 10){
    console.log(array.length);
}
else{
    console.log('This Array Length is at least 10');
}