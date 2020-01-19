var collisionobj = new collision();
var counter = 0;
function game() {
	var that = this;
	this.init = function() {
		collisionobj.playera.bulletinit();
		collisionobj.playera.playerobj.drawPlayer();
		collisionobj.playera.draw();
		collisionobj.enemya.initenemy();
		//collisionobj.enemya.initenemy();
		collisionobj.enemya.bulletinit(50, 50);
		collisionobj.enemya.draw();
	};
	this.gameloop = setInterval(function() {
		if (counter == 20) {
			collisionobj.enemya.initenemy();
			counter = 0;
		}
		collisionobj.playera.shoot();
		//collisionobj.enemya.move();
		collisionobj.enemya.shoot();
		collisionobj.destoryenemy();
		collisionobj.destoryplayer();
		if (collisionobj.playera.playerobj.playerdestory == true) {
			console.log('Game Over');
			clearInterval(that.gameloop);
		}
		counter++;
	}, 100);
}

var gameobj = new game();
gameobj.init();
document.onkeydown = collisionobj.playera.move;
document.onkeyup = collisionobj.playera.sd;
gameobj.gameloop;
