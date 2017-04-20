var Board = require('./board.js');

function Game(playerOne, playerTwo){
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.currentPlayer = this.playerOne;
  this.playing = true;
  this.board = new Board();
  this.board.testFunc();
}

Game.prototype = {
  inPlay: function(){
    return this.playing;
  }
};

module.exports = Game;
