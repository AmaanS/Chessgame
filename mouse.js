for (var i = 0; i < 17; i++)
        {
            if (this.clickPosX >= this.arrayX[this.piecePosArray[i]] + 12.5 && this.clickPosX <= this.arrayX[this.piecePosArray[i]] + 62.5)
            {
                if (this.clickPosY >= this.arrayY[this.piecePosArray[i]] + 12.5 && this.clickPosY <= this.arrayY[this.piecePosArray[i]] + 62.5)
                {

                    console.log(this.pieces.pawn)
                    // this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
                    this.ctx.strokeStyle = "red";
                    this.ctx.lineWidth = 2;
                    this.ctx.strokeRect(this.arrayX[this.piecePosArray[i]] + 12.5, this.arrayY[this.piecePosArray[i]] + 12.5, 50, 50)
                    //console.log("piece clicked!" + " X: " + this.arrayX[this.piecePosArray[i]] + " Y: " + this.arrayY[this.piecePosArray[i]])

                    switch (i)
                    {
                        case 1:
                            console.log("castle func here")
                            break;

                        case 0:
                            console.log("castle func here")
                            break;

                        case 2:
                            console.log("knight func here")
                            break;
    
                        case 3:
                            console.log("knight func here")
                            break;

                        case 4:
                            console.log("bishop func here")
                            break;

                        case 5:
                            console.log("bishop func here")
                            break;

                        case 6:
                            console.log("king func here")
                            break;

                        case 8:
                            console.log("queen func here")
                            break;

                        case 9:
                            console.log("pawn peice selected")
                            break;

                    }
                } // end of clickPosY if statement
            } // end of clickPosX if statement
        } // end of for loop
    } // end of function

    define(['pieces', 'board'], function(Piece, Board) 
{

    'use strict';

    var directionToMove = "forward";
    var canPieceMove = false;
    var maxMoveDistance = 0;
    var firstTurn = false;

    function Move()
    {
        this.canvas = document.getElementById("chessBoard");
        this.ctx = this.canvas.getContext("2d");

        this.pieces = new Piece();
        this.board = new Board();
        
        this.arrayX;
        this.arrayY;

        this.board.render();

        this.arrayX = this.board.gridArrayX;
        this.arrayY = this.board.gridArrayY;

    
    }


    Move.prototype.begin = function()
    {
        
        console.log(this.pieces.definePieces())
        console.log("module loaded")
    }

    return Move;

});