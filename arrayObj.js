{
  /*
const array = [
  "HTML",
  "ÇSS",
  "JavaScript",
  "React",
  "Nodejs",
  "Firebase",
  true,
  56,
];
array[3] = "Python"; // Changing array element using its index
console.log(array[4]); //Showing in which element is lying on index 4(nth).
console.log(array.toString()); //Changinging the array into string
console.log(array);
console.log('length:', array.length); // To showing how much array its carrying.

*/
}

//Array Methods:
{
  /*
const arrays = [
  "AI",
  "Computer Graphics",
  "Compiler Design",
  "Web Engineering",
  "OOP",
  "DSA",
];
console.log(arrays);

console.log(arrays.toString()); //Changinging the array into string
console.log(arrays.join(" $ ")); //creates and returns a new string by concatenating all the elements of an array. It separates each element with a specified separator string.
console.log(arrays.pop()); //Removing last item from an array.
arrays.push("Networking");
console.log(arrays); //Adding items in last.
arrays.unshift("Peripheral","CA");
console.log(arrays); //Adding item on first of an array.
console.log(arrays.shift());//Deleting the first item from an array
console.log(arrays); // showing full arrays after shifting(deleting) the 1st array.

*/
}
//Concatening Arrays with each other.
const num1 = [1, 2, 3, 4, 5];
const num2 = [100, 300, 500];
const result = num1.concat(num2); // concate two arrays together.
console.log(result); //Showing concatening arrays.

//concate more than two arrays together.
const x = ["Monitor", "CPU", "GPU", "SSD"];
const y = ["RAM", "Keyboard", "Mouse"];
const z = ["Price", "Warranty"];
const result1 = x.concat(y, z);
console.log(result1);

//Destructuring Array:
