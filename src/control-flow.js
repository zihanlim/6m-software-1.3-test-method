//Control flow or control structure determin the flow of the program based on the condition
//Comparison Operators: >,<,==,===,>=,<=....
//Logical Operators: &&(AND), ||(OR), !(NOT)

//1. if-else
/*
if(condition){
    statement to do if condition is true
} else{
    statements to do if condition is false
}
*/

let budget =18;
if (budget>50&& weather=="rainy"){
    console.log('Treat myself to McDonalds');}
    else {
        console.log("Save up")
    }


//loops (3 types)
//1. for loop
//2. while loop
//3. do while loop

//While loop executes while the statement is true
let num=0;
while (num<=10){
    console.log('Current count ${num}');
    num++;
}

//Do while - executes while the statement is true
let num2=10;
do{
    console.log("Happy Birthday");
    num2--;
}while (num2>=5);
//Q:What is the difference between while loop and do while loop?

//For loop
let sum = 0;
for(let num3 = 0; num3 > 5; num3++){
    sum += num3; //sum-sum+num3
}
console.log('The sum is ${sum}');
//console.log("The sum is " + sum);

//What is ${}? Template literals (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)