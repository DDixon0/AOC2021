//File Stream
const fs = require('fs');

//Board Class
const Board = require("./board.js")

//Data Array
let data = [];

//Secret Numbers
let secretNums = [];

//Boards
const bingoBoards = [];

//Winnnig Bingo Board!
let winner = 0;
let winnerNum = 0;

//Read File
const readData = ()=>{
    try{
        let file = fs.readFileSync('data.txt', 'utf8');
        data = file.split("\r\n");
    }catch (err){
        console.error(err);
    }
}

//Picked Numbers
getSecretNums = () =>{
    secretNums = data.shift();
    secretNums = secretNums.split(",").map(_=>parseInt(_,10));
}


//Contruct Board objects
constrBoard = () =>{
    for (let i = 1; i < data.length; i++) {
        
        const temp = new Array(5);
        let j = 0;
        while(data[i] != "" && data[i] != undefined){
            temp[j] = data[i].split(" ").map(_=>parseInt(_,10)).filter(_=>Number.isInteger(_));
            j++;
            i++
        }

        bingoBoards.push(new Board(temp));
        
    }
}

//Assumption: Order of boards is order of boards being checked
playBingo = () =>{

    //NO more possible winners
    if(bingoBoards.length == 0) return;

    for (let i = 0; i < secretNums.length; i++) {
        
        //Run each number for each Board
        for (let j = 0; j < bingoBoards.length; j++) {
            
            if(bingoBoards[j].update(secretNums[i])){
                winner = j;
                winnerNum = secretNums[i];
                end();
                bingoBoards.splice(j,1);
                return playBingo();
            }
            
        }
        
    }

    console.log("NO WINNER!!!");

}

end = () =>{

    console.log("WE HAVE A LAST WINNER!!!!!");
    console.log(bingoBoards[winner].getNumbers());
    console.log(bingoBoards[winner].getPicked());
    console.log(bingoBoards[winner].getScore(), "*", winnerNum,"=",bingoBoards[winner].getScore()*winnerNum);
}

readData();
getSecretNums();
constrBoard();

playBingo();




// console.log(bingoBoards[1]);