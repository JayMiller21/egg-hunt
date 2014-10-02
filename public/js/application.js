// Game Model
function Game() {
  this.$board = $('#board');
  this.player = new Player(this.$board);
  this.egg = new Egg(this.$board, this.player)
}

Game.prototype.process = function() {
  this.player.move();
    debugger;
  if (Math.abs(this.player.x - this.egg.x) < Math.abs(this.player.css("width")/2 + this.egg.css("width")/2) && Math.abs(this.player.y - this.egg.y) < Math.abs(this.player.css("height")/2 + this.egg.css("height")/2)) {
    this.egg.hide();
  };

}

// Game.prototype.init = function () {
//   this.player.move()
// }

// Egg Model
function Egg($board) {
  this.$board = $board
  // this.player = player
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
  this.$html = $("<div class='egg'></div>");
  this.$board.append(this.$html);
  this.$html.css('position', 'relative');
  this.updatePositionAttribute();
}

// Egg.prototype.disappear = function

// Player Model
function Player($board) {
  this.$board = $board
  this.x = $board.width() / 2;
  this.y = $board.height() / 2;
  this.dir = undefined
  this.init();
}

Player.prototype.init = function() {
  this.$html = $("<div id='player'></div>");
  this.$board.append(this.$html);
  this.$html.css('position', 'relative');
  this.speed = 5;
  this.updatePositionAttribute();
}

Player.prototype.updatePositionAttribute = function() {
  this.$html.css('left', this.x);
  this.$html.css('top', this.y);
}

// Player.prototype.updateScoreAttribute = function() {
//   if
//   this.score += 1
// }

Player.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch(this.dir) {
    case 2:
      this.y += this.speed;
      break;
    case 8:
      this.y -= this.speed;
      break;
    case 6:
      this.x += this.speed;
      break;
    case 4:
      this.x -= this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updatePositionAttribute();
  // this.updateScore();
}

// Player.prototype.move = function() {
//   old_x = this.x;
//   old_y = this.y;
//   switch(parseInt(key.which,10)) {
//       case 68: //down
//         this.y += this.speed;
//         break;
//       case 83: //up
//         this.y -= this.speed;
//         break;
//       case 70: //right
//         this.x += this.speed;
//         break;
//       case 65: //left
//         this.x -= this.speed;
//         break;
//   }
//   if (! this.inBounds()) {
//     this.x = old_x;
//     this.y = old_y;
//   }
//   this.updatePositionAttribute();
// }

Player.prototype.inBounds = function() {
  return (this.x > 0 &&
          this.x < (this.$board.width() - this.$html.width()) &&
          this.y > 0 &&
          this.y < (this.$board.height() - this.$html.height())
         )
}


// Document Ready
$(document).ready(function() {
  // $board = $('#board');
  // egg = new Egg($board);
  // player = new Player($board);
  game = new Game();

  Mousetrap.bind('down', function() {
    game.player.dir = 2;
  });
  Mousetrap.bind('up', function() {
    game.player.dir = 8;
  });
  Mousetrap.bind('left', function() {
    game.player.dir = 4;
  });
  Mousetrap.bind('right', function() {
    game.player.dir = 6;
  });

  setInterval(game.process.bind(game), 20); // 50 FPS



});
