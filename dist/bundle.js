/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/equations.js":
/*!**************************!*\
  !*** ./src/equations.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://progur.com/2017/02/create-mandelbrot-fractal-javascript.html\n// https://fractalfoundation.org/OFC/OFC-5-5.html\nconst Equations = {\n\t// Zn+1 = Z^2n + C NOTE: n is a subscript\n\tcheckIfBelongsToMandelbrotSet(x, y, replica) {\n\t\tlet realComponentOfResult = x;\n\t\tlet imaginaryComponentOfResult = y;\n\t\tlet maxIterations = 100;\n\n\t\tfor (let i = 0; i < maxIterations; i++) {\n\t\t\tlet tempRealComponent =\n\t\t\t\trealComponentOfResult * realComponentOfResult -\n\t\t\t\timaginaryComponentOfResult * imaginaryComponentOfResult +\n\t\t\t\tx;\n\n\t\t\tlet tempImaginaryComponent =\n\t\t\t\t2 * realComponentOfResult * imaginaryComponentOfResult + y;\n\n\t\t\trealComponentOfResult = tempRealComponent;\n\t\t\timaginaryComponentOfResult = tempImaginaryComponent;\n\t\t\tif (replica) {\n\t\t\t\tif (\n\t\t\t\t\trealComponentOfResult *\n\t\t\t\t\t\tMath.sin(imaginaryComponentOfResult) >\n\t\t\t\t\t5\n\t\t\t\t)\n\t\t\t\t\treturn i / maxIterations * 100;\n\t\t\t} else {\n\t\t\t\tif (realComponentOfResult * imaginaryComponentOfResult > 5)\n\t\t\t\t\treturn i / maxIterations * 100;\n\t\t\t}\n\t\t}\n\n\t\treturn 0;\n\t}\n};\n\nmodule.exports = Equations;\n\n\n//# sourceURL=webpack:///./src/equations.js?");

/***/ }),

/***/ "./src/fractal.js":
/*!************************!*\
  !*** ./src/fractal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Equations = __webpack_require__(/*! ./equations */ \"./src/equations.js\");\nclass Fractal {\n\tconstructor(options = {}) {\n\t\tthis.options = options;\n\t\tthis.magnificationFactor = options.magnificationFactor;\n\t\tswitch (options.type) {\n\t\t\tdefault:\n\t\t\t\tthis.panX = 2;\n\t\t\t\tthis.panY = 1.5;\n\t\t\t\tthis.fractalBody = this.makeMandlebrot();\n\t\t}\n\t}\n\n\ttick() {\n\t\t// this.magnificationFactor += 5;\n\t\t// this.panX += 0.002;\n\t\t// this.panY -= 0.002;\n\t\t// replace with an update function\n\t\tthis.fractalBody = this.makeMandlebrot('replica');\n\t\t// debugger;\n\t}\n\n\tmakeMandlebrot(replica) {\n\t\tlet magnificationFactor = this.magnificationFactor;\n\t\tlet panX = this.panX;\n\t\tlet panY = this.panY;\n\t\tlet result = [];\n\t\t// debugger;\n\t\tfor (let x = 0; x < this.options.width; x++) {\n\t\t\tfor (let y = 0; y < this.options.height; y++) {\n\t\t\t\tlet belongsToSet = Equations.checkIfBelongsToMandelbrotSet(\n\t\t\t\t\tx / magnificationFactor - panX,\n\t\t\t\t\ty / magnificationFactor - panY,\n\t\t\t\t\treplica\n\t\t\t\t);\n\t\t\t\tif (belongsToSet === 0) result.push([ x, y, belongsToSet ]);\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tdraw(ctx) {\n\t\t// debugger;\n\t\t// console.log(this.fractalBody);\n\n\t\tthis.fractalBody.forEach((point) => {\n\t\t\t// let [ x, y, belongsToSet ] = point;\n\t\t\t// if (belongsToSet == 0) {\n\t\t\tctx.fillStyle = '#000';\n\t\t\tctx.fillRect(point[0] / 1000, point[1] / 600, 1 / 1000, 1 / 600); // Draw a black pixel\n\t\t\t// debugger;\n\t\t\t// } else {\n\t\t\t// \tdebugger;\n\t\t\t// \tctx.fillStyle = 'hsl(0, 100%, ' + belongsToSet + '%)';\n\t\t\t// \tctx.fillRect(x, y, 1, 1); // Draw a colorful pixel\n\t\t\t// }\n\t\t});\n\t}\n}\n\nmodule.exports = Fractal;\n\n\n//# sourceURL=webpack:///./src/fractal.js?");

