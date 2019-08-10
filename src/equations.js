// https://progur.com/2017/02/create-mandelbrot-fractal-javascript.html
// https://fractalfoundation.org/OFC/OFC-5-5.html
const Equations = {
	// Zn+1 = Z^2n + C NOTE: n is a subscript
	checkIfBelongsToMandelbrotSet(x, y, replica) {
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
			if (replica) {
				if (
					realComponentOfResult *
						Math.sin(imaginaryComponentOfResult) >
					5
				)
					return i / maxIterations * 100;
			} else {
				if (realComponentOfResult * imaginaryComponentOfResult > 5)
					return i / maxIterations * 100;
			}
		}

		return 0;
	}
};

module.exports = Equations;
