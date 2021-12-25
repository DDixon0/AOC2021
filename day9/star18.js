//File Stream
const fs = require('fs');

//Data Array
let data = [];

let sum = 0;


//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');
        data = file.split("\r\n");
    }catch (err){
        console.error(err);
    }
}

//Loops through Each Point
const findLow = ()=>{
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            sum+= lowPoint(i,j);
        }  
    }
}

//Function to check Low POoint
const lowPoint = (x,y)=>{

    let num = parseInt(data[x][y],10);

    //above
    if(data[x-1] != undefined){
        if(parseInt(data[x-1][y],10) <= num) return 0;
    }
    
    //below
    if(data[x+1] != undefined){
        if(parseInt(data[x+1][y],10) <= num) return 0;
    }

    //left
    if(data[x][y-1] != undefined){
        if(parseInt(data[x][y-1],10) <= num) return 0;
    }

    //right
    if(data[x][y+1] != undefined){
        if(parseInt(data[x][y+1],10) <= num) return 0;
    }

    return num+1;
}

readData();
findLow();
console.log("The total rsik is:",sum);



