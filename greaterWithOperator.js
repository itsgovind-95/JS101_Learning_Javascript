// Given 3 numbers (all different values), print which is greatest

let num1 = 1, num2 = 2, num3 = 8;

//using ternuary operator
console.log((num1 > num2 && num1 > num3) ? num1 : (num2 > num1 && num2 > num3) ? num2 : num3);