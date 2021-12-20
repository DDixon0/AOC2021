//File Stream
const fs = require('fs');

//Data Array
let data = [];


//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');
        data = file.split("\r\n");
    }catch (err){
        console.error(err);
    }
}

readData();
console.log(data);



