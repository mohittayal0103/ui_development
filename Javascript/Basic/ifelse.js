// -----------------------------------------------------
console.log("--------if-else Condition------------");
//------------------------------------------------------
let a  = 100;
let b = 101;

if( a>b ){
  console.log(a, b,"The bigger value is: ", a);
}
else{
  console.log(a, b,"The bigger value is: ", b);
}

//--- for 1 line statement {} is not required ---

if( a>b )
  console.log(a, b,"The bigger value is: ", a);

else
  console.log(a, b,"The bigger value is: ", b);

// -----------------------------------------------------
console.log("--------elseif Condition------------");
//------------------------------------------------------

let x = 100;
let y = 200;
let z = 99;

if(x>y && x>z)
console.log(x, y, z, "The bigger number is:", x);
else if(y>x && y>z)
console.log(x, y, z, "The bigger number is:", y);
else
console.log(x, y, z, "The bigger number is:", z); 

//--------------------------------------------------------
console.log("--------Nested Condition------------");
//--------------------------------------------------------
// isNaN(input)
//  -> It return true for string
//  -> it return false for number 

let input = "7458752"
let mystatus = isNaN(input);

if(mystatus == true){
    console.log(input, " is string value");
    console.log(input.length, " is total chars in: ", input);
}
else{
    console.log(input, " is a number value");
    if(input%2==0)
    console.log("Number is even");
    else
    console.log("Number is odd");
}

//-----------------------------------------------------------
console.log("-----------Switch Case------------")
//-----------------------------------------------------------

/*
  if use to check
    1. range condition -> if ( a == b ) 
    2. exact condition -> if ( a === b )

  switch case - use to check
    - only exact condition -> if( a === b ) only
*/

let url = "signup";
switch(url){
  case "home":
    console.log("display home.html");
    break;

  case "login":
    console.log("display login.html");
    break;

  case "signup":
  case "register":
    console.log("display newaccount.html");
    break;
  
    default: 
      console.log("display home.html");
}