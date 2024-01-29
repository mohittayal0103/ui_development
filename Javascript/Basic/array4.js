let customerlist = [
  {
    city: "Bangalore", account:['Amir','Shahrukh','Salman','Khan']
  },
  {
    city: "Mumbai", account:['Santosh','Sunil','Abhi']
  },
  { 
    city: "Chennai", account:['Bhuvan','Ali','Aman','Atul','Suraj']
  }
]




//-------------------------------------------------------------------
console.log("\n------------ Object With Multiple User (Array of Object) containing another array ------------\n");
//-------------------------------------------------------------------

customerlist.map((customer, index) => {
  console.log(customer.city);

  console.log("\t", customer.account);
})




//-------------------------------------------------------------------
console.log("\n------------ Printing Sunil, Atul from Array ------------\n");
//-------------------------------------------------------------------

console.log(customerlist[1].account[1]);
console.log(customerlist[2].account[3]);





//-------------------------------------------------------------------
console.log("\n------------ Running 2 loops to call outer and inner array both ------------\n");
//-------------------------------------------------------------------


//1st method
customerlist.map((customer, index) => {                    //loop1 #outer array
  console.log(customer.city);

  customer.account.map((fullname,index2) => {             // loop2 #inner array
    console.log("\t", index2, fullname);
  })
})
 
console.log("\n----------------------------------\n");

//2nd Method
customerlist.map((customer, index) => {                    
  console.log(customer.city);

  for(let i=0; i<customer.account.length; i++){
    console.log("\t", i, customer.account[i]);
  }
  })





//-------------------------------------------------------------------
console.log("\n------------ Running in reverse order ------------\n");
//-------------------------------------------------------------------

customerlist.reverse().map((customer, index) => {                    //using reverse()
  console.log(customer.city, "-", customer.account.length);

  for(let i=0; i<customer.account.length; i++){
    console.log("\t", i, customer.account[i]);
  }
  })



