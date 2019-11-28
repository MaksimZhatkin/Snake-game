'use strict';
const cvs = document.querySelector('.canvas');
const ctx = cvs.getContext('2d');
const scale = 20;
const rows = cvs.height / scale;
const columns = cvs.width / scale;

let snake;
let fruit;

snake = new Snake();
fruit = new Fruit();
fruit.pickLoc();

window.setInterval(() => {
	ctx.clearRect(0, 0, cvs.width, cvs.height);
	fruit.draw();
	snake.update();
	snake.draw();

	if (snake.eat(fruit)) {
		fruit.pickLoc();
	};

	document.querySelector('.counter').innerHTML = snake.total;
	snake.checkCollision();
}, 100)

window.addEventListener('keydown', ((e) => {
	const dir = e.key;
	snake.changeDir(dir);
}));