define(['board'], function(Board) 
{

    'use strict'

    // var Piece = 
    // {
    //     type: 'Default',
    //     colour: 'Default',
    //     pos: 'Default',
    //     in_play: true,
    //     taken: false,
    // }

    // var pawn = Object.create(Piece);
    // pawn.type = "Pawn";
    // pawn.colour = "black";
    // pawn.in_play = true;
    // pawn.taken = false;

    // var castle = Object.create(Piece);
    // castle.type = "Castle";
    // castle.colour = "black";
    // castle.in_play = true;
    // castle.taken = false;

    function Piece(type, colour, pos, IN_PLAY, TAKEN)
    {

        this.type = type;
        this.colour = colour;
        this.pos = pos;
        this.IN_PLAY = IN_PLAY;
        this.TAKEN = TAKEN;

    }

    Piece.prototype.positionOnBoard = function()
    {

       return this.pos;

    }

    Piece.prototype.pieceTaken = function()
    {

        this.TAKEN = true;
        this.IN_PLAY = false;

    }

    Piece.prototype.pieceCanMove = function()
    {

        this.IN_PLAY = true;
        this.TAKEN = false;

    }
   
    var castle = new Piece("CASTLE", "black", "a7", true, false);
    var knight = new Piece("KNIGHT", "black", ["a1", "a6"], true, false);
    var bishop = new Piece("BISHOP", "black", ["a2", "a5"], true, false);
    var king = new Piece("KING", "black", ["a3"], true, false);
    var queen = new Piece("QUEEN", "black", ["a4"], true, false);
    var pawn = new Piece("PAWN", "black", ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7"], true, false)

    var canvas = document.getElementById("chessBoard");
    var ctx = canvas.getContext("2d")

    castle.pieceTaken();

    console.log(castle)

    function Indexing(xArray, yArray)
    {

        this.board = new Board();
        this.board.indexing();

        xArray = this.board.gridArrayX;
        yArray = this.board.gridArrayY;

    }

    return Indexing;    
    return Piece;

});

