function EnemyAction() {
	this.enemyarray = [];

	this.bulletarray = new Array();
	this.bulletpos = new Array();
	this.bulletspeed = 10;
	//this.enemypos = this.enemyobj.x;
	var xv = new Array();
	var screenhight = document.getElementById('gameScreen').offsetHeight;
	var screenwidth = document.getElementById('gameScreen').offsetWidth;
	var that = this;
	this.counter = 0;

	this.initenemy = function() {
		x = Math.floor(Math.random() * 1000 + 100);

		if (Math.floor(Math.random() * 2) == 0) {
			x = -x;
		}

		if (x < 0) {
			// check if box going left
			x = 0;
		}
		if (x > screenwidth) {
			// check if box going right
			x = screenwidth;
		}

		this.enemyobj = new enemy(x, 50);
		this.enemyarray.push(this.enemyobj);
	};

	this.bulletinit = function() {
		for (var i = 0; i < that.enemyarray.length; i++) {
			// shoot another bullet when top position of last bullet reach at 400
			if (that.enemyarray[i].enemydestory == false) {
				this.bulletobj = new enemy(that.enemyarray[i].x, that.enemyarray[i].y);
				this.bulletarray.push(this.bulletobj);
				this.bulletpos.push(this.bulletobj.bullety);
			}
		}
	};

	this.draw = function() {
		for (var i = 0; i < this.bulletarray.length; i++) {
			this.bulletarray[i].drawbullet();
		}
		for (var i = 0; i < this.enemyarray.length; i++) {
			this.enemyarray[i].drawenemy();
		}
		// this.enemyobj.drawenemy();
	};

	// this.move = function() {
	// 	for (var i = 0; i < that.bulletarray.length; i++) {
	// 		xv[i] = Math.floor(Math.random() * 76 + 25) / 50;

	// 		that.enemyobj.x += xv[i];
	// 		this.enemyobj.drawenemy();

	// 		if (that.enemyobj.x - that.enemyobj.width < i && xv[i] < 0) {
	// 			// check if box going left
	// 			xv[i] = -xv[i];
	// 		}
	// 		if (that.enemyobj.x + that.enemyobj.width > screenwidth && xv[i] > 0) {
	// 			// check if box going right
	// 			xv[i] = -xv[i];
	// 		}
	// 	}
	// };

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
		that.counter++;
		if (that.counter == 25) {
			that.bulletinit();
			that.counter = 0;
		}
	};
}
