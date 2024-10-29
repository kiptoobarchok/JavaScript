let test1 = function(){
    console.log(1)
}

test1()

let test2 = function(a){
    console.log(a + 2)
}

test2(2)

let test3 = function( a , b){
    console.log(a + b)
}

test3(3, 2)


//arrow function declarations
let test4 = ()=> {
    console.log("caleb")
}
test4()

let sum = (a, b) => {
    console.log(a + b)
}

sum(22, 2002)

const x = (x , y) => {console.log(x * y)}

x(3, 2)

const mySum = (a, b) => {
    console.log(a + b)
}

mySum(8,9)


let hello = () => { console.log("hello caleb") }

hello()