//Functions with multiple parameters: Ami tumi jabo.\
{
  /**
    function goToPlace(place, time) {
    console.log(`Ami tumi jabo ${place} at ${time}.`);
}
goToPlace("park", "5 PM");

  */
}
{
  /** 
  function res() {
  let math = 90;
  let physics = 87;
  result = math + physics;
  console.log(`The adding number of ${math} and ${physics} is=${result}`);
}
res();

  */
}

{
  {
    /**
    function myFunction(z, c) {
  return z / c;
}
console.log(myFunction(34, 67));
    */
  }
}

{
  /** 
//Store a function inside variable.
const greet = function () {
  console.log("Hello to js function!");
};
greet();
*/
}

//Function declaration vs Functikon Expression:
{
  /**

// Function declaration:

function myjob(){
  console.log("I'm a software engineer.")
}
myjob();


myjob2();          //This ia a function declaration, It can happen only in hoisting. It can be called before the function is declared.
function myjob2(){
  console.log("Pursuing a degree in  CSE")
}


//Function Expression:
const sayeed= function(){
  console.log("It can include a variable name and it can be called after the function is declared.")

}
sayeed()
  */
}

{
  /**
  //Arrow Function:

const arrowFunction=()=>{
  console.log("This is an arrow function.")
}
arrowFunction()
  */
}

{
  /**
  //Function with return value:
  function sum1(a,b){
  return a+b;
}
console.log(sum1(12,45));
  */
}

//Anonymous Function: A function without a name is called an anonymous function. It can be used as a value and can be passed as an argument to another function.
//setTimeout(function(){console.log("HI");},3000)  //This is an anonymous function. It is used as a value and can be passed as an argument to another function.

{
  /**
  setTimeout(function(){
  console.log("HI");
},3000)
  */
}

//Uses of backticks in function: Backticks are used to create template literals in JavaScript. Template literals allow you to embed expressions and variables within a string using the ${} syntax. This makes it easier to create dynamic strings and format output.

{
  /**
  const userName=function(name){
    return `${name} has just logged in now!`;
  };
  console.log(userName("Mr. Karim"))

//For default parameters:
function greetUser(name = "Guest"){
  return`Hello , ${name}. Welcome to my js-function class!`;
}
console.log(greetUser("Sayeed"));
  
    
 */
}

//Types of Parameters in JS Functions:
{
  /**
  There are 10 types of parameters in JS Functions:
1. Required/Regular Parameters: These are the parameters that must be provided when calling a function. If any required parameter is missing, it will result in an error.
2. Default Parameters: These are parameters that have default values assigned to them. If a value is not provided for a default parameter when calling the function, the default value will be used.
3. Rest Parameters: These allow you to represent an indefinite number of arguments as an array. They are denoted by three dots (...) before the parameter name.
4. Destructuring Parameters: These allow you to extract values from objects or arrays and assign them to variables directly in the function parameters.
5. Optional Parameters: These are parameters that may or may not be provided when calling a function. They can be defined using the question mark (?) syntax in TypeScript, but in JavaScript, you can achieve optional parameters by checking if the parameter is undefined within the function body.
6. Callback Parameters: These are functions that are passed as arguments to other functions and are executed at a later time, often in response to an event or after a certain operation is completed.
7. Named Parameters: These allow you to pass arguments to a function by specifying the parameter names explicitly, making the code more readable and allowing for flexibility in the order of arguments.
8. Variadic Parameters: These allow you to pass a variable number of arguments to a function, similar to rest parameters, but they can be used in languages that support variadic functions.
9. Spread Parameters: These allow you to expand an array or object into individual elements when calling a function, making it easier to pass multiple values without explicitly listing them.

  */
}

//1. Required/Regular Parameters:
function greet(name, age) {
  console.log(`Hello ${name}, U're ${age} years old!`);
}
greet("Ziniya", 23); //This is a required parameter. It must be provided when calling the function. If any required parameter is missing, it will result in an error.

//Default Parameters:
const userName = function (name = "Anonymous") {
  return `${name}, u've just logged in now!`;
};
console.log(userName("Mrs,Ziniya")); //This is a default parameter. If a value is not provided for a default parameter when calling the function, the default value will be used.
console.log(userName()); //This will use the default value "Anonymous" for the name parameter.

//Rest Parameters:
function calculateCartPrice(...num) {
  return num;
}
console.log(calculateCartPrice(344, 234, 456, 678, 890, 123, 456, 789)); //This is a rest parameter. It allows you to represent an indefinite number of arguments as an array. They are denoted by three dots (...) before the parameter name.

function restParams(x, y, ...z) {
  console.log(`This is ${x},which is first parameter.`);
  console.log(`This is${y},which is second parameter.`);
  console.log(z);
  console.log(arguments); //This is an array-like object that contains all the arguments passed to the function.
  console.log(typeof arguments);
}
restParams(
  "Apple",
  "Orange",
  "Banana",
  "Mango",
  "Guava",
  "Jackfruit",
  "Litchi",
);

const introduce = function (name, age, ...skills) {
  console.log(
    typeof `Hey ${name},u're ${age} years old.And u've skills in ${skills}.`,
  );
  console.log(name);
  console.log(age);
  console.log(skills);
};
introduce(
  "Sayeed",
  23,
  "JavaScript",
  "Nodejs",
  "Reactjs",
  "MongoDB",
  "C",
  "C++",
);

//Parameter passing with object:
const user = {
  name: "Mrs. Ziniya",
  price: 1000,
  email: "ziniya@example.com",
};
const handleObject = function (anyObject) {
  console.log(
    `The user-name is ${anyObject.name},The product she bought is ${anyObject.price} BDT, and her email  is ${anyObject.email}`,
  ); //This is a parameter passing with object. It allows you to pass an object as a parameter to a function.
};
handleObject(user);

{
  /** 
//Nested Scope: A nested scope is a scope that is defined within another scope. In JavaScript, functions create their own scope, and when a function is defined inside another function, it creates a nested scope. The inner function has access to the variables and parameters of the outer function, but the outer function does not have access to the variables of the inner function.
//Closure Behaviour of function.
function one() {
  const person = "Sayeed";
  console.log(person);
  function two() {
    const website = "Cosmic";
    console.log(person);
    console.log(website);
  }

  two();
}
one();
*/
}

function addOne(num) {
  return num + 5;
}
console.log(addOne(10));


// This Keyword:
