//When we assume that value are true then truthy, when false is  falsy 

// const userEmail = "ritesh@google.com";

//if value contains in varible then it is true and false when it is empty

// if (""){
    // console.log("Got User email");
// }
// else{
    // console.log("Don't have user email")
// }


//Fasly values
// false, 0, -0, BigInt, 0n, "", null, NaN;

// Truthy values
// true, "0" = stringname(true) , 'false', " ", [], {}, function(){} 

//checking array is empty
let userEmail = []

if(userEmail.length === 0){
    console.log("Array is empty")
}
else{
    console.log("Array is one value")
}


//checking empty object

// const emptyObj = {};

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// };



//Interview question:
// false = 0; gives true
// false == "" gives true
// 0 == "" gives true


//Ternary Operator

  
// condition ? true : false;

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("Yes it is low") : console.log("it is high")

let age = 17;
//only two conditions
// condition ? true : false;   
// age >= 18 ? console.log("Eligible for voting") : console.log("you are not eligible")    


// for multiple conditions
// condition? solution: condition? solution : condition? solution  :  condition? solution  :  condition? solution  :  last solution;  
var x=12;
var y = x<13 ? "Child" : x<20 ? "Teenage" : x<30 ? "Twenties" : "Old people";
// console.log(y);