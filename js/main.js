/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 627:
/***/ (() => {

ymaps.ready(init);
function init() {
  if (document.getElementById("contacts-map") !== null) {
    contactsMap = new ymaps.Map("contacts-map", {
      center: [55.175051, 61.391001],
      zoom: 17
    });
  } else {
    return;
  }
  const chelyaBinksMark = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.175051, 61.391001]
    }
  });
  const EkbMark = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [56.81921890941135, 60.651566054080554]
    }
  });
  const StPetersburgMark = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [59.92901056417907, 30.38784099999998]
    }
  });
  const MoscowMark = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.451272, 37.749607]
    }
  });
  const marks = [chelyaBinksMark, EkbMark, StPetersburgMark, MoscowMark];
  const buttons = document.querySelectorAll(".contacts__city");
  let currentBtn = document.querySelector(".contacts__city-active");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      contactsMap.setCenter(marks[btn.getAttribute("data-mark-id")].geometry.getCoordinates());
      currentBtn.classList.toggle("contacts__city-active");
      btn.classList.toggle("contacts__city-active");
      currentBtn = btn;
    });
  });
  contactsMap.geoObjects.add(chelyaBinksMark).add(EkbMark).add(StPetersburgMark).add(MoscowMark);
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/js/_vars.js
/* harmony default export */ const _vars = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});
// EXTERNAL MODULE: ./src/js/components/map.js
var map = __webpack_require__(627);
;// CONCATENATED MODULE: ./src/js/_components.js

;// CONCATENATED MODULE: ./src/js/main.js




})();

/******/ })()
;