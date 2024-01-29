// Object in Javascript.

//-------------------------------------------------------------------
console.log("\n------------ Object With One User ------------\n");
//-------------------------------------------------------------------



let user = {fullname: "Alex", city: "Bangalore", age: "30 Years"};

console.log( user.fullname, user.city, user.age);



//-------------------------------------------------------------------
console.log("\n------------ Object With Multiple User (Array of Object) ------------\n");
//-------------------------------------------------------------------

let userlist = [
  {fullname: "Alex", city: "Bangalore", age: "30 Years"},
  {fullname: "Mohit", city: "Mumbai", age: "24 Years"},
  {fullname: "Rohit", city: "Gurgaon", age: "27 Years"}
];


userlist.map((oneuser, index) => {
    console.log(index, oneuser.fullname, oneuser.city, oneuser.age);
    console.log("----------------------------");
});