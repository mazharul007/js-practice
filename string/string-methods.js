// method practise with simple password validation

let isValidPassword = (password)=>{
    if(password.length> 8 && !password.includes("password")){
        console.log("valid Password");
    }else{
        console.log("invalid password");
    }
}
isValidPassword("naumy1234"); //output : valid password
isValidPassword("naumy1234password") // output : invalid password
 