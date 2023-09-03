// indexof()
l1 = [10, 20, 30, 40, 50]
console.log(l1)
console.log(l1.indexOf(10))
// 0
console.log(l1.indexOf(60))
// -1

// includes
l1 = [10, 20, 30, 40, 50]
console.log(l1.includes(20))
// true
console.log(l1.includes(70))
// false

// push
l1 = [10, 20, 30, 40, 50]
l1.push(60)
l1.push(70)
l1.push(80)
console.log(l1)
// [
//   10, 20, 30, 40,
//   50, 60, 70, 80 
// ]
console.log(l1.length)
// 8
console.log(l1.push(90))
// 9 length of the array

// pop
l1 = [10, 20, 30, 40, 50]
l1.pop()
console.log(l1)
// [ 10, 20, 30, 40 ] last item removed
console.log(l1.pop())
// 40
console.log(l1)
// [ 10, 20, 30 ]

// shift
l1 = [10, 20, 30, 40, 50]
l1.shift()
console.log(l1)
// [ 20, 30, 40, 50 ]
console.log(l1.shift())
// 20 element that it removed
console.log(l1)
// [ 30, 40, 50 ]

// unshift
l1 = [10, 20, 30, 40, 50]
l1.unshift(60)
console.log(l1)
// [ 60, 10, 20, 30, 40, 50 ] 60 added to first place

