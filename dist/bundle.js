/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  color: #274d7d;\n}\n:root {\n  --yellow: #f2c200;\n  --dark-blue: #274d7d;\n  font-family: \"Roboto\", sans-serif;\n}\nbody {\n  position: relative;\n}\n.header {\n  width: 100%;\n  height: 5rem;\n  background-color: var(--yellow);\n  color: var(--dark-blue);\n  border-bottom: 1px solid var(--dark-blue);\n  font-size: 3rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  padding: 0 3rem;\n  position: fixed;\n  z-index: 1;\n}\n.avatar {\n  border-radius: 50%;\n  height: 4rem;\n  width: 4rem;\n  background-color: var(--dark-blue);\n  margin-left: auto;\n}\n.page-container {\n  background-color: var(--yellow);\n  display: grid;\n  grid-template-columns: minmax(220px, 300px) 1fr;\n  grid-template-rows: 1fr;\n  gap: 1rem;\n  min-height: 100vh;\n  padding-top: 6rem;\n  overflow-x: hidden;\n}\n.sidebar {\n  /* width: 220px; */\n  padding: 1rem;\n  grid-column: 1;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.project-container {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.card,\n.description-modal {\n  background-color: white;\n  border: 1px solid var(--dark-blue);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.card > ul {\n  margin: 0 1rem;\n  list-style-type: none;\n}\n.card li:not(:last-of-type) {\n  margin-bottom: 0.3rem;\n}\n.card > h3 {\n  margin-bottom: 1rem;\n  padding: 0.7rem 1rem 0.5rem 1rem;\n  border-bottom: 1px solid var(--dark-blue);\n}\n.card input[type=\"checkbox\"] {\n  margin-right: 1ch;\n}\n.del-project-btn,\n.description-modal-btn {\n  background-color: transparent;\n  border: none;\n  border-top: 1px solid var(--dark-blue);\n  margin-top: 1rem;\n  padding: 0.3rem 0 0.4rem 0;\n  cursor: pointer;\n}\n.new-project,\n.pseudo-project {\n  background-color: white;\n  font-weight: 600;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.new-project:active {\n  background-color: transparent;\n}\n.pseudo-project {\n  min-height: 1.5rem;\n  flex-direction: row;\n}\n.pseudo-project::before {\n  content: \" \";\n  border-radius: 50%;\n  height: 0.8rem;\n  width: 0.8rem;\n  background-color: #fe6955;\n  margin-right: 1ch;\n}\n.today::before {\n  background-color: #78dfff;\n}\n.main {\n  grid-column: 2;\n  padding: 1rem 3rem 1rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.project-expanded {\n  background-color: white;\n  flex: 0 1 1000px;\n  border: 1px solid var(--dark-blue);\n  border-radius: 10px;\n  min-height: 10rem;\n  padding: 0 0 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.project-expanded > ul {\n  list-style-type: none;\n}\n.task-item {\n  position: relative;\n  padding: 0 1rem;\n  margin-bottom: 0.3rem;\n  display: grid;\n  grid-template-columns: min-content 1fr auto auto min-content;\n  gap: 0.5rem;\n}\n.task-isCompleted {\n  grid-column: 1;\n}\n.task-title {\n  grid-column: 2;\n}\n.task-note {\n  grid-column: 3;\n}\n.task-dueDate {\n  grid-column: 4;\n}\n.task-delete {\n  grid-column: 5;\n  width: 4ch;\n  border-radius: 0;\n  background-color: transparent;\n  border: 1px solid var(--dark-blue);\n  cursor: pointer;\n  padding: 0.1rem 0.2rem;\n}\n.project-expanded-title,\n.project-expanded-title:focus {\n  background-color: transparent;\n  font-size: 2.5rem;\n  font-weight: 600;\n  padding: 1rem 2rem 0.5rem 2rem;\n  border: none;\n  border-bottom: 1px solid var(--dark-blue);\n  border-radius: 10px 10px 0 0;\n  outline: none;\n  margin-bottom: 2rem;\n}\n/* .task-input:not([type=\"checkbox\"]),\n.task-input:not([type=\"checkbox\"]):focus {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.task-input[type=\"text\"] {\n  text-overflow: ellipsis;\n}\n.task-input.task-title:focus {\n  position: absolute;\n  width: 85%;\n  background-color: #fff;\n  box-shadow: 0 0 10px 0 lightblue;\n  padding: 0.5rem;\n  z-index: 2;\n}\ninput[type=\"checkbox\"] {\n  accent-color: var(--dark-blue);\n}\nselect.task-input:has(option[value=\"high\"]:checked) {\n  background-color: #ffb3a9;\n}\nselect.task-input:has(option[value=\"normal\"]:checked) {\n  background-color: #ffeaa3;\n}\nselect.task-input:has(option[value=\"low\"]:checked) {\n  background-color: #b9efff;\n} */\n.new-task-btn {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  border: none;\n  border-top: 1px solid var(--dark-blue);\n  border-bottom: 1px solid var(--dark-blue);\n  border-radius: none;\n  background-color: transparent;\n  color: var(--dark-purple);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.1s;\n  margin: 1rem 0;\n}\n.new-task-btn:active {\n  background-color: var(--yellow);\n}\n.completed-task-container > .task-item {\n  opacity: 0.6;\n}\n.description-modal-container {\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: #ffffff55;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n.description-modal-textarea {\n  width: 500px;\n  height: fit-content;\n  min-height: 10rem;\n  outline: none;\n  resize: none;\n  border: none;\n  background-color: transparent;\n  padding: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap\");\n* {\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  color: #274d7d;\n}\n:root {\n  --yellow: #f2c200;\n  --dark-blue: #274d7d;\n  font-family: \"Roboto\", sans-serif;\n}\nbody {\n  position: relative;\n}\n.header {\n  width: 100%;\n  height: 5rem;\n  background-color: var(--yellow);\n  color: var(--dark-blue);\n  border-bottom: 1px solid var(--dark-blue);\n  font-size: 3rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  padding: 0 3rem;\n  position: fixed;\n  z-index: 1;\n}\n.avatar {\n  border-radius: 50%;\n  height: 4rem;\n  width: 4rem;\n  background-color: var(--dark-blue);\n  margin-left: auto;\n}\n.page-container {\n  background-color: var(--yellow);\n  display: grid;\n  grid-template-columns: minmax(220px, 300px) 1fr;\n  grid-template-rows: 1fr;\n  gap: 1rem;\n  min-height: 100vh;\n  padding-top: 6rem;\n  overflow-x: hidden;\n}\n.sidebar {\n  /* width: 220px; */\n  padding: 1rem;\n  grid-column: 1;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.project-container {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.card,\n.description-modal {\n  background-color: white;\n  border: 1px solid var(--dark-blue);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.card > ul {\n  margin: 0 1rem;\n  list-style-type: none;\n}\n.card li:not(:last-of-type) {\n  margin-bottom: 0.3rem;\n}\n.card > h3 {\n  margin-bottom: 1rem;\n  padding: 0.7rem 1rem 0.5rem 1rem;\n  border-bottom: 1px solid var(--dark-blue);\n}\n.card input[type=\"checkbox\"] {\n  margin-right: 1ch;\n}\n.del-project-btn,\n.description-modal-btn {\n  background-color: transparent;\n  border: none;\n  border-top: 1px solid var(--dark-blue);\n  margin-top: 1rem;\n  padding: 0.3rem 0 0.4rem 0;\n  cursor: pointer;\n}\n.new-project,\n.pseudo-project {\n  background-color: white;\n  font-weight: 600;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.new-project:active {\n  background-color: transparent;\n}\n.pseudo-project {\n  min-height: 1.5rem;\n  flex-direction: row;\n}\n.pseudo-project::before {\n  content: \" \";\n  border-radius: 50%;\n  height: 0.8rem;\n  width: 0.8rem;\n  background-color: #fe6955;\n  margin-right: 1ch;\n}\n.today::before {\n  background-color: #78dfff;\n}\n.main {\n  grid-column: 2;\n  padding: 1rem 3rem 1rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.project-expanded {\n  background-color: white;\n  flex: 0 1 1000px;\n  border: 1px solid var(--dark-blue);\n  border-radius: 10px;\n  min-height: 10rem;\n  padding: 0 0 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.project-expanded > ul {\n  list-style-type: none;\n}\n.task-item {\n  position: relative;\n  padding: 0 1rem;\n  margin-bottom: 0.3rem;\n  display: grid;\n  grid-template-columns: min-content 1fr auto auto min-content;\n  gap: 0.5rem;\n}\n.task-isCompleted {\n  grid-column: 1;\n}\n.task-title {\n  grid-column: 2;\n}\n.task-note {\n  grid-column: 3;\n}\n.task-dueDate {\n  grid-column: 4;\n}\n.task-delete {\n  grid-column: 5;\n  width: 4ch;\n  border-radius: 0;\n  background-color: transparent;\n  border: 1px solid var(--dark-blue);\n  cursor: pointer;\n  padding: 0.1rem 0.2rem;\n}\n.project-expanded-title,\n.project-expanded-title:focus {\n  background-color: transparent;\n  font-size: 2.5rem;\n  font-weight: 600;\n  padding: 1rem 2rem 0.5rem 2rem;\n  border: none;\n  border-bottom: 1px solid var(--dark-blue);\n  border-radius: 10px 10px 0 0;\n  outline: none;\n  margin-bottom: 2rem;\n}\n/* .task-input:not([type=\"checkbox\"]),\n.task-input:not([type=\"checkbox\"]):focus {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.task-input[type=\"text\"] {\n  text-overflow: ellipsis;\n}\n.task-input.task-title:focus {\n  position: absolute;\n  width: 85%;\n  background-color: #fff;\n  box-shadow: 0 0 10px 0 lightblue;\n  padding: 0.5rem;\n  z-index: 2;\n}\ninput[type=\"checkbox\"] {\n  accent-color: var(--dark-blue);\n}\nselect.task-input:has(option[value=\"high\"]:checked) {\n  background-color: #ffb3a9;\n}\nselect.task-input:has(option[value=\"normal\"]:checked) {\n  background-color: #ffeaa3;\n}\nselect.task-input:has(option[value=\"low\"]:checked) {\n  background-color: #b9efff;\n} */\n.new-task-btn {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  border: none;\n  border-top: 1px solid var(--dark-blue);\n  border-bottom: 1px solid var(--dark-blue);\n  border-radius: none;\n  background-color: transparent;\n  color: var(--dark-purple);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.1s;\n  margin: 1rem 0;\n}\n.new-task-btn:active {\n  background-color: var(--yellow);\n}\n.completed-task-container > .task-item {\n  opacity: 0.6;\n}\n.description-modal-container {\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: #ffffff55;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n.description-modal-textarea {\n  width: 500px;\n  height: fit-content;\n  min-height: 10rem;\n  outline: none;\n  resize: none;\n  border: none;\n  background-color: transparent;\n  padding: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarQuarters)
/* harmony export */ });
/* harmony import */ var _getQuarter_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getQuarter/index.js */ "./node_modules/date-fns/esm/getQuarter/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */

function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var quarterDiff = (0,_getQuarter_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft) - (0,_getQuarter_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateRight);
  return yearDiff * 4 + quarterDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarWeeks)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */

function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfWeekLeft = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var startOfWeekRight = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  var timestampLeft = startOfWeekLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInHours/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInHours/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInHours)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");




/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMinutes/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMinutes)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");




/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getQuarter/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/getQuarter/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getQuarter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */

function getQuarter(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/intlFormatDistance/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/intlFormatDistance/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ intlFormatDistance)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInCalendarQuarters/index.js */ "./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js");
/* harmony import */ var _differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInCalendarWeeks/index.js */ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js");
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
/* harmony import */ var _differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../differenceInHours/index.js */ "./node_modules/date-fns/esm/differenceInHours/index.js");
/* harmony import */ var _differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../differenceInMinutes/index.js */ "./node_modules/date-fns/esm/differenceInMinutes/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");












