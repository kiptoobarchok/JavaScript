#!/usr/bin/node

rows=[];


for (let i = 0; i <= 10; i++){
    rows.push(i)
} 

let res = "";

for (const val of rows){
    res = res + rows;
  }
  
console.log(res)