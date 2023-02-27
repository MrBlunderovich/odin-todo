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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons+Outlined);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  color: #274d7d;\n}\n:root {\n  --yellow: #f2c200;\n  --dark-blue: #274d7d;\n  font-family: \"Roboto\", sans-serif;\n}\nbody {\n  position: relative;\n}\n.header {\n  width: 100%;\n  height: 5rem;\n  background-color: var(--yellow);\n  color: var(--dark-blue);\n  border-bottom: 1px solid var(--dark-blue);\n  font-size: 3rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  padding: 0 3rem;\n  position: fixed;\n  z-index: 1;\n}\n.avatar {\n  border-radius: 50%;\n  height: 4rem;\n  width: 4rem;\n  background-color: var(--dark-blue);\n  margin-left: auto;\n}\n.page-container {\n  background-color: var(--yellow);\n  display: grid;\n  grid-template-columns: minmax(220px, 300px) 1fr;\n  grid-template-rows: 1fr;\n  gap: 1rem;\n  min-height: 100vh;\n  padding-top: 6rem;\n  overflow-x: hidden;\n}\n.sidebar {\n  /* width: 220px; */\n  padding: 1rem;\n  grid-column: 1;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.project-container {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.card,\n.description-modal {\n  background-color: white;\n  border: 1px solid var(--dark-blue);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.card > ul {\n  margin: 0 1rem;\n  list-style-type: none;\n}\n.card li:not(:last-of-type) {\n  margin-bottom: 0.3rem;\n}\n.card li {\n  display: flex;\n  align-items: center;\n}\n.card > h3 {\n  margin-bottom: 1rem;\n  padding: 0.7rem 1rem 0.5rem 1rem;\n  border-bottom: 1px solid var(--dark-blue);\n}\n.card .task-isCompleted {\n  margin-right: 0.5rem;\n}\n.del-project-btn,\n.description-modal-btn {\n  background-color: transparent;\n  border: none;\n  border-top: 1px solid var(--dark-blue);\n  margin-top: 1rem;\n  padding: 0.3rem 0 0.4rem 0;\n  cursor: pointer;\n}\n.new-project,\n.pseudo-project {\n  background-color: white;\n  font-weight: 600;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.new-project:active {\n  background-color: transparent;\n}\n.pseudo-project {\n  min-height: 1.5rem;\n  flex-direction: row;\n}\n.pseudo-project::before {\n  content: \" \";\n  border-radius: 50%;\n  height: 0.8rem;\n  width: 0.8rem;\n  background-color: #fe6955;\n  margin-right: 1ch;\n}\n.today::before {\n  background-color: #78dfff;\n}\n.main {\n  grid-column: 2;\n  padding: 1rem 3rem 1rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.project-expanded {\n  background-color: white;\n  flex: 0 1 1000px;\n  border: 1px solid var(--dark-blue);\n  border-radius: 10px;\n  min-height: 10rem;\n  padding: 0 0 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.project-expanded > ul {\n  list-style-type: none;\n}\n.task-item {\n  padding: 0 1rem;\n  margin-bottom: 0.3rem;\n  display: grid;\n  grid-template-columns: min-content 1fr auto auto auto min-content;\n  column-gap: 0.5rem;\n  align-items: center;\n}\n.task-item:has(.task-input-container) {\n  background-color: #ffefae;\n}\n.task-isCompleted {\n  grid-column: 1;\n}\n.task-title {\n  grid-column: 2;\n  text-overflow: ellipsis;\n}\n.task-priority {\n  grid-column: 3;\n}\n.task-note {\n  grid-column: 4;\n}\n.task-date {\n  grid-column: 5;\n  width: 4.7rem;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.task-delete {\n  grid-column: 6;\n  cursor: pointer;\n  font-size: 1.8rem;\n}\n.task-expanded {\n  grid-row: 2;\n  grid-column: 1/-1;\n  position: relative;\n}\n.task-expanded:has(textarea)::after {\n  position: absolute;\n  right: 1rem;\n  bottom: 1.5rem;\n  content: \"Ctrl+Enter saves data.\";\n  font-size: 80%;\n}\n.material-icons-outlined:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n}\n.material-icons-outlined:active {\n  transform: none;\n}\n.overdue-task {\n  background-color: #ffbbb3;\n}\n.today-task {\n  background-color: #ccffb3;\n}\n.task-input-container {\n  display: flex;\n  gap: 1rem;\n  margin: 0.5rem 0;\n}\n.task-input-container > *,\n.task-input-container > *:focus {\n  background-color: #ffefae;\n  border: 1px solid var(--dark-blue);\n  border-radius: 3px;\n  padding: 0.1rem 0.3rem;\n  outline: none;\n}\n.task-expanded *:focus {\n  border: 2px solid var(--dark-blue);\n}\n.title-input {\n  flex: 1 0 auto;\n}\n\n.project-expanded-title,\n.project-expanded-title:focus {\n  background-color: transparent;\n  font-size: 2.5rem;\n  font-weight: 600;\n  padding: 1rem 2rem 0.5rem 2rem;\n  border: none;\n  border-bottom: 1px solid var(--dark-blue);\n  border-radius: 10px 10px 0 0;\n  outline: none;\n  margin-bottom: 2rem;\n}\n/*\n.task-input[type=\"text\"] {\n  text-overflow: ellipsis;\n}\n.task-input.task-title:focus {\n  position: absolute;\n  width: 85%;\n  background-color: #fff;\n  box-shadow: 0 0 10px 0 lightblue;\n  padding: 0.5rem;\n  z-index: 2;\n}\ninput[type=\"checkbox\"] {\n  accent-color: var(--dark-blue);\n}\nselect.task-input:has(option[value=\"high\"]:checked) {\n  background-color: #ffb3a9;\n}\nselect.task-input:has(option[value=\"normal\"]:checked) {\n  background-color: #ffeaa3;\n}\nselect.task-input:has(option[value=\"low\"]:checked) {\n  background-color: #b9efff;\n} */\n.new-task-btn {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  border: none;\n  border-top: 1px solid var(--dark-blue);\n  border-bottom: 1px solid var(--dark-blue);\n  border-radius: none;\n  background-color: transparent;\n  color: var(--dark-purple);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.1s;\n  margin: 1rem 0;\n}\n.new-task-btn:active {\n  background-color: var(--yellow);\n}\n.completed-task-container > .task-item {\n  opacity: 0.6;\n}\n/* .description-modal-container {\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: #ffffff55;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n} */\n.description-textarea {\n  width: 100%;\n  height: fit-content;\n  min-height: 10rem;\n  outline: none;\n  resize: none;\n  border: 1px solid var(--dark-blue);\n  border-radius: 5px;\n  background-color: transparent;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;EACf,SAAS;EACT,UAAU;EACV,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,iCAAiC;AACnC;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,uBAAuB;EACvB,yCAAyC;EACzC,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,iBAAiB;AACnB;AACA;EACE,+BAA+B;EAC/B,aAAa;EACb,+CAA+C;EAC/C,uBAAuB;EACvB,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,aAAa;EACb,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;AACxB;AACA;;EAEE,uBAAuB;EACvB,kCAAkC;EAClC,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,yCAAyC;AAC3C;AACA;EACE,oBAAoB;AACtB;AACA;;EAEE,6BAA6B;EAC7B,YAAY;EACZ,sCAAsC;EACtC,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;AACjB;AACA;;EAEE,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iCAAiC;AACnC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,iBAAiB;AACnB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,kCAAkC;EAClC,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,aAAa;EACb,iEAAiE;EACjE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,uBAAuB;AACzB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;EACd,iCAAiC;EACjC,cAAc;AAChB;AACA;EACE,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;AAClB;AACA;;EAEE,yBAAyB;EACzB,kCAAkC;EAClC,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,kCAAkC;AACpC;AACA;EACE,cAAc;AAChB;;AAEA;;EAEE,6BAA6B;EAC7B,iBAAiB;EACjB,gBAAgB;EAChB,8BAA8B;EAC9B,YAAY;EACZ,yCAAyC;EACzC,4BAA4B;EAC5B,aAAa;EACb,mBAAmB;AACrB;AACA;;;;;;;;;;;;;;;;;;;;;;;GAuBG;AACH;EACE,WAAW;EACX,oBAAoB;EACpB,YAAY;EACZ,sCAAsC;EACtC,yCAAyC;EACzC,mBAAmB;EACnB,6BAA6B;EAC7B,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,iCAAiC;EACjC,cAAc;AAChB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,YAAY;AACd;AACA;;;;;;;;;;GAUG;AACH;EACE,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,YAAY;EACZ,kCAAkC;EAClC,kBAAkB;EAClB,6BAA6B;EAC7B,aAAa;EACb,qBAAqB;AACvB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons+Outlined\");\n* {\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  color: #274d7d;\n}\n:root {\n  --yellow: #f2c200;\n  --dark-blue: #274d7d;\n  font-family: \"Roboto\", sans-serif;\n}\nbody {\n  position: relative;\n}\n.header {\n  width: 100%;\n  height: 5rem;\n  background-color: var(--yellow);\n  color: var(--dark-blue);\n  border-bottom: 1px solid var(--dark-blue);\n  font-size: 3rem;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  padding: 0 3rem;\n  position: fixed;\n  z-index: 1;\n}\n.avatar {\n  border-radius: 50%;\n  height: 4rem;\n  width: 4rem;\n  background-color: var(--dark-blue);\n  margin-left: auto;\n}\n.page-container {\n  background-color: var(--yellow);\n  display: grid;\n  grid-template-columns: minmax(220px, 300px) 1fr;\n  grid-template-rows: 1fr;\n  gap: 1rem;\n  min-height: 100vh;\n  padding-top: 6rem;\n  overflow-x: hidden;\n}\n.sidebar {\n  /* width: 220px; */\n  padding: 1rem;\n  grid-column: 1;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.project-container {\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n}\n.card,\n.description-modal {\n  background-color: white;\n  border: 1px solid var(--dark-blue);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.card > ul {\n  margin: 0 1rem;\n  list-style-type: none;\n}\n.card li:not(:last-of-type) {\n  margin-bottom: 0.3rem;\n}\n.card li {\n  display: flex;\n  align-items: center;\n}\n.card > h3 {\n  margin-bottom: 1rem;\n  padding: 0.7rem 1rem 0.5rem 1rem;\n  border-bottom: 1px solid var(--dark-blue);\n}\n.card .task-isCompleted {\n  margin-right: 0.5rem;\n}\n.del-project-btn,\n.description-modal-btn {\n  background-color: transparent;\n  border: none;\n  border-top: 1px solid var(--dark-blue);\n  margin-top: 1rem;\n  padding: 0.3rem 0 0.4rem 0;\n  cursor: pointer;\n}\n.new-project,\n.pseudo-project {\n  background-color: white;\n  font-weight: 600;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.new-project:active {\n  background-color: transparent;\n}\n.pseudo-project {\n  min-height: 1.5rem;\n  flex-direction: row;\n}\n.pseudo-project::before {\n  content: \" \";\n  border-radius: 50%;\n  height: 0.8rem;\n  width: 0.8rem;\n  background-color: #fe6955;\n  margin-right: 1ch;\n}\n.today::before {\n  background-color: #78dfff;\n}\n.main {\n  grid-column: 2;\n  padding: 1rem 3rem 1rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n.project-expanded {\n  background-color: white;\n  flex: 0 1 1000px;\n  border: 1px solid var(--dark-blue);\n  border-radius: 10px;\n  min-height: 10rem;\n  padding: 0 0 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.project-expanded > ul {\n  list-style-type: none;\n}\n.task-item {\n  padding: 0 1rem;\n  margin-bottom: 0.3rem;\n  display: grid;\n  grid-template-columns: min-content 1fr auto auto auto min-content;\n  column-gap: 0.5rem;\n  align-items: center;\n}\n.task-item:has(.task-input-container) {\n  background-color: #ffefae;\n}\n.task-isCompleted {\n  grid-column: 1;\n}\n.task-title {\n  grid-column: 2;\n  text-overflow: ellipsis;\n}\n.task-priority {\n  grid-column: 3;\n}\n.task-note {\n  grid-column: 4;\n}\n.task-date {\n  grid-column: 5;\n  width: 4.7rem;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.task-delete {\n  grid-column: 6;\n  cursor: pointer;\n  font-size: 1.8rem;\n}\n.task-expanded {\n  grid-row: 2;\n  grid-column: 1/-1;\n  position: relative;\n}\n.task-expanded:has(textarea)::after {\n  position: absolute;\n  right: 1rem;\n  bottom: 1.5rem;\n  content: \"Ctrl+Enter saves data.\";\n  font-size: 80%;\n}\n.material-icons-outlined:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n}\n.material-icons-outlined:active {\n  transform: none;\n}\n.overdue-task {\n  background-color: #ffbbb3;\n}\n.today-task {\n  background-color: #ccffb3;\n}\n.task-input-container {\n  display: flex;\n  gap: 1rem;\n  margin: 0.5rem 0;\n}\n.task-input-container > *,\n.task-input-container > *:focus {\n  background-color: #ffefae;\n  border: 1px solid var(--dark-blue);\n  border-radius: 3px;\n  padding: 0.1rem 0.3rem;\n  outline: none;\n}\n.task-expanded *:focus {\n  border: 2px solid var(--dark-blue);\n}\n.title-input {\n  flex: 1 0 auto;\n}\n\n.project-expanded-title,\n.project-expanded-title:focus {\n  background-color: transparent;\n  font-size: 2.5rem;\n  font-weight: 600;\n  padding: 1rem 2rem 0.5rem 2rem;\n  border: none;\n  border-bottom: 1px solid var(--dark-blue);\n  border-radius: 10px 10px 0 0;\n  outline: none;\n  margin-bottom: 2rem;\n}\n/*\n.task-input[type=\"text\"] {\n  text-overflow: ellipsis;\n}\n.task-input.task-title:focus {\n  position: absolute;\n  width: 85%;\n  background-color: #fff;\n  box-shadow: 0 0 10px 0 lightblue;\n  padding: 0.5rem;\n  z-index: 2;\n}\ninput[type=\"checkbox\"] {\n  accent-color: var(--dark-blue);\n}\nselect.task-input:has(option[value=\"high\"]:checked) {\n  background-color: #ffb3a9;\n}\nselect.task-input:has(option[value=\"normal\"]:checked) {\n  background-color: #ffeaa3;\n}\nselect.task-input:has(option[value=\"low\"]:checked) {\n  background-color: #b9efff;\n} */\n.new-task-btn {\n  width: 100%;\n  padding: 0.5rem 2rem;\n  border: none;\n  border-top: 1px solid var(--dark-blue);\n  border-bottom: 1px solid var(--dark-blue);\n  border-radius: none;\n  background-color: transparent;\n  color: var(--dark-purple);\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.1s;\n  margin: 1rem 0;\n}\n.new-task-btn:active {\n  background-color: var(--yellow);\n}\n.completed-task-container > .task-item {\n  opacity: 0.6;\n}\n/* .description-modal-container {\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: #ffffff55;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n} */\n.description-textarea {\n  width: 100%;\n  height: fit-content;\n  min-height: 10rem;\n  outline: none;\n  resize: none;\n  border: 1px solid var(--dark-blue);\n  border-radius: 5px;\n  background-color: transparent;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n}\n"],"sourceRoot":""}]);
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
    //_tasks.push(Task(_id, title));
    const task = (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(_id, title);
    _tasks.push(task);
    return task;
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
      const taskCheckbox = document.createElement("span");
      taskCheckbox.classList.add(`task-isCompleted`, "material-icons-outlined");
      taskCheckbox.textContent = "check_box_outline_blank";
      taskCheckbox.dataset.taskId = task.id;
      taskCheckbox.dataset.projectId = project.id;
      taskCheckbox.dataset.type = "complete-task";
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
/* harmony export */   "TaskComponent": () => (/* binding */ TaskComponent),
/* harmony export */   "TaskExpanded": () => (/* binding */ TaskExpanded)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/intlFormatDistance/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



function TaskComponent(task) {
  const taskElement = document.createElement("li");
  taskElement.classList.add("task-item");
  taskElement.dataset.expander = true;
  taskElement.dataset.projectId = task.projectId;
  taskElement.dataset.taskId = task.id;

  taskElement.appendChild(MakeCheckbox(task));
  taskElement.appendChild(MakeTitle(task));
  taskElement.appendChild(MakePriority(task));
  taskElement.appendChild(MakeNote(task));
  taskElement.appendChild(MakeDate(task));
  taskElement.appendChild(MakeDelete(task));
  taskElement.appendChild(MakeContainer(task));

  return taskElement;
}

function MakeCheckbox(task) {
  const checkbox = document.createElement("span");
  checkbox.classList.add(`task-isCompleted`, "material-icons-outlined");
  checkbox.textContent = task.isCompleted
    ? "check_box"
    : "check_box_outline_blank";
  checkbox.checked = task.isCompleted;
  checkbox.dataset.projectId = task.projectId;
  checkbox.dataset.taskId = task.id;
  checkbox.dataset.type = "complete-task";
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

function MakePriority(task) {
  const priority = document.createElement("span");
  priority.classList.add(`task-priority`, "material-icons-outlined");
  priority.textContent = task.priority === "high" ? "priority_high" : "";
  priority.dataset.projectId = task.projectId;
  priority.dataset.taskId = task.id;
  priority.dataset.type = "priority";
  priority.dataset.expander = true;
  return priority;
}

function MakeNote(task) {
  const note = document.createElement("span");
  note.classList.add(`task-note`, "material-icons-outlined");
  note.textContent = task.description ? "description" : "note_add"; //'description' for filled note
  note.dataset.projectId = task.projectId;
  note.dataset.taskId = task.id;
  note.dataset.type = "note";
  note.dataset.expander = true;
  return note;
}
//--------------------------------------------DATE----DATE----DATE----DATE
function MakeDate(task) {
  const date = document.createElement("span");
  date.classList.add(`task-date`);
  date.dataset.projectId = task.projectId;
  date.dataset.taskId = task.id;
  date.dataset.type = "date";
  date.dataset.expander = true;
  if (task.dueDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(task.dueDate)) {
    const interval = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(task.dueDate, new Date(), {
      unit: "day",
    });
    date.textContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.capitalize)(interval);
    if (!task.isCompleted && (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(task.dueDate))) {
      date.classList.add("overdue-task");
    } else if (interval === "today") {
      date.classList.add("today-task");
    }
  } else {
    date.textContent = "No date";
  }
  return date;
}

function MakeDelete(task) {
  const button = document.createElement("span");
  button.classList.add("task-delete", "material-icons-outlined");
  button.textContent = "delete_forever";
  button.dataset.projectId = task.projectId;
  button.dataset.taskId = task.id;
  button.dataset.type = "delete-task";
  return button;
}

function MakeContainer(task) {
  const container = document.createElement("div");
  container.classList.add("task-expanded");
  container.dataset.projectId = task.projectId;
  container.dataset.taskId = task.id;
  container.dataset.type = "expanded";
  return container;
}

//-------------------------------------

function TaskExpanded(task) {
  const fragment = document.createDocumentFragment();

  const inputBar = document.createElement("div");
  inputBar.classList.add("task-input-container");
  inputBar.dataset.projectId = task.projectId;
  inputBar.dataset.taskId = task.id;
  inputBar.appendChild(TitleInput(task));
  inputBar.appendChild(PriorityInput(task));
  inputBar.appendChild(DateInput(task));

  fragment.appendChild(inputBar);
  fragment.appendChild(TextArea(task));

  fragment.querySelectorAll("input,select,textarea").forEach((element) => {
    element.dataset.projectId = task.projectId;
    element.dataset.taskId = task.id;
    element.dataset.isTaskInput = true;
  });

  return fragment;
}

function TitleInput(task) {
  const element = document.createElement("input");
  element.type = "text";
  element.classList.add(`title-input`);
  element.value = task.title;
  element.dataset.type = "title";
  return element;
}

function PriorityInput(task) {
  const element = document.createElement("select");
  element.classList.add(`priority-input`);
  element.dataset.projectId = task.projectId;
  element.dataset.taskId = task.id;
  for (let option of ["normal", "high"]) {
    const optionElement = document.createElement("option");
    optionElement.innerText = option;
    optionElement.value = option;
    if (option === "normal") {
      optionElement.selected = true;
    }
    element.appendChild(optionElement);
  }
  element.value = task.priority;
  element.dataset.type = "priority";
  return element;
}

function DateInput(task) {
  const element = document.createElement("input");
  element.type = "date";
  element.classList.add(`date-input`);
  if (task.dueDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(task.dueDate)) {
    element.valueAsDate = task.dueDate;
  }
  element.dataset.type = "dueDate";
  return element;
}

function TextArea(task) {
  const textArea = document.createElement("textarea");
  textArea.id = "description-textarea";
  textArea.classList.add("description-textarea");
  textArea.value = task.description;
  textArea.dataset.type = "description";
  return textArea;
}

//////////////////////////////////////////////////////////////////////////
/* function TaskInput(task, fieldType) {
  let inputType = "text";
  switch (fieldType) {
    case "dueDate":
      inputType = "date";
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
    element.classList.add(`${fieldType}-input`);
    element.dataset.projectId = task.projectId;
    element.dataset.taskId = task.id;
    element.dataset.type = fieldType;
    for (let option of ["normal", "high"]) {
      const optionElement = document.createElement("option");
      optionElement.innerText = option;
      optionElement.value = option;
      if (option === "normal") {
        optionElement.selected = true;
      }
      element.appendChild(optionElement);
    }
    element.value = task[fieldType];
    return element;
  } else {
    const element = document.createElement("input");
    element.type = inputType;
    element.classList.add(`${fieldType}-input`);
    //element.value = task[fieldType];
    if (fieldType === "description") {
      element.value = task[fieldType].replaceAll("\n", " ");
      element.placeholder = "...";
    } else if (fieldType === "dueDate") {
      if (task.dueDate && isValid(task.dueDate)) {
        element.valueAsDate = task.dueDate;
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
} */

/* export function DescriptionModal(task) {
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
 */


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
        const newDueDate = task.dueDate ? new Date(task.dueDate) : "";
        return (0,_Task__WEBPACK_IMPORTED_MODULE_1__["default"])(
          task.projectId,
          task.title,
          task.description,
          newDueDate,
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
  const projectTitle = document.querySelector(".project-expanded-title");
  const taskContainer = document.querySelector(".task-container");
  const completedTaskContainer = document.querySelector(
    ".completed-task-container"
  );
  const addButtonContainer = document.querySelector(".add-container");
  let topProject = undefined;

  //////////////////////////////////////////////+++++++++++++++++++CHANGE
  document.addEventListener("change", handleDocumentChange);
  function handleDocumentChange(event) {
    if (event.target.id === "project-expanded-title") {
      changeProjectTitle(event);
    } else if (event.target.closest(".task-expanded")) {
      saveTaskData(event);
    }
  }
  ///////////////////////////////////////////////++++++++++++++++++++KEY
  document.addEventListener("keyup", handleDocumentKeyUp);
  function handleDocumentKeyUp(event) {
    if (
      event.keyCode === 13 && //enter
      event.ctrlKey &&
      event.target.dataset.isTaskInput
    ) {
      //saveTaskData(event);
      closeExpandedTasks();
    } else if (
      event.keyCode === 27 //&& //escape
      //event.target.dataset.isTaskInput
    ) {
      closeExpandedTasks();
    }
  }

  ///////////////////////////////////////////////++++++++++++++++++++CLICK
  document.addEventListener("click", handleDocumentClick);
  function handleDocumentClick(event) {
    //avoid checking unnecessary conditions
    if (event.target.dataset.expander) {
      expandTask(event);
    }
    if (event.target.dataset.type === "delete-task") {
      deleteTask(event);
    }
    if (event.target.dataset.type === "complete-task") {
      completeTask(event);
    }
    if (event.target.dataset.type === "add-task") {
      createNewTask();
    }
    if (event.target.dataset.type === "del-project") {
      deleteProject(event);
    }
    if (
      event.target.closest(".project-container") &&
      event.target.id !== "project-container" &&
      event.target.dataset.type !== "complete-task"
    ) {
      selectProject(event);
    }
    if (event.target.dataset.type === "new-project") {
      createNewProject();
    }
    if (event.target.dataset.type === "overdue-project") {
      overduePseudoProject();
    }
    if (event.target.dataset.type === "today-project") {
      todayPseudoProject();
    }
  }
  /////////////////////////////////****************************FUNCTIONS

  function changeProjectTitle(event) {
    console.log("changing project title");
    if (topProject) {
      topProject.title = capitalize(event.target.value);
      refresh();
    } else {
      console.warn("no project to change title of");
    }
  }

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
  }

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

  function createNewProject() {
    console.log("GUI.createNewProject invoked");
    state.createProject("New project");
  }

  function selectProject(event) {
    console.log("GUI.selectProject invoked");
    const projectId = event.target.dataset.projectId;
    state.selectProject(projectId);
    state.clearPseudoProjects();
    refresh();
  }

  function deleteProject(event) {
    const projectId = event.target.dataset.projectId;
    const targetProject = state.getProjectById(projectId);
    if (
      event.ctrlKey ||
      confirm(`Please confirm removing "${targetProject.title}" project`)
    ) {
      state.removeProject(projectId);
      refresh();
    }
  }

  function createNewTask() {
    console.log("GUI.createNewTask invoked");
    if (!topProject) {
      console.log("no projects yet");
      createNewProject();
    }
    //topProject.newTask();
    const newTask = topProject.newTask();
    const newTaskId = newTask.id;
    refresh();
    document
      .querySelector(`.task-item[data-task-id='${newTaskId}']>.task-title`)
      .click();
  }

  function deleteTask(event) {
    console.log("GUI deleting task");
    if (event.ctrlKey || confirm("Please confirm deleting task")) {
      topProject.removeTask(event.target.dataset.taskId);
      refresh();
    }
  }

  function completeTask(event) {
    console.log("GUI completing task");
    const taskId = event.target.dataset.taskId;
    const targetTask = state.getTaskById(taskId);
    targetTask.isCompleted = !targetTask.isCompleted;
    refresh();
  }

  function saveTaskData(event) {
    console.log("GUI saving task data");
    const taskId = event.target.dataset.taskId;
    const targetTask = state.getTaskById(taskId);
    const inputs = event.target
      .closest(".task-expanded")
      .querySelectorAll("input,select,textarea");
    inputs.forEach((field) => {
      const fieldType = field.dataset.type;
      if (fieldType === "title") {
        targetTask[fieldType] = capitalize(field.value);
      } else if (fieldType === "dueDate") {
        targetTask[fieldType] = field.valueAsDate;
      } else {
        targetTask[fieldType] = field.value;
      }
    });
    refresh();
  }

  function expandTask(event) {
    //if called not from inside of already expanded task:
    if (!event.target.closest(".task-item:has(textarea)")) {
      closeExpandedTasks();
      const targetType = event.target.dataset.type;
      let targetField = "";
      const taskItem = event.target.closest(".task-item");
      const taskExpanded = taskItem.querySelector(".task-expanded");
      const taskId = event.target.dataset.taskId;
      const task = state.getTaskById(taskId);
      taskExpanded.appendChild((0,_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.TaskExpanded)(task));
      switch (targetType) {
        case "note":
          targetField = ".description-textarea";
          break;
        case "date":
          targetField = ".date-input";
          break;
        case "priority":
          targetField = ".priority-input";
          break;
        default:
          targetField = ".title-input";
          break;
      }
      taskExpanded.querySelector(targetField).focus();
    }
  }

  function closeExpandedTasks() {
    const expandedDivs = document.querySelectorAll(".task-expanded");
    expandedDivs.forEach((div) => (div.innerHTML = ""));
  }
  //////////////////////////////////-----------------REFRESH
  function refresh(exception) {
    //does it still need exception?
    console.log("GUI.refresh invoked");
    const currentProjects = state.getProjects();
    topProject = currentProjects[0];
    //if (exception !== "exceptTasks") {
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
    //}
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

/* function correctDates() {
  for (let project of state.getProjects()) {
    for (let task of project.tasks) {
      if (task.dueDate && task.dueDate.getFullYear() === 1970) {
        console.log(task.dueDate);
        task.dueDate = new Date();
      }
    }
  }
  state.syncStorage();
}
correctDates(); */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFD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QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLdUU7QUFDcEM7O0FBRTlCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU0sQ0FBQyxvREFBUTtBQUMzQjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkI7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG9CQUFvQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsVUFBVTtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDREQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUVBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1lxQztBQUM5QztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ2hDSTtBQUNQOzs7Ozs7O1VDREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5Ib3Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbnV0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRRdWFydGVyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaW50bEZvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNQYXN0L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Rhc2tDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWQpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzI3NGQ3ZDtcXG59XFxuOnJvb3Qge1xcbiAgLS15ZWxsb3c6ICNmMmMyMDA7XFxuICAtLWRhcmstYmx1ZTogIzI3NGQ3ZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYXZhdGFyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucGFnZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMjBweCwgMzAwcHgpIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLXRvcDogNnJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLnNpZGViYXIge1xcbiAgLyogd2lkdGg6IDIyMHB4OyAqL1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNhcmQsXFxuLmRlc2NyaXB0aW9uLW1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4uY2FyZCA+IHVsIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uY2FyZCBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG4uY2FyZCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNhcmQgPiBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW0gMC41cmVtIDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuLmNhcmQgLnRhc2staXNDb21wbGV0ZWQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5kZWwtcHJvamVjdC1idG4sXFxuLmRlc2NyaXB0aW9uLW1vZGFsLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwIDAuNHJlbSAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmV3LXByb2plY3QsXFxuLnBzZXVkby1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcbn1cXG4ubmV3LXByb2plY3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHNldWRvLXByb2plY3Qge1xcbiAgbWluLWhlaWdodDogMS41cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnBzZXVkby1wcm9qZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAwLjhyZW07XFxuICB3aWR0aDogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjk1NTtcXG4gIG1hcmdpbi1yaWdodDogMWNoO1xcbn1cXG4udG9kYXk6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhkZmZmO1xcbn1cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLnByb2plY3QtZXhwYW5kZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAwIDEgMTAwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIHBhZGRpbmc6IDAgMCAycmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4ucHJvamVjdC1leHBhbmRlZCA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLnRhc2staXRlbSB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgYXV0byBhdXRvIGF1dG8gbWluLWNvbnRlbnQ7XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzay1pdGVtOmhhcygudGFzay1pbnB1dC1jb250YWluZXIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVmYWU7XFxufVxcbi50YXNrLWlzQ29tcGxldGVkIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG4udGFzay10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGFzay1wcmlvcml0eSB7XFxuICBncmlkLWNvbHVtbjogMztcXG59XFxuLnRhc2stbm90ZSB7XFxuICBncmlkLWNvbHVtbjogNDtcXG59XFxuLnRhc2stZGF0ZSB7XFxuICBncmlkLWNvbHVtbjogNTtcXG4gIHdpZHRoOiA0LjdyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRhc2stZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiA2O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcbi50YXNrLWV4cGFuZGVkIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50YXNrLWV4cGFuZGVkOmhhcyh0ZXh0YXJlYSk6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAxLjVyZW07XFxuICBjb250ZW50OiBcXFwiQ3RybCtFbnRlciBzYXZlcyBkYXRhLlxcXCI7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5vdmVyZHVlLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmJiMztcXG59XFxuLnRvZGF5LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmZiMztcXG59XFxuLnRhc2staW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG4udGFzay1pbnB1dC1jb250YWluZXIgPiAqLFxcbi50YXNrLWlucHV0LWNvbnRhaW5lciA+ICo6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWZhZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2stZXhwYW5kZWQgKjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG4udGl0bGUtaW5wdXQge1xcbiAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWV4cGFuZGVkLXRpdGxlLFxcbi5wcm9qZWN0LWV4cGFuZGVkLXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMXJlbSAycmVtIDAuNXJlbSAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi8qXFxuLnRhc2staW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGFzay1pbnB1dC50YXNrLXRpdGxlOmZvY3VzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCBsaWdodGJsdWU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB6LWluZGV4OiAyO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuc2VsZWN0LnRhc2staW5wdXQ6aGFzKG9wdGlvblt2YWx1ZT1cXFwiaGlnaFxcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzYTk7XFxufVxcbnNlbGVjdC50YXNrLWlucHV0OmhhcyhvcHRpb25bdmFsdWU9XFxcIm5vcm1hbFxcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhYTM7XFxufVxcbnNlbGVjdC50YXNrLWlucHV0OmhhcyhvcHRpb25bdmFsdWU9XFxcImxvd1xcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWVmZmY7XFxufSAqL1xcbi5uZXctdGFzay1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubmV3LXRhc2stYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG4uY29tcGxldGVkLXRhc2stY29udGFpbmVyID4gLnRhc2staXRlbSB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcbi8qIC5kZXNjcmlwdGlvbi1tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1NTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbn0gKi9cXG4uZGVzY3JpcHRpb24tdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTByZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtF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QUNYLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBOzs7Ozs7Ozs7O0dBVUc7QUFDSDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWRcXFwiKTtcXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzI3NGQ3ZDtcXG59XFxuOnJvb3Qge1xcbiAgLS15ZWxsb3c6ICNmMmMyMDA7XFxuICAtLWRhcmstYmx1ZTogIzI3NGQ3ZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDNyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYXZhdGFyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucGFnZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMjBweCwgMzAwcHgpIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLXRvcDogNnJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLnNpZGViYXIge1xcbiAgLyogd2lkdGg6IDIyMHB4OyAqL1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNhcmQsXFxuLmRlc2NyaXB0aW9uLW1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4uY2FyZCA+IHVsIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uY2FyZCBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbn1cXG4uY2FyZCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNhcmQgPiBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW0gMC41cmVtIDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuLmNhcmQgLnRhc2staXNDb21wbGV0ZWQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5kZWwtcHJvamVjdC1idG4sXFxuLmRlc2NyaXB0aW9uLW1vZGFsLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwIDAuNHJlbSAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmV3LXByb2plY3QsXFxuLnBzZXVkby1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcbn1cXG4ubmV3LXByb2plY3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucHNldWRvLXByb2plY3Qge1xcbiAgbWluLWhlaWdodDogMS41cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnBzZXVkby1wcm9qZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAwLjhyZW07XFxuICB3aWR0aDogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNjk1NTtcXG4gIG1hcmdpbi1yaWdodDogMWNoO1xcbn1cXG4udG9kYXk6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhkZmZmO1xcbn1cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLnByb2plY3QtZXhwYW5kZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAwIDEgMTAwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG4gIHBhZGRpbmc6IDAgMCAycmVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4ucHJvamVjdC1leHBhbmRlZCA+IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLnRhc2staXRlbSB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnIgYXV0byBhdXRvIGF1dG8gbWluLWNvbnRlbnQ7XFxuICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFzay1pdGVtOmhhcygudGFzay1pbnB1dC1jb250YWluZXIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVmYWU7XFxufVxcbi50YXNrLWlzQ29tcGxldGVkIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG4udGFzay10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGFzay1wcmlvcml0eSB7XFxuICBncmlkLWNvbHVtbjogMztcXG59XFxuLnRhc2stbm90ZSB7XFxuICBncmlkLWNvbHVtbjogNDtcXG59XFxuLnRhc2stZGF0ZSB7XFxuICBncmlkLWNvbHVtbjogNTtcXG4gIHdpZHRoOiA0LjdyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRhc2stZGVsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiA2O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcbi50YXNrLWV4cGFuZGVkIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50YXNrLWV4cGFuZGVkOmhhcyh0ZXh0YXJlYSk6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAxLjVyZW07XFxuICBjb250ZW50OiBcXFwiQ3RybCtFbnRlciBzYXZlcyBkYXRhLlxcXCI7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcbi5vdmVyZHVlLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmJiMztcXG59XFxuLnRvZGF5LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmZiMztcXG59XFxuLnRhc2staW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG4udGFzay1pbnB1dC1jb250YWluZXIgPiAqLFxcbi50YXNrLWlucHV0LWNvbnRhaW5lciA+ICo6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWZhZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRhc2stZXhwYW5kZWQgKjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG4udGl0bGUtaW5wdXQge1xcbiAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWV4cGFuZGVkLXRpdGxlLFxcbi5wcm9qZWN0LWV4cGFuZGVkLXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMXJlbSAycmVtIDAuNXJlbSAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi8qXFxuLnRhc2staW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGFzay1pbnB1dC50YXNrLXRpdGxlOmZvY3VzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA4NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCBsaWdodGJsdWU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICB6LWluZGV4OiAyO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuc2VsZWN0LnRhc2staW5wdXQ6aGFzKG9wdGlvblt2YWx1ZT1cXFwiaGlnaFxcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzYTk7XFxufVxcbnNlbGVjdC50YXNrLWlucHV0OmhhcyhvcHRpb25bdmFsdWU9XFxcIm5vcm1hbFxcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhYTM7XFxufVxcbnNlbGVjdC50YXNrLWlucHV0OmhhcyhvcHRpb25bdmFsdWU9XFxcImxvd1xcXCJdOmNoZWNrZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWVmZmY7XFxufSAqL1xcbi5uZXctdGFzay1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubmV3LXRhc2stYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG4uY29tcGxldGVkLXRhc2stY29udGFpbmVyID4gLnRhc2staXRlbSB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcbi8qIC5kZXNjcmlwdGlvbi1tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1NTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbn0gKi9cXG4uZGVzY3JpcHRpb24tdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWluLWhlaWdodDogMTByZW07XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cbn07XG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpO1xuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn0iLCJpbXBvcnQgZ2V0UXVhcnRlciBmcm9tIFwiLi4vZ2V0UXVhcnRlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzXG4gKiBAY2F0ZWdvcnkgUXVhcnRlciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBxdWFydGVycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHF1YXJ0ZXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgcXVhcnRlcnMgYXJlIGJldHdlZW4gMzEgRGVjZW1iZXIgMjAxMyBhbmQgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMjAxMywgMTEsIDMxKVxuICogKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgcXVhcnRlckRpZmYgPSBnZXRRdWFydGVyKGRhdGVMZWZ0KSAtIGdldFF1YXJ0ZXIoZGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIHllYXJEaWZmICogNCArIHF1YXJ0ZXJEaWZmO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3NcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHdlZWtzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHdlZWtzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIHdlZWtzIGFyZSBiZXR3ZWVuIDUgSnVseSAyMDE0IGFuZCAyMCBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDUpXG4gKiApXG4gKiAvLz0+IDNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSxcbiAqIC8vIGhvdyBtYW55IGNhbGVuZGFyIHdlZWtzIGFyZSBiZXR3ZWVuIDUgSnVseSAyMDE0IGFuZCAyMCBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDUpLFxuICogICB7IHdlZWtTdGFydHNPbjogMSB9XG4gKiApXG4gKiAvLz0+IDJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZldlZWtMZWZ0ID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBzdGFydE9mV2Vla1JpZ2h0ID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZXZWVrTGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZXZWVrTGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZXZWVrUmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mV2Vla1JpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9XRUVLKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnNcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHllYXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFyc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciB5ZWFycyBhcmUgYmV0d2VlbiAzMSBEZWNlbWJlciAyMDEzIGFuZCAxMSBGZWJydWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhcbiAqICAgbmV3IERhdGUoMjAxNSwgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgyMDEzLCAxMSwgMzEpXG4gKiApXG4gKiAvLz0+IDJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkhvdXJzXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBob3Vyc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBob3VycyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAwNjo1MDowMCBhbmQgMiBKdWx5IDIwMTQgMTk6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Ib3VycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTksIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCA1MClcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luSG91cjtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGF0ZUxlZnQpLmdldFRpbWUoKSAtIHRvRGF0ZShkYXRlUmlnaHQpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbnV0ZXNcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWludXRlcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgc2lnbmVkIG51bWJlciBvZiBmdWxsIChyb3VuZGVkIHRvd2FyZHMgMCkgbWludXRlcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWludXRlc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaW51dGVzIGFyZSBiZXR3ZWVuIDIgSnVseSAyMDE0IDEyOjA3OjU5IGFuZCAyIEp1bHkgMjAxNCAxMjoyMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbnV0ZXMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCA3LCA1OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWludXRlcyBhcmUgYmV0d2VlbiAxMDowMTo1OSBhbmQgMTA6MDA6MDBcbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbnV0ZXMoXG4gKiAgIG5ldyBEYXRlKDIwMDAsIDAsIDEsIDEwLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAwMCwgMCwgMSwgMTAsIDEsIDU5KVxuICogKVxuICogLy89PiAtMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyBtaWxsaXNlY29uZHNJbk1pbnV0ZTtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldFF1YXJ0ZXJcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgeWVhciBxdWFydGVyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSB5ZWFyIHF1YXJ0ZXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcXVhcnRlclxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHF1YXJ0ZXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRRdWFydGVyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UXVhcnRlcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBxdWFydGVyID0gTWF0aC5mbG9vcihkYXRlLmdldE1vbnRoKCkgLyAzKSArIDE7XG4gIHJldHVybiBxdWFydGVyO1xufSIsImltcG9ydCB7IHNlY29uZHNJbkRheSwgc2Vjb25kc0luSG91ciwgc2Vjb25kc0luTWludXRlLCBzZWNvbmRzSW5Nb250aCwgc2Vjb25kc0luUXVhcnRlciwgc2Vjb25kc0luV2Vlaywgc2Vjb25kc0luWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkhvdXJzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Ib3Vycy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1pbnV0ZXMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbnV0ZXMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaW50bEZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdHMgZGlzdGFuY2UgYmV0d2VlbiB0d28gZGF0ZXMgaW4gYSBodW1hbi1yZWFkYWJsZSBmb3JtYXRcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gZGF0ZXMgYW5kIGZvcm1hdHMgaXQgYXMgYSBodW1hbi1yZWFkYWJsZSBzdHJpbmcuXG4gKlxuICogVGhlIGZ1bmN0aW9uIHdpbGwgcGljayB0aGUgbW9zdCBhcHByb3ByaWF0ZSB1bml0IGRlcGVuZGluZyBvbiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBkYXRlcy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBkaXN0YW5jZSBpcyBhIGZldyBob3VycywgaXQgbWlnaHQgcmV0dXJuIGB4IGhvdXJzYC4gSWYgdGhlIGRpc3RhbmNlIGlzIGEgZmV3IG1vbnRocywgaXQgbWlnaHQgcmV0dXJuIGB4IG1vbnRoc2AuXG4gKlxuICogWW91IGNhbiBhbHNvIHNwZWNpZnkgYSB1bml0IHRvIGZvcmNlIHVzaW5nIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGRpc3RhbmNlIHRvIGdldCBhIHJlc3VsdCBsaWtlIGAxMjM0NTYgaG91cnNgLlxuICpcbiAqIFNlZSB0aGUgdGFibGUgYmVsb3cgZm9yIHRoZSB1bml0IHBpY2tpbmcgbG9naWM6XG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0IChwYXN0KSAgfCBSZXN1bHQgKGZ1dHVyZSkgfFxuICogfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0gfFxuICogfCAwIHNlY29uZHMgICAgICAgICAgICAgIHwgbm93ICAgICAgICAgICAgfCBub3cgICAgICAgICAgICAgfFxuICogfCAxLTU5IHNlY29uZHMgICAgICAgICAgIHwgWCBzZWNvbmRzIGFnbyAgfCBpbiBYIHNlY29uZHMgICAgfFxuICogfCAxLTU5IG1pbnV0ZXMgICAgICAgICAgIHwgWCBtaW51dGVzIGFnbyAgfCBpbiBYIG1pbnV0ZXMgICAgfFxuICogfCAxLTIzIGhvdXJzICAgICAgICAgICAgIHwgWCBob3VycyBhZ28gICAgfCBpbiBYIGhvdXJzICAgICAgfFxuICogfCAxIGRheSAgICAgICAgICAgICAgICAgIHwgeWVzdGVyZGF5ICAgICAgfCB0b21vcnJvdyAgICAgICAgfFxuICogfCAyLTYgZGF5cyAgICAgICAgICAgICAgIHwgWCBkYXlzIGFnbyAgICAgfCBpbiBYIGRheXMgICAgICAgfFxuICogfCA3IGRheXMgICAgICAgICAgICAgICAgIHwgbGFzdCB3ZWVrICAgICAgfCBuZXh0IHdlZWsgICAgICAgfFxuICogfCA4IGRheXMtMSBtb250aCAgICAgICAgIHwgWCB3ZWVrcyBhZ28gICAgfCBpbiBYIHdlZWtzICAgICAgfFxuICogfCAxIG1vbnRoICAgICAgICAgICAgICAgIHwgbGFzdCBtb250aCAgICAgfCBuZXh0IG1vbnRoICAgICAgfFxuICogfCAyLTMgbW9udGhzICAgICAgICAgICAgIHwgWCBtb250aHMgYWdvICAgfCBpbiBYIG1vbnRocyAgICAgfFxuICogfCAxIHF1YXJ0ZXIgICAgICAgICAgICAgIHwgbGFzdCBxdWFydGVyICAgfCBuZXh0IHF1YXJ0ZXIgICAgfFxuICogfCAyLTMgcXVhcnRlcnMgICAgICAgICAgIHwgWCBxdWFydGVycyBhZ28gfCBpbiBYIHF1YXJ0ZXJzICAgfFxuICogfCAxIHllYXIgICAgICAgICAgICAgICAgIHwgbGFzdCB5ZWFyICAgICAgfCBuZXh0IHllYXIgICAgICAgfFxuICogfCAyKyB5ZWFycyAgICAgICAgICAgICAgIHwgWCB5ZWFycyBhZ28gICAgfCBpbiBYIHllYXJzICAgICAgfFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGguXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy51bml0XSAtIGZvcm1hdHMgdGhlIGRpc3RhbmNlIHdpdGggdGhlIGdpdmVuIHVuaXQgKCd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJykuXG4gKiBAcGFyYW0ge1N0cmluZ3xTdHJpbmdbXX0gW29wdGlvbnMubG9jYWxlXSAtIHRoZSBsb2NhbGUgdG8gdXNlLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmxvY2FsZU1hdGNoZXI9J2Jlc3QgZml0J10gLSB0aGUgbG9jYWxlIG1hdGNoaW5nIGFsZ29yaXRobSB0byB1c2UuIE90aGVyIHZhbHVlOiAnbG9va3VwJy5cbiAqIFNlZSBNRE4gZm9yIGRldGFpbHMgW0xvY2FsZSBpZGVudGlmaWNhdGlvbiBhbmQgbmVnb3RpYXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwjbG9jYWxlX2lkZW50aWZpY2F0aW9uX2FuZF9uZWdvdGlhdGlvbilcbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5udW1lcmljPSdhdXRvJ10gLSB0aGUgb3V0cHV0IG1lc3NhZ2UgZm9ybWF0LiBUaGUgdmFsdWVzIGFyZSAnYXV0bycgKGUuZy4gYHllc3RlcmRheWApLCAnYWx3YXlzJyhlLmcuIGAxIGRheSBhZ29gKS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zdHlsZT0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgcmVzdWx0LiBUaGUgdmFsdWVzIGFyZTogJ2xvbmcnIChlLmcuIGAxIG1vbnRoYCksICdzaG9ydCcgKGUuZy4gJ2luIDEgbW8uJyksICduYXJyb3cnIChlLmcuICdpbiAxIG1vLicpLlxuICogVGhlIG5hcnJvdyBvbmUgY291bGQgYmUgc2ltaWxhciB0byB0aGUgc2hvcnQgb25lIGZvciBzb21lIGxvY2FsZXMuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHMgYWNjb3JkaW5nIHRvIGxhbmd1YWdlLXNlbnNpdGl2ZSByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmcuXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMudW5pdGAgbXVzdCBub3QgYmUgaW52YWxpZCBVbml0XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3Qgbm90IGJlIGludmFsaWQgbG9jYWxlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVNYXRjaGVyYCBtdXN0IG5vdCBiZSBpbnZhbGlkIGxvY2FsZU1hdGNoZXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLm51bWVyaWNgIG11c3Qgbm90IGJlIGludmFsaWQgbnVtZXJpY1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuc3R5bGVgIG11c3Qgbm90IGJlIGludmFsaWQgc3R5bGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZGF0ZXMgd2hlbiB0aGUgZmlzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQ/XG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMCwgMClcbiAqIClcbiAqIC8vPT4gJ2luIDEgaG91cidcbiAqXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBkYXRlcyB3aGVuIHRoZSBmaXN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQ/XG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMClcbiAqIClcbiAqIC8vPT4gJzEgaG91ciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgdW5pdCBvcHRpb24gdG8gZm9yY2UgdGhlIGZ1bmN0aW9uIHRvIG91dHB1dCB0aGUgcmVzdWx0IGluIHF1YXJ0ZXJzLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcIm5leHQgeWVhclwiXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDYsIDQsIDEwLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMCwgMCksXG4gKiAgIHsgdW5pdDogJ3F1YXJ0ZXInIH1cbiAqIClcbiAqIC8vPT4gJ2luIDUgcXVhcnRlcnMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgbG9jYWxlIG9wdGlvbiB0byBnZXQgdGhlIHJlc3VsdCBpbiBTcGFuaXNoLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcImluIDEgaG91clwiLlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApLFxuICogICB7IGxvY2FsZTogJ2VzJyB9XG4gKiApXG4gKiAvLz0+ICdkZW50cm8gZGUgMSBob3JhJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIG51bWVyaWMgb3B0aW9uIHRvIGZvcmNlIHRoZSBmdW5jdGlvbiB0byB1c2UgbnVtZXJpYyB2YWx1ZXMuIFdpdGhvdXQgc2V0dGluZyBpdCwgdGhlIGV4YW1wbGUgd291bGQgcmV0dXJuIFwidG9tb3Jyb3dcIi5cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNSwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgeyBudW1lcmljOiAnYWx3YXlzJyB9XG4gKiApXG4gKiAvLz0+ICdpbiAxIGRheSdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSBzdHlsZSBvcHRpb24gdG8gZm9yY2UgdGhlIGZ1bmN0aW9uIHRvIHVzZSBzaG9ydCB2YWx1ZXMuIFdpdGhvdXQgc2V0dGluZyBpdCwgdGhlIGV4YW1wbGUgd291bGQgcmV0dXJuIFwiaW4gMiB5ZWFyc1wiLlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg4LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICB7IHN0eWxlOiAnc2hvcnQnIH1cbiAqIClcbiAqIC8vPT4gJ2luIDIgeXInXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGxGb3JtYXREaXN0YW5jZShkYXRlLCBiYXNlRGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHZhbHVlID0gMDtcbiAgdmFyIHVuaXQ7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkYXRlKTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShiYXNlRGF0ZSk7XG5cbiAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51bml0KSkge1xuICAgIC8vIEdldCB0aGUgdW5pdCBiYXNlZCBvbiBkaWZmSW5TZWNvbmRzIGNhbGN1bGF0aW9ucyBpZiBubyB1bml0IGlzIHNwZWNpZmllZFxuICAgIHZhciBkaWZmSW5TZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTsgLy8gVGhlIHNtYWxsZXN0IHVuaXRcblxuICAgIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IHNlY29uZHNJbk1pbnV0ZSkge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICdzZWNvbmQnO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5Ib3VyKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gJ21pbnV0ZSc7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IHNlY29uZHNJbkRheSAmJiBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpIDwgMSkge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnaG91cic7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IHNlY29uZHNJbldlZWsgJiYgKHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKSAmJiBNYXRoLmFicyh2YWx1ZSkgPCA3KSB7XG4gICAgICB1bml0ID0gJ2RheSc7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IHNlY29uZHNJbk1vbnRoKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gJ3dlZWsnO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5RdWFydGVyKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICdtb250aCc7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IHNlY29uZHNJblllYXIpIHtcbiAgICAgIGlmIChkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIDwgNCkge1xuICAgICAgICAvLyBUbyBmaWx0ZXIgb3V0IGNhc2VzIHRoYXQgYXJlIGxlc3MgdGhhbiBhIHllYXIgYnV0IG1hdGNoIDQgcXVhcnRlcnNcbiAgICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgICB1bml0ID0gJ3F1YXJ0ZXInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgICB1bml0ID0gJ3llYXInO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gJ3llYXInO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBHZXQgdGhlIHZhbHVlIGlmIHVuaXQgaXMgc3BlY2lmaWVkXG4gICAgdW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuXG4gICAgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnbWludXRlJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5NaW51dGVzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2hvdXInKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2RheScpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3dlZWsnKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnbW9udGgnKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAneWVhcicpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9XG4gIH1cblxuICB2YXIgcnRmID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUsIHtcbiAgICBsb2NhbGVNYXRjaGVyOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlTWF0Y2hlcixcbiAgICBudW1lcmljOiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm51bWVyaWMpIHx8ICdhdXRvJyxcbiAgICBzdHlsZTogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnN0eWxlXG4gIH0pO1xuICByZXR1cm4gcnRmLmZvcm1hdCh2YWx1ZSwgdW5pdCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNQYXN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGFzdChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCkgPCBEYXRlLm5vdygpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdChcbiAgdGl0bGUgPSBcIk5ldyBQcm9qZWN0XCIsXG4gIGlkID0gbmFub2lkKCksXG4gIHRhc2tzID0gW10sXG4gIGlzUHNldWRvID0gZmFsc2Vcbikge1xuICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gIGNvbnN0IF9pZCA9IGlkO1xuICBsZXQgX3Rhc2tzID0gdGFza3M7XG4gIGxldCBfaXNQc2V1ZG8gPSBpc1BzZXVkbztcblxuICBmdW5jdGlvbiBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICBfdGFza3MucHVzaChuZXdUYXNrKTtcbiAgfVxuICBmdW5jdGlvbiBuZXdUYXNrKHRpdGxlKSB7XG4gICAgLy9fdGFza3MucHVzaChUYXNrKF9pZCwgdGl0bGUpKTtcbiAgICBjb25zdCB0YXNrID0gVGFzayhfaWQsIHRpdGxlKTtcbiAgICBfdGFza3MucHVzaCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVUYXNrKGlkKSB7XG4gICAgX3Rhc2tzID0gX3Rhc2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gX2lkO1xuICAgIH0sXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIF90aXRsZTtcbiAgICB9LFxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfSxcbiAgICBnZXQgdGFza3MoKSB7XG4gICAgICByZXR1cm4gX3Rhc2tzO1xuICAgIH0sXG4gICAgc2V0IHRhc2tzKG5ld1Rhc2tzKSB7XG4gICAgICBfdGFza3MgPSBuZXdUYXNrcztcbiAgICB9LFxuICAgIGdldCBpc1BzZXVkbygpIHtcbiAgICAgIHJldHVybiBfaXNQc2V1ZG87XG4gICAgfSxcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgbmV3VGFzayxcbiAgfTtcbn1cblxuLyogZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RDb21wb25lbnQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LmlkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnR5cGUgPSBcInByb2plY3QtY2FyZFwiO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICBpZiAoIXRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICAgIGNvbnN0IHRhc2tMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQuaWQgPSB0YXNrLmlkO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgIHRhc2tDaGVja2JveC5kYXRhc2V0LnR5cGUgPSBcInRhc2stY29tcGxldGVcIjtcbiAgICAgIHRhc2tMSS5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuICAgICAgdGFza0xJLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrTEkpO1xuICAgIH1cbiAgfVxuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWwtcHJvamVjdC1idG5cIik7XG4gIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBwcm9qZWN0XCI7XG4gIGRlbGV0ZVByb2plY3RCdXR0b24uZGF0YXNldC50eXBlID0gXCJkZWwtcHJvamVjdFwiO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgY29uc3QgZWxlbWVudHMgPSBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkKSk7XG4gIHJldHVybiBwcm9qZWN0Q2FyZDtcbn1cbiAqL1xuIiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RDb21wb25lbnQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LmlkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnR5cGUgPSBcInByb2plY3QtY2FyZFwiO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICBpZiAoIXRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICAgIGNvbnN0IHRhc2tMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoYHRhc2staXNDb21wbGV0ZWRgLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgdGFza0NoZWNrYm94LnRleHRDb250ZW50ID0gXCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICAgIHRhc2tDaGVja2JveC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gICAgICB0YXNrQ2hlY2tib3guZGF0YXNldC50eXBlID0gXCJjb21wbGV0ZS10YXNrXCI7XG4gICAgICB0YXNrTEkuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgICAgIHRhc2tMSS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0xJKTtcbiAgICB9XG4gIH1cbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsLXByb2plY3QtYnRuXCIpO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgcHJvamVjdFwiO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uLmRhdGFzZXQudHlwZSA9IFwiZGVsLXByb2plY3RcIjtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gIGNvbnN0IGVsZW1lbnRzID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZCkpO1xuICByZXR1cm4gcHJvamVjdENhcmQ7XG59XG4iLCJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayhcbiAgcHJvamVjdElkLFxuICB0aXRsZSA9IFwiRWwgdGFzY29cIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBkdWVEYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcIlwiLFxuICBpc0NvbXBsZXRlZCA9IGZhbHNlXG4pIHtcbiAgY29uc3QgX2lkID0gbmFub2lkKCk7XG4gIGxldCBfcHJvamVjdElkID0gcHJvamVjdElkO1xuICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICBsZXQgX2lzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gX2lkO1xuICAgIH0sXG4gICAgZ2V0IHByb2plY3RJZCgpIHtcbiAgICAgIHJldHVybiBfcHJvamVjdElkO1xuICAgIH0sXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIF90aXRsZTtcbiAgICB9LFxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfSxcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gX2Rlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICBfZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIF9kdWVEYXRlO1xuICAgIH0sXG4gICAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgICAgX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH0sXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIF9wcmlvcml0eTtcbiAgICB9LFxuICAgIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgICAgX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfSxcbiAgICBnZXQgaXNDb21wbGV0ZWQoKSB7XG4gICAgICByZXR1cm4gX2lzQ29tcGxldGVkO1xuICAgIH0sXG4gICAgc2V0IGlzQ29tcGxldGVkKG5ld0lzQ29tcGxldGVkKSB7XG4gICAgICBfaXNDb21wbGV0ZWQgPSBuZXdJc0NvbXBsZXRlZDtcbiAgICB9LFxuICB9O1xufVxuXG4vKiBleHBvcnQgZnVuY3Rpb24gVGFza0NvbXBvbmVudCh0YXNrKSB7XG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpO1xuXG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tJbnB1dCh0YXNrLCBcImlzQ29tcGxldGVkXCIpKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0lucHV0KHRhc2ssIFwidGl0bGVcIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJkZXNjcmlwdGlvblwiKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tJbnB1dCh0YXNrLCBcImR1ZURhdGVcIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJwcmlvcml0eVwiKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tEZWxldGVCdXR0b24odGFzaykpO1xuXG4gIHJldHVybiB0YXNrRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gVGFza0lucHV0KHRhc2ssIGZpZWxkVHlwZSkge1xuICBsZXQgaW5wdXRUeXBlID0gXCJ0ZXh0XCI7XG4gIHN3aXRjaCAoZmllbGRUeXBlKSB7XG4gICAgY2FzZSBcImR1ZURhdGVcIjpcbiAgICAgIGlucHV0VHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImlzQ29tcGxldGVkXCI6XG4gICAgICBpbnB1dFR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicHJpb3JpdHlcIjpcbiAgICAgIGlucHV0VHlwZSA9IFwic2VsZWN0XCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaW5wdXRUeXBlID0gXCJ0ZXh0XCI7XG4gICAgICBicmVhaztcbiAgfVxuICBpZiAoaW5wdXRUeXBlID09PSBcInNlbGVjdFwiKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dFwiLCBgdGFzay0ke2ZpZWxkVHlwZX1gKTtcbiAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnR5cGUgPSBmaWVsZFR5cGU7XG4gICAgZm9yIChsZXQgb3B0aW9uIG9mIFtcIm5vcm1hbFwiLCBcImhpZ2hcIiwgXCJsb3dcIl0pIHtcbiAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBvcHRpb247XG4gICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICB9XG4gICAgZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVsZW1lbnQudHlwZSA9IGlucHV0VHlwZTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIsIGB0YXNrLSR7ZmllbGRUeXBlfWApO1xuICAgIC8vZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXTtcbiAgICBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV0ucmVwbGFjZUFsbChcIlxcblwiLCBcIiBcIik7XG4gICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gXCIuLi5cIjtcbiAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcbiAgICAgIC8vIGRvIHN0dWZmLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV07XG4gICAgfVxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgZWxlbWVudC5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlZDtcbiAgICB9XG4gICAgZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50eXBlID0gZmllbGRUeXBlO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59ICovXG5cbi8qIGZ1bmN0aW9uIFRhc2tEZWxldGVCdXR0b24odGFzaykge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGVcIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG4gIGJ1dHRvbi5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImRlbGV0ZS10YXNrXCI7XG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXNjcmlwdGlvbk1vZGFsKHRhc2spIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWwtY29udGFpbmVyXCIpO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIG1vZGFsQ29udGFpbmVyLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIG1vZGFsQ29udGFpbmVyLmRhdGFzZXQudHlwZSA9IFwibW9kYWwtY29udGFpbmVyXCI7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsXCIpO1xuICBtb2RhbC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIG1vZGFsLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIG1vZGFsLmRhdGFzZXQudHlwZSA9IFwibW9kYWxcIjtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLmlkID0gXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWwtdGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgdGV4dEFyZWEuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgdGV4dEFyZWEudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLWJ0blwiKTtcbiAgc3VibWl0QnRuLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgc3VibWl0QnRuLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsLXNhdmVcIjtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTYXZlIChDdHJsK0VudGVyKVwiO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIHJldHVybiBtb2RhbENvbnRhaW5lcjtcbn0gKi9cbiIsImltcG9ydCB7IGludGxGb3JtYXREaXN0YW5jZSwgaXNWYWxpZCwgaXNQYXN0LCBlbmRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrQ29tcG9uZW50KHRhc2spIHtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG4gIHRhc2tFbGVtZW50LmRhdGFzZXQuZXhwYW5kZXIgPSB0cnVlO1xuICB0YXNrRWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICB0YXNrRWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoTWFrZUNoZWNrYm94KHRhc2spKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoTWFrZVRpdGxlKHRhc2spKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoTWFrZVByaW9yaXR5KHRhc2spKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoTWFrZU5vdGUodGFzaykpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChNYWtlRGF0ZSh0YXNrKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VEZWxldGUodGFzaykpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChNYWtlQ29udGFpbmVyKHRhc2spKTtcblxuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIE1ha2VDaGVja2JveCh0YXNrKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoYHRhc2staXNDb21wbGV0ZWRgLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICBjaGVja2JveC50ZXh0Q29udGVudCA9IHRhc2suaXNDb21wbGV0ZWRcbiAgICA/IFwiY2hlY2tfYm94XCJcbiAgICA6IFwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZWQ7XG4gIGNoZWNrYm94LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIGNoZWNrYm94LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgY2hlY2tib3guZGF0YXNldC50eXBlID0gXCJjb21wbGV0ZS10YXNrXCI7XG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuZnVuY3Rpb24gTWFrZVRpdGxlKHRhc2spIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChgdGFzay10aXRsZWApO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIHRpdGxlLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHRpdGxlLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgdGl0bGUuZGF0YXNldC50eXBlID0gXCJ0aXRsZVwiO1xuICB0aXRsZS5kYXRhc2V0LmV4cGFuZGVyID0gdHJ1ZTtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBNYWtlUHJpb3JpdHkodGFzaykge1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKGB0YXNrLXByaW9yaXR5YCwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5ID09PSBcImhpZ2hcIiA/IFwicHJpb3JpdHlfaGlnaFwiIDogXCJcIjtcbiAgcHJpb3JpdHkuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgcHJpb3JpdHkuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBwcmlvcml0eS5kYXRhc2V0LnR5cGUgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5LmRhdGFzZXQuZXhwYW5kZXIgPSB0cnVlO1xuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIE1ha2VOb3RlKHRhc2spIHtcbiAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBub3RlLmNsYXNzTGlzdC5hZGQoYHRhc2stbm90ZWAsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gIG5vdGUudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uID8gXCJkZXNjcmlwdGlvblwiIDogXCJub3RlX2FkZFwiOyAvLydkZXNjcmlwdGlvbicgZm9yIGZpbGxlZCBub3RlXG4gIG5vdGUuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgbm90ZS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIG5vdGUuZGF0YXNldC50eXBlID0gXCJub3RlXCI7XG4gIG5vdGUuZGF0YXNldC5leHBhbmRlciA9IHRydWU7XG4gIHJldHVybiBub3RlO1xufVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURBVEUtLS0tREFURS0tLS1EQVRFLS0tLURBVEVcbmZ1bmN0aW9uIE1ha2VEYXRlKHRhc2spIHtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoYHRhc2stZGF0ZWApO1xuICBkYXRlLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIGRhdGUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBkYXRlLmRhdGFzZXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlLmRhdGFzZXQuZXhwYW5kZXIgPSB0cnVlO1xuICBpZiAodGFzay5kdWVEYXRlICYmIGlzVmFsaWQodGFzay5kdWVEYXRlKSkge1xuICAgIGNvbnN0IGludGVydmFsID0gaW50bEZvcm1hdERpc3RhbmNlKHRhc2suZHVlRGF0ZSwgbmV3IERhdGUoKSwge1xuICAgICAgdW5pdDogXCJkYXlcIixcbiAgICB9KTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZShpbnRlcnZhbCk7XG4gICAgaWYgKCF0YXNrLmlzQ29tcGxldGVkICYmIGlzUGFzdChlbmRPZkRheSh0YXNrLmR1ZURhdGUpKSkge1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwib3ZlcmR1ZS10YXNrXCIpO1xuICAgIH0gZWxzZSBpZiAoaW50ZXJ2YWwgPT09IFwidG9kYXlcIikge1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kYXktdGFza1wiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IFwiTm8gZGF0ZVwiO1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiBNYWtlRGVsZXRlKHRhc2spIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWxldGVcIiwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJkZWxldGVfZm9yZXZlclwiO1xuICBidXR0b24uZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgYnV0dG9uLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgYnV0dG9uLmRhdGFzZXQudHlwZSA9IFwiZGVsZXRlLXRhc2tcIjtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gTWFrZUNvbnRhaW5lcih0YXNrKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1leHBhbmRlZFwiKTtcbiAgY29udGFpbmVyLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIGNvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGNvbnRhaW5lci5kYXRhc2V0LnR5cGUgPSBcImV4cGFuZGVkXCI7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gVGFza0V4cGFuZGVkKHRhc2spIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgY29uc3QgaW5wdXRCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnB1dEJhci5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dC1jb250YWluZXJcIik7XG4gIGlucHV0QmFyLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIGlucHV0QmFyLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgaW5wdXRCYXIuYXBwZW5kQ2hpbGQoVGl0bGVJbnB1dCh0YXNrKSk7XG4gIGlucHV0QmFyLmFwcGVuZENoaWxkKFByaW9yaXR5SW5wdXQodGFzaykpO1xuICBpbnB1dEJhci5hcHBlbmRDaGlsZChEYXRlSW5wdXQodGFzaykpO1xuXG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKGlucHV0QmFyKTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoVGV4dEFyZWEodGFzaykpO1xuXG4gIGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCxzZWxlY3QsdGV4dGFyZWFcIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICBlbGVtZW50LmRhdGFzZXQuaXNUYXNrSW5wdXQgPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmZ1bmN0aW9uIFRpdGxlSW5wdXQodGFzaykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBlbGVtZW50LnR5cGUgPSBcInRleHRcIjtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGB0aXRsZS1pbnB1dGApO1xuICBlbGVtZW50LnZhbHVlID0gdGFzay50aXRsZTtcbiAgZWxlbWVudC5kYXRhc2V0LnR5cGUgPSBcInRpdGxlXCI7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBQcmlvcml0eUlucHV0KHRhc2spIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktaW5wdXRgKTtcbiAgZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBlbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgZm9yIChsZXQgb3B0aW9uIG9mIFtcIm5vcm1hbFwiLCBcImhpZ2hcIl0pIHtcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xuICAgIGlmIChvcHRpb24gPT09IFwibm9ybWFsXCIpIHtcbiAgICAgIG9wdGlvbkVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICB9XG4gIGVsZW1lbnQudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IFwicHJpb3JpdHlcIjtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIERhdGVJbnB1dCh0YXNrKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVsZW1lbnQudHlwZSA9IFwiZGF0ZVwiO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYGRhdGUtaW5wdXRgKTtcbiAgaWYgKHRhc2suZHVlRGF0ZSAmJiBpc1ZhbGlkKHRhc2suZHVlRGF0ZSkpIHtcbiAgICBlbGVtZW50LnZhbHVlQXNEYXRlID0gdGFzay5kdWVEYXRlO1xuICB9XG4gIGVsZW1lbnQuZGF0YXNldC50eXBlID0gXCJkdWVEYXRlXCI7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBUZXh0QXJlYSh0YXNrKSB7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5pZCA9IFwiZGVzY3JpcHRpb24tdGV4dGFyZWFcIjtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIHRleHRBcmVhLmRhdGFzZXQudHlwZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgcmV0dXJuIHRleHRBcmVhO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyogZnVuY3Rpb24gVGFza0lucHV0KHRhc2ssIGZpZWxkVHlwZSkge1xuICBsZXQgaW5wdXRUeXBlID0gXCJ0ZXh0XCI7XG4gIHN3aXRjaCAoZmllbGRUeXBlKSB7XG4gICAgY2FzZSBcImR1ZURhdGVcIjpcbiAgICAgIGlucHV0VHlwZSA9IFwiZGF0ZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInByaW9yaXR5XCI6XG4gICAgICBpbnB1dFR5cGUgPSBcInNlbGVjdFwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKGlucHV0VHlwZSA9PT0gXCJzZWxlY3RcIikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtmaWVsZFR5cGV9LWlucHV0YCk7XG4gICAgZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50eXBlID0gZmllbGRUeXBlO1xuICAgIGZvciAobGV0IG9wdGlvbiBvZiBbXCJub3JtYWxcIiwgXCJoaWdoXCJdKSB7XG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcbiAgICAgIGlmIChvcHRpb24gPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgb3B0aW9uRWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgIH1cbiAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWxlbWVudC50eXBlID0gaW5wdXRUeXBlO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtmaWVsZFR5cGV9LWlucHV0YCk7XG4gICAgLy9lbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIGlmIChmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXS5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiIFwiKTtcbiAgICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBcIi4uLlwiO1xuICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgaWYgKHRhc2suZHVlRGF0ZSAmJiBpc1ZhbGlkKHRhc2suZHVlRGF0ZSkpIHtcbiAgICAgICAgZWxlbWVudC52YWx1ZUFzRGF0ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBlbGVtZW50LmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGVkO1xuICAgIH1cbiAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnR5cGUgPSBmaWVsZFR5cGU7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gKi9cblxuLyogZXhwb3J0IGZ1bmN0aW9uIERlc2NyaXB0aW9uTW9kYWwodGFzaykge1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbC1jb250YWluZXJcIik7XG4gIG1vZGFsQ29udGFpbmVyLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgbW9kYWxDb250YWluZXIuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgbW9kYWxDb250YWluZXIuZGF0YXNldC50eXBlID0gXCJtb2RhbC1jb250YWluZXJcIjtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWxcIik7XG4gIG1vZGFsLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgbW9kYWwuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgbW9kYWwuZGF0YXNldC50eXBlID0gXCJtb2RhbFwiO1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuaWQgPSBcImRlc2NyaXB0aW9uLXRleHRhcmVhXCI7XG4gIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbC10ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB0ZXh0QXJlYS5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICB0ZXh0QXJlYS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWwtYnRuXCIpO1xuICBzdWJtaXRCdG4uZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBzdWJtaXRCdG4uZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgc3VibWl0QnRuLmRhdGFzZXQudHlwZSA9IFwibW9kYWwtc2F2ZVwiO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNhdmUgKEN0cmwrRW50ZXIpXCI7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgcmV0dXJuIG1vZGFsQ29udGFpbmVyO1xufVxuICovXG4iLCIvL2ltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgeyBUYXNrQ29tcG9uZW50LCBUYXNrRXhwYW5kZWQgfSBmcm9tIFwiLi9UYXNrQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vUHJvamVjdENvbXBvbmVudFwiO1xuaW1wb3J0IHsgaXNQYXN0LCBpc1RvZGF5LCBlbmRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBzdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBfcHJvamVjdHMgPSBbXTtcblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcyA9IFtdLCBpc1BzZXVkbyA9IGZhbHNlKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZS5hZGRQcm9qZWN0IGludm9rZWRcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QodGl0bGUsIHVuZGVmaW5lZCwgdGFza3MsIGlzUHNldWRvKTtcbiAgICBfcHJvamVjdHMudW5zaGlmdChuZXdQcm9qZWN0KTtcbiAgICBHVUkucmVmcmVzaCgpO1xuICAgIGlmICghbmV3UHJvamVjdC5pc1BzZXVkbykge1xuICAgICAgR1VJLmNyZWF0ZU5ld1Rhc2soKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpZCkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUucmVtb3ZlUHJvamVjdCBpbnZva2VkXCIpO1xuICAgIF9wcm9qZWN0cyA9IF9wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IGlkKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gX3Byb2plY3RzO1xuICB9XG4gIGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgICBsZXQgbG9hZGVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICAgIGlmIChsb2FkZWRQcm9qZWN0cyAmJiBfcHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgcHJvamVjdHMgZnJvbSBsb2NhbHN0b3JhZ2VcIik7XG4gICAgICBsb2FkZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9hZGVkUHJvamVjdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdGhpbmcgd2FzIGxvYWRlZCBmcm9tIGxvY2Fsc3RvcmFnZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9hZGVkUHJvamVjdHMgPSBsb2FkZWRQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmlkLCBwcm9qZWN0LnRhc2tzKTtcbiAgICAgIG5ld1Byb2plY3QudGFza3MgPSBuZXdQcm9qZWN0LnRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBuZXdEdWVEYXRlID0gdGFzay5kdWVEYXRlID8gbmV3IERhdGUodGFzay5kdWVEYXRlKSA6IFwiXCI7XG4gICAgICAgIHJldHVybiBUYXNrKFxuICAgICAgICAgIHRhc2sucHJvamVjdElkLFxuICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICBuZXdEdWVEYXRlLFxuICAgICAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICAgICAgdGFzay5pc0NvbXBsZXRlZFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9KTtcbiAgICBfcHJvamVjdHMgPSBsb2FkZWRQcm9qZWN0cztcbiAgfVxuICBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KHByb2plY3RJZCkge1xuICAgIC8vbW92ZXMgc2VsZWN0ZWQgcHJvamVjdCB0byB0aGUgc3RhcnQgb2YgX3Byb2plY3RzIGFycmF5XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZS5zZWxlY3RQcm9qZWN0IGludm9rZWRcIik7XG4gICAgY29uc3QgaW5kZXggPSBfcHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgIF9wcm9qZWN0cy51bnNoaWZ0KF9wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpWzBdKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRUYXNrQnlJZCh0YXNrSWQpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXRlLmdldFRhc2tCeUlkIGludm9rZWRcIik7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBfcHJvamVjdHMpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHByb2plY3QudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZS5nZXRQcm9qZWN0QnlJZCBpbnZva2VkXCIpO1xuICAgIHJldHVybiBfcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgfVxuICBmdW5jdGlvbiBzeW5jU3RvcmFnZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInVwbG9hZGluZyBwcm9qZWN0cyB0byBsb2NhbFN0b3JhZ2VcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShfcHJvamVjdHMpKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhclBzZXVkb1Byb2plY3RzKCkge1xuICAgIF9wcm9qZWN0cyA9IF9wcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+ICFwcm9qZWN0LmlzUHNldWRvKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIGxvYWRQcm9qZWN0cyxcbiAgICBzZWxlY3RQcm9qZWN0LFxuICAgIHN5bmNTdG9yYWdlLFxuICAgIGdldFRhc2tCeUlkLFxuICAgIGdldFByb2plY3RCeUlkLFxuICAgIGNsZWFyUHNldWRvUHJvamVjdHMsXG4gIH07XG59KSgpO1xuXG5zdGF0ZS5sb2FkUHJvamVjdHMoKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgR1VJID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZXhwYW5kZWQtdGl0bGVcIik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICBjb25zdCBjb21wbGV0ZWRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jb21wbGV0ZWQtdGFzay1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBhZGRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1jb250YWluZXJcIik7XG4gIGxldCB0b3BQcm9qZWN0ID0gdW5kZWZpbmVkO1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rKysrKysrKysrKysrKysrKysrQ0hBTkdFXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlRG9jdW1lbnRDaGFuZ2UpO1xuICBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENoYW5nZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwicHJvamVjdC1leHBhbmRlZC10aXRsZVwiKSB7XG4gICAgICBjaGFuZ2VQcm9qZWN0VGl0bGUoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1leHBhbmRlZFwiKSkge1xuICAgICAgc2F2ZVRhc2tEYXRhKGV2ZW50KTtcbiAgICB9XG4gIH1cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rKysrKysrKysrKysrKysrKysrK0tFWVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlRG9jdW1lbnRLZXlVcCk7XG4gIGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5rZXlDb2RlID09PSAxMyAmJiAvL2VudGVyXG4gICAgICBldmVudC5jdHJsS2V5ICYmXG4gICAgICBldmVudC50YXJnZXQuZGF0YXNldC5pc1Rhc2tJbnB1dFxuICAgICkge1xuICAgICAgLy9zYXZlVGFza0RhdGEoZXZlbnQpO1xuICAgICAgY2xvc2VFeHBhbmRlZFRhc2tzKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGV2ZW50LmtleUNvZGUgPT09IDI3IC8vJiYgLy9lc2NhcGVcbiAgICAgIC8vZXZlbnQudGFyZ2V0LmRhdGFzZXQuaXNUYXNrSW5wdXRcbiAgICApIHtcbiAgICAgIGNsb3NlRXhwYW5kZWRUYXNrcygpO1xuICAgIH1cbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKysrKysrKysrKysrKysrKysrKytDTElDS1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gIGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZXZlbnQpIHtcbiAgICAvL2F2b2lkIGNoZWNraW5nIHVubmVjZXNzYXJ5IGNvbmRpdGlvbnNcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuZXhwYW5kZXIpIHtcbiAgICAgIGV4cGFuZFRhc2soZXZlbnQpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJkZWxldGUtdGFza1wiKSB7XG4gICAgICBkZWxldGVUYXNrKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwiY29tcGxldGUtdGFza1wiKSB7XG4gICAgICBjb21wbGV0ZVRhc2soZXZlbnQpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJhZGQtdGFza1wiKSB7XG4gICAgICBjcmVhdGVOZXdUYXNrKCk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcImRlbC1wcm9qZWN0XCIpIHtcbiAgICAgIGRlbGV0ZVByb2plY3QoZXZlbnQpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKSAmJlxuICAgICAgZXZlbnQudGFyZ2V0LmlkICE9PSBcInByb2plY3QtY29udGFpbmVyXCIgJiZcbiAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgIT09IFwiY29tcGxldGUtdGFza1wiXG4gICAgKSB7XG4gICAgICBzZWxlY3RQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwibmV3LXByb2plY3RcIikge1xuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJvdmVyZHVlLXByb2plY3RcIikge1xuICAgICAgb3ZlcmR1ZVBzZXVkb1Byb2plY3QoKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwidG9kYXktcHJvamVjdFwiKSB7XG4gICAgICB0b2RheVBzZXVkb1Byb2plY3QoKTtcbiAgICB9XG4gIH1cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKkZVTkNUSU9OU1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVByb2plY3RUaXRsZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdpbmcgcHJvamVjdCB0aXRsZVwiKTtcbiAgICBpZiAodG9wUHJvamVjdCkge1xuICAgICAgdG9wUHJvamVjdC50aXRsZSA9IGNhcGl0YWxpemUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwibm8gcHJvamVjdCB0byBjaGFuZ2UgdGl0bGUgb2ZcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb3ZlcmR1ZVBzZXVkb1Byb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkub3ZlcmR1ZVBzZXVkb1Byb2plY3QgaW52b2tlZFwiKTtcbiAgICBzdGF0ZS5jbGVhclBzZXVkb1Byb2plY3RzKCk7XG4gICAgY29uc3Qgb3ZlcmR1ZVRhc2tzID0gW107XG4gICAgc3RhdGUuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKGlzUGFzdChlbmRPZkRheSh0YXNrLmR1ZURhdGUpKSkge1xuICAgICAgICAgIG92ZXJkdWVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzdGF0ZS5jcmVhdGVQcm9qZWN0KFwiT3ZlcmR1ZSB0YXNrc1wiLCBvdmVyZHVlVGFza3MsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9kYXlQc2V1ZG9Qcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLnRvZGF5UHNldWRvUHJvamVjdCBpbnZva2VkXCIpO1xuICAgIHN0YXRlLmNsZWFyUHNldWRvUHJvamVjdHMoKTtcbiAgICBjb25zdCB0b2RheVRhc2tzID0gW107XG4gICAgc3RhdGUuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKGlzVG9kYXkodGFzay5kdWVEYXRlKSkge1xuICAgICAgICAgIHRvZGF5VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc3RhdGUuY3JlYXRlUHJvamVjdChcIlRhc2tzIGZvciB0b2RheVwiLCB0b2RheVRhc2tzLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkuY3JlYXRlTmV3UHJvamVjdCBpbnZva2VkXCIpO1xuICAgIHN0YXRlLmNyZWF0ZVByb2plY3QoXCJOZXcgcHJvamVjdFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdFByb2plY3QoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSS5zZWxlY3RQcm9qZWN0IGludm9rZWRcIik7XG4gICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICAgIHN0YXRlLnNlbGVjdFByb2plY3QocHJvamVjdElkKTtcbiAgICBzdGF0ZS5jbGVhclBzZXVkb1Byb2plY3RzKCk7XG4gICAgcmVmcmVzaCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChldmVudCkge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gc3RhdGUuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcbiAgICBpZiAoXG4gICAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgICBjb25maXJtKGBQbGVhc2UgY29uZmlybSByZW1vdmluZyBcIiR7dGFyZ2V0UHJvamVjdC50aXRsZX1cIiBwcm9qZWN0YClcbiAgICApIHtcbiAgICAgIHN0YXRlLnJlbW92ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLmNyZWF0ZU5ld1Rhc2sgaW52b2tlZFwiKTtcbiAgICBpZiAoIXRvcFByb2plY3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibm8gcHJvamVjdHMgeWV0XCIpO1xuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIH1cbiAgICAvL3RvcFByb2plY3QubmV3VGFzaygpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB0b3BQcm9qZWN0Lm5ld1Rhc2soKTtcbiAgICBjb25zdCBuZXdUYXNrSWQgPSBuZXdUYXNrLmlkO1xuICAgIHJlZnJlc2goKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWl0ZW1bZGF0YS10YXNrLWlkPScke25ld1Rhc2tJZH0nXT4udGFzay10aXRsZWApXG4gICAgICAuY2xpY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSSBkZWxldGluZyB0YXNrXCIpO1xuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGNvbmZpcm0oXCJQbGVhc2UgY29uZmlybSBkZWxldGluZyB0YXNrXCIpKSB7XG4gICAgICB0b3BQcm9qZWN0LnJlbW92ZVRhc2soZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZVRhc2soZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSSBjb21wbGV0aW5nIHRhc2tcIik7XG4gICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgIGNvbnN0IHRhcmdldFRhc2sgPSBzdGF0ZS5nZXRUYXNrQnlJZCh0YXNrSWQpO1xuICAgIHRhcmdldFRhc2suaXNDb21wbGV0ZWQgPSAhdGFyZ2V0VGFzay5pc0NvbXBsZXRlZDtcbiAgICByZWZyZXNoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlVGFza0RhdGEoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSSBzYXZpbmcgdGFzayBkYXRhXCIpO1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICBjb25zdCB0YXJnZXRUYXNrID0gc3RhdGUuZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICBjb25zdCBpbnB1dHMgPSBldmVudC50YXJnZXRcbiAgICAgIC5jbG9zZXN0KFwiLnRhc2stZXhwYW5kZWRcIilcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsc2VsZWN0LHRleHRhcmVhXCIpO1xuICAgIGlucHV0cy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZmllbGRUeXBlID0gZmllbGQuZGF0YXNldC50eXBlO1xuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgIHRhcmdldFRhc2tbZmllbGRUeXBlXSA9IGNhcGl0YWxpemUoZmllbGQudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgICAgIHRhcmdldFRhc2tbZmllbGRUeXBlXSA9IGZpZWxkLnZhbHVlQXNEYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0VGFza1tmaWVsZFR5cGVdID0gZmllbGQudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVmcmVzaCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhwYW5kVGFzayhldmVudCkge1xuICAgIC8vaWYgY2FsbGVkIG5vdCBmcm9tIGluc2lkZSBvZiBhbHJlYWR5IGV4cGFuZGVkIHRhc2s6XG4gICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIi50YXNrLWl0ZW06aGFzKHRleHRhcmVhKVwiKSkge1xuICAgICAgY2xvc2VFeHBhbmRlZFRhc2tzKCk7XG4gICAgICBjb25zdCB0YXJnZXRUeXBlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICAgIGxldCB0YXJnZXRGaWVsZCA9IFwiXCI7XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2staXRlbVwiKTtcbiAgICAgIGNvbnN0IHRhc2tFeHBhbmRlZCA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1leHBhbmRlZFwiKTtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICAgIGNvbnN0IHRhc2sgPSBzdGF0ZS5nZXRUYXNrQnlJZCh0YXNrSWQpO1xuICAgICAgdGFza0V4cGFuZGVkLmFwcGVuZENoaWxkKFRhc2tFeHBhbmRlZCh0YXNrKSk7XG4gICAgICBzd2l0Y2ggKHRhcmdldFR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgICAgICB0YXJnZXRGaWVsZCA9IFwiLmRlc2NyaXB0aW9uLXRleHRhcmVhXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgdGFyZ2V0RmllbGQgPSBcIi5kYXRlLWlucHV0XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgICAgIHRhcmdldEZpZWxkID0gXCIucHJpb3JpdHktaW5wdXRcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0YXJnZXRGaWVsZCA9IFwiLnRpdGxlLWlucHV0XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0YXNrRXhwYW5kZWQucXVlcnlTZWxlY3Rvcih0YXJnZXRGaWVsZCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUV4cGFuZGVkVGFza3MoKSB7XG4gICAgY29uc3QgZXhwYW5kZWREaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWV4cGFuZGVkXCIpO1xuICAgIGV4cGFuZGVkRGl2cy5mb3JFYWNoKChkaXYpID0+IChkaXYuaW5uZXJIVE1MID0gXCJcIikpO1xuICB9XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8tLS0tLS0tLS0tLS0tLS0tLVJFRlJFU0hcbiAgZnVuY3Rpb24gcmVmcmVzaChleGNlcHRpb24pIHtcbiAgICAvL2RvZXMgaXQgc3RpbGwgbmVlZCBleGNlcHRpb24/XG4gICAgY29uc29sZS5sb2coXCJHVUkucmVmcmVzaCBpbnZva2VkXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XG4gICAgdG9wUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1swXTtcbiAgICAvL2lmIChleGNlcHRpb24gIT09IFwiZXhjZXB0VGFza3NcIikge1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb21wbGV0ZWRUYXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYgKCF0b3BQcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJHVUkucmVmcmVzaDogbm8gcHJvamVjdHMgYXZhaWxhYmxlXCIpO1xuICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gXCJMZXQncyBzdGFydCBhIG5ldyBwcm9qZWN0IVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSB0b3BQcm9qZWN0LnRpdGxlO1xuICAgICAgaWYgKHRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgICAgcHJvamVjdFRpdGxlLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RUaXRsZS5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgdGFzayBvZiB0b3BQcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gVGFza0NvbXBvbmVudCh0YXNrKTtcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvL31cbiAgICBhZGRCdXR0b25Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2stYnRuXCIpO1xuICAgICAgYWRkVGFza0J1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImFkZC10YXNrXCI7XG4gICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCB0YXNrXCI7XG4gICAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgfVxuXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGN1cnJlbnRQcm9qZWN0cykge1xuICAgICAgaWYgKCFwcm9qZWN0LmlzUHNldWRvKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gUHJvamVjdENvbXBvbmVudChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgIC8vaWYgKHRydWUpIHtcbiAgICAgIHN0YXRlLnN5bmNTdG9yYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWZyZXNoLFxuICAgIGNyZWF0ZU5ld1Rhc2ssXG4gICAgLy9cbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5HVUkucmVmcmVzaCgpO1xuXG4vKiBmdW5jdGlvbiBjb3JyZWN0RGF0ZXMoKSB7XG4gIGZvciAobGV0IHByb2plY3Qgb2Ygc3RhdGUuZ2V0UHJvamVjdHMoKSkge1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgaWYgKHRhc2suZHVlRGF0ZSAmJiB0YXNrLmR1ZURhdGUuZ2V0RnVsbFllYXIoKSA9PT0gMTk3MCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmR1ZURhdGUpO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0ZS5zeW5jU3RvcmFnZSgpO1xufVxuY29ycmVjdERhdGVzKCk7ICovXG4iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=