function Blast(x, y) {
	var gamescreen = document.getElementById('gameScreen');
	this.playerdestory = false;
	this.x = x;
	this.y = y;
	//this.bullety = bullety;
	this.width = 100;
	this.height = 100;
	var image = document.createElement('img');
	this.draw = function() {
		image.style.width = this.width;
		image.style.height = this.height;
		//image.style.player = image;
		image.style.style.left = this.x + 'px';
		image.style.style.top = this.y + 'px';
		image.src = 'image/Explosion_01.png';
		image.style.position = 'absolute';
		gamescreen.appendChild(image);
	};
}
