var collisionobj = new collision();
function game() {
	var that = this;
	this.init = function() {
		collisionobj.playera.bulletinit();
		collisionobj.playera.playerobj.drawPlayer();
		collisionobj.playera.draw();
		collisionobj.enemya.bulletinit();
		collisionobj.enemya.draw();
		collisionobj.enemya.enemyobj.drawenemy();
	};
	this.gameloop = setInterval(function() {
		collisionobj.playera.shoot();
		//collisionobj.enemya.move();
		collisionobj.enemya.shoot();
		collisionobj.destoryenemy();
		collisionobj.destoryplayer();
		if (collisionobj.playera.playerobj.playerdestory == true) {
			console.log('Game Over');
			clearInterval(that.gameloop);
		}
	}, 100);
}

var gameobj = new game();
gameobj.init();
document.onkeydown = collisionobj.playera.move;
document.onkeyup = collisionobj.playera.sd;
gameobj.gameloop;
