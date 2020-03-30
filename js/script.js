const num = 266219;
let result = 1;

let numString = num.toString();
for (let i = 0; i < numString.length; i++) {
    result *= numString[i]; 
}

console.log(result ** 3);

console.log((result ** 3).toString()[0] + (result ** 3).toString()[1]);
