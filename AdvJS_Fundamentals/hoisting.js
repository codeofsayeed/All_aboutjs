//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use
//functions and variables before they are actually declared in the code. However, it's important to note that only function declarations are hoisted, while function expressions and
//variable assignments are not hoisted in the same way.

//1.Function Declaration: A function expression is a way to define a function in JavaScript by assigning it to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined in the code. Function expressions can be anonymous (without a name) or named, and they can be used as values, passed as arguments to other functions, or returned from functions.
//Example:
function add(x, y) {
  return x + y;
}
console.log(add(5, 7)); // 12

function multiply(p, q) {
  return p * q;
}
console.log(multiply(5, 7)); // 35

//2.Function Expression: A function expression is a way to define a function in JavaScript by assigning it to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined in the code. Function expressions can be anonymous (without a name) or named, and they can be used as values, passed as arguments to other functions, or returned from functions.
//Example:
const divide = function (a, b) {
  return a / b;
};
console.log(divide(332, 4)); // 83

//In a simpler word, Declarations is hoisted so this works, but Expressions are not hoisted so this will not work if you call it before the declaration.

// ---------- Arrow Function Expression (modern form) ----------
const subtract = (m, n) => {
  return m - n;
};
console.log(subtract(30 - 23)); // 7

//Function hoisting: In JavaScript, function declarations are hoisted to the top of their containing scope, allowing you to call a function before it is defined in the code.
// This means that you can invoke a function before its actual declaration, and it will still work as expected. However, function expressions are not hoisted in the same way, so they must be defined before they are called.

//Example of function hoisting:

myjob2(); //This ia a function declaration, It can happen only in hoisting. It can be called before the function is declared.
function myjob2() {
  console.log("Pursuing a degree in  CSE");
}

//Variable hoisting: In JavaScript, variable declarations (using var) are hoisted to the top of their containing scope, but their assignments are not. This means that you can reference
//a variable before it is declared, but its value will be undefined until the assignment is reached in the code. However, with let and const, variables are hoisted but not initialized,
//leading to a "temporal dead zone" where accessing them before declaration results in a ReferenceError.
