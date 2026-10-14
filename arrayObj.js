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
{
  /* 
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
  
  */
}

//Def of Array: An array is a special type of object that stores multiple values in a single variable. It is indexed, meaning each element has a unique index number associated with it. Arrays are used to store and manage collections of data.
//Or, An ordered collection of values is called an array. Each value is called an element, and each element has a numeric position known as its index. The first element has an index of 0, the second has an index of 1, and so on.
//Creating Arrays:
//Accessing & Modifying Array Elements:
//Adding & removing Elements from an Array:
//Iteration over an Array:
//Transformation methods for Arrays:
//Searching & Filtering Arrays:
//Sorting & Reversing Arrays:
//Converting Arrays:
//Destructuring , Spreads , and REST in Arrays:(Discusiing in function.js file & more to explore in this file. )
//Copying: Shallow copy and Deep copy of an array:
//Array Methods:
//Mutator methods: These methods modify the original array. Examples include push(), pop(), shift(), unshift(), splice(), sort(), reverse().
//Non-mutator methods: These methods do not modify the original array but return a new array or value. Examples include concat(), slice(), map(), filter(), reduce().
//Array Properties:**
//Creating an array using array literal syntax:**

//Def of Object: An object is a collection of properties, where each property is defined as a key-value pair. Objects are used to represent real-world entities and their attributes. In JavaScript, objects can be created using object literal syntax , constructor functions , or classes.
//Creating Objects:
{
  /**
  const mobileBrand = {
  brandName: "Samsung",
  model: "Galaxy S21",
  warranty: "1 year",
  price: 799.99,
  isAvailable: false,
  features: ["5G", "AMOLED Display", "3 Camra"],
};

console.log(mobileBrand.price);  //Accessing object properties using dot notation.
console.log(mobileBrand.features[0]); //Accessing object properties using dot notation and array index.
console.log(mobileBrand.features[2]);
console.log(mobileBrand.features[1]);
console.log(mobileBrand["warranty"]); //Accessing object properties using bracket notation.
console.log(`The ${mobileBrand.brandName} ${mobileBrand.model} is now ${mobileBrand.isAvailable ? "available" : "not available"} for ${mobileBrand.price} USD
with${mobileBrand.features.join(" , ")} features included.`); //Using template literals to create a string that includes object properties and array elements.
console.log(`And it has ${mobileBrand.warranty} warranty.`);
//Object.freeze(mobileBrand); //Freezing the object to prevent any modifications to its properties.
mobileBrand.model = "Galaxy S25 Ultra"; //Modifying the value of a property in an object.
console.log(mobileBrand.model);
console.log("features" in mobileBrand); //Checking if a property exists in an object using the 'in' operator.
console.log("variant" in mobileBrand); //Checking for a non-existing property in the object using 'in' operator.
console.log(Object.hasOwn(mobileBrand, "warranty")); //Checking if a property exists in an object using the Object.hasOwn() method.It's a more modern(ES2022-standard) and preferred way to check for property existence in objects.
console.log(Object.hasOwn(mobileBrand, "model"));
console.log(Object.hasOwn(mobileBrand, "color")); //Checking for a non-existing property in the object.
  */
}
//Accessing & Modifying Object Properties:
//Adding,Removing & Updating Properties from an Object:
{
  /**
  const superHero = {
  name: "Spiderman",
  age: 25,
  powers: ["Wall-Crawling", "Web-Slinging", "Superhuman Strength"],
  isAlive: true,
};
console.log(superHero);
superHero.city = "New York"; //Adding****** a new property to the object.
console.log(superHero.name); //Accessing an object property using dot notation.
console.log(superHero.powers[1]); //Accessing an array element within an object property using dot notation & array index.
superHero.age = 26; //Updating an existing property value in the object.
console.log(superHero.age);
delete superHero.isAlive; //Removing a property from the object.
console.log(superHero);
  */
}
//Short-hand Property Names in Objects:
{/**
  const Name = "Sayeed";
const age = 23;
const department = "CSE";
const skill = "MERN Stack Developer";
const skills = ["HTML", "CSS", "JavaScript", "React", "Nodejs", "MongoDB"];
const Student = {
  Name,
  age,
  department,
  skill,
  skills,
};
console.log(Student);
console.log(Student.age);
console.log(Student.department);
console.log(Student.skills[4]); //Accessing an array element within an object property using dot notation & array index.

const userName = "coder_99";
const Age = 23;
const isAdmin = true;
const email = "alice@example.com";

const userProfile = {
  userName , Age ,isAdmin , email
};
console.log(userProfile)
*/}


//Computed Property Names in Objects:
//Shorthand & Computed Property Names in Objects:

//Iterating over Object:
//Destructuring ,spreads and REST:
//Object Methods:
//this keyword in Objects:
//Methods & this keyword in Objects:
//Getters & Setters in Objects:
//Property Descriptors in Objects:
//Controlling mutability of Objects:
//Object Prototypes in Objects:
//Object inheritance in Objects:
//Object Prototype & inheritance in Objects:
//Object copying(shallow vs deep) in Objects:
//Object cloning in Objects:**
const student = {
  name: "Sayeed",
  age: 23,
  department: "CSE",
};

const clonedStudent = { ...student };

console.log(student);
console.log(clonedStudent);

const student1 = {
  //Another example of cloning an object using spread operator.
  name: "Sayeed",
  age: 23,
};

const clonedStudent1 = { ...student1 };

clonedStudent1.name = "Rahim";

console.log(student1.name);
console.log(clonedStudent1.name);
//Classes in depth:
//Useful built-in Object methods in JavaScript:
//Symbol as keys:
//Making Objects iterable:
//Object Prototype chain in Objects:**
//Map vs Object:
//WeakMap vs Map:
//Set vs Array:
//WeakSet vs Set:
