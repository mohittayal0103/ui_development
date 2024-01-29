// 3 Types of Functions:

//1st method

function one(){
  console.log("1 is working......");
}


//2nd method
const two = function(){
  console.log("2 is working......");
}

//3rd Method
const three = () =>{
  console.log("3 is working......");
}


one();
two();
three();
  

const four = ()=>{
    let obj = new Date();  //Date is a class
    let time = obj.getHours() + ":" + obj.getMinutes() + ":" + obj.getSeconds(); //Date Class contain many function slike getHours etc.
    console.log( "\nTime Now: ", time);
}

four();