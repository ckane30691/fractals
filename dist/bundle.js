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

eval("// https://progur.com/2017/02/create-mandelbrot-fractal-javascript.html\n\nconst Equations = {\n\tcheckIfBelongsToMandelbrotSet(x, y) {\n\t\tlet realComponentOfResult = x;\n\t\tlet imaginaryComponentOfResult = y;\n\n\t\tfor (let i = 0; i < 10; i++) {\n\t\t\tlet tempRealComponent =\n\t\t\t\trealComponentOfResult * realComponentOfResult -\n\t\t\t\timaginaryComponentOfResult * imaginaryComponentOfResult +\n\t\t\t\tx;\n\n\t\t\tlet tempImaginaryComponent =\n\t\t\t\t2 * realComponentOfResult * imaginaryComponentOfResult + y;\n\n\t\t\trealComponentOfResult = tempRealComponent;\n\t\t\timaginaryComponentOfResult = tempImaginaryComponent;\n\t\t}\n\n\t\tif (realComponentOfResult * imaginaryComponentOfResult < 5) return true;\n\t\treturn false;\n\t}\n};\n\nmodule.exports = Equations;\n\n\n//# sourceURL=webpack:///./src/equations.js?");

/***/ }),

/***/ "./src/fractal.js":
/*!************************!*\
  !*** ./src/fractal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Equations = __webpack_require__(/*! ./equations */ \"./src/equations.js\");\nclass Fractal {\n\tconstructor(options = {}) {\n\t\tthis.options = options;\n\t\tthis.magnificationFactor = options.magnificationFactor;\n\t\tswitch (options.type) {\n\t\t\tdefault:\n\t\t\t\tthis.fractalBody = this.makeMandlebrot();\n\t\t\t\tthis.panX = 2;\n\t\t\t\tthis.panY = 1.5;\n\t\t}\n\t}\n\n\ttick() {\n\t\tthis.magnificationFactor += 2;\n\t\t// this.panX += 0.2;\n\n\t\tthis.fractalBody = this.makeMandlebrot();\n\t\t// debugger;\n\t}\n\n\tmakeMandlebrot() {\n\t\tlet magnificationFactor = this.magnificationFactor;\n\t\tlet panX = this.panX;\n\t\tlet panY = this.panY;\n\t\tlet result = [];\n\n\t\tfor (let x = 0; x < this.options.width; x++) {\n\t\t\tfor (let y = 0; y < this.options.height; y++) {\n\t\t\t\tlet belongsToSet = Equations.checkIfBelongsToMandelbrotSet(\n\t\t\t\t\tx / magnificationFactor - panX,\n\t\t\t\t\ty / magnificationFactor - panY\n\t\t\t\t);\n\n\t\t\t\tif (belongsToSet) {\n\t\t\t\t\tresult.push([ x, y ]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tdraw(ctx) {\n\t\tthis.fractalBody.forEach((point) => {\n\t\t\tlet [ x, y ] = point;\n\t\t\tctx.fillRect(x, y, 1, 1);\n\t\t});\n\t}\n}\n\nmodule.exports = Fractal;\n\n\n//# sourceURL=webpack:///./src/fractal.js?");

/***/ }),

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Fractal = __webpack_require__(/*! ./fractal */ \"./src/fractal.js\");\n\nclass Generator {\n\tconstructor(ctx) {\n\t\tthis.frame = 0;\n\t\tthis.allObjects = [];\n\t\tthis.ctx = ctx;\n\t\tthis.addObjects();\n\t\tthis.step = this.step.bind(this);\n\t}\n\n\taddObjects() {\n\t\tlet options = {};\n\t\toptions.magnificationFactor = 200;\n\t\toptions.width = Generator.DIM_X;\n\t\toptions.height = Generator.DIM_Y;\n\n\t\tlet mandleBrotFractal = new Fractal(options);\n\t\tthis.allObjects.push(mandleBrotFractal);\n\t}\n\n\tstart() {\n\t\tthis.frame = requestAnimationFrame(this.step);\n\t\t//should generate a fractal\n\t}\n\n\tpause() {\n\t\tcancelAnimationFrame(this.frame);\n\t}\n\n\tstep() {\n\t\t// console.log('stepped');\n\t\tthis.frame = requestAnimationFrame(this.step);\n\t\tthis.tick();\n\t}\n\n\ttick() {\n\t\tthis.ctx.clearRect(0, 0, Generator.DIM_X, Generator.DIM_Y);\n\t\tthis.allObjects.forEach((object) => {\n\t\t\tobject.tick();\n\t\t\tobject.draw(this.ctx);\n\t\t});\n\t}\n}\n\nGenerator.DIM_X = 1000;\nGenerator.DIM_Y = 600;\n\nmodule.exports = Generator;\n\n\n//# sourceURL=webpack:///./src/generator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Generator = __webpack_require__(/*! ./generator */ \"./src/generator.js\");\ndocument.addEventListener('DOMContentLoaded', function() {\n\tconst canvasEl = document.getElementsByTagName('canvas')[0];\n\tcanvasEl.width = Generator.DIM_X;\n\tcanvasEl.height = Generator.DIM_Y;\n\tconst ctx = canvasEl.getContext('2d');\n\tconst generator = new Generator(ctx);\n\tgenerator.start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });