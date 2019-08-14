const Equations = require('./equations');
class Fractal {
	constructor(options = {}) {
		this.options = options;
		this.magnificationFactor = options.magnificationFactor;
		switch (options.type) {
			default:
				this.panX = options.panX;
				this.panY = options.panY;
				this.fractalBody = this.makeMandlebrot('replica');
		}
	}

	tick(scale, panX, panY) {
		this.magnificationFactor *= scale;
		this.panX = panX;
		this.panY = panY;
		// replace with an update function
		this.fractalBody = this.makeMandlebrot('replica');
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
				if (belongsToSet <= 2) result.push([ x, y, belongsToSet ]);
				// result.push([ x, y, belongsToSet ]);
			}
		}
		return result;
	}

	draw(ctx) {
		// debugger;
		// console.log(this.fractalBody);

		this.fractalBody.forEach((point) => {
			let belongsToSet = point[2];
			if (belongsToSet == 0) {
				ctx.fillStyle = '#000';
				ctx.fillRect(
					point[0] / 1000,
					point[1] / 600,
					1 / 1000,
					1 / 600
				); // Draw a black pixel
				// debugger;
			} else {
				// debugger;
				ctx.fillStyle = 'hsl(50, 100%, ' + belongsToSet + '%)';
				ctx.fillRect(
					point[0] / 1000,
					point[1] / 600,
					1 / 1000,
					1 / 600
				); // Draw a colorful pixel
			}
		});
	}
}

module.exports = Fractal;
