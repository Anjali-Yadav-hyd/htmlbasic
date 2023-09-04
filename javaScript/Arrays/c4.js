// find()
l1 = [10, 20, 30, 40, 50]

// function
function checkValues(l1){
    return l1>=40
}

// callfunc
console.log(l1.find(checkValues))
// 40

// find index
l1 = [10, 20, 30, 40, 50]

function checkValues(l1){
    return l1>=40
}

console.log(l1.findindex(50))
