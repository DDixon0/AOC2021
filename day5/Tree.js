/*
Name: Denzell Dixon
Date: 12/11/21
    Constructed this BST using geeks for geeks. Link can be found here:
    https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

*/

const Point = require("./Point.js");

class BinaraySearchTree{

    constructor(){
        this.root = null;

        this.numPointLeft = 0;
        this.numPointRight = 0;

        this.overlap = 0;
    }

    //Insert Data, Creates Point object
    insert(data){
        const newPoint = new Point(data);
        
        //make root origin
        if(this.root === null){
            this.root = newPoint;
        }else{
            //console.log(this.root);
            this.insertPoint(this.root, newPoint);
        }


    }

    //Inserts the Point
    insertPoint(point, newPoint){
        //console.log(point);
        if(newPoint.x < point.x){
            //Put on Left Node
            this.numPointLeft++;

            if(point.left === null){
                point.left = newPoint;
            }else{
                this.insertPoint(point.left, newPoint);
            }

        }else if(newPoint.x > point.x){
            //Put on Right Node
            this.numPointRight++;

            if(point.right === null){
                point.right = newPoint;
            }else{
                this.insertPoint(point.right, newPoint);
            }
        }else if(newPoint.y < point.y){
            //Put on Left Node
            this.numPointLeft++;

            if(point.left === null){
                point.left = newPoint;
            }else{
                this.insertPoint(point.left, newPoint);
            }
        }else if(newPoint.y > point.y){
            //Put on Right Node
            this.numPointRight++;

            if(point.right === null){
                point.right = newPoint;
            }else{
                this.insertPoint(point.right, newPoint);
            }
        }else{
            //Overlap, same Point
            point.overlap++;
            this.overlap++;
        }

        //console.log(newPoint.x,newPoint.y);
    }

    //returns boolean if tree is balanced
    balanced(){
        return (Math.abs(this.numPointLeft - this.numPointRight)/(this.numPointLeft + this.numPointRight) < 0.25);
    }

    //inorder Traversal
    inorder(point){

        if(point !== null){
            this.inorder(point.left);
            console.log("("+point.x+","+point.y+")");
            this.inorder(point.right);
        }
    }

    getNumPointLeft(){
        return this.numPointLeft;
    }

    getNumPointRight(){
        return this.numPointRight;
    }

    getOverlap(point){
        if(point !== null){
            let a = 0;
            if(point.overlap >= 1)
                a = 1;

            return this.getOverlap(point.left) +
                this.getOverlap(point.right) +
                a;
            
        }

        return 0;
    }
}

module.exports = BinaraySearchTree;