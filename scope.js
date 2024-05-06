//Global Scope
let a = 600;
const b = 20;
var c = 300;


//Block Scope--inner variable name not to be leak
if(true){
    let a = 10;
    const b = 60;
    var c = 30; //this is on global scope
    // console.log("Innner:", c);
    // console.log(inner a backtick value ${a})
    console.log(`inner value ${c}`);
    //multiple scopes
    // function addNum(){
    // }
}

console.log(a)
// console.log(b)
// console.log(c)