//File Stream
const fs = require('fs');

//Fish Class, may not be neccesary
//onst Fish = require("./fish.js")

//Data Array
let data = [];

//Fish
const fish = new Array(9).fill(0);


//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');
        data = file.split(",").map(n => parseInt(n,10));//.map(n => fish[n]+=1);
    }catch (err){
        console.error(err);
    }
}

const createDays = ()=>{
    data.forEach(n => {
        fish[n]+=1;
    });
}

const runSimulation = ()=>{
    let days = 0;
    while(days != 256){
        let today = fish.shift();
        fish[6]+= today;
        fish.push(today);
        days++
    }
}

readData();
createDays();
runSimulation();

let answer = fish.reduce((p, c) => p +c);

console.log(answer);


