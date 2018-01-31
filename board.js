define([], function() 
{ 

    'use strict';

    function Board()
    {
        this.canvas = document.getElementById("chessBoard");
        this.ctx = this.canvas.getContext("2d");

        this.arrayX;
        this.arrayY;

        this.gridArrayX; 
        this.gridArrayY;
        this.row;

        this.x;
        this.y; 

        this.blockCol; 
        this.blockRow;
    } 

    Board.prototype.render = function()
    {
        this.canvas = document.getElementById("chessBoard");
        this.ctx = this.canvas.getContext("2d");
   
        this.x = 0;
        this.y = 0;

        this.blockCol = 0;
        this.blockRow = 0;

        for (this.blockRow = 0; this.blockRow < 8; this.blockRow++) 
        {
            for (this.blockCol = 0; this.blockCol < 8; this.blockCol++) 
            {
                this.ctx.beginPath();
                this.ctx.fillStyle = ["#eeeed2", "#45392d"][(this.blockRow + this.blockCol) % 2];
                this.ctx.fillRect(this.blockCol * 75, this.blockRow * 75, 75, 75);

            } // end of 2nd for loop 
        } // end of 1st for loop 

        // Outline of board
        this.ctx.strokeStyle = "black"
        this.ctx.lineWidth = 5;
        this.ctx.strokeRect(0, 0, 8 * 75, 8 * 75);
    }

    Board.prototype.indexing = function()
    {
        this.gridArrayX = new Array();
        this.gridArrayY = new Array();
        this.row = ["a", "b", "c", "d", "e", "f", "g", "h"];

        this.x = 0;
        this.y = 0;

        this.blockCol = 0;
        this.blockRow = 0;

        for (this.blockRow = 0; this.blockRow < 8; this.blockRow++) 
        {
            for (this.blockCol = 0; this.blockCol < 8; this.blockCol++) 
            {
                this.x = this.blockCol * 75;
                this.y = this.blockRow * 75;
  
                this.gridArrayX[this.row[this.blockRow] + this.blockCol] = this.x; // array name[index] = x associaticve array
                this.gridArrayY[this.row[this.blockRow] + this.blockCol] = this.y; // array name[index] = y
            }
        }     
    }

    return Board;

});