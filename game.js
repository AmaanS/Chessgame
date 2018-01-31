define(['board', 'pieces'], function(Board, Piece) 
{ 

    'use strict'

    function Game()
    {
        this.pieces = new Piece();
        this.board = new Board();
    }

    Game.prototype.startGame = function()
    {
        this.pieces;
        this.board.render();
    }

    return Game;

});