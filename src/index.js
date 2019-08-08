const Generator = require('./generator');
document.addEventListener('DOMContentLoaded', function() {
	const canvasEl = document.getElementsByTagName('canvas')[0];
	canvasEl.width = Generator.DIM_X;
	canvasEl.height = Generator.DIM_Y;
	const ctx = canvasEl.getContext('2d');
	const generator = new Generator(ctx);
	generator.start();
});