/**
 * @name intlFormatDistance
 * @category Common Helpers
 * @summary Formats distance between two dates in a human-readable format
 * @description
 * The function calculates the difference between two dates and formats it as a human-readable string.
 *
 * The function will pick the most appropriate unit depending on the distance between dates. For example, if the distance is a few hours, it might return `x hours`. If the distance is a few months, it might return `x months`.
 *
 * You can also specify a unit to force using it regardless of the distance to get a result like `123456 hours`.
 *
 * See the table below for the unit picking logic:
 *
 * | Distance between dates | Result (past)  | Result (future) |
 * | ---------------------- | -------------- | --------------- |
 * | 0 seconds              | now            | now             |
 * | 1-59 seconds           | X seconds ago  | in X seconds    |
 * | 1-59 minutes           | X minutes ago  | in X minutes    |
 * | 1-23 hours             | X hours ago    | in X hours      |
 * | 1 day                  | yesterday      | tomorrow        |
 * | 2-6 days               | X days ago     | in X days       |
 * | 7 days                 | last week      | next week       |
 * | 8 days-1 month         | X weeks ago    | in X weeks      |
 * | 1 month                | last month     | next month      |
 * | 2-3 months             | X months ago   | in X months     |
 * | 1 quarter              | last quarter   | next quarter    |
 * | 2-3 quarters           | X quarters ago | in X quarters   |
 * | 1 year                 | last year      | next year       |
 * | 2+ years               | X years ago    | in X years      |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with.
 * @param {Object} [options] - an object with options.
 * @param {String} [options.unit] - formats the distance with the given unit ('year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second').
 * @param {String|String[]} [options.locale] - the locale to use.
 * @param {String} [options.localeMatcher='best fit'] - the locale matching algorithm to use. Other value: 'lookup'.
 * See MDN for details [Locale identification and negotiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
 * @param {String} [options.numeric='auto'] - the output message format. The values are 'auto' (e.g. `yesterday`), 'always'(e.g. `1 day ago`).
 * @param {String} [options.style='long'] - the length of the result. The values are: 'long' (e.g. `1 month`), 'short' (e.g. 'in 1 mo.'), 'narrow' (e.g. 'in 1 mo.').
 * The narrow one could be similar to the short one for some locales.
 * @returns {String} the distance in words according to language-sensitive relative time formatting.
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.unit` must not be invalid Unit
 * @throws {RangeError} `options.locale` must not be invalid locale
 * @throws {RangeError} `options.localeMatcher` must not be invalid localeMatcher
 * @throws {RangeError} `options.numeric` must not be invalid numeric
 * @throws {RangeError} `options.style` must not be invalid style
 *
 * @example
 * // What is the distance between the dates when the fist date is after the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0)
 * )
 * //=> 'in 1 hour'
 *
 * // What is the distance between the dates when the fist date is before the second?
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0)
 * )
 * //=> '1 hour ago'
 *
 * @example
 * // Use the unit option to force the function to output the result in quarters. Without setting it, the example would return "next year"
 * intlFormatDistance(
 *   new Date(1987, 6, 4, 10, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { unit: 'quarter' }
 * )
 * //=> 'in 5 quarters'
 *
 * @example
 * // Use the locale option to get the result in Spanish. Without setting it, the example would return "in 1 hour".
 * intlFormatDistance(
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 10, 30, 0),
 *   { locale: 'es' }
 * )
 * //=> 'dentro de 1 hora'
 *
 * @example
 * // Use the numeric option to force the function to use numeric values. Without setting it, the example would return "tomorrow".
 * intlFormatDistance(
 *   new Date(1986, 3, 5, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { numeric: 'always' }
 * )
 * //=> 'in 1 day'
 *
 * @example
 * // Use the style option to force the function to use short values. Without setting it, the example would return "in 2 years".
 * intlFormatDistance(
 *   new Date(1988, 3, 4, 11, 30, 0),
 *   new Date(1986, 3, 4, 11, 30, 0),
 *   { style: 'short' }
 * )
 * //=> 'in 2 yr'
 */
function intlFormatDistance(date, baseDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var value = 0;
  var unit;
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseDate);

  if (!(options !== null && options !== void 0 && options.unit)) {
    // Get the unit based on diffInSeconds calculations if no unit is specified
    var diffInSeconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight); // The smallest unit

    if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInMinute) {
      value = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
      unit = 'second';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInHour) {
      value = (0,_differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateLeft, dateRight);
      unit = 'minute';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInDay && Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft, dateRight)) < 1) {
      value = (0,_differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft, dateRight);
      unit = 'hour';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInWeek && (value = (0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft, dateRight)) && Math.abs(value) < 7) {
      unit = 'day';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInMonth) {
      value = (0,_differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateLeft, dateRight);
      unit = 'week';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInQuarter) {
      value = (0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft, dateRight);
      unit = 'month';
    } else if (Math.abs(diffInSeconds) < _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.secondsInYear) {
      if ((0,_differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateLeft, dateRight) < 4) {
        // To filter out cases that are less than a year but match 4 quarters
        value = (0,_differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateLeft, dateRight);
        unit = 'quarter';
      } else {
        value = (0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(dateLeft, dateRight);
        unit = 'year';
      }
    } else {
      value = (0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(dateLeft, dateRight);
      unit = 'year';
    }
  } else {
    // Get the value if unit is specified
    unit = options === null || options === void 0 ? void 0 : options.unit;

    if (unit === 'second') {
      value = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
    } else if (unit === 'minute') {
      value = (0,_differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateLeft, dateRight);
    } else if (unit === 'hour') {
      value = (0,_differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft, dateRight);
    } else if (unit === 'day') {
      value = (0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft, dateRight);
    } else if (unit === 'week') {
      value = (0,_differenceInCalendarWeeks_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateLeft, dateRight);
    } else if (unit === 'month') {
      value = (0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft, dateRight);
    } else if (unit === 'quarter') {
      value = (0,_differenceInCalendarQuarters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateLeft, dateRight);
    } else if (unit === 'year') {
      value = (0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])(dateLeft, dateRight);
    }
  }

  var rtf = new Intl.RelativeTimeFormat(options === null || options === void 0 ? void 0 : options.locale, {
    localeMatcher: options === null || options === void 0 ? void 0 : options.localeMatcher,
    numeric: (options === null || options === void 0 ? void 0 : options.numeric) || 'auto',
    style: options === null || options === void 0 ? void 0 : options.style
  });
  return rtf.format(value, unit);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");



function Project(
  title = "New Project",
  id = (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)(),
  tasks = [],
  isPseudo = false
) {
  let _title = title;
  const _id = id;
  let _tasks = tasks;
  let _isPseudo = isPseudo;

  function addTask(newTask) {
    _tasks.push(newTask);
  }
  function newTask(title) {
    _tasks.push((0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(_id, title));
  }
  function removeTask(id) {
    _tasks = _tasks.filter((item) => item.id !== id);
  }

  return {
    get id() {
      return _id;
    },
    get title() {
      return _title;
    },
    set title(newTitle) {
      _title = newTitle;
    },
    get tasks() {
      return _tasks;
    },
    set tasks(newTasks) {
      _tasks = newTasks;
    },
    get isPseudo() {
      return _isPseudo;
    },
    addTask,
    removeTask,
    newTask,
  };
}

/* export function ProjectComponent(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  projectCard.dataset.id = project.id;
  projectCard.dataset.projectId = project.id;
  projectCard.dataset.type = "project-card";
  const header = document.createElement("h3");
  header.textContent = project.title;
  projectCard.appendChild(header);
  const taskList = document.createElement("ul");
  for (let task of project.tasks) {
    if (!task.isCompleted) {
      const taskLI = document.createElement("li");
      const taskTitle = document.createElement("span");
      taskTitle.textContent = task.title;
      const taskCheckbox = document.createElement("input");
      taskCheckbox.type = "checkbox";
      taskCheckbox.dataset.id = task.id;
      taskCheckbox.dataset.projectId = project.id;
      taskCheckbox.dataset.type = "task-complete";
      taskLI.appendChild(taskCheckbox);
      taskLI.appendChild(taskTitle);
      taskList.appendChild(taskLI);
    }
  }
  projectCard.appendChild(taskList);
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("del-project-btn");
  deleteProjectButton.textContent = "Delete project";
  deleteProjectButton.dataset.type = "del-project";
  projectCard.appendChild(deleteProjectButton);
  const elements = projectCard.querySelectorAll("*");
  elements.forEach((element) => (element.dataset.projectId = project.id));
  return projectCard;
}
 */


/***/ }),

/***/ "./src/ProjectComponent.js":
/*!*********************************!*\
  !*** ./src/ProjectComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
function ProjectComponent(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  projectCard.dataset.id = project.id;
  projectCard.dataset.projectId = project.id;
  projectCard.dataset.type = "project-card";
  const header = document.createElement("h3");
  header.textContent = project.title;
  projectCard.appendChild(header);
  const taskList = document.createElement("ul");
  for (let task of project.tasks) {
    if (!task.isCompleted) {
      const taskLI = document.createElement("li");
      const taskTitle = document.createElement("span");
      taskTitle.textContent = task.title;
      const taskCheckbox = document.createElement("input");
      taskCheckbox.type = "checkbox";
      taskCheckbox.dataset.id = task.id;
      taskCheckbox.dataset.projectId = project.id;
      taskCheckbox.dataset.type = "task-complete";
      taskLI.appendChild(taskCheckbox);
      taskLI.appendChild(taskTitle);
      taskList.appendChild(taskLI);
    }
  }
  projectCard.appendChild(taskList);
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("del-project-btn");
  deleteProjectButton.textContent = "Delete project";
  deleteProjectButton.dataset.type = "del-project";
  projectCard.appendChild(deleteProjectButton);
  const elements = projectCard.querySelectorAll("*");
  elements.forEach((element) => (element.dataset.projectId = project.id));
  return projectCard;
}


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");



function Task(
  projectId,
  title = "El tasco",
  description = "",
  dueDate = "",
  priority = "",
  isCompleted = false
) {
  const _id = (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)();
  let _projectId = projectId;
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _isCompleted = isCompleted;

  return {
    get id() {
      return _id;
    },
    get projectId() {
      return _projectId;
    },
    get title() {
      return _title;
    },
    set title(newTitle) {
      _title = newTitle;
    },
    get description() {
      return _description;
    },
    set description(newDescription) {
      _description = newDescription;
    },
    get dueDate() {
      return _dueDate;
    },
    set dueDate(newDueDate) {
      _dueDate = newDueDate;
    },
    get priority() {
      return _priority;
    },
    set priority(newPriority) {
      _priority = newPriority;
    },
    get isCompleted() {
      return _isCompleted;
    },
    set isCompleted(newIsCompleted) {
      _isCompleted = newIsCompleted;
    },
  };
}

/* export function TaskComponent(task) {
  const taskElement = document.createElement("li");
  taskElement.classList.add("task-item");

  taskElement.appendChild(TaskInput(task, "isCompleted"));
  taskElement.appendChild(TaskInput(task, "title"));
  taskElement.appendChild(TaskInput(task, "description"));
  taskElement.appendChild(TaskInput(task, "dueDate"));
  taskElement.appendChild(TaskInput(task, "priority"));
  taskElement.appendChild(TaskDeleteButton(task));

  return taskElement;
}

function TaskInput(task, fieldType) {
  let inputType = "text";
  switch (fieldType) {
    case "dueDate":
      inputType = "date";
      break;
    case "isCompleted":
      inputType = "checkbox";
      break;
    case "priority":
      inputType = "select";
      break;
    default:
      inputType = "text";
      break;
  }
  if (inputType === "select") {
    const element = document.createElement("select");
    element.classList.add("task-input", `task-${fieldType}`);
    element.dataset.projectId = task.projectId;
    element.dataset.taskId = task.id;
    element.dataset.type = fieldType;
    for (let option of ["normal", "high", "low"]) {
      const optionElement = document.createElement("option");
      optionElement.innerText = option;
      optionElement.value = option;
      element.appendChild(optionElement);
    }
    element.value = task[fieldType];
    return element;
  } else {
    const element = document.createElement("input");
    element.type = inputType;
    element.classList.add("task-input", `task-${fieldType}`);
    //element.value = task[fieldType];
    if (fieldType === "description") {
      element.value = task[fieldType].replaceAll("\n", " ");
      element.placeholder = "...";
    } else if (fieldType === "dueDate") {
      // do stuff//////////////////////////////////////////
    } else {
      element.value = task[fieldType];
    }
    if (element.type === "checkbox") {
      element.checked = task.isCompleted;
    }
    element.dataset.projectId = task.projectId;
    element.dataset.taskId = task.id;
    element.dataset.type = fieldType;
    return element;
  }
} */

/* function TaskDeleteButton(task) {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("task-delete");
  button.textContent = "Del";
  button.dataset.taskId = task.id;
  button.dataset.type = "delete-task";
  return button;
}

export function DescriptionModal(task) {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("description-modal-container");
  modalContainer.dataset.taskId = task.id;
  modalContainer.dataset.projectId = task.projectId;
  modalContainer.dataset.type = "modal-container";
  const modal = document.createElement("div");
  modal.classList.add("description-modal");
  modal.dataset.taskId = task.id;
  modal.dataset.projectId = task.projectId;
  modal.dataset.type = "modal";
  const textArea = document.createElement("textarea");
  textArea.id = "description-textarea";
  textArea.classList.add("description-modal-textarea");
  textArea.dataset.taskId = task.id;
  textArea.dataset.projectId = task.projectId;
  textArea.value = task.description;
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("description-modal-btn");
  submitBtn.dataset.taskId = task.id;
  submitBtn.dataset.projectId = task.projectId;
  submitBtn.dataset.type = "modal-save";
  submitBtn.textContent = "Save (Ctrl+Enter)";

  modal.appendChild(textArea);
  modal.appendChild(submitBtn);
  modalContainer.appendChild(modal);

  return modalContainer;
} */


/***/ }),

/***/ "./src/TaskComponent.js":
/*!******************************!*\
  !*** ./src/TaskComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionModal": () => (/* binding */ DescriptionModal),
/* harmony export */   "TaskComponent": () => (/* binding */ TaskComponent),
/* harmony export */   "TaskDeleteButton": () => (/* binding */ TaskDeleteButton)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/intlFormatDistance/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



function TaskComponent(task) {
  const taskElement = document.createElement("li");
  taskElement.classList.add("task-item");

  taskElement.appendChild(MakeCheckbox(task));
  taskElement.appendChild(MakeTitle(task));
  taskElement.appendChild(MakeNote(task));
  taskElement.appendChild(MakeDate(task));

  taskElement.appendChild(TaskDeleteButton(task));

  /* taskElement.appendChild(TaskInput(task, "isCompleted"));
  taskElement.appendChild(TaskInput(task, "title"));
  taskElement.appendChild(TaskInput(task, "description"));
  taskElement.appendChild(TaskInput(task, "dueDate"));
  taskElement.appendChild(TaskInput(task, "priority"));
  taskElement.appendChild(TaskDeleteButton(task)); */

  return taskElement;
}

function MakeCheckbox(task) {
  const checkbox = document.createElement("input");
  checkbox.classList.add(`task-isCompleted`);
  checkbox.type = "checkbox";
  checkbox.checked = task.isCompleted;
  checkbox.dataset.projectId = task.projectId;
  checkbox.dataset.taskId = task.id;
  checkbox.dataset.type = "checkbox";
  return checkbox;
}
function MakeTitle(task) {
  const title = document.createElement("span");
  title.classList.add(`task-title`);
  title.textContent = task.title;
  title.dataset.projectId = task.projectId;
  title.dataset.taskId = task.id;
  title.dataset.type = "title";
  title.dataset.expander = true;
  return title;
}
function MakeNote(task) {
  const note = document.createElement("span");
  note.classList.add(`task-note`);
  note.textContent = "note";
  note.dataset.projectId = task.projectId;
  note.dataset.taskId = task.id;
  note.dataset.type = "note";
  note.dataset.expander = true;
  return note;
}
function MakeDate(task) {
  const date = document.createElement("span");
  date.classList.add(`task-date`);
  date.textContent = "date";
  date.dataset.projectId = task.projectId;
  date.dataset.taskId = task.id;
  date.dataset.type = "date";
  date.dataset.expander = true;
  return date;
}

function TaskInput(task, fieldType) {
  let inputType = "text";
  switch (fieldType) {
    case "dueDate":
      inputType = "date";
      break;
    case "isCompleted":
      inputType = "checkbox";
      break;
    case "priority":
      inputType = "select";
      break;
    default:
      inputType = "text";
      break;
  }
  if (inputType === "select") {
    const element = document.createElement("select");
    element.classList.add("task-input", `task-${fieldType}`);
    element.dataset.projectId = task.projectId;
    element.dataset.taskId = task.id;
    element.dataset.type = fieldType;
    for (let option of ["normal", "high", "low"]) {
      const optionElement = document.createElement("option");
      optionElement.innerText = option;
      optionElement.value = option;
      element.appendChild(optionElement);
    }
    element.value = task[fieldType];
    return element;
  } else {
    const element = document.createElement("input");
    element.type = inputType;
    element.classList.add("task-input", `task-${fieldType}`);
    //element.value = task[fieldType];
    if (fieldType === "description") {
      element.value = task[fieldType].replaceAll("\n", " ");
      element.placeholder = "...";
    } else if (fieldType === "dueDate") {
      if (task.dueDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(task.dueDate)) {
        /////////////////////////////////////////////////////////////////////
        element.valueAsDate = task.dueDate;
        const interval = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(task.dueDate, new Date(), {
          unit: "day",
        });
        element.dataset.interval = (0,_index__WEBPACK_IMPORTED_MODULE_0__.capitalize)(interval);
      } else {
        element.dataset.interval = "Unset";
      }
    } else {
      element.value = task[fieldType];
    }
    if (element.type === "checkbox") {
      element.checked = task.isCompleted;
    }
    element.dataset.projectId = task.projectId;
    element.dataset.taskId = task.id;
    element.dataset.type = fieldType;
    return element;
  }
}

function TaskDeleteButton(task) {
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("task-delete");
  button.textContent = "Del";
  button.dataset.taskId = task.id;
  button.dataset.type = "delete-task";
  return button;
}

function DescriptionModal(task) {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("description-modal-container");
  modalContainer.dataset.taskId = task.id;
  modalContainer.dataset.projectId = task.projectId;
  modalContainer.dataset.type = "modal-container";
  const modal = document.createElement("div");
  modal.classList.add("description-modal");
  modal.dataset.taskId = task.id;
  modal.dataset.projectId = task.projectId;
  modal.dataset.type = "modal";
  const textArea = document.createElement("textarea");
  textArea.id = "description-textarea";
  textArea.classList.add("description-modal-textarea");
  textArea.dataset.taskId = task.id;
  textArea.dataset.projectId = task.projectId;
  textArea.value = task.description;
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("description-modal-btn");
  submitBtn.dataset.taskId = task.id;
  submitBtn.dataset.projectId = task.projectId;
  submitBtn.dataset.type = "modal-save";
  submitBtn.textContent = "Save (Ctrl+Enter)";

  modal.appendChild(textArea);
  modal.appendChild(submitBtn);
  modalContainer.appendChild(modal);

  return modalContainer;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => (/* binding */ capitalize)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _TaskComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskComponent */ "./src/TaskComponent.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _ProjectComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectComponent */ "./src/ProjectComponent.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
//import { nanoid } from "nanoid";







const state = (function () {
  let _projects = [];

  function createProject(title, tasks = [], isPseudo = false) {
    console.log("state.addProject invoked");
    const newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_3__["default"])(title, undefined, tasks, isPseudo);
    _projects.unshift(newProject);
    GUI.refresh();
    if (!newProject.isPseudo) {
      GUI.createNewTask();
    }
  }
  function removeProject(id) {
    console.log("state.removeProject invoked");
    _projects = _projects.filter((project) => project.id !== id);
  }
  function getProjects() {
    return _projects;
  }
  function loadProjects() {
    let loadedProjects = localStorage.getItem("projects");
    if (loadedProjects && _projects.length === 0) {
      console.log("loading projects from localstorage");
      loadedProjects = JSON.parse(loadedProjects);
    } else {
      console.log("nothing was loaded from localstorage");
      return;
    }
    loadedProjects = loadedProjects.map((project) => {
      let newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_3__["default"])(project.title, project.id, project.tasks);
      newProject.tasks = newProject.tasks.map((task) => {
        return (0,_Task__WEBPACK_IMPORTED_MODULE_1__["default"])(
          task.projectId,
          task.title,
          task.description,
          new Date(task.dueDate),
          task.priority,
          task.isCompleted
        );
      });
      return newProject;
    });
    _projects = loadedProjects;
  }
  function selectProject(projectId) {
    //moves selected project to the start of _projects array
    console.log("state.selectProject invoked");
    const index = _projects.findIndex((project) => project.id === projectId);
    _projects.unshift(_projects.splice(index, 1)[0]);
  }
  function getTaskById(taskId) {
    console.log("state.getTaskById invoked");
    for (let project of _projects) {
      const result = project.tasks.find((task) => task.id === taskId);
      if (result) {
        return result;
      }
    }
  }
  function getProjectById(projectId) {
    console.log("state.getProjectById invoked");
    return _projects.find((project) => project.id === projectId);
  }
  function syncStorage() {
    console.log("uploading projects to localStorage");
    localStorage.setItem("projects", JSON.stringify(_projects));
  }
  function clearPseudoProjects() {
    _projects = _projects.filter((project) => !project.isPseudo);
  }

  return {
    createProject,
    removeProject,
    getProjects,
    loadProjects,
    selectProject,
    syncStorage,
    getTaskById,
    getProjectById,
    clearPseudoProjects,
  };
})();

state.loadProjects();

