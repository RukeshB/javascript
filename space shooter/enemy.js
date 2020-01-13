function enemy(x, y) {
	var gamescreen = document.getElementById('gameScreen');
	this.enemydestory = false;
	this.x = x;
	this.y = y;
	this.width = 100;
	this.height = 100;
	this.bulletwidth = this.width / 9;
	this.bulletheight = this.height / 9;
	this.bulletx = this.x + this.width / 2 - 5;
	this.bullety = this.y + this.height;
	var image = document.createElement('img');
	this.drawenemy = function() {
		image.style.width = this.width;
		image.style.height = this.height;
		image.src = 'image/80643423_2904710952875282_2231593135018868736_n2.png';
		image.style.left = this.x + 'px';
		image.style.top = this.y + 'px';
		image.style.position = 'absolute';
		gamescreen.appendChild(image);
	};

	this.drawbullet = function() {
		image.style.width = this.bulletwidth;
		image.style.height = this.bulletheight;
		image.src = 'image/81040025_1477912689050190_7097956201404563456_n2.png';
		image.style.left = this.bulletx + 'px';
		image.style.top = this.bullety + 'px';
		image.style.position = 'absolute';
		gamescreen.appendChild(image);
	};

	this.remove = function() {
		gamescreen.removeChild(image);
	};
}
