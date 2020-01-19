function collision() {
	this.playera = new PlayerAction();
	this.enemya = new EnemyAction();

	this.destoryenemy = function() {
		for (var i = 0; i < this.playera.bulletarray.length; i++) {
			for (var e = 0; e < this.enemya.enemyarray.length; e++) {
				if (
					this.enemya.enemyarray[e].x <
						this.playera.bulletarray[i].bulletx + this.playera.bulletarray[i].width &&
					this.enemya.enemyarray[e].x + this.enemya.enemyarray[e].width >
						this.playera.bulletarray[i].bulletx &&
					this.enemya.enemyarray[e].y < this.playera.bulletarray[i].y + this.playera.bulletarray[i].height &&
					this.enemya.enemyarray[e].y + this.enemya.enemyarray[e].height > this.playera.bulletarray[i].y &&
					this.enemya.enemyarray[e].enemydestory == false
				) {
					// console.log(this.enemya.enemyarray[e].x, this.enemya.enemyarray[e].y);
					// this.blasteffect = new Blast(this.enemya.enemyarray[e].x, this.enemya.enemyarray[e].y);
					this.playera.bulletarray[i].remove();
					this.enemya.enemyarray[e].remove();
					this.enemya.enemyarray[e].enemydestory = true;
					this.enemya.enemyarray.splice(e, 1); //remove specific enemy
					this.playera.bulletarray.splice(i, 1); //remove specific bullet
					this.playera.bulletpos.splice(i, 1); //remove position of specific bullet
					// this.blasteffect.draw();
					console.log('enemy destory');
				}
			}
		}
	};

	this.destoryplayer = function() {
		for (var i = 0; i < this.enemya.bulletarray.length; i++) {
			if (
				this.playera.playerobj.x < this.enemya.bulletarray[i].bulletx &&
				this.playera.playerobj.x + this.playera.playerobj.width > this.enemya.bulletarray[i].bulletx &&
				this.playera.playerobj.y < this.enemya.bulletarray[i].bullety &&
				this.playera.playerobj.y + this.playera.playerobj.height > this.enemya.bulletarray[i].bullety &&
				this.playera.playerobj.playerdestory == false
			) {
				this.enemya.bulletarray[i].remove();
				this.playera.playerobj.remove();
				this.enemya.bulletarray.splice(i, 1); //remove specific bullet
				this.enemya.bulletpos.splice(i, 1); //remove position of specific bullet

				this.playera.playerobj.playerdestory = true;
				console.log('player destory');
			}
		}
	};
}
