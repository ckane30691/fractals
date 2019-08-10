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
	canvas.addEventListener('mousewheel', handleMouseWheel, false);
});
