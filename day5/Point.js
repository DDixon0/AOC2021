class Point{
    constructor(input){

        this.x = input[0];
        this.y  = input[1];
        this.left = null;
        this.right = null;

        this.overlap = 0;
    }

}


module.exports = Point;


