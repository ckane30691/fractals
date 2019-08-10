// https://progur.com/2017/02/create-mandelbrot-fractal-javascript.html

const Equations = {
	checkIfBelongsToMandelbrotSet(x, y) {
		let realComponentOfResult = x;
		let imaginaryComponentOfResult = y;
		let maxIterations = 100;

		for (let i = 0; i < maxIterations; i++) {
			let tempRealComponent =
				realComponentOfResult * realComponentOfResult -
				imaginaryComponentOfResult * imaginaryComponentOfResult +
				x;

			let tempImaginaryComponent =
				2 * realComponentOfResult * imaginaryComponentOfResult + y;

			realComponentOfResult = tempRealComponent;
			imaginaryComponentOfResult = tempImaginaryComponent;
			if (realComponentOfResult * imaginaryComponentOfResult > 5)
				return i / maxIterations * 100;
		}

		return 0;
	}
};

module.exports = Equations;
