// set and get properties using - and []
var l1 = {
    firstName:"Sai",
    lastName:"Kiran"
}
console.log(l1)
// { firstName: 'Sai', lastName: 'Kiran' }
console.log(l1.firstName, l1.lastName)
// Sai Kiran
console.log(l1['firstName'], l1['lastName'])
// Sai Kiran

l1.job = "IT"
console.log(l1['job'])
// IT

l1.contact = 8975556788
console.log(l1['contact'])
// 8975556788

console.log(l1)
// { firstName: 'Sai', lastName: 'Kiran', job: 'IT', contact: 8975556788 }