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