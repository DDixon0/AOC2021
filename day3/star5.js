
const fs = require('fs');
let data = [];
const rate = [];
let result_g = "";
let result_e = "";



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
const trackRate =()=>{
    rate.length=data[0].length;
    rate.fill(0);

    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].length; j++){
            rate[j]+=parseInt(data[i][j],10);
        }
    }
}

//Constructs strings of Most Common Value
const constructStr = () =>{
    rate.forEach(elem => {
        if(elem >= data.length/2){
            result_g+="1";
            result_e+="0";
        }else{
            result_g+="0"
            result_e+="1"
        }
    });



    result_e = parseInt(result_e,2);
    result_g = parseInt(result_g,2);
}

readData();
trackRate();
constructStr();
//console.log(instructions);
console.log(rate);
console.log(result_e);
console.log(result_g);

console.log("The result is: ", result_g*result_e);

//console.log(movement[1]);
//console.log(movement[2]);
//console.log("The value is:", movement[0]*movement[1]);
//Go through file
