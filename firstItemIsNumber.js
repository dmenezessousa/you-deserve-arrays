//prompts the user for an array then logs out a boolean indicating
// whether or not the first item in the array is a number

const prompt = require('prompt-sync')();



let array = prompt('Enter an array: ');
array = JSON.parse(array);
count = 0;
console.log(array);


// if(array.length !== String){
//     console.log("The first array is a number.");
// }
// // if(array.leagth !== String){
// //     console.log("The fist array is not a number.");
// // }

// if(array.indexOf(0) == Number){
//     console.log('not a number');
// }
// else if(array.indexOf(0) !== String){
//     console.log('a number');
// }

// let number = array.includes(Number.array,0);
// let string = array.includes(String.array,0);
// console.log(array);


// if(array[0] == number){
//     console.log("is a number")
// }
// if(array[0] == string){
//     console.log("not a number");
// }