/***/ }),

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Fractal = __webpack_require__(/*! ./fractal */ \"./src/fractal.js\");\n\nclass Generator {\n\tconstructor(ctx) {\n\t\tthis.frame = 0;\n\t\tthis.allObjects = [];\n\t\tthis.ctx = ctx;\n\t\tthis.addObjects();\n\t\tthis.step = this.step.bind(this);\n\t}\n\n\taddObjects() {\n\t\tlet options = {};\n\t\toptions.magnificationFactor = 200;\n\t\toptions.width = Generator.DIM_X;\n\t\toptions.height = Generator.DIM_Y;\n\t\t// options.type = 'mandlebrot';\n\n\t\tlet mandleBrotFractal = new Fractal(options);\n\t\tthis.allObjects.push(mandleBrotFractal);\n\t}\n\n\tstart() {\n\t\tthis.frame = requestAnimationFrame(this.step);\n\t\t//should generate a fractal\n\t}\n\n\tpause() {\n\t\tcancelAnimationFrame(this.frame);\n\t}\n\n\tstep() {\n\t\t// console.log('stepped');\n\t\tthis.frame = requestAnimationFrame(this.step);\n\t\tthis.tick();\n\t}\n\n\ttick() {\n\t\tlet xleftView = Generator.xleftView;\n\t\tlet ytopView = Generator.ytopView;\n\t\tlet widthView = Generator.widthView;\n\t\tlet heightView = Generator.heightView;\n\t\tlet widthCanvas = Generator.DIM_X || 1000;\n\t\tlet heightCanvas = Generator.DIM_Y || 600;\n\t\tlet scale;\n\t\t// debugger;\n\t\tthis.ctx.clearRect(0, 0, widthCanvas, heightCanvas);\n\t\tthis.ctx.setTransform(1, 0, 0, 1, 0, 0);\n\t\tthis.ctx.scale(1000 / widthView, 600 / heightView);\n\t\t// debugger;\n\t\tthis.ctx.translate(-xleftView, -ytopView);\n\t\tthis.allObjects.forEach((object) => {\n\t\t\tobject.tick();\n\t\t\t// object.magnificationFactor = widthCanvas / widthView;\n\t\t\tobject.draw(this.ctx, scale);\n\t\t});\n\n\t\t// this.ctx.fillStyle = 'yellow';\n\t\t// this.ctx.fillRect(xleftView, ytopView, widthView, heightView);\n\t\t// this.ctx.fillStyle = 'blue';\n\t\t// this.ctx.fillRect(0.1, 0.5, 0.1, 0.1);\n\t\tthis.ctx.fillStyle = 'red';\n\t\t// this.ctx.fillRect(0, 0, 0.5, 0.2);\n\t\t// this.ctx.fillStyle = 'green';\n\t\t// this.ctx.beginPath();\n\t\t// this.ctx.arc(\n\t\t// \twidthView / 2 + xleftView,\n\t\t// \theightView / 2 + ytopView,\n\t\t// \t0.05,\n\t\t// \t0,\n\t\t// \t360,\n\t\t// \tfalse\n\t\t// );\n\t\t// this.ctx.fill();\n\t\t// this.ctx.setTransform(1, 0, 0, 1, 0, 0);\n\t\t// this.ctx.scale(widthCanvas / widthView, heightCanvas / heightView);\n\t\t// this.ctx.translate(-xleftView, -ytopView);\n\t}\n}\n\nGenerator.DIM_X = 1000;\nGenerator.DIM_Y = 600;\nGenerator.xleftView = 0;\nGenerator.ytopView = 0;\nGenerator.widthView = 1.0;\nGenerator.heightView = 1.0;\n\nmodule.exports = Generator;\n\n\n//# sourceURL=webpack:///./src/generator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Generator = __webpack_require__(/*! ./generator */ \"./src/generator.js\");\ndocument.addEventListener('DOMContentLoaded', function() {\n\tconst canvas = document.getElementsByTagName('canvas')[0];\n\tcanvas.width = Generator.DIM_X;\n\tcanvas.height = Generator.DIM_Y;\n\tconst ctx = canvas.getContext('2d');\n\tconst generator = new Generator(ctx);\n\tgenerator.start();\n\n\tlet xleftView = Generator.xleftView;\n\tlet ytopView = Generator.ytopView;\n\tlet widthViewOriginal = Generator.widthView;\n\tlet heightViewOriginal = Generator.heightView;\n\tlet widthView = widthViewOriginal;\n\tlet heightView = heightViewOriginal;\n\tlet mouseDown = false;\n\tlet lastX = 0;\n\tlet lastY = 0;\n\n\tconst handleMouseWheel = (e) => {\n\t\tlet x = widthView / 2 + xleftView;\n\t\tlet y = heightView / 2 + ytopView;\n\n\t\tlet scale = e.wheelDelta < 0 || e.detail > 0 ? 1.1 : 0.9;\n\t\twidthView *= scale;\n\t\theightView *= scale;\n\n\t\tif (widthView > widthViewOriginal || heightView > heightViewOriginal) {\n\t\t\twidthView = widthViewOriginal;\n\t\t\theightView = heightViewOriginal;\n\t\t\tx = widthView / 2;\n\t\t\ty = heightView / 2;\n\t\t}\n\t\tGenerator.widthView = widthView;\n\t\tGenerator.heightView = heightView;\n\t\t// scale about center of view, rather than mouse position.\n\t\t// debugger;\n\t\tGenerator.xleftView = x - widthView / 2;\n\t\tGenerator.ytopView = y - heightView / 2;\n\t\t// debugger;\n\t\t// generator.start();\n\t\t// debugger;\n\t};\n\n\tconst handleMouseDown = (e) => {\n\t\tmouseDown = true;\n\t};\n\n\tconst handleMouseUp = (e) => {\n\t\tmouseDown = false;\n\t};\n\n\tconst handleMouseMove = (e) => {\n\t\tlet X = e.clientX - e.offsetX - e.pageX + window.pageXOffset;\n\t\tlet Y = e.clientY - e.offsetY - e.pageY + window.pageYOffset;\n\t\t// debugger;\n\t\tif (mouseDown) {\n\t\t\tlet dx = (X - lastX) / Generator.DIM_X * widthView;\n\t\t\tlet dy = (Y - lastY) / Generator.DIM_Y * heightView;\n\t\t\tGenerator.xleftView += dx;\n\t\t\tGenerator.ytopView += dy;\n\t\t\t// debugger;\n\t\t}\n\t\tlastX = X;\n\t\tlastY = Y;\n\t};\n\tcanvas.addEventListener('mousewheel', handleMouseWheel, false);\n\tcanvas.addEventListener('mousedown', handleMouseDown, false); // click and hold to pan\n\tcanvas.addEventListener('mousemove', handleMouseMove, false);\n\tcanvas.addEventListener('mouseup', handleMouseUp, false);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });