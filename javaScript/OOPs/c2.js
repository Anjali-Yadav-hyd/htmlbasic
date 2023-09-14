class Parent{

    // properties
    a = 10
    b = 20

    constructor(){
        console.log(a, b)
    }
}

class Parent extends Child{

    // properties
    c = 30
    d = 40

    constructor(){
        console.log(c, d)
    }
}

new Child()