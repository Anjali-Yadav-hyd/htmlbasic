// replace

var obj1 = {
    firstName: "Sai"
}

var objJSON = JSON.stringify(obj1)
console.log(objJSON)
console.log(typeof(objJSON))

var r = objJSON.replace("Sai", "Vamsi")
console.log(r)