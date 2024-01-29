let city = "bangalore";

// city.map((cityname,index) =>               //map func only works on array it will not work on any non array 
// {
//   console.log(cityname);                  
// })



for(let i=0;i<city.length;i++){              // in javascript string will work as stringarray.
  console.log(city[i].toLowerCase());
}


console.log("\n----------------------------------------------\n")


for(let i = city.length - 1; i>=0; i--){    //reverse order
  console.log(city[i].toUpperCase());
}