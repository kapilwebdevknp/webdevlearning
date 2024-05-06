// function jsuser () {
  // console.log("A");   
  // console.log("B");  
  // console.log("C");
  // console.log("D");
  // console.log("E");
  // console.log("F");
// 
// }

// jsuser()


// function addTwoNumber(num1,num2){   //while creating functions parameter
    //     //Way-1
    //     // let result = (num1+num2);
    //     // return result; 
    //     // console.log("Sachin") //after return nothing will work
    
    //     // way-2
    //     // return num1+num2
    
    // }
    //  const result = addTwoNumber(500,600) 
    //  console.log("Result :", result);                   //This line give undefined due to function not return values

    // way 2 function method

    function addTwoNumber( num1,num2){
    // let result = (num1+num2)
    // return result
    const result = addTwoNumber(500,600) 
    // console.log("Results :" , result);


    }

    function loginUserMessage(username){ //default value will work argument not given
      if(username === undefined){
          console.log("please enter username")
          return
      }
      // if(undefined){  //both are same
      //     console.log("please enter username")
      //     return
      // }
      return `$ {username} just logged in`
    }
  
   console.log(loginUserMessage());