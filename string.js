/*Q-1:What is template literals?
  Ans-1:It's a string, which creates with backtick sign(``),instead of single or double qoutes.We can embed our expressions in backtick sign as a
        string.
        
  Q-2:What is sting interpolation?
  Ans-2:Interpolation is the process of inserting strings or values into existing string for various purposes.The functionality is useful ,because
        it enables to create powerful & dynamic stringd for software.
   
  Note-1:Strings are immutable in JavaScript. */
//Ex:1
//const firstName = "Abu Sayeed";
//const secondName = "Emon";
//const greet = `Welcome to JavaScript Mr. ${firstName} ${secondName}`;
//console.log(greet);

//Ex:2  Showing a price with vat in stirng:

//const price = 100;
//const VAT = 0.7;
//const totalPrice = `${(price * (1 + VAT)).toFixed(3)}`;
//console.log(totalPrice);

let obj = {
  item: "pen",
  price: "20",
};
console.log(`The cost of ${obj.item} is from Unimart is ${obj.price} BDT.`);
