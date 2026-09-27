const mySym = Symbol("mykeys");
let object = {
  Name: "Sayeed",
  BSC: "Pursuing",
  Duration: 4,
  [mySym]: "keys",
};
console.log(object[mySym]);
