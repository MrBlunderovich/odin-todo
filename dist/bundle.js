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
          taskExpanded.classList.add("expanded");
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
          taskExpanded.classList.remove("expanded");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUN2Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNnQztBQUNjOztBQUUvQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S3VFO0FBQ3BDOztBQUU5QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQU87QUFDN0IscUJBQXFCLG9EQUFrQjtBQUN2QztBQUNBLEtBQUs7QUFDTCx1QkFBdUIsa0RBQVU7QUFDakMsNkJBQTZCLG9EQUFNLENBQUMsb0RBQVE7QUFDNUM7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVFBLFdBQVcsU0FBUztBQUNDO0FBQ0s7QUFDb0M7QUFDOUI7QUFDc0I7QUFDRDs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBTztBQUM5QjtBQUNBO0FBQ0EsZUFBZSxpREFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQU0s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Ozs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5Ib3Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbnV0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRRdWFydGVyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaW50bEZvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNQYXN0L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9Qcm9qZWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9UYXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwidmFyIHJvdW5kaW5nTWFwID0ge1xuICBjZWlsOiBNYXRoLmNlaWwsXG4gIHJvdW5kOiBNYXRoLnJvdW5kLFxuICBmbG9vcjogTWF0aC5mbG9vcixcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfSAvLyBNYXRoLnRydW5jIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblxufTtcbnZhciBkZWZhdWx0Um91bmRpbmdNZXRob2QgPSAndHJ1bmMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gbWV0aG9kID8gcm91bmRpbmdNYXBbbWV0aG9kXSA6IHJvdW5kaW5nTWFwW2RlZmF1bHRSb3VuZGluZ01ldGhvZF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCBnZXRRdWFydGVyIGZyb20gXCIuLi9nZXRRdWFydGVyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnNcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHF1YXJ0ZXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBxdWFydGVyc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBxdWFydGVycyBhcmUgYmV0d2VlbiAzMSBEZWNlbWJlciAyMDEzIGFuZCAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgyMDEzLCAxMSwgMzEpXG4gKiApXG4gKiAvLz0+IDNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhclF1YXJ0ZXJzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBxdWFydGVyRGlmZiA9IGdldFF1YXJ0ZXIoZGF0ZUxlZnQpIC0gZ2V0UXVhcnRlcihkYXRlUmlnaHQpO1xuICByZXR1cm4geWVhckRpZmYgKiA0ICsgcXVhcnRlckRpZmY7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrc1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3NcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgd2Vla3MgYXJlIGJldHdlZW4gNSBKdWx5IDIwMTQgYW5kIDIwIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgNSlcbiAqIClcbiAqIC8vPT4gM1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LFxuICogLy8gaG93IG1hbnkgY2FsZW5kYXIgd2Vla3MgYXJlIGJldHdlZW4gNSBKdWx5IDIwMTQgYW5kIDIwIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgNSksXG4gKiAgIHsgd2Vla1N0YXJ0c09uOiAxIH1cbiAqIClcbiAqIC8vPT4gMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBzdGFydE9mV2Vla0xlZnQgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIHN0YXJ0T2ZXZWVrUmlnaHQgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZldlZWtMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZldlZWtMZWZ0KTtcbiAgdmFyIHRpbWVzdGFtcFJpZ2h0ID0gc3RhcnRPZldlZWtSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZXZWVrUmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFyc1xuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHllYXJzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIHllYXJzIGFyZSBiZXR3ZWVuIDMxIERlY2VtYmVyIDIwMTMgYW5kIDExIEZlYnJ1YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKFxuICogICBuZXcgRGF0ZSgyMDE1LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDIwMTMsIDExLCAzMSlcbiAqIClcbiAqIC8vPT4gMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluSG91cnNcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGhvdXJzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGhvdXJzIGFyZSBiZXR3ZWVuIDIgSnVseSAyMDE0IDA2OjUwOjAwIGFuZCAyIEp1bHkgMjAxNCAxOTowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkhvdXJzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxOSwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDYsIDUwKVxuICogKVxuICogLy89PiAxMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5Ib3VyO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWludXRlc1xuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaW51dGVzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBzaWduZWQgbnVtYmVyIG9mIGZ1bGwgKHJvdW5kZWQgdG93YXJkcyAwKSBtaW51dGVzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaW51dGVzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbnV0ZXMgYXJlIGJldHdlZW4gMiBKdWx5IDIwMTQgMTI6MDc6NTkgYW5kIDIgSnVseSAyMDE0IDEyOjIwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWludXRlcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDcsIDU5KVxuICogKVxuICogLy89PiAxMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaW51dGVzIGFyZSBiZXR3ZWVuIDEwOjAxOjU5IGFuZCAxMDowMDowMFxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWludXRlcyhcbiAqICAgbmV3IERhdGUoMjAwMCwgMCwgMSwgMTAsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDAwLCAwLCAxLCAxMCwgMSwgNTkpXG4gKiApXG4gKiAvLz0+IC0xXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWludXRlcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luTWludXRlO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0UXVhcnRlclxuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSB5ZWFyIHF1YXJ0ZXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHllYXIgcXVhcnRlciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBxdWFydGVyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggcXVhcnRlciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFF1YXJ0ZXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRRdWFydGVyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmZsb29yKGRhdGUuZ2V0TW9udGgoKSAvIDMpICsgMTtcbiAgcmV0dXJuIHF1YXJ0ZXI7XG59IiwiaW1wb3J0IHsgc2Vjb25kc0luRGF5LCBzZWNvbmRzSW5Ib3VyLCBzZWNvbmRzSW5NaW51dGUsIHNlY29uZHNJbk1vbnRoLCBzZWNvbmRzSW5RdWFydGVyLCBzZWNvbmRzSW5XZWVrLCBzZWNvbmRzSW5ZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluSG91cnMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkhvdXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTWludXRlcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWludXRlcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpbnRsRm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0cyBkaXN0YW5jZSBiZXR3ZWVuIHR3byBkYXRlcyBpbiBhIGh1bWFuLXJlYWRhYmxlIGZvcm1hdFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkYXRlcyBhbmQgZm9ybWF0cyBpdCBhcyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZy5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gd2lsbCBwaWNrIHRoZSBtb3N0IGFwcHJvcHJpYXRlIHVuaXQgZGVwZW5kaW5nIG9uIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGRhdGVzLiBGb3IgZXhhbXBsZSwgaWYgdGhlIGRpc3RhbmNlIGlzIGEgZmV3IGhvdXJzLCBpdCBtaWdodCByZXR1cm4gYHggaG91cnNgLiBJZiB0aGUgZGlzdGFuY2UgaXMgYSBmZXcgbW9udGhzLCBpdCBtaWdodCByZXR1cm4gYHggbW9udGhzYC5cbiAqXG4gKiBZb3UgY2FuIGFsc28gc3BlY2lmeSBhIHVuaXQgdG8gZm9yY2UgdXNpbmcgaXQgcmVnYXJkbGVzcyBvZiB0aGUgZGlzdGFuY2UgdG8gZ2V0IGEgcmVzdWx0IGxpa2UgYDEyMzQ1NiBob3Vyc2AuXG4gKlxuICogU2VlIHRoZSB0YWJsZSBiZWxvdyBmb3IgdGhlIHVuaXQgcGlja2luZyBsb2dpYzpcbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgKHBhc3QpICB8IFJlc3VsdCAoZnV0dXJlKSB8XG4gKiB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IDAgc2Vjb25kcyAgICAgICAgICAgICAgfCBub3cgICAgICAgICAgICB8IG5vdyAgICAgICAgICAgICB8XG4gKiB8IDEtNTkgc2Vjb25kcyAgICAgICAgICAgfCBYIHNlY29uZHMgYWdvICB8IGluIFggc2Vjb25kcyAgICB8XG4gKiB8IDEtNTkgbWludXRlcyAgICAgICAgICAgfCBYIG1pbnV0ZXMgYWdvICB8IGluIFggbWludXRlcyAgICB8XG4gKiB8IDEtMjMgaG91cnMgICAgICAgICAgICAgfCBYIGhvdXJzIGFnbyAgICB8IGluIFggaG91cnMgICAgICB8XG4gKiB8IDEgZGF5ICAgICAgICAgICAgICAgICAgfCB5ZXN0ZXJkYXkgICAgICB8IHRvbW9ycm93ICAgICAgICB8XG4gKiB8IDItNiBkYXlzICAgICAgICAgICAgICAgfCBYIGRheXMgYWdvICAgICB8IGluIFggZGF5cyAgICAgICB8XG4gKiB8IDcgZGF5cyAgICAgICAgICAgICAgICAgfCBsYXN0IHdlZWsgICAgICB8IG5leHQgd2VlayAgICAgICB8XG4gKiB8IDggZGF5cy0xIG1vbnRoICAgICAgICAgfCBYIHdlZWtzIGFnbyAgICB8IGluIFggd2Vla3MgICAgICB8XG4gKiB8IDEgbW9udGggICAgICAgICAgICAgICAgfCBsYXN0IG1vbnRoICAgICB8IG5leHQgbW9udGggICAgICB8XG4gKiB8IDItMyBtb250aHMgICAgICAgICAgICAgfCBYIG1vbnRocyBhZ28gICB8IGluIFggbW9udGhzICAgICB8XG4gKiB8IDEgcXVhcnRlciAgICAgICAgICAgICAgfCBsYXN0IHF1YXJ0ZXIgICB8IG5leHQgcXVhcnRlciAgICB8XG4gKiB8IDItMyBxdWFydGVycyAgICAgICAgICAgfCBYIHF1YXJ0ZXJzIGFnbyB8IGluIFggcXVhcnRlcnMgICB8XG4gKiB8IDEgeWVhciAgICAgICAgICAgICAgICAgfCBsYXN0IHllYXIgICAgICB8IG5leHQgeWVhciAgICAgICB8XG4gKiB8IDIrIHllYXJzICAgICAgICAgICAgICAgfCBYIHllYXJzIGFnbyAgICB8IGluIFggeWVhcnMgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnVuaXRdIC0gZm9ybWF0cyB0aGUgZGlzdGFuY2Ugd2l0aCB0aGUgZ2l2ZW4gdW5pdCAoJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnKS5cbiAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBbb3B0aW9ucy5sb2NhbGVdIC0gdGhlIGxvY2FsZSB0byB1c2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubG9jYWxlTWF0Y2hlcj0nYmVzdCBmaXQnXSAtIHRoZSBsb2NhbGUgbWF0Y2hpbmcgYWxnb3JpdGhtIHRvIHVzZS4gT3RoZXIgdmFsdWU6ICdsb29rdXAnLlxuICogU2VlIE1ETiBmb3IgZGV0YWlscyBbTG9jYWxlIGlkZW50aWZpY2F0aW9uIGFuZCBuZWdvdGlhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bCNsb2NhbGVfaWRlbnRpZmljYXRpb25fYW5kX25lZ290aWF0aW9uKVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm51bWVyaWM9J2F1dG8nXSAtIHRoZSBvdXRwdXQgbWVzc2FnZSBmb3JtYXQuIFRoZSB2YWx1ZXMgYXJlICdhdXRvJyAoZS5nLiBgeWVzdGVyZGF5YCksICdhbHdheXMnKGUuZy4gYDEgZGF5IGFnb2ApLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnN0eWxlPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSByZXN1bHQuIFRoZSB2YWx1ZXMgYXJlOiAnbG9uZycgKGUuZy4gYDEgbW9udGhgKSwgJ3Nob3J0JyAoZS5nLiAnaW4gMSBtby4nKSwgJ25hcnJvdycgKGUuZy4gJ2luIDEgbW8uJykuXG4gKiBUaGUgbmFycm93IG9uZSBjb3VsZCBiZSBzaW1pbGFyIHRvIHRoZSBzaG9ydCBvbmUgZm9yIHNvbWUgbG9jYWxlcy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3JkcyBhY2NvcmRpbmcgdG8gbGFuZ3VhZ2Utc2Vuc2l0aXZlIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZy5cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy51bml0YCBtdXN0IG5vdCBiZSBpbnZhbGlkIFVuaXRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBub3QgYmUgaW52YWxpZCBsb2NhbGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZU1hdGNoZXJgIG11c3Qgbm90IGJlIGludmFsaWQgbG9jYWxlTWF0Y2hlclxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubnVtZXJpY2AgbXVzdCBub3QgYmUgaW52YWxpZCBudW1lcmljXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5zdHlsZWAgbXVzdCBub3QgYmUgaW52YWxpZCBzdHlsZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBkYXRlcyB3aGVuIHRoZSBmaXN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZD9cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKVxuICogKVxuICogLy89PiAnaW4gMSBob3VyJ1xuICpcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGRhdGVzIHdoZW4gdGhlIGZpc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZD9cbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMwLCAwKVxuICogKVxuICogLy89PiAnMSBob3VyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSB1bml0IG9wdGlvbiB0byBmb3JjZSB0aGUgZnVuY3Rpb24gdG8gb3V0cHV0IHRoZSByZXN1bHQgaW4gcXVhcnRlcnMuIFdpdGhvdXQgc2V0dGluZyBpdCwgdGhlIGV4YW1wbGUgd291bGQgcmV0dXJuIFwibmV4dCB5ZWFyXCJcbiAqIGludGxGb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMTk4NywgNiwgNCwgMTAsIDMwLCAwKSxcbiAqICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMwLCAwKSxcbiAqICAgeyB1bml0OiAncXVhcnRlcicgfVxuICogKVxuICogLy89PiAnaW4gNSBxdWFydGVycydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVXNlIHRoZSBsb2NhbGUgb3B0aW9uIHRvIGdldCB0aGUgcmVzdWx0IGluIFNwYW5pc2guIFdpdGhvdXQgc2V0dGluZyBpdCwgdGhlIGV4YW1wbGUgd291bGQgcmV0dXJuIFwiaW4gMSBob3VyXCIuXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMCwgMCksXG4gKiAgIHsgbG9jYWxlOiAnZXMnIH1cbiAqIClcbiAqIC8vPT4gJ2RlbnRybyBkZSAxIGhvcmEnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFVzZSB0aGUgbnVtZXJpYyBvcHRpb24gdG8gZm9yY2UgdGhlIGZ1bmN0aW9uIHRvIHVzZSBudW1lcmljIHZhbHVlcy4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJ0b21vcnJvd1wiLlxuICogaW50bEZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA1LCAxMSwgMzAsIDApLFxuICogICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzAsIDApLFxuICogICB7IG51bWVyaWM6ICdhbHdheXMnIH1cbiAqIClcbiAqIC8vPT4gJ2luIDEgZGF5J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBVc2UgdGhlIHN0eWxlIG9wdGlvbiB0byBmb3JjZSB0aGUgZnVuY3Rpb24gdG8gdXNlIHNob3J0IHZhbHVlcy4gV2l0aG91dCBzZXR0aW5nIGl0LCB0aGUgZXhhbXBsZSB3b3VsZCByZXR1cm4gXCJpbiAyIHllYXJzXCIuXG4gKiBpbnRsRm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDE5ODgsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMCwgMCksXG4gKiAgIHsgc3R5bGU6ICdzaG9ydCcgfVxuICogKVxuICogLy89PiAnaW4gMiB5cidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW50bEZvcm1hdERpc3RhbmNlKGRhdGUsIGJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdmFsdWUgPSAwO1xuICB2YXIgdW5pdDtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRhdGUpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGJhc2VEYXRlKTtcblxuICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVuaXQpKSB7XG4gICAgLy8gR2V0IHRoZSB1bml0IGJhc2VkIG9uIGRpZmZJblNlY29uZHMgY2FsY3VsYXRpb25zIGlmIG5vIHVuaXQgaXMgc3BlY2lmaWVkXG4gICAgdmFyIGRpZmZJblNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpOyAvLyBUaGUgc21hbGxlc3QgdW5pdFxuXG4gICAgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luTWludXRlKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IHNlY29uZHNJbkhvdXIpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluTWludXRlcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luRGF5ICYmIE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSkgPCAxKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgICAgdW5pdCA9ICdob3VyJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luV2VlayAmJiAodmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpICYmIE1hdGguYWJzKHZhbHVlKSA8IDcpIHtcbiAgICAgIHVuaXQgPSAnZGF5JztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luTW9udGgpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAnd2Vlayc7XG4gICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaWZmSW5TZWNvbmRzKSA8IHNlY29uZHNJblF1YXJ0ZXIpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICB1bml0ID0gJ21vbnRoJztcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpZmZJblNlY29uZHMpIDwgc2Vjb25kc0luWWVhcikge1xuICAgICAgaWYgKGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPCA0KSB7XG4gICAgICAgIC8vIFRvIGZpbHRlciBvdXQgY2FzZXMgdGhhdCBhcmUgbGVzcyB0aGFuIGEgeWVhciBidXQgbWF0Y2ggNCBxdWFydGVyc1xuICAgICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICAgIHVuaXQgPSAncXVhcnRlcic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgICAgIHVuaXQgPSAneWVhcic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICAgIHVuaXQgPSAneWVhcic7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEdldCB0aGUgdmFsdWUgaWYgdW5pdCBpcyBzcGVjaWZpZWRcbiAgICB1bml0ID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnVuaXQ7XG5cbiAgICBpZiAodW5pdCA9PT0gJ3NlY29uZCcpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XG4gICAgICB2YWx1ZSA9IGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnaG91cicpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnZGF5Jykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnd2VlaycpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtb250aCcpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAncXVhcnRlcicpIHtcbiAgICAgIHZhbHVlID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICd5ZWFyJykge1xuICAgICAgdmFsdWUgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBydGYgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSwge1xuICAgIGxvY2FsZU1hdGNoZXI6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGVNYXRjaGVyLFxuICAgIG51bWVyaWM6IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubnVtZXJpYykgfHwgJ2F1dG8nLFxuICAgIHN0eWxlOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc3R5bGVcbiAgfSk7XG4gIHJldHVybiBydGYuZm9ybWF0KHZhbHVlLCB1bml0KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoXG4gIHRpdGxlID0gXCJOZXcgUHJvamVjdFwiLFxuICBpZCA9IG5hbm9pZCgpLFxuICB0YXNrcyA9IFtdLFxuICBpc1BzZXVkbyA9IGZhbHNlXG4pIHtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBjb25zdCBfaWQgPSBpZDtcbiAgbGV0IF90YXNrcyA9IHRhc2tzO1xuICBsZXQgX2lzUHNldWRvID0gaXNQc2V1ZG87XG5cbiAgZnVuY3Rpb24gYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgX3Rhc2tzLnB1c2gobmV3VGFzayk7XG4gIH1cbiAgZnVuY3Rpb24gbmV3VGFzayh0aXRsZSkge1xuICAgIC8vX3Rhc2tzLnB1c2goVGFzayhfaWQsIHRpdGxlKSk7XG4gICAgY29uc3QgdGFzayA9IFRhc2soX2lkLCB0aXRsZSk7XG4gICAgX3Rhc2tzLnB1c2godGFzayk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlVGFzayhpZCkge1xuICAgIF90YXNrcyA9IF90YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIF9pZDtcbiAgICB9LFxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiBfdGl0bGU7XG4gICAgfSxcbiAgICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcbiAgICAgIF90aXRsZSA9IG5ld1RpdGxlO1xuICAgIH0sXG4gICAgZ2V0IHRhc2tzKCkge1xuICAgICAgcmV0dXJuIF90YXNrcztcbiAgICB9LFxuICAgIHNldCB0YXNrcyhuZXdUYXNrcykge1xuICAgICAgX3Rhc2tzID0gbmV3VGFza3M7XG4gICAgfSxcbiAgICBnZXQgaXNQc2V1ZG8oKSB7XG4gICAgICByZXR1cm4gX2lzUHNldWRvO1xuICAgIH0sXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIG5ld1Rhc2ssXG4gIH07XG59XG5cbi8qIGV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0Q29tcG9uZW50KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5pZCA9IHByb2plY3QuaWQ7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuZGF0YXNldC50eXBlID0gXCJwcm9qZWN0LWNhcmRcIjtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgaWYgKCF0YXNrLmlzQ29tcGxldGVkKSB7XG4gICAgICBjb25zdCB0YXNrTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0YXNrQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIHRhc2tDaGVja2JveC5kYXRhc2V0LmlkID0gdGFzay5pZDtcbiAgICAgIHRhc2tDaGVja2JveC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gICAgICB0YXNrQ2hlY2tib3guZGF0YXNldC50eXBlID0gXCJ0YXNrLWNvbXBsZXRlXCI7XG4gICAgICB0YXNrTEkuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgICAgIHRhc2tMSS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0xJKTtcbiAgICB9XG4gIH1cbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsLXByb2plY3QtYnRuXCIpO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgcHJvamVjdFwiO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uLmRhdGFzZXQudHlwZSA9IFwiZGVsLXByb2plY3RcIjtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gIGNvbnN0IGVsZW1lbnRzID0gcHJvamVjdENhcmQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZCkpO1xuICByZXR1cm4gcHJvamVjdENhcmQ7XG59XG4gKi9cbiIsImV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0Q29tcG9uZW50KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5pZCA9IHByb2plY3QuaWQ7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuZGF0YXNldC50eXBlID0gXCJwcm9qZWN0LWNhcmRcIjtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgaWYgKCF0YXNrLmlzQ29tcGxldGVkKSB7XG4gICAgICBjb25zdCB0YXNrTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKGB0YXNrLWlzQ29tcGxldGVkYCwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgICAgIHRhc2tDaGVja2JveC50ZXh0Q29udGVudCA9IFwiY2hlY2tfYm94X291dGxpbmVfYmxhbmtcIjtcbiAgICAgIHRhc2tDaGVja2JveC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgICB0YXNrQ2hlY2tib3guZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgdGFza0NoZWNrYm94LmRhdGFzZXQudHlwZSA9IFwiY29tcGxldGUtdGFza1wiO1xuICAgICAgdGFza0xJLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG4gICAgICB0YXNrTEkuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tMSSk7XG4gICAgfVxuICB9XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbC1wcm9qZWN0LWJ0blwiKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHByb2plY3RcIjtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbi5kYXRhc2V0LnR5cGUgPSBcImRlbC1wcm9qZWN0XCI7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICBjb25zdCBlbGVtZW50cyA9IHByb2plY3RDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQpKTtcbiAgcmV0dXJuIHByb2plY3RDYXJkO1xufVxuIiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soXG4gIHByb2plY3RJZCxcbiAgdGl0bGUgPSBcIkVsIHRhc2NvXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJcIixcbiAgZHVlRGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJcIixcbiAgaXNDb21wbGV0ZWQgPSBmYWxzZSxcbiAgaXNFeHBhbmRlZCA9IGZhbHNlXG4pIHtcbiAgY29uc3QgX2lkID0gbmFub2lkKCk7XG4gIGxldCBfcHJvamVjdElkID0gcHJvamVjdElkO1xuICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICBsZXQgX2lzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XG4gIGxldCBfaXNFeHBhbmRlZCA9IGlzRXhwYW5kZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gX2lkO1xuICAgIH0sXG4gICAgZ2V0IHByb2plY3RJZCgpIHtcbiAgICAgIHJldHVybiBfcHJvamVjdElkO1xuICAgIH0sXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIF90aXRsZTtcbiAgICB9LFxuICAgIHNldCB0aXRsZShuZXdUaXRsZSkge1xuICAgICAgX3RpdGxlID0gbmV3VGl0bGU7XG4gICAgfSxcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gX2Rlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgc2V0IGRlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICBfZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIF9kdWVEYXRlO1xuICAgIH0sXG4gICAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xuICAgICAgX2R1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH0sXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIF9wcmlvcml0eTtcbiAgICB9LFxuICAgIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgICAgX3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfSxcbiAgICBnZXQgaXNDb21wbGV0ZWQoKSB7XG4gICAgICByZXR1cm4gX2lzQ29tcGxldGVkO1xuICAgIH0sXG4gICAgc2V0IGlzQ29tcGxldGVkKG5ld0lzQ29tcGxldGVkKSB7XG4gICAgICBfaXNDb21wbGV0ZWQgPSBuZXdJc0NvbXBsZXRlZDtcbiAgICB9LFxuICAgIGdldCBpc0V4cGFuZGVkKCkge1xuICAgICAgcmV0dXJuIF9pc0V4cGFuZGVkO1xuICAgIH0sXG4gICAgc2V0IGlzRXhwYW5kZWQobmV3SXNFeHBhbmRlZCkge1xuICAgICAgX2lzRXhwYW5kZWQgPSBuZXdJc0V4cGFuZGVkO1xuICAgIH0sXG4gIH07XG59XG5cbi8qIGV4cG9ydCBmdW5jdGlvbiBUYXNrQ29tcG9uZW50KHRhc2spIHtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0lucHV0KHRhc2ssIFwiaXNDb21wbGV0ZWRcIikpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChUYXNrSW5wdXQodGFzaywgXCJ0aXRsZVwiKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tJbnB1dCh0YXNrLCBcImRlc2NyaXB0aW9uXCIpKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0lucHV0KHRhc2ssIFwiZHVlRGF0ZVwiKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKFRhc2tJbnB1dCh0YXNrLCBcInByaW9yaXR5XCIpKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoVGFza0RlbGV0ZUJ1dHRvbih0YXNrKSk7XG5cbiAgcmV0dXJuIHRhc2tFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBUYXNrSW5wdXQodGFzaywgZmllbGRUeXBlKSB7XG4gIGxldCBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICBjYXNlIFwiZHVlRGF0ZVwiOlxuICAgICAgaW5wdXRUeXBlID0gXCJkYXRlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaXNDb21wbGV0ZWRcIjpcbiAgICAgIGlucHV0VHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgaW5wdXRUeXBlID0gXCJzZWxlY3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGlmIChpbnB1dFR5cGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0XCIsIGB0YXNrLSR7ZmllbGRUeXBlfWApO1xuICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IGZpZWxkVHlwZTtcbiAgICBmb3IgKGxldCBvcHRpb24gb2YgW1wibm9ybWFsXCIsIFwiaGlnaFwiLCBcImxvd1wiXSkge1xuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25FbGVtZW50LmlubmVyVGV4dCA9IG9wdGlvbjtcbiAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb247XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgIH1cbiAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWxlbWVudC50eXBlID0gaW5wdXRUeXBlO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXRcIiwgYHRhc2stJHtmaWVsZFR5cGV9YCk7XG4gICAgLy9lbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIGlmIChmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXS5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiIFwiKTtcbiAgICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBcIi4uLlwiO1xuICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgLy8gZG8gc3R1ZmYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHRhc2tbZmllbGRUeXBlXTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICBlbGVtZW50LmNoZWNrZWQgPSB0YXNrLmlzQ29tcGxldGVkO1xuICAgIH1cbiAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnR5cGUgPSBmaWVsZFR5cGU7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gKi9cblxuLyogZnVuY3Rpb24gVGFza0RlbGV0ZUJ1dHRvbih0YXNrKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZVwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxcIjtcbiAgYnV0dG9uLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgYnV0dG9uLmRhdGFzZXQudHlwZSA9IFwiZGVsZXRlLXRhc2tcIjtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlc2NyaXB0aW9uTW9kYWwodGFzaykge1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbC1jb250YWluZXJcIik7XG4gIG1vZGFsQ29udGFpbmVyLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgbW9kYWxDb250YWluZXIuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgbW9kYWxDb250YWluZXIuZGF0YXNldC50eXBlID0gXCJtb2RhbC1jb250YWluZXJcIjtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWxcIik7XG4gIG1vZGFsLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgbW9kYWwuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgbW9kYWwuZGF0YXNldC50eXBlID0gXCJtb2RhbFwiO1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuaWQgPSBcImRlc2NyaXB0aW9uLXRleHRhcmVhXCI7XG4gIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbC10ZXh0YXJlYVwiKTtcbiAgdGV4dEFyZWEuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB0ZXh0QXJlYS5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICB0ZXh0QXJlYS52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tbW9kYWwtYnRuXCIpO1xuICBzdWJtaXRCdG4uZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBzdWJtaXRCdG4uZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgc3VibWl0QnRuLmRhdGFzZXQudHlwZSA9IFwibW9kYWwtc2F2ZVwiO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlNhdmUgKEN0cmwrRW50ZXIpXCI7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgcmV0dXJuIG1vZGFsQ29udGFpbmVyO1xufSAqL1xuIiwiaW1wb3J0IHsgaW50bEZvcm1hdERpc3RhbmNlLCBpc1ZhbGlkLCBpc1Bhc3QsIGVuZE9mRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2tDb21wb25lbnQodGFzaykge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcbiAgdGFza0VsZW1lbnQuZGF0YXNldC5leHBhbmRlciA9IHRydWU7XG4gIHRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHRhc2tFbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcblxuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChNYWtlQ2hlY2tib3godGFzaykpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChNYWtlVGl0bGUodGFzaykpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChNYWtlUHJpb3JpdHkodGFzaykpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChNYWtlTm90ZSh0YXNrKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VEYXRlKHRhc2spKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoTWFrZURlbGV0ZSh0YXNrKSk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKE1ha2VDb250YWluZXIodGFzaykpO1xuXG4gIHJldHVybiB0YXNrRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gTWFrZUNoZWNrYm94KHRhc2spIHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChgdGFzay1pc0NvbXBsZXRlZGAsIFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIik7XG4gIGNoZWNrYm94LnRleHRDb250ZW50ID0gdGFzay5pc0NvbXBsZXRlZFxuICAgID8gXCJjaGVja19ib3hcIlxuICAgIDogXCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiO1xuICBjaGVja2JveC5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlZDtcbiAgY2hlY2tib3guZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgY2hlY2tib3guZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBjaGVja2JveC5kYXRhc2V0LnR5cGUgPSBcImNvbXBsZXRlLXRhc2tcIjtcbiAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG5mdW5jdGlvbiBNYWtlVGl0bGUodGFzaykge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKGB0YXNrLXRpdGxlYCk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgdGl0bGUuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgdGl0bGUuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB0aXRsZS5kYXRhc2V0LnR5cGUgPSBcInRpdGxlXCI7XG4gIHRpdGxlLmRhdGFzZXQuZXhwYW5kZXIgPSB0cnVlO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIE1ha2VQcmlvcml0eSh0YXNrKSB7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoYHRhc2stcHJpb3JpdHlgLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiID8gXCJwcmlvcml0eV9oaWdoXCIgOiBcIlwiO1xuICBwcmlvcml0eS5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBwcmlvcml0eS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHByaW9yaXR5LmRhdGFzZXQudHlwZSA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHkuZGF0YXNldC5leHBhbmRlciA9IHRydWU7XG4gIHJldHVybiBwcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gTWFrZU5vdGUodGFzaykge1xuICBjb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG5vdGUuY2xhc3NMaXN0LmFkZChgdGFzay1ub3RlYCwgXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiKTtcbiAgbm90ZS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb24gPyBcImRlc2NyaXB0aW9uXCIgOiBcIm5vdGVfYWRkXCI7IC8vJ2Rlc2NyaXB0aW9uJyBmb3IgZmlsbGVkIG5vdGVcbiAgbm90ZS5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBub3RlLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgbm90ZS5kYXRhc2V0LnR5cGUgPSBcIm5vdGVcIjtcbiAgbm90ZS5kYXRhc2V0LmV4cGFuZGVyID0gdHJ1ZTtcbiAgcmV0dXJuIG5vdGU7XG59XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFURS0tLS1EQVRFLS0tLURBVEUtLS0tREFURVxuZnVuY3Rpb24gTWFrZURhdGUodGFzaykge1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChgdGFzay1kYXRlYCk7XG4gIGRhdGUuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgZGF0ZS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIGRhdGUuZGF0YXNldC50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGUuZGF0YXNldC5leHBhbmRlciA9IHRydWU7XG4gIGlmICh0YXNrLmR1ZURhdGUgJiYgaXNWYWxpZCh0YXNrLmR1ZURhdGUpKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBpbnRsRm9ybWF0RGlzdGFuY2UodGFzay5kdWVEYXRlLCBuZXcgRGF0ZSgpLCB7XG4gICAgICB1bml0OiBcImRheVwiLFxuICAgIH0pO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplKGludGVydmFsKTtcbiAgICBpZiAoIXRhc2suaXNDb21wbGV0ZWQgJiYgaXNQYXN0KGVuZE9mRGF5KHRhc2suZHVlRGF0ZSkpKSB7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJvdmVyZHVlLXRhc2tcIik7XG4gICAgfSBlbHNlIGlmIChpbnRlcnZhbCA9PT0gXCJ0b2RheVwiKSB7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS10YXNrXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gXCJObyBkYXRlXCI7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIE1ha2VEZWxldGUodGFzaykge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZVwiLCBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcImRlbGV0ZV9mb3JldmVyXCI7XG4gIGJ1dHRvbi5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBidXR0b24uZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBidXR0b24uZGF0YXNldC50eXBlID0gXCJkZWxldGUtdGFza1wiO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBNYWtlQ29udGFpbmVyKHRhc2spIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWV4cGFuZGVkXCIpO1xuICBjb250YWluZXIuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgY29udGFpbmVyLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgY29udGFpbmVyLmRhdGFzZXQudHlwZSA9IFwiZXhwYW5kZWRcIjtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBUYXNrRXhwYW5kZWQodGFzaykge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICBjb25zdCBpbnB1dEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0QmFyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0LWNvbnRhaW5lclwiKTtcbiAgaW5wdXRCYXIuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgaW5wdXRCYXIuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBpbnB1dEJhci5hcHBlbmRDaGlsZChUaXRsZUlucHV0KHRhc2spKTtcbiAgaW5wdXRCYXIuYXBwZW5kQ2hpbGQoUHJpb3JpdHlJbnB1dCh0YXNrKSk7XG4gIGlucHV0QmFyLmFwcGVuZENoaWxkKERhdGVJbnB1dCh0YXNrKSk7XG5cbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaW5wdXRCYXIpO1xuICBmcmFnbWVudC5hcHBlbmRDaGlsZChUZXh0QXJlYSh0YXNrKSk7XG5cbiAgZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0LHNlbGVjdCx0ZXh0YXJlYVwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICAgIGVsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIGVsZW1lbnQuZGF0YXNldC5pc1Rhc2tJbnB1dCA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gVGl0bGVJbnB1dCh0YXNrKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVsZW1lbnQudHlwZSA9IFwidGV4dFwiO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRpdGxlLWlucHV0YCk7XG4gIGVsZW1lbnQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IFwidGl0bGVcIjtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIFByaW9yaXR5SW5wdXQodGFzaykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS1pbnB1dGApO1xuICBlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIGVsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBmb3IgKGxldCBvcHRpb24gb2YgW1wibm9ybWFsXCIsIFwiaGlnaFwiXSkge1xuICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gb3B0aW9uO1xuICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb247XG4gICAgaWYgKG9wdGlvbiA9PT0gXCJub3JtYWxcIikge1xuICAgICAgb3B0aW9uRWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gIH1cbiAgZWxlbWVudC52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gIGVsZW1lbnQuZGF0YXNldC50eXBlID0gXCJwcmlvcml0eVwiO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gRGF0ZUlucHV0KHRhc2spIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZWxlbWVudC50eXBlID0gXCJkYXRlXCI7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgZGF0ZS1pbnB1dGApO1xuICBpZiAodGFzay5kdWVEYXRlICYmIGlzVmFsaWQodGFzay5kdWVEYXRlKSkge1xuICAgIGVsZW1lbnQudmFsdWVBc0RhdGUgPSB0YXNrLmR1ZURhdGU7XG4gIH1cbiAgZWxlbWVudC5kYXRhc2V0LnR5cGUgPSBcImR1ZURhdGVcIjtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIFRleHRBcmVhKHRhc2spIHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLmlkID0gXCJkZXNjcmlwdGlvbi10ZXh0YXJlYVwiO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tdGV4dGFyZWFcIik7XG4gIHRleHRBcmVhLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgdGV4dEFyZWEuZGF0YXNldC50eXBlID0gXCJkZXNjcmlwdGlvblwiO1xuICByZXR1cm4gdGV4dEFyZWE7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKiBmdW5jdGlvbiBUYXNrSW5wdXQodGFzaywgZmllbGRUeXBlKSB7XG4gIGxldCBpbnB1dFR5cGUgPSBcInRleHRcIjtcbiAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICBjYXNlIFwiZHVlRGF0ZVwiOlxuICAgICAgaW5wdXRUeXBlID0gXCJkYXRlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicHJpb3JpdHlcIjpcbiAgICAgIGlucHV0VHlwZSA9IFwic2VsZWN0XCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaW5wdXRUeXBlID0gXCJ0ZXh0XCI7XG4gICAgICBicmVhaztcbiAgfVxuICBpZiAoaW5wdXRUeXBlID09PSBcInNlbGVjdFwiKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2ZpZWxkVHlwZX0taW5wdXRgKTtcbiAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgZWxlbWVudC5kYXRhc2V0LnR5cGUgPSBmaWVsZFR5cGU7XG4gICAgZm9yIChsZXQgb3B0aW9uIG9mIFtcIm5vcm1hbFwiLCBcImhpZ2hcIl0pIHtcbiAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uRWxlbWVudC5pbm5lclRleHQgPSBvcHRpb247XG4gICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xuICAgICAgaWYgKG9wdGlvbiA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICBvcHRpb25FbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgfVxuICAgIGVsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV07XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlbGVtZW50LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2ZpZWxkVHlwZX0taW5wdXRgKTtcbiAgICAvL2VsZW1lbnQudmFsdWUgPSB0YXNrW2ZpZWxkVHlwZV07XG4gICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdLnJlcGxhY2VBbGwoXCJcXG5cIiwgXCIgXCIpO1xuICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IFwiLi4uXCI7XG4gICAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgICBpZiAodGFzay5kdWVEYXRlICYmIGlzVmFsaWQodGFzay5kdWVEYXRlKSkge1xuICAgICAgICBlbGVtZW50LnZhbHVlQXNEYXRlID0gdGFzay5kdWVEYXRlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gdGFza1tmaWVsZFR5cGVdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC50eXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZWQ7XG4gICAgfVxuICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SWQgPSB0YXNrLnByb2plY3RJZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICBlbGVtZW50LmRhdGFzZXQudHlwZSA9IGZpZWxkVHlwZTtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAqL1xuXG4vKiBleHBvcnQgZnVuY3Rpb24gRGVzY3JpcHRpb25Nb2RhbCh0YXNrKSB7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbW9kYWxDb250YWluZXIuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBtb2RhbENvbnRhaW5lci5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsLWNvbnRhaW5lclwiO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbFwiKTtcbiAgbW9kYWwuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICBtb2RhbC5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBtb2RhbC5kYXRhc2V0LnR5cGUgPSBcIm1vZGFsXCI7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5pZCA9IFwiZGVzY3JpcHRpb24tdGV4dGFyZWFcIjtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLW1vZGFsLXRleHRhcmVhXCIpO1xuICB0ZXh0QXJlYS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHRleHRBcmVhLmRhdGFzZXQucHJvamVjdElkID0gdGFzay5wcm9qZWN0SWQ7XG4gIHRleHRBcmVhLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1tb2RhbC1idG5cIik7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHN1Ym1pdEJ0bi5kYXRhc2V0LnByb2plY3RJZCA9IHRhc2sucHJvamVjdElkO1xuICBzdWJtaXRCdG4uZGF0YXNldC50eXBlID0gXCJtb2RhbC1zYXZlXCI7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZSAoQ3RybCtFbnRlcilcIjtcblxuICBtb2RhbC5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICByZXR1cm4gbW9kYWxDb250YWluZXI7XG59XG4gKi9cbiIsIi8vaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IFRhc2tDb21wb25lbnQsIFRhc2tFeHBhbmRlZCB9IGZyb20gXCIuL1Rhc2tDb21wb25lbnRcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RDb21wb25lbnQgfSBmcm9tIFwiLi9Qcm9qZWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBpc1Bhc3QsIGlzVG9kYXksIGVuZE9mRGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IHN0YXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IF9wcm9qZWN0cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHRhc2tzID0gW10sIGlzUHNldWRvID0gZmFsc2UpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXRlLmFkZFByb2plY3QgaW52b2tlZFwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdCh0aXRsZSwgdW5kZWZpbmVkLCB0YXNrcywgaXNQc2V1ZG8pO1xuICAgIF9wcm9qZWN0cy51bnNoaWZ0KG5ld1Byb2plY3QpO1xuICAgIEdVSS5yZWZyZXNoKCk7XG4gICAgaWYgKCFuZXdQcm9qZWN0LmlzUHNldWRvKSB7XG4gICAgICBHVUkuY3JlYXRlTmV3VGFzaygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJzdGF0ZS5yZW1vdmVQcm9qZWN0IGludm9rZWRcIik7XG4gICAgX3Byb2plY3RzID0gX3Byb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gaWQpO1xuICB9XG4gIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBfcHJvamVjdHM7XG4gIH1cbiAgZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICAgIGxldCBsb2FkZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgaWYgKGxvYWRlZFByb2plY3RzICYmIF9wcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBwcm9qZWN0cyBmcm9tIGxvY2Fsc3RvcmFnZVwiKTtcbiAgICAgIGxvYWRlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2FkZWRQcm9qZWN0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibm90aGluZyB3YXMgbG9hZGVkIGZyb20gbG9jYWxzdG9yYWdlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2FkZWRQcm9qZWN0cyA9IGxvYWRlZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3QudGl0bGUsIHByb2plY3QuaWQsIHByb2plY3QudGFza3MpO1xuICAgICAgbmV3UHJvamVjdC50YXNrcyA9IG5ld1Byb2plY3QudGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSB0YXNrLmR1ZURhdGUgPyBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIFRhc2soXG4gICAgICAgICAgdGFzay5wcm9qZWN0SWQsXG4gICAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIG5ld0R1ZURhdGUsXG4gICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICB0YXNrLmlzQ29tcGxldGVkXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgIH0pO1xuICAgIF9wcm9qZWN0cyA9IGxvYWRlZFByb2plY3RzO1xuICB9XG4gIGZ1bmN0aW9uIHNlbGVjdFByb2plY3QocHJvamVjdElkKSB7XG4gICAgLy9tb3ZlcyBzZWxlY3RlZCBwcm9qZWN0IHRvIHRoZSBzdGFydCBvZiBfcHJvamVjdHMgYXJyYXlcbiAgICBjb25zb2xlLmxvZyhcInN0YXRlLnNlbGVjdFByb2plY3QgaW52b2tlZFwiKTtcbiAgICBjb25zdCBpbmRleCA9IF9wcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgX3Byb2plY3RzLnVuc2hpZnQoX3Byb2plY3RzLnNwbGljZShpbmRleCwgMSlbMF0pO1xuICB9XG4gIGZ1bmN0aW9uIGdldFRhc2tCeUlkKHRhc2tJZCkge1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUuZ2V0VGFza0J5SWQgaW52b2tlZFwiKTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIF9wcm9qZWN0cykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcHJvamVjdC50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpIHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXRlLmdldFByb2plY3RCeUlkIGludm9rZWRcIik7XG4gICAgcmV0dXJuIF9wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICB9XG4gIGZ1bmN0aW9uIHN5bmNTdG9yYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkaW5nIHByb2plY3RzIHRvIGxvY2FsU3RvcmFnZVwiKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KF9wcm9qZWN0cykpO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyUHNldWRvUHJvamVjdHMoKSB7XG4gICAgX3Byb2plY3RzID0gX3Byb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gIXByb2plY3QuaXNQc2V1ZG8pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdHMsXG4gICAgbG9hZFByb2plY3RzLFxuICAgIHNlbGVjdFByb2plY3QsXG4gICAgc3luY1N0b3JhZ2UsXG4gICAgZ2V0VGFza0J5SWQsXG4gICAgZ2V0UHJvamVjdEJ5SWQsXG4gICAgY2xlYXJQc2V1ZG9Qcm9qZWN0cyxcbiAgfTtcbn0pKCk7XG5cbnN0YXRlLmxvYWRQcm9qZWN0cygpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBHVUkgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgdG9wUHJvamVjdCA9IHVuZGVmaW5lZDtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKysrKysrKysrKysrKysrKysrK0NIQU5HRVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZURvY3VtZW50Q2hhbmdlKTtcbiAgZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRDaGFuZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcInByb2plY3QtZXhwYW5kZWQtdGl0bGVcIikge1xuICAgICAgY2hhbmdlUHJvamVjdFRpdGxlKGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2stZXhwYW5kZWRcIikpIHtcbiAgICAgIHNhdmVUYXNrRGF0YShldmVudCk7XG4gICAgfVxuICB9XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKysrKysrKysrKysrKysrKysrKytLRVlcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZURvY3VtZW50S2V5VXApO1xuICBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudEtleVVwKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQua2V5Q29kZSA9PT0gMTMgJiYgLy9lbnRlclxuICAgICAgZXZlbnQuY3RybEtleSAmJlxuICAgICAgZXZlbnQudGFyZ2V0LmRhdGFzZXQuaXNUYXNrSW5wdXRcbiAgICApIHtcbiAgICAgIC8vc2F2ZVRhc2tEYXRhKGV2ZW50KTtcbiAgICAgIGNsb3NlRXhwYW5kZWRUYXNrcygpO1xuICAgICAgcmVmcmVzaCgpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBldmVudC5rZXlDb2RlID09PSAyNyAvLyYmIC8vZXNjYXBlXG4gICAgICAvL2V2ZW50LnRhcmdldC5kYXRhc2V0LmlzVGFza0lucHV0XG4gICAgKSB7XG4gICAgICBjbG9zZUV4cGFuZGVkVGFza3MoKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLysrKysrKysrKysrKysrKysrKysrQ0xJQ0tcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURvY3VtZW50Q2xpY2spO1xuICBmdW5jdGlvbiBoYW5kbGVEb2N1bWVudENsaWNrKGV2ZW50KSB7XG4gICAgLy9hdm9pZCBjaGVja2luZyB1bm5lY2Vzc2FyeSBjb25kaXRpb25zXG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LmV4cGFuZGVyKSB7XG4gICAgICBleHBhbmRUYXNrKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwiZGVsZXRlLXRhc2tcIikge1xuICAgICAgZGVsZXRlVGFzayhldmVudCk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcImNvbXBsZXRlLXRhc2tcIikge1xuICAgICAgY29tcGxldGVUYXNrKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwiYWRkLXRhc2tcIikge1xuICAgICAgY3JlYXRlTmV3VGFzaygpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gXCJkZWwtcHJvamVjdFwiKSB7XG4gICAgICBkZWxldGVQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikgJiZcbiAgICAgIGV2ZW50LnRhcmdldC5pZCAhPT0gXCJwcm9qZWN0LWNvbnRhaW5lclwiICYmXG4gICAgICBldmVudC50YXJnZXQuZGF0YXNldC50eXBlICE9PSBcImNvbXBsZXRlLXRhc2tcIlxuICAgICkge1xuICAgICAgc2VsZWN0UHJvamVjdChldmVudCk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcIm5ldy1wcm9qZWN0XCIpIHtcbiAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09IFwib3ZlcmR1ZS1wcm9qZWN0XCIpIHtcbiAgICAgIG92ZXJkdWVQc2V1ZG9Qcm9qZWN0KCk7XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSBcInRvZGF5LXByb2plY3RcIikge1xuICAgICAgdG9kYXlQc2V1ZG9Qcm9qZWN0KCk7XG4gICAgfVxuICB9XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKipGVU5DVElPTlNcblxuICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0VGl0bGUoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImNoYW5naW5nIHByb2plY3QgdGl0bGVcIik7XG4gICAgaWYgKHRvcFByb2plY3QpIHtcbiAgICAgIHRvcFByb2plY3QudGl0bGUgPSBjYXBpdGFsaXplKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICByZWZyZXNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIm5vIHByb2plY3QgdG8gY2hhbmdlIHRpdGxlIG9mXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG92ZXJkdWVQc2V1ZG9Qcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLm92ZXJkdWVQc2V1ZG9Qcm9qZWN0IGludm9rZWRcIik7XG4gICAgc3RhdGUuY2xlYXJQc2V1ZG9Qcm9qZWN0cygpO1xuICAgIGNvbnN0IG92ZXJkdWVUYXNrcyA9IFtdO1xuICAgIHN0YXRlLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmIChpc1Bhc3QoZW5kT2ZEYXkodGFzay5kdWVEYXRlKSkpIHtcbiAgICAgICAgICBvdmVyZHVlVGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc3RhdGUuY3JlYXRlUHJvamVjdChcIk92ZXJkdWUgdGFza3NcIiwgb3ZlcmR1ZVRhc2tzLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZGF5UHNldWRvUHJvamVjdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSS50b2RheVBzZXVkb1Byb2plY3QgaW52b2tlZFwiKTtcbiAgICBzdGF0ZS5jbGVhclBzZXVkb1Byb2plY3RzKCk7XG4gICAgY29uc3QgdG9kYXlUYXNrcyA9IFtdO1xuICAgIHN0YXRlLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmIChpc1RvZGF5KHRhc2suZHVlRGF0ZSkpIHtcbiAgICAgICAgICB0b2RheVRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHN0YXRlLmNyZWF0ZVByb2plY3QoXCJUYXNrcyBmb3IgdG9kYXlcIiwgdG9kYXlUYXNrcywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiR1VJLmNyZWF0ZU5ld1Byb2plY3QgaW52b2tlZFwiKTtcbiAgICBzdGF0ZS5jcmVhdGVQcm9qZWN0KFwiTmV3IHByb2plY3RcIik7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkuc2VsZWN0UHJvamVjdCBpbnZva2VkXCIpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICBzdGF0ZS5zZWxlY3RQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgc3RhdGUuY2xlYXJQc2V1ZG9Qcm9qZWN0cygpO1xuICAgIHJlZnJlc2goKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZXZlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHN0YXRlLmdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG4gICAgaWYgKFxuICAgICAgZXZlbnQuY3RybEtleSB8fFxuICAgICAgY29uZmlybShgUGxlYXNlIGNvbmZpcm0gcmVtb3ZpbmcgXCIke3RhcmdldFByb2plY3QudGl0bGV9XCIgcHJvamVjdGApXG4gICAgKSB7XG4gICAgICBzdGF0ZS5yZW1vdmVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICByZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmV3VGFzaygpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSS5jcmVhdGVOZXdUYXNrIGludm9rZWRcIik7XG4gICAgaWYgKCF0b3BQcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vIHByb2plY3RzIHlldFwiKTtcbiAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICB9XG4gICAgLy90b3BQcm9qZWN0Lm5ld1Rhc2soKTtcbiAgICBjb25zdCBuZXdUYXNrID0gdG9wUHJvamVjdC5uZXdUYXNrKCk7XG4gICAgY29uc3QgbmV3VGFza0lkID0gbmV3VGFzay5pZDtcbiAgICByZWZyZXNoKCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGAudGFzay1pdGVtW2RhdGEtdGFzay1pZD0nJHtuZXdUYXNrSWR9J10+LnRhc2stdGl0bGVgKVxuICAgICAgLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkgZGVsZXRpbmcgdGFza1wiKTtcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBjb25maXJtKFwiUGxlYXNlIGNvbmZpcm0gZGVsZXRpbmcgdGFza1wiKSkge1xuICAgICAgdG9wUHJvamVjdC5yZW1vdmVUYXNrKGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZCk7XG4gICAgICByZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVUYXNrKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkgY29tcGxldGluZyB0YXNrXCIpO1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICBjb25zdCB0YXJnZXRUYXNrID0gc3RhdGUuZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICB0YXJnZXRUYXNrLmlzQ29tcGxldGVkID0gIXRhcmdldFRhc2suaXNDb21wbGV0ZWQ7XG4gICAgcmVmcmVzaCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVRhc2tEYXRhKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJHVUkgc2F2aW5nIHRhc2sgZGF0YVwiKTtcbiAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG4gICAgY29uc3QgdGFyZ2V0VGFzayA9IHN0YXRlLmdldFRhc2tCeUlkKHRhc2tJZCk7XG4gICAgY29uc3QgaW5wdXRzID0gZXZlbnQudGFyZ2V0XG4gICAgICAuY2xvc2VzdChcIi50YXNrLWV4cGFuZGVkXCIpXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcImlucHV0LHNlbGVjdCx0ZXh0YXJlYVwiKTtcbiAgICBpbnB1dHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkVHlwZSA9IGZpZWxkLmRhdGFzZXQudHlwZTtcbiAgICAgIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIikge1xuICAgICAgICB0YXJnZXRUYXNrW2ZpZWxkVHlwZV0gPSBjYXBpdGFsaXplKGZpZWxkLnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICB0YXJnZXRUYXNrW2ZpZWxkVHlwZV0gPSBmaWVsZC52YWx1ZUFzRGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFRhc2tbZmllbGRUeXBlXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJlZnJlc2goZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhwYW5kVGFzayhldmVudCkge1xuICAgIC8vaWYgY2FsbGVkIG5vdCBmcm9tIGluc2lkZSBvZiBhbHJlYWR5IGV4cGFuZGVkIHRhc2s6XG4gICAgLy9pZiAodHJ1ZSB8fCAhZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1pdGVtOmhhcyh0ZXh0YXJlYSlcIikpIHtcbiAgICBjbG9zZUV4cGFuZGVkVGFza3MoKTtcbiAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG4gICAgY29uc3QgdGFzayA9IHN0YXRlLmdldFRhc2tCeUlkKHRhc2tJZCk7XG4gICAgdGFzay5pc0V4cGFuZGVkID0gdHJ1ZTtcblxuICAgIHJlZnJlc2goZXZlbnQpO1xuXG4gICAgLyogdGFza0V4cGFuZGVkLmFwcGVuZENoaWxkKFRhc2tFeHBhbmRlZCh0YXNrKSk7XG4gICAgICBzd2l0Y2ggKHRhcmdldFR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgICAgICB0YXJnZXRGaWVsZCA9IFwiLmRlc2NyaXB0aW9uLXRleHRhcmVhXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgdGFyZ2V0RmllbGQgPSBcIi5kYXRlLWlucHV0XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgICAgIHRhcmdldEZpZWxkID0gXCIucHJpb3JpdHktaW5wdXRcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0YXJnZXRGaWVsZCA9IFwiLnRpdGxlLWlucHV0XCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0YXNrRXhwYW5kZWQucXVlcnlTZWxlY3Rvcih0YXJnZXRGaWVsZCkuZm9jdXMoKTsgKi9cbiAgICAvL31cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlRXhwYW5kZWRUYXNrcygpIHtcbiAgICAvL3Rha2UgcHJvamVjdCBhcyBpbnB1dCwgdGhlbiBnbyB0aHJvdWdoIHRhc2tzIGFuZCBzZXQgaXNFeHBhbmRlZFxuICAgIC8vb24gdGhlbSB0byBmYWxzZVxuICAgIC8vVGhlbiBjYWxsIHJlZnJlc2goKSB0byB0dXJuIERPTSBpbiBjb21wbGlhbmNlIHRvIHN0YXRlXG4gICAgdG9wUHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiAodGFzay5pc0V4cGFuZGVkID0gZmFsc2UpKTtcbiAgICAvL3JlZnJlc2goKVxuICAgIC8qIGNvbnN0IGV4cGFuZGVkRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1leHBhbmRlZFwiKTtcbiAgICBleHBhbmRlZERpdnMuZm9yRWFjaCgoZGl2KSA9PiAoZGl2LmlubmVySFRNTCA9IFwiXCIpKTsgKi9cbiAgfVxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLS0tLS0tLS0tLS0tLS0tLS1SRUZSRVNIXG4gIGZ1bmN0aW9uIHJlZnJlc2goZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdVSS5yZWZyZXNoIGludm9rZWRcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWV4cGFuZGVkLXRpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY29tcGxldGVkLXRhc2stY29udGFpbmVyXCJcbiAgICApO1xuICAgIGNvbnN0IGFkZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XG4gICAgdG9wUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0c1swXTtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29tcGxldGVkVGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmICghdG9wUHJvamVjdCkge1xuICAgICAgY29uc29sZS53YXJuKFwiR1VJLnJlZnJlc2g6IG5vIHByb2plY3RzIGF2YWlsYWJsZVwiKTtcbiAgICAgIHByb2plY3RUaXRsZS52YWx1ZSA9IFwiTGV0J3Mgc3RhcnQgYSBuZXcgcHJvamVjdCFcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gdG9wUHJvamVjdC50aXRsZTtcbiAgICAgIGlmICh0b3BQcm9qZWN0LmlzUHNldWRvKSB7XG4gICAgICAgIHByb2plY3RUaXRsZS5yZWFkT25seSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0VGl0bGUucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IHRhc2sgb2YgdG9wUHJvamVjdC50YXNrcykge1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IFRhc2tDb21wb25lbnQodGFzayk7XG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgaWYgKCF0b3BQcm9qZWN0LmlzUHNldWRvKSB7XG4gICAgICAgICAgICBjb21wbGV0ZWRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrRXhwYW5kZWQgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZXhwYW5kZWRcIik7XG4gICAgICAgIGlmICh0YXNrLmlzRXhwYW5kZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImV4cGFuc2l2ZSFcIik7XG4gICAgICAgICAgdGFza0V4cGFuZGVkLmFwcGVuZENoaWxkKFRhc2tFeHBhbmRlZCh0YXNrKSk7XG4gICAgICAgICAgdGFza0V4cGFuZGVkLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZFwiKTtcbiAgICAgICAgICBjb25zdCB0YXJnZXRUeXBlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICAgICAgICBsZXQgdGFyZ2V0RmllbGQgPSBcIlwiO1xuICAgICAgICAgIHN3aXRjaCAodGFyZ2V0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgICAgICAgICAgdGFyZ2V0RmllbGQgPSBcIi5kZXNjcmlwdGlvbi10ZXh0YXJlYVwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICAgIHRhcmdldEZpZWxkID0gXCIuZGF0ZS1pbnB1dFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgICAgICAgICB0YXJnZXRGaWVsZCA9IFwiLnByaW9yaXR5LWlucHV0XCI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGFyZ2V0RmllbGQgPSBcIi50aXRsZS1pbnB1dFwiO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFza0V4cGFuZGVkLnF1ZXJ5U2VsZWN0b3IodGFyZ2V0RmllbGQpLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFza0V4cGFuZGVkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgdGFza0V4cGFuZGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGlmICghdG9wUHJvamVjdC5pc1BzZXVkbykge1xuICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXctdGFzay1idG5cIik7XG4gICAgICBhZGRUYXNrQnV0dG9uLmRhdGFzZXQudHlwZSA9IFwiYWRkLXRhc2tcIjtcbiAgICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIisgQWRkIHRhc2tcIjtcbiAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgY3VycmVudFByb2plY3RzKSB7XG4gICAgICBpZiAoIXByb2plY3QuaXNQc2V1ZG8pIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBQcm9qZWN0Q29tcG9uZW50KHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdG9wUHJvamVjdC5pc1BzZXVkbykge1xuICAgICAgc3RhdGUuc3luY1N0b3JhZ2UoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZnJlc2gsXG4gICAgY3JlYXRlTmV3VGFzayxcbiAgICAvL1xuICB9O1xufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbkdVSS5yZWZyZXNoKCk7XG5cbi8qIGZ1bmN0aW9uIGNvcnJlY3REYXRlcygpIHtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBzdGF0ZS5nZXRQcm9qZWN0cygpKSB7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICBpZiAodGFzay5kdWVEYXRlICYmIHRhc2suZHVlRGF0ZS5nZXRGdWxsWWVhcigpID09PSAxOTcwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0YXRlLnN5bmNTdG9yYWdlKCk7XG59XG5jb3JyZWN0RGF0ZXMoKTsgKi9cbiIsImV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuIiwiZXhwb3J0IGNvbnN0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9