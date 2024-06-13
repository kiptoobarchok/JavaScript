//for - in loop allows to loop through property of an object
//statements found within the loop body is executed once for each property

var names = {
    firsname : 'Caleb',
    lastname : 'Kiptoo',
    surname : 'Barchok'
}

for (var name in names) {
    console.log(name, '-', names[name])
}

var myArr = ['Caleb', 'Kiptoo', 21, 'ALX', 'Student']

for (var info in myArr){
    console.log(info, '-', myArr[info])
}


const obj = {a : 1, b : 2, c : 3};

for (const key in obj) {
    console.log(key, '-',obj[key]);
}

let color = ['red', 'green', 'blue']

for (var i in color) {
    console.log(i, '=', color[i])
}

var str = 'Caleb'

for (var i in str){
    console.log(i, '-', str[i])
}
