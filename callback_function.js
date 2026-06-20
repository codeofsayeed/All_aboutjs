//setTimeout() is a built-in JavaScript function that allows you to execute a function after a specified delay. It takes two parameters: the first is the function to be executed, and the second is the delay in milliseconds.
//Example of using setTimeout() to execute a function after a delay of 2000 milliseconds (2 seconds):
{
  /**function sayHello() {
  console.log("Hello, world!");
}
setTimeout(sayHello, 10000);
*/
}

//You can also use an anonymous function directly within setTimeout() without defining it separately:
//Anonymous function: A function that is defined without a name and is often used as an argument to another function or assigned to a variable.

setTimeout(function () {
  console.log("This message is displayed after 3 seconds.");
}, 3000);
