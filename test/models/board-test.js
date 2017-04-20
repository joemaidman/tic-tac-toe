"use strict";
var Board = rewire('../src/models/board.js');

describe('Board', function() {
  var board;

  var CellDouble = function(xPosition, yPosition, magicNumber){
    this.player;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.magicNumber = magicNumber;
  };

  CellDouble.prototype = {
    take: function(player){
      this.player = player;
    },
    isTaken: function(){
      return this.player ? true : false;
    }
  };

  var MagicNumbersDouble = function(){
    return [2,7,6,9,5,1,4,3,8];
  };

  beforeEach(function() {
    Board.__set__("Cell", CellDouble);
    Board.__set__("MagicNumbers", MagicNumbersDouble);
    board = new Board();
  });

  it('exists', function(){
    expect(board).to.exist;
  });

  it('constructor makes correct function calls', function() {
    var populateCellsSpy = sinon.spy(Board.prototype, 'populateCells');
    var _pushCellSpy = sinon.spy(Board.prototype, '_pushCell');
    board = new Board();
    expect(populateCellsSpy).to.have.been.calledOnce;
    expect(_pushCellSpy.callCount).to.equal(9);
  });

  it('has an array of magic numbers', function(){
    expect(board.magicNumbers).to.have.lengthOf(9);
    expect(board.magicNumbers).to.have.members([2,7,6,9,5,1,4,3,8]);
  });

  it('has an array of nine cells with the correct locations and magic numbers', function() {
    expect(board.cells).to.have.lengthOf(9);
    expect(board.cells[0].magicNumber).to.equal(2);
    expect(board.cells[0].xPosition).to.equal(0);
    expect(board.cells[0].xPosition).to.equal(0);
  });

});
