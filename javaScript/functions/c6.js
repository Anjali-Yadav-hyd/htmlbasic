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