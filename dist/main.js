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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = (content) => {\n  const header = document.createElement(\"header\");\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Rob's Restaurant\";\n  const subTitle = document.createElement(\"h2\");\n  subTitle.textContent =\n    \"a simple, yet elegant place to eat, drink, or just hang out\";\n  header.appendChild(title);\n  header.appendChild(subTitle);\n  content.appendChild(header);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/subheader.js":
/*!*************************************!*\
  !*** ./src/components/subheader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subheader\": () => (/* binding */ subheader)\n/* harmony export */ });\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/router */ \"./src/router/router.js\");\n/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router/routes */ \"./src/router/routes.js\");\n/* harmony import */ var _utils_setActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/setActive */ \"./src/utils/setActive.js\");\n\n\n\n\nconst subheader = (content) => {\n  const header = document.createElement(\"div\");\n  header.classList.add(\"sub-header\");\n\n  const ul = document.createElement(\"ul\");\n  _router_routes__WEBPACK_IMPORTED_MODULE_1__.routes.forEach((route) => {\n    const li = document.createElement(\"li\");\n    li.textContent = route.name;\n    li.classList.add(\"link\");\n\n    if (route.id === \"home\") {\n      li.classList.add(\"active\");\n    }\n    //add event listener to change route\n    li.addEventListener(\"click\", () => {\n      (0,_router_router__WEBPACK_IMPORTED_MODULE_0__.router)(route, content);\n      (0,_utils_setActive__WEBPACK_IMPORTED_MODULE_2__.setActive)(li);\n      //todo change style of active route\n    });\n    ul.appendChild(li);\n  });\n  header.appendChild(ul);\n  content.appendChild(header);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/subheader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_subheader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/subheader */ \"./src/components/subheader.js\");\n/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/router */ \"./src/router/router.js\");\n/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/routes */ \"./src/router/routes.js\");\n// initialize the website and set the homepage as the current route\n\n\n\n\n\n\nconst app = () => {\n  const content = document.querySelector(\"#content\");\n  //header component with the restaurant title\n  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__.header)(content);\n  (0,_components_subheader__WEBPACK_IMPORTED_MODULE_1__.subheader)(content);\n  //sub header with route links\n\n  //initialize the website and call the router function with the homepage route\n  (0,_router_router__WEBPACK_IMPORTED_MODULE_2__.router)(_router_routes__WEBPACK_IMPORTED_MODULE_3__.routes[0], content);\n};\n\napp();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n\n\nconst contact = (content) => {\n  const page = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"page-content\", \"Contact Page\");\n  content.appendChild(page);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/drinks.js":
/*!*****************************!*\
  !*** ./src/pages/drinks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drinks\": () => (/* binding */ drinks)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n\n\nconst drinks = (content) => {\n  const page = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"page-content\", \"Drink Menu\");\n  content.appendChild(page);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/drinks.js?");

/***/ }),

/***/ "./src/pages/food.js":
/*!***************************!*\
  !*** ./src/pages/food.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"food\": () => (/* binding */ food)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n\n\nconst food = (content) => {\n  const page = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"page-content\", \"Food Menu\");\n  content.appendChild(page);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/food.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n\n\nconst home = (content) => {\n  const page = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"page-content\", \"\");\n  page.appendChild(\n    (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h1\", \"page-title\", \"Welcome to Rob's Restaurant\")\n  );\n  page.appendChild(\n    (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n      \"p\",\n      \"page-text\",\n      \"We are a family owned restaurant that has been in business for about 5,000 years. We have a variety of food and drinks to choose from. We are open 7 days a week from 9:00am to 9:22am. We hope to see you soon!\"\n    )\n  );\n\n  const info = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\n    \"p\",\n    \"page-text\",\n    \"we are located on 1234 Main St, New York, NY 10001. You can call us anytime at 111-222-3333. You can also like and subscribe to Rob on \"\n  );\n  const youtubeLink = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"a\", \"yt-link\", \"Youtube!\");\n  youtubeLink.setAttribute(\n    \"href\",\n    \"https://www.youtube.com/channel/UCOGNUEWw2BPGQg5FmMPMrBA\"\n  );\n  youtubeLink.setAttribute(\"target\", \"_blank\");\n  info.appendChild(youtubeLink);\n\n  page.appendChild(info);\n\n  const homeImg = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"img\", \"img\", \"\");\n  homeImg.setAttribute(\"src\", \"images/home.jpg\");\n  page.appendChild(homeImg);\n\n  content.appendChild(page);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_drinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/drinks */ \"./src/pages/drinks.js\");\n/* harmony import */ var _pages_food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/food */ \"./src/pages/food.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/createElement */ \"./src/utils/createElement.js\");\n\n\n\n\n\n\nconst router = (route, content) => {\n  //if there is content on the route, clear it out\n  if (content.querySelector(\"#page\")) {\n    content.querySelector(\"#page\").remove();\n  }\n\n  const page = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_4__.createElement)(\"div\", \"page\", \"\");\n  page.setAttribute(\"id\", \"page\");\n  //switch to newly selected route\n  if (route.id === \"home\") {\n    //call home function\n    (0,_pages_home__WEBPACK_IMPORTED_MODULE_3__.home)(page);\n  } else if (route.id === \"food\") {\n    (0,_pages_food__WEBPACK_IMPORTED_MODULE_2__.food)(page);\n  } else if (route.id === \"drinks\") {\n    (0,_pages_drinks__WEBPACK_IMPORTED_MODULE_1__.drinks)(page);\n  } else if (route.id === \"contact\") {\n    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_0__.contact)(page);\n  }\n  content.appendChild(page);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/router/router.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n//store all of the potential routes\n//add or remove routes as necessary\nconst routes = [\n  {\n    id: \"home\",\n    name: \"Home\",\n  },\n  {\n    id: \"food\",\n    name: \"Food Menu\",\n  },\n  {\n    id: \"drinks\",\n    name: \"Drink Menu\",\n  },\n  {\n    id: \"contact\",\n    name: \"Contact Us\",\n  },\n];\n\n\n//# sourceURL=webpack://restaurant-page/./src/router/routes.js?");

/***/ }),

/***/ "./src/utils/createElement.js":
/*!************************************!*\
  !*** ./src/utils/createElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nconst createElement = (tag, className, textContent) => {\n  const elem = document.createElement(tag);\n  elem.className = className;\n  elem.textContent = textContent;\n  return elem;\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/utils/createElement.js?");

/***/ }),

/***/ "./src/utils/setActive.js":
/*!********************************!*\
  !*** ./src/utils/setActive.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setActive\": () => (/* binding */ setActive)\n/* harmony export */ });\nconst setActive = (page) => {\n  const links = document.querySelectorAll(\".link\");\n  links.forEach((link) => {\n    link.classList.remove(\"active\");\n  });\n  page.classList.add(\"active\");\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/utils/setActive.js?");

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