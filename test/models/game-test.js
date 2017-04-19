var assert = require('assert');
var expect = require('chai').expect;
var sinon = require('sinon');

var Game = require('../../src/models/game.js');

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('exists', function() {
    expect(game).to.exist;
  });
});
