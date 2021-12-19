
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
    for (let i = 1; i < depths.length; i++) {

        if(depths[i] > depths[i-1]){
            increase++;
        }
        
    }
}

readData();
countIncr();
console.log(increase);
//Go through file
