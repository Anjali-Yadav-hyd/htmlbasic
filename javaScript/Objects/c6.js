// udating, adding, deleting properties
// string literals
fName = "Sai"
lName = "Kiran"

// object literals
var l1 ={
    firstName: fName,
    lastName: lName
}
console.log(l1)
// { firstName: 'Sai', lastName: 'Kiran' }

l1.job = "IT"
l1.contact = 9855457965

console.log(l1)
// { firstName: 'Sai', lastName: 'Kiran', job: 'IT', contact: 9855457965 }

delete l1.lastName
console.log(l1)
// { firstName: 'Sai', job: 'IT', contact: 9855457965 }
