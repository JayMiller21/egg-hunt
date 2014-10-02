// function Game() {
//   this.$board = $('#board');
//   this.player = new Player(this.$board);
//   this.egg = new Egg(this.$board)
// }

// Game.prototype.process = function() {
//   this.player.move();
// }

// function Egg($board) {
//   this.x = Math.random() * (600 - 1) + 1;
//   this.y = Math.random() * (600 - 1) + 1;
//   // Returns a random number between min (inclusive) and max (exclusive)
//   this.$html = $("<div class='egg'></div>");
//   this.$board = $board;
// }

// $(document).ready(function() {
//   game = new Game();

//   Mousetrap.bind('down', function() {
//     game.player.dir = "d";
//   });
//   Mousetrap.bind('up', function() {
//     game.player.dir = "s";
//   });
//   Mousetrap.bind('left', function() {
//     game.player.dir = "a";
//   });
//   Mousetrap.bind('right', function() {
//     game.player.dir = "f";
//   });

//   // setInterval(game.process.bind(game), 20); // 50 FPS
// });
