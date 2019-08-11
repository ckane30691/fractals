const Generator = require('./generator');
document.addEventListener('DOMContentLoaded', function() {
	const canvas = document.getElementsByTagName('canvas')[0];
	canvas.width = Generator.DIM_X;
	canvas.height = Generator.DIM_Y;
	const ctx = canvas.getContext('2d');
	const generator = new Generator(ctx);
	generator.start();

	let xleftView = Generator.xleftView;
	let ytopView = Generator.ytopView;
	let widthViewOriginal = Generator.widthView;
	let heightViewOriginal = Generator.heightView;
	let widthView = widthViewOriginal;
	let heightView = heightViewOriginal;
	let mouseDown = false;
	let lastX = 0;
	let lastY = 0;

	const handleMouseWheel = (e) => {
		let x = widthView / 2 + xleftView;
		let y = heightView / 2 + ytopView;

		let scale = e.wheelDelta < 0 || e.detail > 0 ? 1.1 : 0.9;
		widthView *= scale;
		heightView *= scale;

		if (widthView > widthViewOriginal || heightView > heightViewOriginal) {
			widthView = widthViewOriginal;
			heightView = heightViewOriginal;
			x = widthView / 2;
			y = heightView / 2;
		}
		Generator.widthView = widthView;
		Generator.heightView = heightView;
		// scale about center of view, rather than mouse position.
		// debugger;
		Generator.xleftView = x - widthView / 2;
		Generator.ytopView = y - heightView / 2;
		// debugger;
		// generator.start();
		// debugger;
	};

	const handleMouseDown = (e) => {
		mouseDown = true;
	};

	const handleMouseUp = (e) => {
		mouseDown = false;
	};

	const handleMouseMove = (e) => {
		let X = e.clientX - e.offsetX - e.pageX + window.pageXOffset;
		let Y = e.clientY - e.offsetY - e.pageY + window.pageYOffset;
		// debugger;
		if (mouseDown) {
			let dx = (X - lastX) / Generator.DIM_X * widthView;
			let dy = (Y - lastY) / Generator.DIM_Y * heightView;
			Generator.xleftView += dx;
			Generator.ytopView += dy;
			// debugger;
		}
		lastX = X;
		lastY = Y;
	};
	canvas.addEventListener('mousewheel', handleMouseWheel, false);
	canvas.addEventListener('mousedown', handleMouseDown, false); // click and hold to pan
	canvas.addEventListener('mousemove', handleMouseMove, false);
	canvas.addEventListener('mouseup', handleMouseUp, false);
});
