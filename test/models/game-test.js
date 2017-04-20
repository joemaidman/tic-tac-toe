var Game = rewire('../src/models/game.js');
// var Board = rewire("../../src/board.js");
// var Player = rewire("../../src/player.js");

describe('Game', function() {
  var game;

  var playerDouble = function(symbol){
    this.symbol = symbol;
  };

  var boardDouble = function(){
  };
  boardDouble.prototype = {
    testFunc: function(){
      console.log("calling the double, not the original!");
    }
  };

  beforeEach(function() {
    Game.__set__("Board", boardDouble);
    var playerOne = new playerDouble("X");
    var playerTwo = new playerDouble("O");
    game = new Game(playerOne, playerTwo);
  });

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

  });

});
