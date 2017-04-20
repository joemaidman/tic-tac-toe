var Board = rewire('../src/models/board.js');

describe('Board', function() {
  var board;

  var cellDouble = function(){
  };

  cellDouble.prototype = {
  };

  beforeEach(function() {
    Board.__set__("Cell", cellDouble);
    board = new Board();
  });

  it('exists', function() {
    expect(board).to.exist;
  });

});
