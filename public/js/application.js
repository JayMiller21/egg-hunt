// Game Model
function Game() {
  this.$board = $('#board');
  this.player = new Player(this.$board);
  this.egg = new Egg(this.$board)
}

// Egg Model
function Egg($board) {
  this.$board = $board
  this.x = Math.round(Math.random() * (this.$board.width() - 1) + 1);
  this.y = Math.round(Math.random() * (this.$board.height() - 1) + 1);
  // Returns a random number between min (inclusive) and max (exclusive)
  this.init();
}

Egg.prototype.updatePositionAttribute = function() {
  this.$html.css('left', this.x);
  this.$html.css('top', this.y);
}

Egg.prototype.init = function () {
  this.$html = $("<div class='egg'>E</div>");
  this.$board.append(this.$html);
  this.$html.css('position', 'relative');
  this.updatePositionAttribute();
}

// Player Model
function Player($board) {
  this.$board = $board
  this.x = $board.width() / 2;
  this.y = $board.height() / 2;
  this.init();
}

Player.prototype.init = function() {
  this.$html = $("<div id='player'>P</div>");
  this.$board.append(this.$html);
  this.$html.css('position', 'relative');
  this.speed = 5;
  this.updatePositionAttribute();
}

Player.prototype.updatePositionAttribute = function() {
  this.$html.css('left', this.x);
  this.$html.css('top', this.y);
}

Player.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch(parseInt(key.which,10)) {
      case 68: //down
        this.y += this.speed;
        break;
      case 83: //up
        this.y -= this.speed;
        break;
      case 70: //right
        this.x += this.speed;
        break;
      case 65: //left
        this.x -= this.speed;
        break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updatePositionAttribute();
}

Player.prototype.inBounds = function() {
  return (this.x > 0 &&
          this.x < (this.$board.width() - this.$html.width()) &&
          this.y > 0 &&
          this.y < (this.$board.height() - this.$html.height())
         )
}


// Document Ready
$(document).ready(function() {
  // game = new Game();
  $board = $('#board');
  egg = new Egg($board);
  player = new Player($board);

});
