function EnemyAction() {
	this.enemyobj = new enemy(50, 50);
	this.bulletarray = new Array();
	this.bulletpos = new Array();
	this.bulletspeed = 10;
	this.enemypos = this.enemyobj.x;
	var xv = new Array();
	var screenhight = document.getElementById('gameScreen').offsetHeight;
	var screenwidth = document.getElementById('gameScreen').offsetWidth;
	var that = this;

	this.bulletinit = function() {
		this.bulletobj = new enemy(this.enemyobj.x, this.enemyobj.y);
		this.bulletarray.push(this.bulletobj);
		this.bulletpos.push(this.bulletobj.bullety);
	};

	this.draw = function() {
		for (var i = 0; i < this.bulletarray.length; i++) {
			this.bulletarray[i].drawbullet();
		}
		// this.enemyobj.drawenemy();
	};

	this.move = function() {
		for (var i = 0; i < that.bulletarray.length; i++) {
			xv[i] = Math.floor(Math.random() * 76 + 25) / 50;

			that.enemyobj.x += xv[i];
			this.enemyobj.drawenemy();

			if (that.enemyobj.x - that.enemyobj.width < i && xv[i] < 0) {
				// check if box going left
				xv[i] = -xv[i];
			}
			if (that.enemyobj.x + that.enemyobj.width > screenwidth && xv[i] > 0) {
				// check if box going right
				xv[i] = -xv[i];
			}
		}
	};

	this.shoot = function() {
		for (var i = 0; i < that.bulletarray.length; i++) {
			var bullh = that.bulletpos[i] + Math.floor(that.bulletarray[i].height / 9);

			that.bulletpos[i] += that.bulletspeed;
			that.bulletarray[i].bullety = that.bulletpos[i];
			that.draw();
			if (bullh >= screenhight) {
				that.bulletarray[i].remove();
				that.bulletarray.shift(); //remove first bullet
				that.bulletpos.shift(); //remove position of first bullet
			}
		}

		// shoot another bullet when top position of last bullet reach at 400
		if (that.bulletpos[that.bulletpos.length - 1] == 400 && that.enemyobj.enemydestory == false) {
			that.bulletinit();
		}
	};
}