//////////////////////////////////////////////////////////////////////
const GUI = (function () {
  const projectsContainer = document.querySelector(".project-container");
  const newProjectButton = document.querySelector(".new-project");
  const overdueProjectButton = document.querySelector(".overdue");
  const todayProjectButton = document.querySelector(".today");
  const expandedProjectDiv = document.querySelector(".project-expanded");
  const projectTitle = document.querySelector(".project-expanded-title");
  const taskContainer = document.querySelector(".task-container");
  const completedTaskContainer = document.querySelector(
    ".completed-task-container"
  );
  const addButtonContainer = document.querySelector(".add-container");
  let topProject = undefined;

  expandedProjectDiv.addEventListener("click", handleProjectClicks);
  function handleProjectClicks(event) {
    if (event.target.dataset.type === "add-task") {
      createNewTask();
    } else if (event.target.dataset.type === "delete-task") {
      console.log("GUI deleting task");
      if (event.ctrlKey || confirm("Please confirm deleting task")) {
        topProject.removeTask(event.target.dataset.taskId);
        refresh();
      }
    } else if (event.target.dataset.type === "description") {
      openModal(event);
    }
  }
  //TODO move following function to state?
  function createNewTask() {
    console.log("GUI.createNewTask invoked");
    if (!topProject) {
      console.log("no projects yet");
      createNewProject();
    }
    topProject.newTask();
    refresh();
    document
      .querySelector(".task-container .task-item:last-child input.task-title")
      .select();
  }
  function openModal(event) {
    const taskId = event.target.dataset.taskId;
    const task = state.getTaskById(taskId);
    document.body.appendChild((0,_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.DescriptionModal)(task));
    document.querySelector(".description-modal-textarea").focus();
  }

  newProjectButton.addEventListener("click", createNewProject);
  function createNewProject() {
    console.log("GUI.createNewProject invoked");
    state.createProject("New project");
  }
  overdueProjectButton.addEventListener("click", overduePseudoProject);
  function overduePseudoProject() {
    console.log("GUI.overduePseudoProject invoked");
    state.clearPseudoProjects();
    const overdueTasks = [];
    state.getProjects().forEach((project) => {
      project.tasks.forEach((task) => {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(task.dueDate))) {
          overdueTasks.push(task);
        }
      });
    });
    state.createProject("Overdue tasks", overdueTasks, true);
    //////////////////////////////////////////////////////////////////
  }
  todayProjectButton.addEventListener("click", todayPseudoProject);
  function todayPseudoProject() {
    console.log("GUI.todayPseudoProject invoked");
    state.clearPseudoProjects();
    const todayTasks = [];
    state.getProjects().forEach((project) => {
      project.tasks.forEach((task) => {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(task.dueDate)) {
          todayTasks.push(task);
        }
      });
    });
    state.createProject("Tasks for today", todayTasks, true);
  }

  projectsContainer.addEventListener("click", handleSidebarClicks);
  function handleSidebarClicks(event) {
    const clickSource = event.target.dataset.type;
    const projectId = event.target.dataset.projectId;
    const targetProject = state.getProjectById(projectId);
    if (clickSource === "del-project") {
      if (
        event.ctrlKey ||
        confirm(`Please confirm removing "${targetProject.title}" project`)
      ) {
        state.removeProject(projectId);
        refresh();
      }
    } else if (clickSource === "task-complete") {
      const taskId = event.target.dataset.id;
      console.log(taskId);
      const targetTask = state.getTaskById(taskId);
      console.log(targetTask);
      targetTask.isCompleted = true;
      refresh();
    } else if (event.target.id !== "project-container") {
      console.log("GUI.selectProject invoked");
      state.selectProject(projectId);
      state.clearPseudoProjects();
      refresh();
    }
  }

  expandedProjectDiv.addEventListener("change", handleProjectInputChange);
  function handleProjectInputChange(event) {
    if (event.target.id === "project-expanded-title") {
      console.log("changing project title");
      if (topProject) {
        topProject.title = capitalize(event.target.value);
        refresh();
      } else {
        console.warn("no project to change title of");
      }
    } else {
      handleTaskInputChange(event);
    }
  }
  function handleTaskInputChange(event) {
    console.log("handleTaskInputChange invoked");
    const taskId = event.target.dataset.taskId;
    const fieldType = event.target.dataset.type;
    const targetTask = topProject.tasks.find((task) => task.id === taskId);
    if (fieldType === "isCompleted") {
      targetTask.isCompleted = event.target.checked;
      refresh();
    } else {
      if (fieldType === "title") {
        targetTask[fieldType] = capitalize(event.target.value);
      } else if (fieldType === "dueDate") {
        targetTask[fieldType] = event.target.valueAsDate;
        refresh();
      } else {
        targetTask[fieldType] = event.target.value;
      }
      refresh("exceptTasks");
    }
  }

  expandedProjectDiv.addEventListener("keyup", handleKeyUp);
  function handleKeyUp(event) {
    event.stopPropagation();
    if (event.keyCode === 13) {
      if (event.target.dataset.type === "description") {
        openModal(event);
        return;
      }
      //make input lose focus and so trigger 'change' events
      event.target.blur();
      if (event.ctrlKey && topProject) {
        createNewTask();
      }
    }
  }

  document.addEventListener("keyup", handleDocumentKeyUp);
  function handleDocumentKeyUp(event) {
    if (
      event.keyCode === 13 &&
      event.ctrlKey &&
      event.target.id === "description-textarea"
    ) {
      saveDescription(event);
    } else if (
      event.target.dataset.type === "modal-save" &&
      (event.keyCode === 13 || event.keyCode === 32)
    ) {
      saveDescription(event);
    } else if (
      event.keyCode === 27 &&
      (event.target.id === "description-textarea" ||
        event.target.dataset.type === "modal-save")
    ) {
      closeModal();
    }
  }

  document.addEventListener("mousedown", handleDocumentClick);
  function handleDocumentClick(event) {
    if (event.target.dataset.type === "modal-save") {
      saveDescription(event);
    } else if (event.target.dataset.type === "modal-container") {
      closeModal();
    }
  }
  function saveDescription(event) {
    const taskId = event.target.dataset.taskId;
    const textAreaValue = document.querySelector(
      ".description-modal-textarea"
    ).value;
    state.getTaskById(taskId).description = textAreaValue;
    closeModal();
    refresh();
  }
  function closeModal() {
    document.body.removeChild(
      document.querySelector(".description-modal-container")
    );
  }

  function refresh(exception) {
    console.log("GUI.refresh invoked");
    const currentProjects = state.getProjects();
    topProject = currentProjects[0];
    if (exception !== "exceptTasks") {
      taskContainer.innerHTML = "";
      completedTaskContainer.innerHTML = "";
      if (!topProject) {
        console.warn("GUI.refresh: no projects available");
        projectTitle.value = "Let's start a new project!";
      } else {
        projectTitle.value = topProject.title;
        if (topProject.isPseudo) {
          projectTitle.readOnly = true;
        } else {
          projectTitle.readOnly = false;
        }
        for (let task of topProject.tasks) {
          const taskElement = (0,_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.TaskComponent)(task);
          if (task.isCompleted) {
            if (!topProject.isPseudo) {
              completedTaskContainer.appendChild(taskElement);
            }
          } else {
            taskContainer.appendChild(taskElement);
          }
        }
      }
    }
    addButtonContainer.innerHTML = "";
    if (!topProject.isPseudo) {
      const addTaskButton = document.createElement("button");
      addTaskButton.classList.add("new-task-btn");
      addTaskButton.dataset.type = "add-task";
      addTaskButton.textContent = "+ Add task";
      addButtonContainer.appendChild(addTaskButton);
    }

    projectsContainer.innerHTML = "";
    for (let project of currentProjects) {
      if (!project.isPseudo) {
        const projectCard = (0,_ProjectComponent__WEBPACK_IMPORTED_MODULE_4__.ProjectComponent)(project);
        projectsContainer.appendChild(projectCard);
      }
    }
    if (!topProject.isPseudo) {
      //if (true) {
      state.syncStorage();
    }

    /* document.getElementById("testDiv").textContent = JSON.stringify(
      state.getProjects()[0].tasks.map((task) => {
        return { dueDate: task.dueDate, type: typeof task.dueDate };
      })
    )
      .split(",")
      .join("\r\n"); */
  }

  return {
    refresh,
    createNewTask,
    //
  };
})();

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

