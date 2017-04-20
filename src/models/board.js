function Board(){
}

Board.prototype = {
  testFunc: function(){
    console.log("This is the original, not the double...")
  }
};

module.exports = Board;
