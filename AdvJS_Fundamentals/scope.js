{
  /*
Function scope:In JavaScript, function scope refers to the visibility and accessibility of variables and functions within a specific function. Variables declared within a function
are only accessible within that function and its nested functions, while variables declared outside of any function have global scope and can be accessed from anywhere in the code. 
Function scope helps prevent naming conflicts and allows for better organization of code by encapsulating variables and functions within their respective functions.
*/
}
//Example of function scope:
function wrestler() {
  let name = "Cena";
  let age = 45; //Here, name and age are local variables, they are only accessible within the student function. If you try to access them outside of the function, you will get an error.

  console.log(`The wrestler's name is ${name}, and his age is ${age}.`);
}
wrestler();
{
  /*
Block scope: In JavaScript, block scope refers to the visibility and accessibility of variables and functions within a specific block of code, such as within curly braces {}. 
Variables declared with let or const have block scope, meaning they are only accessible within the block they are defined in. This helps prevent naming conflicts and allows for better
organization of code by encapsulating variables and functions within their respective blocks.
*/
}
//Example of block scope:
{
  let name = "John";
  const age = 30; //Here, name and age are block-scoped variables, they are only accessible within this block. If you try to access them outside of the block, you will get an error.
  console.log(name);
  console.log(age);
}
//console.log(name); // This will result in a ReferenceError
//console.log(age); // This will result in a ReferenceError

{
  /**
Nested scope: In JavaScript, nested scope refers to the concept of having functions defined within other functions, creating a hierarchy of scopes. Variables and functions declared
in an outer function are accessible to inner functions, but not vice versa. This allows for better organization of code and encapsulation of functionality, as inner functions can 
access and manipulate variables from their parent functions while keeping their own variables private.
   */
}
//Example of nested block scope:
{
  let name = "Mridul";
  function outerFunction() {
    let age = 25;
    console.log(`The name is ${name} and the age is ${age}.`);
    function innerFunction() {
      let city = "New York";
      console.log(
        `The name is ${name}, the age is ${age}, and the city is ${city}.`,
      );
    }
    innerFunction();
  }
  outerFunction();
}
{
  /*
Block scope is useful for controlling the visibility and accessibility of variables and functions within specific blocks of code, while nested scope allows for better organization and 
encapsulation of functionality by creating a hierarchy of scopes. Both concepts help prevent naming conflicts and improve code maintainability.And block scope is a subset of nested 
scope, as variables declared within a block are only accessible within that block and its nested blocks, while variables declared in an outer function are accessible to inner 
functions.Block scope is useful for avoiding naming conflicts and keeping variables and functions organized within specific blocks of code, while nested scope allows for better 
encapsulation of functionality and access to variables from parent functions.
*/
}
if (true) {
  let message = "Welcome";
  console.log(message); // Accessible within the block.Outside the block, it will result in a ReferenceError.And the output will be "Welcome",if the parameter is false, it will not print anything.
}

if (true) {
  let message = "Goodbye";
  console.log(message); // Accessible within the block.Outside the block, it will result in a ReferenceError.And the output will be "Goodbye",if the parameter is false, it will not print anything.
}

{
  /*
Global scope: In JavaScript, global scope refers to the visibility and accessibility of variables and functions that are defined outside of any function or block.Variables and 
functions declared in the global scope can be accessed from anywhere in the code, including within functions and blocks. However, it's important to be cautious when using global
variables, as they can lead to naming conflicts and make code harder to maintain. It's generally recommended to limit the use of global variables and instead use function or block 
scope whenever possible.
    
*/
}
//Example of global scope:
// Global scope: declared outside any function or block
const userName = "Maya";

function greetUser() {
  // Accessible inside a function
  console.log("Hello, " + userName);
}

if (true) {
  // Accessible inside a block
  console.log("Welcome back, " + userName);
}

greetUser(); // Output: Hello, Maya
// Output: Welcome back, Maya

{
  /*
Temporal Dead Zone (TDZ): TDZ starts after entering the block and ends when the variable is declared.
In JavaScript, the Temporal Dead Zone (TDZ) refers to the period of time between the creation of a variable and its initialization.let and const variables have a TDZ, which means that 
they cannot be accessed before they are declared and initialized. If you try to access a variable in the TDZ, it will result in a ReferenceError.The TDZ helps prevent the use of 
uninitialized variables and encourages developers to declare and initialize variables before using them. It's important to be aware of the TDZ when working with let and const 
variables to avoid unexpected errors in your code.
But var variables do not have a TDZ, and they can be accessed before they are declared, but their value will be undefined until they are initialized. This can lead to unexpected 
behavior and bugs in your code, so it's generally recommended to use let and const instead of var to avoid issues related to the TDZ.
    */
}
//Example of Temporal Dead Zone (TDZ):
{
  console.log(a); // This will result in a ReferenceError because 'a' is in the Temporal Dead Zone (TDZ) and cannot be accessed before its declaration.
  let a = 10;
}
{
  console.log(b); // This will result in a ReferenceError because 'b' is in the Temporal Dead Zone (TDZ) and cannot be accessed before its declaration.
  const b = 34;
}
{
  console.log(c);
  var c = 78; // This will not result in a ReferenceError because 'c' is declared using 'var', which does not have a Temporal Dead Zone (TDZ). However, its value will be undefined until it is initialized.Undefined because 'c' is hoisted to the top of its scope, but its assignment happens later in the code.
}

{
  /**    
TDZ vs Hoisting: The Temporal Dead Zone (TDZ) and hoisting are related concepts in JavaScript, but they refer to different aspects of variable behavior. Hoisting is a behavior in 
JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can reference variables and functions
before they are actually declared in the code. However, only the declarations are hoisted, not the initializations or assignments.

var: declarations are hoisted to the top of their scope, but their assignments are not. This means that you can reference a var variable before it is declared, but its value will be 
undefined until the assignment is reached in the code.
let and const: declarations are hoisted to the top of their scope, but they are not initialized until the line of code where they are declared is executed. This means that if you try 
to access a let or const variable before its declaration, you will get a ReferenceError due to the Temporal Dead Zone (TDZ). The TDZ is the period of time between entering the scope and
the point where the variable is declared and initialized. During this time, the variable is in an uninitialized state and cannot be accessed.

In summary, hoisting refers to the movement of declarations to the top of their scope, while the Temporal Dead Zone (TDZ) refers to the period of time where let and const variables are in an uninitialized state and cannot be accessed. Understanding both concepts is important for writing correct and predictable JavaScript code.
*/
}
//Example of TDZ vs Hoisting:

{
  //This example will show error because 'x' is in the Temporal Dead Zone (TDZ) and cannot be accessed before its declaration.
  // 1. HOISTING WITH var

  console.log(a);
  // Output: undefined
  // Reason: var is hoisted and initialized
  // with undefined.

  var a = 10;

  console.log(a);
  // Output: 10

  // 2. HOISTING + TDZ WITH let

  console.log(b);
  // ReferenceError
  // Reason: b is hoisted but NOT initialized.
  // So, b is in the TDZ.

  let b = 20;
  // TDZ ends here.
  // Now b is initialized with 20.

  console.log(b);
  // Output: 20

  // 3. HOISTING + TDZ WITH const

  console.log(c);
  // ReferenceError
  // Reason: c is hoisted but NOT initialized.
  // So, c is in the TDZ.

  const c = 30;
  // TDZ ends here.
  // Now c is initialized with 30.

  console.log(c);
  // Output: 30
}
