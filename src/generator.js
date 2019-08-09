const Fractal = require('./fractal');

class Generator {
	constructor(ctx) {
		this.frame = 0;
		this.allObjects = [];
		this.ctx = ctx;
		this.addObjects();
		this.step = this.step.bind(this);
	}

	addObjects() {
		let options = {};
		options.magnificationFactor = 200;
		options.width = Generator.DIM_X;
		options.height = Generator.DIM_Y;

		let mandleBrotFractal = new Fractal(options);
		this.allObjects.push(mandleBrotFractal);
	}

	start() {
		this.frame = requestAnimationFrame(this.step);
		//should generate a fractal
	}

	pause() {
		cancelAnimationFrame(this.frame);
	}

	step() {
		// console.log('stepped');
		this.frame = requestAnimationFrame(this.step);
		this.tick();
	}

	tick() {
		this.ctx.clearRect(0, 0, Generator.DIM_X, Generator.DIM_Y);
		this.allObjects.forEach((object) => {
			object.tick();
			object.draw(this.ctx);
		});
	}
}

Generator.DIM_X = 1000;
Generator.DIM_Y = 600;

module.exports = Generator;
