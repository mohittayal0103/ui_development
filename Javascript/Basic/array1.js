
// let b = "Mango";
// let e = true;
// let c = "Banana";
// let d = 500;
// let a = "Apple"

  let item = ["Apple","Mango","Banana",500,true];

//Array is the collection of similar data or all datatypes

  let product = ["Apple","Mango","Banana","Orange","Papaya"]; //1st Method

  let city = new Array('Bangalore','Mumbai','Pune','Kolkata'); //2nd Method

  console.log(product);
  console.log("Product Array Length:", product.length,"\n");

  console.log(city);
  console.log("City Array Length:", city.length,"\n");


/*
  Structure of Array

  arrayName[index] => Element

  product[0] => Apple
  product[1] => Mango
  product[2] => Banana
  product[3] => Orange
  product[4] => Papaya
*/

  console.log("\nFirst Element of Product Array: ", product[0],"\n");

  console.log("Last Element of Product Array: ", product[product.length-1],"\n");



//-------------------------------------------------------------------
  console.log("\n------------ Array Using For Loop in Ascending Order ------------ \n");
//-------------------------------------------------------------------

for(let i=0; i<product.length; i++)
{
  console.log(product[i]);
}

//-------------------------------------------------------------------
console.log("\n------------ Array Using For Loop in Descending Order ------------ \n");
//-------------------------------------------------------------------

for(let i=product.length-1; i>=0; i--)
{
  console.log(product[i]);
}




