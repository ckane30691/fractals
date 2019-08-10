const Equations = require('./equations');
class Fractal {
	constructor(options = {}) {
		this.options = options;
		this.magnificationFactor = options.magnificationFactor;
		switch (options.type) {
			default:
				this.panX = 2;
				this.panY = 1.5;
				this.fractalBody = this.makeMandlebrot();
		}
	}

	tick() {
		// this.magnificationFactor += 5;
		// this.panX += 0.002;
		// this.panY -= 0.002;
		// replace with an update function
		this.fractalBody = this.makeMandlebrot();
		// debugger;
	}

	makeMandlebrot(replica) {
		let magnificationFactor = this.magnificationFactor;
		let panX = this.panX;
		let panY = this.panY;
		let result = [];
		// debugger;
		for (let x = 0; x < this.options.width; x++) {
			for (let y = 0; y < this.options.height; y++) {
				let belongsToSet = Equations.checkIfBelongsToMandelbrotSet(
					x / magnificationFactor - panX,
					y / magnificationFactor - panY,
					replica
				);
				if (belongsToSet === 0) result.push([ x, y, belongsToSet ]);
			}
		}
		return result;
	}

	draw(ctx, scale = 1) {
		// debugger;
		// console.log(this.fractalBody);

		this.fractalBody.forEach((point) => {
			// let [ x, y, belongsToSet ] = point;
			// if (belongsToSet == 0) {
			ctx.fillStyle = '#000';
			ctx.fillRect(point[0] / 1000, point[1] / 600, 1 / 1000, 1 / 600); // Draw a black pixel
			// debugger;
			// } else {
			// 	debugger;
			// 	ctx.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';
			// 	ctx.fillRect(x, y, 1, 1); // Draw a colorful pixel
			// }
		});
	}
}

module.exports = Fractal;
