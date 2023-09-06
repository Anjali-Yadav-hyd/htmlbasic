// functions are used for reusability
// in javascript we use function as a keyword to declare function

// function without any arguments
function f1(){
    console.log("f1 function")
}
//  function call
f1()
// f1 function

// function witharguments
function f2(fname, lname){
    console.log(fname + " " + lname)
}

f2("Sai", "Kiran")
// Sai Kiran
f2("Sai", "Ram")
// Sai Ram
f2("Sai", "Kumar")
// Sai Kumar



// function using return keyword
function f3(a,b){
    return console.log(a+b)
}
f3(10,20)
// 30       

function f4(a,b){
    c = a+b
    return c
}
console.log(f4(20,20))
// 40