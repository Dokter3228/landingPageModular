/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _secondTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondTab */ \"./src/secondTab.js\");\n/* harmony import */ var _thirdTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thirdTab */ \"./src/thirdTab.js\");\n\n\n\n\nconst firstTabBtn = document.getElementById(\"firstTab\");\nconst secondTabBtn = document.getElementById(\"secondTab\");\nconst thirdTabBtn = document.getElementById(\"thirdTab\");\nconst content = document.getElementById(\"content\");\n\nfirstTabBtn.addEventListener(\"click\", function () {\n  content.innerHTML = \"\";\n  (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  firstTabBtn.style.backgroundColor = \"red\";\n  secondTabBtn.style.backgroundColor = \"lightblue\";\n  thirdTabBtn.style.backgroundColor = \"lightblue\";\n});\n\nsecondTabBtn.addEventListener(\"click\", function () {\n  content.innerHTML = \"\";\n  (0,_secondTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  secondTabBtn.style.backgroundColor = \"red\";\n  firstTabBtn.style.backgroundColor = \"lightblue\";\n  thirdTabBtn.style.backgroundColor = \"lightblue\";\n});\n\nthirdTabBtn.addEventListener(\"click\", function () {\n  content.innerHTML = \"\";\n  (0,_thirdTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  thirdTabBtn.style.backgroundColor = \"red\";\n  secondTabBtn.style.backgroundColor = \"lightblue\";\n  firstTabBtn.style.backgroundColor = \"lightblue\";\n});\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nfirstTabBtn.style.backgroundColor = \"red\";\n\n\n//# sourceURL=webpack://landingpage/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pageLoad() {\n  let content = document.querySelector(\"#content\");\n  let h1 = document.createElement(\"h1\");\n  h1.textContent = \"Home\";\n  content.appendChild(h1);\n  let img = document.createElement(\"img\");\n  img.src =\n    \"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80\";\n  content.appendChild(img);\n  let p = document.createElement(\"p\");\n  p.textContent =\n    \"A restaurant is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.\";\n  content.appendChild(p);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://landingpage/./src/page-load.js?");

/***/ }),

/***/ "./src/secondTab.js":
/*!**************************!*\
  !*** ./src/secondTab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction secondTabLoad() {\n  let content = document.querySelector(\"#content\");\n  let h1 = document.createElement(\"h1\");\n  h1.textContent = \"Second Tab Loaded\";\n  content.appendChild(h1);\n  let img = document.createElement(\"img\");\n  img.src =\n    \"https://upload.wikimedia.org/wikipedia/commons/d/d6/GrandeTaberna.JPG\";\n  content.appendChild(img);\n  let p = document.createElement(\"p\");\n  p.textContent =\n    \"A public eating establishment similar to a restaurant is mentioned in a 512 BC record from Ancient Egypt. It served only one dish, a plate of cereal, wild fowl, and onions.[6] A forerunner of the modern restaurant is the thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat comparable to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of\";\n  content.appendChild(p);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (secondTabLoad);\n\n\n//# sourceURL=webpack://landingpage/./src/secondTab.js?");

/***/ }),

/***/ "./src/thirdTab.js":
/*!*************************!*\
  !*** ./src/thirdTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction thirdTabLoad() {\n  let content = document.querySelector(\"#content\");\n  let h1 = document.createElement(\"h1\");\n  h1.textContent = \"Third Tab Loaded\";\n  content.appendChild(h1);\n  let img = document.createElement(\"img\");\n  img.src =\n    \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kellosaarenranta_by_night.JPG/1024px-Kellosaarenranta_by_night.JPG\";\n  content.appendChild(img);\n  let p = document.createElement(\"p\");\n  p.textContent =\n    \"Early eating establishments recognizable as restaurants in the modern sense emerged in Song dynasty China during the 11th and 12th centuries. In large cities, such as Kaifeng and Hangzhou, food catering establishments catered to merchants who travelled between cities. Probably growing out of tea houses and taverns which catered to travellers, Kaifeng's restaurants blossomed into an industry that catered to locals as well as people from other regions of China. As travelling merchants were not used to local cuisine of other cities, these establishments were set up to serve dishes familiar to merchants from other parts of China. Such establishments were located in the entertainment districts of major cities, alongside hotels, bars, and brothels. The larger and more opulent of these establishments offered a dining experience that was similar to modern restaurant culture. According to a Chinese manuscript from 1126, patrons of one such establishment were greeted with a selection of pre-plated demonstration dishes which represented food options. Customers had their orders taken by a team of waiters who would then sing their orders to the kitchen and distribute the dishes in the exact order in which they had been ordered.[13][14]\";\n  content.appendChild(p);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thirdTabLoad);\n\n\n//# sourceURL=webpack://landingpage/./src/thirdTab.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;