// adding properties and function to an empty object
l1 = {

}
console.log(l1)
// {}
l1.firstName = "Sai"
l1.lastName = "Kiran"

console.log(l1)
// { firstName: 'Sai', lastName: 'Kiran' }

l1.f1 = function(){
    console.log(l1.lastName, l1.firstName)
}

l1.f1()
// Kiran Sai

