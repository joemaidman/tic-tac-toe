"use strict";
var Board = require('./board.js');

function Game(playerOne, playerTwo){
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = this.playerOne;
  this.playing = true;
  this.board = new Board();
  this.winner;
}

Game.prototype = {
  inPlay: function(){
    return this.playing;
  },
  takeTurn: function(xPosition, yPosition){
    this.board.updateCell(xPosition,yPosition)
    this._switchPlayer();
  },
  _switchPlayer: function(){
    this.currentPlayer = (this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne);
  }
};

module.exports = Game;
