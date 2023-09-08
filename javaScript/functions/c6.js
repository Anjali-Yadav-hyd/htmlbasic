// PURE FUNCTIONS
// pure function will always produce the same output.It does not modify any data outside the scope.
// It does not change the state of variables.

function f1(){
    n = 5                  // local variable
    square = n*n
    return console.log(square)
}
f1()
// 25


// impure functions
// impure functions can produce different outputs for the same inputs due to changes in the program's state.
// impure function can make code harder to reason about and test.

n = 5                  // global variable
function f2(){
    square = n*n
    return console.log(square)
}
n = 10
f2()
// 100

// pure function example

function login(username, password){
    if(username=="Admin" && password=="Admin"){
        console.log("login success")
    }else{
        console.log("login failure")
    } 
}

login("Admin", "Admin")
// login success

// impure function example

function loginAdmin(username, password){
    username = "developer"
    if(username=="Admin" && password=="Admin"){
        console.log("login success")
    }else{
        console.log("login failure")
    } 
}

loginAdmin("Admin", "Admin")
// login failure

