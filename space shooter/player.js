function player(x, y) {
	var gamescreen = document.getElementById('gameScreen');
	this.playerdestory = false;
	this.x = x;
	this.y = y;
	//this.bullety = bullety;
	this.width = 100;
	this.height = 100;
	this.bulletwidth = this.width / 9;
	this.bulletheight = this.height / 3;
	this.bulletx = this.x + this.width / 2 - 5;
	var image = document.createElement('img');
	this.player = null;
	this.drawPlayer = function() {
		image.style.width = this.width;
		image.style.height = this.height;
		image.src = 'image/81771159_831521697304047_1887025183219253248_n.png';
		image.style.position = 'absolute';
		image.setAttribute('id', 'player');
		gamescreen.appendChild(image);

		this.player = image;
		this.player.style.left = this.x + 'px';
		this.player.style.top = this.y + 'px';
	};
	this.drawbullet = function() {
		image.style.width = this.bulletwidth;
		image.style.height = this.bulletheight;
		image.src = 'image/Missile_3_Flying_000.png';
		image.style.left = this.bulletx + 'px';
		image.style.top = this.y + 'px';
		image.style.position = 'absolute';
		// image.style.transform =
		gamescreen.appendChild(image);
	};

	this.remove = function() {
		gamescreen.removeChild(image);
	};
}
