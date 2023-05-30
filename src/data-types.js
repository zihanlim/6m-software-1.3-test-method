//Variables are named containers of information for referencing and manipulating data
//let-> use to create variables
//const-> use to create constants

//What is the difference between var and let?
// /The keywords let and var both declare new variables in JavaScript. 
//The difference between let and var is in the scope of the variables they create: 
//Variables declared by let are only available inside the block where they’re defined. 
//Variables declared by var are available throughout the function in which they’re declared.





const num = 1;
console.log("num",typeof num);

const str = "1";
console.log("str",typeof str);

const bool = true;
console.log("bool",typeof bool);

let x;
console.log("x",typeof x);


const y = null;
console.log("y",typeof y);

const obj = {};
console.log("obj",typeof obj);

const arr = [];
console.log("arr",typeof arr);