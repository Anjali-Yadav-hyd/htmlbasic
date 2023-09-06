// arguments

var f = function f1(){
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments.length)
}
f("NameOne")
f("NameOne", "NameTwo", "NmaeThree")
// NameOne
// 1
// [Arguments] { '0': 'NameOne', '1': 'NameTwo', '2': 'NmaeThree' }
// NameOne
// 3