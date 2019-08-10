const Equations = require('./equations');
class Fractal {
	constructor(options = {}) {
		this.options = options;
		this.magnificationFactor = options.magnificationFactor;
		switch (options.type) {
			default:
				this.fractalBody = this.makeMandlebrot();
				this.panX = 2;
				this.panY = 1.5;
		}
	}

	tick() {
		this.magnificationFactor += 1;
		this.panX += 0.002;
		this.panY -= 0.002;
		this.fractalBody = this.makeMandlebrot();
		// debugger;
	}

	makeMandlebrot() {
		let magnificationFactor = this.magnificationFactor;
		let panX = this.panX;
		let panY = this.panY;
		let result = [];

		for (let x = 0; x < this.options.width; x++) {
			for (let y = 0; y < this.options.height; y++) {
				let belongsToSet = Equations.checkIfBelongsToMandelbrotSet(
					x / magnificationFactor - panX,
					y / magnificationFactor - panY
				);
				result.push([ x, y, belongsToSet ]);
			}
		}
		return result;
	}

	draw(ctx) {
		this.fractalBody.forEach((point) => {
			let [ x, y, belongsToSet ] = point;
			if (belongsToSet == 0) {
				ctx.fillStyle = '#000';
				ctx.fillRect(x, y, 1, 1); // Draw a black pixel
			} else {
				ctx.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';
				ctx.fillRect(x, y, 1, 1); // Draw a colorful pixel
			}
		});
	}
}

module.exports = Fractal;