GUI.refresh();


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sZ0NBQWdDLE1BQU0sS0FBSyxVQUFVLFlB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QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFB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T0FBTyw4Q0FBTTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BGTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENnQztBQUNjOztBQUUvQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4Q0FBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsVUFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnREFBZ0QsVUFBVTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS3FEO0FBQ2xCOztBQUU5QjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkRBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1FQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLE9BQU87QUFDUDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwWHFEO0FBQzlDO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDaENJO0FBQ1A7Ozs7Ozs7VUNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkhvdXJzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFF1YXJ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pbnRsRm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvUHJvamVjdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvVGFza0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzI3NGQ3ZDtcXG59XFxuOnJvb3Qge1xcbiAgLS15ZWxsb3c6ICNmMmMyMDA7XFxuICAtLWRhcmstYmx1ZTogIzI3NGQ3ZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYXZhdGFyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucGFnZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMjBweCwgMzAwcHgpIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLXRvcDogNnJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLnNpZGViYXIge1xcbiAgLyogd2lkdGg6IDIyMHB4OyAqL1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNhcmQsXFxuLmRlc2NyaXB0aW9uLW1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4uY2FyZCA+IHVsIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uY2FyZCBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG4uY2FyZCA+IGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbSAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG4uY2FyZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIG1hcmdpbi1yaWdodDogMWNoO1xcbn1cXG4uZGVsLXByb2plY3QtYnRuLFxcbi5kZXNjcmlwdGlvbi1tb2RhbC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nOiAwLjNyZW0gMCAwLjRyZW0gMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5ldy1wcm9qZWN0LFxcbi5wc2V1ZG8tcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG59XFxuLm5ldy1wcm9qZWN0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnBzZXVkby1wcm9qZWN0IHtcXG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5wc2V1ZG8tcHJvamVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMC44cmVtO1xcbiAgd2lkdGg6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTY5NTU7XFxuICBtYXJnaW4tcmlnaHQ6IDFjaDtcXG59XFxuLnRvZGF5OjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4ZGZmZjtcXG59XFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBwYWRkaW5nOiAxcmVtIDNyZW0gMXJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5wcm9qZWN0LWV4cGFuZGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleDogMCAxIDEwMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWluLWhlaWdodDogMTByZW07XFxuICBwYWRkaW5nOiAwIDAgMnJlbSAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLnByb2plY3QtZXhwYW5kZWQgPiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi50YXNrLWl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIGF1dG8gYXV0byBtaW4tY29udGVudDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4udGFzay1pc0NvbXBsZXRlZCB7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuLnRhc2stdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcbi50YXNrLW5vdGUge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxufVxcbi50YXNrLWR1ZURhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxufVxcbi50YXNrLWRlbGV0ZSB7XFxuICBncmlkLWNvbHVtbjogNTtcXG4gIHdpZHRoOiA0Y2g7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuMnJlbTtcXG59XFxuLnByb2plY3QtZXhwYW5kZWQtdGl0bGUsXFxuLnByb2plY3QtZXhwYW5kZWQtdGl0bGU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW0gMC41cmVtIDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLyogLnRhc2staW5wdXQ6bm90KFt0eXBlPVxcXCJjaGVja2JveFxcXCJdKSxcXG4udGFzay1pbnB1dDpub3QoW3R5cGU9XFxcImNoZWNrYm94XFxcIl0pOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2staW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGFzay1pbnB1dC50YXNrLXRpdGxlOmZvY3VzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCBsaWdodGJsdWU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB6LWluZGV4OiAyO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuc2VsZWN0LnRhc2staW5wdXQ6aGFzKG9wdGlvblt2YWx1ZT1cXFwiaGlnaFxcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzYTk7XFxufVxcbnNlbGVjdC50YXNrLWlucHV0OmhhcyhvcHRpb25bdmFsdWU9XFxcIm5vcm1hbFxcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhYTM7XFxufVxcbnNlbGVjdC50YXNrLWlucHV0OmhhcyhvcHRpb25bdmFsdWU9XFxcImxvd1xcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWVmZmY7XFxufSAqL1xcbi5uZXctdGFzay1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubmV3LXRhc2stYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG4uY29tcGxldGVkLXRhc2stY29udGFpbmVyID4gLnRhc2staXRlbSB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcbi5kZXNjcmlwdGlvbi1tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1NTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uZGVzY3JpcHRpb24tbW9kYWwtdGV4dGFyZWEge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxp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QUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICMyNzRkN2Q7XFxufVxcbjpyb290IHtcXG4gIC0teWVsbG93OiAjZjJjMjAwO1xcbiAgLS1kYXJrLWJsdWU6ICMyNzRkN2Q7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzcmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmF2YXRhciB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjIwcHgsIDMwMHB4KSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdhcDogMXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZy10b3A6IDZyZW07XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5zaWRlYmFyIHtcXG4gIC8qIHdpZHRoOiAyMjBweDsgKi9cXG4gIHBhZGRpbmc6IDFyZW07XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jYXJkLFxcbi5kZXNjcmlwdGlvbi1tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuLmNhcmQgPiB1bCB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLmNhcmQgbGk6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuLmNhcmQgPiBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW0gMC41cmVtIDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDFjaDtcXG59XFxuLmRlbC1wcm9qZWN0LWJ0bixcXG4uZGVzY3JpcHRpb24tbW9kYWwtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgcGFkZGluZzogMC4zcmVtIDAgMC40cmVtIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uZXctcHJvamVjdCxcXG4ucHNldWRvLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxufVxcbi5uZXctcHJvamVjdDphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5wc2V1ZG8tcHJvamVjdCB7XFxuICBtaW4taGVpZ2h0OiAxLjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ucHNldWRvLXByb2plY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDAuOHJlbTtcXG4gIHdpZHRoOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU2OTU1O1xcbiAgbWFyZ2luLXJpZ2h0OiAxY2g7XFxufVxcbi50b2RheTo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OGRmZmY7XFxufVxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ucHJvamVjdC1leHBhbmRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDAgMSAxMDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZzogMCAwIDJyZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5wcm9qZWN0LWV4cGFuZGVkID4gdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4udGFzay1pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmciBhdXRvIGF1dG8gbWluLWNvbnRlbnQ7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnRhc2staXNDb21wbGV0ZWQge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxufVxcbi50YXNrLXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG4udGFzay1ub3RlIHtcXG4gIGdyaWQtY29sdW1uOiAzO1xcbn1cXG4udGFzay1kdWVEYXRlIHtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbn1cXG4udGFzay1kZWxldGUge1xcbiAgZ3JpZC1jb2x1bW46IDU7XFxuICB3aWR0aDogNGNoO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjJyZW07XFxufVxcbi5wcm9qZWN0LWV4cGFuZGVkLXRpdGxlLFxcbi5wcm9qZWN0LWV4cGFuZGVkLXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMXJlbSAycmVtIDAuNXJlbSAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi8qIC50YXNrLWlucHV0Om5vdChbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSksXFxuLnRhc2staW5wdXQ6bm90KFt0eXBlPVxcXCJjaGVja2JveFxcXCJdKTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi50YXNrLWlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLnRhc2staW5wdXQudGFzay10aXRsZTpmb2N1cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogODUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgbGlnaHRibHVlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgei1pbmRleDogMjtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhY2NlbnQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcbnNlbGVjdC50YXNrLWlucHV0OmhhcyhvcHRpb25bdmFsdWU9XFxcImhpZ2hcXFwiXTpjaGVja2VkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiM2E5O1xcbn1cXG5zZWxlY3QudGFzay1pbnB1dDpoYXMob3B0aW9uW3ZhbHVlPVxcXCJub3JtYWxcXFwiXTpjaGVja2VkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYWEzO1xcbn1cXG5zZWxlY3QudGFzay1pbnB1dDpoYXMob3B0aW9uW3ZhbHVlPVxcXCJsb3dcXFwiXTpjaGVja2VkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjllZmZmO1xcbn0gKi9cXG4ubmV3LXRhc2stYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm5ldy10YXNrLWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuLmNvbXBsZXRlZC10YXNrLWNvbnRhaW5lciA+IC50YXNrLWl0ZW0ge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG4uZGVzY3JpcHRpb24tbW9kYWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMjtcXG59XFxuLmRlc2NyaXB0aW9uLW1vZGFsLXRleHRhcmVhIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXG59O1xudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IGdldFF1YXJ0ZXIgZnJvbSBcIi4uL2dldFF1YXJ0ZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVyc1xuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBxdWFydGVycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHF1YXJ0ZXJzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIHF1YXJ0ZXJzIGFyZSBiZXR3ZWVuIDMxIERlY2VtYmVyIDIwMTMgYW5kIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDIwMTMsIDExLCAzMSlcbiAqIClcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIHF1YXJ0ZXJEaWZmID0gZ2V0UXVhcnRlcihkYXRlTGVmdCkgLSBnZXRRdWFydGVyKGRhdGVSaWdodCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDQgKyBxdWFydGVyRGlmZjtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHdlZWtzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciB3ZWVrcyBhcmUgYmV0d2VlbiA1IEp1bHkgMjAxNCBhbmQgMjAgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMjApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCA1KVxuICogKVxuICogLy89PiAzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksXG4gKiAvLyBob3cgbWFueSBjYWxlbmRhciB3ZWVrcyBhcmUgYmV0d2VlbiA1IEp1bHkgMjAxNCBhbmQgMjAgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMjApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCA1KSxcbiAqICAgeyB3ZWVrU3RhcnRzT246IDEgfVxuICogKVxuICogLy89PiAyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZXZWVrTGVmdCA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgc3RhcnRPZldlZWtSaWdodCA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mV2Vla0xlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mV2Vla0xlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mV2Vla1JpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZldlZWtSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSyk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHllYXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgeWVhcnMgYXJlIGJldHdlZW4gMzEgRGVjZW1iZXIgMjAxMyBhbmQgMTEgRmVicnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMjAxMywgMTEsIDMxKVxuICogKVxuICogLy89PiAyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Ib3Vyc1xuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgaG91cnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgaG91cnMgYXJlIGJldHdlZW4gMiBKdWx5IDIwMTQgMDY6NTA6MDAgYW5kIDIgSnVseSAyMDE0IDE5OjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluSG91cnMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE5LCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgNTApXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyBtaWxsaXNlY29uZHNJbkhvdXI7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbnV0ZXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHNpZ25lZCBudW1iZXIgb2YgZnVsbCAocm91bmRlZCB0b3dhcmRzIDApIG1pbnV0ZXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbnV0ZXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWludXRlcyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAxMjowNzo1OSBhbmQgMiBKdWx5IDIwMTQgMTI6MjA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgNywgNTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbnV0ZXMgYXJlIGJldHdlZW4gMTA6MDE6NTkgYW5kIDEwOjAwOjAwXG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDAwLCAwLCAxLCAxMCwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMDAsIDAsIDEsIDEwLCAxLCA1OSlcbiAqIClcbiAqIC8vPT4gLTFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaW51dGVzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5NaW51dGU7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRRdWFydGVyXG4gKiBAY2F0ZWdvcnkgUXVhcnRlciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIHllYXIgcXVhcnRlciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgeWVhciBxdWFydGVyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHF1YXJ0ZXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBxdWFydGVyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0UXVhcnRlcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFF1YXJ0ZXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgcXVhcnRlciA9IE1hdGguZmxvb3IoZGF0ZS5nZXRNb250aCgpIC8gMykgKyAxO1xuICByZXR1cm4gcXVhcnRlcjtcbn0iLCJpbXBvcnQgeyBzZWNvbmRzSW5EYXksIHNlY29uZHNJbkhvdXIsIHNlY29uZHNJbk1pbnV0ZSwgc2Vjb25kc0luTW9udGgsIHNlY29uZHNJblF1YXJ0ZXIsIHNlY29uZHNJbldlZWssIHNlY29uZHNJblllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Ib3VycyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluSG91cnMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaW51dGVzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaW51dGVzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGludGxGb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXRzIGRpc3RhbmNlIGJldHdlZW4gdHdvIGRhdGVzIGluIGEgaHVtYW4tcmVhZGFibGUgZm9ybWF0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRhdGVzIGFuZCBmb3JtYXRzIGl0IGFzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nLlxuICpcbiAqIFRoZSBmdW5jdGlvbiB3aWxsIHBpY2sgdGhlIG1vc3QgYXBwcm9wcmlhdGUgdW5pdCBkZXBlbmRpbmcgb24gdGhlIGRpc3RhbmNlIGJldHdlZW4gZGF0ZXMuIEZvciBleGFtcGxlLCBpZiB0aGUgZGlzdGFuY2UgaXMgYSBmZXcgaG91cnMsIGl0IG1pZ2h0IHJldHVybiBgeCBob3Vyc2AuIElmIHRoZSBkaXN0YW5jZSBpcyBhIGZldyBtb250aHMsIGl0IG1pZ2h0IHJldHVybiBgeCBtb250aHNgLlxuICpcbiAqIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgdW5pdCB0byBmb3JjZSB1c2luZyBpdCByZWdhcmRsZXNzIG9mIHRoZSBkaXN0YW5jZSB0byBnZXQgYSByZXN1bHQgbGlrZSBgMTIzNDU2IGhvdXJzYC5cbiAqXG4gKiBTZWUgdGhlIHRhYmxlIGJlbG93IGZvciB0aGUgdW5pdCBwaWNraW5nIGxvZ2ljOlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAocGFzdCkgIHwgUmVzdWx0IChmdXR1cmUpIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgMCBzZWNvbmRzICAgICAgICAgICAgICB8IG5vdyAgICAgICAgICAgIHwgbm93ICAgICAgICAgICAgIHxcbiAqIHwgMS01OSBzZWNvbmRzICAgICAgICAgICB8IFggc2Vjb25kcyBhZ28gIHwgaW4gWCBzZWNvbmRzICAgIHxcbiAqIHwgMS01OSBtaW51dGVzICAgICAgICAgICB8IFggbWludXRlcyBhZ28gIHwgaW4gWCBtaW51dGVzICAgIHxcbiAqIHwgMS0yMyBob3VycyAgICAgICAgICAgICB8IFggaG91cnMgYWdvICAgIHwgaW4gWCBob3VycyAgICAgIHxcbiAqIHwgMSBkYXkgICAgICAgICAgICAgICAgICB8IHllc3RlcmRheSAgICAgIHwgdG9tb3Jyb3cgICAgICAgIHxcbiAqIHwgMi02IGRheXMgICAgICAgICAgICAgICB8IFggZGF5cyBhZ28gICAgIHwgaW4gWCBkYXlzICAgICAgIHxcbiAqIHwgNyBkYXlzICAgICAgICAgICAgICAgICB8IGxhc3Qgd2VlayAgICAgIHwgbmV4dCB3ZWVrICAgICAgIHxcbiAqIHwgOCBkYXlzLTEgbW9udGggICAgICAgICB8IFggd2Vla3MgYWdvICAgIHwgaW4gWCB3ZWVrcyAgICAgIHxcbiAqIHwgMSBtb250aCAgICAgICAgICAgICAgICB8IGxhc3QgbW9udGggICAgIHwgbmV4dCBtb250aCAgICAgIHxcbiAqIHwgMi0zIG1vbnRocyAgICAgICAgICAgICB8IFggbW9udGhzIGFnbyAgIHwgaW4gWCBtb250aHMgICAgIHxcbiAqIHwgMSBxdWFydGVyICAgICAgICAgICAgICB8IGxhc3QgcXVhcnRlciAgIHwgbmV4dCBxdWFydGVyICAgIHxcbiAqIHwgMi0zIHF1YXJ0ZXJzICAgICAgICAgICB8IFggcXVhcnRlcnMgYWdvIHwgaW4gWCBxdWFydGVycyAgIHxcbiAqIHwgMSB5ZWFyICAgICAgICAgICAgICAgICB8IGxhc3QgeWVhciAgICAgIHwgbmV4dCB5ZWFyICAgICAgIHxcbiAqIHwgMisgeWVhcnMgICAgICAgICAgICAgICB8IFggeWVhcnMgYWdvICAgIHwgaW4gWCB5ZWFycyAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudW5pdF0gLSBmb3JtYXRzIHRoZSBkaXN0YW5jZSB3aXRoIHRoZSBnaXZlbiB1bml0ICgneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcpLlxuICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IFtvcHRpb25zLmxvY2FsZV0gLSB0aGUgbG9jYWxlIHRvIHVzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVNYXRjaGVyPSdiZXN0IGZpdCddIC0gdGhlIGxvY2FsZSBtYXRjaGluZyBhbGdvcml0aG0gdG8gdXNlLiBPdGhlciB2YWx1ZTogJ2xvb2t1cCcuXG4gKiBTZWUgTUROIGZvciBkZXRhaWxzIFtMb2NhbGUgaWRlbnRpZmljYXRpb24gYW5kIG5lZ290aWF0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsI2xvY2FsZV9pZGVudGlmaWNhdGlvbl9hbmRfbmVnb3RpYXRpb24pXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubnVtZXJpYz0nYXV0byddIC0gdGhlIG91dHB1dCBtZXNzYWdlIGZvcm1hdC4gVGhlIHZhbHVlcyBhcmUgJ2F1dG8nIChlLmcuIGB5ZXN0ZXJkYXlgKSwgJ2Fsd2F5cycoZS5nLiBgMSBkYXkgYWdvYCkuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3R5bGU9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHJlc3VsdC4gVGhlIHZhbHVlcyBhcmU6ICdsb25nJyAoZS5nLiBgMSBtb250aGApLCAnc2hvcnQnIChlLmcuICdpbiAxIG1vLicpLCAnbmFycm93JyAoZS5nLiAnaW4gMSBtby4nKS5cbiAqIFRoZSBuYXJyb3cgb25lIGNvdWxkIGJlIHNpbWlsYXIgdG8gdGhlIHNob3J0IG9uZSBmb3Igc29tZSBsb2NhbGVzLlxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzIGFjY29yZGluZyB0byBsYW5ndWFnZS1zZW5zaXRpdmUgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nLlxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnVuaXRgIG11c3Qgbm90IGJlIGludmFsaWQgVW5pdFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IG5vdCBiZSBpbnZhbGlkIGxvY2FsZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlTWF0Y2hlcmAgbXVzdCBub3QgYmUgaW52YWxpZCBsb2NhbGVNYXRjaGVyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5udW1lcmljYCBtdXN0IG5vdCBiZSBpbnZhbGlkIG51bWVyaWNcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnN0eWxlYCBtdXN0IG5vdCBiZSBpbnZhbGlkIHN0eWxlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGRhdGVzIHdoZW4gdGhlIGZpc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kP1xuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApXG4gKiApXG4gKiAvLz0+ICdpbiAxIGhvdXInXG4gKlxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZGF0ZXMgd2hlbiB0aGUgZmlzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kP1xuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApXG4gKiApXG4gKiAvLz0+ICcxIGhvdXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIHVuaXQgb3B0aW9uIHRvIGZvcmNlIHRoZSBmdW5jdGlvbiB0byBvdXRwdXQgdGhlIHJlc3VsdCBpbiBxdWFydGVycy4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJuZXh0IHllYXJcIlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg3LCA2LCA0LCAxMCwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApLFxuICogICB7IHVuaXQ6ICdxdWFydGVyJyB9XG4gKiApXG4gKiAvLz0+ICdpbiA1IHF1YXJ0ZXJzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIGxvY2FsZSBvcHRpb24gdG8gZ2V0IHRoZSByZXN1bHQgaW4gU3BhbmlzaC4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJpbiAxIGhvdXJcIi5cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKSxcbiAqICAgeyBsb2NhbGU6ICdlcycgfVxuICogKVxuICogLy89PiAnZGVudHJvIGRlIDEgaG9yYSdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSBudW1lcmljIG9wdGlvbiB0byBmb3JjZSB0aGUgZnVuY3Rpb24gdG8gdXNlIG51bWVyaWMgdmFsdWVzLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcInRvbW9ycm93XCIuXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDUsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIHsgbnVtZXJpYzogJ2Fsd2F5cycgfVxuICogKVxuICogLy89PiAnaW4gMSBkYXknXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgc3R5bGUgb3B0aW9uIHRvIGZvcmNlIHRoZSBmdW5jdGlvbiB0byB1c2Ugc2hvcnQgdmFsdWVzLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcImluIDIgeWVhcnNcIi5cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4OCwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgeyBzdHlsZTogJ3Nob3J0JyB9XG4gKiApXG4gKiAvLz0+ICdpbiAyIHlyJ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRsRm9ybWF0RGlzdGFuY2UoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB2YWx1ZSA9IDA7XG4gIHZhciB1bml0O1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZSk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoYmFzZURhdGUpO1xuXG4gIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudW5pdCkpIHtcbiAgICAvLyBHZXQgdGhlIHVuaXQgYmFzZWQgb24gZGlmZkluU2Vjb25kcyBjYWxjdWxhdGlvbnMgaWYgbm8gdW5pdCBpcyBzcGVjaWZpZWRcbiAgICB2YXIgZGlmZkluU2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7IC8vIFRoZSBzbWFsbGVzdCB1bml0XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5NaW51dGUpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnc2Vjb25kJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luSG91cikge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5NaW51dGVzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICdtaW51dGUnO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5EYXkgJiYgTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKSA8IDEpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5XZWVrICYmICh2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSkgJiYgTWF0aC5hYnModmFsdWUpIDwgNykge1xuICAgICAgdW5pdCA9ICdkYXknO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5Nb250aCkge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICd3ZWVrJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luUXVhcnRlcikge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnbW9udGgnO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5ZZWFyKSB7XG4gICAgICBpZiAoZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA8IDQpIHtcbiAgICAgICAgLy8gVG8gZmlsdGVyIG91dCBjYXNlcyB0aGF0IGFyZSBsZXNzIHRoYW4gYSB5ZWFyIGJ1dCBtYXRjaCA0IHF1YXJ0ZXJzXG4gICAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgICAgdW5pdCA9ICdxdWFydGVyJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgICAgdW5pdCA9ICd5ZWFyJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICd5ZWFyJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gR2V0IHRoZSB2YWx1ZSBpZiB1bml0IGlzIHNwZWNpZmllZFxuICAgIHVuaXQgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudW5pdDtcblxuICAgIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluTWludXRlcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdob3VyJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdkYXknKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICd3ZWVrJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21vbnRoJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdxdWFydGVyJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3llYXInKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJ0ZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlLCB7XG4gICAgbG9jYWxlTWF0Y2hlcjogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZU1hdGNoZXIsXG4gICAgbnVtZXJpYzogKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5udW1lcmljKSB8fCAnYXV0bycsXG4gICAgc3R5bGU6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zdHlsZVxuICB9KTtcbiAgcmV0dXJuIHJ0Zi5mb3JtYXQodmFsdWUsIHVuaXQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Bhc3QoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoXG4gIHRpdGxlID0gXCJOZXcgUHJvamVjdFwiLFxuICBpZCA9IG5hbm9pZCgpLFxuICB0YXNrcyA9IFtdLFxuICBpc1BzZXVkbyA9IGZhbHNlXG4pIHtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBjb25zdCBfaWQgPSBpZDtcbiAgbGV0IF90YXNrcyA9IHRhc2tzO1xuICBsZXQgX2lzUHNldWRvID0gaXNQc2V1ZG87XG5cbiAgZnVuY3Rpb24gYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgX3Rhc2tzLnB1c2gobmV3VGFzayk7XG4gIH1cbiAgZnVuY3Rpb24gbmV3VGFzayh0aXRsZSkge1xuICAgIF90YXNrcy5wdXNoKFRhc2soX2lkLCB0aXRsZSkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZVRhc2soaWQpIHtcbiAgICBfdGFza3MgPSBfdGFza3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldCBpZCgpIHtcbiAgICAgIHJldHVybiBfaWQ7XG4gICAgfSxcbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gX3RpdGxlO1xuICAgIH0sXG4gICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICBfdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9LFxuICAgIGdldCB0YXNrcygpIHtcbiAgICAgIHJldHVybiBfdGFza3M7XG4gICAgfSxcbiAgICBzZXQgdGFza3MobmV3VGFza3MpIHtcbiAgICAgIF90YXNrcyA9IG5ld1Rhc2tzO1xuICAgIH0sXG4gICAgZ2V0IGlzUHNldWRvKCkge1xuICAgICAgcmV0dXJuIF9pc1BzZXVkbztcbiAgICB9LFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICBuZXdUYXNrLFxuICB9O1xufVxuXG4vKiBleHBvcnQgZnVuY3Rpb24gUHJvamVjdENvbXBvbmVudChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQudHlwZSA9IFwicHJvamVjdC1jYXJkXCI7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgIGlmICghdGFzay5pc0NvbXBsZXRlZCkge1xuICAgICAgY29uc3QgdGFza0xJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICB0YXNrQ2hlY2tib3guZGF0YXNldC5pZCA9IHRhc2suaWQ7XG4gICAgICB0YXNrQ2hlY2tib3guZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQudHlwZSA9IFwidGFzay1jb21wbGV0ZVwiO1xuICAgICAgdGFza0xJLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG4gICAgICB0YXNrTEkuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tMSSk7XG4gICAgfVxuICB9XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbC1wcm9qZWN0LWJ0blwiKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHByb2plY3RcIjtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImRlbC1wcm9qZWN0XCI7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICBjb25zdCBlbGVtZW50cyA9IHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQpKTtcbiAgcmV0dXJuIHByb2plY3RDYXJkO1xufVxuICovXG4iLCJleHBvcnQgZnVuY3Rpb24gUHJvamVjdENvbXBvbmVudChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQuaWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQudHlwZSA9IFwicHJvamVjdC1jYXJkXCI7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgIGlmICghdGFzay5pc0NvbXBsZXRlZCkge1xuICAgICAgY29uc3QgdGFza0xJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGFza0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICB0YXNrQ2hlY2tib3guZGF0YXNldC5pZCA9IHRhc2suaWQ7XG4gICAgICB0YXNrQ2hlY2tib3guZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQudHlwZSA9IFwidGFzay1jb21wbGV0ZVwiO1xuICAgICAgdGFza0xJLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG4gICAgICB0YXNrTEkuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tMSSk7XG4gICAgfVxuICB9XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbC1wcm9qZWN0LWJ0blwiKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHByb2plY3RcIjtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImRlbC1wcm9qZWN0XCI7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICBjb25zdCBlbGVtZW50cyA9IHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQpKTtcbiAgcmV0dXJuIHByb2plY3RDYXJkO1xufVxuIiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soXG4gIHByb2plY3RJZCxcbiAgdGl0bGUgPSBcIkVsIHRhc2NvXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgZHVlRGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJcIixcbiAgaXNDb21wbGV0ZWQgPSBmYWxzZVxuKSB7XG4gIGNvbnN0IF9pZCA9IG5hbm9pZCgpO1xuICBsZXQgX3Byb2plY3RJZCA9IHByb2plY3RJZDtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGxldCBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IF9pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIF9pZDtcbiAgICB9LFxuICAgIGdldCBwcm9qZWN0SWQoKSB7XG4gICAgICByZXR1cm4gX3Byb2plY3RJZDtcbiAgICB9LFxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiBfdGl0bGU7XG4gICAgfSxcbiAgICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcbiAgICAgIF90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH0sXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIF9kZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfSxcbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgIHJldHVybiBfZHVlRGF0ZTtcbiAgICB9LFxuICAgIHNldCBkdWVEYXRlKG5ld0R1ZURhdGUpIHtcbiAgICAgIF9kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICB9LFxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgIHJldHVybiBfcHJpb3JpdHk7XG4gICAgfSxcbiAgICBzZXQgcHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgIF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH0sXG4gICAgZ2V0IGlzQ29tcGxldGVkKCkge1xuICAgICAgcmV0dXJuIF9pc0NvbXBsZXRlZDtcbiAgICB9LFxuICAgIHNldCBpc0NvbXBsZXRlZChuZXdJc0NvbXBsZXRlZCkge1xuICAgICAgX2lzQ29tcGxldGVkID0gbmV3SXNDb21wbGV0ZWQ7XG4gICAgfSxcbiAgfTtcbn1cblxuLyogZXhwb3J0IGZ1bmN0aW9uIFRhc2tDb21wb25lbnQodGFzaykge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcblxuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJpc0NvbXBsZXRlZFwiKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tJbnB1dCh0YXNrLCBcInRpdGxlXCIpKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0lucHV0KHRhc2ssIFwiZGVzY3JpcHRpb25cIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJkdWVEYXRlXCIpKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0lucHV0KHRhc2ssIFwicHJpb3JpdHlcIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrRGVsZXRlQnV0dG9uKHRhc2spKTtcblxuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIFRhc2tJbnB1dCh0YXNrLCBmaWVsZFR5cGUpIHtcbiAgbGV0IGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICBzd2l0Y2ggKGZpZWxkVHlwZSkge1xuICAgIGNhc2UgXCJkdWVEYXRlXCI6XG4gICAgICBpbnB1dFR5cGUgPSBcImRhdGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpc0NvbXBsZXRlZFwiOlxuICAgICAgaW5wdXRUeXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInByaW9yaXR5XCI6XG4gICAgICBpbnB1dFR5cGUgPSBcInNlbGVjdFwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKGlucHV0VHlwZSA9PT0gXCJzZWxlY3RcIikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIiwgYHRhc2stJHtmaWVsZFR5cGV9YCk7XG4gICAgZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50eXBlID0gZmllbGRUeXBlO1xuICAgIGZvciAobGV0IG9wdGlvbiBvZiBbXCJub3JtYWxcIiwgXCJoaWdoXCIsIFwibG93XCJdKSB7XG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgfVxuICAgIGVsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV07XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlbGVtZW50LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dFwiLCBgdGFzay0ke2ZpZWxkVHlwZX1gKTtcbiAgICAvL2VsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV07XG4gICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdLnJlcGxhY2VBbGwoXCJcXG5cIiwgXCIgXCIpO1xuICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IFwiLi4uXCI7XG4gICAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgICAvLyBkbyBzdHVmZi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZWQ7XG4gICAgfVxuICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IGZpZWxkVHlwZTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAqL1xuXG4vKiBmdW5jdGlvbiBUYXNrRGVsZXRlQnV0dG9uKHRhc2spIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkRlbFwiO1xuICBidXR0b24uZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBidXR0b24uZGF0YXNldC50eXBlID0gXCJkZWxldGUtdGFza1wiO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRGVzY3JpcHRpb25Nb2RhbCh0YXNrKSB7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbW9kYWxDb250YWluZXIuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsLWNvbnRhaW5lclwiO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbFwiKTtcbiAgbW9kYWwuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBtb2RhbC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBtb2RhbC5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsXCI7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5pZCA9IFwiZGVzY3JpcHRpb24tdGV4dGFyZWFcIjtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLXRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHRleHRBcmVhLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHRleHRBcmVhLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbC1idG5cIik7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBzdWJtaXRCdG4uZGF0YXNldC50eXBlID0gXCJtb2RhbC1zYXZlXCI7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZSAoQ3RybCtFbnRlcilcIjtcblxuICBtb2RhbC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICByZXR1cm4gbW9kYWxDb250YWluZXI7XG59ICovXG4iLCJpbXBvcnQgeyBpbnRsRm9ybWF0RGlzdGFuY2UsIGlzVmFsaWQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFza0NvbXBvbmVudCh0YXNrKSB7XG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpO1xuXG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VDaGVja2JveCh0YXNrKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VUaXRsZSh0YXNrKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VOb3RlKHRhc2spKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoTWFrZURhdGUodGFzaykpO1xuXG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tEZWxldGVCdXR0b24odGFzaykpO1xuXG4gIC8qIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tJbnB1dCh0YXNrLCBcImlzQ29tcGxldGVkXCIpKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0lucHV0KHRhc2ssIFwidGl0bGVcIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJkZXNjcmlwdGlvblwiKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tJbnB1dCh0YXNrLCBcImR1ZURhdGVcIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJwcmlvcml0eVwiKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tEZWxldGVCdXR0b24odGFzaykpOyAqL1xuXG4gIHJldHVybiB0YXNrRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gTWFrZUNoZWNrYm94KHRhc2spIHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoYHRhc2staXNDb21wbGV0ZWRgKTtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZWQ7XG4gIGNoZWNrYm94LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIGNoZWNrYm94LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgY2hlY2tib3guZGF0YXNldC50eXBlID0gXCJjaGVja2JveFwiO1xuICByZXR1cm4gY2hlY2tib3g7XG59XG5mdW5jdGlvbiBNYWtlVGl0bGUodGFzaykge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKGB0YXNrLXRpdGxlYCk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgdGl0bGUuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgdGl0bGUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB0aXRsZS5kYXRhc2V0LnR5cGUgPSBcInRpdGxlXCI7XG4gIHRpdGxlLmRhdGFzZXQuZXhwYW5kZXIgPSB0cnVlO1xuICByZXR1cm4gdGl0bGU7XG59XG5mdW5jdGlvbiBNYWtlTm90ZSh0YXNrKSB7XG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbm90ZS5jbGFzc0xpc3QuYWRkKGB0YXNrLW5vdGVgKTtcbiAgbm90ZS50ZXh0Q29udGVudCA9IFwibm90ZVwiO1xuICBub3RlLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIG5vdGUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBub3RlLmRhdGFzZXQudHlwZSA9IFwibm90ZVwiO1xuICBub3RlLmRhdGFzZXQuZXhwYW5kZXIgPSB0cnVlO1xuICByZXR1cm4gbm90ZTtcbn1cbmZ1bmN0aW9uIE1ha2VEYXRlKHRhc2spIHtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoYHRhc2stZGF0ZWApO1xuICBkYXRlLnRleHRDb250ZW50ID0gXCJkYXRlXCI7XG4gIGRhdGUuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgZGF0ZS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGRhdGUuZGF0YXNldC50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGUuZGF0YXNldC5leHBhbmRlciA9IHRydWU7XG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiBUYXNrSW5wdXQodGFzaywgZmllbGRUeXBlKSB7XG4gIGxldCBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICBjYXNlIFwiZHVlRGF0ZVwiOlxuICAgICAgaW5wdXRUeXBlID0gXCJkYXRlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaXNDb21wbGV0ZWRcIjpcbiAgICAgIGlucHV0VHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgaW5wdXRUeXBlID0gXCJzZWxlY3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGlmIChpbnB1dFR5cGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIsIGB0YXNrLSR7ZmllbGRUeXBlfWApO1xuICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IGZpZWxkVHlwZTtcbiAgICBmb3IgKGxldCBvcHRpb24gb2YgW1wibm9ybWFsXCIsIFwiaGlnaFwiLCBcImxvd1wiXSkge1xuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb247XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgIH1cbiAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWxlbWVudC50eXBlID0gaW5wdXRUeXBlO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIiwgYHRhc2stJHtmaWVsZFR5cGV9YCk7XG4gICAgLy9lbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIGlmIChmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXS5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiIFwiKTtcbiAgICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBcIi4uLlwiO1xuICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgaWYgKHRhc2suZHVlRGF0ZSAmJiBpc1ZhbGlkKHRhc2suZHVlRGF0ZSkpIHtcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIGVsZW1lbnQudmFsdWVBc0RhdGUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gaW50bEZvcm1hdERpc3RhbmNlKHRhc2suZHVlRGF0ZSwgbmV3IERhdGUoKSwge1xuICAgICAgICAgIHVuaXQ6IFwiZGF5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmRhdGFzZXQuaW50ZXJ2YWwgPSBjYXBpdGFsaXplKGludGVydmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5pbnRlcnZhbCA9IFwiVW5zZXRcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBlbGVtZW50LmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGVkO1xuICAgIH1cbiAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnR5cGUgPSBmaWVsZFR5cGU7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2tEZWxldGVCdXR0b24odGFzaykge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGVcIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG4gIGJ1dHRvbi5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImRlbGV0ZS10YXNrXCI7XG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXNjcmlwdGlvbk1vZGFsKHRhc2spIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWwtY29udGFpbmVyXCIpO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIG1vZGFsQ29udGFpbmVyLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIG1vZGFsQ29udGFpbmVyLmRhdGFzZXQudHlwZSA9IFwibW9kYWwtY29udGFpbmVyXCI7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsXCIpO1xuICBtb2RhbC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIG1vZGFsLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIG1vZGFsLmRhdGFzZXQudHlwZSA9IFwibW9kYWxcIjtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLmlkID0gXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWwtdGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgdGV4dEFyZWEuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgdGV4dEFyZWEudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLWJ0blwiKTtcbiAgc3VibWl0QnRuLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgc3VibWl0QnRuLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsLXNhdmVcIjtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTYXZlIChDdHJsK0VudGVyKVwiO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIHJldHVybiBtb2RhbENvbnRhaW5lcjtcbn1cbiIsIi8vaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IFRhc2tDb21wb25lbnQsIERlc2NyaXB0aW9uTW9kYWwgfSBmcm9tIFwiLi9UYXNrQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vUHJvamVjdENvbXBvbmVudFwiO1xuaW1wb3J0IHsgaXNQYXN0LCBpc1RvZGF5LCBlbmRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBzdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBfcHJvamVjdHMgPSBbXTtcblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcyA9IFtdLCBpc1BzZXVkbyA9IGZhbHNlKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZS5hZGRQcm9qZWN0IGludm9rZWRcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QodGl0bGUsIHVuZGVmaW5lZCwgdGFza3MsIGlzUHNldWRvKTtcbiAgICBfcHJvamVjdHMudW5zaGlmdChuZXdQcm9qZWN0KTtcbiAgICBHVUkucmVmcmVzaCgpO1xuICAgIGlmICghbmV3UHJvamVjdC5pc1BzZXVkbykge1xuICAgICAgR1VJLmNyZWF0ZU5ld1Rhc2soKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpZCkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUucmVtb3ZlUHJvamVjdCBpbnZva2VkXCIpO1xuICAgIF9wcm9qZWN0cyA9IF9wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IGlkKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gX3Byb2plY3RzO1xuICB9XG4gIGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgICBsZXQgbG9hZGVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICAgIGlmIChsb2FkZWRQcm9qZWN0cyAmJiBfcHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgcHJvamVjdHMgZnJvbSBsb2NhbHN0b3JhZ2VcIik7XG4gICAgICBsb2FkZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9hZGVkUHJvamVjdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmcgd2FzIGxvYWRlZCBmcm9tIGxvY2Fsc3RvcmFnZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9hZGVkUHJvamVjdHMgPSBsb2FkZWRQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmlkLCBwcm9qZWN0LnRhc2tzKTtcbiAgICAgIG5ld1Byb2plY3QudGFza3MgPSBuZXdQcm9qZWN0LnRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gVGFzayhcbiAgICAgICAgICB0YXNrLnByb2plY3RJZCxcbiAgICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgbmV3IERhdGUodGFzay5kdWVEYXRlKSxcbiAgICAgICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgICAgIHRhc2suaXNDb21wbGV0ZWRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfSk7XG4gICAgX3Byb2plY3RzID0gbG9hZGVkUHJvamVjdHM7XG4gIH1cbiAgZnVuY3Rpb24gc2VsZWN0UHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAvL21vdmVzIHNlbGVjdGVkIHByb2plY3QgdG8gdGhlIHN0YXJ0IG9mIF9wcm9qZWN0cyBhcnJheVxuICAgIGNvbnNvbGUubG9nKFwic3RhdGUuc2VsZWN0UHJvamVjdCBpbnZva2VkXCIpO1xuICAgIGNvbnN0IGluZGV4ID0gX3Byb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICBfcHJvamVjdHMudW5zaGlmdChfcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVswXSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VGFza0J5SWQodGFza0lkKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZS5nZXRUYXNrQnlJZCBpbnZva2VkXCIpO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgX3Byb2plY3RzKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldFByb2plY3RCeUlkKHByb2plY3RJZCkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUuZ2V0UHJvamVjdEJ5SWQgaW52b2tlZFwiKTtcbiAgICByZXR1cm4gX3Byb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gIH1cbiAgZnVuY3Rpb24gc3luY1N0b3JhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRpbmcgcHJvamVjdHMgdG8gbG9jYWxTdG9yYWdlXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoX3Byb2plY3RzKSk7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJQc2V1ZG9Qcm9qZWN0cygpIHtcbiAgICBfcHJvamVjdHMgPSBfcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiAhcHJvamVjdC5pc1BzZXVkbyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBsb2FkUHJvamVjdHMsXG4gICAgc2VsZWN0UHJvamVjdCxcbiAgICBzeW5jU3RvcmFnZSxcbiAgICBnZXRUYXNrQnlJZCxcbiAgICBnZXRQcm9qZWN0QnlJZCxcbiAgICBjbGVhclBzZXVkb1Byb2plY3RzLFxuICB9O1xufSkoKTtcblxuc3RhdGUubG9hZFByb2plY3RzKCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IEdVSSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XG4gIGNvbnN0IG92ZXJkdWVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVyZHVlXCIpO1xuICBjb25zdCB0b2RheVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xuICBjb25zdCBleHBhbmRlZFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZXhwYW5kZWRcIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1leHBhbmRlZC10aXRsZVwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNvbXBsZXRlZC10YXNrLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGFkZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNvbnRhaW5lclwiKTtcbiAgbGV0IHRvcFByb2plY3QgPSB1bmRlZmluZWQ7XG5cbiAgZXhwYW5kZWRQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0Q2xpY2tzKTtcbiAgZnVuY3Rpb24gaGFuZGxlUHJvamVjdENsaWNrcyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcImFkZC10YXNrXCIpIHtcbiAgICAgIGNyZWF0ZU5ld1Rhc2soKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwiZGVsZXRlLXRhc2tcIikge1xuICAgICAgY29uc29sZS5sb2coXCJHVUkgZGVsZXRpbmcgdGFza1wiKTtcbiAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGNvbmZpcm0oXCJQbGVhc2UgY29uZmlybSBkZWxldGluZyB0YXNrXCIpKSB7XG4gICAgICAgIHRvcFByb2plY3QucmVtb3ZlVGFzayhldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQpO1xuICAgICAgICByZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgIG9wZW5Nb2RhbChldmVudCk7XG4gICAgfVxuICB9XG4gIC8vVE9ETyBtb3ZlIGZvbGxvd2luZyBmdW5jdGlvbiB0byBzdGF0ZT9cbiAgZnVuY3Rpb24gY3JlYXRlTmV3VGFzaygpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSS5jcmVhdGVOZXdUYXNrIGludm9rZWRcIik7XG4gICAgaWYgKCF0b3BQcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vIHByb2plY3RzIHlldFwiKTtcbiAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICB9XG4gICAgdG9wUHJvamVjdC5uZXdUYXNrKCk7XG4gICAgcmVmcmVzaCgpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lciAudGFzay1pdGVtOmxhc3QtY2hpbGQgaW5wdXQudGFzay10aXRsZVwiKVxuICAgICAgLnNlbGVjdCgpO1xuICB9XG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbChldmVudCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICBjb25zdCB0YXNrID0gc3RhdGUuZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKERlc2NyaXB0aW9uTW9kYWwodGFzaykpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tbW9kYWwtdGV4dGFyZWFcIikuZm9jdXMoKTtcbiAgfVxuXG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU5ld1Byb2plY3QpO1xuICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLmNyZWF0ZU5ld1Byb2plY3QgaW52b2tlZFwiKTtcbiAgICBzdGF0ZS5jcmVhdGVQcm9qZWN0KFwiTmV3IHByb2plY3RcIik7XG4gIH1cbiAgb3ZlcmR1ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG92ZXJkdWVQc2V1ZG9Qcm9qZWN0KTtcbiAgZnVuY3Rpb24gb3ZlcmR1ZVBzZXVkb1Byb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkub3ZlcmR1ZVBzZXVkb1Byb2plY3QgaW52b2tlZFwiKTtcbiAgICBzdGF0ZS5jbGVhclBzZXVkb1Byb2plY3RzKCk7XG4gICAgY29uc3Qgb3ZlcmR1ZVRhc2tzID0gW107XG4gICAgc3RhdGUuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKGlzUGFzdChlbmRPZkRheSh0YXNrLmR1ZURhdGUpKSkge1xuICAgICAgICAgIG92ZXJkdWVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzdGF0ZS5jcmVhdGVQcm9qZWN0KFwiT3ZlcmR1ZSB0YXNrc1wiLCBvdmVyZHVlVGFza3MsIHRydWUpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICB9XG4gIHRvZGF5UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kYXlQc2V1ZG9Qcm9qZWN0KTtcbiAgZnVuY3Rpb24gdG9kYXlQc2V1ZG9Qcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLnRvZGF5UHNldWRvUHJvamVjdCBpbnZva2VkXCIpO1xuICAgIHN0YXRlLmNsZWFyUHNldWRvUHJvamVjdHMoKTtcbiAgICBjb25zdCB0b2RheVRhc2tzID0gW107XG4gICAgc3RhdGUuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKGlzVG9kYXkodGFzay5kdWVEYXRlKSkge1xuICAgICAgICAgIHRvZGF5VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc3RhdGUuY3JlYXRlUHJvamVjdChcIlRhc2tzIGZvciB0b2RheVwiLCB0b2RheVRhc2tzLCB0cnVlKTtcbiAgfVxuXG4gIHByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTaWRlYmFyQ2xpY2tzKTtcbiAgZnVuY3Rpb24gaGFuZGxlU2lkZWJhckNsaWNrcyhldmVudCkge1xuICAgIGNvbnN0IGNsaWNrU291cmNlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHN0YXRlLmdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG4gICAgaWYgKGNsaWNrU291cmNlID09PSBcImRlbC1wcm9qZWN0XCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQuY3RybEtleSB8fFxuICAgICAgICBjb25maXJtKGBQbGVhc2UgY29uZmlybSByZW1vdmluZyBcIiR7dGFyZ2V0UHJvamVjdC50aXRsZX1cIiBwcm9qZWN0YClcbiAgICAgICkge1xuICAgICAgICBzdGF0ZS5yZW1vdmVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNsaWNrU291cmNlID09PSBcInRhc2stY29tcGxldGVcIikge1xuICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgICAgY29uc3QgdGFyZ2V0VGFzayA9IHN0YXRlLmdldFRhc2tCeUlkKHRhc2tJZCk7XG4gICAgICBjb25zb2xlLmxvZyh0YXJnZXRUYXNrKTtcbiAgICAgIHRhcmdldFRhc2suaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgcmVmcmVzaCgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkICE9PSBcInByb2plY3QtY29udGFpbmVyXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiR1VJLnNlbGVjdFByb2plY3QgaW52b2tlZFwiKTtcbiAgICAgIHN0YXRlLnNlbGVjdFByb2plY3QocHJvamVjdElkKTtcbiAgICAgIHN0YXRlLmNsZWFyUHNldWRvUHJvamVjdHMoKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBleHBhbmRlZFByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVQcm9qZWN0SW5wdXRDaGFuZ2UpO1xuICBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0SW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcInByb2plY3QtZXhwYW5kZWQtdGl0bGVcIikge1xuICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2luZyBwcm9qZWN0IHRpdGxlXCIpO1xuICAgICAgaWYgKHRvcFByb2plY3QpIHtcbiAgICAgICAgdG9wUHJvamVjdC50aXRsZSA9IGNhcGl0YWxpemUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwibm8gcHJvamVjdCB0byBjaGFuZ2UgdGl0bGUgb2ZcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZVRhc2tJbnB1dENoYW5nZShldmVudCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVRhc2tJbnB1dENoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlVGFza0lucHV0Q2hhbmdlIGludm9rZWRcIik7XG4gICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGU7XG4gICAgY29uc3QgdGFyZ2V0VGFzayA9IHRvcFByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAoZmllbGRUeXBlID09PSBcImlzQ29tcGxldGVkXCIpIHtcbiAgICAgIHRhcmdldFRhc2suaXNDb21wbGV0ZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgIHRhcmdldFRhc2tbZmllbGRUeXBlXSA9IGNhcGl0YWxpemUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICB0YXJnZXRUYXNrW2ZpZWxkVHlwZV0gPSBldmVudC50YXJnZXQudmFsdWVBc0RhdGU7XG4gICAgICAgIHJlZnJlc2goKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFRhc2tbZmllbGRUeXBlXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJlZnJlc2goXCJleGNlcHRUYXNrc1wiKTtcbiAgICB9XG4gIH1cblxuICBleHBhbmRlZFByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcbiAgZnVuY3Rpb24gaGFuZGxlS2V5VXAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgb3Blbk1vZGFsKGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy9tYWtlIGlucHV0IGxvc2UgZm9jdXMgYW5kIHNvIHRyaWdnZXIgJ2NoYW5nZScgZXZlbnRzXG4gICAgICBldmVudC50YXJnZXQuYmx1cigpO1xuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgdG9wUHJvamVjdCkge1xuICAgICAgICBjcmVhdGVOZXdUYXNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZURvY3VtZW50S2V5VXApO1xuICBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudEtleVVwKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMTMgJiZcbiAgICAgIGV2ZW50LmN0cmxLZXkgJiZcbiAgICAgIGV2ZW50LnRhcmdldC5pZCA9PT0gXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiXG4gICAgKSB7XG4gICAgICBzYXZlRGVzY3JpcHRpb24oZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcIm1vZGFsLXNhdmVcIiAmJlxuICAgICAgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKVxuICAgICkge1xuICAgICAgc2F2ZURlc2NyaXB0aW9uKGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMjcgJiZcbiAgICAgIChldmVudC50YXJnZXQuaWQgPT09IFwiZGVzY3JpcHRpb24tdGV4dGFyZWFcIiB8fFxuICAgICAgICBldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcIm1vZGFsLXNhdmVcIilcbiAgICApIHtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZURvY3VtZW50Q2xpY2spO1xuICBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwibW9kYWwtc2F2ZVwiKSB7XG4gICAgICBzYXZlRGVzY3JpcHRpb24oZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJtb2RhbC1jb250YWluZXJcIikge1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzYXZlRGVzY3JpcHRpb24oZXZlbnQpIHtcbiAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG4gICAgY29uc3QgdGV4dEFyZWFWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5kZXNjcmlwdGlvbi1tb2RhbC10ZXh0YXJlYVwiXG4gICAgKS52YWx1ZTtcbiAgICBzdGF0ZS5nZXRUYXNrQnlJZCh0YXNrSWQpLmRlc2NyaXB0aW9uID0gdGV4dEFyZWFWYWx1ZTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gICAgcmVmcmVzaCgpO1xuICB9XG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24tbW9kYWwtY29udGFpbmVyXCIpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZnJlc2goZXhjZXB0aW9uKSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkucmVmcmVzaCBpbnZva2VkXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XG4gICAgdG9wUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1swXTtcbiAgICBpZiAoZXhjZXB0aW9uICE9PSBcImV4Y2VwdFRhc2tzXCIpIHtcbiAgICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbXBsZXRlZFRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGlmICghdG9wUHJvamVjdCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJHVUkucmVmcmVzaDogbm8gcHJvamVjdHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSBcIkxldCdzIHN0YXJ0IGEgbmV3IHByb2plY3QhXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSB0b3BQcm9qZWN0LnRpdGxlO1xuICAgICAgICBpZiAodG9wUHJvamVjdC5pc1BzZXVkbykge1xuICAgICAgICAgIHByb2plY3RUaXRsZS5yZWFkT25seSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvamVjdFRpdGxlLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0b3BQcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBUYXNrQ29tcG9uZW50KHRhc2spO1xuICAgICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgICAgICAgICAgY29tcGxldGVkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBhZGRCdXR0b25Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2stYnRuXCIpO1xuICAgICAgYWRkVGFza0J1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImFkZC10YXNrXCI7XG4gICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCB0YXNrXCI7XG4gICAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgfVxuXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGN1cnJlbnRQcm9qZWN0cykge1xuICAgICAgaWYgKCFwcm9qZWN0LmlzUHNldWRvKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gUHJvamVjdENvbXBvbmVudChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgIC8vaWYgKHRydWUpIHtcbiAgICAgIHN0YXRlLnN5bmNTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0RGl2XCIpLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICBzdGF0ZS5nZXRQcm9qZWN0cygpWzBdLnRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4geyBkdWVEYXRlOiB0YXNrLmR1ZURhdGUsIHR5cGU6IHR5cGVvZiB0YXNrLmR1ZURhdGUgfTtcbiAgICAgIH0pXG4gICAgKVxuICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgLmpvaW4oXCJcXHJcXG5cIik7ICovXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZnJlc2gsXG4gICAgY3JlYXRlTmV3VGFzayxcbiAgICAvL1xuICB9O1xufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbkdVSS5yZWZyZXNoKCk7XG4iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=