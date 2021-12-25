//File Stream
const { log } = require('console');
const { Decipher } = require('crypto');
const fs = require('fs');
const { stringify } = require('querystring');

//Data Array
let data = [];
let sum = 0;
//stringCodes = new Array(8).fill(0);



//Read File
const readFile = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');
        data = file.split("\r\n").map(s => s.split(" | "));
    }catch (err){
        console.error(err);
    }
}

const decipherSegment = () =>{
    //console.log(data);
    data.forEach(elem => {
        //First Part of string
        elem[0] = elem[0].split(" ");
        let key = new Array(10).fill().map( () => new Array());
        let temp = new Array(8).fill().map( () => new Array());

        //parse strings by length
        elem[0].forEach(seg => {
            temp[seg.length].push(seg);
        });

        //Start creating key
        //Order matters here
        key[1] = temp[2][0];
        key[3] = getNum3(temp);
        key[2] = getNum2(temp);
        key[4] = temp[4][0];
        key[5] = temp[5][0];
        key[6] = getNum6(temp);
        key[7] = temp[3][0];
        key[8] = temp[7][0];
        key[9] = getNum9(temp);
        key[0] = temp[6][0];
        //console.log(key);

        //Second part of string
        elem[1] = elem[1].split(" ");

        //console.log(elem[1]);
        //console.log(key);
        for (let i = 0; i < elem[1].length; i++) {
            for (let j = 0; j < key.length; j++) {
                let str = key[j];
                //console.log(str);
                if(sortAlphabet(str) == sortAlphabet(elem[1][i])){
                    elem[1][i] = j*(10**(elem[1].length-(i+1)));
                    break;
                }
                
            }
        }
        elem[1] = elem[1].reduce((a,b) => a+b, 0);
        
        sum+=elem[1];
    });
    //console.log(data);

}

const getNum2 = (arr) =>{

    //Count missign segments when compared to 4
    let missingCount = 0;
    for (let i = 0; i < arr[4][0].length; i++) {
        if(arr[5][0].indexOf(arr[4][0][i]) == -1)
            missingCount++;
    }

     //if more than two segments are missing when compared to 4, number must be 2
     if(missingCount >= 2){
        return arr[5].splice(0,1)[0];
    }

    return arr[5].splice(1,1)[0];
}

//get Number 3, compare 1 to strings of length 5
const getNum3 = (arr) =>{

    for (let i = 0; i < arr[5].length; i++) {
       if(arr[5][i].indexOf(arr[2][0][0]) != -1 &&  arr[5][i].indexOf(arr[2][0][1]) != -1)
            return arr[5].splice(i,1)[0];
    }
}

//Compare strings of length 6 to number 1
const getNum6 =(arr) =>{
    for (let i = 0; i < arr[6].length; i++) {
        if(arr[6][i].indexOf(arr[2][0][0]) == -1 || arr[6][i].indexOf(arr[2][0][1]) == -1)
            return arr[6].splice(i,1)[0];
    }
}

//Comparte strings of length 6 to number 4
const getNum9 =(arr) =>{
    for (let i = 0; i < arr[4][0].length; i++) {
        if(arr[6][0].indexOf(arr[4][0][i]) == -1)
        return arr[6].splice(1,1)[0];
    }
    return arr[6].splice(0,1)[0];
}

//From Stack overflow, since the strings are not all in the same order ecven if there are only two characters (https://stackoverflow.com/questions/30912663/sort-a-string-alphabetically-using-a-function)
function sortAlphabet(str) {
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
}

readFile();
decipherSegment();
console.log("The sum is:", sum);
//console.log(stringCodes);

//console.log(stringCodes[2]+stringCodes[4]+stringCodes[3]+stringCodes[7]);


