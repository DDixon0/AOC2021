
const fs = require('fs');
let depths = [];
let increase = 0;

//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('depth.txt', 'utf8');
        depths = file.split("\n").map(_=> parseInt(_, 10));
    }catch (err){
        console.error(err);
    }
}

//Count increases
const countIncr = ()=>{
    let previous = depths[0]+depths[1]+depths[2];
    let current = 0;
    for (let i = 3; i < depths.length; i++) {
        current = depths[i]+depths[i-1]+depths[i-2];
        if(current > previous){
            increase++;
        }
        previous = current;
    }
}

readData();
countIncr();
console.log(increase);
//Go through file
