//File Stream
const fs = require('fs');

//Fish Class, may not be neccesary
//onst Fish = require("./fish.js")

//Data Array
let data = [];


//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');
        data = file.split(",").map(n => parseInt(n,10));
    }catch (err){
        console.error(err);
    }
}

const runSimulation = ()=>{
    let days = 0;
    while(days != 80){
        let oldFish = fish.length;
        for (let i = 0; i < oldFish; i++) {

            if(fish[i] == 0){
            fish.push(8);
            fish[i] = 7;
            }

            fish[i]--;
        }

        days++;
    }
}

readData();
//console.log(data);
const fish = [...data];
runSimulation();
console.log(fish.length);


