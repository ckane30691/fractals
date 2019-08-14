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
		let scale = e.wheelDelta < 0 || e.detail > 0 ? 1.1 : 0.9;
		Generator.scale = scale;
		setTimeout(() => (Generator.scale = 1), 1000);
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
			// Generator.xleftView += dx;
			// Generator.ytopView += dy;
			Generator.panX -= dx * 10;
			Generator.panY -= dy * 10;
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
