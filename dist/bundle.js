/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// extracted by mini-css-extract-plugin


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
  isCompleted = false,
  isExpanded = false
) {
  const _id = (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)();
  let _projectId = projectId;
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _isCompleted = isCompleted;
  let _isExpanded = isExpanded;

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
    get isExpanded() {
      return _isExpanded;
    },
    set isExpanded(newIsExpanded) {
      _isExpanded = newIsExpanded;
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
      refresh();
    } else if (
      event.keyCode === 27 //&& //escape
      //event.target.dataset.isTaskInput
    ) {
      closeExpandedTasks();
      refresh();
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
    refresh(event);
  }

  function expandTask(event) {
    //if called not from inside of already expanded task:
    //if (true || !event.target.closest(".task-item:has(textarea)")) {
    closeExpandedTasks();
    const taskId = event.target.dataset.taskId;
    const task = state.getTaskById(taskId);
    task.isExpanded = true;

    refresh(event);

    /* taskExpanded.appendChild(TaskExpanded(task));
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
      taskExpanded.querySelector(targetField).focus(); */
    //}
  }

  function closeExpandedTasks() {
    //take project as input, then go through tasks and set isExpanded
    //on them to false
    //Then call refresh() to turn DOM in compliance to state
    topProject.tasks.forEach((task) => (task.isExpanded = false));
    //refresh()
    /* const expandedDivs = document.querySelectorAll(".task-expanded");
    expandedDivs.forEach((div) => (div.innerHTML = "")); */
  }
  //////////////////////////////////-----------------REFRESH
  function refresh(event) {
    console.log("GUI.refresh invoked");

    const projectsContainer = document.querySelector(".project-container");
    const projectTitle = document.querySelector(".project-expanded-title");
    const taskContainer = document.querySelector(".task-container");
    const completedTaskContainer = document.querySelector(
      ".completed-task-container"
    );
    const addButtonContainer = document.querySelector(".add-container");

    const currentProjects = state.getProjects();
    topProject = currentProjects[0];
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

        const taskExpanded = taskElement.querySelector(".task-expanded");
        if (task.isExpanded) {
          console.log("expansive!");
          taskExpanded.appendChild((0,_TaskComponent__WEBPACK_IMPORTED_MODULE_2__.TaskExpanded)(task));
          const targetType = event.target.dataset.type;
          let targetField = "";
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
        } else {
          taskExpanded.innerHTML = "";
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUN2Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNnQztBQUNjOztBQUUvQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S3VFO0FBQ3BDOztBQUU5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQU87QUFDN0IscUJBQXFCLG9EQUFrQjtBQUN2QztBQUNBLEtBQUs7QUFDTCx1QkFBdUIsa0RBQVU7QUFDakMsNkJBQTZCLG9EQUFNLENBQUMsb0RBQVE7QUFDNUM7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVFBLFdBQVcsU0FBUztBQUNDO0FBQ0s7QUFDb0M7QUFDOUI7QUFDc0I7QUFDRDs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBTztBQUM5QjtBQUNBO0FBQ0EsZUFBZSxpREFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU0s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VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkhvdXJzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldFF1YXJ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pbnRsRm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Byb2plY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL1Rhc2tDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXG59O1xudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZkRheVJpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fREFZKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IGdldFF1YXJ0ZXIgZnJvbSBcIi4uL2dldFF1YXJ0ZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVyc1xuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBxdWFydGVycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHF1YXJ0ZXJzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIHF1YXJ0ZXJzIGFyZSBiZXR3ZWVuIDMxIERlY2VtYmVyIDIwMTMgYW5kIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDIwMTMsIDExLCAzMSlcbiAqIClcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIHF1YXJ0ZXJEaWZmID0gZ2V0UXVhcnRlcihkYXRlTGVmdCkgLSBnZXRRdWFydGVyKGRhdGVSaWdodCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDQgKyBxdWFydGVyRGlmZjtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHdlZWtzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciB3ZWVrcyBhcmUgYmV0d2VlbiA1IEp1bHkgMjAxNCBhbmQgMjAgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMjApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCA1KVxuICogKVxuICogLy89PiAzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksXG4gKiAvLyBob3cgbWFueSBjYWxlbmRhciB3ZWVrcyBhcmUgYmV0d2VlbiA1IEp1bHkgMjAxNCBhbmQgMjAgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMjApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCA1KSxcbiAqICAgeyB3ZWVrU3RhcnRzT246IDEgfVxuICogKVxuICogLy89PiAyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZXZWVrTGVmdCA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgc3RhcnRPZldlZWtSaWdodCA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mV2Vla0xlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mV2Vla0xlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mV2Vla1JpZ2h0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZldlZWtSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSyk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHllYXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgeWVhcnMgYXJlIGJldHdlZW4gMzEgRGVjZW1iZXIgMjAxMyBhbmQgMTEgRmVicnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMjAxMywgMTEsIDMxKVxuICogKVxuICogLy89PiAyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Ib3Vyc1xuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgaG91cnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgaG91cnMgYXJlIGJldHdlZW4gMiBKdWx5IDIwMTQgMDY6NTA6MDAgYW5kIDIgSnVseSAyMDE0IDE5OjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluSG91cnMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE5LCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgNTApXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyBtaWxsaXNlY29uZHNJbkhvdXI7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbnV0ZXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHNpZ25lZCBudW1iZXIgb2YgZnVsbCAocm91bmRlZCB0b3dhcmRzIDApIG1pbnV0ZXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbnV0ZXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWludXRlcyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAxMjowNzo1OSBhbmQgMiBKdWx5IDIwMTQgMTI6MjA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgNywgNTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbnV0ZXMgYXJlIGJldHdlZW4gMTA6MDE6NTkgYW5kIDEwOjAwOjAwXG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDAwLCAwLCAxLCAxMCwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMDAsIDAsIDEsIDEwLCAxLCA1OSlcbiAqIClcbiAqIC8vPT4gLTFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaW51dGVzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5NaW51dGU7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRRdWFydGVyXG4gKiBAY2F0ZWdvcnkgUXVhcnRlciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIHllYXIgcXVhcnRlciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgeWVhciBxdWFydGVyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHF1YXJ0ZXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBxdWFydGVyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0UXVhcnRlcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gM1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFF1YXJ0ZXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgcXVhcnRlciA9IE1hdGguZmxvb3IoZGF0ZS5nZXRNb250aCgpIC8gMykgKyAxO1xuICByZXR1cm4gcXVhcnRlcjtcbn0iLCJpbXBvcnQgeyBzZWNvbmRzSW5EYXksIHNlY29uZHNJbkhvdXIsIHNlY29uZHNJbk1pbnV0ZSwgc2Vjb25kc0luTW9udGgsIHNlY29uZHNJblF1YXJ0ZXIsIHNlY29uZHNJbldlZWssIHNlY29uZHNJblllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Ib3VycyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluSG91cnMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaW51dGVzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaW51dGVzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGludGxGb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXRzIGRpc3RhbmNlIGJldHdlZW4gdHdvIGRhdGVzIGluIGEgaHVtYW4tcmVhZGFibGUgZm9ybWF0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRhdGVzIGFuZCBmb3JtYXRzIGl0IGFzIGEgaHVtYW4tcmVhZGFibGUgc3RyaW5nLlxuICpcbiAqIFRoZSBmdW5jdGlvbiB3aWxsIHBpY2sgdGhlIG1vc3QgYXBwcm9wcmlhdGUgdW5pdCBkZXBlbmRpbmcgb24gdGhlIGRpc3RhbmNlIGJldHdlZW4gZGF0ZXMuIEZvciBleGFtcGxlLCBpZiB0aGUgZGlzdGFuY2UgaXMgYSBmZXcgaG91cnMsIGl0IG1pZ2h0IHJldHVybiBgeCBob3Vyc2AuIElmIHRoZSBkaXN0YW5jZSBpcyBhIGZldyBtb250aHMsIGl0IG1pZ2h0IHJldHVybiBgeCBtb250aHNgLlxuICpcbiAqIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgdW5pdCB0byBmb3JjZSB1c2luZyBpdCByZWdhcmRsZXNzIG9mIHRoZSBkaXN0YW5jZSB0byBnZXQgYSByZXN1bHQgbGlrZSBgMTIzNDU2IGhvdXJzYC5cbiAqXG4gKiBTZWUgdGhlIHRhYmxlIGJlbG93IGZvciB0aGUgdW5pdCBwaWNraW5nIGxvZ2ljOlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAocGFzdCkgIHwgUmVzdWx0IChmdXR1cmUpIHxcbiAqIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgMCBzZWNvbmRzICAgICAgICAgICAgICB8IG5vdyAgICAgICAgICAgIHwgbm93ICAgICAgICAgICAgIHxcbiAqIHwgMS01OSBzZWNvbmRzICAgICAgICAgICB8IFggc2Vjb25kcyBhZ28gIHwgaW4gWCBzZWNvbmRzICAgIHxcbiAqIHwgMS01OSBtaW51dGVzICAgICAgICAgICB8IFggbWludXRlcyBhZ28gIHwgaW4gWCBtaW51dGVzICAgIHxcbiAqIHwgMS0yMyBob3VycyAgICAgICAgICAgICB8IFggaG91cnMgYWdvICAgIHwgaW4gWCBob3VycyAgICAgIHxcbiAqIHwgMSBkYXkgICAgICAgICAgICAgICAgICB8IHllc3RlcmRheSAgICAgIHwgdG9tb3Jyb3cgICAgICAgIHxcbiAqIHwgMi02IGRheXMgICAgICAgICAgICAgICB8IFggZGF5cyBhZ28gICAgIHwgaW4gWCBkYXlzICAgICAgIHxcbiAqIHwgNyBkYXlzICAgICAgICAgICAgICAgICB8IGxhc3Qgd2VlayAgICAgIHwgbmV4dCB3ZWVrICAgICAgIHxcbiAqIHwgOCBkYXlzLTEgbW9udGggICAgICAgICB8IFggd2Vla3MgYWdvICAgIHwgaW4gWCB3ZWVrcyAgICAgIHxcbiAqIHwgMSBtb250aCAgICAgICAgICAgICAgICB8IGxhc3QgbW9udGggICAgIHwgbmV4dCBtb250aCAgICAgIHxcbiAqIHwgMi0zIG1vbnRocyAgICAgICAgICAgICB8IFggbW9udGhzIGFnbyAgIHwgaW4gWCBtb250aHMgICAgIHxcbiAqIHwgMSBxdWFydGVyICAgICAgICAgICAgICB8IGxhc3QgcXVhcnRlciAgIHwgbmV4dCBxdWFydGVyICAgIHxcbiAqIHwgMi0zIHF1YXJ0ZXJzICAgICAgICAgICB8IFggcXVhcnRlcnMgYWdvIHwgaW4gWCBxdWFydGVycyAgIHxcbiAqIHwgMSB5ZWFyICAgICAgICAgICAgICAgICB8IGxhc3QgeWVhciAgICAgIHwgbmV4dCB5ZWFyICAgICAgIHxcbiAqIHwgMisgeWVhcnMgICAgICAgICAgICAgICB8IFggeWVhcnMgYWdvICAgIHwgaW4gWCB5ZWFycyAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMudW5pdF0gLSBmb3JtYXRzIHRoZSBkaXN0YW5jZSB3aXRoIHRoZSBnaXZlbiB1bml0ICgneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcpLlxuICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IFtvcHRpb25zLmxvY2FsZV0gLSB0aGUgbG9jYWxlIHRvIHVzZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVNYXRjaGVyPSdiZXN0IGZpdCddIC0gdGhlIGxvY2FsZSBtYXRjaGluZyBhbGdvcml0aG0gdG8gdXNlLiBPdGhlciB2YWx1ZTogJ2xvb2t1cCcuXG4gKiBTZWUgTUROIGZvciBkZXRhaWxzIFtMb2NhbGUgaWRlbnRpZmljYXRpb24gYW5kIG5lZ290aWF0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsI2xvY2FsZV9pZGVudGlmaWNhdGlvbl9hbmRfbmVnb3RpYXRpb24pXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubnVtZXJpYz0nYXV0byddIC0gdGhlIG91dHB1dCBtZXNzYWdlIGZvcm1hdC4gVGhlIHZhbHVlcyBhcmUgJ2F1dG8nIChlLmcuIGB5ZXN0ZXJkYXlgKSwgJ2Fsd2F5cycoZS5nLiBgMSBkYXkgYWdvYCkuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc3R5bGU9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIHJlc3VsdC4gVGhlIHZhbHVlcyBhcmU6ICdsb25nJyAoZS5nLiBgMSBtb250aGApLCAnc2hvcnQnIChlLmcuICdpbiAxIG1vLicpLCAnbmFycm93JyAoZS5nLiAnaW4gMSBtby4nKS5cbiAqIFRoZSBuYXJyb3cgb25lIGNvdWxkIGJlIHNpbWlsYXIgdG8gdGhlIHNob3J0IG9uZSBmb3Igc29tZSBsb2NhbGVzLlxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzIGFjY29yZGluZyB0byBsYW5ndWFnZS1zZW5zaXRpdmUgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nLlxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnVuaXRgIG11c3Qgbm90IGJlIGludmFsaWQgVW5pdFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IG5vdCBiZSBpbnZhbGlkIGxvY2FsZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlTWF0Y2hlcmAgbXVzdCBub3QgYmUgaW52YWxpZCBsb2NhbGVNYXRjaGVyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5udW1lcmljYCBtdXN0IG5vdCBiZSBpbnZhbGlkIG51bWVyaWNcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnN0eWxlYCBtdXN0IG5vdCBiZSBpbnZhbGlkIHN0eWxlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGRhdGVzIHdoZW4gdGhlIGZpc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kP1xuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApXG4gKiApXG4gKiAvLz0+ICdpbiAxIGhvdXInXG4gKlxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZGF0ZXMgd2hlbiB0aGUgZmlzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kP1xuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApXG4gKiApXG4gKiAvLz0+ICcxIGhvdXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIHVuaXQgb3B0aW9uIHRvIGZvcmNlIHRoZSBmdW5jdGlvbiB0byBvdXRwdXQgdGhlIHJlc3VsdCBpbiBxdWFydGVycy4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJuZXh0IHllYXJcIlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg3LCA2LCA0LCAxMCwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzAsIDApLFxuICogICB7IHVuaXQ6ICdxdWFydGVyJyB9XG4gKiApXG4gKiAvLz0+ICdpbiA1IHF1YXJ0ZXJzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIGxvY2FsZSBvcHRpb24gdG8gZ2V0IHRoZSByZXN1bHQgaW4gU3BhbmlzaC4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJpbiAxIGhvdXJcIi5cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKSxcbiAqICAgeyBsb2NhbGU6ICdlcycgfVxuICogKVxuICogLy89PiAnZGVudHJvIGRlIDEgaG9yYSdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSBudW1lcmljIG9wdGlvbiB0byBmb3JjZSB0aGUgZnVuY3Rpb24gdG8gdXNlIG51bWVyaWMgdmFsdWVzLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcInRvbW9ycm93XCIuXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDUsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIHsgbnVtZXJpYzogJ2Fsd2F5cycgfVxuICogKVxuICogLy89PiAnaW4gMSBkYXknXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgc3R5bGUgb3B0aW9uIHRvIGZvcmNlIHRoZSBmdW5jdGlvbiB0byB1c2Ugc2hvcnQgdmFsdWVzLiBXaXRob3V0IHNldHRpbmcgaXQsIHRoZSBleGFtcGxlIHdvdWxkIHJldHVybiBcImluIDIgeWVhcnNcIi5cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4OCwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgeyBzdHlsZTogJ3Nob3J0JyB9XG4gKiApXG4gKiAvLz0+ICdpbiAyIHlyJ1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRsRm9ybWF0RGlzdGFuY2UoZGF0ZSwgYmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB2YWx1ZSA9IDA7XG4gIHZhciB1bml0O1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGF0ZSk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoYmFzZURhdGUpO1xuXG4gIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudW5pdCkpIHtcbiAgICAvLyBHZXQgdGhlIHVuaXQgYmFzZWQgb24gZGlmZkluU2Vjb25kcyBjYWxjdWxhdGlvbnMgaWYgbm8gdW5pdCBpcyBzcGVjaWZpZWRcbiAgICB2YXIgZGlmZkluU2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7IC8vIFRoZSBzbWFsbGVzdCB1bml0XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5NaW51dGUpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnc2Vjb25kJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luSG91cikge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5NaW51dGVzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICdtaW51dGUnO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5EYXkgJiYgTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKSA8IDEpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5XZWVrICYmICh2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSkgJiYgTWF0aC5hYnModmFsdWUpIDwgNykge1xuICAgICAgdW5pdCA9ICdkYXknO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5Nb250aCkge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICd3ZWVrJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luUXVhcnRlcikge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnbW9udGgnO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlmZkluU2Vjb25kcykgPCBzZWNvbmRzSW5ZZWFyKSB7XG4gICAgICBpZiAoZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA8IDQpIHtcbiAgICAgICAgLy8gVG8gZmlsdGVyIG91dCBjYXNlcyB0aGF0IGFyZSBsZXNzIHRoYW4gYSB5ZWFyIGJ1dCBtYXRjaCA0IHF1YXJ0ZXJzXG4gICAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgICAgdW5pdCA9ICdxdWFydGVyJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgICAgdW5pdCA9ICd5ZWFyJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICd5ZWFyJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gR2V0IHRoZSB2YWx1ZSBpZiB1bml0IGlzIHNwZWNpZmllZFxuICAgIHVuaXQgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudW5pdDtcblxuICAgIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluTWludXRlcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdob3VyJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdkYXknKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICd3ZWVrJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21vbnRoJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdxdWFydGVyJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3llYXInKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHJ0ZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlLCB7XG4gICAgbG9jYWxlTWF0Y2hlcjogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZU1hdGNoZXIsXG4gICAgbnVtZXJpYzogKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5udW1lcmljKSB8fCAnYXV0bycsXG4gICAgc3R5bGU6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zdHlsZVxuICB9KTtcbiAgcmV0dXJuIHJ0Zi5mb3JtYXQodmFsdWUsIHVuaXQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Bhc3QoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdChcbiAgdGl0bGUgPSBcIk5ldyBQcm9qZWN0XCIsXG4gIGlkID0gbmFub2lkKCksXG4gIHRhc2tzID0gW10sXG4gIGlzUHNldWRvID0gZmFsc2Vcbikge1xuICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gIGNvbnN0IF9pZCA9IGlkO1xuICBsZXQgX3Rhc2tzID0gdGFza3M7XG4gIGxldCBfaXNQc2V1ZG8gPSBpc1BzZXVkbztcblxuICBmdW5jdGlvbiBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICBfdGFza3MucHVzaChuZXdUYXNrKTtcbiAgfVxuICBmdW5jdGlvbiBuZXdUYXNrKHRpdGxlKSB7XG4gICAgLy9fdGFza3MucHVzaChUYXNrKF9pZCwgdGl0bGUpKTtcbiAgICBjb25zdCB0YXNrID0gVGFzayhfaWQsIHRpdGxlKTtcbiAgICBfdGFza3MucHVzaCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVUYXNrKGlkKSB7XG4gICAgX3Rhc2tzID0gX3Rhc2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gX2lkO1xuICAgIH0sXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIF90aXRsZTtcbiAgICB9LFxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfSxcbiAgICBnZXQgdGFza3MoKSB7XG4gICAgICByZXR1cm4gX3Rhc2tzO1xuICAgIH0sXG4gICAgc2V0IHRhc2tzKG5ld1Rhc2tzKSB7XG4gICAgICBfdGFza3MgPSBuZXdUYXNrcztcbiAgICB9LFxuICAgIGdldCBpc1BzZXVkbygpIHtcbiAgICAgIHJldHVybiBfaXNQc2V1ZG87XG4gICAgfSxcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgbmV3VGFzayxcbiAgfTtcbn1cblxuLyogZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RDb21wb25lbnQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LmlkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnR5cGUgPSBcInByb2plY3QtY2FyZFwiO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICBpZiAoIXRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICAgIGNvbnN0IHRhc2tMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRhc2tDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQuaWQgPSB0YXNrLmlkO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgIHRhc2tDaGVja2JveC5kYXRhc2V0LnR5cGUgPSBcInRhc2stY29tcGxldGVcIjtcbiAgICAgIHRhc2tMSS5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuICAgICAgdGFza0xJLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrTEkpO1xuICAgIH1cbiAgfVxuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWwtcHJvamVjdC1idG5cIik7XG4gIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBwcm9qZWN0XCI7XG4gIGRlbGV0ZVByb2plY3RCdXR0b24uZGF0YXNldC50eXBlID0gXCJkZWwtcHJvamVjdFwiO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgY29uc3QgZWxlbWVudHMgPSBwcm9qZWN0Q2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkKSk7XG4gIHJldHVybiBwcm9qZWN0Q2FyZDtcbn1cbiAqL1xuIiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RDb21wb25lbnQocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LmlkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnR5cGUgPSBcInByb2plY3QtY2FyZFwiO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICBpZiAoIXRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICAgIGNvbnN0IHRhc2tMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgdGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoYHRhc2staXNDb21wbGV0ZWRgLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICAgICAgdGFza0NoZWNrYm94LnRleHRDb250ZW50ID0gXCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICAgIHRhc2tDaGVja2JveC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gICAgICB0YXNrQ2hlY2tib3guZGF0YXNldC50eXBlID0gXCJjb21wbGV0ZS10YXNrXCI7XG4gICAgICB0YXNrTEkuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgICAgIHRhc2tMSS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0xJKTtcbiAgICB9XG4gIH1cbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsLXByb2plY3QtYnRuXCIpO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgcHJvamVjdFwiO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uLmRhdGFzZXQudHlwZSA9IFwiZGVsLXByb2plY3RcIjtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gIGNvbnN0IGVsZW1lbnRzID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZCkpO1xuICByZXR1cm4gcHJvamVjdENhcmQ7XG59XG4iLCJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayhcbiAgcHJvamVjdElkLFxuICB0aXRsZSA9IFwiRWwgdGFzY29cIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBkdWVEYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcIlwiLFxuICBpc0NvbXBsZXRlZCA9IGZhbHNlLFxuICBpc0V4cGFuZGVkID0gZmFsc2Vcbikge1xuICBjb25zdCBfaWQgPSBuYW5vaWQoKTtcbiAgbGV0IF9wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIGxldCBfaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcbiAgbGV0IF9pc0V4cGFuZGVkID0gaXNFeHBhbmRlZDtcblxuICByZXR1cm4ge1xuICAgIGdldCBpZCgpIHtcbiAgICAgIHJldHVybiBfaWQ7XG4gICAgfSxcbiAgICBnZXQgcHJvamVjdElkKCkge1xuICAgICAgcmV0dXJuIF9wcm9qZWN0SWQ7XG4gICAgfSxcbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gX3RpdGxlO1xuICAgIH0sXG4gICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICBfdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBfZGVzY3JpcHRpb247XG4gICAgfSxcbiAgICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgIF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gX2R1ZURhdGU7XG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgICBfZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gX3ByaW9yaXR5O1xuICAgIH0sXG4gICAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICBfcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9LFxuICAgIGdldCBpc0NvbXBsZXRlZCgpIHtcbiAgICAgIHJldHVybiBfaXNDb21wbGV0ZWQ7XG4gICAgfSxcbiAgICBzZXQgaXNDb21wbGV0ZWQobmV3SXNDb21wbGV0ZWQpIHtcbiAgICAgIF9pc0NvbXBsZXRlZCA9IG5ld0lzQ29tcGxldGVkO1xuICAgIH0sXG4gICAgZ2V0IGlzRXhwYW5kZWQoKSB7XG4gICAgICByZXR1cm4gX2lzRXhwYW5kZWQ7XG4gICAgfSxcbiAgICBzZXQgaXNFeHBhbmRlZChuZXdJc0V4cGFuZGVkKSB7XG4gICAgICBfaXNFeHBhbmRlZCA9IG5ld0lzRXhwYW5kZWQ7XG4gICAgfSxcbiAgfTtcbn1cblxuLyogZXhwb3J0IGZ1bmN0aW9uIFRhc2tDb21wb25lbnQodGFzaykge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcblxuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJpc0NvbXBsZXRlZFwiKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tJbnB1dCh0YXNrLCBcInRpdGxlXCIpKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0lucHV0KHRhc2ssIFwiZGVzY3JpcHRpb25cIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJkdWVEYXRlXCIpKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0lucHV0KHRhc2ssIFwicHJpb3JpdHlcIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrRGVsZXRlQnV0dG9uKHRhc2spKTtcblxuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIFRhc2tJbnB1dCh0YXNrLCBmaWVsZFR5cGUpIHtcbiAgbGV0IGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICBzd2l0Y2ggKGZpZWxkVHlwZSkge1xuICAgIGNhc2UgXCJkdWVEYXRlXCI6XG4gICAgICBpbnB1dFR5cGUgPSBcImRhdGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpc0NvbXBsZXRlZFwiOlxuICAgICAgaW5wdXRUeXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInByaW9yaXR5XCI6XG4gICAgICBpbnB1dFR5cGUgPSBcInNlbGVjdFwiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKGlucHV0VHlwZSA9PT0gXCJzZWxlY3RcIikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIiwgYHRhc2stJHtmaWVsZFR5cGV9YCk7XG4gICAgZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50eXBlID0gZmllbGRUeXBlO1xuICAgIGZvciAobGV0IG9wdGlvbiBvZiBbXCJub3JtYWxcIiwgXCJoaWdoXCIsIFwibG93XCJdKSB7XG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgfVxuICAgIGVsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV07XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlbGVtZW50LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dFwiLCBgdGFzay0ke2ZpZWxkVHlwZX1gKTtcbiAgICAvL2VsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV07XG4gICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdLnJlcGxhY2VBbGwoXCJcXG5cIiwgXCIgXCIpO1xuICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IFwiLi4uXCI7XG4gICAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgICAvLyBkbyBzdHVmZi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZWQ7XG4gICAgfVxuICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IGZpZWxkVHlwZTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAqL1xuXG4vKiBmdW5jdGlvbiBUYXNrRGVsZXRlQnV0dG9uKHRhc2spIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkRlbFwiO1xuICBidXR0b24uZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBidXR0b24uZGF0YXNldC50eXBlID0gXCJkZWxldGUtdGFza1wiO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRGVzY3JpcHRpb25Nb2RhbCh0YXNrKSB7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbW9kYWxDb250YWluZXIuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsLWNvbnRhaW5lclwiO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbFwiKTtcbiAgbW9kYWwuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBtb2RhbC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBtb2RhbC5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsXCI7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5pZCA9IFwiZGVzY3JpcHRpb24tdGV4dGFyZWFcIjtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLXRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHRleHRBcmVhLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHRleHRBcmVhLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbC1idG5cIik7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBzdWJtaXRCdG4uZGF0YXNldC50eXBlID0gXCJtb2RhbC1zYXZlXCI7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZSAoQ3RybCtFbnRlcilcIjtcblxuICBtb2RhbC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICByZXR1cm4gbW9kYWxDb250YWluZXI7XG59ICovXG4iLCJpbXBvcnQgeyBpbnRsRm9ybWF0RGlzdGFuY2UsIGlzVmFsaWQsIGlzUGFzdCwgZW5kT2ZEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFza0NvbXBvbmVudCh0YXNrKSB7XG4gIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpO1xuICB0YXNrRWxlbWVudC5kYXRhc2V0LmV4cGFuZGVyID0gdHJ1ZTtcbiAgdGFza0VsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgdGFza0VsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuXG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VDaGVja2JveCh0YXNrKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VUaXRsZSh0YXNrKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VQcmlvcml0eSh0YXNrKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VOb3RlKHRhc2spKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoTWFrZURhdGUodGFzaykpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChNYWtlRGVsZXRlKHRhc2spKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoTWFrZUNvbnRhaW5lcih0YXNrKSk7XG5cbiAgcmV0dXJuIHRhc2tFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBNYWtlQ2hlY2tib3godGFzaykge1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKGB0YXNrLWlzQ29tcGxldGVkYCwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgY2hlY2tib3gudGV4dENvbnRlbnQgPSB0YXNrLmlzQ29tcGxldGVkXG4gICAgPyBcImNoZWNrX2JveFwiXG4gICAgOiBcImNoZWNrX2JveF9vdXRsaW5lX2JsYW5rXCI7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGVkO1xuICBjaGVja2JveC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBjaGVja2JveC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGNoZWNrYm94LmRhdGFzZXQudHlwZSA9IFwiY29tcGxldGUtdGFza1wiO1xuICByZXR1cm4gY2hlY2tib3g7XG59XG5cbmZ1bmN0aW9uIE1ha2VUaXRsZSh0YXNrKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoYHRhc2stdGl0bGVgKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICB0aXRsZS5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICB0aXRsZS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHRpdGxlLmRhdGFzZXQudHlwZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUuZGF0YXNldC5leHBhbmRlciA9IHRydWU7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gTWFrZVByaW9yaXR5KHRhc2spIHtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgdGFzay1wcmlvcml0eWAsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eSA9PT0gXCJoaWdoXCIgPyBcInByaW9yaXR5X2hpZ2hcIiA6IFwiXCI7XG4gIHByaW9yaXR5LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHByaW9yaXR5LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgcHJpb3JpdHkuZGF0YXNldC50eXBlID0gXCJwcmlvcml0eVwiO1xuICBwcmlvcml0eS5kYXRhc2V0LmV4cGFuZGVyID0gdHJ1ZTtcbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBNYWtlTm90ZSh0YXNrKSB7XG4gIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbm90ZS5jbGFzc0xpc3QuYWRkKGB0YXNrLW5vdGVgLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICBub3RlLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbiA/IFwiZGVzY3JpcHRpb25cIiA6IFwibm90ZV9hZGRcIjsgLy8nZGVzY3JpcHRpb24nIGZvciBmaWxsZWQgbm90ZVxuICBub3RlLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIG5vdGUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBub3RlLmRhdGFzZXQudHlwZSA9IFwibm90ZVwiO1xuICBub3RlLmRhdGFzZXQuZXhwYW5kZXIgPSB0cnVlO1xuICByZXR1cm4gbm90ZTtcbn1cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EQVRFLS0tLURBVEUtLS0tREFURS0tLS1EQVRFXG5mdW5jdGlvbiBNYWtlRGF0ZSh0YXNrKSB7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKGB0YXNrLWRhdGVgKTtcbiAgZGF0ZS5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBkYXRlLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgZGF0ZS5kYXRhc2V0LnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZS5kYXRhc2V0LmV4cGFuZGVyID0gdHJ1ZTtcbiAgaWYgKHRhc2suZHVlRGF0ZSAmJiBpc1ZhbGlkKHRhc2suZHVlRGF0ZSkpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IGludGxGb3JtYXREaXN0YW5jZSh0YXNrLmR1ZURhdGUsIG5ldyBEYXRlKCksIHtcbiAgICAgIHVuaXQ6IFwiZGF5XCIsXG4gICAgfSk7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGNhcGl0YWxpemUoaW50ZXJ2YWwpO1xuICAgIGlmICghdGFzay5pc0NvbXBsZXRlZCAmJiBpc1Bhc3QoZW5kT2ZEYXkodGFzay5kdWVEYXRlKSkpIHtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcIm92ZXJkdWUtdGFza1wiKTtcbiAgICB9IGVsc2UgaWYgKGludGVydmFsID09PSBcInRvZGF5XCIpIHtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcInRvZGF5LXRhc2tcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBcIk5vIGRhdGVcIjtcbiAgfVxuICByZXR1cm4gZGF0ZTtcbn1cblxuZnVuY3Rpb24gTWFrZURlbGV0ZSh0YXNrKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlXCIsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlX2ZvcmV2ZXJcIjtcbiAgYnV0dG9uLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIGJ1dHRvbi5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImRlbGV0ZS10YXNrXCI7XG4gIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIE1ha2VDb250YWluZXIodGFzaykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZXhwYW5kZWRcIik7XG4gIGNvbnRhaW5lci5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBjb250YWluZXIuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBjb250YWluZXIuZGF0YXNldC50eXBlID0gXCJleHBhbmRlZFwiO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2tFeHBhbmRlZCh0YXNrKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIGNvbnN0IGlucHV0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5wdXRCYXIuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXQtY29udGFpbmVyXCIpO1xuICBpbnB1dEJhci5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBpbnB1dEJhci5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGlucHV0QmFyLmFwcGVuZENoaWxkKFRpdGxlSW5wdXQodGFzaykpO1xuICBpbnB1dEJhci5hcHBlbmRDaGlsZChQcmlvcml0eUlucHV0KHRhc2spKTtcbiAgaW5wdXRCYXIuYXBwZW5kQ2hpbGQoRGF0ZUlucHV0KHRhc2spKTtcblxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChpbnB1dEJhcik7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKFRleHRBcmVhKHRhc2spKTtcblxuICBmcmFnbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsc2VsZWN0LHRleHRhcmVhXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LmlzVGFza0lucHV0ID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5mdW5jdGlvbiBUaXRsZUlucHV0KHRhc2spIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZWxlbWVudC50eXBlID0gXCJ0ZXh0XCI7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgdGl0bGUtaW5wdXRgKTtcbiAgZWxlbWVudC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIGVsZW1lbnQuZGF0YXNldC50eXBlID0gXCJ0aXRsZVwiO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gUHJpb3JpdHlJbnB1dCh0YXNrKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LWlucHV0YCk7XG4gIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgZWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGZvciAobGV0IG9wdGlvbiBvZiBbXCJub3JtYWxcIiwgXCJoaWdoXCJdKSB7XG4gICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBvcHRpb247XG4gICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcbiAgICBpZiAob3B0aW9uID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICBvcHRpb25FbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgfVxuICBlbGVtZW50LnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgZWxlbWVudC5kYXRhc2V0LnR5cGUgPSBcInByaW9yaXR5XCI7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBEYXRlSW5wdXQodGFzaykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBlbGVtZW50LnR5cGUgPSBcImRhdGVcIjtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBkYXRlLWlucHV0YCk7XG4gIGlmICh0YXNrLmR1ZURhdGUgJiYgaXNWYWxpZCh0YXNrLmR1ZURhdGUpKSB7XG4gICAgZWxlbWVudC52YWx1ZUFzRGF0ZSA9IHRhc2suZHVlRGF0ZTtcbiAgfVxuICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IFwiZHVlRGF0ZVwiO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gVGV4dEFyZWEodGFzaykge1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuaWQgPSBcImRlc2NyaXB0aW9uLXRleHRhcmVhXCI7XG4gIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0ZXh0QXJlYS5kYXRhc2V0LnR5cGUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIHJldHVybiB0ZXh0QXJlYTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qIGZ1bmN0aW9uIFRhc2tJbnB1dCh0YXNrLCBmaWVsZFR5cGUpIHtcbiAgbGV0IGlucHV0VHlwZSA9IFwidGV4dFwiO1xuICBzd2l0Y2ggKGZpZWxkVHlwZSkge1xuICAgIGNhc2UgXCJkdWVEYXRlXCI6XG4gICAgICBpbnB1dFR5cGUgPSBcImRhdGVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgaW5wdXRUeXBlID0gXCJzZWxlY3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGlmIChpbnB1dFR5cGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7ZmllbGRUeXBlfS1pbnB1dGApO1xuICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IGZpZWxkVHlwZTtcbiAgICBmb3IgKGxldCBvcHRpb24gb2YgW1wibm9ybWFsXCIsIFwiaGlnaFwiXSkge1xuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb247XG4gICAgICBpZiAob3B0aW9uID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICB9XG4gICAgZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVsZW1lbnQudHlwZSA9IGlucHV0VHlwZTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7ZmllbGRUeXBlfS1pbnB1dGApO1xuICAgIC8vZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXTtcbiAgICBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV0ucmVwbGFjZUFsbChcIlxcblwiLCBcIiBcIik7XG4gICAgICBlbGVtZW50LnBsYWNlaG9sZGVyID0gXCIuLi5cIjtcbiAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcbiAgICAgIGlmICh0YXNrLmR1ZURhdGUgJiYgaXNWYWxpZCh0YXNrLmR1ZURhdGUpKSB7XG4gICAgICAgIGVsZW1lbnQudmFsdWVBc0RhdGUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV07XG4gICAgfVxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgZWxlbWVudC5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlZDtcbiAgICB9XG4gICAgZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50eXBlID0gZmllbGRUeXBlO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59ICovXG5cbi8qIGV4cG9ydCBmdW5jdGlvbiBEZXNjcmlwdGlvbk1vZGFsKHRhc2spIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWwtY29udGFpbmVyXCIpO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIG1vZGFsQ29udGFpbmVyLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIG1vZGFsQ29udGFpbmVyLmRhdGFzZXQudHlwZSA9IFwibW9kYWwtY29udGFpbmVyXCI7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsXCIpO1xuICBtb2RhbC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIG1vZGFsLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIG1vZGFsLmRhdGFzZXQudHlwZSA9IFwibW9kYWxcIjtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLmlkID0gXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWwtdGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgdGV4dEFyZWEuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgdGV4dEFyZWEudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLWJ0blwiKTtcbiAgc3VibWl0QnRuLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgc3VibWl0QnRuLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsLXNhdmVcIjtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTYXZlIChDdHJsK0VudGVyKVwiO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIHJldHVybiBtb2RhbENvbnRhaW5lcjtcbn1cbiAqL1xuIiwiLy9pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IHsgVGFza0NvbXBvbmVudCwgVGFza0V4cGFuZGVkIH0gZnJvbSBcIi4vVGFza0NvbXBvbmVudFwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuaW1wb3J0IHsgUHJvamVjdENvbXBvbmVudCB9IGZyb20gXCIuL1Byb2plY3RDb21wb25lbnRcIjtcbmltcG9ydCB7IGlzUGFzdCwgaXNUb2RheSwgZW5kT2ZEYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3Qgc3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgX3Byb2plY3RzID0gW107XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgdGFza3MgPSBbXSwgaXNQc2V1ZG8gPSBmYWxzZSkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUuYWRkUHJvamVjdCBpbnZva2VkXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHRpdGxlLCB1bmRlZmluZWQsIHRhc2tzLCBpc1BzZXVkbyk7XG4gICAgX3Byb2plY3RzLnVuc2hpZnQobmV3UHJvamVjdCk7XG4gICAgR1VJLnJlZnJlc2goKTtcbiAgICBpZiAoIW5ld1Byb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgIEdVSS5jcmVhdGVOZXdUYXNrKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXRlLnJlbW92ZVByb2plY3QgaW52b2tlZFwiKTtcbiAgICBfcHJvamVjdHMgPSBfcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBpZCk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIF9wcm9qZWN0cztcbiAgfVxuICBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgbGV0IGxvYWRlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgICBpZiAobG9hZGVkUHJvamVjdHMgJiYgX3Byb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJsb2FkaW5nIHByb2plY3RzIGZyb20gbG9jYWxzdG9yYWdlXCIpO1xuICAgICAgbG9hZGVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvYWRlZFByb2plY3RzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJub3RoaW5nIHdhcyBsb2FkZWQgZnJvbSBsb2NhbHN0b3JhZ2VcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvYWRlZFByb2plY3RzID0gbG9hZGVkUHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICBsZXQgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdC50aXRsZSwgcHJvamVjdC5pZCwgcHJvamVjdC50YXNrcyk7XG4gICAgICBuZXdQcm9qZWN0LnRhc2tzID0gbmV3UHJvamVjdC50YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgbmV3RHVlRGF0ZSA9IHRhc2suZHVlRGF0ZSA/IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSkgOiBcIlwiO1xuICAgICAgICByZXR1cm4gVGFzayhcbiAgICAgICAgICB0YXNrLnByb2plY3RJZCxcbiAgICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgbmV3RHVlRGF0ZSxcbiAgICAgICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgICAgIHRhc2suaXNDb21wbGV0ZWRcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgfSk7XG4gICAgX3Byb2plY3RzID0gbG9hZGVkUHJvamVjdHM7XG4gIH1cbiAgZnVuY3Rpb24gc2VsZWN0UHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICAvL21vdmVzIHNlbGVjdGVkIHByb2plY3QgdG8gdGhlIHN0YXJ0IG9mIF9wcm9qZWN0cyBhcnJheVxuICAgIGNvbnNvbGUubG9nKFwic3RhdGUuc2VsZWN0UHJvamVjdCBpbnZva2VkXCIpO1xuICAgIGNvbnN0IGluZGV4ID0gX3Byb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICBfcHJvamVjdHMudW5zaGlmdChfcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVswXSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0VGFza0J5SWQodGFza0lkKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZS5nZXRUYXNrQnlJZCBpbnZva2VkXCIpO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgX3Byb2plY3RzKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBwcm9qZWN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldFByb2plY3RCeUlkKHByb2plY3RJZCkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUuZ2V0UHJvamVjdEJ5SWQgaW52b2tlZFwiKTtcbiAgICByZXR1cm4gX3Byb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gIH1cbiAgZnVuY3Rpb24gc3luY1N0b3JhZ2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJ1cGxvYWRpbmcgcHJvamVjdHMgdG8gbG9jYWxTdG9yYWdlXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoX3Byb2plY3RzKSk7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJQc2V1ZG9Qcm9qZWN0cygpIHtcbiAgICBfcHJvamVjdHMgPSBfcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiAhcHJvamVjdC5pc1BzZXVkbyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBsb2FkUHJvamVjdHMsXG4gICAgc2VsZWN0UHJvamVjdCxcbiAgICBzeW5jU3RvcmFnZSxcbiAgICBnZXRUYXNrQnlJZCxcbiAgICBnZXRQcm9qZWN0QnlJZCxcbiAgICBjbGVhclBzZXVkb1Byb2plY3RzLFxuICB9O1xufSkoKTtcblxuc3RhdGUubG9hZFByb2plY3RzKCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IEdVSSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCB0b3BQcm9qZWN0ID0gdW5kZWZpbmVkO1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rKysrKysrKysrKysrKysrKysrQ0hBTkdFXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlRG9jdW1lbnRDaGFuZ2UpO1xuICBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENoYW5nZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwicHJvamVjdC1leHBhbmRlZC10aXRsZVwiKSB7XG4gICAgICBjaGFuZ2VQcm9qZWN0VGl0bGUoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1leHBhbmRlZFwiKSkge1xuICAgICAgc2F2ZVRhc2tEYXRhKGV2ZW50KTtcbiAgICB9XG4gIH1cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rKysrKysrKysrKysrKysrKysrK0tFWVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlRG9jdW1lbnRLZXlVcCk7XG4gIGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5VXAoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5rZXlDb2RlID09PSAxMyAmJiAvL2VudGVyXG4gICAgICBldmVudC5jdHJsS2V5ICYmXG4gICAgICBldmVudC50YXJnZXQuZGF0YXNldC5pc1Rhc2tJbnB1dFxuICAgICkge1xuICAgICAgLy9zYXZlVGFza0RhdGEoZXZlbnQpO1xuICAgICAgY2xvc2VFeHBhbmRlZFRhc2tzKCk7XG4gICAgICByZWZyZXNoKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGV2ZW50LmtleUNvZGUgPT09IDI3IC8vJiYgLy9lc2NhcGVcbiAgICAgIC8vZXZlbnQudGFyZ2V0LmRhdGFzZXQuaXNUYXNrSW5wdXRcbiAgICApIHtcbiAgICAgIGNsb3NlRXhwYW5kZWRUYXNrcygpO1xuICAgICAgcmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKysrKysrKysrKysrKysrKysrKytDTElDS1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRG9jdW1lbnRDbGljayk7XG4gIGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZXZlbnQpIHtcbiAgICAvL2F2b2lkIGNoZWNraW5nIHVubmVjZXNzYXJ5IGNvbmRpdGlvbnNcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuZXhwYW5kZXIpIHtcbiAgICAgIGV4cGFuZFRhc2soZXZlbnQpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJkZWxldGUtdGFza1wiKSB7XG4gICAgICBkZWxldGVUYXNrKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwiY29tcGxldGUtdGFza1wiKSB7XG4gICAgICBjb21wbGV0ZVRhc2soZXZlbnQpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJhZGQtdGFza1wiKSB7XG4gICAgICBjcmVhdGVOZXdUYXNrKCk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcImRlbC1wcm9qZWN0XCIpIHtcbiAgICAgIGRlbGV0ZVByb2plY3QoZXZlbnQpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKSAmJlxuICAgICAgZXZlbnQudGFyZ2V0LmlkICE9PSBcInByb2plY3QtY29udGFpbmVyXCIgJiZcbiAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgIT09IFwiY29tcGxldGUtdGFza1wiXG4gICAgKSB7XG4gICAgICBzZWxlY3RQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwibmV3LXByb2plY3RcIikge1xuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJvdmVyZHVlLXByb2plY3RcIikge1xuICAgICAgb3ZlcmR1ZVBzZXVkb1Byb2plY3QoKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwidG9kYXktcHJvamVjdFwiKSB7XG4gICAgICB0b2RheVBzZXVkb1Byb2plY3QoKTtcbiAgICB9XG4gIH1cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKkZVTkNUSU9OU1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVByb2plY3RUaXRsZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdpbmcgcHJvamVjdCB0aXRsZVwiKTtcbiAgICBpZiAodG9wUHJvamVjdCkge1xuICAgICAgdG9wUHJvamVjdC50aXRsZSA9IGNhcGl0YWxpemUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKFwibm8gcHJvamVjdCB0byBjaGFuZ2UgdGl0bGUgb2ZcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb3ZlcmR1ZVBzZXVkb1Byb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkub3ZlcmR1ZVBzZXVkb1Byb2plY3QgaW52b2tlZFwiKTtcbiAgICBzdGF0ZS5jbGVhclBzZXVkb1Byb2plY3RzKCk7XG4gICAgY29uc3Qgb3ZlcmR1ZVRhc2tzID0gW107XG4gICAgc3RhdGUuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKGlzUGFzdChlbmRPZkRheSh0YXNrLmR1ZURhdGUpKSkge1xuICAgICAgICAgIG92ZXJkdWVUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzdGF0ZS5jcmVhdGVQcm9qZWN0KFwiT3ZlcmR1ZSB0YXNrc1wiLCBvdmVyZHVlVGFza3MsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9kYXlQc2V1ZG9Qcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLnRvZGF5UHNldWRvUHJvamVjdCBpbnZva2VkXCIpO1xuICAgIHN0YXRlLmNsZWFyUHNldWRvUHJvamVjdHMoKTtcbiAgICBjb25zdCB0b2RheVRhc2tzID0gW107XG4gICAgc3RhdGUuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKGlzVG9kYXkodGFzay5kdWVEYXRlKSkge1xuICAgICAgICAgIHRvZGF5VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc3RhdGUuY3JlYXRlUHJvamVjdChcIlRhc2tzIGZvciB0b2RheVwiLCB0b2RheVRhc2tzLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkuY3JlYXRlTmV3UHJvamVjdCBpbnZva2VkXCIpO1xuICAgIHN0YXRlLmNyZWF0ZVByb2plY3QoXCJOZXcgcHJvamVjdFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdFByb2plY3QoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSS5zZWxlY3RQcm9qZWN0IGludm9rZWRcIik7XG4gICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICAgIHN0YXRlLnNlbGVjdFByb2plY3QocHJvamVjdElkKTtcbiAgICBzdGF0ZS5jbGVhclBzZXVkb1Byb2plY3RzKCk7XG4gICAgcmVmcmVzaCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChldmVudCkge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gc3RhdGUuZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcbiAgICBpZiAoXG4gICAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgICBjb25maXJtKGBQbGVhc2UgY29uZmlybSByZW1vdmluZyBcIiR7dGFyZ2V0UHJvamVjdC50aXRsZX1cIiBwcm9qZWN0YClcbiAgICApIHtcbiAgICAgIHN0YXRlLnJlbW92ZVByb2plY3QocHJvamVjdElkKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLmNyZWF0ZU5ld1Rhc2sgaW52b2tlZFwiKTtcbiAgICBpZiAoIXRvcFByb2plY3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibm8gcHJvamVjdHMgeWV0XCIpO1xuICAgICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIH1cbiAgICAvL3RvcFByb2plY3QubmV3VGFzaygpO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB0b3BQcm9qZWN0Lm5ld1Rhc2soKTtcbiAgICBjb25zdCBuZXdUYXNrSWQgPSBuZXdUYXNrLmlkO1xuICAgIHJlZnJlc2goKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC50YXNrLWl0ZW1bZGF0YS10YXNrLWlkPScke25ld1Rhc2tJZH0nXT4udGFzay10aXRsZWApXG4gICAgICAuY2xpY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSSBkZWxldGluZyB0YXNrXCIpO1xuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGNvbmZpcm0oXCJQbGVhc2UgY29uZmlybSBkZWxldGluZyB0YXNrXCIpKSB7XG4gICAgICB0b3BQcm9qZWN0LnJlbW92ZVRhc2soZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZVRhc2soZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSSBjb21wbGV0aW5nIHRhc2tcIik7XG4gICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgIGNvbnN0IHRhcmdldFRhc2sgPSBzdGF0ZS5nZXRUYXNrQnlJZCh0YXNrSWQpO1xuICAgIHRhcmdldFRhc2suaXNDb21wbGV0ZWQgPSAhdGFyZ2V0VGFzay5pc0NvbXBsZXRlZDtcbiAgICByZWZyZXNoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlVGFza0RhdGEoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSSBzYXZpbmcgdGFzayBkYXRhXCIpO1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICBjb25zdCB0YXJnZXRUYXNrID0gc3RhdGUuZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICBjb25zdCBpbnB1dHMgPSBldmVudC50YXJnZXRcbiAgICAgIC5jbG9zZXN0KFwiLnRhc2stZXhwYW5kZWRcIilcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsc2VsZWN0LHRleHRhcmVhXCIpO1xuICAgIGlucHV0cy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZmllbGRUeXBlID0gZmllbGQuZGF0YXNldC50eXBlO1xuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgIHRhcmdldFRhc2tbZmllbGRUeXBlXSA9IGNhcGl0YWxpemUoZmllbGQudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgICAgIHRhcmdldFRhc2tbZmllbGRUeXBlXSA9IGZpZWxkLnZhbHVlQXNEYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0VGFza1tmaWVsZFR5cGVdID0gZmllbGQudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVmcmVzaChldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBleHBhbmRUYXNrKGV2ZW50KSB7XG4gICAgLy9pZiBjYWxsZWQgbm90IGZyb20gaW5zaWRlIG9mIGFscmVhZHkgZXhwYW5kZWQgdGFzazpcbiAgICAvL2lmICh0cnVlIHx8ICFldmVudC50YXJnZXQuY2xvc2VzdChcIi50YXNrLWl0ZW06aGFzKHRleHRhcmVhKVwiKSkge1xuICAgIGNsb3NlRXhwYW5kZWRUYXNrcygpO1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICBjb25zdCB0YXNrID0gc3RhdGUuZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICB0YXNrLmlzRXhwYW5kZWQgPSB0cnVlO1xuXG4gICAgcmVmcmVzaChldmVudCk7XG5cbiAgICAvKiB0YXNrRXhwYW5kZWQuYXBwZW5kQ2hpbGQoVGFza0V4cGFuZGVkKHRhc2spKTtcbiAgICAgIHN3aXRjaCAodGFyZ2V0VHlwZSkge1xuICAgICAgICBjYXNlIFwibm90ZVwiOlxuICAgICAgICAgIHRhcmdldEZpZWxkID0gXCIuZGVzY3JpcHRpb24tdGV4dGFyZWFcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICB0YXJnZXRGaWVsZCA9IFwiLmRhdGUtaW5wdXRcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInByaW9yaXR5XCI6XG4gICAgICAgICAgdGFyZ2V0RmllbGQgPSBcIi5wcmlvcml0eS1pbnB1dFwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRhcmdldEZpZWxkID0gXCIudGl0bGUtaW5wdXRcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRhc2tFeHBhbmRlZC5xdWVyeVNlbGVjdG9yKHRhcmdldEZpZWxkKS5mb2N1cygpOyAqL1xuICAgIC8vfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VFeHBhbmRlZFRhc2tzKCkge1xuICAgIC8vdGFrZSBwcm9qZWN0IGFzIGlucHV0LCB0aGVuIGdvIHRocm91Z2ggdGFza3MgYW5kIHNldCBpc0V4cGFuZGVkXG4gICAgLy9vbiB0aGVtIHRvIGZhbHNlXG4gICAgLy9UaGVuIGNhbGwgcmVmcmVzaCgpIHRvIHR1cm4gRE9NIGluIGNvbXBsaWFuY2UgdG8gc3RhdGVcbiAgICB0b3BQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+ICh0YXNrLmlzRXhwYW5kZWQgPSBmYWxzZSkpO1xuICAgIC8vcmVmcmVzaCgpXG4gICAgLyogY29uc3QgZXhwYW5kZWREaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWV4cGFuZGVkXCIpO1xuICAgIGV4cGFuZGVkRGl2cy5mb3JFYWNoKChkaXYpID0+IChkaXYuaW5uZXJIVE1MID0gXCJcIikpOyAqL1xuICB9XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8tLS0tLS0tLS0tLS0tLS0tLVJFRlJFU0hcbiAgZnVuY3Rpb24gcmVmcmVzaChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLnJlZnJlc2ggaW52b2tlZFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZXhwYW5kZWQtdGl0bGVcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgY29uc3QgY29tcGxldGVkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jb21wbGV0ZWQtdGFzay1jb250YWluZXJcIlxuICAgICk7XG4gICAgY29uc3QgYWRkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcbiAgICB0b3BQcm9qZWN0ID0gY3VycmVudFByb2plY3RzWzBdO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb21wbGV0ZWRUYXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYgKCF0b3BQcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJHVUkucmVmcmVzaDogbm8gcHJvamVjdHMgYXZhaWxhYmxlXCIpO1xuICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gXCJMZXQncyBzdGFydCBhIG5ldyBwcm9qZWN0IVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSB0b3BQcm9qZWN0LnRpdGxlO1xuICAgICAgaWYgKHRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgICAgcHJvamVjdFRpdGxlLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RUaXRsZS5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgdGFzayBvZiB0b3BQcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gVGFza0NvbXBvbmVudCh0YXNrKTtcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgICAgICAgIGNvbXBsZXRlZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tFeHBhbmRlZCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1leHBhbmRlZFwiKTtcbiAgICAgICAgaWYgKHRhc2suaXNFeHBhbmRlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhwYW5zaXZlIVwiKTtcbiAgICAgICAgICB0YXNrRXhwYW5kZWQuYXBwZW5kQ2hpbGQoVGFza0V4cGFuZGVkKHRhc2spKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXRUeXBlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICAgICAgICBsZXQgdGFyZ2V0RmllbGQgPSBcIlwiO1xuICAgICAgICAgIHN3aXRjaCAodGFyZ2V0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgICAgICAgICAgdGFyZ2V0RmllbGQgPSBcIi5kZXNjcmlwdGlvbi10ZXh0YXJlYVwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICAgIHRhcmdldEZpZWxkID0gXCIuZGF0ZS1pbnB1dFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgICAgICAgICB0YXJnZXRGaWVsZCA9IFwiLnByaW9yaXR5LWlucHV0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGFyZ2V0RmllbGQgPSBcIi50aXRsZS1pbnB1dFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFza0V4cGFuZGVkLnF1ZXJ5U2VsZWN0b3IodGFyZ2V0RmllbGQpLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFza0V4cGFuZGVkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRCdXR0b25Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2stYnRuXCIpO1xuICAgICAgYWRkVGFza0J1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImFkZC10YXNrXCI7XG4gICAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCB0YXNrXCI7XG4gICAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgfVxuXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGN1cnJlbnRQcm9qZWN0cykge1xuICAgICAgaWYgKCFwcm9qZWN0LmlzUHNldWRvKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gUHJvamVjdENvbXBvbmVudChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRvcFByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgIHN0YXRlLnN5bmNTdG9yYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWZyZXNoLFxuICAgIGNyZWF0ZU5ld1Rhc2ssXG4gICAgLy9cbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5HVUkucmVmcmVzaCgpO1xuXG4vKiBmdW5jdGlvbiBjb3JyZWN0RGF0ZXMoKSB7XG4gIGZvciAobGV0IHByb2plY3Qgb2Ygc3RhdGUuZ2V0UHJvamVjdHMoKSkge1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgaWYgKHRhc2suZHVlRGF0ZSAmJiB0YXNrLmR1ZURhdGUuZ2V0RnVsbFllYXIoKSA9PT0gMTk3MCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmR1ZURhdGUpO1xuICAgICAgICB0YXNrLmR1ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGF0ZS5zeW5jU3RvcmFnZSgpO1xufVxuY29ycmVjdERhdGVzKCk7ICovXG4iLCJleHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IGxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmV4cG9ydCBsZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmV4cG9ydCBsZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbiIsImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==