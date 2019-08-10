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

				if (belongsToSet) {
					result.push([ x, y ]);
				}
			}
		}
		return result;
	}

	draw(ctx) {
		this.fractalBody.forEach((point) => {
			let [ x, y ] = point;
			ctx.fillRect(x, y, 1, 1);
		});
	}
}

module.exports = Fractal;
