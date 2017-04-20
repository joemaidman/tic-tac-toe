"use strict";
var Cell = require('./cell.js');
var MagicNumbers = require('./magicNumbers.js');

const ROWS = 3;
const COLS = 3;

function Board(){
  this.cells = [];
  this.magicNumbers = MagicNumbers();
  this.populateCells();
}

Board.prototype = {
  populateCells: function(){
    for (var i = 0; i < ROWS; i++){
      for (var j = 0; j < COLS; j++){
        this._pushCell(j,i,this.magicNumbers[(i*COLS)+j])
      }
    }
  },
  checkWinCondition: function(symbol){

  },
  _evaluate: function(symbol){

  },
  _pushCell(xPosition, yPosition, magicNumber){
    this.cells.push(new Cell(xPosition, yPosition, magicNumber))
  }
};

module.exports = Board;
