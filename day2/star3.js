
const fs = require('fs');
let instructions = [];
const movement = [0,0];


//Check for int and parses int
const getInt = (input)=>{
    let parsed = parseInt(input, 10);
    if(isNaN(parsed)){
        return input;
    }
    return parsed;
}

//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');
        //String and int in one array, C++ would disapprove
        //Using regular expressions for the split
        instructions = file.split(/[\s]+/).map(_=>getInt(_));
    }catch (err){
        console.error(err);
    }
}

//Track Movement
const trackMove = ()=>{
    for(let i = 0; i< instructions.length; i+=2){
        switch(instructions[i]){
            case "forward":
                movement[0]+=instructions[i+1];
                break;
            case "down":
                movement[1]+=instructions[i+1];
                break;
            case "up":
                movement[1]-=instructions[i+1];
                break;
        }
    }
}

readData();
trackMove();
//console.log(instructions);
//console.log(movement[0]);
//console.log(movement[1]);
//console.log(movement[1]);
console.log("The value is:", movement[0]*movement[1]);
//Go through file
