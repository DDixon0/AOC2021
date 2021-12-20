const { assert } = require('console');
const fs = require('fs');
let data = [];
const dataPoints = [];
let overlap = 0;


//Require Point Class
const p = require('./Point.js');

//Require Binary Search Tree
const BST = require("./Tree.js");
const allPoints = new BST();


//write to file
const writeStream = fs.createWriteStream('./Output.txt');
const pathName = writeStream.path;

//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');

        data = file.split("\r\n");
    }catch (err){
        console.error(err);
    }
}

const filterLines = ()=>{

    return data.map(elem => elem.split(" -> ")
        .join().split(",")
        .map(str=>parseInt(str,10)));

    //Map

    //Reduce

    //filter

    //every

    //sum

}

//Use Mapp to crerate points from lines
const createDataPoints = () =>{
    data.map(l => addPoints(l));
}

//Add horizontal and vertical points to BST
const addPoints = (line) =>{

    //Diagonal Lines addition
    
    if(line[1] != line[3]&& line[0] != line[2]){
        addPointsDiagonal(line);
        return;
    }
    

    let axis = 0;

    if(line[1] != line[3])
        axis = 1;
    
    let numPoints = Math.abs(line[0+axis]-line[2+axis]);
    let i = Math.min(line[0+axis], line[2+axis]);
    let max = Math.max(line[0+axis], line[2+axis]);

    while(i <= max){
        if(axis)
            dataPoints.push([line[0], i])
        else
            dataPoints.push([i,line[1]])
        i++;
    }

}

//If line is diagonal, create and add points to BST
const addPointsDiagonal = (line) =>{

    let minX = Math.min(line[0], line[2]);
    let j = 0;
    let maxX = Math.max(line[0], line[2]);
    let maxY = Math.max(line[1], line[3]);

    if((line[0] < line[2] && line[1] < line[3]) || (line[0] > line[2] && line[1] > line[3])){
        j = Math.min(line[1], line[3]);
        //assert(line[0])[0]
        while(minX <= maxX){
            dataPoints.push([minX, j]);
            minX++;
            j++;
        }
    }else{
        while(minX <= maxX){
            
            dataPoints.push([minX, maxY-j]);
            minX++;
            j++;
        }
    }
    
}

//Create our BST to store points
const createBST = () =>{
    dataPoints.map(raw => allPoints.insert(raw));
    console.log("The BST was balanced:", allPoints.balanced());
    console.log("With ", allPoints.getNumPointLeft(),"inputs on the left and",allPoints.getNumPointRight(),"on the rigt!");
    console.log("The answer is ", allPoints.getOverlap(allPoints.root));
    console.log("The answer is not ", allPoints.overlap);
}

//Write all points to file
async function fileWrite(l){
    writeStream.write(`${l} \n`);
     
}

readData();
data = filterLines();
//console.log(data);
createDataPoints();

//Writes
/*
for (let i = 0; i < dataPoints.length; i++) {
    fileWrite(`${dataPoints[i]}`);
}
//dataPoints.map(p=>fileWrite(`${p}`))
*/

createBST();
