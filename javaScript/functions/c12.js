// closures

function f1(){
    x = 10
    console.log(x)
    function f2(){
        y = 20
        console.log(y)
        console.log(x + y)
    }
    return f2
}

f = f1()
f()

console.log("After")
delete f1
f()
f1()
// output
// 10
// 20
// 30
// After
// 20
// 30
// 10