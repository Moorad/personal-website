var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var radius = 2;
var threshold = 100;

class particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.velocity = {
			x:(0.2 + (0.2*Math.random())),
			y:-(0.2 + (0.2*Math.random()))
		};
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = '#ffffff88';
		ctx.ellipse(this.x, this.y, radius , radius , 0, 0, Math.PI * 2);
		ctx.fill();
	}

	reset() {
		var xory = Math.floor(Math.random() * 2);
		if (xory) {
			this.x = Math.floor(Math.random()*canvas.width);
			this.y = canvas.height;
		} else {
			this.x = 0;
			this.y = Math.floor(Math.random()*canvas.height);

		}
		this.velocity = {
			x:(0.2 + (0.2*Math.random())),
			y:-(0.2 + (0.2*Math.random()))
		};
	}
}
var particles = [];

for (var i = 0; i < threshold; i++) {
	particles.push(new particle(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height)));
}

loop();

function loop() {
	ctx.clearRect(0,0, canvas.width, canvas.height);
	console.log(particles)
	for (var i = 0; i < particles.length; i++) {
		if (particles[i].y > 0) {
			particles[i].draw();
			particles[i].x += particles[i].velocity.x;
			particles[i].y += particles[i].velocity.y;

		} else {
			particles[i].reset();
		}
	}
	window.requestAnimationFrame(loop);
}

function initialise() {

}