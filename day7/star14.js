//File Stream
const fs = require('fs');

//Data Array
let data = [];

let track = 0;

//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');
        data = file.split(",").map(n => parseInt(n,10));
    }catch (err){
        console.error(err);
    }
}

const surveyData = ()=>{
    console.log("Data survey:")
    console.log(Math.max(...data));
    console.log(Math.min(...data));
    console.log((data.reduce((a,b) => a+b))/data.length);
    data.sort();
    console.log(data[data.length/2]);
    console.log(data.reduce((a,b) => a + Math.abs(b-2)));
}

const bruteForce = ()=>{
    console.log("Brute Force");
    let min = Infinity;
    for (let i = 0; i < data.length; i++) {
        let newMin = data.reduce((a,b,) => a + Math.abs(i-b) * (Math.abs(i-b)+1)/2, 0);
        //let newMin = data.reduce(reducer, 0)
        if(newMin < min){
            min = newMin;
            console.log(i);
        } 
    }
    console.log(min);
    console.log();
    
}

/*
    const reducer = (p,c,i,arr) => {
        const returns = p + Math.abs(c-track);
        console.log(`Previous: ${p}, Current: ${c}, Index: ${i}, returns: ${returns}`);
        return returns;
    }
*/

readData();
//surveyData();
bruteForce();
//console.log(data);



