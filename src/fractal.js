const Equations = require('./equations');
class Fractal {
	constructor(options = {}) {
		this.options = options;
		switch (options.type) {
			default:
				this.fractalBody = this.makeMandlebrot();
		}
	}

	makeMandlebrot() {
		let magnificationFactor = this.options.magnificationFactor || 600;
		let panX = 0;
		let panY = 0;
		let result = [];

		for (let x = 0; x < this.options.width; x++) {
			for (let y = 0; y < this.options.height; y++) {
				let belongsToSet = Equations.checkIfBelongsToMandelbrotSet(
					x / magnificationFactor - panX,
					y / magnificationFactor - panY
				);
				debugger;
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
