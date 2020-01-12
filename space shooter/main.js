var playera = new PlayerAction();
var enemya = new EnemyAction();
function game() {
	this.init = function() {
		playera.bulletinit();
		playera.draw();
		enemya.bulletinit();
		enemya.draw();
	};
	setInterval(function() {
		playera.shoot();
		//enemya.move();
		enemya.shoot();
	}, 100);
}

var gameobj = new game();
gameobj.init();
document.onkeydown = playera.move;
document.onkeyup = playera.sd;
