//What is an Array? 
//store related set of data/ data type
//[] define the array


// Declaring an empty array
let empty = [];

// Initializing array with default values
let defaults = [1,2,"3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

// Retrieve the first element in array, we have to provide the index 0.
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}


//Mini Exercise:
//1.Create an Array called grades with values of 100,75,68,95,43
//2. Using a loop and an if-else statement, print the following:
/*
    if grade>75->Pass
    if grade<=75->Fail
    Format:"Your grade of ___is a Pass/Fail"
*/

let grades=[100,75,68,95,43];
if (grades>75){
    console.log ("Your grade of ${num} is a Pass");}
    else{
        console.log("Your grade of ${num} is a Fail")
    }
for (var i = 0; i < grades.length; i++) {
  if (grades[i] > 75) {
    console.log("Your grade of " + grades[i] + " is a Pass");
  } else {
    console.log("Your grade of " + grades[i] + " is a Fail");
  }
}