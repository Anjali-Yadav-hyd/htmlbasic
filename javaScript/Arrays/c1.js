var l1 = [10, 20, 30, 40, 50]
console.log(l1)
console.log(l1.length)
// 5
console.log(l1[0])
console.log(l1[1])
console.log(l1[2])
console.log(l1[3])
console.log(l1[4])
console.log(l1[5])
// undefined index 5 not present in array
l1[0] = 100
console.log(l1)
// [ 100, 20, 30, 40, 50 ]
l1[6] = 200
console.log(l1)
// [ 100, 20, 30, 40, 50, <1 empty item>, 200 ]
console.log(l1.length)
// 7
l1[5] = 350
console.log(l1)

// iteration
for(var i = 0; i<l1.length; i++){
    console.log(l1[i])
}