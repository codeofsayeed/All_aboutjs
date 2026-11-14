//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use
//functions and variables before they are actually declared in the code. However, it's important to note that only function declarations are hoisted, while function expressions and
//variable assignments are not hoisted in the same way.

//function declaration vs Function Expression:
//Function Declaration: A function declaration defines a named function and is hoisted to the top of its scope. It can be called before it is defined in the code.
//Example:
const result = add(5, 3); // This works because the function is hoisted
function add(a, b) {
  return a + b;
}
console.log(result); // Output: 8


const result2 = multiply(4, 2); // This will throw an error because the function expression is not hoisted
const multiply = function (a, b) {
  return a * b;
};
console.log(result2); // This line will not be reached due to the error above


const result3 = divide(10, 2); // This will throw an error because the function expression is not hoisted
const divide = (a, b) => {
  return a / b;
};
console.log(result3); // This line will not be reached due to the error above

 
const result4 = subtract(10, 4); // This will throw an error because the function expression is not hoisted
const subtract = function (a, b) {
  return a - b;
};
console.log(result4); // This line will not be reached due to the error above


//Function Expression: A function expression defines a function as part of an expression and is not hoisted. It can only be called after it is defined in the code.
const result5 = divide2(10, 2); // This will throw an error because the function expression is not hoisted
const divide2 = function (a, b) {
  return a / b;
};
console.log(result5); // This line will not be reached due to the error above





//fUNCTION hoisting: In JavaScript, function declarations are hoisted to the top of their containing scope, allowing you to call a function before it is defined in the code.
// This means that you can invoke a function before its actual declaration, and it will still work as expected. However, function expressions are not hoisted in the same way, so they must be defined before they are called.

//Example of function hoisting:

myjob2(); //This ia a function declaration, It can happen only in hoisting. It can be called before the function is declared.
function myjob2() {
  console.log("Pursuing a degree in  CSE");
}

sayHi(); //Function expression, It cannot be called before the function is declared. It will give an error if called before declaration.
var sayHi = function () {
  console.log("HI");
};

//Variable hoisting: In JavaScript, variable declarations (using var) are hoisted to the top of their containing scope, but their assignments are not. This means that you can reference
//a variable before it is declared, but its value will be undefined until the assignment is reached in the code. However, with let and const, variables are hoisted but not initialized,
//leading to a "temporal dead zone" where accessing them before declaration results in a ReferenceError.
