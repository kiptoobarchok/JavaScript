#!/usr/bin/node

function me(){
    console.log(42)
}

me()

let lap1 = 34;
let lap2 = 35;
let lap3 = 36;

function addLap(){
    return (lap1 + lap2 + lap3);
}
console.log(addLap())

let laps = 0

function incrLaps(){
    laps += 1;
}

incrLaps();
incrLaps();
incrLaps();
console.log(laps)