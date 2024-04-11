//object literal notation
// objects are key-value pair

var Student = {
    firstname: "Caleb",
    lastname: "Kiptoo",
    age: 21,
    email: "calebkiptoo9090@gmail.com"
};

console.log(Student)

//accessing elements in an object
//(a) - dot notation

console.log("students email address is : ", Student.email)

//(b) - bracket notation

console.log(Student['firstname'])

var Employee = {
    name : "Abel Kiprob",
    ID: 35209390,
    email: "abelcheru5134@gmail.com",
    siblings: ['Caleb', 'Peter'],
    phone_no: '+254719507355',

    address: {
        box_no : "P.O.Box 00511",
        city: "Nairobi",
        place: "Ongata Rongai",
        lane: "Maasai Lodge, Berbers - 06"
    }
}

var b = console.log(Employee.address.lane)
console.log(b)

var c = console.log(Employee.siblings[1])
console.log(c)

Employee.ID = 35209391

console.log(Employee)

Employee.parents = ["Evans Ali Barchok", "Rose Bett"]
console.log(Employee)

delete Employee.parents
console.log(Employee)
