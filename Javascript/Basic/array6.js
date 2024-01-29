let product = ["Apple", "Mango", "Banana", "Orange", "Papaya"];


product.map((pname, index) => {
  if(pname == "Banana")
  console.log(index, pname);
})



//-------------------------------------------------------------
console.log("\n------------- Using IndexOf() -------------\n");
//-------------------------------------------------------------



let pos = product.indexOf("Orange");
console.log(pos);

//----------------------------------------

let pos1 = product.indexOf("Orange");
if( pos1>0)
{
  console.log("Orange is available");
}
else
{
  console.log("Not Found!");
}



//-------------------------------------------------------------
console.log("\n------------- Using Match() -------------\n");
//-------------------------------------------------------------


product.map((pname, index) => {
  if(pname.toLowerCase().match('banana'))
  console.log(pname);
})
