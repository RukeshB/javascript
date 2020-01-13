function PlayerAction() {
	this.playerobj = new player(600, 500);
	this.bulletarray = new Array();
	this.bulletpos = new Array();
	this.bulletspeed = 20;
	this.playerpos = this.playerobj.x;
	var screenwidth = document.getElementById('gameScreen').offsetWidth;
	var that = this;

	this.bulletinit = function() {
		this.bulletobj = new player(this.playerobj.x, this.playerobj.y);
		this.bulletarray.push(this.bulletobj);
		//console.log(this.bulletobj.y);
		this.bulletpos.push(this.bulletobj.y);
	};

	this.draw = function() {
		for (var i = 0; i < this.bulletarray.length; i++) {
			this.bulletarray[i].drawbullet();
		}
		//this.playerobj.drawPlayer();
	};

	this.sd = function(e) {
		if (
			e.keyCode == 97 ||
			e.keyCode == 65 ||
			e.keyCode == 37 ||
			e.keyCode == 39 ||
			e.keyCode == 100 ||
			e.keyCode == 68
		) {
			that.playerobj.player.style.transform = 'rotate(0deg)';
		}
	};
	this.move = function(e) {
		//console.log(e);
		if (that.playerobj.playerdestory == false) {
			if (e.keyCode == 97 || e.keyCode == 65 || e.keyCode == 37) {
				// to move left
				console.log('left');
				//console.log(that.playerobj);
				that.playerobj.player.style.transform = 'rotate(-15deg)';
				that.playerpos -= 10;
				that.playerobj.x = that.playerpos;
				that.playerobj.drawPlayer();

				// to detect if player is at boder or corss boder
				if (that.playerpos <= 0) {
					that.playerpos += 10;
				}
			}

			if (e.keyCode == 100 || e.keyCode == 68 || e.keyCode == 39) {
				// to move right
				console.log('right');
				that.playerpos += 10;
				that.playerobj.x = that.playerpos;
				that.playerobj.player.style.transform = 'rotate(15deg)';

				that.playerobj.drawPlayer();

				// to detect if player is at boder or corss boder
				if (that.playerpos >= screenwidth - that.playerobj.width - 15) {
					that.playerpos -= 10;
				}
			}
		}
	};

	this.shoot = function() {
		for (var i = 0; i < that.bulletarray.length; i++) {
			that.bulletpos[i] -= that.bulletspeed;
			that.bulletarray[i].y = that.bulletpos[i];
			that.draw();

			//console.log(that.bulletpos[i]);
			if (that.bulletpos[i] <= 0) {
				//that.bulletspeed=-that.bulletspeed;
				that.bulletarray[i].remove();
				that.bulletarray.shift(); //remove first bullet
				that.bulletpos.shift(); //remove position of first bullet
				//that.bulletinit();
			}
		}

		// shoot another bullet when top position of last bullet reach at 400
		if (that.bulletpos[that.bulletpos.length - 1] == 400 && that.playerobj.playerdestory == false) {
			that.bulletinit();
		}
	};
}
