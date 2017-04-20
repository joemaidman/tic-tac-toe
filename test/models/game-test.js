"use strict";
var Game = rewire('../src/models/game.js');

describe('Game', function() {
  var game;
  var playerOne;
  var playerTwo;

  var playerDouble = function(symbol){
    this.symbol = symbol;
  };

  var boardDouble = function(){
  };

  boardDouble.prototype = {
    updateCell: function(xPosition, yPosition){
      return true;
    }
  };

  beforeEach(function() {
    Game.__set__("Board", boardDouble);
    playerOne = new playerDouble("X");
    playerTwo = new playerDouble("O");
    game = new Game(playerOne, playerTwo);
  });

  describe('a new game', function(){

    it('exists', function() {
      expect(game).to.exist;
    });

    it('has a #playerOne', function(){
      expect(game.playerOne).to.exist;
    });

    it('has a #playerTwo', function(){
      expect(game.playerTwo).to.exist;
    });

    it('has a #currentPlayer', function(){
      expect(game.currentPlayer).to.exist;
    });

    it('is .inPlay', function(){
      expect(game.inPlay()).to.be.true;
    });

    it('has a #board', function(){
      expect(game.board).to.exist;
    });

    it('does not have a #winner', function(){
      expect(game.winner).not.to.exist;
    });

    describe('.takeTurn', function(){

      it('should call #board.updateCell with x and y coordinates', function(){
        var boardUpdateCellSpy = sinon.spy(game.board, 'updateCell');
        var switchPlayerSpy = sinon.spy(game, '_switchPlayer');
        game.takeTurn(0,0);
        expect(boardUpdateCellSpy).to.have.been.calledWith(0,0);
        expect(switchPlayerSpy).to.have.been.calledOnce;
        expect(game.currentPlayer).to.equal(playerTwo);
      })

    });

  });

});
