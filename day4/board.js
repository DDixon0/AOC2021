//Board Class

class Board{
    constructor(input){
        this.numbers = input;
        //.fill copies the reference of the array not copies of the array, to work around, use map
        //this.picked = new Array(5).fill(new Array(5).fill(false));
        this.picked = new Array(5).fill().map(() => new Array(5).fill(false));

    }

    update(inputNum){

        //Loop through Numbers
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {

                //Skip until we get a match
                if(this.numbers[i][j] != inputNum) continue;
                this.picked[i][j] = true;
                return this.checkBingo(i,j);
            }
        }
        
    }
    
    //Main Method to check if a board has hit BINGO!!!!
    checkBingo(row,col){

        //Check Vertical
        if(this.checkVertical(col)) return true;

        //Check Horizontal
        if(this.checkHorizontal(row)) return true;

        //Check Diagonal: Just re read the instructions, diagonals don't count :(
        //Only run if a value is switched on a diagonal axis
        //if(row == col && this.checkDiagonalL(row,col)) return true;
        //if(row+col == 4 && this.checkDiagonalR(row,col)) return true;
        return false;
    }

    checkVertical(col){
        for (let i = 0; i < 5; i++) {
            if(!this.picked[i][col]) return false;
        }
        return true;
    }

    checkHorizontal(row){
        for (let i = 0; i < 5; i++) {
            if(!this.picked[row][i]) return false;
        }
        return true;
    }

    checkDiagonalL(row,col){
        for (let i = 0; i < 5; i++) {
            if(!this.picked[i][i]) return false;
        }
        return true;
    }

    checkDiagonalR(row, col){
        for (let i = 0; i < 5; i++) {
            if(!this.picked[i][(4-i)]) return false;
        }
        return true;
    }

    getNumbers(){
        return this.numbers;
    }

    getPicked(){
        return this.picked;
    }

    getScore(){
        let s = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if(!this.picked[i][j]){
                    s+=this.numbers[i][j];
                }
                
            }
            
        }
        return s;
    }
}


module.exports = Board;