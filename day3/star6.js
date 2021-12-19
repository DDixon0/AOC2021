
const { WSAEHOSTDOWN } = require('constants');
const fs = require('fs');
const { getegid } = require('process');
let data = [];
let result_o = "";
let result_c = "";



//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');

        data = file.split("\r\n");
    }catch (err){
        console.error(err);
    }
}

//Counts the amount bits appear
const trackRate =(inputRate,inputData)=>{
    inputRate.length=inputData[0].length;
    inputRate.fill(0);

    for(let i = 0; i < inputData.length; i++){
        for(let j = 0; j < inputData[i].length; j++){
            inputRate[j]+=parseInt(inputData[i][j],10);
        }
    }
}

//Constructs strings of Most Common Value
const constructStr = (generator,inputRate, half) =>{
    inputRate.forEach(elem => {
        if(elem >= half){
            generator[0]+="1";
            generator[1]+="0";
        }else{
            generator[0]+="0"
            generator[1]+="1"
        }
    });
}


//Finds the rating
const findRating = (g) =>{

    let possibleSolution = data;
    let i = 0;
    while(possibleSolution.length != 1){

        const currentRate = [];
        const criteria = new Array(2).fill("");
        trackRate(currentRate,possibleSolution);;
        constructStr(criteria,currentRate, possibleSolution.length/2);
        possibleSolution = possibleSolution.filter(word => word[i] == criteria[g][i]);
        i++;
    }
    
    return possibleSolution[0];
}

readData();
let oxygen = findRating(0);
let CO2 = findRating(1);
oxygen = parseInt(oxygen,2);
CO2 = parseInt(CO2,2);

/*
trackRate();
console.log(rate);
constructStr();

console.log("Criteria!")
console.log(result_c);
console.log(result_o);
result_o = findRating(result_o);
result_c = findRating(result_c);
console.log("New Criteria!")
console.log(result_c);
console.log(result_o);
result_c = parseInt(result_c,2);
result_o = parseInt(result_o,2);
console.log("Criteria Integer")
console.log(result_c);
console.log(result_o);
*/
console.log(oxygen);
console.log(CO2);

console.log("The result is: ", oxygen*CO2);

//console.log(movement[1]);
//console.log(movement[2]);
//console.log("The value is:", movement[0]*movement[1]);
//Go through file
