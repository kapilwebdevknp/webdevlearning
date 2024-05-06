function loginUserMessage(username){ //default value will work argument not given
    if(username === undefined){
        console.log("please enter username")
        return
    }
    // if(undefined){  //both are same
    //     console.log("please enter username")
    //     return
    // }
    return `${username} just logged in`
 }

 console.log(loginUserMessage("kapil patel"));