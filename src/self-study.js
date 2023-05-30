/* variable: let
let name= 'Han';
console.log(name)

let firstName='Zihan';
let lastName='Lim';
console.log(firstName)
console.log(lastName)*/

/*//constant: let vs const vs var
//const cannot be redefined once defined
//let are only available inside the block where they’re defined. 
//var are available throughout the function in which they’re declared.

//interestRate can be redefined
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)

//interestRate2 cannot be redefined
const interestRate2 = 0.3;
interestRate2 = 1;
console.log(interestRate)
*/

/*what are Primitive Types?
let name='Zihan';//String Literal
let age=30; //Number literal
let isApproved=false; //Boolean Literal
let firstName;
let firstName2=undefined;
let selectedColor=null;

console.log(name)
console.log(age)
console.log(isApproved)
console.log(firstName)
console.log(firstName2)
console.log(selectedColor)
console.log(typeof firstName)
*/

/*Dynamic language - variable's type can be change (unlike static-typed language)
let name='Zihan';//String Literal
let age=30; //Number literal
let isApproved=false; //Boolean Literal
let firstName;
let firstName2=undefined;
let selectedColor=null;

console.log(name)
console.log(age)
console.log(isApproved)
console.log(firstName)
console.log(firstName2)
console.log(selectedColor)
console.log(typeof firstName)
*/

/*Objects can host variables that are meant to be related - makes code cleaner
let name= 'Zihan';
let age= 30;
console.log(name)

let person={//object literal
    name:'Zihan',
    age:30,
    gender:'male',
};
console.log(person.name)
console.log(person.age)
console.log(person.gender)

//dot notation (default choice)
person.name='John';
console.log(person.name)

//bracket notation 
person['name']='Mary';
console.log(person.name)
//(use this id we dont know the type properties of the variable)
let selection='name'
person[selection]='Mary';
//
let name2='name'
person[name2]='Mary';
*/
/*Dot Notation vs Bracket Notation
Dot Notation is useful when you know the property ahead of time. 
You simply do object.key to read/modify an existing property or to add a new property.
Bracket Notation is useful when you want to dynamically access a property. 
The key of this property could come from expressions like getKey(), "my" + "key", or keyVariable.
*/

//Arrays
let selectedColor=['red','blue'];
console.log(selectedColor[0]);
selectedColor[2]='green';
console.log(selectedColor[2]);
console.log(selectedColor);
console.log(selectedColor.length);

