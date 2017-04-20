"use strict";
var Cell = rewire('../src/models/cell.js');

describe('Cell', function() {
  var cell;

  beforeEach(function() {
    cell = new Cell();
  });

  it('exists', function() {
    expect(cell).to.exist;
  });

});
