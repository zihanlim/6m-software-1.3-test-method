// Declaring an empty object
let empty = {};

// Initializing object with default value
const person = {
    name:"John Doe", //property -> key: value
    yearOfBirth: 1987
}
console.log("person", person);

// Retrieve the value of "yearOfBirth" property
console.log("I am born in", person.yearOfBirth);

// Looping an object
for(let key in person){//for-in loop
    console.log("key is", key, "and value is", person[key]); 
    //Q:Why not use person.key?
    //A:It trys to find a key called key if we use the dot notation.
}



//Mini Exercise: Create a new object called me that has the following properties:
//1.FUll name-> String
//2.Previous occupation -> String
//3.Year of birth -> number
//4.Hobbies -> Array of 3 strings

const person1 = 
{
    name:"Lim Zi Han", 
    yearOfBirth: 1993,
    occupation: "designer",
    hobbies: ["eat","sleep","run"]
}

console.log
(
"My name is ", person1.name,".",
"I am born in",person1.yearOfBirth,".",
"I am a", person1.occupation, "by occupation.",
"My second hobbie is",person1.hobbies[1]

);