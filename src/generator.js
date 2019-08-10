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
		// options.type = 'mandlebrot';

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
		let xleftView = Generator.xleftView;
		let ytopView = Generator.ytopView;
		let widthView = Generator.widthView;
		let heightView = Generator.heightView;
		let widthCanvas = Generator.DIM_X || 1000;
		let heightCanvas = Generator.DIM_Y || 600;
		let scale;
		// debugger;
		this.ctx.clearRect(0, 0, widthCanvas, heightCanvas);
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.scale(1000 / widthView, 600 / heightView);
		// debugger;
		this.ctx.translate(-xleftView, -ytopView);
		this.allObjects.forEach((object) => {
			object.tick();
			// object.magnificationFactor = widthCanvas / widthView;
			object.draw(this.ctx, scale);
		});

		// this.ctx.fillStyle = 'yellow';
		// this.ctx.fillRect(xleftView, ytopView, widthView, heightView);
		// this.ctx.fillStyle = 'blue';
		// this.ctx.fillRect(0.1, 0.5, 0.1, 0.1);
		this.ctx.fillStyle = 'red';
		// this.ctx.fillRect(0, 0, 0.5, 0.2);
		// this.ctx.fillStyle = 'green';
		// this.ctx.beginPath();
		// this.ctx.arc(
		// 	widthView / 2 + xleftView,
		// 	heightView / 2 + ytopView,
		// 	0.05,
		// 	0,
		// 	360,
		// 	false
		// );
		// this.ctx.fill();
		// this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		// this.ctx.scale(widthCanvas / widthView, heightCanvas / heightView);
		// this.ctx.translate(-xleftView, -ytopView);
	}
}

Generator.DIM_X = 1000;
Generator.DIM_Y = 600;
Generator.xleftView = 0;
Generator.ytopView = 0;
Generator.widthView = 1.0;
Generator.heightView = 1.0;

module.exports = Generator;
