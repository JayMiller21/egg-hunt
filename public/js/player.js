// function Player($board) {
//   this.x = $board.width() / 2;
//   this.y = $board.height() / 2;
//   this.dir = "f"
//     // left = "a"
//     // up = "s"
//     // down = "d"
//     // right = "f"
//   this.$board = $board;
//   this.init();
// }

// Player.prototype.init = function() {
//   this.$html = $("<div id='Player'>P</div>");
//   this.$board.append(this.$html);
//   this.$html.css('position', 'relative');
//   this.speed = 3;
//   this.updatePosition();
// }

// Player.prototype.updatePosition = function() {
//   this.$html.css('left', this.x);
//   this.$html.css('top', this.y);
// }

// Player.prototype.move = function() {
//   old_x = this.x;
//   old_y = this.y;
//   switch(this.dir) {
//     case "d":
//       this.y += this.speed;
//       break;
//     case "s":
//       this.y -= this.speed;
//       break;
//     case "f":
//       this.x += this.speed;
//       break;
//     case "a":
//       this.x -= this.speed;
//       break;
//   }
//   if (! this.inBounds()) {
//     this.x = old_x;
//     this.y = old_y;
//   }
//   this.updatePosition();
// }

// Player.prototype.inBounds = function() {
//   return (this.x > 0 &&
//           this.x < (this.$board.width() - this.$html.width()) &&
//           this.y > 0 &&
//           this.y < (this.$board.height() - this.$html.height())
//          )
// }


