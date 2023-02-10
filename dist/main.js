/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cool-images/index.js":
/*!*******************************************!*\
  !*** ./node_modules/cool-images/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("// Utility functions\r\n// =============================================================================\r\nfunction random(height = 300, width = 500, grey = false, blur = false) {\r\n  if (typeof height !== \"number\" || typeof width !== \"number\") {\r\n    throw new Error(\"Either height or width is not a number. NaN!\");\r\n  }\r\n  if (typeof grey !== \"boolean\" || typeof blur !== \"boolean\") {\r\n    throw new Error(\"grey and/or blur should be a boolean!\");\r\n  }\r\n  let imgNum, imgURL;\r\n  imgNum = Math.floor(Math.random() * 1000);\r\n  imgURL = `https://unsplash.it/${\r\n    grey ? \"g/\" : \"\"\r\n  }${width}/${height}?image=${imgNum}${blur ? \"&blur\" : \"\"}`;\r\n\r\n  return imgURL;\r\n}\r\n\r\n// Export functions\r\n// =============================================================================\r\n\r\nfunction one(height = 300, width = 500, grey = false, blur = false) {\r\n  return random(height, width, grey, blur);\r\n}\r\n\r\nfunction many(\r\n  height = 300,\r\n  width = 500,\r\n  number = 6,\r\n  grey = false,\r\n  blur = false\r\n) {\r\n  if (typeof number !== \"number\") {\r\n    throw new Error(\"The number of images should be a number!\");\r\n  }\r\n  const imgUrl = random(height, width, grey, blur);\r\n  const imgId = parseInt(imgUrl.match(/image=([^&]+)/)[1]);\r\n  let arr = [];\r\n  for (let i = 0; i < number; i++) {\r\n    let newUrl = imgUrl.replace(imgId, Math.floor(Math.random() * 1000));\r\n    arr.push(newUrl);\r\n  }\r\n\r\n  return arr;\r\n}\r\n\r\nmodule.exports = { one, many };\r\n\n\n//# sourceURL=webpack://pianino/./node_modules/cool-images/index.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const frame = document.querySelector(\".frame\");\r\nconst img = document.querySelector(\"img\");\r\nconst randomImage = __webpack_require__(/*! cool-images */ \"./node_modules/cool-images/index.js\");\r\n\r\n\r\nfunction changePicture(){\r\n    let newImage = randomImage.one();\r\n    img.src = newImage;\r\n}\r\n\r\n\r\n\r\nframe.addEventListener(\"click\", changePicture);\n\n//# sourceURL=webpack://pianino/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;