/******/ (() => {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ 816: /***/ (module) => {
			"use strict";

			var requestAnimFrame = (function () {
				return (
					window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					function (callback) {
						window.setTimeout(callback, 1000 / 60);
					}
				);
			})();

			function decouple(node, event, fn) {
				var eve,
					tracking = false;

				function captureEvent(e) {
					eve = e;
					track();
				}

				function track() {
					if (!tracking) {
						requestAnimFrame(update);
						tracking = true;
					}
				}

				function update() {
					fn.call(node, eve);
					tracking = false;
				}

				node.addEventListener(event, captureEvent, false);

				return captureEvent;
			}

			/**
			 * Expose decouple
			 */
			module.exports = decouple;

			/***/
		},

		/***/ 626: /***/ (module, exports) => {
			"use strict";

			var _classCallCheck = function (instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			};

			exports.__esModule = true;
			/**
			 * Creates a new instance of Emitter.
			 * @class
			 * @returns {Object} Returns a new instance of Emitter.
			 * @example
			 * // Creates a new instance of Emitter.
			 * var Emitter = require('emitter');
			 *
			 * var emitter = new Emitter();
			 */

			var Emitter = (function () {
				function Emitter() {
					_classCallCheck(this, Emitter);
				}

				/**
				 * Adds a listener to the collection for the specified event.
				 * @memberof! Emitter.prototype
				 * @function
				 * @param {String} event - The event name.
				 * @param {Function} listener - A listener function to add.
				 * @returns {Object} Returns an instance of Emitter.
				 * @example
				 * // Add an event listener to "foo" event.
				 * emitter.on('foo', listener);
				 */

				Emitter.prototype.on = function on(event, listener) {
					// Use the current collection or create it.
					this._eventCollection = this._eventCollection || {};

					// Use the current collection of an event or create it.
					this._eventCollection[event] = this._eventCollection[event] || [];

					// Appends the listener into the collection of the given event
					this._eventCollection[event].push(listener);

					return this;
				};

				/**
				 * Adds a listener to the collection for the specified event that will be called only once.
				 * @memberof! Emitter.prototype
				 * @function
				 * @param {String} event - The event name.
				 * @param {Function} listener - A listener function to add.
				 * @returns {Object} Returns an instance of Emitter.
				 * @example
				 * // Will add an event handler to "foo" event once.
				 * emitter.once('foo', listener);
				 */

				Emitter.prototype.once = function once(event, listener) {
					var self = this;

					function fn() {
						self.off(event, fn);
						listener.apply(this, arguments);
					}

					fn.listener = listener;

					this.on(event, fn);

					return this;
				};

				/**
				 * Removes a listener from the collection for the specified event.
				 * @memberof! Emitter.prototype
				 * @function
				 * @param {String} event - The event name.
				 * @param {Function} listener - A listener function to remove.
				 * @returns {Object} Returns an instance of Emitter.
				 * @example
				 * // Remove a given listener.
				 * emitter.off('foo', listener);
				 */

				Emitter.prototype.off = function off(event, listener) {
					var listeners = undefined;

					// Defines listeners value.
					if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
						return this;
					}

					listeners.forEach(function (fn, i) {
						if (fn === listener || fn.listener === listener) {
							// Removes the given listener.
							listeners.splice(i, 1);
						}
					});

					// Removes an empty event collection.
					if (listeners.length === 0) {
						delete this._eventCollection[event];
					}

					return this;
				};

				/**
				 * Execute each item in the listener collection in order with the specified data.
				 * @memberof! Emitter.prototype
				 * @function
				 * @param {String} event - The name of the event you want to emit.
				 * @param {...Object} data - Data to pass to the listeners.
				 * @returns {Object} Returns an instance of Emitter.
				 * @example
				 * // Emits the "foo" event with 'param1' and 'param2' as arguments.
				 * emitter.emit('foo', 'param1', 'param2');
				 */

				Emitter.prototype.emit = function emit(event) {
					var _this = this;

					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}

					var listeners = undefined;

					// Defines listeners value.
					if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
						return this;
					}

					// Clone listeners
					listeners = listeners.slice(0);

					listeners.forEach(function (fn) {
						return fn.apply(_this, args);
					});

					return this;
				};

				return Emitter;
			})();

			/**
			 * Exports Emitter
			 */
			exports["default"] = Emitter;
			module.exports = exports["default"];

			/***/
		},

		/***/ 508: /***/ function (module) {
			(function webpackUniversalModuleDefinition(root, factory) {
				if (true) module.exports = factory();
				else {
				}
			})(typeof self !== "undefined" ? self : this, function () {
				return /******/ (function (modules) {
					// webpackBootstrap
					/******/ // The module cache
					/******/ var installedModules = {};
					/******/
					/******/ // The require function
					/******/ function __nested_webpack_require_574__(moduleId) {
						/******/
						/******/ // Check if module is in cache
						/******/ if (installedModules[moduleId]) {
							/******/ return installedModules[moduleId].exports;
							/******/
						}
						/******/ // Create a new module (and put it into the cache)
						/******/ var module = (installedModules[moduleId] = {
							/******/ i: moduleId,
							/******/ l: false,
							/******/ exports: {},
							/******/
						});
						/******/
						/******/ // Execute the module function
						/******/ modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_574__);
						/******/
						/******/ // Flag the module as loaded
						/******/ module.l = true;
						/******/
						/******/ // Return the exports of the module
						/******/ return module.exports;
						/******/
					}
					/******/
					/******/
					/******/ // expose the modules object (__webpack_modules__)
					/******/ __nested_webpack_require_574__.m = modules;
					/******/
					/******/ // expose the module cache
					/******/ __nested_webpack_require_574__.c = installedModules;
					/******/
					/******/ // define getter function for harmony exports
					/******/ __nested_webpack_require_574__.d = function (exports, name, getter) {
						/******/ if (!__nested_webpack_require_574__.o(exports, name)) {
							/******/ Object.defineProperty(exports, name, {
								/******/ configurable: false,
								/******/ enumerable: true,
								/******/ get: getter,
								/******/
							});
							/******/
						}
						/******/
					};
					/******/
					/******/ // define __esModule on exports
					/******/ __nested_webpack_require_574__.r = function (exports) {
						/******/ Object.defineProperty(exports, "__esModule", { value: true });
						/******/
					};
					/******/
					/******/ // getDefaultExport function for compatibility with non-harmony modules
					/******/ __nested_webpack_require_574__.n = function (module) {
						/******/ var getter =
							module && module.__esModule
								? /******/ function getDefault() {
										return module["default"];
								  }
								: /******/ function getModuleExports() {
										return module;
								  };
						/******/ __nested_webpack_require_574__.d(getter, "a", getter);
						/******/ return getter;
						/******/
					};
					/******/
					/******/ // Object.prototype.hasOwnProperty.call
					/******/ __nested_webpack_require_574__.o = function (object, property) {
						return Object.prototype.hasOwnProperty.call(object, property);
					};
					/******/
					/******/ // __webpack_public_path__
					/******/ __nested_webpack_require_574__.p = "";
					/******/
					/******/
					/******/ // Load entry module and return exports
					/******/ return __nested_webpack_require_574__((__nested_webpack_require_574__.s = 0));
					/******/
				})(
					/************************************************************************/
					/******/ {
						/***/ "./dist/icons.json":
							/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
							/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
							/***/ function (module) {
								module.exports = {
									activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
									airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
									"alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
									"alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
									"alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
									"align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
									"align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
									"align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
									"align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
									anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
									aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
									archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
									"arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
									"arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
									"arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
									"arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
									"arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
									"arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
									"arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
									"arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
									"arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
									"arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
									"arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
									"arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
									"at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
									award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
									"bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
									"bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
									"battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
									battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
									"bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
									bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
									bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
									bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
									"book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
									book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
									bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
									box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
									briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
									calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
									"camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
									camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
									cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
									"check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
									"check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
									check: '<polyline points="20 6 9 17 4 12"></polyline>',
									"chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
									"chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
									"chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
									"chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
									"chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
									"chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
									"chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
									"chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
									chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
									circle: '<circle cx="12" cy="12" r="10"></circle>',
									clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
									clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
									"cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
									"cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
									"cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
									"cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
									"cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
									cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
									code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
									codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
									codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
									coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
									columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
									command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
									compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
									copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
									"corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
									"corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
									"corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
									"corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
									"corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
									"corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
									"corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
									"corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
									cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
									"credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
									crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
									crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
									database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
									delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
									disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
									"divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
									"divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
									divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
									"dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
									"download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
									download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
									dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
									droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
									"edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
									"edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
									edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
									"external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
									"eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
									eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
									facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
									"fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
									feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
									figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
									"file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
									"file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
									"file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
									file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
									film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
									filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
									flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
									"folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
									"folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
									folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
									framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
									frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
									gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
									"git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
									"git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
									"git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
									"git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
									github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
									gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
									globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
									grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
									"hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
									hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
									headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
									heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
									"help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
									hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
									home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
									image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
									inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
									info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
									instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
									italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
									key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
									layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
									layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
									"life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
									"link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
									link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
									linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
									list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
									loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
									lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
									"log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
									"log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
									mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
									"map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
									map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
									"maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
									maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
									meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
									menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
									"message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
									"message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
									"mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
									mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
									"minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
									minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
									"minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
									"minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
									minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
									monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
									moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
									"more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
									"more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
									"mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
									move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
									music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
									"navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
									navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
									octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
									package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
									paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
									"pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
									pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
									"pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
									percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
									"phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
									"phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
									"phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
									"phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
									"phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
									"phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
									phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
									"pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
									"play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
									play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
									"plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
									"plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
									plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
									pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
									power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
									printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
									radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
									"refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
									"refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
									repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
									rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
									"rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
									"rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
									rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
									save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
									scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
									search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
									send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
									server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
									settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
									"share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
									share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
									"shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
									shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
									"shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
									"shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
									shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
									sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
									"skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
									"skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
									slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
									slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
									sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
									smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
									smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
									speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
									square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
									star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
									"stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
									sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
									sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
									sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
									tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
									tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
									target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
									terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
									thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
									"thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
									"thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
									"toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
									"toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
									tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
									"trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
									trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
									trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
									"trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
									"trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
									triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
									truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
									tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
									twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
									twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
									type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
									umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
									underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
									unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
									"upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
									upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
									"user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
									"user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
									"user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
									"user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
									user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
									users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
									"video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
									video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
									voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
									"volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
									"volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
									"volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
									volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
									watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
									"wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
									wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
									wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
									"x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
									"x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
									"x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
									x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
									youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
									"zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
									zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
									"zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
									"zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
								};

								/***/
							},

						/***/ "./node_modules/classnames/dedupe.js":
							/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
							/*! no static exports found */
							/***/ function (module, exports, __webpack_require__) {
								var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
								/* global define */

								(function () {
									"use strict";

									var classNames = (function () {
										// don't inherit from Object so we can skip hasOwnProperty check later
										// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
										function StorageObject() {}
										StorageObject.prototype = Object.create(null);

										function _parseArray(resultSet, array) {
											var length = array.length;

											for (var i = 0; i < length; ++i) {
												_parse(resultSet, array[i]);
											}
										}

										var hasOwn = {}.hasOwnProperty;

										function _parseNumber(resultSet, num) {
											resultSet[num] = true;
										}

										function _parseObject(resultSet, object) {
											for (var k in object) {
												if (hasOwn.call(object, k)) {
													// set value to false instead of deleting it to avoid changing object structure
													// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
													resultSet[k] = !!object[k];
												}
											}
										}

										var SPACE = /\s+/;
										function _parseString(resultSet, str) {
											var array = str.split(SPACE);
											var length = array.length;

											for (var i = 0; i < length; ++i) {
												resultSet[array[i]] = true;
											}
										}

										function _parse(resultSet, arg) {
											if (!arg) return;
											var argType = typeof arg;

											// 'foo bar'
											if (argType === "string") {
												_parseString(resultSet, arg);

												// ['foo', 'bar', ...]
											} else if (Array.isArray(arg)) {
												_parseArray(resultSet, arg);

												// { 'foo': true, ... }
											} else if (argType === "object") {
												_parseObject(resultSet, arg);

												// '130'
											} else if (argType === "number") {
												_parseNumber(resultSet, arg);
											}
										}

										function _classNames() {
											// don't leak arguments
											// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
											var len = arguments.length;
											var args = Array(len);
											for (var i = 0; i < len; i++) {
												args[i] = arguments[i];
											}

											var classSet = new StorageObject();
											_parseArray(classSet, args);

											var list = [];

											for (var k in classSet) {
												if (classSet[k]) {
													list.push(k);
												}
											}

											return list.join(" ");
										}

										return _classNames;
									})();

									if (typeof module !== "undefined" && module.exports) {
										module.exports = classNames;
									} else if (true) {
										// register as 'classnames', consistent with npm package name
										!((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
										(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
											return classNames;
										}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
										__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
									} else {
									}
								})();

								/***/
							},

						/***/ "./node_modules/core-js/es/array/from.js":
							/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_63153__) {
								__nested_webpack_require_63153__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
								__nested_webpack_require_63153__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
								var path = __nested_webpack_require_63153__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

								module.exports = path.Array.from;

								/***/
							},

						/***/ "./node_modules/core-js/internals/a-function.js":
							/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								module.exports = function (it) {
									if (typeof it != "function") {
										throw TypeError(String(it) + " is not a function");
									}
									return it;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/an-object.js":
							/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_64303__) {
								var isObject = __nested_webpack_require_64303__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

								module.exports = function (it) {
									if (!isObject(it)) {
										throw TypeError(String(it) + " is not an object");
									}
									return it;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/array-from.js":
							/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_64884__) {
								"use strict";

								var bind = __nested_webpack_require_64884__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
								var toObject = __nested_webpack_require_64884__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
								var callWithSafeIterationClosing = __nested_webpack_require_64884__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
								var isArrayIteratorMethod = __nested_webpack_require_64884__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
								var toLength = __nested_webpack_require_64884__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
								var createProperty = __nested_webpack_require_64884__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
								var getIteratorMethod = __nested_webpack_require_64884__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

								// `Array.from` method
								// https://tc39.github.io/ecma262/#sec-array.from
								module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
									var O = toObject(arrayLike);
									var C = typeof this == "function" ? this : Array;
									var argumentsLength = arguments.length;
									var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
									var mapping = mapfn !== undefined;
									var index = 0;
									var iteratorMethod = getIteratorMethod(O);
									var length, result, step, iterator;
									if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
									// if the target is not iterable or it's an array with the default iterator - use a simple case
									if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
										iterator = iteratorMethod.call(O);
										result = new C();
										for (; !(step = iterator.next()).done; index++) {
											createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value);
										}
									} else {
										length = toLength(O.length);
										result = new C(length);
										for (; length > index; index++) {
											createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
										}
									}
									result.length = index;
									return result;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/array-includes.js":
							/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_67506__) {
								var toIndexedObject = __nested_webpack_require_67506__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
								var toLength = __nested_webpack_require_67506__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
								var toAbsoluteIndex = __nested_webpack_require_67506__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

								// `Array.prototype.{ indexOf, includes }` methods implementation
								// false -> Array#indexOf
								// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
								// true  -> Array#includes
								// https://tc39.github.io/ecma262/#sec-array.prototype.includes
								module.exports = function (IS_INCLUDES) {
									return function ($this, el, fromIndex) {
										var O = toIndexedObject($this);
										var length = toLength(O.length);
										var index = toAbsoluteIndex(fromIndex, length);
										var value;
										// Array#includes uses SameValueZero equality algorithm
										// eslint-disable-next-line no-self-compare
										if (IS_INCLUDES && el != el)
											while (length > index) {
												value = O[index++];
												// eslint-disable-next-line no-self-compare
												if (value != value) return true;
												// Array#indexOf ignores holes, Array#includes - not
											}
										else
											for (; length > index; index++)
												if (IS_INCLUDES || index in O) {
													if (O[index] === el) return IS_INCLUDES || index || 0;
												}
										return !IS_INCLUDES && -1;
									};
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/bind-context.js":
							/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_69228__) {
								var aFunction = __nested_webpack_require_69228__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

								// optional / simple context binding
								module.exports = function (fn, that, length) {
									aFunction(fn);
									if (that === undefined) return fn;
									switch (length) {
										case 0:
											return function () {
												return fn.call(that);
											};
										case 1:
											return function (a) {
												return fn.call(that, a);
											};
										case 2:
											return function (a, b) {
												return fn.call(that, a, b);
											};
										case 3:
											return function (a, b, c) {
												return fn.call(that, a, b, c);
											};
									}
									return function (/* ...args */) {
										return fn.apply(that, arguments);
									};
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
							/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_70317__) {
								var anObject = __nested_webpack_require_70317__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

								// call something on iterator step with safe closing on error
								module.exports = function (iterator, fn, value, ENTRIES) {
									try {
										return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
										// 7.4.6 IteratorClose(iterator, completion)
									} catch (error) {
										var returnMethod = iterator["return"];
										if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
										throw error;
									}
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
							/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_71254__) {
								var wellKnownSymbol = __nested_webpack_require_71254__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

								var ITERATOR = wellKnownSymbol("iterator");
								var SAFE_CLOSING = false;

								try {
									var called = 0;
									var iteratorWithReturn = {
										next: function () {
											return { done: !!called++ };
										},
										return: function () {
											SAFE_CLOSING = true;
										},
									};
									iteratorWithReturn[ITERATOR] = function () {
										return this;
									};
									// eslint-disable-next-line no-throw-literal
									Array.from(iteratorWithReturn, function () {
										throw 2;
									});
								} catch (error) {
									/* empty */
								}

								module.exports = function (exec, SKIP_CLOSING) {
									if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
									var ITERATION_SUPPORT = false;
									try {
										var object = {};
										object[ITERATOR] = function () {
											return {
												next: function () {
													return { done: (ITERATION_SUPPORT = true) };
												},
											};
										};
										exec(object);
									} catch (error) {
										/* empty */
									}
									return ITERATION_SUPPORT;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/classof-raw.js":
							/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								var toString = {}.toString;

								module.exports = function (it) {
									return toString.call(it).slice(8, -1);
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/classof.js":
							/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_73012__) {
								var classofRaw = __nested_webpack_require_73012__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
								var wellKnownSymbol = __nested_webpack_require_73012__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

								var TO_STRING_TAG = wellKnownSymbol("toStringTag");
								// ES3 wrong here
								var CORRECT_ARGUMENTS =
									classofRaw(
										(function () {
											return arguments;
										})()
									) == "Arguments";

								// fallback for IE11 Script Access Denied error
								var tryGet = function (it, key) {
									try {
										return it[key];
									} catch (error) {
										/* empty */
									}
								};

								// getting tag from ES6+ `Object.prototype.toString`
								module.exports = function (it) {
									var O, tag, result;
									return it === undefined
										? "Undefined"
										: it === null
										? "Null"
										: // @@toStringTag case
										typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG)) == "string"
										? tag
										: // builtinTag case
										CORRECT_ARGUMENTS
										? classofRaw(O)
										: // ES3 arguments fallback
										(result = classofRaw(O)) == "Object" && typeof O.callee == "function"
										? "Arguments"
										: result;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
							/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_74453__) {
								var has = __nested_webpack_require_74453__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
								var ownKeys = __nested_webpack_require_74453__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
								var getOwnPropertyDescriptorModule = __nested_webpack_require_74453__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
								var definePropertyModule = __nested_webpack_require_74453__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

								module.exports = function (target, source) {
									var keys = ownKeys(source);
									var defineProperty = definePropertyModule.f;
									var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
									for (var i = 0; i < keys.length; i++) {
										var key = keys[i];
										if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
									}
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
							/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_75752__) {
								var fails = __nested_webpack_require_75752__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

								module.exports = !fails(function () {
									function F() {
										/* empty */
									}
									F.prototype.constructor = null;
									return Object.getPrototypeOf(new F()) !== F.prototype;
								});

								/***/
							},

						/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
							/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_76425__) {
								"use strict";

								var IteratorPrototype = __nested_webpack_require_76425__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
								var create = __nested_webpack_require_76425__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
								var createPropertyDescriptor = __nested_webpack_require_76425__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
								var setToStringTag = __nested_webpack_require_76425__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
								var Iterators = __nested_webpack_require_76425__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

								var returnThis = function () {
									return this;
								};

								module.exports = function (IteratorConstructor, NAME, next) {
									var TO_STRING_TAG = NAME + " Iterator";
									IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
									setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
									Iterators[TO_STRING_TAG] = returnThis;
									return IteratorConstructor;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
							/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								module.exports = function (bitmap, value) {
									return {
										enumerable: !(bitmap & 1),
										configurable: !(bitmap & 2),
										writable: !(bitmap & 4),
										value: value,
									};
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/create-property.js":
							/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_78439__) {
								"use strict";

								var toPrimitive = __nested_webpack_require_78439__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
								var definePropertyModule = __nested_webpack_require_78439__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
								var createPropertyDescriptor = __nested_webpack_require_78439__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

								module.exports = function (object, key, value) {
									var propertyKey = toPrimitive(key);
									if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
									else object[propertyKey] = value;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/define-iterator.js":
							/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_79489__) {
								"use strict";

								var $ = __nested_webpack_require_79489__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
								var createIteratorConstructor = __nested_webpack_require_79489__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
								var getPrototypeOf = __nested_webpack_require_79489__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
								var setPrototypeOf = __nested_webpack_require_79489__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
								var setToStringTag = __nested_webpack_require_79489__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
								var hide = __nested_webpack_require_79489__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
								var redefine = __nested_webpack_require_79489__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
								var wellKnownSymbol = __nested_webpack_require_79489__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
								var IS_PURE = __nested_webpack_require_79489__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
								var Iterators = __nested_webpack_require_79489__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
								var IteratorsCore = __nested_webpack_require_79489__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

								var IteratorPrototype = IteratorsCore.IteratorPrototype;
								var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
								var ITERATOR = wellKnownSymbol("iterator");
								var KEYS = "keys";
								var VALUES = "values";
								var ENTRIES = "entries";

								var returnThis = function () {
									return this;
								};

								module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
									createIteratorConstructor(IteratorConstructor, NAME, next);

									var getIterationMethod = function (KIND) {
										if (KIND === DEFAULT && defaultIterator) return defaultIterator;
										if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
										switch (KIND) {
											case KEYS:
												return function keys() {
													return new IteratorConstructor(this, KIND);
												};
											case VALUES:
												return function values() {
													return new IteratorConstructor(this, KIND);
												};
											case ENTRIES:
												return function entries() {
													return new IteratorConstructor(this, KIND);
												};
										}
										return function () {
											return new IteratorConstructor(this);
										};
									};

									var TO_STRING_TAG = NAME + " Iterator";
									var INCORRECT_VALUES_NAME = false;
									var IterablePrototype = Iterable.prototype;
									var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || (DEFAULT && IterablePrototype[DEFAULT]);
									var defaultIterator = (!BUGGY_SAFARI_ITERATORS && nativeIterator) || getIterationMethod(DEFAULT);
									var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
									var CurrentIteratorPrototype, methods, KEY;

									// fix native
									if (anyNativeIterator) {
										CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
										if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
											if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
												if (setPrototypeOf) {
													setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
												} else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
													hide(CurrentIteratorPrototype, ITERATOR, returnThis);
												}
											}
											// Set @@toStringTag to native iterators
											setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
											if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
										}
									}

									// fix Array#{values, @@iterator}.name in V8 / FF
									if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
										INCORRECT_VALUES_NAME = true;
										defaultIterator = function values() {
											return nativeIterator.call(this);
										};
									}

									// define iterator
									if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
										hide(IterablePrototype, ITERATOR, defaultIterator);
									}
									Iterators[NAME] = defaultIterator;

									// export additional methods
									if (DEFAULT) {
										methods = {
											values: getIterationMethod(VALUES),
											keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
											entries: getIterationMethod(ENTRIES),
										};
										if (FORCED)
											for (KEY in methods) {
												if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
													redefine(IterablePrototype, KEY, methods[KEY]);
												}
											}
										else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
									}

									return methods;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/descriptors.js":
							/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_84548__) {
								var fails = __nested_webpack_require_84548__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

								// Thank's IE8 for his funny defineProperty
								module.exports = !fails(function () {
									return (
										Object.defineProperty({}, "a", {
											get: function () {
												return 7;
											},
										}).a != 7
									);
								});

								/***/
							},

						/***/ "./node_modules/core-js/internals/document-create-element.js":
							/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_85211__) {
								var global = __nested_webpack_require_85211__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var isObject = __nested_webpack_require_85211__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

								var document = global.document;
								// typeof document.createElement is 'object' in old IE
								var exist = isObject(document) && isObject(document.createElement);

								module.exports = function (it) {
									return exist ? document.createElement(it) : {};
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
							/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								// IE8- don't enum bug keys
								module.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];

								/***/
							},

						/***/ "./node_modules/core-js/internals/export.js":
							/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_86501__) {
								var global = __nested_webpack_require_86501__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var getOwnPropertyDescriptor = __nested_webpack_require_86501__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
								var hide = __nested_webpack_require_86501__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
								var redefine = __nested_webpack_require_86501__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
								var setGlobal = __nested_webpack_require_86501__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
								var copyConstructorProperties = __nested_webpack_require_86501__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
								var isForced = __nested_webpack_require_86501__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

								/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
								module.exports = function (options, source) {
									var TARGET = options.target;
									var GLOBAL = options.global;
									var STATIC = options.stat;
									var FORCED, target, key, targetProperty, sourceProperty, descriptor;
									if (GLOBAL) {
										target = global;
									} else if (STATIC) {
										target = global[TARGET] || setGlobal(TARGET, {});
									} else {
										target = (global[TARGET] || {}).prototype;
									}
									if (target)
										for (key in source) {
											sourceProperty = source[key];
											if (options.noTargetGet) {
												descriptor = getOwnPropertyDescriptor(target, key);
												targetProperty = descriptor && descriptor.value;
											} else targetProperty = target[key];
											FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
											// contained in target
											if (!FORCED && targetProperty !== undefined) {
												if (typeof sourceProperty === typeof targetProperty) continue;
												copyConstructorProperties(sourceProperty, targetProperty);
											}
											// add a flag to not completely full polyfills
											if (options.sham || (targetProperty && targetProperty.sham)) {
												hide(sourceProperty, "sham", true);
											}
											// extend global
											redefine(target, key, sourceProperty, options);
										}
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/fails.js":
							/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								module.exports = function (exec) {
									try {
										return !!exec();
									} catch (error) {
										return true;
									}
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/function-to-string.js":
							/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_90209__) {
								var shared = __nested_webpack_require_90209__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

								module.exports = shared("native-function-to-string", Function.toString);

								/***/
							},

						/***/ "./node_modules/core-js/internals/get-iterator-method.js":
							/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_90762__) {
								var classof = __nested_webpack_require_90762__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
								var Iterators = __nested_webpack_require_90762__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
								var wellKnownSymbol = __nested_webpack_require_90762__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

								var ITERATOR = wellKnownSymbol("iterator");

								module.exports = function (it) {
									if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/global.js":
							/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_91626__) {
								/* WEBPACK VAR INJECTION */ (function (global) {
									var O = "object";
									var check = function (it) {
										return it && it.Math == Math && it;
									};

									// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
									module.exports =
										// eslint-disable-next-line no-undef
										check(typeof globalThis == O && globalThis) ||
										check(typeof window == O && window) ||
										check(typeof self == O && self) ||
										check(typeof global == O && global) ||
										// eslint-disable-next-line no-new-func
										Function("return this")();

									/* WEBPACK VAR INJECTION */
								}.call(this, __nested_webpack_require_91626__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));

								/***/
							},

						/***/ "./node_modules/core-js/internals/has.js":
							/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								var hasOwnProperty = {}.hasOwnProperty;

								module.exports = function (it, key) {
									return hasOwnProperty.call(it, key);
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/hidden-keys.js":
							/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								module.exports = {};

								/***/
							},

						/***/ "./node_modules/core-js/internals/hide.js":
							/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_93334__) {
								var DESCRIPTORS = __nested_webpack_require_93334__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
								var definePropertyModule = __nested_webpack_require_93334__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
								var createPropertyDescriptor = __nested_webpack_require_93334__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

								module.exports = DESCRIPTORS
									? function (object, key, value) {
											return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
									  }
									: function (object, key, value) {
											object[key] = value;
											return object;
									  };

								/***/
							},

						/***/ "./node_modules/core-js/internals/html.js":
							/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_94311__) {
								var global = __nested_webpack_require_94311__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

								var document = global.document;

								module.exports = document && document.documentElement;

								/***/
							},

						/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
							/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_94859__) {
								var DESCRIPTORS = __nested_webpack_require_94859__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
								var fails = __nested_webpack_require_94859__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
								var createElement = __nested_webpack_require_94859__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

								// Thank's IE8 for his funny defineProperty
								module.exports =
									!DESCRIPTORS &&
									!fails(function () {
										return (
											Object.defineProperty(createElement("div"), "a", {
												get: function () {
													return 7;
												},
											}).a != 7
										);
									});

								/***/
							},

						/***/ "./node_modules/core-js/internals/indexed-object.js":
							/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_95796__) {
								// fallback for non-array-like ES3 and non-enumerable old V8 strings
								var fails = __nested_webpack_require_95796__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
								var classof = __nested_webpack_require_95796__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

								var split = "".split;

								module.exports = fails(function () {
									// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
									// eslint-disable-next-line no-prototype-builtins
									return !Object("z").propertyIsEnumerable(0);
								})
									? function (it) {
											return classof(it) == "String" ? split.call(it, "") : Object(it);
									  }
									: Object;

								/***/
							},

						/***/ "./node_modules/core-js/internals/internal-state.js":
							/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_96779__) {
								var NATIVE_WEAK_MAP = __nested_webpack_require_96779__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
								var global = __nested_webpack_require_96779__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var isObject = __nested_webpack_require_96779__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
								var hide = __nested_webpack_require_96779__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
								var objectHas = __nested_webpack_require_96779__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
								var sharedKey = __nested_webpack_require_96779__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
								var hiddenKeys = __nested_webpack_require_96779__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

								var WeakMap = global.WeakMap;
								var set, get, has;

								var enforce = function (it) {
									return has(it) ? get(it) : set(it, {});
								};

								var getterFor = function (TYPE) {
									return function (it) {
										var state;
										if (!isObject(it) || (state = get(it)).type !== TYPE) {
											throw TypeError("Incompatible receiver, " + TYPE + " required");
										}
										return state;
									};
								};

								if (NATIVE_WEAK_MAP) {
									var store = new WeakMap();
									var wmget = store.get;
									var wmhas = store.has;
									var wmset = store.set;
									set = function (it, metadata) {
										wmset.call(store, it, metadata);
										return metadata;
									};
									get = function (it) {
										return wmget.call(store, it) || {};
									};
									has = function (it) {
										return wmhas.call(store, it);
									};
								} else {
									var STATE = sharedKey("state");
									hiddenKeys[STATE] = true;
									set = function (it, metadata) {
										hide(it, STATE, metadata);
										return metadata;
									};
									get = function (it) {
										return objectHas(it, STATE) ? it[STATE] : {};
									};
									has = function (it) {
										return objectHas(it, STATE);
									};
								}

								module.exports = {
									set: set,
									get: get,
									has: has,
									enforce: enforce,
									getterFor: getterFor,
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
							/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_99095__) {
								var wellKnownSymbol = __nested_webpack_require_99095__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
								var Iterators = __nested_webpack_require_99095__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

								var ITERATOR = wellKnownSymbol("iterator");
								var ArrayPrototype = Array.prototype;

								// check on default Array iterator
								module.exports = function (it) {
									return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/is-forced.js":
							/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_99926__) {
								var fails = __nested_webpack_require_99926__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

								var replacement = /#|\.prototype\./;

								var isForced = function (feature, detection) {
									var value = data[normalize(feature)];
									return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
								};

								var normalize = (isForced.normalize = function (string) {
									return String(string).replace(replacement, ".").toLowerCase();
								});

								var data = (isForced.data = {});
								var NATIVE = (isForced.NATIVE = "N");
								var POLYFILL = (isForced.POLYFILL = "P");

								module.exports = isForced;

								/***/
							},

						/***/ "./node_modules/core-js/internals/is-object.js":
							/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								module.exports = function (it) {
									return typeof it === "object" ? it !== null : typeof it === "function";
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/is-pure.js":
							/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								module.exports = false;

								/***/
							},

						/***/ "./node_modules/core-js/internals/iterators-core.js":
							/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_101660__) {
								"use strict";

								var getPrototypeOf = __nested_webpack_require_101660__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
								var hide = __nested_webpack_require_101660__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
								var has = __nested_webpack_require_101660__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
								var wellKnownSymbol = __nested_webpack_require_101660__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
								var IS_PURE = __nested_webpack_require_101660__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

								var ITERATOR = wellKnownSymbol("iterator");
								var BUGGY_SAFARI_ITERATORS = false;

								var returnThis = function () {
									return this;
								};

								// `%IteratorPrototype%` object
								// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
								var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

								if ([].keys) {
									arrayIterator = [].keys();
									// Safari 8 has buggy iterators w/o `next`
									if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
									else {
										PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
										if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
									}
								}

								if (IteratorPrototype == undefined) IteratorPrototype = {};

								// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
								if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

								module.exports = {
									IteratorPrototype: IteratorPrototype,
									BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS,
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/iterators.js":
							/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								module.exports = {};

								/***/
							},

						/***/ "./node_modules/core-js/internals/native-symbol.js":
							/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_103948__) {
								var fails = __nested_webpack_require_103948__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

								module.exports =
									!!Object.getOwnPropertySymbols &&
									!fails(function () {
										// Chrome 38 Symbol has incorrect toString conversion
										// eslint-disable-next-line no-undef
										return !String(Symbol());
									});

								/***/
							},

						/***/ "./node_modules/core-js/internals/native-weak-map.js":
							/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_104608__) {
								var global = __nested_webpack_require_104608__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var nativeFunctionToString = __nested_webpack_require_104608__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

								var WeakMap = global.WeakMap;

								module.exports = typeof WeakMap === "function" && /native code/.test(nativeFunctionToString.call(WeakMap));

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-create.js":
							/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_105350__) {
								var anObject = __nested_webpack_require_105350__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
								var defineProperties = __nested_webpack_require_105350__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
								var enumBugKeys = __nested_webpack_require_105350__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
								var hiddenKeys = __nested_webpack_require_105350__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
								var html = __nested_webpack_require_105350__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
								var documentCreateElement = __nested_webpack_require_105350__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
								var sharedKey = __nested_webpack_require_105350__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
								var IE_PROTO = sharedKey("IE_PROTO");

								var PROTOTYPE = "prototype";
								var Empty = function () {
									/* empty */
								};

								// Create object with fake `null` prototype: use iframe Object with cleared prototype
								var createDict = function () {
									// Thrash, waste and sodomy: IE GC bug
									var iframe = documentCreateElement("iframe");
									var length = enumBugKeys.length;
									var lt = "<";
									var script = "script";
									var gt = ">";
									var js = "java" + script + ":";
									var iframeDocument;
									iframe.style.display = "none";
									html.appendChild(iframe);
									iframe.src = String(js);
									iframeDocument = iframe.contentWindow.document;
									iframeDocument.open();
									iframeDocument.write(lt + script + gt + "document.F=Object" + lt + "/" + script + gt);
									iframeDocument.close();
									createDict = iframeDocument.F;
									while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
									return createDict();
								};

								// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
								module.exports =
									Object.create ||
									function create(O, Properties) {
										var result;
										if (O !== null) {
											Empty[PROTOTYPE] = anObject(O);
											result = new Empty();
											Empty[PROTOTYPE] = null;
											// add "__proto__" for Object.getPrototypeOf polyfill
											result[IE_PROTO] = O;
										} else result = createDict();
										return Properties === undefined ? result : defineProperties(result, Properties);
									};

								hiddenKeys[IE_PROTO] = true;

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-define-properties.js":
							/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_107983__) {
								var DESCRIPTORS = __nested_webpack_require_107983__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
								var definePropertyModule = __nested_webpack_require_107983__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
								var anObject = __nested_webpack_require_107983__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
								var objectKeys = __nested_webpack_require_107983__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

								module.exports = DESCRIPTORS
									? Object.defineProperties
									: function defineProperties(O, Properties) {
											anObject(O);
											var keys = objectKeys(Properties);
											var length = keys.length;
											var i = 0;
											var key;
											while (length > i) definePropertyModule.f(O, (key = keys[i++]), Properties[key]);
											return O;
									  };

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-define-property.js":
							/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_109180__) {
								var DESCRIPTORS = __nested_webpack_require_109180__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
								var IE8_DOM_DEFINE = __nested_webpack_require_109180__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
								var anObject = __nested_webpack_require_109180__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
								var toPrimitive = __nested_webpack_require_109180__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

								var nativeDefineProperty = Object.defineProperty;

								exports.f = DESCRIPTORS
									? nativeDefineProperty
									: function defineProperty(O, P, Attributes) {
											anObject(O);
											P = toPrimitive(P, true);
											anObject(Attributes);
											if (IE8_DOM_DEFINE)
												try {
													return nativeDefineProperty(O, P, Attributes);
												} catch (error) {
													/* empty */
												}
											if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
											if ("value" in Attributes) O[P] = Attributes.value;
											return O;
									  };

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
							/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_110592__) {
								var DESCRIPTORS = __nested_webpack_require_110592__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
								var propertyIsEnumerableModule = __nested_webpack_require_110592__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
								var createPropertyDescriptor = __nested_webpack_require_110592__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
								var toIndexedObject = __nested_webpack_require_110592__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
								var toPrimitive = __nested_webpack_require_110592__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
								var has = __nested_webpack_require_110592__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
								var IE8_DOM_DEFINE = __nested_webpack_require_110592__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

								var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

								exports.f = DESCRIPTORS
									? nativeGetOwnPropertyDescriptor
									: function getOwnPropertyDescriptor(O, P) {
											O = toIndexedObject(O);
											P = toPrimitive(P, true);
											if (IE8_DOM_DEFINE)
												try {
													return nativeGetOwnPropertyDescriptor(O, P);
												} catch (error) {
													/* empty */
												}
											if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
									  };

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
							/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_112394__) {
								// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
								var internalObjectKeys = __nested_webpack_require_112394__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
								var enumBugKeys = __nested_webpack_require_112394__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

								var hiddenKeys = enumBugKeys.concat("length", "prototype");

								exports.f =
									Object.getOwnPropertyNames ||
									function getOwnPropertyNames(O) {
										return internalObjectKeys(O, hiddenKeys);
									};

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
							/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								exports.f = Object.getOwnPropertySymbols;

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
							/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_113734__) {
								var has = __nested_webpack_require_113734__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
								var toObject = __nested_webpack_require_113734__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
								var sharedKey = __nested_webpack_require_113734__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
								var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_113734__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

								var IE_PROTO = sharedKey("IE_PROTO");
								var ObjectPrototype = Object.prototype;

								// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
								module.exports = CORRECT_PROTOTYPE_GETTER
									? Object.getPrototypeOf
									: function (O) {
											O = toObject(O);
											if (has(O, IE_PROTO)) return O[IE_PROTO];
											if (typeof O.constructor == "function" && O instanceof O.constructor) {
												return O.constructor.prototype;
											}
											return O instanceof Object ? ObjectPrototype : null;
									  };

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-keys-internal.js":
							/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_115046__) {
								var has = __nested_webpack_require_115046__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
								var toIndexedObject = __nested_webpack_require_115046__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
								var arrayIncludes = __nested_webpack_require_115046__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
								var hiddenKeys = __nested_webpack_require_115046__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

								var arrayIndexOf = arrayIncludes(false);

								module.exports = function (object, names) {
									var O = toIndexedObject(object);
									var i = 0;
									var result = [];
									var key;
									for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
									// Don't enum bug & hidden keys
									while (names.length > i)
										if (has(O, (key = names[i++]))) {
											~arrayIndexOf(result, key) || result.push(key);
										}
									return result;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-keys.js":
							/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_116282__) {
								var internalObjectKeys = __nested_webpack_require_116282__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
								var enumBugKeys = __nested_webpack_require_116282__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

								// 19.1.2.14 / 15.2.3.14 Object.keys(O)
								module.exports =
									Object.keys ||
									function keys(O) {
										return internalObjectKeys(O, enumBugKeys);
									};

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
							/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __webpack_require__) {
								"use strict";

								var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
								var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

								// Nashorn ~ JDK8 bug
								var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

								exports.f = NASHORN_BUG
									? function propertyIsEnumerable(V) {
											var descriptor = getOwnPropertyDescriptor(this, V);
											return !!descriptor && descriptor.enumerable;
									  }
									: nativePropertyIsEnumerable;

								/***/
							},

						/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
							/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_117944__) {
								var validateSetPrototypeOfArguments = __nested_webpack_require_117944__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

								// Works with __proto__ only. Old v8 can't work with null proto objects.
								/* eslint-disable no-proto */
								module.exports =
									Object.setPrototypeOf ||
									("__proto__" in {}
										? (function () {
												var correctSetter = false;
												var test = {};
												var setter;
												try {
													setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
													setter.call(test, []);
													correctSetter = test instanceof Array;
												} catch (error) {
													/* empty */
												}
												return function setPrototypeOf(O, proto) {
													validateSetPrototypeOfArguments(O, proto);
													if (correctSetter) setter.call(O, proto);
													else O.__proto__ = proto;
													return O;
												};
										  })()
										: undefined);

								/***/
							},

						/***/ "./node_modules/core-js/internals/own-keys.js":
							/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_119101__) {
								var global = __nested_webpack_require_119101__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var getOwnPropertyNamesModule = __nested_webpack_require_119101__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
								var getOwnPropertySymbolsModule = __nested_webpack_require_119101__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
								var anObject = __nested_webpack_require_119101__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

								var Reflect = global.Reflect;

								// all object keys, includes non-enumerable and symbols
								module.exports =
									(Reflect && Reflect.ownKeys) ||
									function ownKeys(it) {
										var keys = getOwnPropertyNamesModule.f(anObject(it));
										var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
										return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
									};

								/***/
							},

						/***/ "./node_modules/core-js/internals/path.js":
							/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_120343__) {
								module.exports = __nested_webpack_require_120343__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

								/***/
							},

						/***/ "./node_modules/core-js/internals/redefine.js":
							/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_120782__) {
								var global = __nested_webpack_require_120782__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var shared = __nested_webpack_require_120782__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
								var hide = __nested_webpack_require_120782__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
								var has = __nested_webpack_require_120782__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
								var setGlobal = __nested_webpack_require_120782__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
								var nativeFunctionToString = __nested_webpack_require_120782__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
								var InternalStateModule = __nested_webpack_require_120782__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

								var getInternalState = InternalStateModule.get;
								var enforceInternalState = InternalStateModule.enforce;
								var TEMPLATE = String(nativeFunctionToString).split("toString");

								shared("inspectSource", function (it) {
									return nativeFunctionToString.call(it);
								});

								(module.exports = function (O, key, value, options) {
									var unsafe = options ? !!options.unsafe : false;
									var simple = options ? !!options.enumerable : false;
									var noTargetGet = options ? !!options.noTargetGet : false;
									if (typeof value == "function") {
										if (typeof key == "string" && !has(value, "name")) hide(value, "name", key);
										enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
									}
									if (O === global) {
										if (simple) O[key] = value;
										else setGlobal(key, value);
										return;
									} else if (!unsafe) {
										delete O[key];
									} else if (!noTargetGet && O[key]) {
										simple = true;
									}
									if (simple) O[key] = value;
									else hide(O, key, value);
									// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
								})(Function.prototype, "toString", function toString() {
									return (typeof this == "function" && getInternalState(this).source) || nativeFunctionToString.call(this);
								});

								/***/
							},

						/***/ "./node_modules/core-js/internals/require-object-coercible.js":
							/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								// `RequireObjectCoercible` abstract operation
								// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
								module.exports = function (it) {
									if (it == undefined) throw TypeError("Can't call method on " + it);
									return it;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/set-global.js":
							/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_123762__) {
								var global = __nested_webpack_require_123762__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var hide = __nested_webpack_require_123762__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

								module.exports = function (key, value) {
									try {
										hide(global, key, value);
									} catch (error) {
										global[key] = value;
									}
									return value;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
							/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_124480__) {
								var defineProperty = __nested_webpack_require_124480__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
								var has = __nested_webpack_require_124480__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
								var wellKnownSymbol = __nested_webpack_require_124480__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

								var TO_STRING_TAG = wellKnownSymbol("toStringTag");

								module.exports = function (it, TAG, STATIC) {
									if (it && !has((it = STATIC ? it : it.prototype), TO_STRING_TAG)) {
										defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
									}
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/shared-key.js":
							/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_125451__) {
								var shared = __nested_webpack_require_125451__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
								var uid = __nested_webpack_require_125451__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

								var keys = shared("keys");

								module.exports = function (key) {
									return keys[key] || (keys[key] = uid(key));
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/shared.js":
							/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_126088__) {
								var global = __nested_webpack_require_126088__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var setGlobal = __nested_webpack_require_126088__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
								var IS_PURE = __nested_webpack_require_126088__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

								var SHARED = "__core-js_shared__";
								var store = global[SHARED] || setGlobal(SHARED, {});

								(module.exports = function (key, value) {
									return store[key] || (store[key] = value !== undefined ? value : {});
								})("versions", []).push({
									version: "3.1.3",
									mode: IS_PURE ? "pure" : "global",
									copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
								});

								/***/
							},

						/***/ "./node_modules/core-js/internals/string-at.js":
							/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_127098__) {
								var toInteger = __nested_webpack_require_127098__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
								var requireObjectCoercible = __nested_webpack_require_127098__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

								// CONVERT_TO_STRING: true  -> String#at
								// CONVERT_TO_STRING: false -> String#codePointAt
								module.exports = function (that, pos, CONVERT_TO_STRING) {
									var S = String(requireObjectCoercible(that));
									var position = toInteger(pos);
									var size = S.length;
									var first, second;
									if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
									first = S.charCodeAt(position);
									return first < 0xd800 || first > 0xdbff || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xdc00 || second > 0xdfff ? (CONVERT_TO_STRING ? S.charAt(position) : first) : CONVERT_TO_STRING ? S.slice(position, position + 2) : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/to-absolute-index.js":
							/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_128446__) {
								var toInteger = __nested_webpack_require_128446__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

								var max = Math.max;
								var min = Math.min;

								// Helper for a popular repeating case of the spec:
								// Let integer be ? ToInteger(index).
								// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
								module.exports = function (index, length) {
									var integer = toInteger(index);
									return integer < 0 ? max(integer + length, 0) : min(integer, length);
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/to-indexed-object.js":
							/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_129314__) {
								// toObject with fallback for non-array-like ES3 strings
								var IndexedObject = __nested_webpack_require_129314__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
								var requireObjectCoercible = __nested_webpack_require_129314__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

								module.exports = function (it) {
									return IndexedObject(requireObjectCoercible(it));
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/to-integer.js":
							/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								var ceil = Math.ceil;
								var floor = Math.floor;

								// `ToInteger` abstract operation
								// https://tc39.github.io/ecma262/#sec-tointeger
								module.exports = function (argument) {
									return isNaN((argument = +argument)) ? 0 : (argument > 0 ? floor : ceil)(argument);
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/to-length.js":
							/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_130652__) {
								var toInteger = __nested_webpack_require_130652__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

								var min = Math.min;

								// `ToLength` abstract operation
								// https://tc39.github.io/ecma262/#sec-tolength
								module.exports = function (argument) {
									return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/to-object.js":
							/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_131354__) {
								var requireObjectCoercible = __nested_webpack_require_131354__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

								// `ToObject` abstract operation
								// https://tc39.github.io/ecma262/#sec-toobject
								module.exports = function (argument) {
									return Object(requireObjectCoercible(argument));
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/to-primitive.js":
							/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_132032__) {
								var isObject = __nested_webpack_require_132032__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

								// 7.1.1 ToPrimitive(input [, PreferredType])
								// instead of the ES6 spec version, we didn't implement @@toPrimitive case
								// and the second argument - flag - preferred type is a string
								module.exports = function (it, S) {
									if (!isObject(it)) return it;
									var fn, val;
									if (S && typeof (fn = it.toString) == "function" && !isObject((val = fn.call(it)))) return val;
									if (typeof (fn = it.valueOf) == "function" && !isObject((val = fn.call(it)))) return val;
									if (!S && typeof (fn = it.toString) == "function" && !isObject((val = fn.call(it)))) return val;
									throw TypeError("Can't convert object to primitive value");
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/uid.js":
							/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								var id = 0;
								var postfix = Math.random();

								module.exports = function (key) {
									return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + postfix).toString(36));
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
							/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_133659__) {
								var isObject = __nested_webpack_require_133659__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
								var anObject = __nested_webpack_require_133659__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

								module.exports = function (O, proto) {
									anObject(O);
									if (!isObject(proto) && proto !== null) {
										throw TypeError("Can't set " + String(proto) + " as a prototype");
									}
								};

								/***/
							},

						/***/ "./node_modules/core-js/internals/well-known-symbol.js":
							/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_134430__) {
								var global = __nested_webpack_require_134430__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
								var shared = __nested_webpack_require_134430__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
								var uid = __nested_webpack_require_134430__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
								var NATIVE_SYMBOL = __nested_webpack_require_134430__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

								var Symbol = global.Symbol;
								var store = shared("wks");

								module.exports = function (name) {
									return store[name] || (store[name] = (NATIVE_SYMBOL && Symbol[name]) || (NATIVE_SYMBOL ? Symbol : uid)("Symbol." + name));
								};

								/***/
							},

						/***/ "./node_modules/core-js/modules/es.array.from.js":
							/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_135432__) {
								var $ = __nested_webpack_require_135432__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
								var from = __nested_webpack_require_135432__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
								var checkCorrectnessOfIteration = __nested_webpack_require_135432__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

								var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
									Array.from(iterable);
								});

								// `Array.from` method
								// https://tc39.github.io/ecma262/#sec-array.from
								$(
									{ target: "Array", stat: true, forced: INCORRECT_ITERATION },
									{
										from: from,
									}
								);

								/***/
							},

						/***/ "./node_modules/core-js/modules/es.string.iterator.js":
							/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_136446__) {
								"use strict";

								var codePointAt = __nested_webpack_require_136446__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
								var InternalStateModule = __nested_webpack_require_136446__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
								var defineIterator = __nested_webpack_require_136446__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

								var STRING_ITERATOR = "String Iterator";
								var setInternalState = InternalStateModule.set;
								var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

								// `String.prototype[@@iterator]` method
								// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
								defineIterator(
									String,
									"String",
									function (iterated) {
										setInternalState(this, {
											type: STRING_ITERATOR,
											string: String(iterated),
											index: 0,
										});
										// `%StringIteratorPrototype%.next` method
										// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
									},
									function next() {
										var state = getInternalState(this);
										var string = state.string;
										var index = state.index;
										var point;
										if (index >= string.length) return { value: undefined, done: true };
										point = codePointAt(string, index, true);
										state.index += point.length;
										return { value: point, done: false };
									}
								);

								/***/
							},

						/***/ "./node_modules/webpack/buildin/global.js":
							/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
							/*! no static exports found */
							/***/ function (module, exports) {
								var g;

								// This works in non-strict mode
								g = (function () {
									return this;
								})();

								try {
									// This works if eval is allowed (see CSP)
									g = g || Function("return this")() || (1, eval)("this");
								} catch (e) {
									// This works if the window reference is available
									if (typeof window === "object") g = window;
								}

								// g can still be undefined, but nothing to do about it...
								// We return undefined, instead of nothing here, so it's
								// easier to handle this case. if(!global) { ...}

								module.exports = g;

								/***/
							},

						/***/ "./src/default-attrs.json":
							/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
							/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
							/***/ function (module) {
								module.exports = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };

								/***/
							},

						/***/ "./src/icon.js":
							/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_139191__) {
								"use strict";

								Object.defineProperty(exports, "__esModule", {
									value: true,
								});

								var _extends =
									Object.assign ||
									function (target) {
										for (var i = 1; i < arguments.length; i++) {
											var source = arguments[i];
											for (var key in source) {
												if (Object.prototype.hasOwnProperty.call(source, key)) {
													target[key] = source[key];
												}
											}
										}
										return target;
									};

								var _createClass = (function () {
									function defineProperties(target, props) {
										for (var i = 0; i < props.length; i++) {
											var descriptor = props[i];
											descriptor.enumerable = descriptor.enumerable || false;
											descriptor.configurable = true;
											if ("value" in descriptor) descriptor.writable = true;
											Object.defineProperty(target, descriptor.key, descriptor);
										}
									}
									return function (Constructor, protoProps, staticProps) {
										if (protoProps) defineProperties(Constructor.prototype, protoProps);
										if (staticProps) defineProperties(Constructor, staticProps);
										return Constructor;
									};
								})();

								var _dedupe = __nested_webpack_require_139191__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

								var _dedupe2 = _interopRequireDefault(_dedupe);

								var _defaultAttrs = __nested_webpack_require_139191__(/*! ./default-attrs.json */ "./src/default-attrs.json");

								var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

								function _interopRequireDefault(obj) {
									return obj && obj.__esModule ? obj : { default: obj };
								}

								function _classCallCheck(instance, Constructor) {
									if (!(instance instanceof Constructor)) {
										throw new TypeError("Cannot call a class as a function");
									}
								}

								var Icon = (function () {
									function Icon(name, contents) {
										var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

										_classCallCheck(this, Icon);

										this.name = name;
										this.contents = contents;
										this.tags = tags;
										this.attrs = _extends({}, _defaultAttrs2.default, { class: "feather feather-" + name });
									}

									/**
									 * Create an SVG string.
									 * @param {Object} attrs
									 * @returns {string}
									 */

									_createClass(Icon, [
										{
											key: "toSvg",
											value: function toSvg() {
												var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

												var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

												return "<svg " + attrsToString(combinedAttrs) + ">" + this.contents + "</svg>";
											},

											/**
											 * Return string representation of an `Icon`.
											 *
											 * Added for backward compatibility. If old code expects `feather.icons.<name>`
											 * to be a string, `toString()` will get implicitly called.
											 *
											 * @returns {string}
											 */
										},
										{
											key: "toString",
											value: function toString() {
												return this.contents;
											},
										},
									]);

									return Icon;
								})();

								/**
								 * Convert attributes object to string of HTML attributes.
								 * @param {Object} attrs
								 * @returns {string}
								 */

								function attrsToString(attrs) {
									return Object.keys(attrs)
										.map(function (key) {
											return key + '="' + attrs[key] + '"';
										})
										.join(" ");
								}

								exports.default = Icon;

								/***/
							},

						/***/ "./src/icons.js":
							/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_142349__) {
								"use strict";

								Object.defineProperty(exports, "__esModule", {
									value: true,
								});

								var _icon = __nested_webpack_require_142349__(/*! ./icon */ "./src/icon.js");

								var _icon2 = _interopRequireDefault(_icon);

								var _icons = __nested_webpack_require_142349__(/*! ../dist/icons.json */ "./dist/icons.json");

								var _icons2 = _interopRequireDefault(_icons);

								var _tags = __nested_webpack_require_142349__(/*! ./tags.json */ "./src/tags.json");

								var _tags2 = _interopRequireDefault(_tags);

								function _interopRequireDefault(obj) {
									return obj && obj.__esModule ? obj : { default: obj };
								}

								exports.default = Object.keys(_icons2.default)
									.map(function (key) {
										return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
									})
									.reduce(function (object, icon) {
										object[icon.name] = icon;
										return object;
									}, {});

								/***/
							},

						/***/ "./src/index.js":
							/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_143325__) {
								"use strict";

								var _icons = __nested_webpack_require_143325__(/*! ./icons */ "./src/icons.js");

								var _icons2 = _interopRequireDefault(_icons);

								var _toSvg = __nested_webpack_require_143325__(/*! ./to-svg */ "./src/to-svg.js");

								var _toSvg2 = _interopRequireDefault(_toSvg);

								var _replace = __nested_webpack_require_143325__(/*! ./replace */ "./src/replace.js");

								var _replace2 = _interopRequireDefault(_replace);

								function _interopRequireDefault(obj) {
									return obj && obj.__esModule ? obj : { default: obj };
								}

								module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

								/***/
							},

						/***/ "./src/replace.js":
							/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_144107__) {
								"use strict";

								Object.defineProperty(exports, "__esModule", {
									value: true,
								});

								var _extends =
									Object.assign ||
									function (target) {
										for (var i = 1; i < arguments.length; i++) {
											var source = arguments[i];
											for (var key in source) {
												if (Object.prototype.hasOwnProperty.call(source, key)) {
													target[key] = source[key];
												}
											}
										}
										return target;
									}; /* eslint-env browser */

								var _dedupe = __nested_webpack_require_144107__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

								var _dedupe2 = _interopRequireDefault(_dedupe);

								var _icons = __nested_webpack_require_144107__(/*! ./icons */ "./src/icons.js");

								var _icons2 = _interopRequireDefault(_icons);

								function _interopRequireDefault(obj) {
									return obj && obj.__esModule ? obj : { default: obj };
								}

								/**
								 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
								 * corresponding to the element's `data-feather` attribute value.
								 * @param {Object} attrs
								 */
								function replace() {
									var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

									if (typeof document === "undefined") {
										throw new Error("`feather.replace()` only works in a browser environment.");
									}

									var elementsToReplace = document.querySelectorAll("[data-feather]");

									Array.from(elementsToReplace).forEach(function (element) {
										return replaceElement(element, attrs);
									});
								}

								/**
								 * Replace a single HTML element with SVG markup
								 * corresponding to the element's `data-feather` attribute value.
								 * @param {HTMLElement} element
								 * @param {Object} attrs
								 */
								function replaceElement(element) {
									var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

									var elementAttrs = getAttrs(element);
									var name = elementAttrs["data-feather"];
									delete elementAttrs["data-feather"];

									var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
									var svgDocument = new DOMParser().parseFromString(svgString, "image/svg+xml");
									var svgElement = svgDocument.querySelector("svg");

									element.parentNode.replaceChild(svgElement, element);
								}

								/**
								 * Get the attributes of an HTML element.
								 * @param {HTMLElement} element
								 * @returns {Object}
								 */
								function getAttrs(element) {
									return Array.from(element.attributes).reduce(function (attrs, attr) {
										attrs[attr.name] = attr.value;
										return attrs;
									}, {});
								}

								exports.default = replace;

								/***/
							},

						/***/ "./src/tags.json":
							/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
							/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
							/***/ function (module) {
								module.exports = {
									activity: ["pulse", "health", "action", "motion"],
									airplay: ["stream", "cast", "mirroring"],
									"alert-circle": ["warning", "alert", "danger"],
									"alert-octagon": ["warning", "alert", "danger"],
									"alert-triangle": ["warning", "alert", "danger"],
									"align-center": ["text alignment", "center"],
									"align-justify": ["text alignment", "justified"],
									"align-left": ["text alignment", "left"],
									"align-right": ["text alignment", "right"],
									anchor: [],
									archive: ["index", "box"],
									"at-sign": ["mention", "at", "email", "message"],
									award: ["achievement", "badge"],
									aperture: ["camera", "photo"],
									"bar-chart": ["statistics", "diagram", "graph"],
									"bar-chart-2": ["statistics", "diagram", "graph"],
									battery: ["power", "electricity"],
									"battery-charging": ["power", "electricity"],
									bell: ["alarm", "notification", "sound"],
									"bell-off": ["alarm", "notification", "silent"],
									bluetooth: ["wireless"],
									"book-open": ["read", "library"],
									book: ["read", "dictionary", "booklet", "magazine", "library"],
									bookmark: ["read", "clip", "marker", "tag"],
									box: ["cube"],
									briefcase: ["work", "bag", "baggage", "folder"],
									calendar: ["date"],
									camera: ["photo"],
									cast: ["chromecast", "airplay"],
									circle: ["off", "zero", "record"],
									clipboard: ["copy"],
									clock: ["time", "watch", "alarm"],
									"cloud-drizzle": ["weather", "shower"],
									"cloud-lightning": ["weather", "bolt"],
									"cloud-rain": ["weather"],
									"cloud-snow": ["weather", "blizzard"],
									cloud: ["weather"],
									codepen: ["logo"],
									codesandbox: ["logo"],
									code: ["source", "programming"],
									coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
									columns: ["layout"],
									command: ["keyboard", "cmd", "terminal", "prompt"],
									compass: ["navigation", "safari", "travel", "direction"],
									copy: ["clone", "duplicate"],
									"corner-down-left": ["arrow", "return"],
									"corner-down-right": ["arrow"],
									"corner-left-down": ["arrow"],
									"corner-left-up": ["arrow"],
									"corner-right-down": ["arrow"],
									"corner-right-up": ["arrow"],
									"corner-up-left": ["arrow"],
									"corner-up-right": ["arrow"],
									cpu: ["processor", "technology"],
									"credit-card": ["purchase", "payment", "cc"],
									crop: ["photo", "image"],
									crosshair: ["aim", "target"],
									database: ["storage", "memory"],
									delete: ["remove"],
									disc: ["album", "cd", "dvd", "music"],
									"dollar-sign": ["currency", "money", "payment"],
									droplet: ["water"],
									edit: ["pencil", "change"],
									"edit-2": ["pencil", "change"],
									"edit-3": ["pencil", "change"],
									eye: ["view", "watch"],
									"eye-off": ["view", "watch", "hide", "hidden"],
									"external-link": ["outbound"],
									facebook: ["logo", "social"],
									"fast-forward": ["music"],
									figma: ["logo", "design", "tool"],
									"file-minus": ["delete", "remove", "erase"],
									"file-plus": ["add", "create", "new"],
									"file-text": ["data", "txt", "pdf"],
									film: ["movie", "video"],
									filter: ["funnel", "hopper"],
									flag: ["report"],
									"folder-minus": ["directory"],
									"folder-plus": ["directory"],
									folder: ["directory"],
									framer: ["logo", "design", "tool"],
									frown: ["emoji", "face", "bad", "sad", "emotion"],
									gift: ["present", "box", "birthday", "party"],
									"git-branch": ["code", "version control"],
									"git-commit": ["code", "version control"],
									"git-merge": ["code", "version control"],
									"git-pull-request": ["code", "version control"],
									github: ["logo", "version control"],
									gitlab: ["logo", "version control"],
									globe: ["world", "browser", "language", "translate"],
									"hard-drive": ["computer", "server", "memory", "data"],
									hash: ["hashtag", "number", "pound"],
									headphones: ["music", "audio", "sound"],
									heart: ["like", "love", "emotion"],
									"help-circle": ["question mark"],
									hexagon: ["shape", "node.js", "logo"],
									home: ["house", "living"],
									image: ["picture"],
									inbox: ["email"],
									instagram: ["logo", "camera"],
									key: ["password", "login", "authentication", "secure"],
									layers: ["stack"],
									layout: ["window", "webpage"],
									"life-bouy": ["help", "life ring", "support"],
									link: ["chain", "url"],
									"link-2": ["chain", "url"],
									linkedin: ["logo", "social media"],
									list: ["options"],
									lock: ["security", "password", "secure"],
									"log-in": ["sign in", "arrow", "enter"],
									"log-out": ["sign out", "arrow", "exit"],
									mail: ["email", "message"],
									"map-pin": ["location", "navigation", "travel", "marker"],
									map: ["location", "navigation", "travel"],
									maximize: ["fullscreen"],
									"maximize-2": ["fullscreen", "arrows", "expand"],
									meh: ["emoji", "face", "neutral", "emotion"],
									menu: ["bars", "navigation", "hamburger"],
									"message-circle": ["comment", "chat"],
									"message-square": ["comment", "chat"],
									"mic-off": ["record", "sound", "mute"],
									mic: ["record", "sound", "listen"],
									minimize: ["exit fullscreen", "close"],
									"minimize-2": ["exit fullscreen", "arrows", "close"],
									minus: ["subtract"],
									monitor: ["tv", "screen", "display"],
									moon: ["dark", "night"],
									"more-horizontal": ["ellipsis"],
									"more-vertical": ["ellipsis"],
									"mouse-pointer": ["arrow", "cursor"],
									move: ["arrows"],
									music: ["note"],
									navigation: ["location", "travel"],
									"navigation-2": ["location", "travel"],
									octagon: ["stop"],
									package: ["box", "container"],
									paperclip: ["attachment"],
									pause: ["music", "stop"],
									"pause-circle": ["music", "audio", "stop"],
									"pen-tool": ["vector", "drawing"],
									percent: ["discount"],
									"phone-call": ["ring"],
									"phone-forwarded": ["call"],
									"phone-incoming": ["call"],
									"phone-missed": ["call"],
									"phone-off": ["call", "mute"],
									"phone-outgoing": ["call"],
									phone: ["call"],
									play: ["music", "start"],
									"pie-chart": ["statistics", "diagram"],
									"play-circle": ["music", "start"],
									plus: ["add", "new"],
									"plus-circle": ["add", "new"],
									"plus-square": ["add", "new"],
									pocket: ["logo", "save"],
									power: ["on", "off"],
									printer: ["fax", "office", "device"],
									radio: ["signal"],
									"refresh-cw": ["synchronise", "arrows"],
									"refresh-ccw": ["arrows"],
									repeat: ["loop", "arrows"],
									rewind: ["music"],
									"rotate-ccw": ["arrow"],
									"rotate-cw": ["arrow"],
									rss: ["feed", "subscribe"],
									save: ["floppy disk"],
									scissors: ["cut"],
									search: ["find", "magnifier", "magnifying glass"],
									send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
									settings: ["cog", "edit", "gear", "preferences"],
									"share-2": ["network", "connections"],
									shield: ["security", "secure"],
									"shield-off": ["security", "insecure"],
									"shopping-bag": ["ecommerce", "cart", "purchase", "store"],
									"shopping-cart": ["ecommerce", "cart", "purchase", "store"],
									shuffle: ["music"],
									"skip-back": ["music"],
									"skip-forward": ["music"],
									slack: ["logo"],
									slash: ["ban", "no"],
									sliders: ["settings", "controls"],
									smartphone: ["cellphone", "device"],
									smile: ["emoji", "face", "happy", "good", "emotion"],
									speaker: ["audio", "music"],
									star: ["bookmark", "favorite", "like"],
									"stop-circle": ["media", "music"],
									sun: ["brightness", "weather", "light"],
									sunrise: ["weather", "time", "morning", "day"],
									sunset: ["weather", "time", "evening", "night"],
									tablet: ["device"],
									tag: ["label"],
									target: ["logo", "bullseye"],
									terminal: ["code", "command line", "prompt"],
									thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
									"thumbs-down": ["dislike", "bad", "emotion"],
									"thumbs-up": ["like", "good", "emotion"],
									"toggle-left": ["on", "off", "switch"],
									"toggle-right": ["on", "off", "switch"],
									tool: ["settings", "spanner"],
									trash: ["garbage", "delete", "remove", "bin"],
									"trash-2": ["garbage", "delete", "remove", "bin"],
									triangle: ["delta"],
									truck: ["delivery", "van", "shipping", "transport", "lorry"],
									tv: ["television", "stream"],
									twitch: ["logo"],
									twitter: ["logo", "social"],
									type: ["text"],
									umbrella: ["rain", "weather"],
									unlock: ["security"],
									"user-check": ["followed", "subscribed"],
									"user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
									"user-plus": ["new", "add", "create", "follow", "subscribe"],
									"user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
									user: ["person", "account"],
									users: ["group"],
									"video-off": ["camera", "movie", "film"],
									video: ["camera", "movie", "film"],
									voicemail: ["phone"],
									volume: ["music", "sound", "mute"],
									"volume-1": ["music", "sound"],
									"volume-2": ["music", "sound"],
									"volume-x": ["music", "sound", "mute"],
									watch: ["clock", "time"],
									"wifi-off": ["disabled"],
									wifi: ["connection", "signal", "wireless"],
									wind: ["weather", "air"],
									"x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
									"x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
									"x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
									x: ["cancel", "close", "delete", "remove", "times", "clear"],
									youtube: ["logo", "video", "play"],
									"zap-off": ["flash", "camera", "lightning"],
									zap: ["flash", "camera", "lightning"],
									"zoom-in": ["magnifying glass"],
									"zoom-out": ["magnifying glass"],
								};

								/***/
							},

						/***/ "./src/to-svg.js":
							/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_157167__) {
								"use strict";

								Object.defineProperty(exports, "__esModule", {
									value: true,
								});

								var _icons = __nested_webpack_require_157167__(/*! ./icons */ "./src/icons.js");

								var _icons2 = _interopRequireDefault(_icons);

								function _interopRequireDefault(obj) {
									return obj && obj.__esModule ? obj : { default: obj };
								}

								/**
								 * Create an SVG string.
								 * @deprecated
								 * @param {string} name
								 * @param {Object} attrs
								 * @returns {string}
								 */
								function toSvg(name) {
									var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

									console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.");

									if (!name) {
										throw new Error("The required `key` (icon name) parameter is missing.");
									}

									if (!_icons2.default[name]) {
										throw new Error("No icon matching '" + name + "'. See the complete list of icons at https://feathericons.com");
									}

									return _icons2.default[name].toSvg(attrs);
								}

								exports.default = toSvg;

								/***/
							},

						/***/ 0:
							/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
							/*! no static exports found */
							/***/ function (module, exports, __nested_webpack_require_158389__) {
								__nested_webpack_require_158389__(/*! core-js/es/array/from */ "./node_modules/core-js/es/array/from.js");
								module.exports = __nested_webpack_require_158389__(/*! /home/travis/build/feathericons/feather/src/index.js */ "./src/index.js");

								/***/
							},

						/******/
					}
				);
			});
			//# sourceMappingURL=feather.js.map

			/***/
		},

		/***/ 90: /***/ (module) => {
			(function (window, factory) {
				var lazySizes = factory(window, window.document, Date);
				window.lazySizes = lazySizes;
				if (true && module.exports) {
					module.exports = lazySizes;
				}
			})(
				typeof window != "undefined" ? window : {},
				/**
				 * import("./types/global")
				 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
				 */
				function l(window, document, Date) {
					// Pass in the window Date function also for SSR because the Date class can be lost
					"use strict";
					/*jshint eqnull:true */

					var lazysizes,
						/**
						 * @type { LazySizesConfigPartial }
						 */
						lazySizesCfg;

					(function () {
						var prop;

						var lazySizesDefaults = {
							lazyClass: "lazyload",
							loadedClass: "lazyloaded",
							loadingClass: "lazyloading",
							preloadClass: "lazypreload",
							errorClass: "lazyerror",
							//strictClass: 'lazystrict',
							autosizesClass: "lazyautosizes",
							fastLoadedClass: "ls-is-cached",
							iframeLoadMode: 0,
							srcAttr: "data-src",
							srcsetAttr: "data-srcset",
							sizesAttr: "data-sizes",
							//preloadAfterLoad: false,
							minSize: 40,
							customMedia: {},
							init: true,
							expFactor: 1.5,
							hFac: 0.8,
							loadMode: 2,
							loadHidden: true,
							ricTimeout: 0,
							throttleDelay: 125,
						};

						lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

						for (prop in lazySizesDefaults) {
							if (!(prop in lazySizesCfg)) {
								lazySizesCfg[prop] = lazySizesDefaults[prop];
							}
						}
					})();

					if (!document || !document.getElementsByClassName) {
						return {
							init: function () {},
							/**
							 * @type { LazySizesConfigPartial }
							 */
							cfg: lazySizesCfg,
							/**
							 * @type { true }
							 */
							noSupport: true,
						};
					}

					var docElem = document.documentElement;

					var supportPicture = window.HTMLPictureElement;

					var _addEventListener = "addEventListener";

					var _getAttribute = "getAttribute";

					/**
					 * Update to bind to window because 'this' becomes null during SSR
					 * builds.
					 */
					var addEventListener = window[_addEventListener].bind(window);

					var setTimeout = window.setTimeout;

					var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

					var requestIdleCallback = window.requestIdleCallback;

					var regPicture = /^picture$/i;

					var loadEvents = ["load", "error", "lazyincluded", "_lazyloaded"];

					var regClassCache = {};

					var forEach = Array.prototype.forEach;

					/**
					 * @param ele {Element}
					 * @param cls {string}
					 */
					var hasClass = function (ele, cls) {
						if (!regClassCache[cls]) {
							regClassCache[cls] = new RegExp("(\\s|^)" + cls + "(\\s|$)");
						}
						return regClassCache[cls].test(ele[_getAttribute]("class") || "") && regClassCache[cls];
					};

					/**
					 * @param ele {Element}
					 * @param cls {string}
					 */
					var addClass = function (ele, cls) {
						if (!hasClass(ele, cls)) {
							ele.setAttribute("class", (ele[_getAttribute]("class") || "").trim() + " " + cls);
						}
					};

					/**
					 * @param ele {Element}
					 * @param cls {string}
					 */
					var removeClass = function (ele, cls) {
						var reg;
						if ((reg = hasClass(ele, cls))) {
							ele.setAttribute("class", (ele[_getAttribute]("class") || "").replace(reg, " "));
						}
					};

					var addRemoveLoadEvents = function (dom, fn, add) {
						var action = add ? _addEventListener : "removeEventListener";
						if (add) {
							addRemoveLoadEvents(dom, fn);
						}
						loadEvents.forEach(function (evt) {
							dom[action](evt, fn);
						});
					};

					/**
					 * @param elem { Element }
					 * @param name { string }
					 * @param detail { any }
					 * @param noBubbles { boolean }
					 * @param noCancelable { boolean }
					 * @returns { CustomEvent }
					 */
					var triggerEvent = function (elem, name, detail, noBubbles, noCancelable) {
						var event = document.createEvent("Event");

						if (!detail) {
							detail = {};
						}

						detail.instance = lazysizes;

						event.initEvent(name, !noBubbles, !noCancelable);

						event.detail = detail;

						elem.dispatchEvent(event);
						return event;
					};

					var updatePolyfill = function (el, full) {
						var polyfill;
						if (!supportPicture && (polyfill = window.picturefill || lazySizesCfg.pf)) {
							if (full && full.src && !el[_getAttribute]("srcset")) {
								el.setAttribute("srcset", full.src);
							}
							polyfill({ reevaluate: true, elements: [el] });
						} else if (full && full.src) {
							el.src = full.src;
						}
					};

					var getCSS = function (elem, style) {
						return (getComputedStyle(elem, null) || {})[style];
					};

					/**
					 *
					 * @param elem { Element }
					 * @param parent { Element }
					 * @param [width] {number}
					 * @returns {number}
					 */
					var getWidth = function (elem, parent, width) {
						width = width || elem.offsetWidth;

						while (width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth) {
							width = parent.offsetWidth;
							parent = parent.parentNode;
						}

						return width;
					};

					var rAF = (function () {
						var running, waiting;
						var firstFns = [];
						var secondFns = [];
						var fns = firstFns;

						var run = function () {
							var runFns = fns;

							fns = firstFns.length ? secondFns : firstFns;

							running = true;
							waiting = false;

							while (runFns.length) {
								runFns.shift()();
							}

							running = false;
						};

						var rafBatch = function (fn, queue) {
							if (running && !queue) {
								fn.apply(this, arguments);
							} else {
								fns.push(fn);

								if (!waiting) {
									waiting = true;
									(document.hidden ? setTimeout : requestAnimationFrame)(run);
								}
							}
						};

						rafBatch._lsFlush = run;

						return rafBatch;
					})();

					var rAFIt = function (fn, simple) {
						return simple
							? function () {
									rAF(fn);
							  }
							: function () {
									var that = this;
									var args = arguments;
									rAF(function () {
										fn.apply(that, args);
									});
							  };
					};

					var throttle = function (fn) {
						var running;
						var lastTime = 0;
						var gDelay = lazySizesCfg.throttleDelay;
						var rICTimeout = lazySizesCfg.ricTimeout;
						var run = function () {
							running = false;
							lastTime = Date.now();
							fn();
						};
						var idleCallback =
							requestIdleCallback && rICTimeout > 49
								? function () {
										requestIdleCallback(run, { timeout: rICTimeout });

										if (rICTimeout !== lazySizesCfg.ricTimeout) {
											rICTimeout = lazySizesCfg.ricTimeout;
										}
								  }
								: rAFIt(function () {
										setTimeout(run);
								  }, true);
						return function (isPriority) {
							var delay;

							if ((isPriority = isPriority === true)) {
								rICTimeout = 33;
							}

							if (running) {
								return;
							}

							running = true;

							delay = gDelay - (Date.now() - lastTime);

							if (delay < 0) {
								delay = 0;
							}

							if (isPriority || delay < 9) {
								idleCallback();
							} else {
								setTimeout(idleCallback, delay);
							}
						};
					};

					//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
					var debounce = function (func) {
						var timeout, timestamp;
						var wait = 99;
						var run = function () {
							timeout = null;
							func();
						};
						var later = function () {
							var last = Date.now() - timestamp;

							if (last < wait) {
								setTimeout(later, wait - last);
							} else {
								(requestIdleCallback || run)(run);
							}
						};

						return function () {
							timestamp = Date.now();

							if (!timeout) {
								timeout = setTimeout(later, wait);
							}
						};
					};

					var loader = (function () {
						var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

						var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

						var regImg = /^img$/i;
						var regIframe = /^iframe$/i;

						var supportScroll = "onscroll" in window && !/(gle|ing)bot/.test(navigator.userAgent);

						var shrinkExpand = 0;
						var currentExpand = 0;

						var isLoading = 0;
						var lowRuns = -1;

						var resetPreloading = function (e) {
							isLoading--;
							if (!e || isLoading < 0 || !e.target) {
								isLoading = 0;
							}
						};

						var isVisible = function (elem) {
							if (isBodyHidden == null) {
								isBodyHidden = getCSS(document.body, "visibility") == "hidden";
							}

							return isBodyHidden || !(getCSS(elem.parentNode, "visibility") == "hidden" && getCSS(elem, "visibility") == "hidden");
						};

						var isNestedVisible = function (elem, elemExpand) {
							var outerRect;
							var parent = elem;
							var visible = isVisible(elem);

							eLtop -= elemExpand;
							eLbottom += elemExpand;
							eLleft -= elemExpand;
							eLright += elemExpand;

							while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
								visible = (getCSS(parent, "opacity") || 1) > 0;

								if (visible && getCSS(parent, "overflow") != "visible") {
									outerRect = parent.getBoundingClientRect();
									visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
								}
							}

							return visible;
						};

						var checkElements = function () {
							var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
							var lazyloadElems = lazysizes.elements;

							if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
								i = 0;

								lowRuns++;

								for (; i < eLlen; i++) {
									if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
										continue;
									}

									if (!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))) {
										unveilElement(lazyloadElems[i]);
										continue;
									}

									if (!(elemExpandVal = lazyloadElems[i][_getAttribute]("data-expand")) || !(elemExpand = elemExpandVal * 1)) {
										elemExpand = currentExpand;
									}

									if (!defaultExpand) {
										defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? (docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370) : lazySizesCfg.expand;

										lazysizes._defEx = defaultExpand;

										preloadExpand = defaultExpand * lazySizesCfg.expFactor;
										hFac = lazySizesCfg.hFac;
										isBodyHidden = null;

										if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
											currentExpand = preloadExpand;
											lowRuns = 0;
										} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
											currentExpand = defaultExpand;
										} else {
											currentExpand = shrinkExpand;
										}
									}

									if (beforeExpandVal !== elemExpand) {
										eLvW = innerWidth + elemExpand * hFac;
										elvH = innerHeight + elemExpand;
										elemNegativeExpand = elemExpand * -1;
										beforeExpandVal = elemExpand;
									}

									rect = lazyloadElems[i].getBoundingClientRect();

									if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) && ((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))) {
										unveilElement(lazyloadElems[i]);
										loadedSomething = true;
										if (isLoading > 9) {
											break;
										}
									} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || (!elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != "auto")))) {
										autoLoadElem = preloadElems[0] || lazyloadElems[i];
									}
								}

								if (autoLoadElem && !loadedSomething) {
									unveilElement(autoLoadElem);
								}
							}
						};

						var throttledCheckElements = throttle(checkElements);

						var switchLoadingClass = function (e) {
							var elem = e.target;

							if (elem._lazyCache) {
								delete elem._lazyCache;
								return;
							}

							resetPreloading(e);
							addClass(elem, lazySizesCfg.loadedClass);
							removeClass(elem, lazySizesCfg.loadingClass);
							addRemoveLoadEvents(elem, rafSwitchLoadingClass);
							triggerEvent(elem, "lazyloaded");
						};
						var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
						var rafSwitchLoadingClass = function (e) {
							rafedSwitchLoadingClass({ target: e.target });
						};

						var changeIframeSrc = function (elem, src) {
							var loadMode = elem.getAttribute("data-load-mode") || lazySizesCfg.iframeLoadMode;

							// loadMode can be also a string!
							if (loadMode == 0) {
								elem.contentWindow.location.replace(src);
							} else if (loadMode == 1) {
								elem.src = src;
							}
						};

						var handleSources = function (source) {
							var customMedia;

							var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

							if ((customMedia = lazySizesCfg.customMedia[source[_getAttribute]("data-media") || source[_getAttribute]("media")])) {
								source.setAttribute("media", customMedia);
							}

							if (sourceSrcset) {
								source.setAttribute("srcset", sourceSrcset);
							}
						};

						var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
							var src, srcset, parent, isPicture, event, firesLoad;

							if (!(event = triggerEvent(elem, "lazybeforeunveil", detail)).defaultPrevented) {
								if (sizes) {
									if (isAuto) {
										addClass(elem, lazySizesCfg.autosizesClass);
									} else {
										elem.setAttribute("sizes", sizes);
									}
								}

								srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
								src = elem[_getAttribute](lazySizesCfg.srcAttr);

								if (isImg) {
									parent = elem.parentNode;
									isPicture = parent && regPicture.test(parent.nodeName || "");
								}

								firesLoad = detail.firesLoad || ("src" in elem && (srcset || src || isPicture));

								event = { target: elem };

								addClass(elem, lazySizesCfg.loadingClass);

								if (firesLoad) {
									clearTimeout(resetPreloadingTimer);
									resetPreloadingTimer = setTimeout(resetPreloading, 2500);
									addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
								}

								if (isPicture) {
									forEach.call(parent.getElementsByTagName("source"), handleSources);
								}

								if (srcset) {
									elem.setAttribute("srcset", srcset);
								} else if (src && !isPicture) {
									if (regIframe.test(elem.nodeName)) {
										changeIframeSrc(elem, src);
									} else {
										elem.src = src;
									}
								}

								if (isImg && (srcset || isPicture)) {
									updatePolyfill(elem, { src: src });
								}
							}

							if (elem._lazyRace) {
								delete elem._lazyRace;
							}
							removeClass(elem, lazySizesCfg.lazyClass);

							rAF(function () {
								// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
								var isLoaded = elem.complete && elem.naturalWidth > 1;

								if (!firesLoad || isLoaded) {
									if (isLoaded) {
										addClass(elem, lazySizesCfg.fastLoadedClass);
									}
									switchLoadingClass(event);
									elem._lazyCache = true;
									setTimeout(function () {
										if ("_lazyCache" in elem) {
											delete elem._lazyCache;
										}
									}, 9);
								}
								if (elem.loading == "lazy") {
									isLoading--;
								}
							}, true);
						});

						/**
						 *
						 * @param elem { Element }
						 */
						var unveilElement = function (elem) {
							if (elem._lazyRace) {
								return;
							}
							var detail;

							var isImg = regImg.test(elem.nodeName);

							//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
							var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]("sizes"));
							var isAuto = sizes == "auto";

							if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]("src") || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) {
								return;
							}

							detail = triggerEvent(elem, "lazyunveilread").detail;

							if (isAuto) {
								autoSizer.updateElem(elem, true, elem.offsetWidth);
							}

							elem._lazyRace = true;
							isLoading++;

							lazyUnveil(elem, detail, isAuto, sizes, isImg);
						};

						var afterScroll = debounce(function () {
							lazySizesCfg.loadMode = 3;
							throttledCheckElements();
						});

						var altLoadmodeScrollListner = function () {
							if (lazySizesCfg.loadMode == 3) {
								lazySizesCfg.loadMode = 2;
							}
							afterScroll();
						};

						var onload = function () {
							if (isCompleted) {
								return;
							}
							if (Date.now() - started < 999) {
								setTimeout(onload, 999);
								return;
							}

							isCompleted = true;

							lazySizesCfg.loadMode = 3;

							throttledCheckElements();

							addEventListener("scroll", altLoadmodeScrollListner, true);
						};

						return {
							_: function () {
								started = Date.now();

								lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
								preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + " " + lazySizesCfg.preloadClass);

								addEventListener("scroll", throttledCheckElements, true);

								addEventListener("resize", throttledCheckElements, true);

								addEventListener("pageshow", function (e) {
									if (e.persisted) {
										var loadingElements = document.querySelectorAll("." + lazySizesCfg.loadingClass);

										if (loadingElements.length && loadingElements.forEach) {
											requestAnimationFrame(function () {
												loadingElements.forEach(function (img) {
													if (img.complete) {
														unveilElement(img);
													}
												});
											});
										}
									}
								});

								if (window.MutationObserver) {
									new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
								} else {
									docElem[_addEventListener]("DOMNodeInserted", throttledCheckElements, true);
									docElem[_addEventListener]("DOMAttrModified", throttledCheckElements, true);
									setInterval(throttledCheckElements, 999);
								}

								addEventListener("hashchange", throttledCheckElements, true);

								//, 'fullscreenchange'
								["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (name) {
									document[_addEventListener](name, throttledCheckElements, true);
								});

								if (/d$|^c/.test(document.readyState)) {
									onload();
								} else {
									addEventListener("load", onload);
									document[_addEventListener]("DOMContentLoaded", throttledCheckElements);
									setTimeout(onload, 20000);
								}

								if (lazysizes.elements.length) {
									checkElements();
									rAF._lsFlush();
								} else {
									throttledCheckElements();
								}
							},
							checkElems: throttledCheckElements,
							unveil: unveilElement,
							_aLSL: altLoadmodeScrollListner,
						};
					})();

					var autoSizer = (function () {
						var autosizesElems;

						var sizeElement = rAFIt(function (elem, parent, event, width) {
							var sources, i, len;
							elem._lazysizesWidth = width;
							width += "px";

							elem.setAttribute("sizes", width);

							if (regPicture.test(parent.nodeName || "")) {
								sources = parent.getElementsByTagName("source");
								for (i = 0, len = sources.length; i < len; i++) {
									sources[i].setAttribute("sizes", width);
								}
							}

							if (!event.detail.dataAttr) {
								updatePolyfill(elem, event.detail);
							}
						});
						/**
						 *
						 * @param elem {Element}
						 * @param dataAttr
						 * @param [width] { number }
						 */
						var getSizeElement = function (elem, dataAttr, width) {
							var event;
							var parent = elem.parentNode;

							if (parent) {
								width = getWidth(elem, parent, width);
								event = triggerEvent(elem, "lazybeforesizes", { width: width, dataAttr: !!dataAttr });

								if (!event.defaultPrevented) {
									width = event.detail.width;

									if (width && width !== elem._lazysizesWidth) {
										sizeElement(elem, parent, event, width);
									}
								}
							}
						};

						var updateElementsSizes = function () {
							var i;
							var len = autosizesElems.length;
							if (len) {
								i = 0;

								for (; i < len; i++) {
									getSizeElement(autosizesElems[i]);
								}
							}
						};

						var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

						return {
							_: function () {
								autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
								addEventListener("resize", debouncedUpdateElementsSizes);
							},
							checkElems: debouncedUpdateElementsSizes,
							updateElem: getSizeElement,
						};
					})();

					var init = function () {
						if (!init.i && document.getElementsByClassName) {
							init.i = true;
							autoSizer._();
							loader._();
						}
					};

					setTimeout(function () {
						if (lazySizesCfg.init) {
							init();
						}
					});

					lazysizes = {
						/**
						 * @type { LazySizesConfigPartial }
						 */
						cfg: lazySizesCfg,
						autoSizer: autoSizer,
						loader: loader,
						init: init,
						uP: updatePolyfill,
						aC: addClass,
						rC: removeClass,
						hC: hasClass,
						fire: triggerEvent,
						gW: getWidth,
						rAF: rAF,
					};

					return lazysizes;
				}
			);

			/***/
		},

		/***/ 740: /***/ (module, exports, __webpack_require__) => {
			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
			(function (window, factory) {
				if (!window) {
					return;
				}
				var globalInstall = function () {
					factory(window.lazySizes);
					window.removeEventListener("lazyunveilread", globalInstall, true);
				};

				factory = factory.bind(null, window, window.document);

				if (true && module.exports) {
					factory(__webpack_require__(90));
				} else if (true) {
					!((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(90)]), (__WEBPACK_AMD_DEFINE_FACTORY__ = factory), (__WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else {
				}
			})(typeof window != "undefined" ? window : 0, function (window, document, lazySizes) {
				"use strict";

				var lazySizesCfg;

				(function () {
					var prop;

					var blurUpDefaults = {
						blurUpClass: "ls-blur-up-img",
						blurUpLoadingClass: "ls-blur-up-is-loading",
						blurUpInviewClass: "ls-inview",
						blurUpLoadedClass: "ls-blur-up-loaded",
						blurUpLoadedOriginalClass: "ls-original-loaded",
					};

					lazySizesCfg = lazySizes.cfg || {};

					for (prop in blurUpDefaults) {
						if (!(prop in lazySizesCfg)) {
							lazySizesCfg[prop] = blurUpDefaults[prop];
						}
					}
				})();

				var slice = [].slice;
				var regBlurUp = /blur-up["']*\s*:\s*["']*(always|auto)/;
				var regType = /image\/(jpeg|png|gif|svg\+xml)/;
				var transSrc = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

				var matchesMedia = function (source) {
					var media = source.getAttribute("data-media") || source.getAttribute("media");
					var type = source.getAttribute("type");

					return (!type || regType.test(type)) && (!media || window.matchMedia(lazySizes.cfg.customMedia[media] || media).matches);
				};

				var getLowSrc = function (picture, img) {
					var matchingLowSrc;
					var sources = picture ? slice.call(picture.querySelectorAll("source, img")) : [img];

					sources.forEach(function (src) {
						if (matchingLowSrc) {
							return;
						}
						var lowSrc = src.getAttribute("data-lowsrc");

						if (lowSrc && matchesMedia(src)) {
							matchingLowSrc = lowSrc;
						}
					});

					return matchingLowSrc;
				};

				var createBlurup = function (picture, img, src, blurUp) {
					var blurImg;
					var isBlurUpLoaded = false;
					var isForced = false;
					var start = blurUp == "always" ? 0 : Date.now();
					var isState = 0;
					var parent = (picture || img).parentNode;

					var createBlurUpImg = function () {
						if (!src) {
							return;
						}

						var onloadBlurUp = function (e) {
							isBlurUpLoaded = true;

							if (!blurImg) {
								blurImg = e.target;
							}

							lazySizes.rAF(function () {
								lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
								if (blurImg) {
									lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedClass);
								}
							});

							if (blurImg) {
								blurImg.removeEventListener("load", onloadBlurUp);
								blurImg.removeEventListener("error", onloadBlurUp);
							}
						};

						blurImg = document.createElement("img");

						blurImg.addEventListener("load", onloadBlurUp);
						blurImg.addEventListener("error", onloadBlurUp);

						blurImg.className = lazySizes.cfg.blurUpClass;
						blurImg.cssText = img.cssText;
						blurImg.src = src;
						blurImg.alt = "";
						blurImg.setAttribute("aria-hidden", "true");

						parent.insertBefore(blurImg, (picture || img).nextSibling);

						if (blurUp != "always") {
							blurImg.style.visibility = "hidden";

							lazySizes.rAF(function () {
								if (blurImg) {
									setTimeout(function () {
										if (blurImg) {
											lazySizes.rAF(function () {
												if (!isForced && blurImg) {
													blurImg.style.visibility = "";
												}
											});
										}
									}, lazySizes.cfg.blurupCacheDelay || 33);
								}
							});
						}
					};

					var remove = function () {
						if (blurImg) {
							lazySizes.rAF(function () {
								lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
								try {
									blurImg.parentNode.removeChild(blurImg);
								} catch (er) {}
								blurImg = null;
							});
						}
					};

					var setStateUp = function (force) {
						isState++;

						isForced = force || isForced;

						if (force) {
							remove();
						} else if (isState > 1) {
							setTimeout(remove, 5000);
						}
					};

					var onload = function () {
						img.removeEventListener("load", onload);
						img.removeEventListener("error", onload);

						if (blurImg) {
							lazySizes.rAF(function () {
								if (blurImg) {
									lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedOriginalClass);
								}
							});
						}

						lazySizes.fire(img, "blurUpLoaded");

						if (blurUp != "always" && (!isBlurUpLoaded || Date.now() - start < 66)) {
							setStateUp(true);
						} else {
							setStateUp();
						}
					};

					createBlurUpImg();

					img.addEventListener("load", onload);
					img.addEventListener("error", onload);

					lazySizes.aC(img, lazySizes.cfg.blurUpLoadingClass);

					var parentUnveil = function (e) {
						if (parent != e.target) {
							return;
						}

						lazySizes.aC(blurImg || img, lazySizes.cfg.blurUpInviewClass);

						setStateUp();

						parent.removeEventListener("lazybeforeunveil", parentUnveil);
					};

					if (!parent.getAttribute("data-expand")) {
						parent.setAttribute("data-expand", -1);
					}

					parent.addEventListener("lazybeforeunveil", parentUnveil);

					lazySizes.aC(parent, lazySizes.cfg.lazyClass);
				};

				window.addEventListener("lazybeforeunveil", function (e) {
					var detail = e.detail;

					if (detail.instance != lazySizes || !detail.blurUp) {
						return;
					}

					var img = e.target;
					var picture = img.parentNode;

					if (picture.nodeName != "PICTURE") {
						picture = null;
					}

					createBlurup(picture, img, getLowSrc(picture, img) || transSrc, detail.blurUp);
				});

				window.addEventListener("lazyunveilread", function (e) {
					var detail = e.detail;

					if (detail.instance != lazySizes) {
						return;
					}

					var img = e.target;
					var match = (getComputedStyle(img, null) || { fontFamily: "" }).fontFamily.match(regBlurUp);

					if (!match && !img.getAttribute("data-lowsrc")) {
						return;
					}

					detail.blurUp = (match && match[1]) || lazySizes.cfg.blurupMode || "always";
				});
			});

			/***/
		},

		/***/ 507: /***/ (module, exports, __webpack_require__) => {
			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
			(function (window, factory) {
				if (!window) {
					return;
				}
				var globalInstall = function (initialEvent) {
					factory(window.lazySizes, initialEvent);
					window.removeEventListener("lazyunveilread", globalInstall, true);
				};

				factory = factory.bind(null, window, window.document);

				if (true && module.exports) {
					factory(__webpack_require__(90));
				} else if (true) {
					!((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(90)]), (__WEBPACK_AMD_DEFINE_FACTORY__ = factory), (__WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else {
				}
			})(typeof window != "undefined" ? window : 0, function (window, document, lazySizes, initialEvent) {
				"use strict";
				var cloneElementClass;
				var style = document.createElement("a").style;
				var fitSupport = "objectFit" in style;
				var positionSupport = fitSupport && "objectPosition" in style;
				var regCssFit = /object-fit["']*\s*:\s*["']*(contain|cover)/;
				var regCssPosition = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/;
				var blankSrc = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
				var regBgUrlEscape = /\(|\)|'/;
				var positionDefaults = {
					center: "center",
					"50% 50%": "center",
				};

				function getObject(element) {
					var css = getComputedStyle(element, null) || {};
					var content = css.fontFamily || "";
					var objectFit = content.match(regCssFit) || "";
					var objectPosition = (objectFit && content.match(regCssPosition)) || "";

					if (objectPosition) {
						objectPosition = objectPosition[1];
					}

					return {
						fit: (objectFit && objectFit[1]) || "",
						position: positionDefaults[objectPosition] || objectPosition || "center",
					};
				}

				function generateStyleClass() {
					if (cloneElementClass) {
						return;
					}

					var styleElement = document.createElement("style");

					cloneElementClass = lazySizes.cfg.objectFitClass || "lazysizes-display-clone";

					document.querySelector("head").appendChild(styleElement);
				}

				function removePrevClone(element) {
					var prev = element.previousElementSibling;

					if (prev && lazySizes.hC(prev, cloneElementClass)) {
						prev.parentNode.removeChild(prev);
						element.style.position = prev.getAttribute("data-position") || "";
						element.style.visibility = prev.getAttribute("data-visibility") || "";
					}
				}

				function initFix(element, config) {
					var switchClassesAdded, addedSrc, styleElement, styleElementStyle;
					var lazysizesCfg = lazySizes.cfg;

					var onChange = function () {
						var src = element.currentSrc || element.src;

						if (src && addedSrc !== src) {
							addedSrc = src;
							styleElementStyle.backgroundImage = "url(" + (regBgUrlEscape.test(src) ? JSON.stringify(src) : src) + ")";

							if (!switchClassesAdded) {
								switchClassesAdded = true;
								lazySizes.rC(styleElement, lazysizesCfg.loadingClass);
								lazySizes.aC(styleElement, lazysizesCfg.loadedClass);
							}
						}
					};
					var rafedOnChange = function () {
						lazySizes.rAF(onChange);
					};

					element._lazysizesParentFit = config.fit;

					element.addEventListener("lazyloaded", rafedOnChange, true);
					element.addEventListener("load", rafedOnChange, true);

					lazySizes.rAF(function () {
						var hideElement = element;
						var container = element.parentNode;

						if (container.nodeName.toUpperCase() == "PICTURE") {
							hideElement = container;
							container = container.parentNode;
						}

						removePrevClone(hideElement);

						if (!cloneElementClass) {
							generateStyleClass();
						}

						styleElement = element.cloneNode(false);
						styleElementStyle = styleElement.style;

						styleElement.addEventListener("load", function () {
							var curSrc = styleElement.currentSrc || styleElement.src;

							if (curSrc && curSrc != blankSrc) {
								styleElement.src = blankSrc;
								styleElement.srcset = "";
							}
						});

						lazySizes.rC(styleElement, lazysizesCfg.loadedClass);
						lazySizes.rC(styleElement, lazysizesCfg.lazyClass);
						lazySizes.rC(styleElement, lazysizesCfg.autosizesClass);
						lazySizes.aC(styleElement, lazysizesCfg.loadingClass);
						lazySizes.aC(styleElement, cloneElementClass);

						["data-parent-fit", "data-parent-container", "data-object-fit-polyfilled", lazysizesCfg.srcsetAttr, lazysizesCfg.srcAttr].forEach(function (attr) {
							styleElement.removeAttribute(attr);
						});

						styleElement.src = blankSrc;
						styleElement.srcset = "";

						styleElementStyle.backgroundRepeat = "no-repeat";
						styleElementStyle.backgroundPosition = config.position;
						styleElementStyle.backgroundSize = config.fit;

						styleElement.setAttribute("data-position", hideElement.style.position);
						styleElement.setAttribute("data-visibility", hideElement.style.visibility);

						hideElement.style.visibility = "hidden";
						hideElement.style.position = "absolute";

						element.setAttribute("data-parent-fit", config.fit);
						element.setAttribute("data-parent-container", "prev");
						element.setAttribute("data-object-fit-polyfilled", "");
						element._objectFitPolyfilledDisplay = styleElement;

						container.insertBefore(styleElement, hideElement);

						if (element._lazysizesParentFit) {
							delete element._lazysizesParentFit;
						}

						if (element.complete) {
							onChange();
						}
					});
				}

				if (!fitSupport || !positionSupport) {
					var onRead = function (e) {
						if (e.detail.instance != lazySizes) {
							return;
						}

						var element = e.target;
						var obj = getObject(element);

						if (obj.fit && (!fitSupport || obj.position != "center")) {
							initFix(element, obj);
							return true;
						}

						return false;
					};

					window.addEventListener("lazybeforesizes", function (e) {
						if (e.detail.instance != lazySizes) {
							return;
						}
						var element = e.target;

						if (element.getAttribute("data-object-fit-polyfilled") != null && !element._objectFitPolyfilledDisplay) {
							if (!onRead(e)) {
								lazySizes.rAF(function () {
									element.removeAttribute("data-object-fit-polyfilled");
								});
							}
						}
					});
					window.addEventListener("lazyunveilread", onRead, true);

					if (initialEvent && initialEvent.detail) {
						onRead(initialEvent);
					}
				}
			});

			/***/
		},

		/***/ 35: /***/ (module, exports, __webpack_require__) => {
			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
			(function (window, factory) {
				var globalInstall = function () {
					factory(window.lazySizes);
					window.removeEventListener("lazyunveilread", globalInstall, true);
				};

				factory = factory.bind(null, window, window.document);

				if (true && module.exports) {
					factory(__webpack_require__(90));
				} else if (true) {
					!((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(90)]), (__WEBPACK_AMD_DEFINE_FACTORY__ = factory), (__WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else {
				}
			})(window, function (window, document, lazySizes) {
				/*jshint eqnull:true */
				"use strict";

				var config, riasCfg;
				var lazySizesCfg = lazySizes.cfg;
				var replaceTypes = { string: 1, number: 1 };
				var regNumber = /^\-*\+*\d+\.*\d*$/;
				var regPicture = /^picture$/i;
				var regWidth = /\s*\{\s*width\s*\}\s*/i;
				var regHeight = /\s*\{\s*height\s*\}\s*/i;
				var regPlaceholder = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi;
				var regObj = /^\[.*\]|\{.*\}$/;
				var regAllowedSizes = /^(?:auto|\d+(px)?)$/;
				var anchor = document.createElement("a");
				var img = document.createElement("img");
				var buggySizes = "srcset" in img && !("sizes" in img);
				var supportPicture = !!window.HTMLPictureElement && !buggySizes;

				(function () {
					var prop;
					var noop = function () {};
					var riasDefaults = {
						prefix: "",
						postfix: "",
						srcAttr: "data-src",
						absUrl: false,
						modifyOptions: noop,
						widthmap: {},
						ratio: false,
						traditionalRatio: false,
						aspectratio: false,
					};

					config = lazySizes && lazySizes.cfg;

					if (!config.supportsType) {
						config.supportsType = function (type /*, elem*/) {
							return !type;
						};
					}

					if (!config.rias) {
						config.rias = {};
					}
					riasCfg = config.rias;

					if (!("widths" in riasCfg)) {
						riasCfg.widths = [];
						(function (widths) {
							var width;
							var i = 0;
							while (!width || width < 3000) {
								i += 5;
								if (i > 30) {
									i += 1;
								}
								width = 36 * i;
								widths.push(width);
							}
						})(riasCfg.widths);
					}

					for (prop in riasDefaults) {
						if (!(prop in riasCfg)) {
							riasCfg[prop] = riasDefaults[prop];
						}
					}
				})();

				function getElementOptions(elem, src, options) {
					var attr, parent, setOption, prop, opts;
					var elemStyles = window.getComputedStyle(elem);

					if (!options) {
						parent = elem.parentNode;

						options = {
							isPicture: !!(parent && regPicture.test(parent.nodeName || "")),
						};
					} else {
						opts = {};

						for (prop in options) {
							opts[prop] = options[prop];
						}

						options = opts;
					}

					setOption = function (attr, run) {
						var attrVal = elem.getAttribute("data-" + attr);

						if (!attrVal) {
							// no data- attr, get value from the CSS
							var styles = elemStyles.getPropertyValue("--ls-" + attr);
							// at least Safari 9 returns null rather than
							// an empty string for getPropertyValue causing
							// .trim() to fail
							if (styles) {
								attrVal = styles.trim();
							}
						}

						if (attrVal) {
							if (attrVal == "true") {
								attrVal = true;
							} else if (attrVal == "false") {
								attrVal = false;
							} else if (regNumber.test(attrVal)) {
								attrVal = parseFloat(attrVal);
							} else if (typeof riasCfg[attr] == "function") {
								attrVal = riasCfg[attr](elem, attrVal);
							} else if (regObj.test(attrVal)) {
								try {
									attrVal = JSON.parse(attrVal);
								} catch (e) {}
							}
							options[attr] = attrVal;
						} else if (attr in riasCfg && typeof riasCfg[attr] != "function" && !options[attr]) {
							options[attr] = riasCfg[attr];
						} else if (run && typeof riasCfg[attr] == "function") {
							options[attr] = riasCfg[attr](elem, attrVal);
						}
					};

					for (attr in riasCfg) {
						setOption(attr);
					}
					src.replace(regPlaceholder, function (full, match) {
						if (!(match in options)) {
							setOption(match, true);
						}
					});

					return options;
				}

				function replaceUrlProps(url, options) {
					var candidates = [];
					var replaceFn = function (full, match) {
						return replaceTypes[typeof options[match]] ? options[match] : full;
					};
					candidates.srcset = [];

					if (options.absUrl) {
						anchor.setAttribute("href", url);
						url = anchor.href;
					}

					url = ((options.prefix || "") + url + (options.postfix || "")).replace(regPlaceholder, replaceFn);

					options.widths.forEach(function (width) {
						var widthAlias = options.widthmap[width] || width;
						var ratio = options.aspectratio || options.ratio;
						var traditionalRatio = !options.aspectratio && riasCfg.traditionalRatio;
						var candidate = {
							u: url.replace(regWidth, widthAlias).replace(regHeight, ratio ? (traditionalRatio ? Math.round(width * ratio) : Math.round(width / ratio)) : ""),
							w: width,
						};

						candidates.push(candidate);
						candidates.srcset.push((candidate.c = candidate.u + " " + width + "w"));
					});
					return candidates;
				}

				function setSrc(src, opts, elem) {
					var elemW = 0;
					var elemH = 0;
					var sizeElement = elem;

					if (!src) {
						return;
					}

					if (opts.ratio === "container") {
						// calculate image or parent ratio
						elemW = sizeElement.scrollWidth;
						elemH = sizeElement.scrollHeight;

						while ((!elemW || !elemH) && sizeElement !== document) {
							sizeElement = sizeElement.parentNode;
							elemW = sizeElement.scrollWidth;
							elemH = sizeElement.scrollHeight;
						}
						if (elemW && elemH) {
							opts.ratio = opts.traditionalRatio ? elemH / elemW : elemW / elemH;
						}
					}

					src = replaceUrlProps(src, opts);

					src.isPicture = opts.isPicture;

					if (buggySizes && elem.nodeName.toUpperCase() == "IMG") {
						elem.removeAttribute(config.srcsetAttr);
					} else {
						elem.setAttribute(config.srcsetAttr, src.srcset.join(", "));
					}

					Object.defineProperty(elem, "_lazyrias", {
						value: src,
						writable: true,
					});
				}

				function createAttrObject(elem, src) {
					var opts = getElementOptions(elem, src);

					riasCfg.modifyOptions.call(elem, { target: elem, details: opts, detail: opts });

					lazySizes.fire(elem, "lazyriasmodifyoptions", opts);
					return opts;
				}

				function getSrc(elem) {
					return elem.getAttribute(elem.getAttribute("data-srcattr") || riasCfg.srcAttr) || elem.getAttribute(config.srcsetAttr) || elem.getAttribute(config.srcAttr) || elem.getAttribute("data-pfsrcset") || "";
				}

				addEventListener(
					"lazybeforesizes",
					function (e) {
						if (e.detail.instance != lazySizes) {
							return;
						}

						var elem, src, elemOpts, sourceOpts, parent, sources, i, len, sourceSrc, sizes, detail, hasPlaceholder, modified, emptyList;
						elem = e.target;

						if (!e.detail.dataAttr || e.defaultPrevented || riasCfg.disabled || !((sizes = elem.getAttribute(config.sizesAttr) || elem.getAttribute("sizes")) && regAllowedSizes.test(sizes))) {
							return;
						}

						src = getSrc(elem);

						elemOpts = createAttrObject(elem, src);

						hasPlaceholder = regWidth.test(elemOpts.prefix) || regWidth.test(elemOpts.postfix);

						if (elemOpts.isPicture && (parent = elem.parentNode)) {
							sources = parent.getElementsByTagName("source");
							for (i = 0, len = sources.length; i < len; i++) {
								if (hasPlaceholder || regWidth.test((sourceSrc = getSrc(sources[i])))) {
									sourceOpts = getElementOptions(sources[i], sourceSrc, elemOpts);
									setSrc(sourceSrc, sourceOpts, sources[i]);
									modified = true;
								}
							}
						}

						if (hasPlaceholder || regWidth.test(src)) {
							setSrc(src, elemOpts, elem);
							modified = true;
						} else if (modified) {
							emptyList = [];
							emptyList.srcset = [];
							emptyList.isPicture = true;
							Object.defineProperty(elem, "_lazyrias", {
								value: emptyList,
								writable: true,
							});
						}

						if (modified) {
							if (supportPicture) {
								elem.removeAttribute(config.srcAttr);
							} else if (sizes != "auto") {
								detail = {
									width: parseInt(sizes, 10),
								};
								polyfill({
									target: elem,
									detail: detail,
								});
							}
						}
					},
					true
				);
				// partial polyfill
				var polyfill = (function () {
					var ascendingSort = function (a, b) {
						return a.w - b.w;
					};

					var reduceCandidate = function (srces) {
						var lowerCandidate, bonusFactor;
						var len = srces.length;
						var candidate = srces[len - 1];
						var i = 0;

						for (i; i < len; i++) {
							candidate = srces[i];
							candidate.d = candidate.w / srces.w;
							if (candidate.d >= srces.d) {
								if (!candidate.cached && (lowerCandidate = srces[i - 1]) && lowerCandidate.d > srces.d - 0.13 * Math.pow(srces.d, 2.2)) {
									bonusFactor = Math.pow(lowerCandidate.d - 0.6, 1.6);

									if (lowerCandidate.cached) {
										lowerCandidate.d += 0.15 * bonusFactor;
									}

									if (lowerCandidate.d + (candidate.d - srces.d) * bonusFactor > srces.d) {
										candidate = lowerCandidate;
									}
								}
								break;
							}
						}
						return candidate;
					};

					var getWSet = function (elem, testPicture) {
						var src;
						if (!elem._lazyrias && lazySizes.pWS && (src = lazySizes.pWS(elem.getAttribute(config.srcsetAttr || ""))).length) {
							Object.defineProperty(elem, "_lazyrias", {
								value: src,
								writable: true,
							});
							if (testPicture && elem.parentNode) {
								src.isPicture = elem.parentNode.nodeName.toUpperCase() == "PICTURE";
							}
						}
						return elem._lazyrias;
					};

					var getX = function (elem) {
						var dpr = window.devicePixelRatio || 1;
						var optimum = lazySizes.getX && lazySizes.getX(elem);
						return Math.min(optimum || dpr, 2.4, dpr);
					};

					var getCandidate = function (elem, width) {
						var sources, i, len, media, srces, src;

						srces = elem._lazyrias;

						if (srces.isPicture && window.matchMedia) {
							for (i = 0, sources = elem.parentNode.getElementsByTagName("source"), len = sources.length; i < len; i++) {
								if (getWSet(sources[i]) && !sources[i].getAttribute("type") && (!(media = sources[i].getAttribute("media")) || (matchMedia(media) || {}).matches)) {
									srces = sources[i]._lazyrias;
									break;
								}
							}
						}

						if (!srces.w || srces.w < width) {
							srces.w = width;
							srces.d = getX(elem);
							src = reduceCandidate(srces.sort(ascendingSort));
						}

						return src;
					};

					var polyfill = function (e) {
						if (e.detail.instance != lazySizes) {
							return;
						}

						var candidate;
						var elem = e.target;

						if (!buggySizes && (window.respimage || window.picturefill || lazySizesCfg.pf)) {
							document.removeEventListener("lazybeforesizes", polyfill);
							return;
						}

						if (!("_lazyrias" in elem) && (!e.detail.dataAttr || !getWSet(elem, true))) {
							return;
						}

						candidate = getCandidate(elem, e.detail.width);

						if (candidate && candidate.u && elem._lazyrias.cur != candidate.u) {
							elem._lazyrias.cur = candidate.u;
							candidate.cached = true;
							lazySizes.rAF(function () {
								elem.setAttribute(config.srcAttr, candidate.u);
								elem.setAttribute("src", candidate.u);
							});
						}
					};

					if (!supportPicture) {
						addEventListener("lazybeforesizes", polyfill);
					} else {
						polyfill = function () {};
					}

					return polyfill;
				})();
			});

			/***/
		},

		/***/ 933: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			/**
			 * Module dependencies
			 */
			var decouple = __webpack_require__(816);
			var Emitter = __webpack_require__(626);

			/**
			 * Privates
			 */
			var scrollTimeout;
			var scrolling = false;
			var doc = window.document;
			var html = doc.documentElement;
			var msPointerSupported = window.navigator.msPointerEnabled;
			var touch = {
				start: msPointerSupported ? "MSPointerDown" : "touchstart",
				move: msPointerSupported ? "MSPointerMove" : "touchmove",
				end: msPointerSupported ? "MSPointerUp" : "touchend",
			};
			var prefix = (function prefix() {
				var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
				var styleDeclaration = doc.getElementsByTagName("script")[0].style;
				for (var prop in styleDeclaration) {
					if (regex.test(prop)) {
						return "-" + prop.match(regex)[0].toLowerCase() + "-";
					}
				}
				// Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
				// However (prop in style) returns the correct value, so we'll have to test for
				// the precence of a specific property
				if ("WebkitOpacity" in styleDeclaration) {
					return "-webkit-";
				}
				if ("KhtmlOpacity" in styleDeclaration) {
					return "-khtml-";
				}
				return "";
			})();
			function extend(destination, from) {
				for (var prop in from) {
					if (from[prop]) {
						destination[prop] = from[prop];
					}
				}
				return destination;
			}
			function inherits(child, uber) {
				child.prototype = extend(child.prototype || {}, uber.prototype);
			}
			function hasIgnoredElements(el) {
				while (el.parentNode) {
					if (el.getAttribute("data-slideout-ignore") !== null) {
						return el;
					}
					el = el.parentNode;
				}
				return null;
			}

			/**
			 * Slideout constructor
			 */
			function Slideout(options) {
				options = options || {};

				// Sets default values
				this._startOffsetX = 0;
				this._currentOffsetX = 0;
				this._opening = false;
				this._moved = false;
				this._opened = false;
				this._preventOpen = false;
				this._touch = options.touch === undefined ? true : options.touch && true;
				this._side = options.side || "left";

				// Sets panel
				this.panel = options.panel;
				this.menu = options.menu;

				// Sets  classnames
				if (!this.panel.classList.contains("slideout-panel")) {
					this.panel.classList.add("slideout-panel");
				}
				if (!this.panel.classList.contains("slideout-panel-" + this._side)) {
					this.panel.classList.add("slideout-panel-" + this._side);
				}
				if (!this.menu.classList.contains("slideout-menu")) {
					this.menu.classList.add("slideout-menu");
				}
				if (!this.menu.classList.contains("slideout-menu-" + this._side)) {
					this.menu.classList.add("slideout-menu-" + this._side);
				}

				// Sets options
				this._fx = options.fx || "ease";
				this._duration = parseInt(options.duration, 10) || 300;
				this._tolerance = parseInt(options.tolerance, 10) || 70;
				this._padding = this._translateTo = parseInt(options.padding, 10) || 256;
				this._orientation = this._side === "right" ? -1 : 1;
				this._translateTo *= this._orientation;

				// Init touch events
				if (this._touch) {
					this._initTouchEvents();
				}
			}

			/**
			 * Inherits from Emitter
			 */
			inherits(Slideout, Emitter);

			/**
			 * Opens the slideout menu.
			 */
			Slideout.prototype.open = function () {
				var self = this;
				this.emit("beforeopen");
				if (!html.classList.contains("slideout-open")) {
					html.classList.add("slideout-open");
				}
				this._setTransition();
				this._translateXTo(this._translateTo);
				this._opened = true;
				setTimeout(function () {
					self.panel.style.transition = self.panel.style["-webkit-transition"] = "";
					self.emit("open");
				}, this._duration + 50);
				return this;
			};

			/**
			 * Closes slideout menu.
			 */
			Slideout.prototype.close = function () {
				var self = this;
				if (!this.isOpen() && !this._opening) {
					return this;
				}
				this.emit("beforeclose");
				this._setTransition();
				this._translateXTo(0);
				this._opened = false;
				setTimeout(function () {
					html.classList.remove("slideout-open");
					self.panel.style.transition = self.panel.style["-webkit-transition"] = self.panel.style[prefix + "transform"] = self.panel.style.transform = "";
					self.emit("close");
				}, this._duration + 50);
				return this;
			};

			/**
			 * Toggles (open/close) slideout menu.
			 */
			Slideout.prototype.toggle = function () {
				return this.isOpen() ? this.close() : this.open();
			};

			/**
			 * Returns true if the slideout is currently open, and false if it is closed.
			 */
			Slideout.prototype.isOpen = function () {
				return this._opened;
			};

			/**
			 * Translates panel and updates currentOffset with a given X point
			 */
			Slideout.prototype._translateXTo = function (translateX) {
				this._currentOffsetX = translateX;
				this.panel.style[prefix + "transform"] = this.panel.style.transform = "translateX(" + translateX + "px)";
				return this;
			};

			/**
			 * Set transition properties
			 */
			Slideout.prototype._setTransition = function () {
				this.panel.style[prefix + "transition"] = this.panel.style.transition = prefix + "transform " + this._duration + "ms " + this._fx;
				return this;
			};

			/**
			 * Initializes touch event
			 */
			Slideout.prototype._initTouchEvents = function () {
				var self = this;

				/**
				 * Decouple scroll event
				 */
				this._onScrollFn = decouple(doc, "scroll", function () {
					if (!self._moved) {
						clearTimeout(scrollTimeout);
						scrolling = true;
						scrollTimeout = setTimeout(function () {
							scrolling = false;
						}, 250);
					}
				});

				/**
				 * Prevents touchmove event if slideout is moving
				 */
				this._preventMove = function (eve) {
					if (self._moved) {
						eve.preventDefault();
					}
				};

				doc.addEventListener(touch.move, this._preventMove);

				/**
				 * Resets values on touchstart
				 */
				this._resetTouchFn = function (eve) {
					if (typeof eve.touches === "undefined") {
						return;
					}

					self._moved = false;
					self._opening = false;
					self._startOffsetX = eve.touches[0].pageX;
					self._preventOpen = !self._touch || (!self.isOpen() && self.menu.clientWidth !== 0);
				};

				this.panel.addEventListener(touch.start, this._resetTouchFn);

				/**
				 * Resets values on touchcancel
				 */
				this._onTouchCancelFn = function () {
					self._moved = false;
					self._opening = false;
				};

				this.panel.addEventListener("touchcancel", this._onTouchCancelFn);

				/**
				 * Toggles slideout on touchend
				 */
				this._onTouchEndFn = function () {
					if (self._moved) {
						self.emit("translateend");
						self._opening && Math.abs(self._currentOffsetX) > self._tolerance ? self.open() : self.close();
					}
					self._moved = false;
				};

				this.panel.addEventListener(touch.end, this._onTouchEndFn);

				/**
				 * Translates panel on touchmove
				 */
				this._onTouchMoveFn = function (eve) {
					if (scrolling || self._preventOpen || typeof eve.touches === "undefined" || hasIgnoredElements(eve.target)) {
						return;
					}

					var dif_x = eve.touches[0].clientX - self._startOffsetX;
					var translateX = (self._currentOffsetX = dif_x);

					if (Math.abs(translateX) > self._padding) {
						return;
					}

					if (Math.abs(dif_x) > 20) {
						self._opening = true;

						var oriented_dif_x = dif_x * self._orientation;

						if ((self._opened && oriented_dif_x > 0) || (!self._opened && oriented_dif_x < 0)) {
							return;
						}

						if (!self._moved) {
							self.emit("translatestart");
						}

						if (oriented_dif_x <= 0) {
							translateX = dif_x + self._padding * self._orientation;
							self._opening = false;
						}

						if (!(self._moved && html.classList.contains("slideout-open"))) {
							html.classList.add("slideout-open");
						}

						self.panel.style[prefix + "transform"] = self.panel.style.transform = "translateX(" + translateX + "px)";
						self.emit("translate", translateX);
						self._moved = true;
					}
				};

				this.panel.addEventListener(touch.move, this._onTouchMoveFn);

				return this;
			};

			/**
			 * Enable opening the slideout via touch events.
			 */
			Slideout.prototype.enableTouch = function () {
				this._touch = true;
				return this;
			};

			/**
			 * Disable opening the slideout via touch events.
			 */
			Slideout.prototype.disableTouch = function () {
				this._touch = false;
				return this;
			};

			/**
			 * Destroy an instance of slideout.
			 */
			Slideout.prototype.destroy = function () {
				// Close before clean
				this.close();

				// Remove event listeners
				doc.removeEventListener(touch.move, this._preventMove);
				this.panel.removeEventListener(touch.start, this._resetTouchFn);
				this.panel.removeEventListener("touchcancel", this._onTouchCancelFn);
				this.panel.removeEventListener(touch.end, this._onTouchEndFn);
				this.panel.removeEventListener(touch.move, this._onTouchMoveFn);
				doc.removeEventListener("scroll", this._onScrollFn);

				// Remove methods
				this.open = this.close = function () {};

				// Return the instance so it can be easily dereferenced
				return this;
			};

			/**
			 * Expose Slideout
			 */
			module.exports = Slideout;

			/***/
		},

		/***/ 630: /***/ function (module, exports) {
			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
			(function (global, factory) {
				if (true) {
					!((__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports]), (__WEBPACK_AMD_DEFINE_FACTORY__ = factory), (__WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else {
					var mod;
				}
			})(this, function (module, exports) {
				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true,
				});

				var _class, _temp;

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var _createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];
							descriptor.enumerable = descriptor.enumerable || false;
							descriptor.configurable = true;
							if ("value" in descriptor) descriptor.writable = true;
							Object.defineProperty(target, descriptor.key, descriptor);
						}
					}

					return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);
						if (staticProps) defineProperties(Constructor, staticProps);
						return Constructor;
					};
				})();

				function isIn(needle, haystack) {
					return haystack.indexOf(needle) >= 0;
				}

				function extend(custom, defaults) {
					for (var key in defaults) {
						if (custom[key] == null) {
							var value = defaults[key];
							custom[key] = value;
						}
					}
					return custom;
				}

				function isMobile(agent) {
					return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
				}

				function createEvent(event) {
					var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
					var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
					var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

					var customEvent = void 0;
					if (document.createEvent != null) {
						// W3C DOM
						customEvent = document.createEvent("CustomEvent");
						customEvent.initCustomEvent(event, bubble, cancel, detail);
					} else if (document.createEventObject != null) {
						// IE DOM < 9
						customEvent = document.createEventObject();
						customEvent.eventType = event;
					} else {
						customEvent.eventName = event;
					}

					return customEvent;
				}

				function emitEvent(elem, event) {
					if (elem.dispatchEvent != null) {
						// W3C DOM
						elem.dispatchEvent(event);
					} else if (event in (elem != null)) {
						elem[event]();
					} else if ("on" + event in (elem != null)) {
						elem["on" + event]();
					}
				}

				function addEvent(elem, event, fn) {
					if (elem.addEventListener != null) {
						// W3C DOM
						elem.addEventListener(event, fn, false);
					} else if (elem.attachEvent != null) {
						// IE DOM
						elem.attachEvent("on" + event, fn);
					} else {
						// fallback
						elem[event] = fn;
					}
				}

				function removeEvent(elem, event, fn) {
					if (elem.removeEventListener != null) {
						// W3C DOM
						elem.removeEventListener(event, fn, false);
					} else if (elem.detachEvent != null) {
						// IE DOM
						elem.detachEvent("on" + event, fn);
					} else {
						// fallback
						delete elem[event];
					}
				}

				function getInnerHeight() {
					if ("innerHeight" in window) {
						return window.innerHeight;
					}

					return document.documentElement.clientHeight;
				}

				// Minimalistic WeakMap shim, just in case.
				var WeakMap =
					window.WeakMap ||
					window.MozWeakMap ||
					(function () {
						function WeakMap() {
							_classCallCheck(this, WeakMap);

							this.keys = [];
							this.values = [];
						}

						_createClass(WeakMap, [
							{
								key: "get",
								value: function get(key) {
									for (var i = 0; i < this.keys.length; i++) {
										var item = this.keys[i];
										if (item === key) {
											return this.values[i];
										}
									}
									return undefined;
								},
							},
							{
								key: "set",
								value: function set(key, value) {
									for (var i = 0; i < this.keys.length; i++) {
										var item = this.keys[i];
										if (item === key) {
											this.values[i] = value;
											return this;
										}
									}
									this.keys.push(key);
									this.values.push(value);
									return this;
								},
							},
						]);

						return WeakMap;
					})();

				// Dummy MutationObserver, to avoid raising exceptions.
				var MutationObserver =
					window.MutationObserver ||
					window.WebkitMutationObserver ||
					window.MozMutationObserver ||
					((_temp = _class =
						(function () {
							function MutationObserver() {
								_classCallCheck(this, MutationObserver);

								if (typeof console !== "undefined" && console !== null) {
									console.warn("MutationObserver is not supported by your browser.");
									console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
								}
							}

							_createClass(MutationObserver, [
								{
									key: "observe",
									value: function observe() {},
								},
							]);

							return MutationObserver;
						})()),
					(_class.notSupported = true),
					_temp);

				// getComputedStyle shim, from http://stackoverflow.com/a/21797294
				var getComputedStyle =
					window.getComputedStyle ||
					function getComputedStyle(el) {
						var getComputedStyleRX = /(\-([a-z]){1})/g;
						return {
							getPropertyValue: function getPropertyValue(prop) {
								if (prop === "float") {
									prop = "styleFloat";
								}
								if (getComputedStyleRX.test(prop)) {
									prop.replace(getComputedStyleRX, function (_, _char) {
										return _char.toUpperCase();
									});
								}
								var currentStyle = el.currentStyle;

								return (currentStyle != null ? currentStyle[prop] : void 0) || null;
							},
						};
					};

				var WOW = (function () {
					function WOW() {
						var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

						_classCallCheck(this, WOW);

						this.defaults = {
							boxClass: "wow",
							animateClass: "animated",
							offset: 0,
							mobile: true,
							live: true,
							callback: null,
							scrollContainer: null,
						};

						this.animate = (function animateFactory() {
							if ("requestAnimationFrame" in window) {
								return function (callback) {
									return window.requestAnimationFrame(callback);
								};
							}
							return function (callback) {
								return callback();
							};
						})();

						this.vendors = ["moz", "webkit"];

						this.start = this.start.bind(this);
						this.resetAnimation = this.resetAnimation.bind(this);
						this.scrollHandler = this.scrollHandler.bind(this);
						this.scrollCallback = this.scrollCallback.bind(this);
						this.scrolled = true;
						this.config = extend(options, this.defaults);
						if (options.scrollContainer != null) {
							this.config.scrollContainer = document.querySelector(options.scrollContainer);
						}
						// Map of elements to animation names:
						this.animationNameCache = new WeakMap();
						this.wowEvent = createEvent(this.config.boxClass);
					}

					_createClass(WOW, [
						{
							key: "init",
							value: function init() {
								this.element = window.document.documentElement;
								if (isIn(document.readyState, ["interactive", "complete"])) {
									this.start();
								} else {
									addEvent(document, "DOMContentLoaded", this.start);
								}
								this.finished = [];
							},
						},
						{
							key: "start",
							value: function start() {
								var _this = this;

								this.stopped = false;
								this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass));
								this.all = this.boxes.slice(0);
								if (this.boxes.length) {
									if (this.disabled()) {
										this.resetStyle();
									} else {
										for (var i = 0; i < this.boxes.length; i++) {
											var box = this.boxes[i];
											this.applyStyle(box, true);
										}
									}
								}
								if (!this.disabled()) {
									addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler);
									addEvent(window, "resize", this.scrollHandler);
									this.interval = setInterval(this.scrollCallback, 50);
								}
								if (this.config.live) {
									var mut = new MutationObserver(function (records) {
										for (var j = 0; j < records.length; j++) {
											var record = records[j];
											for (var k = 0; k < record.addedNodes.length; k++) {
												var node = record.addedNodes[k];
												_this.doSync(node);
											}
										}
										return undefined;
									});
									mut.observe(document.body, {
										childList: true,
										subtree: true,
									});
								}
							},
						},
						{
							key: "stop",
							value: function stop() {
								this.stopped = true;
								removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler);
								removeEvent(window, "resize", this.scrollHandler);
								if (this.interval != null) {
									clearInterval(this.interval);
								}
							},
						},
						{
							key: "sync",
							value: function sync() {
								if (MutationObserver.notSupported) {
									this.doSync(this.element);
								}
							},
						},
						{
							key: "doSync",
							value: function doSync(element) {
								if (typeof element === "undefined" || element === null) {
									element = this.element;
								}
								if (element.nodeType !== 1) {
									return;
								}
								element = element.parentNode || element;
								var iterable = element.querySelectorAll("." + this.config.boxClass);
								for (var i = 0; i < iterable.length; i++) {
									var box = iterable[i];
									if (!isIn(box, this.all)) {
										this.boxes.push(box);
										this.all.push(box);
										if (this.stopped || this.disabled()) {
											this.resetStyle();
										} else {
											this.applyStyle(box, true);
										}
										this.scrolled = true;
									}
								}
							},
						},
						{
							key: "show",
							value: function show(box) {
								this.applyStyle(box);
								box.className = box.className + " " + this.config.animateClass;
								if (this.config.callback != null) {
									this.config.callback(box);
								}
								emitEvent(box, this.wowEvent);

								addEvent(box, "animationend", this.resetAnimation);
								addEvent(box, "oanimationend", this.resetAnimation);
								addEvent(box, "webkitAnimationEnd", this.resetAnimation);
								addEvent(box, "MSAnimationEnd", this.resetAnimation);

								return box;
							},
						},
						{
							key: "applyStyle",
							value: function applyStyle(box, hidden) {
								var _this2 = this;

								var duration = box.getAttribute("data-wow-duration");
								var delay = box.getAttribute("data-wow-delay");
								var iteration = box.getAttribute("data-wow-iteration");

								return this.animate(function () {
									return _this2.customStyle(box, hidden, duration, delay, iteration);
								});
							},
						},
						{
							key: "resetStyle",
							value: function resetStyle() {
								for (var i = 0; i < this.boxes.length; i++) {
									var box = this.boxes[i];
									box.style.visibility = "visible";
								}
								return undefined;
							},
						},
						{
							key: "resetAnimation",
							value: function resetAnimation(event) {
								if (event.type.toLowerCase().indexOf("animationend") >= 0) {
									var target = event.target || event.srcElement;
									target.className = target.className.replace(this.config.animateClass, "").trim();
								}
							},
						},
						{
							key: "customStyle",
							value: function customStyle(box, hidden, duration, delay, iteration) {
								if (hidden) {
									this.cacheAnimationName(box);
								}
								box.style.visibility = hidden ? "hidden" : "visible";

								if (duration) {
									this.vendorSet(box.style, { animationDuration: duration });
								}
								if (delay) {
									this.vendorSet(box.style, { animationDelay: delay });
								}
								if (iteration) {
									this.vendorSet(box.style, { animationIterationCount: iteration });
								}
								this.vendorSet(box.style, { animationName: hidden ? "none" : this.cachedAnimationName(box) });

								return box;
							},
						},
						{
							key: "vendorSet",
							value: function vendorSet(elem, properties) {
								for (var name in properties) {
									if (properties.hasOwnProperty(name)) {
										var value = properties[name];
										elem["" + name] = value;
										for (var i = 0; i < this.vendors.length; i++) {
											var vendor = this.vendors[i];
											elem["" + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
										}
									}
								}
							},
						},
						{
							key: "vendorCSS",
							value: function vendorCSS(elem, property) {
								var style = getComputedStyle(elem);
								var result = style.getPropertyCSSValue(property);
								for (var i = 0; i < this.vendors.length; i++) {
									var vendor = this.vendors[i];
									result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
								}
								return result;
							},
						},
						{
							key: "animationName",
							value: function animationName(box) {
								var aName = void 0;
								try {
									aName = this.vendorCSS(box, "animation-name").cssText;
								} catch (error) {
									// Opera, fall back to plain property value
									aName = getComputedStyle(box).getPropertyValue("animation-name");
								}

								if (aName === "none") {
									return ""; // SVG/Firefox, unable to get animation name?
								}

								return aName;
							},
						},
						{
							key: "cacheAnimationName",
							value: function cacheAnimationName(box) {
								// https://bugzilla.mozilla.org/show_bug.cgi?id=921834
								// box.dataset is not supported for SVG elements in Firefox
								return this.animationNameCache.set(box, this.animationName(box));
							},
						},
						{
							key: "cachedAnimationName",
							value: function cachedAnimationName(box) {
								return this.animationNameCache.get(box);
							},
						},
						{
							key: "scrollHandler",
							value: function scrollHandler() {
								this.scrolled = true;
							},
						},
						{
							key: "scrollCallback",
							value: function scrollCallback() {
								if (this.scrolled) {
									this.scrolled = false;
									var results = [];
									for (var i = 0; i < this.boxes.length; i++) {
										var box = this.boxes[i];
										if (box) {
											if (this.isVisible(box)) {
												this.show(box);
												continue;
											}
											results.push(box);
										}
									}
									this.boxes = results;
									if (!this.boxes.length && !this.config.live) {
										this.stop();
									}
								}
							},
						},
						{
							key: "offsetTop",
							value: function offsetTop(element) {
								// SVG elements don't have an offsetTop in Firefox.
								// This will use their nearest parent that has an offsetTop.
								// Also, using ('offsetTop' of element) causes an exception in Firefox.
								while (element.offsetTop === undefined) {
									element = element.parentNode;
								}
								var top = element.offsetTop;
								while (element.offsetParent) {
									element = element.offsetParent;
									top += element.offsetTop;
								}
								return top;
							},
						},
						{
							key: "isVisible",
							value: function isVisible(box) {
								var offset = box.getAttribute("data-wow-offset") || this.config.offset;
								var viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
								var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
								var top = this.offsetTop(box);
								var bottom = top + box.clientHeight;

								return top <= viewBottom && bottom >= viewTop;
							},
						},
						{
							key: "disabled",
							value: function disabled() {
								return !this.config.mobile && isMobile(navigator.userAgent);
							},
						},
					]);

					return WOW;
				})();

				exports.default = WOW;
				module.exports = exports["default"];
			});

			/***/
		},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/compat get default export */
	/******/ (() => {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = (module) => {
			/******/ var getter = module && module.__esModule ? /******/ () => module["default"] : /******/ () => module;
			/******/ __webpack_require__.d(getter, { a: getter });
			/******/ return getter;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/global */
	/******/ (() => {
		/******/ __webpack_require__.g = (function () {
			/******/ if (typeof globalThis === "object") return globalThis;
			/******/ try {
				/******/ return this || new Function("return this")();
				/******/
			} catch (e) {
				/******/ if (typeof window === "object") return window;
				/******/
			}
			/******/
		})();
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be in strict mode.
	(() => {
		"use strict";

		// EXTERNAL MODULE: ./node_modules/wow.js/dist/wow.js
		var wow = __webpack_require__(630);
		var wow_default = /*#__PURE__*/ __webpack_require__.n(wow); // CONCATENATED MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
		/*!
		 * Vue.js v2.6.14
		 * (c) 2014-2021 Evan You
		 * Released under the MIT License.
		 */
		/*  */

		var emptyObject = Object.freeze({});

		// These helpers produce better VM code in JS engines due to their
		// explicitness and function inlining.
		function isUndef(v) {
			return v === undefined || v === null;
		}

		function isDef(v) {
			return v !== undefined && v !== null;
		}

		function isTrue(v) {
			return v === true;
		}

		function isFalse(v) {
			return v === false;
		}

		/**
		 * Check if value is primitive.
		 */
		function isPrimitive(value) {
			return (
				typeof value === "string" ||
				typeof value === "number" ||
				// $flow-disable-line
				typeof value === "symbol" ||
				typeof value === "boolean"
			);
		}

		/**
		 * Quick object check - this is primarily used to tell
		 * Objects from primitive values when we know the value
		 * is a JSON-compliant type.
		 */
		function isObject(obj) {
			return obj !== null && typeof obj === "object";
		}

		/**
		 * Get the raw type string of a value, e.g., [object Object].
		 */
		var _toString = Object.prototype.toString;

		function toRawType(value) {
			return _toString.call(value).slice(8, -1);
		}

		/**
		 * Strict object type check. Only returns true
		 * for plain JavaScript objects.
		 */
		function isPlainObject(obj) {
			return _toString.call(obj) === "[object Object]";
		}

		function isRegExp(v) {
			return _toString.call(v) === "[object RegExp]";
		}

		/**
		 * Check if val is a valid array index.
		 */
		function isValidArrayIndex(val) {
			var n = parseFloat(String(val));
			return n >= 0 && Math.floor(n) === n && isFinite(val);
		}

		function isPromise(val) {
			return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
		}

		/**
		 * Convert a value to a string that is actually rendered.
		 */
		function vue_runtime_esm_toString(val) {
			return val == null ? "" : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString) ? JSON.stringify(val, null, 2) : String(val);
		}

		/**
		 * Convert an input value to a number for persistence.
		 * If the conversion fails, return original string.
		 */
		function toNumber(val) {
			var n = parseFloat(val);
			return isNaN(n) ? val : n;
		}

		/**
		 * Make a map and return a function for checking if a key
		 * is in that map.
		 */
		function makeMap(str, expectsLowerCase) {
			var map = Object.create(null);
			var list = str.split(",");
			for (var i = 0; i < list.length; i++) {
				map[list[i]] = true;
			}
			return expectsLowerCase
				? function (val) {
						return map[val.toLowerCase()];
				  }
				: function (val) {
						return map[val];
				  };
		}

		/**
		 * Check if a tag is a built-in tag.
		 */
		var isBuiltInTag = makeMap("slot,component", true);

		/**
		 * Check if an attribute is a reserved attribute.
		 */
		var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");

		/**
		 * Remove an item from an array.
		 */
		function remove(arr, item) {
			if (arr.length) {
				var index = arr.indexOf(item);
				if (index > -1) {
					return arr.splice(index, 1);
				}
			}
		}

		/**
		 * Check whether an object has the property.
		 */
		var vue_runtime_esm_hasOwnProperty = Object.prototype.hasOwnProperty;
		function hasOwn(obj, key) {
			return vue_runtime_esm_hasOwnProperty.call(obj, key);
		}

		/**
		 * Create a cached version of a pure function.
		 */
		function cached(fn) {
			var cache = Object.create(null);
			return function cachedFn(str) {
				var hit = cache[str];
				return hit || (cache[str] = fn(str));
			};
		}

		/**
		 * Camelize a hyphen-delimited string.
		 */
		var camelizeRE = /-(\w)/g;
		var camelize = cached(function (str) {
			return str.replace(camelizeRE, function (_, c) {
				return c ? c.toUpperCase() : "";
			});
		});

		/**
		 * Capitalize a string.
		 */
		var capitalize = cached(function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		});

		/**
		 * Hyphenate a camelCase string.
		 */
		var hyphenateRE = /\B([A-Z])/g;
		var hyphenate = cached(function (str) {
			return str.replace(hyphenateRE, "-$1").toLowerCase();
		});

		/**
		 * Simple bind polyfill for environments that do not support it,
		 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
		 * since native bind is now performant enough in most browsers.
		 * But removing it would mean breaking code that was able to run in
		 * PhantomJS 1.x, so this must be kept for backward compatibility.
		 */

		/* istanbul ignore next */
		function polyfillBind(fn, ctx) {
			function boundFn(a) {
				var l = arguments.length;
				return l ? (l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)) : fn.call(ctx);
			}

			boundFn._length = fn.length;
			return boundFn;
		}

		function nativeBind(fn, ctx) {
			return fn.bind(ctx);
		}

		var bind = Function.prototype.bind ? nativeBind : polyfillBind;

		/**
		 * Convert an Array-like object to a real Array.
		 */
		function toArray(list, start) {
			start = start || 0;
			var i = list.length - start;
			var ret = new Array(i);
			while (i--) {
				ret[i] = list[i + start];
			}
			return ret;
		}

		/**
		 * Mix properties into target object.
		 */
		function extend(to, _from) {
			for (var key in _from) {
				to[key] = _from[key];
			}
			return to;
		}

		/**
		 * Merge an Array of Objects into a single Object.
		 */
		function toObject(arr) {
			var res = {};
			for (var i = 0; i < arr.length; i++) {
				if (arr[i]) {
					extend(res, arr[i]);
				}
			}
			return res;
		}

		/* eslint-disable no-unused-vars */

		/**
		 * Perform no operation.
		 * Stubbing args to make Flow happy without leaving useless transpiled code
		 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
		 */
		function noop(a, b, c) {}

		/**
		 * Always return false.
		 */
		var no = function (a, b, c) {
			return false;
		};

		/* eslint-enable no-unused-vars */

		/**
		 * Return the same value.
		 */
		var identity = function (_) {
			return _;
		};

		/**
		 * Check if two values are loosely equal - that is,
		 * if they are plain objects, do they have the same shape?
		 */
		function looseEqual(a, b) {
			if (a === b) {
				return true;
			}
			var isObjectA = isObject(a);
			var isObjectB = isObject(b);
			if (isObjectA && isObjectB) {
				try {
					var isArrayA = Array.isArray(a);
					var isArrayB = Array.isArray(b);
					if (isArrayA && isArrayB) {
						return (
							a.length === b.length &&
							a.every(function (e, i) {
								return looseEqual(e, b[i]);
							})
						);
					} else if (a instanceof Date && b instanceof Date) {
						return a.getTime() === b.getTime();
					} else if (!isArrayA && !isArrayB) {
						var keysA = Object.keys(a);
						var keysB = Object.keys(b);
						return (
							keysA.length === keysB.length &&
							keysA.every(function (key) {
								return looseEqual(a[key], b[key]);
							})
						);
					} else {
						/* istanbul ignore next */
						return false;
					}
				} catch (e) {
					/* istanbul ignore next */
					return false;
				}
			} else if (!isObjectA && !isObjectB) {
				return String(a) === String(b);
			} else {
				return false;
			}
		}

		/**
		 * Return the first index at which a loosely equal value can be
		 * found in the array (if value is a plain object, the array must
		 * contain an object of the same shape), or -1 if it is not present.
		 */
		function looseIndexOf(arr, val) {
			for (var i = 0; i < arr.length; i++) {
				if (looseEqual(arr[i], val)) {
					return i;
				}
			}
			return -1;
		}

		/**
		 * Ensure a function is called only once.
		 */
		function once(fn) {
			var called = false;
			return function () {
				if (!called) {
					called = true;
					fn.apply(this, arguments);
				}
			};
		}

		var SSR_ATTR = "data-server-rendered";

		var ASSET_TYPES = ["component", "directive", "filter"];

		var LIFECYCLE_HOOKS = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"];

		/*  */

		var config = {
			/**
			 * Option merge strategies (used in core/util/options)
			 */
			// $flow-disable-line
			optionMergeStrategies: Object.create(null),

			/**
			 * Whether to suppress warnings.
			 */
			silent: false,

			/**
			 * Show production mode tip message on boot?
			 */
			productionTip: "production" !== "production",

			/**
			 * Whether to enable devtools
			 */
			devtools: "production" !== "production",

			/**
			 * Whether to record perf
			 */
			performance: false,

			/**
			 * Error handler for watcher errors
			 */
			errorHandler: null,

			/**
			 * Warn handler for watcher warns
			 */
			warnHandler: null,

			/**
			 * Ignore certain custom elements
			 */
			ignoredElements: [],

			/**
			 * Custom user key aliases for v-on
			 */
			// $flow-disable-line
			keyCodes: Object.create(null),

			/**
			 * Check if a tag is reserved so that it cannot be registered as a
			 * component. This is platform-dependent and may be overwritten.
			 */
			isReservedTag: no,

			/**
			 * Check if an attribute is reserved so that it cannot be used as a component
			 * prop. This is platform-dependent and may be overwritten.
			 */
			isReservedAttr: no,

			/**
			 * Check if a tag is an unknown element.
			 * Platform-dependent.
			 */
			isUnknownElement: no,

			/**
			 * Get the namespace of an element
			 */
			getTagNamespace: noop,

			/**
			 * Parse the real tag name for the specific platform.
			 */
			parsePlatformTagName: identity,

			/**
			 * Check if an attribute must be bound using property, e.g. value
			 * Platform-dependent.
			 */
			mustUseProp: no,

			/**
			 * Perform updates asynchronously. Intended to be used by Vue Test Utils
			 * This will significantly reduce performance if set to false.
			 */
			async: true,

			/**
			 * Exposed for legacy reasons
			 */
			_lifecycleHooks: LIFECYCLE_HOOKS,
		};

		/*  */

		/**
		 * unicode letters used for parsing html tags, component names and property paths.
		 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
		 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
		 */
		var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

		/**
		 * Check if a string starts with $ or _
		 */
		function isReserved(str) {
			var c = (str + "").charCodeAt(0);
			return c === 0x24 || c === 0x5f;
		}

		/**
		 * Define a property.
		 */
		function def(obj, key, val, enumerable) {
			Object.defineProperty(obj, key, {
				value: val,
				enumerable: !!enumerable,
				writable: true,
				configurable: true,
			});
		}

		/**
		 * Parse simple path.
		 */
		var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
		function parsePath(path) {
			if (bailRE.test(path)) {
				return;
			}
			var segments = path.split(".");
			return function (obj) {
				for (var i = 0; i < segments.length; i++) {
					if (!obj) {
						return;
					}
					obj = obj[segments[i]];
				}
				return obj;
			};
		}

		/*  */

		// can we use __proto__?
		var hasProto = "__proto__" in {};

		// Browser environment sniffing
		var inBrowser = typeof window !== "undefined";
		var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
		var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
		var UA = inBrowser && window.navigator.userAgent.toLowerCase();
		var isIE = UA && /msie|trident/.test(UA);
		var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
		var isEdge = UA && UA.indexOf("edge/") > 0;
		var isAndroid = (UA && UA.indexOf("android") > 0) || weexPlatform === "android";
		var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === "ios";
		var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
		var isPhantomJS = UA && /phantomjs/.test(UA);
		var isFF = UA && UA.match(/firefox\/(\d+)/);

		// Firefox has a "watch" function on Object.prototype...
		var nativeWatch = {}.watch;

		var supportsPassive = false;
		if (inBrowser) {
			try {
				var opts = {};
				Object.defineProperty(opts, "passive", {
					get: function get() {
						/* istanbul ignore next */
						supportsPassive = true;
					},
				}); // https://github.com/facebook/flow/issues/285
				window.addEventListener("test-passive", null, opts);
			} catch (e) {}
		}

		// this needs to be lazy-evaled because vue may be required before
		// vue-server-renderer can set VUE_ENV
		var _isServer;
		var isServerRendering = function () {
			if (_isServer === undefined) {
				/* istanbul ignore if */
				if (!inBrowser && !inWeex && typeof __webpack_require__.g !== "undefined") {
					// detect presence of vue-server-renderer and avoid
					// Webpack shimming the process
					_isServer = __webpack_require__.g["process"] && __webpack_require__.g["process"].env.VUE_ENV === "server";
				} else {
					_isServer = false;
				}
			}
			return _isServer;
		};

		// detect devtools
		var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

		/* istanbul ignore next */
		function isNative(Ctor) {
			return typeof Ctor === "function" && /native code/.test(Ctor.toString());
		}

		var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);

		var _Set;
		/* istanbul ignore if */ // $flow-disable-line
		if (typeof Set !== "undefined" && isNative(Set)) {
			// use native Set when available.
			_Set = Set;
		} else {
			// a non-standard Set polyfill that only works with primitive keys.
			_Set = /*@__PURE__*/ (function () {
				function Set() {
					this.set = Object.create(null);
				}
				Set.prototype.has = function has(key) {
					return this.set[key] === true;
				};
				Set.prototype.add = function add(key) {
					this.set[key] = true;
				};
				Set.prototype.clear = function clear() {
					this.set = Object.create(null);
				};

				return Set;
			})();
		}

		/*  */

		var warn = noop;
		var tip = /* unused pure expression or super */ null && noop;
		var generateComponentTrace = /* unused pure expression or super */ null && noop; // work around flow check
		var formatComponentName = /* unused pure expression or super */ null && noop;

		if (false) {
			var repeat, classify, classifyRE, hasConsole;
		}

		/*  */

		var uid = 0;

		/**
		 * A dep is an observable that can have multiple
		 * directives subscribing to it.
		 */
		var Dep = function Dep() {
			this.id = uid++;
			this.subs = [];
		};

		Dep.prototype.addSub = function addSub(sub) {
			this.subs.push(sub);
		};

		Dep.prototype.removeSub = function removeSub(sub) {
			remove(this.subs, sub);
		};

		Dep.prototype.depend = function depend() {
			if (Dep.target) {
				Dep.target.addDep(this);
			}
		};

		Dep.prototype.notify = function notify() {
			// stabilize the subscriber list first
			var subs = this.subs.slice();
			if (false) {
			}
			for (var i = 0, l = subs.length; i < l; i++) {
				subs[i].update();
			}
		};

		// The current target watcher being evaluated.
		// This is globally unique because only one watcher
		// can be evaluated at a time.
		Dep.target = null;
		var targetStack = [];

		function pushTarget(target) {
			targetStack.push(target);
			Dep.target = target;
		}

		function popTarget() {
			targetStack.pop();
			Dep.target = targetStack[targetStack.length - 1];
		}

		/*  */

		var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
			this.tag = tag;
			this.data = data;
			this.children = children;
			this.text = text;
			this.elm = elm;
			this.ns = undefined;
			this.context = context;
			this.fnContext = undefined;
			this.fnOptions = undefined;
			this.fnScopeId = undefined;
			this.key = data && data.key;
			this.componentOptions = componentOptions;
			this.componentInstance = undefined;
			this.parent = undefined;
			this.raw = false;
			this.isStatic = false;
			this.isRootInsert = true;
			this.isComment = false;
			this.isCloned = false;
			this.isOnce = false;
			this.asyncFactory = asyncFactory;
			this.asyncMeta = undefined;
			this.isAsyncPlaceholder = false;
		};

		var prototypeAccessors = { child: { configurable: true } };

		// DEPRECATED: alias for componentInstance for backwards compat.
		/* istanbul ignore next */
		prototypeAccessors.child.get = function () {
			return this.componentInstance;
		};

		Object.defineProperties(VNode.prototype, prototypeAccessors);

		var createEmptyVNode = function (text) {
			if (text === void 0) text = "";

			var node = new VNode();
			node.text = text;
			node.isComment = true;
			return node;
		};

		function createTextVNode(val) {
			return new VNode(undefined, undefined, undefined, String(val));
		}

		// optimized shallow clone
		// used for static nodes and slot nodes because they may be reused across
		// multiple renders, cloning them avoids errors when DOM manipulations rely
		// on their elm reference.
		function cloneVNode(vnode) {
			var cloned = new VNode(
				vnode.tag,
				vnode.data,
				// #7975
				// clone children array to avoid mutating original in case of cloning
				// a child.
				vnode.children && vnode.children.slice(),
				vnode.text,
				vnode.elm,
				vnode.context,
				vnode.componentOptions,
				vnode.asyncFactory
			);
			cloned.ns = vnode.ns;
			cloned.isStatic = vnode.isStatic;
			cloned.key = vnode.key;
			cloned.isComment = vnode.isComment;
			cloned.fnContext = vnode.fnContext;
			cloned.fnOptions = vnode.fnOptions;
			cloned.fnScopeId = vnode.fnScopeId;
			cloned.asyncMeta = vnode.asyncMeta;
			cloned.isCloned = true;
			return cloned;
		}

		/*
		 * not type checking this file because flow doesn't play well with
		 * dynamically accessing methods on Array prototype
		 */

		var arrayProto = Array.prototype;
		var arrayMethods = Object.create(arrayProto);

		var methodsToPatch = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];

		/**
		 * Intercept mutating methods and emit events
		 */
		methodsToPatch.forEach(function (method) {
			// cache original method
			var original = arrayProto[method];
			def(arrayMethods, method, function mutator() {
				var args = [],
					len = arguments.length;
				while (len--) args[len] = arguments[len];

				var result = original.apply(this, args);
				var ob = this.__ob__;
				var inserted;
				switch (method) {
					case "push":
					case "unshift":
						inserted = args;
						break;
					case "splice":
						inserted = args.slice(2);
						break;
				}
				if (inserted) {
					ob.observeArray(inserted);
				}
				// notify change
				ob.dep.notify();
				return result;
			});
		});

		/*  */

		var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

		/**
		 * In some cases we may want to disable observation inside a component's
		 * update computation.
		 */
		var shouldObserve = true;

		function toggleObserving(value) {
			shouldObserve = value;
		}

		/**
		 * Observer class that is attached to each observed
		 * object. Once attached, the observer converts the target
		 * object's property keys into getter/setters that
		 * collect dependencies and dispatch updates.
		 */
		var Observer = function Observer(value) {
			this.value = value;
			this.dep = new Dep();
			this.vmCount = 0;
			def(value, "__ob__", this);
			if (Array.isArray(value)) {
				if (hasProto) {
					protoAugment(value, arrayMethods);
				} else {
					copyAugment(value, arrayMethods, arrayKeys);
				}
				this.observeArray(value);
			} else {
				this.walk(value);
			}
		};

		/**
		 * Walk through all properties and convert them into
		 * getter/setters. This method should only be called when
		 * value type is Object.
		 */
		Observer.prototype.walk = function walk(obj) {
			var keys = Object.keys(obj);
			for (var i = 0; i < keys.length; i++) {
				defineReactive$$1(obj, keys[i]);
			}
		};

		/**
		 * Observe a list of Array items.
		 */
		Observer.prototype.observeArray = function observeArray(items) {
			for (var i = 0, l = items.length; i < l; i++) {
				observe(items[i]);
			}
		};

		// helpers

		/**
		 * Augment a target Object or Array by intercepting
		 * the prototype chain using __proto__
		 */
		function protoAugment(target, src) {
			/* eslint-disable no-proto */
			target.__proto__ = src;
			/* eslint-enable no-proto */
		}

		/**
		 * Augment a target Object or Array by defining
		 * hidden properties.
		 */
		/* istanbul ignore next */
		function copyAugment(target, src, keys) {
			for (var i = 0, l = keys.length; i < l; i++) {
				var key = keys[i];
				def(target, key, src[key]);
			}
		}

		/**
		 * Attempt to create an observer instance for a value,
		 * returns the new observer if successfully observed,
		 * or the existing observer if the value already has one.
		 */
		function observe(value, asRootData) {
			if (!isObject(value) || value instanceof VNode) {
				return;
			}
			var ob;
			if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
				ob = value.__ob__;
			} else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
				ob = new Observer(value);
			}
			if (asRootData && ob) {
				ob.vmCount++;
			}
			return ob;
		}

		/**
		 * Define a reactive property on an Object.
		 */
		function defineReactive$$1(obj, key, val, customSetter, shallow) {
			var dep = new Dep();

			var property = Object.getOwnPropertyDescriptor(obj, key);
			if (property && property.configurable === false) {
				return;
			}

			// cater for pre-defined getter/setters
			var getter = property && property.get;
			var setter = property && property.set;
			if ((!getter || setter) && arguments.length === 2) {
				val = obj[key];
			}

			var childOb = !shallow && observe(val);
			Object.defineProperty(obj, key, {
				enumerable: true,
				configurable: true,
				get: function reactiveGetter() {
					var value = getter ? getter.call(obj) : val;
					if (Dep.target) {
						dep.depend();
						if (childOb) {
							childOb.dep.depend();
							if (Array.isArray(value)) {
								dependArray(value);
							}
						}
					}
					return value;
				},
				set: function reactiveSetter(newVal) {
					var value = getter ? getter.call(obj) : val;
					/* eslint-disable no-self-compare */
					if (newVal === value || (newVal !== newVal && value !== value)) {
						return;
					}
					/* eslint-enable no-self-compare */
					if (false) {
					}
					// #7981: for accessor properties without setter
					if (getter && !setter) {
						return;
					}
					if (setter) {
						setter.call(obj, newVal);
					} else {
						val = newVal;
					}
					childOb = !shallow && observe(newVal);
					dep.notify();
				},
			});
		}

		/**
		 * Set a property on an object. Adds the new property and
		 * triggers change notification if the property doesn't
		 * already exist.
		 */
		function set(target, key, val) {
			if (false) {
			}
			if (Array.isArray(target) && isValidArrayIndex(key)) {
				target.length = Math.max(target.length, key);
				target.splice(key, 1, val);
				return val;
			}
			if (key in target && !(key in Object.prototype)) {
				target[key] = val;
				return val;
			}
			var ob = target.__ob__;
			if (target._isVue || (ob && ob.vmCount)) {
				false && 0;
				return val;
			}
			if (!ob) {
				target[key] = val;
				return val;
			}
			defineReactive$$1(ob.value, key, val);
			ob.dep.notify();
			return val;
		}

		/**
		 * Delete a property and trigger change if necessary.
		 */
		function del(target, key) {
			if (false) {
			}
			if (Array.isArray(target) && isValidArrayIndex(key)) {
				target.splice(key, 1);
				return;
			}
			var ob = target.__ob__;
			if (target._isVue || (ob && ob.vmCount)) {
				false && 0;
				return;
			}
			if (!hasOwn(target, key)) {
				return;
			}
			delete target[key];
			if (!ob) {
				return;
			}
			ob.dep.notify();
		}

		/**
		 * Collect dependencies on array elements when the array is touched, since
		 * we cannot intercept array element access like property getters.
		 */
		function dependArray(value) {
			for (var e = void 0, i = 0, l = value.length; i < l; i++) {
				e = value[i];
				e && e.__ob__ && e.__ob__.dep.depend();
				if (Array.isArray(e)) {
					dependArray(e);
				}
			}
		}

		/*  */

		/**
		 * Option overwriting strategies are functions that handle
		 * how to merge a parent option value and a child option
		 * value into the final value.
		 */
		var strats = config.optionMergeStrategies;

		/**
		 * Options with restrictions
		 */
		if (false) {
		}

		/**
		 * Helper that recursively merges two data objects together.
		 */
		function mergeData(to, from) {
			if (!from) {
				return to;
			}
			var key, toVal, fromVal;

			var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

			for (var i = 0; i < keys.length; i++) {
				key = keys[i];
				// in case the object is already observed...
				if (key === "__ob__") {
					continue;
				}
				toVal = to[key];
				fromVal = from[key];
				if (!hasOwn(to, key)) {
					set(to, key, fromVal);
				} else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
					mergeData(toVal, fromVal);
				}
			}
			return to;
		}

		/**
		 * Data
		 */
		function mergeDataOrFn(parentVal, childVal, vm) {
			if (!vm) {
				// in a Vue.extend merge, both should be functions
				if (!childVal) {
					return parentVal;
				}
				if (!parentVal) {
					return childVal;
				}
				// when parentVal & childVal are both present,
				// we need to return a function that returns the
				// merged result of both functions... no need to
				// check if parentVal is a function here because
				// it has to be a function to pass previous merges.
				return function mergedDataFn() {
					return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
				};
			} else {
				return function mergedInstanceDataFn() {
					// instance merge
					var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
					var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
					if (instanceData) {
						return mergeData(instanceData, defaultData);
					} else {
						return defaultData;
					}
				};
			}
		}

		strats.data = function (parentVal, childVal, vm) {
			if (!vm) {
				if (childVal && typeof childVal !== "function") {
					false && 0;

					return parentVal;
				}
				return mergeDataOrFn(parentVal, childVal);
			}

			return mergeDataOrFn(parentVal, childVal, vm);
		};

		/**
		 * Hooks and props are merged as arrays.
		 */
		function mergeHook(parentVal, childVal) {
			var res = childVal ? (parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal]) : parentVal;
			return res ? dedupeHooks(res) : res;
		}

		function dedupeHooks(hooks) {
			var res = [];
			for (var i = 0; i < hooks.length; i++) {
				if (res.indexOf(hooks[i]) === -1) {
					res.push(hooks[i]);
				}
			}
			return res;
		}

		LIFECYCLE_HOOKS.forEach(function (hook) {
			strats[hook] = mergeHook;
		});

		/**
		 * Assets
		 *
		 * When a vm is present (instance creation), we need to do
		 * a three-way merge between constructor options, instance
		 * options and parent options.
		 */
		function mergeAssets(parentVal, childVal, vm, key) {
			var res = Object.create(parentVal || null);
			if (childVal) {
				false && 0;
				return extend(res, childVal);
			} else {
				return res;
			}
		}

		ASSET_TYPES.forEach(function (type) {
			strats[type + "s"] = mergeAssets;
		});

		/**
		 * Watchers.
		 *
		 * Watchers hashes should not overwrite one
		 * another, so we merge them as arrays.
		 */
		strats.watch = function (parentVal, childVal, vm, key) {
			// work around Firefox's Object.prototype.watch...
			if (parentVal === nativeWatch) {
				parentVal = undefined;
			}
			if (childVal === nativeWatch) {
				childVal = undefined;
			}
			/* istanbul ignore if */
			if (!childVal) {
				return Object.create(parentVal || null);
			}
			if (false) {
			}
			if (!parentVal) {
				return childVal;
			}
			var ret = {};
			extend(ret, parentVal);
			for (var key$1 in childVal) {
				var parent = ret[key$1];
				var child = childVal[key$1];
				if (parent && !Array.isArray(parent)) {
					parent = [parent];
				}
				ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
			}
			return ret;
		};

		/**
		 * Other object hashes.
		 */
		strats.props =
			strats.methods =
			strats.inject =
			strats.computed =
				function (parentVal, childVal, vm, key) {
					if (childVal && "production" !== "production") {
					}
					if (!parentVal) {
						return childVal;
					}
					var ret = Object.create(null);
					extend(ret, parentVal);
					if (childVal) {
						extend(ret, childVal);
					}
					return ret;
				};
		strats.provide = mergeDataOrFn;

		/**
		 * Default strategy.
		 */
		var defaultStrat = function (parentVal, childVal) {
			return childVal === undefined ? parentVal : childVal;
		};

		/**
		 * Validate component names
		 */
		function checkComponents(options) {
			for (var key in options.components) {
				validateComponentName(key);
			}
		}

		function validateComponentName(name) {
			if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
				warn('Invalid component name: "' + name + '". Component names ' + "should conform to valid custom element name in html5 specification.");
			}
			if (isBuiltInTag(name) || config.isReservedTag(name)) {
				warn("Do not use built-in or reserved HTML elements as component " + "id: " + name);
			}
		}

		/**
		 * Ensure all props option syntax are normalized into the
		 * Object-based format.
		 */
		function normalizeProps(options, vm) {
			var props = options.props;
			if (!props) {
				return;
			}
			var res = {};
			var i, val, name;
			if (Array.isArray(props)) {
				i = props.length;
				while (i--) {
					val = props[i];
					if (typeof val === "string") {
						name = camelize(val);
						res[name] = { type: null };
					} else if (false) {
					}
				}
			} else if (isPlainObject(props)) {
				for (var key in props) {
					val = props[key];
					name = camelize(key);
					res[name] = isPlainObject(val) ? val : { type: val };
				}
			} else if (false) {
			}
			options.props = res;
		}

		/**
		 * Normalize all injections into Object-based format
		 */
		function normalizeInject(options, vm) {
			var inject = options.inject;
			if (!inject) {
				return;
			}
			var normalized = (options.inject = {});
			if (Array.isArray(inject)) {
				for (var i = 0; i < inject.length; i++) {
					normalized[inject[i]] = { from: inject[i] };
				}
			} else if (isPlainObject(inject)) {
				for (var key in inject) {
					var val = inject[key];
					normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
				}
			} else if (false) {
			}
		}

		/**
		 * Normalize raw function directives into object format.
		 */
		function normalizeDirectives(options) {
			var dirs = options.directives;
			if (dirs) {
				for (var key in dirs) {
					var def$$1 = dirs[key];
					if (typeof def$$1 === "function") {
						dirs[key] = { bind: def$$1, update: def$$1 };
					}
				}
			}
		}

		function assertObjectType(name, value, vm) {
			if (!isPlainObject(value)) {
				warn('Invalid value for option "' + name + '": expected an Object, ' + "but got " + toRawType(value) + ".", vm);
			}
		}

		/**
		 * Merge two option objects into a new one.
		 * Core utility used in both instantiation and inheritance.
		 */
		function mergeOptions(parent, child, vm) {
			if (false) {
			}

			if (typeof child === "function") {
				child = child.options;
			}

			normalizeProps(child, vm);
			normalizeInject(child, vm);
			normalizeDirectives(child);

			// Apply extends and mixins on the child options,
			// but only if it is a raw options object that isn't
			// the result of another mergeOptions call.
			// Only merged options has the _base property.
			if (!child._base) {
				if (child.extends) {
					parent = mergeOptions(parent, child.extends, vm);
				}
				if (child.mixins) {
					for (var i = 0, l = child.mixins.length; i < l; i++) {
						parent = mergeOptions(parent, child.mixins[i], vm);
					}
				}
			}

			var options = {};
			var key;
			for (key in parent) {
				mergeField(key);
			}
			for (key in child) {
				if (!hasOwn(parent, key)) {
					mergeField(key);
				}
			}
			function mergeField(key) {
				var strat = strats[key] || defaultStrat;
				options[key] = strat(parent[key], child[key], vm, key);
			}
			return options;
		}

		/**
		 * Resolve an asset.
		 * This function is used because child instances need access
		 * to assets defined in its ancestor chain.
		 */
		function resolveAsset(options, type, id, warnMissing) {
			/* istanbul ignore if */
			if (typeof id !== "string") {
				return;
			}
			var assets = options[type];
			// check local registration variations first
			if (hasOwn(assets, id)) {
				return assets[id];
			}
			var camelizedId = camelize(id);
			if (hasOwn(assets, camelizedId)) {
				return assets[camelizedId];
			}
			var PascalCaseId = capitalize(camelizedId);
			if (hasOwn(assets, PascalCaseId)) {
				return assets[PascalCaseId];
			}
			// fallback to prototype chain
			var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
			if (false) {
			}
			return res;
		}

		/*  */

		function validateProp(key, propOptions, propsData, vm) {
			var prop = propOptions[key];
			var absent = !hasOwn(propsData, key);
			var value = propsData[key];
			// boolean casting
			var booleanIndex = getTypeIndex(Boolean, prop.type);
			if (booleanIndex > -1) {
				if (absent && !hasOwn(prop, "default")) {
					value = false;
				} else if (value === "" || value === hyphenate(key)) {
					// only cast empty string / same name to boolean if
					// boolean has higher priority
					var stringIndex = getTypeIndex(String, prop.type);
					if (stringIndex < 0 || booleanIndex < stringIndex) {
						value = true;
					}
				}
			}
			// check default value
			if (value === undefined) {
				value = getPropDefaultValue(vm, prop, key);
				// since the default value is a fresh copy,
				// make sure to observe it.
				var prevShouldObserve = shouldObserve;
				toggleObserving(true);
				observe(value);
				toggleObserving(prevShouldObserve);
			}
			if (false) {
			}
			return value;
		}

		/**
		 * Get the default value of a prop.
		 */
		function getPropDefaultValue(vm, prop, key) {
			// no default, return undefined
			if (!hasOwn(prop, "default")) {
				return undefined;
			}
			var def = prop.default;
			// warn against non-factory defaults for Object & Array
			if (false) {
			}
			// the raw prop value was also undefined from previous render,
			// return previous default value to avoid unnecessary watcher trigger
			if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
				return vm._props[key];
			}
			// call factory function for non-Function types
			// a value is Function if its prototype is function even across different execution context
			return typeof def === "function" && getType(prop.type) !== "Function" ? def.call(vm) : def;
		}

		/**
		 * Assert whether a prop is valid.
		 */
		function assertProp(prop, name, value, vm, absent) {
			if (prop.required && absent) {
				warn('Missing required prop: "' + name + '"', vm);
				return;
			}
			if (value == null && !prop.required) {
				return;
			}
			var type = prop.type;
			var valid = !type || type === true;
			var expectedTypes = [];
			if (type) {
				if (!Array.isArray(type)) {
					type = [type];
				}
				for (var i = 0; i < type.length && !valid; i++) {
					var assertedType = assertType(value, type[i], vm);
					expectedTypes.push(assertedType.expectedType || "");
					valid = assertedType.valid;
				}
			}

			var haveExpectedTypes = expectedTypes.some(function (t) {
				return t;
			});
			if (!valid && haveExpectedTypes) {
				warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
				return;
			}
			var validator = prop.validator;
			if (validator) {
				if (!validator(value)) {
					warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
				}
			}
		}

		var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

		function assertType(value, type, vm) {
			var valid;
			var expectedType = getType(type);
			if (simpleCheckRE.test(expectedType)) {
				var t = typeof value;
				valid = t === expectedType.toLowerCase();
				// for primitive wrapper objects
				if (!valid && t === "object") {
					valid = value instanceof type;
				}
			} else if (expectedType === "Object") {
				valid = isPlainObject(value);
			} else if (expectedType === "Array") {
				valid = Array.isArray(value);
			} else {
				try {
					valid = value instanceof type;
				} catch (e) {
					warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
					valid = false;
				}
			}
			return {
				valid: valid,
				expectedType: expectedType,
			};
		}

		var functionTypeCheckRE = /^\s*function (\w+)/;

		/**
		 * Use function string name to check built-in types,
		 * because a simple equality check will fail when running
		 * across different vms / iframes.
		 */
		function getType(fn) {
			var match = fn && fn.toString().match(functionTypeCheckRE);
			return match ? match[1] : "";
		}

		function isSameType(a, b) {
			return getType(a) === getType(b);
		}

		function getTypeIndex(type, expectedTypes) {
			if (!Array.isArray(expectedTypes)) {
				return isSameType(expectedTypes, type) ? 0 : -1;
			}
			for (var i = 0, len = expectedTypes.length; i < len; i++) {
				if (isSameType(expectedTypes[i], type)) {
					return i;
				}
			}
			return -1;
		}

		function getInvalidTypeMessage(name, value, expectedTypes) {
			var message = 'Invalid prop: type check failed for prop "' + name + '".' + " Expected " + expectedTypes.map(capitalize).join(", ");
			var expectedType = expectedTypes[0];
			var receivedType = toRawType(value);
			// check if we need to specify expected value
			if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(typeof value) && !isBoolean(expectedType, receivedType)) {
				message += " with value " + styleValue(value, expectedType);
			}
			message += ", got " + receivedType + " ";
			// check if we need to specify received value
			if (isExplicable(receivedType)) {
				message += "with value " + styleValue(value, receivedType) + ".";
			}
			return message;
		}

		function styleValue(value, type) {
			if (type === "String") {
				return '"' + value + '"';
			} else if (type === "Number") {
				return "" + Number(value);
			} else {
				return "" + value;
			}
		}

		var EXPLICABLE_TYPES = /* unused pure expression or super */ null && ["string", "number", "boolean"];
		function isExplicable(value) {
			return EXPLICABLE_TYPES.some(function (elem) {
				return value.toLowerCase() === elem;
			});
		}

		function isBoolean() {
			var args = [],
				len = arguments.length;
			while (len--) args[len] = arguments[len];

			return args.some(function (elem) {
				return elem.toLowerCase() === "boolean";
			});
		}

		/*  */

		function handleError(err, vm, info) {
			// Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
			// See: https://github.com/vuejs/vuex/issues/1505
			pushTarget();
			try {
				if (vm) {
					var cur = vm;
					while ((cur = cur.$parent)) {
						var hooks = cur.$options.errorCaptured;
						if (hooks) {
							for (var i = 0; i < hooks.length; i++) {
								try {
									var capture = hooks[i].call(cur, err, vm, info) === false;
									if (capture) {
										return;
									}
								} catch (e) {
									globalHandleError(e, cur, "errorCaptured hook");
								}
							}
						}
					}
				}
				globalHandleError(err, vm, info);
			} finally {
				popTarget();
			}
		}

		function invokeWithErrorHandling(handler, context, args, vm, info) {
			var res;
			try {
				res = args ? handler.apply(context, args) : handler.call(context);
				if (res && !res._isVue && isPromise(res) && !res._handled) {
					res.catch(function (e) {
						return handleError(e, vm, info + " (Promise/async)");
					});
					// issue #9511
					// avoid catch triggering multiple times when nested calls
					res._handled = true;
				}
			} catch (e) {
				handleError(e, vm, info);
			}
			return res;
		}

		function globalHandleError(err, vm, info) {
			if (config.errorHandler) {
				try {
					return config.errorHandler.call(null, err, vm, info);
				} catch (e) {
					// if the user intentionally throws the original error in the handler,
					// do not log it twice
					if (e !== err) {
						logError(e, null, "config.errorHandler");
					}
				}
			}
			logError(err, vm, info);
		}

		function logError(err, vm, info) {
			if (false) {
			}
			/* istanbul ignore else */
			if ((inBrowser || inWeex) && typeof console !== "undefined") {
				console.error(err);
			} else {
				throw err;
			}
		}

		/*  */

		var isUsingMicroTask = false;

		var callbacks = [];
		var pending = false;

		function flushCallbacks() {
			pending = false;
			var copies = callbacks.slice(0);
			callbacks.length = 0;
			for (var i = 0; i < copies.length; i++) {
				copies[i]();
			}
		}

		// Here we have async deferring wrappers using microtasks.
		// In 2.5 we used (macro) tasks (in combination with microtasks).
		// However, it has subtle problems when state is changed right before repaint
		// (e.g. #6813, out-in transitions).
		// Also, using (macro) tasks in event handler would cause some weird behaviors
		// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
		// So we now use microtasks everywhere, again.
		// A major drawback of this tradeoff is that there are some scenarios
		// where microtasks have too high a priority and fire in between supposedly
		// sequential events (e.g. #4521, #6690, which have workarounds)
		// or even between bubbling of the same event (#6566).
		var timerFunc;

		// The nextTick behavior leverages the microtask queue, which can be accessed
		// via either native Promise.then or MutationObserver.
		// MutationObserver has wider support, however it is seriously bugged in
		// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
		// completely stops working after triggering a few times... so, if native
		// Promise is available, we will use it:
		/* istanbul ignore next, $flow-disable-line */
		if (typeof Promise !== "undefined" && isNative(Promise)) {
			var p = Promise.resolve();
			timerFunc = function () {
				p.then(flushCallbacks);
				// In problematic UIWebViews, Promise.then doesn't completely break, but
				// it can get stuck in a weird state where callbacks are pushed into the
				// microtask queue but the queue isn't being flushed, until the browser
				// needs to do some other work, e.g. handle a timer. Therefore we can
				// "force" the microtask queue to be flushed by adding an empty timer.
				if (isIOS) {
					setTimeout(noop);
				}
			};
			isUsingMicroTask = true;
		} else if (
			!isIE &&
			typeof MutationObserver !== "undefined" &&
			(isNative(MutationObserver) ||
				// PhantomJS and iOS 7.x
				MutationObserver.toString() === "[object MutationObserverConstructor]")
		) {
			// Use MutationObserver where native Promise is not available,
			// e.g. PhantomJS, iOS7, Android 4.4
			// (#6466 MutationObserver is unreliable in IE11)
			var counter = 1;
			var observer = new MutationObserver(flushCallbacks);
			var textNode = document.createTextNode(String(counter));
			observer.observe(textNode, {
				characterData: true,
			});
			timerFunc = function () {
				counter = (counter + 1) % 2;
				textNode.data = String(counter);
			};
			isUsingMicroTask = true;
		} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
			// Fallback to setImmediate.
			// Technically it leverages the (macro) task queue,
			// but it is still a better choice than setTimeout.
			timerFunc = function () {
				setImmediate(flushCallbacks);
			};
		} else {
			// Fallback to setTimeout.
			timerFunc = function () {
				setTimeout(flushCallbacks, 0);
			};
		}

		function nextTick(cb, ctx) {
			var _resolve;
			callbacks.push(function () {
				if (cb) {
					try {
						cb.call(ctx);
					} catch (e) {
						handleError(e, ctx, "nextTick");
					}
				} else if (_resolve) {
					_resolve(ctx);
				}
			});
			if (!pending) {
				pending = true;
				timerFunc();
			}
			// $flow-disable-line
			if (!cb && typeof Promise !== "undefined") {
				return new Promise(function (resolve) {
					_resolve = resolve;
				});
			}
		}

		/*  */

		/* not type checking this file because flow doesn't play well with Proxy */

		var initProxy;

		if (false) {
			var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals;
		}

		/*  */

		var seenObjects = new _Set();

		/**
		 * Recursively traverse an object to evoke all converted
		 * getters, so that every nested property inside the object
		 * is collected as a "deep" dependency.
		 */
		function traverse(val) {
			_traverse(val, seenObjects);
			seenObjects.clear();
		}

		function _traverse(val, seen) {
			var i, keys;
			var isA = Array.isArray(val);
			if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
				return;
			}
			if (val.__ob__) {
				var depId = val.__ob__.dep.id;
				if (seen.has(depId)) {
					return;
				}
				seen.add(depId);
			}
			if (isA) {
				i = val.length;
				while (i--) {
					_traverse(val[i], seen);
				}
			} else {
				keys = Object.keys(val);
				i = keys.length;
				while (i--) {
					_traverse(val[keys[i]], seen);
				}
			}
		}

		var mark;
		var measure;

		if (false) {
			var perf;
		}

		/*  */

		var normalizeEvent = cached(function (name) {
			var passive = name.charAt(0) === "&";
			name = passive ? name.slice(1) : name;
			var once$$1 = name.charAt(0) === "~"; // Prefixed last, checked first
			name = once$$1 ? name.slice(1) : name;
			var capture = name.charAt(0) === "!";
			name = capture ? name.slice(1) : name;
			return {
				name: name,
				once: once$$1,
				capture: capture,
				passive: passive,
			};
		});

		function createFnInvoker(fns, vm) {
			function invoker() {
				var arguments$1 = arguments;

				var fns = invoker.fns;
				if (Array.isArray(fns)) {
					var cloned = fns.slice();
					for (var i = 0; i < cloned.length; i++) {
						invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
					}
				} else {
					// return handler return value for single handlers
					return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
				}
			}
			invoker.fns = fns;
			return invoker;
		}

		function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
			var name, def$$1, cur, old, event;
			for (name in on) {
				def$$1 = cur = on[name];
				old = oldOn[name];
				event = normalizeEvent(name);
				if (isUndef(cur)) {
					false && 0;
				} else if (isUndef(old)) {
					if (isUndef(cur.fns)) {
						cur = on[name] = createFnInvoker(cur, vm);
					}
					if (isTrue(event.once)) {
						cur = on[name] = createOnceHandler(event.name, cur, event.capture);
					}
					add(event.name, cur, event.capture, event.passive, event.params);
				} else if (cur !== old) {
					old.fns = cur;
					on[name] = old;
				}
			}
			for (name in oldOn) {
				if (isUndef(on[name])) {
					event = normalizeEvent(name);
					remove$$1(event.name, oldOn[name], event.capture);
				}
			}
		}

		/*  */

		function mergeVNodeHook(def, hookKey, hook) {
			if (def instanceof VNode) {
				def = def.data.hook || (def.data.hook = {});
			}
			var invoker;
			var oldHook = def[hookKey];

			function wrappedHook() {
				hook.apply(this, arguments);
				// important: remove merged hook to ensure it's called only once
				// and prevent memory leak
				remove(invoker.fns, wrappedHook);
			}

			if (isUndef(oldHook)) {
				// no existing hook
				invoker = createFnInvoker([wrappedHook]);
			} else {
				/* istanbul ignore if */
				if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
					// already a merged invoker
					invoker = oldHook;
					invoker.fns.push(wrappedHook);
				} else {
					// existing plain hook
					invoker = createFnInvoker([oldHook, wrappedHook]);
				}
			}

			invoker.merged = true;
			def[hookKey] = invoker;
		}

		/*  */

		function extractPropsFromVNodeData(data, Ctor, tag) {
			// we are only extracting raw values here.
			// validation and default values are handled in the child
			// component itself.
			var propOptions = Ctor.options.props;
			if (isUndef(propOptions)) {
				return;
			}
			var res = {};
			var attrs = data.attrs;
			var props = data.props;
			if (isDef(attrs) || isDef(props)) {
				for (var key in propOptions) {
					var altKey = hyphenate(key);
					if (false) {
						var keyInLowerCase;
					}
					checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
				}
			}
			return res;
		}

		function checkProp(res, hash, key, altKey, preserve) {
			if (isDef(hash)) {
				if (hasOwn(hash, key)) {
					res[key] = hash[key];
					if (!preserve) {
						delete hash[key];
					}
					return true;
				} else if (hasOwn(hash, altKey)) {
					res[key] = hash[altKey];
					if (!preserve) {
						delete hash[altKey];
					}
					return true;
				}
			}
			return false;
		}

		/*  */

		// The template compiler attempts to minimize the need for normalization by
		// statically analyzing the template at compile time.
		//
		// For plain HTML markup, normalization can be completely skipped because the
		// generated render function is guaranteed to return Array<VNode>. There are
		// two cases where extra normalization is needed:

		// 1. When the children contains components - because a functional component
		// may return an Array instead of a single root. In this case, just a simple
		// normalization is needed - if any child is an Array, we flatten the whole
		// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
		// because functional components already normalize their own children.
		function simpleNormalizeChildren(children) {
			for (var i = 0; i < children.length; i++) {
				if (Array.isArray(children[i])) {
					return Array.prototype.concat.apply([], children);
				}
			}
			return children;
		}

		// 2. When the children contains constructs that always generated nested Arrays,
		// e.g. <template>, <slot>, v-for, or when the children is provided by user
		// with hand-written render functions / JSX. In such cases a full normalization
		// is needed to cater to all possible types of children values.
		function normalizeChildren(children) {
			return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
		}

		function isTextNode(node) {
			return isDef(node) && isDef(node.text) && isFalse(node.isComment);
		}

		function normalizeArrayChildren(children, nestedIndex) {
			var res = [];
			var i, c, lastIndex, last;
			for (i = 0; i < children.length; i++) {
				c = children[i];
				if (isUndef(c) || typeof c === "boolean") {
					continue;
				}
				lastIndex = res.length - 1;
				last = res[lastIndex];
				//  nested
				if (Array.isArray(c)) {
					if (c.length > 0) {
						c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
						// merge adjacent text nodes
						if (isTextNode(c[0]) && isTextNode(last)) {
							res[lastIndex] = createTextVNode(last.text + c[0].text);
							c.shift();
						}
						res.push.apply(res, c);
					}
				} else if (isPrimitive(c)) {
					if (isTextNode(last)) {
						// merge adjacent text nodes
						// this is necessary for SSR hydration because text nodes are
						// essentially merged when rendered to HTML strings
						res[lastIndex] = createTextVNode(last.text + c);
					} else if (c !== "") {
						// convert primitive to vnode
						res.push(createTextVNode(c));
					}
				} else {
					if (isTextNode(c) && isTextNode(last)) {
						// merge adjacent text nodes
						res[lastIndex] = createTextVNode(last.text + c.text);
					} else {
						// default key for nested array children (likely generated by v-for)
						if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
							c.key = "__vlist" + nestedIndex + "_" + i + "__";
						}
						res.push(c);
					}
				}
			}
			return res;
		}

		/*  */

		function initProvide(vm) {
			var provide = vm.$options.provide;
			if (provide) {
				vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
			}
		}

		function initInjections(vm) {
			var result = resolveInject(vm.$options.inject, vm);
			if (result) {
				toggleObserving(false);
				Object.keys(result).forEach(function (key) {
					/* istanbul ignore else */
					if (false) {
					} else {
						defineReactive$$1(vm, key, result[key]);
					}
				});
				toggleObserving(true);
			}
		}

		function resolveInject(inject, vm) {
			if (inject) {
				// inject is :any because flow is not smart enough to figure out cached
				var result = Object.create(null);
				var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

				for (var i = 0; i < keys.length; i++) {
					var key = keys[i];
					// #6574 in case the inject object is observed...
					if (key === "__ob__") {
						continue;
					}
					var provideKey = inject[key].from;
					var source = vm;
					while (source) {
						if (source._provided && hasOwn(source._provided, provideKey)) {
							result[key] = source._provided[provideKey];
							break;
						}
						source = source.$parent;
					}
					if (!source) {
						if ("default" in inject[key]) {
							var provideDefault = inject[key].default;
							result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
						} else if (false) {
						}
					}
				}
				return result;
			}
		}

		/*  */

		/**
		 * Runtime helper for resolving raw children VNodes into a slot object.
		 */
		function resolveSlots(children, context) {
			if (!children || !children.length) {
				return {};
			}
			var slots = {};
			for (var i = 0, l = children.length; i < l; i++) {
				var child = children[i];
				var data = child.data;
				// remove slot attribute if the node is resolved as a Vue slot node
				if (data && data.attrs && data.attrs.slot) {
					delete data.attrs.slot;
				}
				// named slots should only be respected if the vnode was rendered in the
				// same context.
				if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
					var name = data.slot;
					var slot = slots[name] || (slots[name] = []);
					if (child.tag === "template") {
						slot.push.apply(slot, child.children || []);
					} else {
						slot.push(child);
					}
				} else {
					(slots.default || (slots.default = [])).push(child);
				}
			}
			// ignore slots that contains only whitespace
			for (var name$1 in slots) {
				if (slots[name$1].every(isWhitespace)) {
					delete slots[name$1];
				}
			}
			return slots;
		}

		function isWhitespace(node) {
			return (node.isComment && !node.asyncFactory) || node.text === " ";
		}

		/*  */

		function isAsyncPlaceholder(node) {
			return node.isComment && node.asyncFactory;
		}

		/*  */

		function normalizeScopedSlots(slots, normalSlots, prevSlots) {
			var res;
			var hasNormalSlots = Object.keys(normalSlots).length > 0;
			var isStable = slots ? !!slots.$stable : !hasNormalSlots;
			var key = slots && slots.$key;
			if (!slots) {
				res = {};
			} else if (slots._normalized) {
				// fast path 1: child component re-render only, parent did not change
				return slots._normalized;
			} else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
				// fast path 2: stable scoped slots w/ no normal slots to proxy,
				// only need to normalize once
				return prevSlots;
			} else {
				res = {};
				for (var key$1 in slots) {
					if (slots[key$1] && key$1[0] !== "$") {
						res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
					}
				}
			}
			// expose normal slots on scopedSlots
			for (var key$2 in normalSlots) {
				if (!(key$2 in res)) {
					res[key$2] = proxyNormalSlot(normalSlots, key$2);
				}
			}
			// avoriaz seems to mock a non-extensible $scopedSlots object
			// and when that is passed down this would cause an error
			if (slots && Object.isExtensible(slots)) {
				slots._normalized = res;
			}
			def(res, "$stable", isStable);
			def(res, "$key", key);
			def(res, "$hasNormal", hasNormalSlots);
			return res;
		}

		function normalizeScopedSlot(normalSlots, key, fn) {
			var normalized = function () {
				var res = arguments.length ? fn.apply(null, arguments) : fn({});
				res =
					res && typeof res === "object" && !Array.isArray(res)
						? [res] // single vnode
						: normalizeChildren(res);
				var vnode = res && res[0];
				return res && (!vnode || (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode))) // #9658, #10391
					? undefined
					: res;
			};
			// this is a slot using the new v-slot syntax without scope. although it is
			// compiled as a scoped slot, render fn users would expect it to be present
			// on this.$slots because the usage is semantically a normal slot.
			if (fn.proxy) {
				Object.defineProperty(normalSlots, key, {
					get: normalized,
					enumerable: true,
					configurable: true,
				});
			}
			return normalized;
		}

		function proxyNormalSlot(slots, key) {
			return function () {
				return slots[key];
			};
		}

		/*  */

		/**
		 * Runtime helper for rendering v-for lists.
		 */
		function renderList(val, render) {
			var ret, i, l, keys, key;
			if (Array.isArray(val) || typeof val === "string") {
				ret = new Array(val.length);
				for (i = 0, l = val.length; i < l; i++) {
					ret[i] = render(val[i], i);
				}
			} else if (typeof val === "number") {
				ret = new Array(val);
				for (i = 0; i < val; i++) {
					ret[i] = render(i + 1, i);
				}
			} else if (isObject(val)) {
				if (hasSymbol && val[Symbol.iterator]) {
					ret = [];
					var iterator = val[Symbol.iterator]();
					var result = iterator.next();
					while (!result.done) {
						ret.push(render(result.value, ret.length));
						result = iterator.next();
					}
				} else {
					keys = Object.keys(val);
					ret = new Array(keys.length);
					for (i = 0, l = keys.length; i < l; i++) {
						key = keys[i];
						ret[i] = render(val[key], key, i);
					}
				}
			}
			if (!isDef(ret)) {
				ret = [];
			}
			ret._isVList = true;
			return ret;
		}

		/*  */

		/**
		 * Runtime helper for rendering <slot>
		 */
		function renderSlot(name, fallbackRender, props, bindObject) {
			var scopedSlotFn = this.$scopedSlots[name];
			var nodes;
			if (scopedSlotFn) {
				// scoped slot
				props = props || {};
				if (bindObject) {
					if (false) {
					}
					props = extend(extend({}, bindObject), props);
				}
				nodes = scopedSlotFn(props) || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
			} else {
				nodes = this.$slots[name] || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
			}

			var target = props && props.slot;
			if (target) {
				return this.$createElement("template", { slot: target }, nodes);
			} else {
				return nodes;
			}
		}

		/*  */

		/**
		 * Runtime helper for resolving filters
		 */
		function resolveFilter(id) {
			return resolveAsset(this.$options, "filters", id, true) || identity;
		}

		/*  */

		function isKeyNotMatch(expect, actual) {
			if (Array.isArray(expect)) {
				return expect.indexOf(actual) === -1;
			} else {
				return expect !== actual;
			}
		}

		/**
		 * Runtime helper for checking keyCodes from config.
		 * exposed as Vue.prototype._k
		 * passing in eventKeyName as last argument separately for backwards compat
		 */
		function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
			var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
			if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
				return isKeyNotMatch(builtInKeyName, eventKeyName);
			} else if (mappedKeyCode) {
				return isKeyNotMatch(mappedKeyCode, eventKeyCode);
			} else if (eventKeyName) {
				return hyphenate(eventKeyName) !== key;
			}
			return eventKeyCode === undefined;
		}

		/*  */

		/**
		 * Runtime helper for merging v-bind="object" into a VNode's data.
		 */
		function bindObjectProps(data, tag, value, asProp, isSync) {
			if (value) {
				if (!isObject(value)) {
					false && 0;
				} else {
					if (Array.isArray(value)) {
						value = toObject(value);
					}
					var hash;
					var loop = function (key) {
						if (key === "class" || key === "style" || isReservedAttribute(key)) {
							hash = data;
						} else {
							var type = data.attrs && data.attrs.type;
							hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
						}
						var camelizedKey = camelize(key);
						var hyphenatedKey = hyphenate(key);
						if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
							hash[key] = value[key];

							if (isSync) {
								var on = data.on || (data.on = {});
								on["update:" + key] = function ($event) {
									value[key] = $event;
								};
							}
						}
					};

					for (var key in value) loop(key);
				}
			}
			return data;
		}

		/*  */

		/**
		 * Runtime helper for rendering static trees.
		 */
		function renderStatic(index, isInFor) {
			var cached = this._staticTrees || (this._staticTrees = []);
			var tree = cached[index];
			// if has already-rendered static tree and not inside v-for,
			// we can reuse the same tree.
			if (tree && !isInFor) {
				return tree;
			}
			// otherwise, render a fresh tree.
			tree = cached[index] = this.$options.staticRenderFns[index].call(
				this._renderProxy,
				null,
				this // for render fns generated for functional component templates
			);
			markStatic(tree, "__static__" + index, false);
			return tree;
		}

		/**
		 * Runtime helper for v-once.
		 * Effectively it means marking the node as static with a unique key.
		 */
		function markOnce(tree, index, key) {
			markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
			return tree;
		}

		function markStatic(tree, key, isOnce) {
			if (Array.isArray(tree)) {
				for (var i = 0; i < tree.length; i++) {
					if (tree[i] && typeof tree[i] !== "string") {
						markStaticNode(tree[i], key + "_" + i, isOnce);
					}
				}
			} else {
				markStaticNode(tree, key, isOnce);
			}
		}

		function markStaticNode(node, key, isOnce) {
			node.isStatic = true;
			node.key = key;
			node.isOnce = isOnce;
		}

		/*  */

		function bindObjectListeners(data, value) {
			if (value) {
				if (!isPlainObject(value)) {
					false && 0;
				} else {
					var on = (data.on = data.on ? extend({}, data.on) : {});
					for (var key in value) {
						var existing = on[key];
						var ours = value[key];
						on[key] = existing ? [].concat(existing, ours) : ours;
					}
				}
			}
			return data;
		}

		/*  */

		function resolveScopedSlots(
			fns, // see flow/vnode
			res,
			// the following are added in 2.6
			hasDynamicKeys,
			contentHashKey
		) {
			res = res || { $stable: !hasDynamicKeys };
			for (var i = 0; i < fns.length; i++) {
				var slot = fns[i];
				if (Array.isArray(slot)) {
					resolveScopedSlots(slot, res, hasDynamicKeys);
				} else if (slot) {
					// marker for reverse proxying v-slot without scope on this.$slots
					if (slot.proxy) {
						slot.fn.proxy = true;
					}
					res[slot.key] = slot.fn;
				}
			}
			if (contentHashKey) {
				res.$key = contentHashKey;
			}
			return res;
		}

		/*  */

		function bindDynamicKeys(baseObj, values) {
			for (var i = 0; i < values.length; i += 2) {
				var key = values[i];
				if (typeof key === "string" && key) {
					baseObj[values[i]] = values[i + 1];
				} else if (false) {
				}
			}
			return baseObj;
		}

		// helper to dynamically append modifier runtime markers to event names.
		// ensure only append when value is already string, otherwise it will be cast
		// to string and cause the type check to miss.
		function prependModifier(value, symbol) {
			return typeof value === "string" ? symbol + value : value;
		}

		/*  */

		function installRenderHelpers(target) {
			target._o = markOnce;
			target._n = toNumber;
			target._s = vue_runtime_esm_toString;
			target._l = renderList;
			target._t = renderSlot;
			target._q = looseEqual;
			target._i = looseIndexOf;
			target._m = renderStatic;
			target._f = resolveFilter;
			target._k = checkKeyCodes;
			target._b = bindObjectProps;
			target._v = createTextVNode;
			target._e = createEmptyVNode;
			target._u = resolveScopedSlots;
			target._g = bindObjectListeners;
			target._d = bindDynamicKeys;
			target._p = prependModifier;
		}

		/*  */

		function FunctionalRenderContext(data, props, children, parent, Ctor) {
			var this$1 = this;

			var options = Ctor.options;
			// ensure the createElement function in functional components
			// gets a unique context - this is necessary for correct named slot check
			var contextVm;
			if (hasOwn(parent, "_uid")) {
				contextVm = Object.create(parent);
				// $flow-disable-line
				contextVm._original = parent;
			} else {
				// the context vm passed in is a functional context as well.
				// in this case we want to make sure we are able to get a hold to the
				// real context instance.
				contextVm = parent;
				// $flow-disable-line
				parent = parent._original;
			}
			var isCompiled = isTrue(options._compiled);
			var needNormalization = !isCompiled;

			this.data = data;
			this.props = props;
			this.children = children;
			this.parent = parent;
			this.listeners = data.on || emptyObject;
			this.injections = resolveInject(options.inject, parent);
			this.slots = function () {
				if (!this$1.$slots) {
					normalizeScopedSlots(data.scopedSlots, (this$1.$slots = resolveSlots(children, parent)));
				}
				return this$1.$slots;
			};

			Object.defineProperty(this, "scopedSlots", {
				enumerable: true,
				get: function get() {
					return normalizeScopedSlots(data.scopedSlots, this.slots());
				},
			});

			// support for compiled functional template
			if (isCompiled) {
				// exposing $options for renderStatic()
				this.$options = options;
				// pre-resolve slots for renderSlot()
				this.$slots = this.slots();
				this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
			}

			if (options._scopeId) {
				this._c = function (a, b, c, d) {
					var vnode = createElement(contextVm, a, b, c, d, needNormalization);
					if (vnode && !Array.isArray(vnode)) {
						vnode.fnScopeId = options._scopeId;
						vnode.fnContext = parent;
					}
					return vnode;
				};
			} else {
				this._c = function (a, b, c, d) {
					return createElement(contextVm, a, b, c, d, needNormalization);
				};
			}
		}

		installRenderHelpers(FunctionalRenderContext.prototype);

		function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
			var options = Ctor.options;
			var props = {};
			var propOptions = options.props;
			if (isDef(propOptions)) {
				for (var key in propOptions) {
					props[key] = validateProp(key, propOptions, propsData || emptyObject);
				}
			} else {
				if (isDef(data.attrs)) {
					mergeProps(props, data.attrs);
				}
				if (isDef(data.props)) {
					mergeProps(props, data.props);
				}
			}

			var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

			var vnode = options.render.call(null, renderContext._c, renderContext);

			if (vnode instanceof VNode) {
				return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
			} else if (Array.isArray(vnode)) {
				var vnodes = normalizeChildren(vnode) || [];
				var res = new Array(vnodes.length);
				for (var i = 0; i < vnodes.length; i++) {
					res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
				}
				return res;
			}
		}

		function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
			// #7817 clone node before setting fnContext, otherwise if the node is reused
			// (e.g. it was from a cached normal slot) the fnContext causes named slots
			// that should not be matched to match.
			var clone = cloneVNode(vnode);
			clone.fnContext = contextVm;
			clone.fnOptions = options;
			if (false) {
			}
			if (data.slot) {
				(clone.data || (clone.data = {})).slot = data.slot;
			}
			return clone;
		}

		function mergeProps(to, from) {
			for (var key in from) {
				to[camelize(key)] = from[key];
			}
		}

		/*  */

		/*  */

		/*  */

		/*  */

		// inline hooks to be invoked on component VNodes during patch
		var componentVNodeHooks = {
			init: function init(vnode, hydrating) {
				if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
					// kept-alive components, treat as a patch
					var mountedNode = vnode; // work around flow
					componentVNodeHooks.prepatch(mountedNode, mountedNode);
				} else {
					var child = (vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance));
					child.$mount(hydrating ? vnode.elm : undefined, hydrating);
				}
			},

			prepatch: function prepatch(oldVnode, vnode) {
				var options = vnode.componentOptions;
				var child = (vnode.componentInstance = oldVnode.componentInstance);
				updateChildComponent(
					child,
					options.propsData, // updated props
					options.listeners, // updated listeners
					vnode, // new parent vnode
					options.children // new children
				);
			},

			insert: function insert(vnode) {
				var context = vnode.context;
				var componentInstance = vnode.componentInstance;
				if (!componentInstance._isMounted) {
					componentInstance._isMounted = true;
					callHook(componentInstance, "mounted");
				}
				if (vnode.data.keepAlive) {
					if (context._isMounted) {
						// vue-router#1212
						// During updates, a kept-alive component's child components may
						// change, so directly walking the tree here may call activated hooks
						// on incorrect children. Instead we push them into a queue which will
						// be processed after the whole patch process ended.
						queueActivatedComponent(componentInstance);
					} else {
						activateChildComponent(componentInstance, true /* direct */);
					}
				}
			},

			destroy: function destroy(vnode) {
				var componentInstance = vnode.componentInstance;
				if (!componentInstance._isDestroyed) {
					if (!vnode.data.keepAlive) {
						componentInstance.$destroy();
					} else {
						deactivateChildComponent(componentInstance, true /* direct */);
					}
				}
			},
		};

		var hooksToMerge = Object.keys(componentVNodeHooks);

		function createComponent(Ctor, data, context, children, tag) {
			if (isUndef(Ctor)) {
				return;
			}

			var baseCtor = context.$options._base;

			// plain options object: turn it into a constructor
			if (isObject(Ctor)) {
				Ctor = baseCtor.extend(Ctor);
			}

			// if at this stage it's not a constructor or an async component factory,
			// reject.
			if (typeof Ctor !== "function") {
				if (false) {
				}
				return;
			}

			// async component
			var asyncFactory;
			if (isUndef(Ctor.cid)) {
				asyncFactory = Ctor;
				Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
				if (Ctor === undefined) {
					// return a placeholder node for async component, which is rendered
					// as a comment node but preserves all the raw information for the node.
					// the information will be used for async server-rendering and hydration.
					return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
				}
			}

			data = data || {};

			// resolve constructor options in case global mixins are applied after
			// component constructor creation
			resolveConstructorOptions(Ctor);

			// transform component v-model data into props & events
			if (isDef(data.model)) {
				transformModel(Ctor.options, data);
			}

			// extract props
			var propsData = extractPropsFromVNodeData(data, Ctor, tag);

			// functional component
			if (isTrue(Ctor.options.functional)) {
				return createFunctionalComponent(Ctor, propsData, data, context, children);
			}

			// extract listeners, since these needs to be treated as
			// child component listeners instead of DOM listeners
			var listeners = data.on;
			// replace with listeners with .native modifier
			// so it gets processed during parent component patch.
			data.on = data.nativeOn;

			if (isTrue(Ctor.options.abstract)) {
				// abstract components do not keep anything
				// other than props & listeners & slot

				// work around flow
				var slot = data.slot;
				data = {};
				if (slot) {
					data.slot = slot;
				}
			}

			// install component management hooks onto the placeholder node
			installComponentHooks(data);

			// return a placeholder vnode
			var name = Ctor.options.name || tag;
			var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);

			return vnode;
		}

		function createComponentInstanceForVnode(
			// we know it's MountedComponentVNode but flow doesn't
			vnode,
			// activeInstance in lifecycle state
			parent
		) {
			var options = {
				_isComponent: true,
				_parentVnode: vnode,
				parent: parent,
			};
			// check inline-template render functions
			var inlineTemplate = vnode.data.inlineTemplate;
			if (isDef(inlineTemplate)) {
				options.render = inlineTemplate.render;
				options.staticRenderFns = inlineTemplate.staticRenderFns;
			}
			return new vnode.componentOptions.Ctor(options);
		}

		function installComponentHooks(data) {
			var hooks = data.hook || (data.hook = {});
			for (var i = 0; i < hooksToMerge.length; i++) {
				var key = hooksToMerge[i];
				var existing = hooks[key];
				var toMerge = componentVNodeHooks[key];
				if (existing !== toMerge && !(existing && existing._merged)) {
					hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
				}
			}
		}

		function mergeHook$1(f1, f2) {
			var merged = function (a, b) {
				// flow complains about extra args which is why we use any
				f1(a, b);
				f2(a, b);
			};
			merged._merged = true;
			return merged;
		}

		// transform component v-model info (value and callback) into
		// prop and event handler respectively.
		function transformModel(options, data) {
			var prop = (options.model && options.model.prop) || "value";
			var event = (options.model && options.model.event) || "input";
			(data.attrs || (data.attrs = {}))[prop] = data.model.value;
			var on = data.on || (data.on = {});
			var existing = on[event];
			var callback = data.model.callback;
			if (isDef(existing)) {
				if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
					on[event] = [callback].concat(existing);
				}
			} else {
				on[event] = callback;
			}
		}

		/*  */

		var SIMPLE_NORMALIZE = 1;
		var ALWAYS_NORMALIZE = 2;

		// wrapper function for providing a more flexible interface
		// without getting yelled at by flow
		function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
			if (Array.isArray(data) || isPrimitive(data)) {
				normalizationType = children;
				children = data;
				data = undefined;
			}
			if (isTrue(alwaysNormalize)) {
				normalizationType = ALWAYS_NORMALIZE;
			}
			return _createElement(context, tag, data, children, normalizationType);
		}

		function _createElement(context, tag, data, children, normalizationType) {
			if (isDef(data) && isDef(data.__ob__)) {
				false && 0;
				return createEmptyVNode();
			}
			// object syntax in v-bind
			if (isDef(data) && isDef(data.is)) {
				tag = data.is;
			}
			if (!tag) {
				// in case of component :is set to falsy value
				return createEmptyVNode();
			}
			// warn against non-primitive key
			if (false) {
			}
			// support single function children as default scoped slot
			if (Array.isArray(children) && typeof children[0] === "function") {
				data = data || {};
				data.scopedSlots = { default: children[0] };
				children.length = 0;
			}
			if (normalizationType === ALWAYS_NORMALIZE) {
				children = normalizeChildren(children);
			} else if (normalizationType === SIMPLE_NORMALIZE) {
				children = simpleNormalizeChildren(children);
			}
			var vnode, ns;
			if (typeof tag === "string") {
				var Ctor;
				ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
				if (config.isReservedTag(tag)) {
					// platform built-in elements
					if (false) {
					}
					vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
				} else if ((!data || !data.pre) && isDef((Ctor = resolveAsset(context.$options, "components", tag)))) {
					// component
					vnode = createComponent(Ctor, data, context, children, tag);
				} else {
					// unknown or unlisted namespaced elements
					// check at runtime because it may get assigned a namespace when its
					// parent normalizes children
					vnode = new VNode(tag, data, children, undefined, undefined, context);
				}
			} else {
				// direct component options / constructor
				vnode = createComponent(tag, data, context, children);
			}
			if (Array.isArray(vnode)) {
				return vnode;
			} else if (isDef(vnode)) {
				if (isDef(ns)) {
					applyNS(vnode, ns);
				}
				if (isDef(data)) {
					registerDeepBindings(data);
				}
				return vnode;
			} else {
				return createEmptyVNode();
			}
		}

		function applyNS(vnode, ns, force) {
			vnode.ns = ns;
			if (vnode.tag === "foreignObject") {
				// use default namespace inside foreignObject
				ns = undefined;
				force = true;
			}
			if (isDef(vnode.children)) {
				for (var i = 0, l = vnode.children.length; i < l; i++) {
					var child = vnode.children[i];
					if (isDef(child.tag) && (isUndef(child.ns) || (isTrue(force) && child.tag !== "svg"))) {
						applyNS(child, ns, force);
					}
				}
			}
		}

		// ref #5318
		// necessary to ensure parent re-render when deep bindings like :style and
		// :class are used on slot nodes
		function registerDeepBindings(data) {
			if (isObject(data.style)) {
				traverse(data.style);
			}
			if (isObject(data.class)) {
				traverse(data.class);
			}
		}

		/*  */

		function initRender(vm) {
			vm._vnode = null; // the root of the child tree
			vm._staticTrees = null; // v-once cached trees
			var options = vm.$options;
			var parentVnode = (vm.$vnode = options._parentVnode); // the placeholder node in parent tree
			var renderContext = parentVnode && parentVnode.context;
			vm.$slots = resolveSlots(options._renderChildren, renderContext);
			vm.$scopedSlots = emptyObject;
			// bind the createElement fn to this instance
			// so that we get proper render context inside it.
			// args order: tag, data, children, normalizationType, alwaysNormalize
			// internal version is used by render functions compiled from templates
			vm._c = function (a, b, c, d) {
				return createElement(vm, a, b, c, d, false);
			};
			// normalization is always applied for the public version, used in
			// user-written render functions.
			vm.$createElement = function (a, b, c, d) {
				return createElement(vm, a, b, c, d, true);
			};

			// $attrs & $listeners are exposed for easier HOC creation.
			// they need to be reactive so that HOCs using them are always updated
			var parentData = parentVnode && parentVnode.data;

			/* istanbul ignore else */
			if (false) {
			} else {
				defineReactive$$1(vm, "$attrs", (parentData && parentData.attrs) || emptyObject, null, true);
				defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, null, true);
			}
		}

		var currentRenderingInstance = null;

		function renderMixin(Vue) {
			// install runtime convenience helpers
			installRenderHelpers(Vue.prototype);

			Vue.prototype.$nextTick = function (fn) {
				return nextTick(fn, this);
			};

			Vue.prototype._render = function () {
				var vm = this;
				var ref = vm.$options;
				var render = ref.render;
				var _parentVnode = ref._parentVnode;

				if (_parentVnode) {
					vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
				}

				// set parent vnode. this allows render functions to have access
				// to the data on the placeholder node.
				vm.$vnode = _parentVnode;
				// render self
				var vnode;
				try {
					// There's no need to maintain a stack because all render fns are called
					// separately from one another. Nested component's render fns are called
					// when parent component is patched.
					currentRenderingInstance = vm;
					vnode = render.call(vm._renderProxy, vm.$createElement);
				} catch (e) {
					handleError(e, vm, "render");
					// return error render result,
					// or previous vnode to prevent render error causing blank component
					/* istanbul ignore else */
					if (false) {
					} else {
						vnode = vm._vnode;
					}
				} finally {
					currentRenderingInstance = null;
				}
				// if the returned array contains only a single node, allow it
				if (Array.isArray(vnode) && vnode.length === 1) {
					vnode = vnode[0];
				}
				// return empty vnode in case the render function errored out
				if (!(vnode instanceof VNode)) {
					if (false) {
					}
					vnode = createEmptyVNode();
				}
				// set parent
				vnode.parent = _parentVnode;
				return vnode;
			};
		}

		/*  */

		function ensureCtor(comp, base) {
			if (comp.__esModule || (hasSymbol && comp[Symbol.toStringTag] === "Module")) {
				comp = comp.default;
			}
			return isObject(comp) ? base.extend(comp) : comp;
		}

		function createAsyncPlaceholder(factory, data, context, children, tag) {
			var node = createEmptyVNode();
			node.asyncFactory = factory;
			node.asyncMeta = { data: data, context: context, children: children, tag: tag };
			return node;
		}

		function resolveAsyncComponent(factory, baseCtor) {
			if (isTrue(factory.error) && isDef(factory.errorComp)) {
				return factory.errorComp;
			}

			if (isDef(factory.resolved)) {
				return factory.resolved;
			}

			var owner = currentRenderingInstance;
			if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
				// already pending
				factory.owners.push(owner);
			}

			if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
				return factory.loadingComp;
			}

			if (owner && !isDef(factory.owners)) {
				var owners = (factory.owners = [owner]);
				var sync = true;
				var timerLoading = null;
				var timerTimeout = null;

				owner.$on("hook:destroyed", function () {
					return remove(owners, owner);
				});

				var forceRender = function (renderCompleted) {
					for (var i = 0, l = owners.length; i < l; i++) {
						owners[i].$forceUpdate();
					}

					if (renderCompleted) {
						owners.length = 0;
						if (timerLoading !== null) {
							clearTimeout(timerLoading);
							timerLoading = null;
						}
						if (timerTimeout !== null) {
							clearTimeout(timerTimeout);
							timerTimeout = null;
						}
					}
				};

				var resolve = once(function (res) {
					// cache resolved
					factory.resolved = ensureCtor(res, baseCtor);
					// invoke callbacks only if this is not a synchronous resolve
					// (async resolves are shimmed as synchronous during SSR)
					if (!sync) {
						forceRender(true);
					} else {
						owners.length = 0;
					}
				});

				var reject = once(function (reason) {
					false && 0;
					if (isDef(factory.errorComp)) {
						factory.error = true;
						forceRender(true);
					}
				});

				var res = factory(resolve, reject);

				if (isObject(res)) {
					if (isPromise(res)) {
						// () => Promise
						if (isUndef(factory.resolved)) {
							res.then(resolve, reject);
						}
					} else if (isPromise(res.component)) {
						res.component.then(resolve, reject);

						if (isDef(res.error)) {
							factory.errorComp = ensureCtor(res.error, baseCtor);
						}

						if (isDef(res.loading)) {
							factory.loadingComp = ensureCtor(res.loading, baseCtor);
							if (res.delay === 0) {
								factory.loading = true;
							} else {
								timerLoading = setTimeout(function () {
									timerLoading = null;
									if (isUndef(factory.resolved) && isUndef(factory.error)) {
										factory.loading = true;
										forceRender(false);
									}
								}, res.delay || 200);
							}
						}

						if (isDef(res.timeout)) {
							timerTimeout = setTimeout(function () {
								timerTimeout = null;
								if (isUndef(factory.resolved)) {
									reject(false ? 0 : null);
								}
							}, res.timeout);
						}
					}
				}

				sync = false;
				// return in case resolved synchronously
				return factory.loading ? factory.loadingComp : factory.resolved;
			}
		}

		/*  */

		function getFirstComponentChild(children) {
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var c = children[i];
					if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
						return c;
					}
				}
			}
		}

		/*  */

		/*  */

		function initEvents(vm) {
			vm._events = Object.create(null);
			vm._hasHookEvent = false;
			// init parent attached events
			var listeners = vm.$options._parentListeners;
			if (listeners) {
				updateComponentListeners(vm, listeners);
			}
		}

		var target;

		function add(event, fn) {
			target.$on(event, fn);
		}

		function remove$1(event, fn) {
			target.$off(event, fn);
		}

		function createOnceHandler(event, fn) {
			var _target = target;
			return function onceHandler() {
				var res = fn.apply(null, arguments);
				if (res !== null) {
					_target.$off(event, onceHandler);
				}
			};
		}

		function updateComponentListeners(vm, listeners, oldListeners) {
			target = vm;
			updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
			target = undefined;
		}

		function eventsMixin(Vue) {
			var hookRE = /^hook:/;
			Vue.prototype.$on = function (event, fn) {
				var vm = this;
				if (Array.isArray(event)) {
					for (var i = 0, l = event.length; i < l; i++) {
						vm.$on(event[i], fn);
					}
				} else {
					(vm._events[event] || (vm._events[event] = [])).push(fn);
					// optimize hook:event cost by using a boolean flag marked at registration
					// instead of a hash lookup
					if (hookRE.test(event)) {
						vm._hasHookEvent = true;
					}
				}
				return vm;
			};

			Vue.prototype.$once = function (event, fn) {
				var vm = this;
				function on() {
					vm.$off(event, on);
					fn.apply(vm, arguments);
				}
				on.fn = fn;
				vm.$on(event, on);
				return vm;
			};

			Vue.prototype.$off = function (event, fn) {
				var vm = this;
				// all
				if (!arguments.length) {
					vm._events = Object.create(null);
					return vm;
				}
				// array of events
				if (Array.isArray(event)) {
					for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
						vm.$off(event[i$1], fn);
					}
					return vm;
				}
				// specific event
				var cbs = vm._events[event];
				if (!cbs) {
					return vm;
				}
				if (!fn) {
					vm._events[event] = null;
					return vm;
				}
				// specific handler
				var cb;
				var i = cbs.length;
				while (i--) {
					cb = cbs[i];
					if (cb === fn || cb.fn === fn) {
						cbs.splice(i, 1);
						break;
					}
				}
				return vm;
			};

			Vue.prototype.$emit = function (event) {
				var vm = this;
				if (false) {
					var lowerCaseEvent;
				}
				var cbs = vm._events[event];
				if (cbs) {
					cbs = cbs.length > 1 ? toArray(cbs) : cbs;
					var args = toArray(arguments, 1);
					var info = 'event handler for "' + event + '"';
					for (var i = 0, l = cbs.length; i < l; i++) {
						invokeWithErrorHandling(cbs[i], vm, args, vm, info);
					}
				}
				return vm;
			};
		}

		/*  */

		var activeInstance = null;
		var isUpdatingChildComponent = false;

		function setActiveInstance(vm) {
			var prevActiveInstance = activeInstance;
			activeInstance = vm;
			return function () {
				activeInstance = prevActiveInstance;
			};
		}

		function initLifecycle(vm) {
			var options = vm.$options;

			// locate first non-abstract parent
			var parent = options.parent;
			if (parent && !options.abstract) {
				while (parent.$options.abstract && parent.$parent) {
					parent = parent.$parent;
				}
				parent.$children.push(vm);
			}

			vm.$parent = parent;
			vm.$root = parent ? parent.$root : vm;

			vm.$children = [];
			vm.$refs = {};

			vm._watcher = null;
			vm._inactive = null;
			vm._directInactive = false;
			vm._isMounted = false;
			vm._isDestroyed = false;
			vm._isBeingDestroyed = false;
		}

		function lifecycleMixin(Vue) {
			Vue.prototype._update = function (vnode, hydrating) {
				var vm = this;
				var prevEl = vm.$el;
				var prevVnode = vm._vnode;
				var restoreActiveInstance = setActiveInstance(vm);
				vm._vnode = vnode;
				// Vue.prototype.__patch__ is injected in entry points
				// based on the rendering backend used.
				if (!prevVnode) {
					// initial render
					vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
				} else {
					// updates
					vm.$el = vm.__patch__(prevVnode, vnode);
				}
				restoreActiveInstance();
				// update __vue__ reference
				if (prevEl) {
					prevEl.__vue__ = null;
				}
				if (vm.$el) {
					vm.$el.__vue__ = vm;
				}
				// if parent is an HOC, update its $el as well
				if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
					vm.$parent.$el = vm.$el;
				}
				// updated hook is called by the scheduler to ensure that children are
				// updated in a parent's updated hook.
			};

			Vue.prototype.$forceUpdate = function () {
				var vm = this;
				if (vm._watcher) {
					vm._watcher.update();
				}
			};

			Vue.prototype.$destroy = function () {
				var vm = this;
				if (vm._isBeingDestroyed) {
					return;
				}
				callHook(vm, "beforeDestroy");
				vm._isBeingDestroyed = true;
				// remove self from parent
				var parent = vm.$parent;
				if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
					remove(parent.$children, vm);
				}
				// teardown watchers
				if (vm._watcher) {
					vm._watcher.teardown();
				}
				var i = vm._watchers.length;
				while (i--) {
					vm._watchers[i].teardown();
				}
				// remove reference from data ob
				// frozen object may not have observer.
				if (vm._data.__ob__) {
					vm._data.__ob__.vmCount--;
				}
				// call the last hook...
				vm._isDestroyed = true;
				// invoke destroy hooks on current rendered tree
				vm.__patch__(vm._vnode, null);
				// fire destroyed hook
				callHook(vm, "destroyed");
				// turn off all instance listeners.
				vm.$off();
				// remove __vue__ reference
				if (vm.$el) {
					vm.$el.__vue__ = null;
				}
				// release circular reference (#6759)
				if (vm.$vnode) {
					vm.$vnode.parent = null;
				}
			};
		}

		function mountComponent(vm, el, hydrating) {
			vm.$el = el;
			if (!vm.$options.render) {
				vm.$options.render = createEmptyVNode;
				if (false) {
				}
			}
			callHook(vm, "beforeMount");

			var updateComponent;
			/* istanbul ignore if */
			if (false) {
			} else {
				updateComponent = function () {
					vm._update(vm._render(), hydrating);
				};
			}

			// we set this to vm._watcher inside the watcher's constructor
			// since the watcher's initial patch may call $forceUpdate (e.g. inside child
			// component's mounted hook), which relies on vm._watcher being already defined
			new Watcher(
				vm,
				updateComponent,
				noop,
				{
					before: function before() {
						if (vm._isMounted && !vm._isDestroyed) {
							callHook(vm, "beforeUpdate");
						}
					},
				},
				true /* isRenderWatcher */
			);
			hydrating = false;

			// manually mounted instance, call mounted on self
			// mounted is called for render-created child components in its inserted hook
			if (vm.$vnode == null) {
				vm._isMounted = true;
				callHook(vm, "mounted");
			}
			return vm;
		}

		function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
			if (false) {
			}

			// determine whether component has slot children
			// we need to do this before overwriting $options._renderChildren.

			// check if there are dynamic scopedSlots (hand-written or compiled but with
			// dynamic slot names). Static scoped slots compiled from template has the
			// "$stable" marker.
			var newScopedSlots = parentVnode.data.scopedSlots;
			var oldScopedSlots = vm.$scopedSlots;
			var hasDynamicScopedSlot = !!((newScopedSlots && !newScopedSlots.$stable) || (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) || (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) || (!newScopedSlots && vm.$scopedSlots.$key));

			// Any static slot children from the parent may have changed during parent's
			// update. Dynamic scoped slots may also have changed. In such cases, a forced
			// update is necessary to ensure correctness.
			var needsForceUpdate = !!(
				renderChildren || // has new static slots
				vm.$options._renderChildren || // has old static slots
				hasDynamicScopedSlot
			);

			vm.$options._parentVnode = parentVnode;
			vm.$vnode = parentVnode; // update vm's placeholder node without re-render

			if (vm._vnode) {
				// update child tree's parent
				vm._vnode.parent = parentVnode;
			}
			vm.$options._renderChildren = renderChildren;

			// update $attrs and $listeners hash
			// these are also reactive so they may trigger child update if the child
			// used them during render
			vm.$attrs = parentVnode.data.attrs || emptyObject;
			vm.$listeners = listeners || emptyObject;

			// update props
			if (propsData && vm.$options.props) {
				toggleObserving(false);
				var props = vm._props;
				var propKeys = vm.$options._propKeys || [];
				for (var i = 0; i < propKeys.length; i++) {
					var key = propKeys[i];
					var propOptions = vm.$options.props; // wtf flow?
					props[key] = validateProp(key, propOptions, propsData, vm);
				}
				toggleObserving(true);
				// keep a copy of raw propsData
				vm.$options.propsData = propsData;
			}

			// update listeners
			listeners = listeners || emptyObject;
			var oldListeners = vm.$options._parentListeners;
			vm.$options._parentListeners = listeners;
			updateComponentListeners(vm, listeners, oldListeners);

			// resolve slots + force update if has children
			if (needsForceUpdate) {
				vm.$slots = resolveSlots(renderChildren, parentVnode.context);
				vm.$forceUpdate();
			}

			if (false) {
			}
		}

		function isInInactiveTree(vm) {
			while (vm && (vm = vm.$parent)) {
				if (vm._inactive) {
					return true;
				}
			}
			return false;
		}

		function activateChildComponent(vm, direct) {
			if (direct) {
				vm._directInactive = false;
				if (isInInactiveTree(vm)) {
					return;
				}
			} else if (vm._directInactive) {
				return;
			}
			if (vm._inactive || vm._inactive === null) {
				vm._inactive = false;
				for (var i = 0; i < vm.$children.length; i++) {
					activateChildComponent(vm.$children[i]);
				}
				callHook(vm, "activated");
			}
		}

		function deactivateChildComponent(vm, direct) {
			if (direct) {
				vm._directInactive = true;
				if (isInInactiveTree(vm)) {
					return;
				}
			}
			if (!vm._inactive) {
				vm._inactive = true;
				for (var i = 0; i < vm.$children.length; i++) {
					deactivateChildComponent(vm.$children[i]);
				}
				callHook(vm, "deactivated");
			}
		}

		function callHook(vm, hook) {
			// #7573 disable dep collection when invoking lifecycle hooks
			pushTarget();
			var handlers = vm.$options[hook];
			var info = hook + " hook";
			if (handlers) {
				for (var i = 0, j = handlers.length; i < j; i++) {
					invokeWithErrorHandling(handlers[i], vm, null, vm, info);
				}
			}
			if (vm._hasHookEvent) {
				vm.$emit("hook:" + hook);
			}
			popTarget();
		}

		/*  */

		var MAX_UPDATE_COUNT = 100;

		var queue = [];
		var activatedChildren = [];
		var has = {};
		var circular = {};
		var waiting = false;
		var flushing = false;
		var index = 0;

		/**
		 * Reset the scheduler's state.
		 */
		function resetSchedulerState() {
			index = queue.length = activatedChildren.length = 0;
			has = {};
			if (false) {
			}
			waiting = flushing = false;
		}

		// Async edge case #6566 requires saving the timestamp when event listeners are
		// attached. However, calling performance.now() has a perf overhead especially
		// if the page has thousands of event listeners. Instead, we take a timestamp
		// every time the scheduler flushes and use that for all event listeners
		// attached during that flush.
		var currentFlushTimestamp = 0;

		// Async edge case fix requires storing an event listener's attach timestamp.
		var getNow = Date.now;

		// Determine what event timestamp the browser is using. Annoyingly, the
		// timestamp can either be hi-res (relative to page load) or low-res
		// (relative to UNIX epoch), so in order to compare time we have to use the
		// same timestamp type when saving the flush timestamp.
		// All IE versions use low-res event timestamps, and have problematic clock
		// implementations (#9632)
		if (inBrowser && !isIE) {
			var performance = window.performance;
			if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
				// if the event timestamp, although evaluated AFTER the Date.now(), is
				// smaller than it, it means the event is using a hi-res timestamp,
				// and we need to use the hi-res version for event listener timestamps as
				// well.
				getNow = function () {
					return performance.now();
				};
			}
		}

		/**
		 * Flush both queues and run the watchers.
		 */
		function flushSchedulerQueue() {
			currentFlushTimestamp = getNow();
			flushing = true;
			var watcher, id;

			// Sort queue before flush.
			// This ensures that:
			// 1. Components are updated from parent to child. (because parent is always
			//    created before the child)
			// 2. A component's user watchers are run before its render watcher (because
			//    user watchers are created before the render watcher)
			// 3. If a component is destroyed during a parent component's watcher run,
			//    its watchers can be skipped.
			queue.sort(function (a, b) {
				return a.id - b.id;
			});

			// do not cache length because more watchers might be pushed
			// as we run existing watchers
			for (index = 0; index < queue.length; index++) {
				watcher = queue[index];
				if (watcher.before) {
					watcher.before();
				}
				id = watcher.id;
				has[id] = null;
				watcher.run();
				// in dev build, check and stop circular updates.
				if (false) {
				}
			}

			// keep copies of post queues before resetting state
			var activatedQueue = activatedChildren.slice();
			var updatedQueue = queue.slice();

			resetSchedulerState();

			// call component updated and activated hooks
			callActivatedHooks(activatedQueue);
			callUpdatedHooks(updatedQueue);

			// devtool hook
			/* istanbul ignore if */
			if (devtools && config.devtools) {
				devtools.emit("flush");
			}
		}

		function callUpdatedHooks(queue) {
			var i = queue.length;
			while (i--) {
				var watcher = queue[i];
				var vm = watcher.vm;
				if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
					callHook(vm, "updated");
				}
			}
		}

		/**
		 * Queue a kept-alive component that was activated during patch.
		 * The queue will be processed after the entire tree has been patched.
		 */
		function queueActivatedComponent(vm) {
			// setting _inactive to false here so that a render function can
			// rely on checking whether it's in an inactive tree (e.g. router-view)
			vm._inactive = false;
			activatedChildren.push(vm);
		}

		function callActivatedHooks(queue) {
			for (var i = 0; i < queue.length; i++) {
				queue[i]._inactive = true;
				activateChildComponent(queue[i], true /* true */);
			}
		}

		/**
		 * Push a watcher into the watcher queue.
		 * Jobs with duplicate IDs will be skipped unless it's
		 * pushed when the queue is being flushed.
		 */
		function queueWatcher(watcher) {
			var id = watcher.id;
			if (has[id] == null) {
				has[id] = true;
				if (!flushing) {
					queue.push(watcher);
				} else {
					// if already flushing, splice the watcher based on its id
					// if already past its id, it will be run next immediately.
					var i = queue.length - 1;
					while (i > index && queue[i].id > watcher.id) {
						i--;
					}
					queue.splice(i + 1, 0, watcher);
				}
				// queue the flush
				if (!waiting) {
					waiting = true;

					if (false) {
					}
					nextTick(flushSchedulerQueue);
				}
			}
		}

		/*  */

		var uid$2 = 0;

		/**
		 * A watcher parses an expression, collects dependencies,
		 * and fires callback when the expression value changes.
		 * This is used for both the $watch() api and directives.
		 */
		var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
			this.vm = vm;
			if (isRenderWatcher) {
				vm._watcher = this;
			}
			vm._watchers.push(this);
			// options
			if (options) {
				this.deep = !!options.deep;
				this.user = !!options.user;
				this.lazy = !!options.lazy;
				this.sync = !!options.sync;
				this.before = options.before;
			} else {
				this.deep = this.user = this.lazy = this.sync = false;
			}
			this.cb = cb;
			this.id = ++uid$2; // uid for batching
			this.active = true;
			this.dirty = this.lazy; // for lazy watchers
			this.deps = [];
			this.newDeps = [];
			this.depIds = new _Set();
			this.newDepIds = new _Set();
			this.expression = false ? 0 : "";
			// parse expression for getter
			if (typeof expOrFn === "function") {
				this.getter = expOrFn;
			} else {
				this.getter = parsePath(expOrFn);
				if (!this.getter) {
					this.getter = noop;
					false && 0;
				}
			}
			this.value = this.lazy ? undefined : this.get();
		};

		/**
		 * Evaluate the getter, and re-collect dependencies.
		 */
		Watcher.prototype.get = function get() {
			pushTarget(this);
			var value;
			var vm = this.vm;
			try {
				value = this.getter.call(vm, vm);
			} catch (e) {
				if (this.user) {
					handleError(e, vm, 'getter for watcher "' + this.expression + '"');
				} else {
					throw e;
				}
			} finally {
				// "touch" every property so they are all tracked as
				// dependencies for deep watching
				if (this.deep) {
					traverse(value);
				}
				popTarget();
				this.cleanupDeps();
			}
			return value;
		};

		/**
		 * Add a dependency to this directive.
		 */
		Watcher.prototype.addDep = function addDep(dep) {
			var id = dep.id;
			if (!this.newDepIds.has(id)) {
				this.newDepIds.add(id);
				this.newDeps.push(dep);
				if (!this.depIds.has(id)) {
					dep.addSub(this);
				}
			}
		};

		/**
		 * Clean up for dependency collection.
		 */
		Watcher.prototype.cleanupDeps = function cleanupDeps() {
			var i = this.deps.length;
			while (i--) {
				var dep = this.deps[i];
				if (!this.newDepIds.has(dep.id)) {
					dep.removeSub(this);
				}
			}
			var tmp = this.depIds;
			this.depIds = this.newDepIds;
			this.newDepIds = tmp;
			this.newDepIds.clear();
			tmp = this.deps;
			this.deps = this.newDeps;
			this.newDeps = tmp;
			this.newDeps.length = 0;
		};

		/**
		 * Subscriber interface.
		 * Will be called when a dependency changes.
		 */
		Watcher.prototype.update = function update() {
			/* istanbul ignore else */
			if (this.lazy) {
				this.dirty = true;
			} else if (this.sync) {
				this.run();
			} else {
				queueWatcher(this);
			}
		};

		/**
		 * Scheduler job interface.
		 * Will be called by the scheduler.
		 */
		Watcher.prototype.run = function run() {
			if (this.active) {
				var value = this.get();
				if (
					value !== this.value ||
					// Deep watchers and watchers on Object/Arrays should fire even
					// when the value is the same, because the value may
					// have mutated.
					isObject(value) ||
					this.deep
				) {
					// set new value
					var oldValue = this.value;
					this.value = value;
					if (this.user) {
						var info = 'callback for watcher "' + this.expression + '"';
						invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
					} else {
						this.cb.call(this.vm, value, oldValue);
					}
				}
			}
		};

		/**
		 * Evaluate the value of the watcher.
		 * This only gets called for lazy watchers.
		 */
		Watcher.prototype.evaluate = function evaluate() {
			this.value = this.get();
			this.dirty = false;
		};

		/**
		 * Depend on all deps collected by this watcher.
		 */
		Watcher.prototype.depend = function depend() {
			var i = this.deps.length;
			while (i--) {
				this.deps[i].depend();
			}
		};

		/**
		 * Remove self from all dependencies' subscriber list.
		 */
		Watcher.prototype.teardown = function teardown() {
			if (this.active) {
				// remove self from vm's watcher list
				// this is a somewhat expensive operation so we skip it
				// if the vm is being destroyed.
				if (!this.vm._isBeingDestroyed) {
					remove(this.vm._watchers, this);
				}
				var i = this.deps.length;
				while (i--) {
					this.deps[i].removeSub(this);
				}
				this.active = false;
			}
		};

		/*  */

		var sharedPropertyDefinition = {
			enumerable: true,
			configurable: true,
			get: noop,
			set: noop,
		};

		function proxy(target, sourceKey, key) {
			sharedPropertyDefinition.get = function proxyGetter() {
				return this[sourceKey][key];
			};
			sharedPropertyDefinition.set = function proxySetter(val) {
				this[sourceKey][key] = val;
			};
			Object.defineProperty(target, key, sharedPropertyDefinition);
		}

		function initState(vm) {
			vm._watchers = [];
			var opts = vm.$options;
			if (opts.props) {
				initProps(vm, opts.props);
			}
			if (opts.methods) {
				initMethods(vm, opts.methods);
			}
			if (opts.data) {
				initData(vm);
			} else {
				observe((vm._data = {}), true /* asRootData */);
			}
			if (opts.computed) {
				initComputed(vm, opts.computed);
			}
			if (opts.watch && opts.watch !== nativeWatch) {
				initWatch(vm, opts.watch);
			}
		}

		function initProps(vm, propsOptions) {
			var propsData = vm.$options.propsData || {};
			var props = (vm._props = {});
			// cache prop keys so that future props updates can iterate using Array
			// instead of dynamic object key enumeration.
			var keys = (vm.$options._propKeys = []);
			var isRoot = !vm.$parent;
			// root instance props should be converted
			if (!isRoot) {
				toggleObserving(false);
			}
			var loop = function (key) {
				keys.push(key);
				var value = validateProp(key, propsOptions, propsData, vm);
				/* istanbul ignore else */
				if (false) {
					var hyphenatedKey;
				} else {
					defineReactive$$1(props, key, value);
				}
				// static props are already proxied on the component's prototype
				// during Vue.extend(). We only need to proxy props defined at
				// instantiation here.
				if (!(key in vm)) {
					proxy(vm, "_props", key);
				}
			};

			for (var key in propsOptions) loop(key);
			toggleObserving(true);
		}

		function initData(vm) {
			var data = vm.$options.data;
			data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
			if (!isPlainObject(data)) {
				data = {};
				false && 0;
			}
			// proxy data on instance
			var keys = Object.keys(data);
			var props = vm.$options.props;
			var methods = vm.$options.methods;
			var i = keys.length;
			while (i--) {
				var key = keys[i];
				if (false) {
				}
				if (props && hasOwn(props, key)) {
					false && 0;
				} else if (!isReserved(key)) {
					proxy(vm, "_data", key);
				}
			}
			// observe data
			observe(data, true /* asRootData */);
		}

		function getData(data, vm) {
			// #7573 disable dep collection when invoking data getters
			pushTarget();
			try {
				return data.call(vm, vm);
			} catch (e) {
				handleError(e, vm, "data()");
				return {};
			} finally {
				popTarget();
			}
		}

		var computedWatcherOptions = { lazy: true };

		function initComputed(vm, computed) {
			// $flow-disable-line
			var watchers = (vm._computedWatchers = Object.create(null));
			// computed properties are just getters during SSR
			var isSSR = isServerRendering();

			for (var key in computed) {
				var userDef = computed[key];
				var getter = typeof userDef === "function" ? userDef : userDef.get;
				if (false) {
				}

				if (!isSSR) {
					// create internal watcher for the computed property.
					watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
				}

				// component-defined computed properties are already defined on the
				// component prototype. We only need to define computed properties defined
				// at instantiation here.
				if (!(key in vm)) {
					defineComputed(vm, key, userDef);
				} else if (false) {
				}
			}
		}

		function defineComputed(target, key, userDef) {
			var shouldCache = !isServerRendering();
			if (typeof userDef === "function") {
				sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
				sharedPropertyDefinition.set = noop;
			} else {
				sharedPropertyDefinition.get = userDef.get ? (shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get)) : noop;
				sharedPropertyDefinition.set = userDef.set || noop;
			}
			if (false) {
			}
			Object.defineProperty(target, key, sharedPropertyDefinition);
		}

		function createComputedGetter(key) {
			return function computedGetter() {
				var watcher = this._computedWatchers && this._computedWatchers[key];
				if (watcher) {
					if (watcher.dirty) {
						watcher.evaluate();
					}
					if (Dep.target) {
						watcher.depend();
					}
					return watcher.value;
				}
			};
		}

		function createGetterInvoker(fn) {
			return function computedGetter() {
				return fn.call(this, this);
			};
		}

		function initMethods(vm, methods) {
			var props = vm.$options.props;
			for (var key in methods) {
				if (false) {
				}
				vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
			}
		}

		function initWatch(vm, watch) {
			for (var key in watch) {
				var handler = watch[key];
				if (Array.isArray(handler)) {
					for (var i = 0; i < handler.length; i++) {
						createWatcher(vm, key, handler[i]);
					}
				} else {
					createWatcher(vm, key, handler);
				}
			}
		}

		function createWatcher(vm, expOrFn, handler, options) {
			if (isPlainObject(handler)) {
				options = handler;
				handler = handler.handler;
			}
			if (typeof handler === "string") {
				handler = vm[handler];
			}
			return vm.$watch(expOrFn, handler, options);
		}

		function stateMixin(Vue) {
			// flow somehow has problems with directly declared definition object
			// when using Object.defineProperty, so we have to procedurally build up
			// the object here.
			var dataDef = {};
			dataDef.get = function () {
				return this._data;
			};
			var propsDef = {};
			propsDef.get = function () {
				return this._props;
			};
			if (false) {
			}
			Object.defineProperty(Vue.prototype, "$data", dataDef);
			Object.defineProperty(Vue.prototype, "$props", propsDef);

			Vue.prototype.$set = set;
			Vue.prototype.$delete = del;

			Vue.prototype.$watch = function (expOrFn, cb, options) {
				var vm = this;
				if (isPlainObject(cb)) {
					return createWatcher(vm, expOrFn, cb, options);
				}
				options = options || {};
				options.user = true;
				var watcher = new Watcher(vm, expOrFn, cb, options);
				if (options.immediate) {
					var info = 'callback for immediate watcher "' + watcher.expression + '"';
					pushTarget();
					invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
					popTarget();
				}
				return function unwatchFn() {
					watcher.teardown();
				};
			};
		}

		/*  */

		var uid$3 = 0;

		function initMixin(Vue) {
			Vue.prototype._init = function (options) {
				var vm = this;
				// a uid
				vm._uid = uid$3++;

				var startTag, endTag;
				/* istanbul ignore if */
				if (false) {
				}

				// a flag to avoid this being observed
				vm._isVue = true;
				// merge options
				if (options && options._isComponent) {
					// optimize internal component instantiation
					// since dynamic options merging is pretty slow, and none of the
					// internal component options needs special treatment.
					initInternalComponent(vm, options);
				} else {
					vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
				}
				/* istanbul ignore else */
				if (false) {
				} else {
					vm._renderProxy = vm;
				}
				// expose real self
				vm._self = vm;
				initLifecycle(vm);
				initEvents(vm);
				initRender(vm);
				callHook(vm, "beforeCreate");
				initInjections(vm); // resolve injections before data/props
				initState(vm);
				initProvide(vm); // resolve provide after data/props
				callHook(vm, "created");

				/* istanbul ignore if */
				if (false) {
				}

				if (vm.$options.el) {
					vm.$mount(vm.$options.el);
				}
			};
		}

		function initInternalComponent(vm, options) {
			var opts = (vm.$options = Object.create(vm.constructor.options));
			// doing this because it's faster than dynamic enumeration.
			var parentVnode = options._parentVnode;
			opts.parent = options.parent;
			opts._parentVnode = parentVnode;

			var vnodeComponentOptions = parentVnode.componentOptions;
			opts.propsData = vnodeComponentOptions.propsData;
			opts._parentListeners = vnodeComponentOptions.listeners;
			opts._renderChildren = vnodeComponentOptions.children;
			opts._componentTag = vnodeComponentOptions.tag;

			if (options.render) {
				opts.render = options.render;
				opts.staticRenderFns = options.staticRenderFns;
			}
		}

		function resolveConstructorOptions(Ctor) {
			var options = Ctor.options;
			if (Ctor.super) {
				var superOptions = resolveConstructorOptions(Ctor.super);
				var cachedSuperOptions = Ctor.superOptions;
				if (superOptions !== cachedSuperOptions) {
					// super option changed,
					// need to resolve new options.
					Ctor.superOptions = superOptions;
					// check if there are any late-modified/attached options (#4976)
					var modifiedOptions = resolveModifiedOptions(Ctor);
					// update base extend options
					if (modifiedOptions) {
						extend(Ctor.extendOptions, modifiedOptions);
					}
					options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
					if (options.name) {
						options.components[options.name] = Ctor;
					}
				}
			}
			return options;
		}

		function resolveModifiedOptions(Ctor) {
			var modified;
			var latest = Ctor.options;
			var sealed = Ctor.sealedOptions;
			for (var key in latest) {
				if (latest[key] !== sealed[key]) {
					if (!modified) {
						modified = {};
					}
					modified[key] = latest[key];
				}
			}
			return modified;
		}

		function Vue(options) {
			if (false) {
			}
			this._init(options);
		}

		initMixin(Vue);
		stateMixin(Vue);
		eventsMixin(Vue);
		lifecycleMixin(Vue);
		renderMixin(Vue);

		/*  */

		function initUse(Vue) {
			Vue.use = function (plugin) {
				var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
				if (installedPlugins.indexOf(plugin) > -1) {
					return this;
				}

				// additional parameters
				var args = toArray(arguments, 1);
				args.unshift(this);
				if (typeof plugin.install === "function") {
					plugin.install.apply(plugin, args);
				} else if (typeof plugin === "function") {
					plugin.apply(null, args);
				}
				installedPlugins.push(plugin);
				return this;
			};
		}

		/*  */

		function initMixin$1(Vue) {
			Vue.mixin = function (mixin) {
				this.options = mergeOptions(this.options, mixin);
				return this;
			};
		}

		/*  */

		function initExtend(Vue) {
			/**
			 * Each instance constructor, including Vue, has a unique
			 * cid. This enables us to create wrapped "child
			 * constructors" for prototypal inheritance and cache them.
			 */
			Vue.cid = 0;
			var cid = 1;

			/**
			 * Class inheritance
			 */
			Vue.extend = function (extendOptions) {
				extendOptions = extendOptions || {};
				var Super = this;
				var SuperId = Super.cid;
				var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
				if (cachedCtors[SuperId]) {
					return cachedCtors[SuperId];
				}

				var name = extendOptions.name || Super.options.name;
				if (false) {
				}

				var Sub = function VueComponent(options) {
					this._init(options);
				};
				Sub.prototype = Object.create(Super.prototype);
				Sub.prototype.constructor = Sub;
				Sub.cid = cid++;
				Sub.options = mergeOptions(Super.options, extendOptions);
				Sub["super"] = Super;

				// For props and computed properties, we define the proxy getters on
				// the Vue instances at extension time, on the extended prototype. This
				// avoids Object.defineProperty calls for each instance created.
				if (Sub.options.props) {
					initProps$1(Sub);
				}
				if (Sub.options.computed) {
					initComputed$1(Sub);
				}

				// allow further extension/mixin/plugin usage
				Sub.extend = Super.extend;
				Sub.mixin = Super.mixin;
				Sub.use = Super.use;

				// create asset registers, so extended classes
				// can have their private assets too.
				ASSET_TYPES.forEach(function (type) {
					Sub[type] = Super[type];
				});
				// enable recursive self-lookup
				if (name) {
					Sub.options.components[name] = Sub;
				}

				// keep a reference to the super options at extension time.
				// later at instantiation we can check if Super's options have
				// been updated.
				Sub.superOptions = Super.options;
				Sub.extendOptions = extendOptions;
				Sub.sealedOptions = extend({}, Sub.options);

				// cache constructor
				cachedCtors[SuperId] = Sub;
				return Sub;
			};
		}

		function initProps$1(Comp) {
			var props = Comp.options.props;
			for (var key in props) {
				proxy(Comp.prototype, "_props", key);
			}
		}

		function initComputed$1(Comp) {
			var computed = Comp.options.computed;
			for (var key in computed) {
				defineComputed(Comp.prototype, key, computed[key]);
			}
		}

		/*  */

		function initAssetRegisters(Vue) {
			/**
			 * Create asset registration methods.
			 */
			ASSET_TYPES.forEach(function (type) {
				Vue[type] = function (id, definition) {
					if (!definition) {
						return this.options[type + "s"][id];
					} else {
						/* istanbul ignore if */
						if (false) {
						}
						if (type === "component" && isPlainObject(definition)) {
							definition.name = definition.name || id;
							definition = this.options._base.extend(definition);
						}
						if (type === "directive" && typeof definition === "function") {
							definition = { bind: definition, update: definition };
						}
						this.options[type + "s"][id] = definition;
						return definition;
					}
				};
			});
		}

		/*  */

		function getComponentName(opts) {
			return opts && (opts.Ctor.options.name || opts.tag);
		}

		function matches(pattern, name) {
			if (Array.isArray(pattern)) {
				return pattern.indexOf(name) > -1;
			} else if (typeof pattern === "string") {
				return pattern.split(",").indexOf(name) > -1;
			} else if (isRegExp(pattern)) {
				return pattern.test(name);
			}
			/* istanbul ignore next */
			return false;
		}

		function pruneCache(keepAliveInstance, filter) {
			var cache = keepAliveInstance.cache;
			var keys = keepAliveInstance.keys;
			var _vnode = keepAliveInstance._vnode;
			for (var key in cache) {
				var entry = cache[key];
				if (entry) {
					var name = entry.name;
					if (name && !filter(name)) {
						pruneCacheEntry(cache, key, keys, _vnode);
					}
				}
			}
		}

		function pruneCacheEntry(cache, key, keys, current) {
			var entry = cache[key];
			if (entry && (!current || entry.tag !== current.tag)) {
				entry.componentInstance.$destroy();
			}
			cache[key] = null;
			remove(keys, key);
		}

		var patternTypes = [String, RegExp, Array];

		var KeepAlive = {
			name: "keep-alive",
			abstract: true,

			props: {
				include: patternTypes,
				exclude: patternTypes,
				max: [String, Number],
			},

			methods: {
				cacheVNode: function cacheVNode() {
					var ref = this;
					var cache = ref.cache;
					var keys = ref.keys;
					var vnodeToCache = ref.vnodeToCache;
					var keyToCache = ref.keyToCache;
					if (vnodeToCache) {
						var tag = vnodeToCache.tag;
						var componentInstance = vnodeToCache.componentInstance;
						var componentOptions = vnodeToCache.componentOptions;
						cache[keyToCache] = {
							name: getComponentName(componentOptions),
							tag: tag,
							componentInstance: componentInstance,
						};
						keys.push(keyToCache);
						// prune oldest entry
						if (this.max && keys.length > parseInt(this.max)) {
							pruneCacheEntry(cache, keys[0], keys, this._vnode);
						}
						this.vnodeToCache = null;
					}
				},
			},

			created: function created() {
				this.cache = Object.create(null);
				this.keys = [];
			},

			destroyed: function destroyed() {
				for (var key in this.cache) {
					pruneCacheEntry(this.cache, key, this.keys);
				}
			},

			mounted: function mounted() {
				var this$1 = this;

				this.cacheVNode();
				this.$watch("include", function (val) {
					pruneCache(this$1, function (name) {
						return matches(val, name);
					});
				});
				this.$watch("exclude", function (val) {
					pruneCache(this$1, function (name) {
						return !matches(val, name);
					});
				});
			},

			updated: function updated() {
				this.cacheVNode();
			},

			render: function render() {
				var slot = this.$slots.default;
				var vnode = getFirstComponentChild(slot);
				var componentOptions = vnode && vnode.componentOptions;
				if (componentOptions) {
					// check pattern
					var name = getComponentName(componentOptions);
					var ref = this;
					var include = ref.include;
					var exclude = ref.exclude;
					if (
						// not included
						(include && (!name || !matches(include, name))) ||
						// excluded
						(exclude && name && matches(exclude, name))
					) {
						return vnode;
					}

					var ref$1 = this;
					var cache = ref$1.cache;
					var keys = ref$1.keys;
					var key =
						vnode.key == null
							? // same constructor may get registered as different local components
							  // so cid alone is not enough (#3269)
							  componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "")
							: vnode.key;
					if (cache[key]) {
						vnode.componentInstance = cache[key].componentInstance;
						// make current key freshest
						remove(keys, key);
						keys.push(key);
					} else {
						// delay setting the cache until update
						this.vnodeToCache = vnode;
						this.keyToCache = key;
					}

					vnode.data.keepAlive = true;
				}
				return vnode || (slot && slot[0]);
			},
		};

		var builtInComponents = {
			KeepAlive: KeepAlive,
		};

		/*  */

		function initGlobalAPI(Vue) {
			// config
			var configDef = {};
			configDef.get = function () {
				return config;
			};
			if (false) {
			}
			Object.defineProperty(Vue, "config", configDef);

			// exposed util methods.
			// NOTE: these are not considered part of the public API - avoid relying on
			// them unless you are aware of the risk.
			Vue.util = {
				warn: warn,
				extend: extend,
				mergeOptions: mergeOptions,
				defineReactive: defineReactive$$1,
			};

			Vue.set = set;
			Vue.delete = del;
			Vue.nextTick = nextTick;

			// 2.6 explicit observable API
			Vue.observable = function (obj) {
				observe(obj);
				return obj;
			};

			Vue.options = Object.create(null);
			ASSET_TYPES.forEach(function (type) {
				Vue.options[type + "s"] = Object.create(null);
			});

			// this is used to identify the "base" constructor to extend all plain-object
			// components with in Weex's multi-instance scenarios.
			Vue.options._base = Vue;

			extend(Vue.options.components, builtInComponents);

			initUse(Vue);
			initMixin$1(Vue);
			initExtend(Vue);
			initAssetRegisters(Vue);
		}

		initGlobalAPI(Vue);

		Object.defineProperty(Vue.prototype, "$isServer", {
			get: isServerRendering,
		});

		Object.defineProperty(Vue.prototype, "$ssrContext", {
			get: function get() {
				/* istanbul ignore next */
				return this.$vnode && this.$vnode.ssrContext;
			},
		});

		// expose FunctionalRenderContext for ssr runtime helper installation
		Object.defineProperty(Vue, "FunctionalRenderContext", {
			value: FunctionalRenderContext,
		});

		Vue.version = "2.6.14";

		/*  */

		// these are reserved for web because they are directly compiled away
		// during template compilation
		var isReservedAttr = makeMap("style,class");

		// attributes that should be using props for binding
		var acceptValue = makeMap("input,textarea,option,select,progress");
		var mustUseProp = function (tag, type, attr) {
			return (attr === "value" && acceptValue(tag) && type !== "button") || (attr === "selected" && tag === "option") || (attr === "checked" && tag === "input") || (attr === "muted" && tag === "video");
		};

		var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");

		var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");

		var convertEnumeratedValue = function (key, value) {
			return isFalsyAttrValue(value) || value === "false"
				? "false"
				: // allow arbitrary string value for contenteditable
				key === "contenteditable" && isValidContentEditableValue(value)
				? value
				: "true";
		};

		var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare," + "default,defaultchecked,defaultmuted,defaultselected,defer,disabled," + "enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple," + "muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly," + "required,reversed,scoped,seamless,selected,sortable," + "truespeed,typemustmatch,visible");

		var xlinkNS = "http://www.w3.org/1999/xlink";

		var isXlink = function (name) {
			return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
		};

		var getXlinkProp = function (name) {
			return isXlink(name) ? name.slice(6, name.length) : "";
		};

		var isFalsyAttrValue = function (val) {
			return val == null || val === false;
		};

		/*  */

		function genClassForVnode(vnode) {
			var data = vnode.data;
			var parentNode = vnode;
			var childNode = vnode;
			while (isDef(childNode.componentInstance)) {
				childNode = childNode.componentInstance._vnode;
				if (childNode && childNode.data) {
					data = mergeClassData(childNode.data, data);
				}
			}
			while (isDef((parentNode = parentNode.parent))) {
				if (parentNode && parentNode.data) {
					data = mergeClassData(data, parentNode.data);
				}
			}
			return renderClass(data.staticClass, data.class);
		}

		function mergeClassData(child, parent) {
			return {
				staticClass: concat(child.staticClass, parent.staticClass),
				class: isDef(child.class) ? [child.class, parent.class] : parent.class,
			};
		}

		function renderClass(staticClass, dynamicClass) {
			if (isDef(staticClass) || isDef(dynamicClass)) {
				return concat(staticClass, stringifyClass(dynamicClass));
			}
			/* istanbul ignore next */
			return "";
		}

		function concat(a, b) {
			return a ? (b ? a + " " + b : a) : b || "";
		}

		function stringifyClass(value) {
			if (Array.isArray(value)) {
				return stringifyArray(value);
			}
			if (isObject(value)) {
				return stringifyObject(value);
			}
			if (typeof value === "string") {
				return value;
			}
			/* istanbul ignore next */
			return "";
		}

		function stringifyArray(value) {
			var res = "";
			var stringified;
			for (var i = 0, l = value.length; i < l; i++) {
				if (isDef((stringified = stringifyClass(value[i]))) && stringified !== "") {
					if (res) {
						res += " ";
					}
					res += stringified;
				}
			}
			return res;
		}

		function stringifyObject(value) {
			var res = "";
			for (var key in value) {
				if (value[key]) {
					if (res) {
						res += " ";
					}
					res += key;
				}
			}
			return res;
		}

		/*  */

		var namespaceMap = {
			svg: "http://www.w3.org/2000/svg",
			math: "http://www.w3.org/1998/Math/MathML",
		};

		var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title," + "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," + "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," + "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," + "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," + "embed,object,param,source,canvas,script,noscript,del,ins," + "caption,col,colgroup,table,thead,tbody,td,th,tr," + "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," + "output,progress,select,textarea," + "details,dialog,menu,menuitem,summary," + "content,element,shadow,template,blockquote,iframe,tfoot");

		// this map is intentionally selective, only covering SVG elements that may
		// contain child elements.
		var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," + "foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," + "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);

		var isReservedTag = function (tag) {
			return isHTMLTag(tag) || isSVG(tag);
		};

		function getTagNamespace(tag) {
			if (isSVG(tag)) {
				return "svg";
			}
			// basic support for MathML
			// note it doesn't support other MathML elements being component roots
			if (tag === "math") {
				return "math";
			}
		}

		var unknownElementCache = Object.create(null);
		function isUnknownElement(tag) {
			/* istanbul ignore if */
			if (!inBrowser) {
				return true;
			}
			if (isReservedTag(tag)) {
				return false;
			}
			tag = tag.toLowerCase();
			/* istanbul ignore if */
			if (unknownElementCache[tag] != null) {
				return unknownElementCache[tag];
			}
			var el = document.createElement(tag);
			if (tag.indexOf("-") > -1) {
				// http://stackoverflow.com/a/28210364/1070244
				return (unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement);
			} else {
				return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
			}
		}

		var isTextInputType = makeMap("text,number,password,search,email,tel,url");

		/*  */

		/**
		 * Query an element selector if it's not an element already.
		 */
		function query(el) {
			if (typeof el === "string") {
				var selected = document.querySelector(el);
				if (!selected) {
					false && 0;
					return document.createElement("div");
				}
				return selected;
			} else {
				return el;
			}
		}

		/*  */

		function createElement$1(tagName, vnode) {
			var elm = document.createElement(tagName);
			if (tagName !== "select") {
				return elm;
			}
			// false or null will remove the attribute but undefined will not
			if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
				elm.setAttribute("multiple", "multiple");
			}
			return elm;
		}

		function createElementNS(namespace, tagName) {
			return document.createElementNS(namespaceMap[namespace], tagName);
		}

		function createTextNode(text) {
			return document.createTextNode(text);
		}

		function createComment(text) {
			return document.createComment(text);
		}

		function insertBefore(parentNode, newNode, referenceNode) {
			parentNode.insertBefore(newNode, referenceNode);
		}

		function removeChild(node, child) {
			node.removeChild(child);
		}

		function appendChild(node, child) {
			node.appendChild(child);
		}

		function parentNode(node) {
			return node.parentNode;
		}

		function nextSibling(node) {
			return node.nextSibling;
		}

		function tagName(node) {
			return node.tagName;
		}

		function setTextContent(node, text) {
			node.textContent = text;
		}

		function setStyleScope(node, scopeId) {
			node.setAttribute(scopeId, "");
		}

		var nodeOps = /*#__PURE__*/ Object.freeze({
			createElement: createElement$1,
			createElementNS: createElementNS,
			createTextNode: createTextNode,
			createComment: createComment,
			insertBefore: insertBefore,
			removeChild: removeChild,
			appendChild: appendChild,
			parentNode: parentNode,
			nextSibling: nextSibling,
			tagName: tagName,
			setTextContent: setTextContent,
			setStyleScope: setStyleScope,
		});

		/*  */

		var ref = {
			create: function create(_, vnode) {
				registerRef(vnode);
			},
			update: function update(oldVnode, vnode) {
				if (oldVnode.data.ref !== vnode.data.ref) {
					registerRef(oldVnode, true);
					registerRef(vnode);
				}
			},
			destroy: function destroy(vnode) {
				registerRef(vnode, true);
			},
		};

		function registerRef(vnode, isRemoval) {
			var key = vnode.data.ref;
			if (!isDef(key)) {
				return;
			}

			var vm = vnode.context;
			var ref = vnode.componentInstance || vnode.elm;
			var refs = vm.$refs;
			if (isRemoval) {
				if (Array.isArray(refs[key])) {
					remove(refs[key], ref);
				} else if (refs[key] === ref) {
					refs[key] = undefined;
				}
			} else {
				if (vnode.data.refInFor) {
					if (!Array.isArray(refs[key])) {
						refs[key] = [ref];
					} else if (refs[key].indexOf(ref) < 0) {
						// $flow-disable-line
						refs[key].push(ref);
					}
				} else {
					refs[key] = ref;
				}
			}
		}

		/**
		 * Virtual DOM patching algorithm based on Snabbdom by
		 * Simon Friis Vindum (@paldepind)
		 * Licensed under the MIT License
		 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
		 *
		 * modified by Evan You (@yyx990803)
		 *
		 * Not type-checking this because this file is perf-critical and the cost
		 * of making flow understand it is not worth it.
		 */

		var emptyNode = new VNode("", {}, []);

		var hooks = ["create", "activate", "update", "remove", "destroy"];

		function sameVnode(a, b) {
			return a.key === b.key && a.asyncFactory === b.asyncFactory && ((a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b)) || (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error)));
		}

		function sameInputType(a, b) {
			if (a.tag !== "input") {
				return true;
			}
			var i;
			var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
			var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
			return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
		}

		function createKeyToOldIdx(children, beginIdx, endIdx) {
			var i, key;
			var map = {};
			for (i = beginIdx; i <= endIdx; ++i) {
				key = children[i].key;
				if (isDef(key)) {
					map[key] = i;
				}
			}
			return map;
		}

		function createPatchFunction(backend) {
			var i, j;
			var cbs = {};

			var modules = backend.modules;
			var nodeOps = backend.nodeOps;

			for (i = 0; i < hooks.length; ++i) {
				cbs[hooks[i]] = [];
				for (j = 0; j < modules.length; ++j) {
					if (isDef(modules[j][hooks[i]])) {
						cbs[hooks[i]].push(modules[j][hooks[i]]);
					}
				}
			}

			function emptyNodeAt(elm) {
				return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
			}

			function createRmCb(childElm, listeners) {
				function remove$$1() {
					if (--remove$$1.listeners === 0) {
						removeNode(childElm);
					}
				}
				remove$$1.listeners = listeners;
				return remove$$1;
			}

			function removeNode(el) {
				var parent = nodeOps.parentNode(el);
				// element may have already been removed due to v-html / v-text
				if (isDef(parent)) {
					nodeOps.removeChild(parent, el);
				}
			}

			function isUnknownElement$$1(vnode, inVPre) {
				return (
					!inVPre &&
					!vnode.ns &&
					!(
						config.ignoredElements.length &&
						config.ignoredElements.some(function (ignore) {
							return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
						})
					) &&
					config.isUnknownElement(vnode.tag)
				);
			}

			var creatingElmInVPre = 0;

			function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
				if (isDef(vnode.elm) && isDef(ownerArray)) {
					// This vnode was used in a previous render!
					// now it's used as a new node, overwriting its elm would cause
					// potential patch errors down the road when it's used as an insertion
					// reference node. Instead, we clone the node on-demand before creating
					// associated DOM element for it.
					vnode = ownerArray[index] = cloneVNode(vnode);
				}

				vnode.isRootInsert = !nested; // for transition enter check
				if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
					return;
				}

				var data = vnode.data;
				var children = vnode.children;
				var tag = vnode.tag;
				if (isDef(tag)) {
					if (false) {
					}

					vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
					setScope(vnode);

					/* istanbul ignore if */
					{
						createChildren(vnode, children, insertedVnodeQueue);
						if (isDef(data)) {
							invokeCreateHooks(vnode, insertedVnodeQueue);
						}
						insert(parentElm, vnode.elm, refElm);
					}

					if (false) {
					}
				} else if (isTrue(vnode.isComment)) {
					vnode.elm = nodeOps.createComment(vnode.text);
					insert(parentElm, vnode.elm, refElm);
				} else {
					vnode.elm = nodeOps.createTextNode(vnode.text);
					insert(parentElm, vnode.elm, refElm);
				}
			}

			function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
				var i = vnode.data;
				if (isDef(i)) {
					var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
					if (isDef((i = i.hook)) && isDef((i = i.init))) {
						i(vnode, false /* hydrating */);
					}
					// after calling the init hook, if the vnode is a child component
					// it should've created a child instance and mounted it. the child
					// component also has set the placeholder vnode's elm.
					// in that case we can just return the element and be done.
					if (isDef(vnode.componentInstance)) {
						initComponent(vnode, insertedVnodeQueue);
						insert(parentElm, vnode.elm, refElm);
						if (isTrue(isReactivated)) {
							reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
						}
						return true;
					}
				}
			}

			function initComponent(vnode, insertedVnodeQueue) {
				if (isDef(vnode.data.pendingInsert)) {
					insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
					vnode.data.pendingInsert = null;
				}
				vnode.elm = vnode.componentInstance.$el;
				if (isPatchable(vnode)) {
					invokeCreateHooks(vnode, insertedVnodeQueue);
					setScope(vnode);
				} else {
					// empty component root.
					// skip all element-related modules except for ref (#3455)
					registerRef(vnode);
					// make sure to invoke the insert hook
					insertedVnodeQueue.push(vnode);
				}
			}

			function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
				var i;
				// hack for #4339: a reactivated component with inner transition
				// does not trigger because the inner node's created hooks are not called
				// again. It's not ideal to involve module-specific logic in here but
				// there doesn't seem to be a better way to do it.
				var innerNode = vnode;
				while (innerNode.componentInstance) {
					innerNode = innerNode.componentInstance._vnode;
					if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
						for (i = 0; i < cbs.activate.length; ++i) {
							cbs.activate[i](emptyNode, innerNode);
						}
						insertedVnodeQueue.push(innerNode);
						break;
					}
				}
				// unlike a newly created component,
				// a reactivated keep-alive component doesn't insert itself
				insert(parentElm, vnode.elm, refElm);
			}

			function insert(parent, elm, ref$$1) {
				if (isDef(parent)) {
					if (isDef(ref$$1)) {
						if (nodeOps.parentNode(ref$$1) === parent) {
							nodeOps.insertBefore(parent, elm, ref$$1);
						}
					} else {
						nodeOps.appendChild(parent, elm);
					}
				}
			}

			function createChildren(vnode, children, insertedVnodeQueue) {
				if (Array.isArray(children)) {
					if (false) {
					}
					for (var i = 0; i < children.length; ++i) {
						createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
					}
				} else if (isPrimitive(vnode.text)) {
					nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
				}
			}

			function isPatchable(vnode) {
				while (vnode.componentInstance) {
					vnode = vnode.componentInstance._vnode;
				}
				return isDef(vnode.tag);
			}

			function invokeCreateHooks(vnode, insertedVnodeQueue) {
				for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
					cbs.create[i$1](emptyNode, vnode);
				}
				i = vnode.data.hook; // Reuse variable
				if (isDef(i)) {
					if (isDef(i.create)) {
						i.create(emptyNode, vnode);
					}
					if (isDef(i.insert)) {
						insertedVnodeQueue.push(vnode);
					}
				}
			}

			// set scope id attribute for scoped CSS.
			// this is implemented as a special case to avoid the overhead
			// of going through the normal attribute patching process.
			function setScope(vnode) {
				var i;
				if (isDef((i = vnode.fnScopeId))) {
					nodeOps.setStyleScope(vnode.elm, i);
				} else {
					var ancestor = vnode;
					while (ancestor) {
						if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
							nodeOps.setStyleScope(vnode.elm, i);
						}
						ancestor = ancestor.parent;
					}
				}
				// for slot content they should also get the scopeId from the host instance.
				if (isDef((i = activeInstance)) && i !== vnode.context && i !== vnode.fnContext && isDef((i = i.$options._scopeId))) {
					nodeOps.setStyleScope(vnode.elm, i);
				}
			}

			function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
				for (; startIdx <= endIdx; ++startIdx) {
					createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
				}
			}

			function invokeDestroyHook(vnode) {
				var i, j;
				var data = vnode.data;
				if (isDef(data)) {
					if (isDef((i = data.hook)) && isDef((i = i.destroy))) {
						i(vnode);
					}
					for (i = 0; i < cbs.destroy.length; ++i) {
						cbs.destroy[i](vnode);
					}
				}
				if (isDef((i = vnode.children))) {
					for (j = 0; j < vnode.children.length; ++j) {
						invokeDestroyHook(vnode.children[j]);
					}
				}
			}

			function removeVnodes(vnodes, startIdx, endIdx) {
				for (; startIdx <= endIdx; ++startIdx) {
					var ch = vnodes[startIdx];
					if (isDef(ch)) {
						if (isDef(ch.tag)) {
							removeAndInvokeRemoveHook(ch);
							invokeDestroyHook(ch);
						} else {
							// Text node
							removeNode(ch.elm);
						}
					}
				}
			}

			function removeAndInvokeRemoveHook(vnode, rm) {
				if (isDef(rm) || isDef(vnode.data)) {
					var i;
					var listeners = cbs.remove.length + 1;
					if (isDef(rm)) {
						// we have a recursively passed down rm callback
						// increase the listeners count
						rm.listeners += listeners;
					} else {
						// directly removing
						rm = createRmCb(vnode.elm, listeners);
					}
					// recursively invoke hooks on child component root node
					if (isDef((i = vnode.componentInstance)) && isDef((i = i._vnode)) && isDef(i.data)) {
						removeAndInvokeRemoveHook(i, rm);
					}
					for (i = 0; i < cbs.remove.length; ++i) {
						cbs.remove[i](vnode, rm);
					}
					if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
						i(vnode, rm);
					} else {
						rm();
					}
				} else {
					removeNode(vnode.elm);
				}
			}

			function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
				var oldStartIdx = 0;
				var newStartIdx = 0;
				var oldEndIdx = oldCh.length - 1;
				var oldStartVnode = oldCh[0];
				var oldEndVnode = oldCh[oldEndIdx];
				var newEndIdx = newCh.length - 1;
				var newStartVnode = newCh[0];
				var newEndVnode = newCh[newEndIdx];
				var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

				// removeOnly is a special flag used only by <transition-group>
				// to ensure removed elements stay in correct relative positions
				// during leaving transitions
				var canMove = !removeOnly;

				if (false) {
				}

				while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
					if (isUndef(oldStartVnode)) {
						oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
					} else if (isUndef(oldEndVnode)) {
						oldEndVnode = oldCh[--oldEndIdx];
					} else if (sameVnode(oldStartVnode, newStartVnode)) {
						patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
						oldStartVnode = oldCh[++oldStartIdx];
						newStartVnode = newCh[++newStartIdx];
					} else if (sameVnode(oldEndVnode, newEndVnode)) {
						patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
						oldEndVnode = oldCh[--oldEndIdx];
						newEndVnode = newCh[--newEndIdx];
					} else if (sameVnode(oldStartVnode, newEndVnode)) {
						// Vnode moved right
						patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
						canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
						oldStartVnode = oldCh[++oldStartIdx];
						newEndVnode = newCh[--newEndIdx];
					} else if (sameVnode(oldEndVnode, newStartVnode)) {
						// Vnode moved left
						patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
						canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
						oldEndVnode = oldCh[--oldEndIdx];
						newStartVnode = newCh[++newStartIdx];
					} else {
						if (isUndef(oldKeyToIdx)) {
							oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
						}
						idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
						if (isUndef(idxInOld)) {
							// New element
							createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
						} else {
							vnodeToMove = oldCh[idxInOld];
							if (sameVnode(vnodeToMove, newStartVnode)) {
								patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
								oldCh[idxInOld] = undefined;
								canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
							} else {
								// same key but different element. treat as new element
								createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
							}
						}
						newStartVnode = newCh[++newStartIdx];
					}
				}
				if (oldStartIdx > oldEndIdx) {
					refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
					addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
				} else if (newStartIdx > newEndIdx) {
					removeVnodes(oldCh, oldStartIdx, oldEndIdx);
				}
			}

			function checkDuplicateKeys(children) {
				var seenKeys = {};
				for (var i = 0; i < children.length; i++) {
					var vnode = children[i];
					var key = vnode.key;
					if (isDef(key)) {
						if (seenKeys[key]) {
							warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
						} else {
							seenKeys[key] = true;
						}
					}
				}
			}

			function findIdxInOld(node, oldCh, start, end) {
				for (var i = start; i < end; i++) {
					var c = oldCh[i];
					if (isDef(c) && sameVnode(node, c)) {
						return i;
					}
				}
			}

			function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
				if (oldVnode === vnode) {
					return;
				}

				if (isDef(vnode.elm) && isDef(ownerArray)) {
					// clone reused vnode
					vnode = ownerArray[index] = cloneVNode(vnode);
				}

				var elm = (vnode.elm = oldVnode.elm);

				if (isTrue(oldVnode.isAsyncPlaceholder)) {
					if (isDef(vnode.asyncFactory.resolved)) {
						hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
					} else {
						vnode.isAsyncPlaceholder = true;
					}
					return;
				}

				// reuse element for static trees.
				// note we only do this if the vnode is cloned -
				// if the new node is not cloned it means the render functions have been
				// reset by the hot-reload-api and we need to do a proper re-render.
				if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
					vnode.componentInstance = oldVnode.componentInstance;
					return;
				}

				var i;
				var data = vnode.data;
				if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
					i(oldVnode, vnode);
				}

				var oldCh = oldVnode.children;
				var ch = vnode.children;
				if (isDef(data) && isPatchable(vnode)) {
					for (i = 0; i < cbs.update.length; ++i) {
						cbs.update[i](oldVnode, vnode);
					}
					if (isDef((i = data.hook)) && isDef((i = i.update))) {
						i(oldVnode, vnode);
					}
				}
				if (isUndef(vnode.text)) {
					if (isDef(oldCh) && isDef(ch)) {
						if (oldCh !== ch) {
							updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
						}
					} else if (isDef(ch)) {
						if (false) {
						}
						if (isDef(oldVnode.text)) {
							nodeOps.setTextContent(elm, "");
						}
						addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
					} else if (isDef(oldCh)) {
						removeVnodes(oldCh, 0, oldCh.length - 1);
					} else if (isDef(oldVnode.text)) {
						nodeOps.setTextContent(elm, "");
					}
				} else if (oldVnode.text !== vnode.text) {
					nodeOps.setTextContent(elm, vnode.text);
				}
				if (isDef(data)) {
					if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {
						i(oldVnode, vnode);
					}
				}
			}

			function invokeInsertHook(vnode, queue, initial) {
				// delay insert hooks for component root nodes, invoke them after the
				// element is really inserted
				if (isTrue(initial) && isDef(vnode.parent)) {
					vnode.parent.data.pendingInsert = queue;
				} else {
					for (var i = 0; i < queue.length; ++i) {
						queue[i].data.hook.insert(queue[i]);
					}
				}
			}

			var hydrationBailed = false;
			// list of modules that can skip create hook during hydration because they
			// are already rendered on the client or has no need for initialization
			// Note: style is excluded because it relies on initial clone for future
			// deep updates (#7063).
			var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");

			// Note: this is a browser-only function so we can assume elms are DOM nodes.
			function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
				var i;
				var tag = vnode.tag;
				var data = vnode.data;
				var children = vnode.children;
				inVPre = inVPre || (data && data.pre);
				vnode.elm = elm;

				if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
					vnode.isAsyncPlaceholder = true;
					return true;
				}
				// assert node match
				if (false) {
				}
				if (isDef(data)) {
					if (isDef((i = data.hook)) && isDef((i = i.init))) {
						i(vnode, true /* hydrating */);
					}
					if (isDef((i = vnode.componentInstance))) {
						// child component. it should have hydrated its own tree.
						initComponent(vnode, insertedVnodeQueue);
						return true;
					}
				}
				if (isDef(tag)) {
					if (isDef(children)) {
						// empty element, allow client to pick up and populate children
						if (!elm.hasChildNodes()) {
							createChildren(vnode, children, insertedVnodeQueue);
						} else {
							// v-html and domProps: innerHTML
							if (isDef((i = data)) && isDef((i = i.domProps)) && isDef((i = i.innerHTML))) {
								if (i !== elm.innerHTML) {
									/* istanbul ignore if */
									if (false) {
									}
									return false;
								}
							} else {
								// iterate and compare children lists
								var childrenMatch = true;
								var childNode = elm.firstChild;
								for (var i$1 = 0; i$1 < children.length; i$1++) {
									if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
										childrenMatch = false;
										break;
									}
									childNode = childNode.nextSibling;
								}
								// if childNode is not null, it means the actual childNodes list is
								// longer than the virtual children list.
								if (!childrenMatch || childNode) {
									/* istanbul ignore if */
									if (false) {
									}
									return false;
								}
							}
						}
					}
					if (isDef(data)) {
						var fullInvoke = false;
						for (var key in data) {
							if (!isRenderedModule(key)) {
								fullInvoke = true;
								invokeCreateHooks(vnode, insertedVnodeQueue);
								break;
							}
						}
						if (!fullInvoke && data["class"]) {
							// ensure collecting deps for deep class bindings for future updates
							traverse(data["class"]);
						}
					}
				} else if (elm.data !== vnode.text) {
					elm.data = vnode.text;
				}
				return true;
			}

			function assertNodeMatch(node, vnode, inVPre) {
				if (isDef(vnode.tag)) {
					return vnode.tag.indexOf("vue-component") === 0 || (!isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase()));
				} else {
					return node.nodeType === (vnode.isComment ? 8 : 3);
				}
			}

			return function patch(oldVnode, vnode, hydrating, removeOnly) {
				if (isUndef(vnode)) {
					if (isDef(oldVnode)) {
						invokeDestroyHook(oldVnode);
					}
					return;
				}

				var isInitialPatch = false;
				var insertedVnodeQueue = [];

				if (isUndef(oldVnode)) {
					// empty mount (likely as component), create new root element
					isInitialPatch = true;
					createElm(vnode, insertedVnodeQueue);
				} else {
					var isRealElement = isDef(oldVnode.nodeType);
					if (!isRealElement && sameVnode(oldVnode, vnode)) {
						// patch existing root node
						patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
					} else {
						if (isRealElement) {
							// mounting to a real element
							// check if this is server-rendered content and if we can perform
							// a successful hydration.
							if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
								oldVnode.removeAttribute(SSR_ATTR);
								hydrating = true;
							}
							if (isTrue(hydrating)) {
								if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
									invokeInsertHook(vnode, insertedVnodeQueue, true);
									return oldVnode;
								} else if (false) {
								}
							}
							// either not server-rendered, or hydration failed.
							// create an empty node and replace it
							oldVnode = emptyNodeAt(oldVnode);
						}

						// replacing existing element
						var oldElm = oldVnode.elm;
						var parentElm = nodeOps.parentNode(oldElm);

						// create new node
						createElm(
							vnode,
							insertedVnodeQueue,
							// extremely rare edge case: do not insert if old element is in a
							// leaving transition. Only happens when combining transition +
							// keep-alive + HOCs. (#4590)
							oldElm._leaveCb ? null : parentElm,
							nodeOps.nextSibling(oldElm)
						);

						// update parent placeholder node element, recursively
						if (isDef(vnode.parent)) {
							var ancestor = vnode.parent;
							var patchable = isPatchable(vnode);
							while (ancestor) {
								for (var i = 0; i < cbs.destroy.length; ++i) {
									cbs.destroy[i](ancestor);
								}
								ancestor.elm = vnode.elm;
								if (patchable) {
									for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
										cbs.create[i$1](emptyNode, ancestor);
									}
									// #6513
									// invoke insert hooks that may have been merged by create hooks.
									// e.g. for directives that uses the "inserted" hook.
									var insert = ancestor.data.hook.insert;
									if (insert.merged) {
										// start at index 1 to avoid re-invoking component mounted hook
										for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
											insert.fns[i$2]();
										}
									}
								} else {
									registerRef(ancestor);
								}
								ancestor = ancestor.parent;
							}
						}

						// destroy old node
						if (isDef(parentElm)) {
							removeVnodes([oldVnode], 0, 0);
						} else if (isDef(oldVnode.tag)) {
							invokeDestroyHook(oldVnode);
						}
					}
				}

				invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
				return vnode.elm;
			};
		}

		/*  */

		var directives = {
			create: updateDirectives,
			update: updateDirectives,
			destroy: function unbindDirectives(vnode) {
				updateDirectives(vnode, emptyNode);
			},
		};

		function updateDirectives(oldVnode, vnode) {
			if (oldVnode.data.directives || vnode.data.directives) {
				_update(oldVnode, vnode);
			}
		}

		function _update(oldVnode, vnode) {
			var isCreate = oldVnode === emptyNode;
			var isDestroy = vnode === emptyNode;
			var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
			var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

			var dirsWithInsert = [];
			var dirsWithPostpatch = [];

			var key, oldDir, dir;
			for (key in newDirs) {
				oldDir = oldDirs[key];
				dir = newDirs[key];
				if (!oldDir) {
					// new directive, bind
					callHook$1(dir, "bind", vnode, oldVnode);
					if (dir.def && dir.def.inserted) {
						dirsWithInsert.push(dir);
					}
				} else {
					// existing directive, update
					dir.oldValue = oldDir.value;
					dir.oldArg = oldDir.arg;
					callHook$1(dir, "update", vnode, oldVnode);
					if (dir.def && dir.def.componentUpdated) {
						dirsWithPostpatch.push(dir);
					}
				}
			}

			if (dirsWithInsert.length) {
				var callInsert = function () {
					for (var i = 0; i < dirsWithInsert.length; i++) {
						callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
					}
				};
				if (isCreate) {
					mergeVNodeHook(vnode, "insert", callInsert);
				} else {
					callInsert();
				}
			}

			if (dirsWithPostpatch.length) {
				mergeVNodeHook(vnode, "postpatch", function () {
					for (var i = 0; i < dirsWithPostpatch.length; i++) {
						callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
					}
				});
			}

			if (!isCreate) {
				for (key in oldDirs) {
					if (!newDirs[key]) {
						// no longer present, unbind
						callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
					}
				}
			}
		}

		var emptyModifiers = Object.create(null);

		function normalizeDirectives$1(dirs, vm) {
			var res = Object.create(null);
			if (!dirs) {
				// $flow-disable-line
				return res;
			}
			var i, dir;
			for (i = 0; i < dirs.length; i++) {
				dir = dirs[i];
				if (!dir.modifiers) {
					// $flow-disable-line
					dir.modifiers = emptyModifiers;
				}
				res[getRawDirName(dir)] = dir;
				dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
			}
			// $flow-disable-line
			return res;
		}

		function getRawDirName(dir) {
			return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
		}

		function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
			var fn = dir.def && dir.def[hook];
			if (fn) {
				try {
					fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
				} catch (e) {
					handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
				}
			}
		}

		var baseModules = [ref, directives];

		/*  */

		function updateAttrs(oldVnode, vnode) {
			var opts = vnode.componentOptions;
			if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
				return;
			}
			if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
				return;
			}
			var key, cur, old;
			var elm = vnode.elm;
			var oldAttrs = oldVnode.data.attrs || {};
			var attrs = vnode.data.attrs || {};
			// clone observed objects, as the user probably wants to mutate it
			if (isDef(attrs.__ob__)) {
				attrs = vnode.data.attrs = extend({}, attrs);
			}

			for (key in attrs) {
				cur = attrs[key];
				old = oldAttrs[key];
				if (old !== cur) {
					setAttr(elm, key, cur, vnode.data.pre);
				}
			}
			// #4391: in IE9, setting type can reset value for input[type=radio]
			// #6666: IE/Edge forces progress value down to 1 before setting a max
			/* istanbul ignore if */
			if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
				setAttr(elm, "value", attrs.value);
			}
			for (key in oldAttrs) {
				if (isUndef(attrs[key])) {
					if (isXlink(key)) {
						elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
					} else if (!isEnumeratedAttr(key)) {
						elm.removeAttribute(key);
					}
				}
			}
		}

		function setAttr(el, key, value, isInPre) {
			if (isInPre || el.tagName.indexOf("-") > -1) {
				baseSetAttr(el, key, value);
			} else if (isBooleanAttr(key)) {
				// set attribute for blank value
				// e.g. <option disabled>Select one</option>
				if (isFalsyAttrValue(value)) {
					el.removeAttribute(key);
				} else {
					// technically allowfullscreen is a boolean attribute for <iframe>,
					// but Flash expects a value of "true" when used on <embed> tag
					value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
					el.setAttribute(key, value);
				}
			} else if (isEnumeratedAttr(key)) {
				el.setAttribute(key, convertEnumeratedValue(key, value));
			} else if (isXlink(key)) {
				if (isFalsyAttrValue(value)) {
					el.removeAttributeNS(xlinkNS, getXlinkProp(key));
				} else {
					el.setAttributeNS(xlinkNS, key, value);
				}
			} else {
				baseSetAttr(el, key, value);
			}
		}

		function baseSetAttr(el, key, value) {
			if (isFalsyAttrValue(value)) {
				el.removeAttribute(key);
			} else {
				// #7138: IE10 & 11 fires input event when setting placeholder on
				// <textarea>... block the first input event and remove the blocker
				// immediately.
				/* istanbul ignore if */
				if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
					var blocker = function (e) {
						e.stopImmediatePropagation();
						el.removeEventListener("input", blocker);
					};
					el.addEventListener("input", blocker);
					// $flow-disable-line
					el.__ieph = true; /* IE placeholder patched */
				}
				el.setAttribute(key, value);
			}
		}

		var attrs = {
			create: updateAttrs,
			update: updateAttrs,
		};

		/*  */

		function updateClass(oldVnode, vnode) {
			var el = vnode.elm;
			var data = vnode.data;
			var oldData = oldVnode.data;
			if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || (isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
				return;
			}

			var cls = genClassForVnode(vnode);

			// handle transition classes
			var transitionClass = el._transitionClasses;
			if (isDef(transitionClass)) {
				cls = concat(cls, stringifyClass(transitionClass));
			}

			// set the class
			if (cls !== el._prevClass) {
				el.setAttribute("class", cls);
				el._prevClass = cls;
			}
		}

		var klass = {
			create: updateClass,
			update: updateClass,
		};

		/*  */

		/*  */

		/*  */

		/*  */

		// in some cases, the event used has to be determined at runtime
		// so we used some reserved tokens during compile.
		var RANGE_TOKEN = "__r";
		var CHECKBOX_RADIO_TOKEN = "__c";

		/*  */

		// normalize v-model event tokens that can only be determined at runtime.
		// it's important to place the event as the first in the array because
		// the whole point is ensuring the v-model callback gets called before
		// user-attached handlers.
		function normalizeEvents(on) {
			/* istanbul ignore if */
			if (isDef(on[RANGE_TOKEN])) {
				// IE input[type=range] only supports `change` event
				var event = isIE ? "change" : "input";
				on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
				delete on[RANGE_TOKEN];
			}
			// This was originally intended to fix #4521 but no longer necessary
			// after 2.5. Keeping it for backwards compat with generated code from < 2.4
			/* istanbul ignore if */
			if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
				on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
				delete on[CHECKBOX_RADIO_TOKEN];
			}
		}

		var target$1;

		function createOnceHandler$1(event, handler, capture) {
			var _target = target$1; // save current target element in closure
			return function onceHandler() {
				var res = handler.apply(null, arguments);
				if (res !== null) {
					remove$2(event, onceHandler, capture, _target);
				}
			};
		}

		// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
		// implementation and does not fire microtasks in between event propagation, so
		// safe to exclude.
		var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

		function add$1(name, handler, capture, passive) {
			// async edge case #6566: inner click event triggers patch, event handler
			// attached to outer element during patch, and triggered again. This
			// happens because browsers fire microtask ticks between event propagation.
			// the solution is simple: we save the timestamp when a handler is attached,
			// and the handler would only fire if the event passed to it was fired
			// AFTER it was attached.
			if (useMicrotaskFix) {
				var attachedTimestamp = currentFlushTimestamp;
				var original = handler;
				handler = original._wrapper = function (e) {
					if (
						// no bubbling, should always fire.
						// this is just a safety net in case event.timeStamp is unreliable in
						// certain weird environments...
						e.target === e.currentTarget ||
						// event is fired after handler attachment
						e.timeStamp >= attachedTimestamp ||
						// bail for environments that have buggy event.timeStamp implementations
						// #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
						// #9681 QtWebEngine event.timeStamp is negative value
						e.timeStamp <= 0 ||
						// #9448 bail if event is fired in another document in a multi-page
						// electron/nw.js app, since event.timeStamp will be using a different
						// starting reference
						e.target.ownerDocument !== document
					) {
						return original.apply(this, arguments);
					}
				};
			}
			target$1.addEventListener(name, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
		}

		function remove$2(name, handler, capture, _target) {
			(_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
		}

		function updateDOMListeners(oldVnode, vnode) {
			if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
				return;
			}
			var on = vnode.data.on || {};
			var oldOn = oldVnode.data.on || {};
			target$1 = vnode.elm;
			normalizeEvents(on);
			updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
			target$1 = undefined;
		}

		var events = {
			create: updateDOMListeners,
			update: updateDOMListeners,
		};

		/*  */

		var svgContainer;

		function updateDOMProps(oldVnode, vnode) {
			if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
				return;
			}
			var key, cur;
			var elm = vnode.elm;
			var oldProps = oldVnode.data.domProps || {};
			var props = vnode.data.domProps || {};
			// clone observed objects, as the user probably wants to mutate it
			if (isDef(props.__ob__)) {
				props = vnode.data.domProps = extend({}, props);
			}

			for (key in oldProps) {
				if (!(key in props)) {
					elm[key] = "";
				}
			}

			for (key in props) {
				cur = props[key];
				// ignore children if the node has textContent or innerHTML,
				// as these will throw away existing DOM nodes and cause removal errors
				// on subsequent patches (#3360)
				if (key === "textContent" || key === "innerHTML") {
					if (vnode.children) {
						vnode.children.length = 0;
					}
					if (cur === oldProps[key]) {
						continue;
					}
					// #6601 work around Chrome version <= 55 bug where single textNode
					// replaced by innerHTML/textContent retains its parentNode property
					if (elm.childNodes.length === 1) {
						elm.removeChild(elm.childNodes[0]);
					}
				}

				if (key === "value" && elm.tagName !== "PROGRESS") {
					// store value as _value as well since
					// non-string values will be stringified
					elm._value = cur;
					// avoid resetting cursor position when value is the same
					var strCur = isUndef(cur) ? "" : String(cur);
					if (shouldUpdateValue(elm, strCur)) {
						elm.value = strCur;
					}
				} else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
					// IE doesn't support innerHTML for SVG elements
					svgContainer = svgContainer || document.createElement("div");
					svgContainer.innerHTML = "<svg>" + cur + "</svg>";
					var svg = svgContainer.firstChild;
					while (elm.firstChild) {
						elm.removeChild(elm.firstChild);
					}
					while (svg.firstChild) {
						elm.appendChild(svg.firstChild);
					}
				} else if (
					// skip the update if old and new VDOM state is the same.
					// `value` is handled separately because the DOM value may be temporarily
					// out of sync with VDOM state due to focus, composition and modifiers.
					// This  #4521 by skipping the unnecessary `checked` update.
					cur !== oldProps[key]
				) {
					// some property updates can throw
					// e.g. `value` on <progress> w/ non-finite value
					try {
						elm[key] = cur;
					} catch (e) {}
				}
			}
		}

		// check platforms/web/util/attrs.js acceptValue

		function shouldUpdateValue(elm, checkVal) {
			return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
		}

		function isNotInFocusAndDirty(elm, checkVal) {
			// return true when textbox (.number and .trim) loses focus and its value is
			// not equal to the updated value
			var notInFocus = true;
			// #6157
			// work around IE bug when accessing document.activeElement in an iframe
			try {
				notInFocus = document.activeElement !== elm;
			} catch (e) {}
			return notInFocus && elm.value !== checkVal;
		}

		function isDirtyWithModifiers(elm, newVal) {
			var value = elm.value;
			var modifiers = elm._vModifiers; // injected by v-model runtime
			if (isDef(modifiers)) {
				if (modifiers.number) {
					return toNumber(value) !== toNumber(newVal);
				}
				if (modifiers.trim) {
					return value.trim() !== newVal.trim();
				}
			}
			return value !== newVal;
		}

		var domProps = {
			create: updateDOMProps,
			update: updateDOMProps,
		};

		/*  */

		var parseStyleText = cached(function (cssText) {
			var res = {};
			var listDelimiter = /;(?![^(]*\))/g;
			var propertyDelimiter = /:(.+)/;
			cssText.split(listDelimiter).forEach(function (item) {
				if (item) {
					var tmp = item.split(propertyDelimiter);
					tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
				}
			});
			return res;
		});

		// merge static and dynamic style data on the same vnode
		function normalizeStyleData(data) {
			var style = normalizeStyleBinding(data.style);
			// static style is pre-processed into an object during compilation
			// and is always a fresh object, so it's safe to merge into it
			return data.staticStyle ? extend(data.staticStyle, style) : style;
		}

		// normalize possible array / string values into Object
		function normalizeStyleBinding(bindingStyle) {
			if (Array.isArray(bindingStyle)) {
				return toObject(bindingStyle);
			}
			if (typeof bindingStyle === "string") {
				return parseStyleText(bindingStyle);
			}
			return bindingStyle;
		}

		/**
		 * parent component style should be after child's
		 * so that parent component's style could override it
		 */
		function getStyle(vnode, checkChild) {
			var res = {};
			var styleData;

			if (checkChild) {
				var childNode = vnode;
				while (childNode.componentInstance) {
					childNode = childNode.componentInstance._vnode;
					if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
						extend(res, styleData);
					}
				}
			}

			if ((styleData = normalizeStyleData(vnode.data))) {
				extend(res, styleData);
			}

			var parentNode = vnode;
			while ((parentNode = parentNode.parent)) {
				if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
					extend(res, styleData);
				}
			}
			return res;
		}

		/*  */

		var cssVarRE = /^--/;
		var importantRE = /\s*!important$/;
		var setProp = function (el, name, val) {
			/* istanbul ignore if */
			if (cssVarRE.test(name)) {
				el.style.setProperty(name, val);
			} else if (importantRE.test(val)) {
				el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
			} else {
				var normalizedName = normalize(name);
				if (Array.isArray(val)) {
					// Support values array created by autoprefixer, e.g.
					// {display: ["-webkit-box", "-ms-flexbox", "flex"]}
					// Set them one by one, and the browser will only set those it can recognize
					for (var i = 0, len = val.length; i < len; i++) {
						el.style[normalizedName] = val[i];
					}
				} else {
					el.style[normalizedName] = val;
				}
			}
		};

		var vendorNames = ["Webkit", "Moz", "ms"];

		var emptyStyle;
		var normalize = cached(function (prop) {
			emptyStyle = emptyStyle || document.createElement("div").style;
			prop = camelize(prop);
			if (prop !== "filter" && prop in emptyStyle) {
				return prop;
			}
			var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
			for (var i = 0; i < vendorNames.length; i++) {
				var name = vendorNames[i] + capName;
				if (name in emptyStyle) {
					return name;
				}
			}
		});

		function updateStyle(oldVnode, vnode) {
			var data = vnode.data;
			var oldData = oldVnode.data;

			if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
				return;
			}

			var cur, name;
			var el = vnode.elm;
			var oldStaticStyle = oldData.staticStyle;
			var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

			// if static style exists, stylebinding already merged into it when doing normalizeStyleData
			var oldStyle = oldStaticStyle || oldStyleBinding;

			var style = normalizeStyleBinding(vnode.data.style) || {};

			// store normalized style under a different key for next diff
			// make sure to clone it if it's reactive, since the user likely wants
			// to mutate it.
			vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

			var newStyle = getStyle(vnode, true);

			for (name in oldStyle) {
				if (isUndef(newStyle[name])) {
					setProp(el, name, "");
				}
			}
			for (name in newStyle) {
				cur = newStyle[name];
				if (cur !== oldStyle[name]) {
					// ie9 setting to null has no effect, must use empty string
					setProp(el, name, cur == null ? "" : cur);
				}
			}
		}

		var style = {
			create: updateStyle,
			update: updateStyle,
		};

		/*  */

		var whitespaceRE = /\s+/;

		/**
		 * Add class with compatibility for SVG since classList is not supported on
		 * SVG elements in IE
		 */
		function addClass(el, cls) {
			/* istanbul ignore if */
			if (!cls || !(cls = cls.trim())) {
				return;
			}

			/* istanbul ignore else */
			if (el.classList) {
				if (cls.indexOf(" ") > -1) {
					cls.split(whitespaceRE).forEach(function (c) {
						return el.classList.add(c);
					});
				} else {
					el.classList.add(cls);
				}
			} else {
				var cur = " " + (el.getAttribute("class") || "") + " ";
				if (cur.indexOf(" " + cls + " ") < 0) {
					el.setAttribute("class", (cur + cls).trim());
				}
			}
		}

		/**
		 * Remove class with compatibility for SVG since classList is not supported on
		 * SVG elements in IE
		 */
		function removeClass(el, cls) {
			/* istanbul ignore if */
			if (!cls || !(cls = cls.trim())) {
				return;
			}

			/* istanbul ignore else */
			if (el.classList) {
				if (cls.indexOf(" ") > -1) {
					cls.split(whitespaceRE).forEach(function (c) {
						return el.classList.remove(c);
					});
				} else {
					el.classList.remove(cls);
				}
				if (!el.classList.length) {
					el.removeAttribute("class");
				}
			} else {
				var cur = " " + (el.getAttribute("class") || "") + " ";
				var tar = " " + cls + " ";
				while (cur.indexOf(tar) >= 0) {
					cur = cur.replace(tar, " ");
				}
				cur = cur.trim();
				if (cur) {
					el.setAttribute("class", cur);
				} else {
					el.removeAttribute("class");
				}
			}
		}

		/*  */

		function resolveTransition(def$$1) {
			if (!def$$1) {
				return;
			}
			/* istanbul ignore else */
			if (typeof def$$1 === "object") {
				var res = {};
				if (def$$1.css !== false) {
					extend(res, autoCssTransition(def$$1.name || "v"));
				}
				extend(res, def$$1);
				return res;
			} else if (typeof def$$1 === "string") {
				return autoCssTransition(def$$1);
			}
		}

		var autoCssTransition = cached(function (name) {
			return {
				enterClass: name + "-enter",
				enterToClass: name + "-enter-to",
				enterActiveClass: name + "-enter-active",
				leaveClass: name + "-leave",
				leaveToClass: name + "-leave-to",
				leaveActiveClass: name + "-leave-active",
			};
		});

		var hasTransition = inBrowser && !isIE9;
		var TRANSITION = "transition";
		var ANIMATION = "animation";

		// Transition property/event sniffing
		var transitionProp = "transition";
		var transitionEndEvent = "transitionend";
		var animationProp = "animation";
		var animationEndEvent = "animationend";
		if (hasTransition) {
			/* istanbul ignore if */
			if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
				transitionProp = "WebkitTransition";
				transitionEndEvent = "webkitTransitionEnd";
			}
			if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
				animationProp = "WebkitAnimation";
				animationEndEvent = "webkitAnimationEnd";
			}
		}

		// binding to window is necessary to make hot reload work in IE in strict mode
		var raf = inBrowser
			? window.requestAnimationFrame
				? window.requestAnimationFrame.bind(window)
				: setTimeout
			: /* istanbul ignore next */ function (fn) {
					return fn();
			  };

		function nextFrame(fn) {
			raf(function () {
				raf(fn);
			});
		}

		function addTransitionClass(el, cls) {
			var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
			if (transitionClasses.indexOf(cls) < 0) {
				transitionClasses.push(cls);
				addClass(el, cls);
			}
		}

		function removeTransitionClass(el, cls) {
			if (el._transitionClasses) {
				remove(el._transitionClasses, cls);
			}
			removeClass(el, cls);
		}

		function whenTransitionEnds(el, expectedType, cb) {
			var ref = getTransitionInfo(el, expectedType);
			var type = ref.type;
			var timeout = ref.timeout;
			var propCount = ref.propCount;
			if (!type) {
				return cb();
			}
			var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
			var ended = 0;
			var end = function () {
				el.removeEventListener(event, onEnd);
				cb();
			};
			var onEnd = function (e) {
				if (e.target === el) {
					if (++ended >= propCount) {
						end();
					}
				}
			};
			setTimeout(function () {
				if (ended < propCount) {
					end();
				}
			}, timeout + 1);
			el.addEventListener(event, onEnd);
		}

		var transformRE = /\b(transform|all)(,|$)/;

		function getTransitionInfo(el, expectedType) {
			var styles = window.getComputedStyle(el);
			// JSDOM may return undefined for transition properties
			var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
			var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
			var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
			var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
			var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
			var animationTimeout = getTimeout(animationDelays, animationDurations);

			var type;
			var timeout = 0;
			var propCount = 0;
			/* istanbul ignore if */
			if (expectedType === TRANSITION) {
				if (transitionTimeout > 0) {
					type = TRANSITION;
					timeout = transitionTimeout;
					propCount = transitionDurations.length;
				}
			} else if (expectedType === ANIMATION) {
				if (animationTimeout > 0) {
					type = ANIMATION;
					timeout = animationTimeout;
					propCount = animationDurations.length;
				}
			} else {
				timeout = Math.max(transitionTimeout, animationTimeout);
				type = timeout > 0 ? (transitionTimeout > animationTimeout ? TRANSITION : ANIMATION) : null;
				propCount = type ? (type === TRANSITION ? transitionDurations.length : animationDurations.length) : 0;
			}
			var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
			return {
				type: type,
				timeout: timeout,
				propCount: propCount,
				hasTransform: hasTransform,
			};
		}

		function getTimeout(delays, durations) {
			/* istanbul ignore next */
			while (delays.length < durations.length) {
				delays = delays.concat(delays);
			}

			return Math.max.apply(
				null,
				durations.map(function (d, i) {
					return toMs(d) + toMs(delays[i]);
				})
			);
		}

		// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
		// in a locale-dependent way, using a comma instead of a dot.
		// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
		// as a floor function) causing unexpected behaviors
		function toMs(s) {
			return Number(s.slice(0, -1).replace(",", ".")) * 1000;
		}

		/*  */

		function enter(vnode, toggleDisplay) {
			var el = vnode.elm;

			// call leave callback now
			if (isDef(el._leaveCb)) {
				el._leaveCb.cancelled = true;
				el._leaveCb();
			}

			var data = resolveTransition(vnode.data.transition);
			if (isUndef(data)) {
				return;
			}

			/* istanbul ignore if */
			if (isDef(el._enterCb) || el.nodeType !== 1) {
				return;
			}

			var css = data.css;
			var type = data.type;
			var enterClass = data.enterClass;
			var enterToClass = data.enterToClass;
			var enterActiveClass = data.enterActiveClass;
			var appearClass = data.appearClass;
			var appearToClass = data.appearToClass;
			var appearActiveClass = data.appearActiveClass;
			var beforeEnter = data.beforeEnter;
			var enter = data.enter;
			var afterEnter = data.afterEnter;
			var enterCancelled = data.enterCancelled;
			var beforeAppear = data.beforeAppear;
			var appear = data.appear;
			var afterAppear = data.afterAppear;
			var appearCancelled = data.appearCancelled;
			var duration = data.duration;

			// activeInstance will always be the <transition> component managing this
			// transition. One edge case to check is when the <transition> is placed
			// as the root node of a child component. In that case we need to check
			// <transition>'s parent for appear check.
			var context = activeInstance;
			var transitionNode = activeInstance.$vnode;
			while (transitionNode && transitionNode.parent) {
				context = transitionNode.context;
				transitionNode = transitionNode.parent;
			}

			var isAppear = !context._isMounted || !vnode.isRootInsert;

			if (isAppear && !appear && appear !== "") {
				return;
			}

			var startClass = isAppear && appearClass ? appearClass : enterClass;
			var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
			var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

			var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
			var enterHook = isAppear ? (typeof appear === "function" ? appear : enter) : enter;
			var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
			var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

			var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

			if (false) {
			}

			var expectsCSS = css !== false && !isIE9;
			var userWantsControl = getHookArgumentsLength(enterHook);

			var cb = (el._enterCb = once(function () {
				if (expectsCSS) {
					removeTransitionClass(el, toClass);
					removeTransitionClass(el, activeClass);
				}
				if (cb.cancelled) {
					if (expectsCSS) {
						removeTransitionClass(el, startClass);
					}
					enterCancelledHook && enterCancelledHook(el);
				} else {
					afterEnterHook && afterEnterHook(el);
				}
				el._enterCb = null;
			}));

			if (!vnode.data.show) {
				// remove pending leave element on enter by injecting an insert hook
				mergeVNodeHook(vnode, "insert", function () {
					var parent = el.parentNode;
					var pendingNode = parent && parent._pending && parent._pending[vnode.key];
					if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
						pendingNode.elm._leaveCb();
					}
					enterHook && enterHook(el, cb);
				});
			}

			// start enter transition
			beforeEnterHook && beforeEnterHook(el);
			if (expectsCSS) {
				addTransitionClass(el, startClass);
				addTransitionClass(el, activeClass);
				nextFrame(function () {
					removeTransitionClass(el, startClass);
					if (!cb.cancelled) {
						addTransitionClass(el, toClass);
						if (!userWantsControl) {
							if (isValidDuration(explicitEnterDuration)) {
								setTimeout(cb, explicitEnterDuration);
							} else {
								whenTransitionEnds(el, type, cb);
							}
						}
					}
				});
			}

			if (vnode.data.show) {
				toggleDisplay && toggleDisplay();
				enterHook && enterHook(el, cb);
			}

			if (!expectsCSS && !userWantsControl) {
				cb();
			}
		}

		function leave(vnode, rm) {
			var el = vnode.elm;

			// call enter callback now
			if (isDef(el._enterCb)) {
				el._enterCb.cancelled = true;
				el._enterCb();
			}

			var data = resolveTransition(vnode.data.transition);
			if (isUndef(data) || el.nodeType !== 1) {
				return rm();
			}

			/* istanbul ignore if */
			if (isDef(el._leaveCb)) {
				return;
			}

			var css = data.css;
			var type = data.type;
			var leaveClass = data.leaveClass;
			var leaveToClass = data.leaveToClass;
			var leaveActiveClass = data.leaveActiveClass;
			var beforeLeave = data.beforeLeave;
			var leave = data.leave;
			var afterLeave = data.afterLeave;
			var leaveCancelled = data.leaveCancelled;
			var delayLeave = data.delayLeave;
			var duration = data.duration;

			var expectsCSS = css !== false && !isIE9;
			var userWantsControl = getHookArgumentsLength(leave);

			var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

			if (false) {
			}

			var cb = (el._leaveCb = once(function () {
				if (el.parentNode && el.parentNode._pending) {
					el.parentNode._pending[vnode.key] = null;
				}
				if (expectsCSS) {
					removeTransitionClass(el, leaveToClass);
					removeTransitionClass(el, leaveActiveClass);
				}
				if (cb.cancelled) {
					if (expectsCSS) {
						removeTransitionClass(el, leaveClass);
					}
					leaveCancelled && leaveCancelled(el);
				} else {
					rm();
					afterLeave && afterLeave(el);
				}
				el._leaveCb = null;
			}));

			if (delayLeave) {
				delayLeave(performLeave);
			} else {
				performLeave();
			}

			function performLeave() {
				// the delayed leave may have already been cancelled
				if (cb.cancelled) {
					return;
				}
				// record leaving element
				if (!vnode.data.show && el.parentNode) {
					(el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
				}
				beforeLeave && beforeLeave(el);
				if (expectsCSS) {
					addTransitionClass(el, leaveClass);
					addTransitionClass(el, leaveActiveClass);
					nextFrame(function () {
						removeTransitionClass(el, leaveClass);
						if (!cb.cancelled) {
							addTransitionClass(el, leaveToClass);
							if (!userWantsControl) {
								if (isValidDuration(explicitLeaveDuration)) {
									setTimeout(cb, explicitLeaveDuration);
								} else {
									whenTransitionEnds(el, type, cb);
								}
							}
						}
					});
				}
				leave && leave(el, cb);
				if (!expectsCSS && !userWantsControl) {
					cb();
				}
			}
		}

		// only used in dev mode
		function checkDuration(val, name, vnode) {
			if (typeof val !== "number") {
				warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
			} else if (isNaN(val)) {
				warn("<transition> explicit " + name + " duration is NaN - " + "the duration expression might be incorrect.", vnode.context);
			}
		}

		function isValidDuration(val) {
			return typeof val === "number" && !isNaN(val);
		}

		/**
		 * Normalize a transition hook's argument length. The hook may be:
		 * - a merged hook (invoker) with the original in .fns
		 * - a wrapped component method (check ._length)
		 * - a plain function (.length)
		 */
		function getHookArgumentsLength(fn) {
			if (isUndef(fn)) {
				return false;
			}
			var invokerFns = fn.fns;
			if (isDef(invokerFns)) {
				// invoker
				return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
			} else {
				return (fn._length || fn.length) > 1;
			}
		}

		function _enter(_, vnode) {
			if (vnode.data.show !== true) {
				enter(vnode);
			}
		}

		var transition = inBrowser
			? {
					create: _enter,
					activate: _enter,
					remove: function remove$$1(vnode, rm) {
						/* istanbul ignore else */
						if (vnode.data.show !== true) {
							leave(vnode, rm);
						} else {
							rm();
						}
					},
			  }
			: {};

		var platformModules = [attrs, klass, events, domProps, style, transition];

		/*  */

		// the directive module should be applied last, after all
		// built-in modules have been applied.
		var modules = platformModules.concat(baseModules);

		var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

		/**
		 * Not type checking this file because flow doesn't like attaching
		 * properties to Elements.
		 */

		/* istanbul ignore if */
		if (isIE9) {
			// http://www.matts411.com/post/internet-explorer-9-oninput/
			document.addEventListener("selectionchange", function () {
				var el = document.activeElement;
				if (el && el.vmodel) {
					trigger(el, "input");
				}
			});
		}

		var directive = {
			inserted: function inserted(el, binding, vnode, oldVnode) {
				if (vnode.tag === "select") {
					// #6903
					if (oldVnode.elm && !oldVnode.elm._vOptions) {
						mergeVNodeHook(vnode, "postpatch", function () {
							directive.componentUpdated(el, binding, vnode);
						});
					} else {
						setSelected(el, binding, vnode.context);
					}
					el._vOptions = [].map.call(el.options, getValue);
				} else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
					el._vModifiers = binding.modifiers;
					if (!binding.modifiers.lazy) {
						el.addEventListener("compositionstart", onCompositionStart);
						el.addEventListener("compositionend", onCompositionEnd);
						// Safari < 10.2 & UIWebView doesn't fire compositionend when
						// switching focus before confirming composition choice
						// this also fixes the issue where some browsers e.g. iOS Chrome
						// fires "change" instead of "input" on autocomplete.
						el.addEventListener("change", onCompositionEnd);
						/* istanbul ignore if */
						if (isIE9) {
							el.vmodel = true;
						}
					}
				}
			},

			componentUpdated: function componentUpdated(el, binding, vnode) {
				if (vnode.tag === "select") {
					setSelected(el, binding, vnode.context);
					// in case the options rendered by v-for have changed,
					// it's possible that the value is out-of-sync with the rendered options.
					// detect such cases and filter out values that no longer has a matching
					// option in the DOM.
					var prevOptions = el._vOptions;
					var curOptions = (el._vOptions = [].map.call(el.options, getValue));
					if (
						curOptions.some(function (o, i) {
							return !looseEqual(o, prevOptions[i]);
						})
					) {
						// trigger change event if
						// no matching option found for at least one value
						var needReset = el.multiple
							? binding.value.some(function (v) {
									return hasNoMatchingOption(v, curOptions);
							  })
							: binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
						if (needReset) {
							trigger(el, "change");
						}
					}
				}
			},
		};

		function setSelected(el, binding, vm) {
			actuallySetSelected(el, binding, vm);
			/* istanbul ignore if */
			if (isIE || isEdge) {
				setTimeout(function () {
					actuallySetSelected(el, binding, vm);
				}, 0);
			}
		}

		function actuallySetSelected(el, binding, vm) {
			var value = binding.value;
			var isMultiple = el.multiple;
			if (isMultiple && !Array.isArray(value)) {
				false && 0;
				return;
			}
			var selected, option;
			for (var i = 0, l = el.options.length; i < l; i++) {
				option = el.options[i];
				if (isMultiple) {
					selected = looseIndexOf(value, getValue(option)) > -1;
					if (option.selected !== selected) {
						option.selected = selected;
					}
				} else {
					if (looseEqual(getValue(option), value)) {
						if (el.selectedIndex !== i) {
							el.selectedIndex = i;
						}
						return;
					}
				}
			}
			if (!isMultiple) {
				el.selectedIndex = -1;
			}
		}

		function hasNoMatchingOption(value, options) {
			return options.every(function (o) {
				return !looseEqual(o, value);
			});
		}

		function getValue(option) {
			return "_value" in option ? option._value : option.value;
		}

		function onCompositionStart(e) {
			e.target.composing = true;
		}

		function onCompositionEnd(e) {
			// prevent triggering an input event for no reason
			if (!e.target.composing) {
				return;
			}
			e.target.composing = false;
			trigger(e.target, "input");
		}

		function trigger(el, type) {
			var e = document.createEvent("HTMLEvents");
			e.initEvent(type, true, true);
			el.dispatchEvent(e);
		}

		/*  */

		// recursively search for possible transition defined inside the component root
		function locateNode(vnode) {
			return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
		}

		var show = {
			bind: function bind(el, ref, vnode) {
				var value = ref.value;

				vnode = locateNode(vnode);
				var transition$$1 = vnode.data && vnode.data.transition;
				var originalDisplay = (el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display);
				if (value && transition$$1) {
					vnode.data.show = true;
					enter(vnode, function () {
						el.style.display = originalDisplay;
					});
				} else {
					el.style.display = value ? originalDisplay : "none";
				}
			},

			update: function update(el, ref, vnode) {
				var value = ref.value;
				var oldValue = ref.oldValue;

				/* istanbul ignore if */
				if (!value === !oldValue) {
					return;
				}
				vnode = locateNode(vnode);
				var transition$$1 = vnode.data && vnode.data.transition;
				if (transition$$1) {
					vnode.data.show = true;
					if (value) {
						enter(vnode, function () {
							el.style.display = el.__vOriginalDisplay;
						});
					} else {
						leave(vnode, function () {
							el.style.display = "none";
						});
					}
				} else {
					el.style.display = value ? el.__vOriginalDisplay : "none";
				}
			},

			unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
				if (!isDestroy) {
					el.style.display = el.__vOriginalDisplay;
				}
			},
		};

		var platformDirectives = {
			model: directive,
			show: show,
		};

		/*  */

		var transitionProps = {
			name: String,
			appear: Boolean,
			css: Boolean,
			mode: String,
			type: String,
			enterClass: String,
			leaveClass: String,
			enterToClass: String,
			leaveToClass: String,
			enterActiveClass: String,
			leaveActiveClass: String,
			appearClass: String,
			appearActiveClass: String,
			appearToClass: String,
			duration: [Number, String, Object],
		};

		// in case the child is also an abstract component, e.g. <keep-alive>
		// we want to recursively retrieve the real component to be rendered
		function getRealChild(vnode) {
			var compOptions = vnode && vnode.componentOptions;
			if (compOptions && compOptions.Ctor.options.abstract) {
				return getRealChild(getFirstComponentChild(compOptions.children));
			} else {
				return vnode;
			}
		}

		function extractTransitionData(comp) {
			var data = {};
			var options = comp.$options;
			// props
			for (var key in options.propsData) {
				data[key] = comp[key];
			}
			// events.
			// extract listeners and pass them directly to the transition methods
			var listeners = options._parentListeners;
			for (var key$1 in listeners) {
				data[camelize(key$1)] = listeners[key$1];
			}
			return data;
		}

		function placeholder(h, rawChild) {
			if (/\d-keep-alive$/.test(rawChild.tag)) {
				return h("keep-alive", {
					props: rawChild.componentOptions.propsData,
				});
			}
		}

		function hasParentTransition(vnode) {
			while ((vnode = vnode.parent)) {
				if (vnode.data.transition) {
					return true;
				}
			}
		}

		function isSameChild(child, oldChild) {
			return oldChild.key === child.key && oldChild.tag === child.tag;
		}

		var isNotTextNode = function (c) {
			return c.tag || isAsyncPlaceholder(c);
		};

		var isVShowDirective = function (d) {
			return d.name === "show";
		};

		var Transition = {
			name: "transition",
			props: transitionProps,
			abstract: true,

			render: function render(h) {
				var this$1 = this;

				var children = this.$slots.default;
				if (!children) {
					return;
				}

				// filter out text nodes (possible whitespaces)
				children = children.filter(isNotTextNode);
				/* istanbul ignore if */
				if (!children.length) {
					return;
				}

				// warn multiple elements
				if (false) {
				}

				var mode = this.mode;

				// warn invalid mode
				if (false) {
				}

				var rawChild = children[0];

				// if this is a component root node and the component's
				// parent container node also has transition, skip.
				if (hasParentTransition(this.$vnode)) {
					return rawChild;
				}

				// apply transition data to child
				// use getRealChild() to ignore abstract components e.g. keep-alive
				var child = getRealChild(rawChild);
				/* istanbul ignore if */
				if (!child) {
					return rawChild;
				}

				if (this._leaving) {
					return placeholder(h, rawChild);
				}

				// ensure a key that is unique to the vnode type and to this transition
				// component instance. This key will be used to remove pending leaving nodes
				// during entering.
				var id = "__transition-" + this._uid + "-";
				child.key = child.key == null ? (child.isComment ? id + "comment" : id + child.tag) : isPrimitive(child.key) ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key) : child.key;

				var data = ((child.data || (child.data = {})).transition = extractTransitionData(this));
				var oldRawChild = this._vnode;
				var oldChild = getRealChild(oldRawChild);

				// mark v-show
				// so that the transition module can hand over the control to the directive
				if (child.data.directives && child.data.directives.some(isVShowDirective)) {
					child.data.show = true;
				}

				if (
					oldChild &&
					oldChild.data &&
					!isSameChild(child, oldChild) &&
					!isAsyncPlaceholder(oldChild) &&
					// #6687 component root is a comment node
					!(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
				) {
					// replace old child transition data with fresh one
					// important for dynamic transitions!
					var oldData = (oldChild.data.transition = extend({}, data));
					// handle transition mode
					if (mode === "out-in") {
						// return placeholder node and queue update when leave finishes
						this._leaving = true;
						mergeVNodeHook(oldData, "afterLeave", function () {
							this$1._leaving = false;
							this$1.$forceUpdate();
						});
						return placeholder(h, rawChild);
					} else if (mode === "in-out") {
						if (isAsyncPlaceholder(child)) {
							return oldRawChild;
						}
						var delayedLeave;
						var performLeave = function () {
							delayedLeave();
						};
						mergeVNodeHook(data, "afterEnter", performLeave);
						mergeVNodeHook(data, "enterCancelled", performLeave);
						mergeVNodeHook(oldData, "delayLeave", function (leave) {
							delayedLeave = leave;
						});
					}
				}

				return rawChild;
			},
		};

		/*  */

		var props = extend(
			{
				tag: String,
				moveClass: String,
			},
			transitionProps
		);

		delete props.mode;

		var TransitionGroup = {
			props: props,

			beforeMount: function beforeMount() {
				var this$1 = this;

				var update = this._update;
				this._update = function (vnode, hydrating) {
					var restoreActiveInstance = setActiveInstance(this$1);
					// force removing pass
					this$1.__patch__(
						this$1._vnode,
						this$1.kept,
						false, // hydrating
						true // removeOnly (!important, avoids unnecessary moves)
					);
					this$1._vnode = this$1.kept;
					restoreActiveInstance();
					update.call(this$1, vnode, hydrating);
				};
			},

			render: function render(h) {
				var tag = this.tag || this.$vnode.data.tag || "span";
				var map = Object.create(null);
				var prevChildren = (this.prevChildren = this.children);
				var rawChildren = this.$slots.default || [];
				var children = (this.children = []);
				var transitionData = extractTransitionData(this);

				for (var i = 0; i < rawChildren.length; i++) {
					var c = rawChildren[i];
					if (c.tag) {
						if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
							children.push(c);
							map[c.key] = c;
							(c.data || (c.data = {})).transition = transitionData;
						} else if (false) {
							var name, opts;
						}
					}
				}

				if (prevChildren) {
					var kept = [];
					var removed = [];
					for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
						var c$1 = prevChildren[i$1];
						c$1.data.transition = transitionData;
						c$1.data.pos = c$1.elm.getBoundingClientRect();
						if (map[c$1.key]) {
							kept.push(c$1);
						} else {
							removed.push(c$1);
						}
					}
					this.kept = h(tag, null, kept);
					this.removed = removed;
				}

				return h(tag, null, children);
			},

			updated: function updated() {
				var children = this.prevChildren;
				var moveClass = this.moveClass || (this.name || "v") + "-move";
				if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
					return;
				}

				// we divide the work into three loops to avoid mixing DOM reads and writes
				// in each iteration - which helps prevent layout thrashing.
				children.forEach(callPendingCbs);
				children.forEach(recordPosition);
				children.forEach(applyTranslation);

				// force reflow to put everything in position
				// assign to this to avoid being removed in tree-shaking
				// $flow-disable-line
				this._reflow = document.body.offsetHeight;

				children.forEach(function (c) {
					if (c.data.moved) {
						var el = c.elm;
						var s = el.style;
						addTransitionClass(el, moveClass);
						s.transform = s.WebkitTransform = s.transitionDuration = "";
						el.addEventListener(
							transitionEndEvent,
							(el._moveCb = function cb(e) {
								if (e && e.target !== el) {
									return;
								}
								if (!e || /transform$/.test(e.propertyName)) {
									el.removeEventListener(transitionEndEvent, cb);
									el._moveCb = null;
									removeTransitionClass(el, moveClass);
								}
							})
						);
					}
				});
			},

			methods: {
				hasMove: function hasMove(el, moveClass) {
					/* istanbul ignore if */
					if (!hasTransition) {
						return false;
					}
					/* istanbul ignore if */
					if (this._hasMove) {
						return this._hasMove;
					}
					// Detect whether an element with the move class applied has
					// CSS transitions. Since the element may be inside an entering
					// transition at this very moment, we make a clone of it and remove
					// all other transition classes applied to ensure only the move class
					// is applied.
					var clone = el.cloneNode();
					if (el._transitionClasses) {
						el._transitionClasses.forEach(function (cls) {
							removeClass(clone, cls);
						});
					}
					addClass(clone, moveClass);
					clone.style.display = "none";
					this.$el.appendChild(clone);
					var info = getTransitionInfo(clone);
					this.$el.removeChild(clone);
					return (this._hasMove = info.hasTransform);
				},
			},
		};

		function callPendingCbs(c) {
			/* istanbul ignore if */
			if (c.elm._moveCb) {
				c.elm._moveCb();
			}
			/* istanbul ignore if */
			if (c.elm._enterCb) {
				c.elm._enterCb();
			}
		}

		function recordPosition(c) {
			c.data.newPos = c.elm.getBoundingClientRect();
		}

		function applyTranslation(c) {
			var oldPos = c.data.pos;
			var newPos = c.data.newPos;
			var dx = oldPos.left - newPos.left;
			var dy = oldPos.top - newPos.top;
			if (dx || dy) {
				c.data.moved = true;
				var s = c.elm.style;
				s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
				s.transitionDuration = "0s";
			}
		}

		var platformComponents = {
			Transition: Transition,
			TransitionGroup: TransitionGroup,
		};

		/*  */

		// install platform specific utils
		Vue.config.mustUseProp = mustUseProp;
		Vue.config.isReservedTag = isReservedTag;
		Vue.config.isReservedAttr = isReservedAttr;
		Vue.config.getTagNamespace = getTagNamespace;
		Vue.config.isUnknownElement = isUnknownElement;

		// install platform runtime directives & components
		extend(Vue.options.directives, platformDirectives);
		extend(Vue.options.components, platformComponents);

		// install platform patch function
		Vue.prototype.__patch__ = inBrowser ? patch : noop;

		// public mount method
		Vue.prototype.$mount = function (el, hydrating) {
			el = el && inBrowser ? query(el) : undefined;
			return mountComponent(this, el, hydrating);
		};

		// devtools global hook
		/* istanbul ignore next */
		if (inBrowser) {
			setTimeout(function () {
				if (config.devtools) {
					if (devtools) {
						devtools.emit("init", Vue);
					} else if (false) {
					}
				}
				if (false) {
				}
			}, 0);
		}

		/*  */

		/* harmony default export */ const vue_runtime_esm = Vue;

		// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
		var lazysizes = __webpack_require__(90);
		// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/rias/ls.rias.js
		var ls_rias = __webpack_require__(35);
		// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/object-fit/ls.object-fit.js
		var ls_object_fit = __webpack_require__(507);
		// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/blur-up/ls.blur-up.js
		var ls_blur_up = __webpack_require__(740);
		// EXTERNAL MODULE: ./node_modules/feather-icons/dist/feather.js
		var feather = __webpack_require__(508);
		var feather_default = /*#__PURE__*/ __webpack_require__.n(feather); // CONCATENATED MODULE: ./src/javascripts/constants.js
		/**
		 * @typedef {Object} Breakpoint
		 * @param {number} min
		 * @param {number} max
		 * @param {string} name
		 * @param {number} order
		 */

		/** @enum {Breakpoint} */
		const Breakpoints = {
			xs: {
				min: 0,
				max: 575,
				name: "xs",
				order: 1,
			},
			// Extra small devices (portrait phones, less than 576px)
			sm: {
				min: 576,
				max: 767,
				name: "sm",
				order: 2,
			},
			// Small devices (landscape phones, 576px and up)
			md: {
				min: 768,
				max: 991,
				name: "md",
				order: 3,
			},
			// Medium devices (tablets, 768px and up)
			lg: {
				min: 992,
				max: 1199,
				name: "lg",
				order: 4,
			},
			// Large devices (desktops, 992px and up)
			xl: {
				min: 1200,
				max: Number.POSITIVE_INFINITY,
				name: "xl",
				order: 5,
			}, // Extra large devices (large desktops, 1200px and up)
		}; // CONCATENATED MODULE: ./src/javascripts/ThemeBase.js
		class ThemeBase {
			constructor() {
				this.translations = void 0;
				this.moneyFormat = void 0;
				this.breakpoint = void 0;

				this.formatMoney = (cents, format) => {
					var moneyFormat = this.moneyFormat;

					if (typeof cents === "string") {
						cents = cents.replace(".", "");
					}

					var value = "";
					var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
					var formatString = format || moneyFormat;

					function formatWithDelimiters(number, precision, thousands, decimal) {
						if (precision === null || precision === undefined) {
							precision = 2;
						}

						thousands = thousands || ",";
						decimal = decimal || ".";

						if (isNaN(number) || number == null) {
							return 0;
						}

						number = (number / 100.0).toFixed(precision);
						var parts = number.split(".");
						var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands);
						var centsAmount = parts[1] ? decimal + parts[1] : "";
						return dollarsAmount + centsAmount;
					}

					switch (formatString.match(placeholderRegex)[1]) {
						case "amount":
							value = formatWithDelimiters(cents, 2);
							break;

						case "amount_no_decimals":
							value = formatWithDelimiters(cents, 0);
							break;

						case "amount_with_comma_separator":
							value = formatWithDelimiters(cents, 2, ".", ",");
							break;

						case "amount_no_decimals_with_comma_separator":
							value = formatWithDelimiters(cents, 0, ".", ",");
							break;

						case "amount_no_decimals_with_space_separator":
							value = formatWithDelimiters(cents, 0, " ");
							break;
					}

					return `<span class="money"><span class="sr-only">${this.translations.cart_title} ${this.translations.cart_subtotal}</span>` + formatString.replace(placeholderRegex, value) + "</span>";
				};

				this.getWindowWidth = () => {
					return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				};

				this.getBreakpoint = (width = undefined) => {
					const w = width === null || width === undefined ? this.getWindowWidth() : width;
					let breakpoint;
					Object.values(Breakpoints).forEach((b) => {
						if (w >= b.min && w <= b.max) {
							breakpoint = b;
						}
					});
					return breakpoint;
				};

				this.loadIcons = (element = null) => {};

				this.loadDrawers = () => {};

				this.updateCartDrawer = (cart) => {};

				this.loadYoutubeApi = () => {
					return;
				};

				this.loadVimeoApi = () => {
					return;
				};

				this.loadGoogleMapApi = (apiKey) => {
					return;
				};

				this.createScript = (id, src) => {
					return;
				};

				this.registerComponent = (component) => {};
			}
		} // CONCATENATED MODULE: ./src/javascripts/Component.js
		class Component {
			/**
			 * Generic component, inherited class will be called to receive things like resize events.
			 *
			 * @param {import('./ThemeBase').default} theme
			 * @param {HTMLElement} element
			 */
			constructor(theme, element) {
				this.onWindowResizeRaw = ({ width }) => {};

				this.onWindowResize = ({ width, oldWidth, breakpoint }) => {};

				this.onWindowResizeBreakpoint = ({ width, breakpoint, oldBreakpoint }) => {};

				this.theme = theme;
				this.element = element;
				theme.registerComponent(this);
			}
			/**
			 * This will be called immediatelly when client window resizes.
			 *
			 * NOTE: prefer using onWindowResize as it's already debounced.
			 *
			 * @param {Object} params
			 * @param {number} params.width Width of the window
			 */
		} // CONCATENATED MODULE: ./src/javascripts/Section.js
		/**
		 * Base class for all the section components
		 *
		 * All components should inherit this class and implement what method they need
		 */

		class Section extends Component {
			/**
			 *
			 * @param {import("./ThemeBase").default} theme Global theme object
			 * @param {HTMLElement} element Toplevel element for the section
			 * @param {boolean} pageLoad True on initial page load, False when this section reloads
			 */
			constructor(theme, element, pageLoad) {
				super(theme, element);

				this.onSectionSelect = ({ element, sectionId, load }) => {};

				this.onSectionDeselect = ({ element, sectionId }) => {};

				this.onSectionReorder = ({ element, sectionId }) => {};

				this.onBlockSelect = ({ element, sectionId, blockId, load }) => {};

				this.onBlockDeselect = ({ element, sectionId, blockId }) => {};

				this.destroy = ({ element }) => {};

				this.theme = theme;
				this.element = element;
			}
			/**
			 * This will be called when section gets selected in Shopify Theme Editor
			 *
			 * @param {Object} params
			 * @param {HTMLElement} params.element Toplevel element for the section
			 * @param {string} params.sectionId Identification of the section
			 * @param {boolean} params.load True if block was loaded, False if user just openeded previously selected block
			 * */
		} // CONCATENATED MODULE: ./src/javascripts/global/Popup.js
		class Popup extends Component {
			constructor(theme, element) {
				super(theme, element);
				this.STORAGE_KEY = "wetheme-popup";

				this.load = () => {
					if (this.testMode) {
						// popup is in test mode - will show immediately in editor and on live site
						this.show();
					} else if (this.isExpiredOrNotSet()) {
						// popup item in localStorage is expired or was not set, show popup this time
						setTimeout(() => {
							this.setExpiry(this.popupSkipDays);
							this.show();
						}, 1000 * this.popupDelay);
					}

					this.element.querySelector(".popup--close-btn").addEventListener("click", this.hide);
				};

				this.isExpiredOrNotSet = () => {
					let expired = true;
					if (!this.isLocalStorageSupported(() => localStorage)) return expired;
					const popupInfo = window.localStorage.getItem(this.STORAGE_KEY);

					if (popupInfo) {
						try {
							const expiry = Date.parse(JSON.parse(popupInfo).expiry);

							if (expiry > Date.now()) {
								expired = false;
							}
						} catch (e) {
							console.warn("Unable to read popup expiry date", e);
						}
					}

					return expired;
				};

				this.setExpiry = (days) => {
					const expiry = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

					try {
						localStorage.setItem(
							this.STORAGE_KEY,
							JSON.stringify({
								expiry: expiry.toISOString(),
							})
						);
					} catch (e) {
						console.warn("Unable to set popup expiry:", e);
					}
				};

				this.isLocalStorageSupported = (getStorage) => {
					try {
						const key = "__random_key_name___e__";
						getStorage().setItem(key, key);
						getStorage().removeItem(key);
						return true;
					} catch (e) {
						return false;
					}
				};

				this.show = () => {
					this.element.classList.add("visible");
					this.lastFocus = document.activeElement;
					setTimeout(this.trapFocus, 1000);
				};

				this.hide = () => {
					this.element.classList.remove("visible");
				};

				this.trapFocus = () => {
					var inputs = this.element.querySelectorAll("input:not([type=hidden]), button, a");
					var firstInput = inputs[0];
					var lastInput = inputs[inputs.length - 1];
					var self = this; // If newsletter is there, focus on input

					if (this.element.querySelector(".popup__newsletter-form")) {
						this.element.querySelector("#newsletter_text").focus();
					} else {
						this.element.querySelector(".popup--close-btn").focus();
					} // Redirect last tab to first input

					lastInput.addEventListener(
						"keydown",
						function (
							/** @type {KeyboardEvent} */
							e
						) {
							if (e.code === "Tab" && !e.shiftKey) {
								e.preventDefault();
								firstInput.focus();
							}
						}
					); // Redirect first shift+tab to last input

					firstInput.addEventListener(
						"keydown",
						function (
							/** @type {KeyboardEvent} */
							e
						) {
							// First input is the close icon, so allow closing via enter key.
							if (e.code == "Enter") {
								e.preventDefault();
								self.hide();
								self.focusable[0].focus();
							}

							if (e.code === "Tab" && e.shiftKey) {
								e.preventDefault();
								lastInput.focus();
							}
						}
					);
				};

				this.popupWrapper = this.element.querySelector(".popup-container");
				this.popupSkipDays = parseInt(this.element.dataset.popupTime, 10);
				this.popupDelay = parseInt(this.element.dataset.popupDelay, 10);
				this.testMode = this.element.dataset.popupTestMode === "true";
				this.lastFocus = document.activeElement;
				this.focusable = document.body.querySelectorAll("ul.nav li a");
				this.load();
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/CartDrawer.js
		class CartDrawer extends Component {
			// ms
			constructor(theme, _element) {
				var _this;

				super(theme, _element);
				_this = this;
				this.FADE_OUT_ANIMATION_DURATION = 800;

				this.hideElements = (elementsList) => {
					for (const el of elementsList) {
						if (el.classList.contains("hide")) continue;
						el.classList.add("hide");
					}
				};

				this.showElements = (elementsList) => {
					for (const el of elementsList) {
						el.classList.remove("hide");
					}
				};

				this.updateStatus = (total_price) => {
					var updatedStatus = `<span>${this.theme.translations.cart_item} ${this.statusString} ${this.cartTitleText}, ${this.theme.formatMoney(total_price)}</span>`;
					this.cartDrawerStatus.innerHTML = updatedStatus;
				};

				this.stringToHTML = (str) => {
					var parser = new DOMParser();
					var doc = parser.parseFromString(str, "text/html");
					return doc.body.querySelector("li");
				};

				this.updateCartDrawer = async function (cart) {
					if (!cart) return;

					_this.updateErrorMessage("");

					const elementsToUpdate = _this.element.querySelectorAll(".ajax-cart--total-price, .cart-button-checkout, .additional-checkout-buttons, .taxes-and-shipping-message, .ajax-cart--checkout-add-note, .cart-price-text, .drawer__ship-date, .slide-checkout-buttons");

					const cartEmptyNotice = _this.element.querySelectorAll(".cart-empty-box");

					if (cart.items.length === 0) {
						_this.showElements(cartEmptyNotice);

						_this.hideElements(elementsToUpdate);
					} else {
						_this.hideElements(cartEmptyNotice);

						_this.showElements(elementsToUpdate);
					}

					var cartItems = _this.element.querySelector(".cart-items");

					cartItems.innerHTML = "";
					var self = _this;
					let cartData;

					try {
						const response = await fetch("/cart?view=compare");
						cartData = await response.json();
					} catch (e) {
						console.error("Cart fetch failed", e);
					}

					cart.items.forEach((item, index) => {
						var templateString = document.getElementById("cart-item-template").innerHTML;

						var template = _this.stringToHTML(templateString);

						var cartItem = template;
						var sellingPlanName = item.selling_plan_allocation ? item.selling_plan_allocation.selling_plan.name : null;
						const templateEls = {
							image: cartItem.querySelector(".cart-item-image"),
							title: cartItem.querySelector(".cart-item-product-title"),
							links: cartItem.querySelectorAll(".cart-item-link"),
							variant_title: cartItem.querySelector(".cart-item-variant-title"),
							price_per_unit: cartItem.querySelector(".cart-item-price-per-unit"),
							price: cartItem.querySelector(".cart-item-price"),
							selling_plan: cartItem.querySelector(".cart-item-selling-plan"),
							quantity: cartItem.querySelector(".cart-item-quantity"),
							quantity_wrapper: cartItem.querySelector(".cart-item-quantity").closest(".cart-item--quantity-wrapper"),
							discounts: cartItem.querySelector(".order-discount--cart-list"),
							original_price: cartItem.querySelector(".cart-item-price-original"),
							error_message: cartItem.querySelector(".errors"),
						};
						var stockCount = parseInt(cartData.items[index].stock_count);
						var stockPolicy = cartData.items[index].stock_policy;
						var stockManagement = cartData.items[index].inventory_management;
						templateEls.quantity_wrapper.setAttribute("data-stock-count", stockCount.toString());
						templateEls.quantity_wrapper.setAttribute("data-inventory-policy", stockPolicy);
						templateEls.quantity_wrapper.setAttribute("data-inventory-management", stockManagement);

						var updateQuantity = (quantity) => {
							_this.cartSetQuantity(quantity, cartItem, templateEls.quantity_wrapper);
						};

						templateEls.title.title = item.product_title;
						templateEls.title.innerText = item.product_title;
						templateEls.links.forEach((element) => element.setAttribute("href", item.url));
						templateEls.price.innerHTML = _this.theme.formatMoney(item.final_line_price);
						templateEls.quantity.value = item.quantity.toString();
						templateEls.quantity.setAttribute("name", "updates[]");
						templateEls.error_message.textContent = "You can't add more of this item to the cart";
						templateEls.quantity.addEventListener("change", function () {
							let new_q = parseInt(this.value.toString(), 10);
							let getQuantity = parseInt(this.parentElement.dataset.stockCount, 10);
							let inventoryPolicy = this.parentElement.dataset.inventoryPolicy;
							let inventoryManagement = this.parentElement.dataset.inventoryManagement;

							if (new_q <= getQuantity || inventoryPolicy == "continue" || inventoryManagement != "shopify") {
								templateEls.quantity.value = new_q.toString();
								setTimeout(() => {
									updateQuantity(new_q.toString());
								}, 800);
							} else {
								templateEls.quantity.value = getQuantity.toString();
								templateEls.error_message.classList.remove("hide");
								setTimeout(() => {
									updateQuantity(getQuantity.toString());
								}, 800);
							}
						});

						if (item.image) {
							templateEls.image.setAttribute("src", item.image);
							templateEls.image.setAttribute("alt", item.featured_image.alt);
						} else {
							templateEls.image.classList.add("d-none");
						}

						if (item.variant_title) {
							templateEls.variant_title.classList.remove("hide");
							templateEls.variant_title.innerText = item.variant_title;
						}

						if (item.unit_price_measurement) {
							var priceString = '<span class="price">(' + _this.theme.formatMoney(item.unit_price) + " / " + (item.unit_price_measurement.reference_value != 1 ? item.unit_price_measurement.reference_value : "") + " " + item.unit_price_measurement.reference_unit + ")";
							templateEls.price_per_unit.innerHTML = priceString;
						}

						if (sellingPlanName) {
							templateEls.selling_plan.classList.remove("hide");
							templateEls.selling_plan.innerHTML = sellingPlanName;
						}

						if (item.original_line_price > item.final_line_price) {
							templateEls.original_price.innerHTML = _this.theme.formatMoney(item.original_line_price);
							templateEls.original_price.classList.add("d-block");
						} else {
							templateEls.original_price.classList.add("d-none");
						}

						cartItem.querySelectorAll(".cart-item-quantity-button").forEach((item) => {
							item.addEventListener("click", function () {
								let current = parseInt(templateEls.quantity.value.toString(), 10);
								let change = parseInt(this.dataset.amount, 10);
								let new_q = current + change;
								self.statusString = change > 0 ? self.theme.translations.added_to_cart : self.theme.translations.removed_from_cart;
								let getQuantity = parseInt(this.parentElement.dataset.stockCount, 10);
								let inventoryPolicy = this.parentElement.dataset.inventoryPolicy;
								let inventoryManagement = this.parentElement.dataset.inventoryManagement;

								if (new_q <= getQuantity || inventoryPolicy == "continue" || inventoryManagement != "shopify") {
									templateEls.quantity.value = new_q.toString();
									setTimeout(() => {
										updateQuantity(new_q);
									}, 800);
								} else {
									templateEls.quantity.value = getQuantity.toString();
									templateEls.error_message.classList.remove("hide");
									setTimeout(() => {
										updateQuantity(getQuantity);
									}, 800);
								}
							});
						});
						cartItem.querySelector("#cart-item-remove-button").addEventListener("click", function () {
							self.statusString = self.theme.translations.removed_from_cart;
							var new_q = 0;
							templateEls.quantity.value = new_q.toString();
							updateQuantity(new_q);
						});
						templateEls.discounts.innerHTML = "";
						item.line_level_discount_allocations.forEach(function (discount_allocation) {
							const item = document.createElement("li");
							const discountItem = document.createElement("span");
							item.classList.add("order-discount--item");
							discountItem.classList.add("order-discount--item-title");
							discountItem.innerText = discount_allocation.discount_application.title;
							item.append(discountItem);
							const discountAmount = `<span class="sr-only">${self.theme.translations.saving}</span> (- ${self.theme.formatMoney(discount_allocation.amount)})`;
							const discountEl = document.createElement("span");
							discountEl.classList.add("order-discount--cart-amount");
							discountEl.innerHTML = discountAmount;
							item.append(discountEl);
							templateEls.discounts.append(item);
						});
						cartItems.append(cartItem);
					});
					if (self.statusString) _this.updateStatus(cart.total_price);

					if (_this.headerQuantity) {
						document.querySelectorAll(".cart-item-count-header").forEach((item) => {
							item.textContent = cart.item_count.toString();
						});
					}

					document.querySelectorAll(".js-cart-total").forEach((item) => {
						item.innerHTML = _this.theme.formatMoney(cart.total_price);
					});
					var originalPrice = document.querySelector(".cart-item-original-total-price");

					if (cart.original_total_price > cart.total_price) {
						originalPrice.innerHTML = _this.theme.formatMoney(cart.original_total_price);
						originalPrice.classList.add("d-block");
					} else {
						originalPrice.classList.remove("d-block");
						originalPrice.classList.add("d-none");
					}

					var cartDiscount = document.querySelector(".ajax-cart-discount-wrapper");
					cartDiscount.innerHTML = "";
					cart.cart_level_discount_applications.forEach(function (discount_application) {
						const item = document.createElement("div");
						const orderDiscount = document.createElement("span");
						const totalDiscounted = self.theme.formatMoney(discount_application.total_allocated_amount);
						const orderDiscountTitle = document.createElement("span");
						const minusSymbol = document.createElement("span");
						orderDiscount.classList.add("order-discount");
						orderDiscount.innerHTML = totalDiscounted;
						minusSymbol.innerText = "-";
						orderDiscount.querySelector(".money").prepend(minusSymbol);
						orderDiscountTitle.classList.add("order-discount--cart-title");
						orderDiscountTitle.innerText = discount_application.title;
						item.append(orderDiscount);
						item.append(orderDiscountTitle);
						item.classList.add("cart--order-discount-wrapper--indiv");
						cartDiscount.append(item);
					}); // Free shipping msg update

					const freeShippingContainer = document.querySelector("[data-free-shipping-msg]");

					if (freeShippingContainer) {
						_this.theme.fetchSection("/", "free-shipping-msg", freeShippingContainer);
					}
				};

				this.updateErrorMessage = (message_string) => {
					this.cartError.innerText = message_string;
				};

				this.cartSetQuantity = async function (quantity, cart_item, quantity_wrapper) {
					const self = _this;
					const removeItem = quantity <= 0;
					let delay = removeItem ? _this.FADE_OUT_ANIMATION_DURATION : 0;
					const formData = new FormData(document.querySelector(".cart-drawer-form"));

					_this.updateErrorMessage("");

					try {
						const response = await (
							await fetch("/cart/update.js", {
								method: "POST",
								body: formData,
							})
						).json();

						if (response) {
							setTimeout(() => {
								self.updateCartDrawer(response);
							}, delay);
						}
					} catch (error) {
						console.error(error.message);
						self.updateErrorMessage("Unable to update item quantity");
					} finally {
						/**
						 * @todo Review business logic here - removing item even if request has failed
						 */
						quantity_wrapper.classList.remove("cart-item-quantity-active");
						quantity_wrapper.classList.add("cart-item-quantity-active");

						if (removeItem) {
							cart_item.classList.add("fadeOut", "animated", "fast");
							setTimeout(function () {
								cart_item.remove();
							}, delay);
						}
					}
				};

				this.statusString = "";
				this.cartError = document.querySelector(".cart-error-box");
				this.cartCheckoutBtn = this.element.querySelector(".cart-button-checkout");
				this.headerQuantity = document.querySelectorAll(".cart-item-count-header--quantity");
				this.cartDrawerStatus = this.element.querySelector(".js-cart-drawer-status");
				this.cartTitle = this.element.querySelector(".cart-drawer--title");
				this.cartTitleText = this.cartTitle.innerText;
				this.cartDrawerTop = this.element.querySelector(".cart-drawer__top");
				const initial = document.querySelector("#initial-cart");

				if (!initial) {
					return;
				}

				const data = JSON.parse(initial.textContent);
				this.updateCartDrawer(data);
				this.cartCheckoutBtn.addEventListener("click", (event) => {
					this.cartCheckoutBtn.querySelector(".cart-button-checkout-text").classList.add("hide");
					this.cartCheckoutBtn.querySelector(".cart-button-checkout-spinner").classList.remove("hide");
				});
			}
		}
		// EXTERNAL MODULE: ./node_modules/slideout/index.js
		var node_modules_slideout = __webpack_require__(933);
		var slideout_default = /*#__PURE__*/ __webpack_require__.n(node_modules_slideout); // CONCATENATED MODULE: ./src/javascripts/modules/slideoutFocusTrap.js
		function trapFocus(slideout_id, is_initial_open) {
			var idString = `#${slideout_id}`;
			var menu = document.getElementById(slideout_id);
			var inputs = menu.querySelectorAll(`${idString} input:not([type=hidden]), ${idString} button:not([tabindex="-1"]), ${idString} a:not([tabindex="-1"]), ${idString} textarea`);
			var firstInput;
			var lastInput;

			if (inputs[0].tagName == "A") {
				firstInput = inputs[0];
			} else if (inputs[0].tagName == "BUTTON") {
				firstInput = inputs[0];
			}

			if (inputs[0].tagName == "A") {
				lastInput = inputs[inputs.length - 1];
			} else if (inputs[0].tagName == "BUTTON") {
				lastInput = inputs[inputs.length - 1];
			}

			if (is_initial_open) firstInput.focus(); // Redirect last tab to first input

			lastInput.addEventListener(
				"keydown",
				function (
					/** @type {KeyboardEvent} */
					e
				) {
					if (e.code === "Tab" && !e.shiftKey) {
						e.preventDefault();
						firstInput.focus();
					}
				}
			); // Redirect first shift+tab to last input

			firstInput.addEventListener(
				"keydown",
				function (
					/** @type {KeyboardEvent} */
					e
				) {
					if (e.code === "Tab" && e.shiftKey) {
						e.preventDefault();
						lastInput.focus();
					}
				}
			);
		} // CONCATENATED MODULE: ./src/javascripts/global/Drawer.js
		class Drawer extends Component {
			constructor(theme, element) {
				super(theme, element);
				this.MOBILE_DRAWER_SIZE = 300;
				this.DESKTOP_DRAWER_SIZE = 400;
				this.MOBILE_BREAKPOINT = Breakpoints.md;
				this.DESKTOP_BREAKPOINT = Breakpoints.md;

				this.load = () => {
					// Close sliders if they're open
					if (this.slideouts && this.slideouts.left) {
						this.slideouts.left.close();
					}

					if (this.slideouts && this.slideouts.right) {
						this.slideouts.right.close();
					}
					/* Move mobile menu out of section to document body because the slideout
           needs to put it to the sidebar, but it can't be in the body from the beginning
           because it needs section config */

					var bodyMenu = document.body.querySelector("#theme-menu");
					var mainBodyMenu = document.querySelector("#main-body #theme-menu");

					if (mainBodyMenu) {
						if (bodyMenu != null) bodyMenu.remove();
						document.body.append(mainBodyMenu);
					}

					var leftMenu = document.querySelector("#theme-menu");
					var rightMenu = document.querySelector("#cartSlideoutWrapper");
					/* Mobile Menu */

					this.createMenuDrawer(leftMenu, rightMenu);
					/* Cart */
					// Cart drawer is disabled in the settings

					if (!rightMenu) return;
					this.createCartDrawer(rightMenu, leftMenu);
				};

				this.createMenuDrawer = (left_menu, right_menu) => {
					var self = this;
					var slideoutID;
					var slideoutLeft = this.createDrawer("left", left_menu, right_menu);
					var isInitialOpen = true;
					var menuOpenBtns = document.querySelectorAll(".slide-menu-mobile");
					var menuCloseBtns = document.querySelectorAll(".mobile-menu-close");

					const handleMenuOpen = () => {
						slideoutID = self.slideouts.left.menu.id;
						slideoutLeft.toggle();
						trapFocus(slideoutID, isInitialOpen);
					};

					const handleMenuClose = () => {
						slideoutLeft.close();
					};

					menuOpenBtns.forEach((menuOpenBtn) => {
						menuOpenBtn.removeEventListener("click", handleMenuOpen);
						menuOpenBtn.addEventListener("click", handleMenuOpen);
					});
					menuCloseBtns.forEach((menuCloseBtn) => {
						menuCloseBtn.removeEventListener("click", handleMenuClose);
						menuCloseBtn.addEventListener("click", handleMenuClose);
					}); // Disable mobile drawer on desktop

					if (this.theme.breakpoint.order <= this.MOBILE_BREAKPOINT.order) {
						slideoutLeft.disableTouch();
					} // Add events for sidebar manipulation from outside

					left_menu.addEventListener("mobile:toggle", slideoutLeft.toggle.bind(slideoutLeft), false);
				};

				this.createCartDrawer = (right_menu, left_menu) => {
					var self = this;
					var slideoutID;
					var slideoutRight = this.createDrawer("right", right_menu, left_menu);
					var isInitialOpen = true;
					var cartOpenBtn = document.querySelectorAll(".slide-menu-cart");
					var cartCloseBtn = document.querySelectorAll(".cart-menu-close");

					const handleCartOpen = (e) => {
						slideoutID = self.slideouts.right.menu.id;
						slideoutRight.toggle();
						trapFocus(slideoutID, isInitialOpen); // prevent non-ajax basket

						e.preventDefault();
						return false;
					}; // Toggle buttons (for desktop, mobile, sticky headers)

					cartOpenBtn.forEach((item) => {
						item.removeEventListener("click", handleCartOpen);
						item.addEventListener("click", function (e) {
							handleCartOpen(e);
						});
					});
					cartCloseBtn.forEach((btn) => {
						btn.addEventListener("click", function () {
							// @todo add a class when the persistent cart is active maybe.
							slideoutRight.close();
						});
					}); // Add events for sidebar manipulation from outside

					right_menu.addEventListener("cart:toggle", slideoutRight.toggle.bind(slideoutRight), false);
					right_menu.addEventListener("cart:open", slideoutRight.open.bind(slideoutRight), false);
				};

				this.onWindowResizeBreakpoint = ({ breakpoint, oldBreakpoint }) => {
					const wasMobile = this.isMobile;
					this.isMobile = breakpoint.order <= this.MOBILE_BREAKPOINT.order;
					this.isDesktop = window.innerWidth > Breakpoints.md.max ? true : false;

					if (this.isDesktop) {
						// Close mobile menu.
						this.slideouts.left.close(); // Open persistent cart.

						if (this.cartType === "persistent" && this.cartVisible === true) {
							// check for the slide-open class?
							const slideOutClass = "slideout-open";
							const isSlideoutOpen = document.querySelector("html").classList.contains(slideOutClass); // check if the drawer is actually visible before the recalculation

							if (isSlideoutOpen) {
								this.slideouts.right.open();
							}
						}
					}

					if (this.isMobile === wasMobile) {
						// mobile <=> desktop was not changed
						return;
					}

					if (this.isMobile) {
						this.slideouts.left.disableTouch(); // Open persistent cart.

						if (this.cartType === "persistent" && this.cartVisible === true) {
							this.slideouts.right.close();
						}
					} else {
						this.slideouts.left.enableTouch();
					}

					if (!this.slideouts.right) {
						// cart slider is disabled
						return;
					} // Resize right drawer based on window width

					const slideout = this.slideouts.right;
					const padding = this.isMobile ? this.MOBILE_DRAWER_SIZE : this.DESKTOP_DRAWER_SIZE;
					slideout._translateTo = slideout._padding = padding * slideout._orientation;

					if (slideout._opened) {
						const transform = "translateX(" + padding * slideout._orientation + "px)";
						slideout.panel.style.webkitTransform = transform;
						slideout.panel.style.transform = transform;
					}
				};

				this.createDrawer = (side, menu, hidden_menu) => {
					const overlay = document.querySelector("#slideout-overlay");
					let panel = document.querySelector("#main-body");
					let padding = this.MOBILE_DRAWER_SIZE;
					let self = this;
					let easing = "ease";

					if (side === "right" && !this.isMobile) {
						padding = this.DESKTOP_DRAWER_SIZE;
					}

					if (this.cartType === "persistent") {
						easing = "0s cubic-bezier(0,0,1,1)";
					}

					const slideout = new (slideout_default())({
						panel: panel,
						menu: menu,
						padding: padding,
						tolerance: 70,
						side: side,
						touch: false, // 'easing': easing
					});
					const dir = side === "right" ? -1 : 1;
					this.slideouts[side] = slideout;
					menu.classList.add("slideout-panel-hidden");

					if (this.cartType !== "persistent") {
						overlay.addEventListener("click", slideout.close.bind(slideout)); // Handle slide to close

						let touch_start = null;
						overlay.addEventListener(
							"touchstart",
							function (
								/** @type {TouchEvent} */
								event
							) {
								if (!slideout.isOpen()) return;
								event.preventDefault();
								touch_start = event.touches[0].pageX;
							},
							{
								passive: true,
							}
						);
						overlay.addEventListener(
							"touchmove",
							function (
								/** @type {TouchEvent} */
								event
							) {
								if (!slideout.isOpen()) return;
								const offset = touch_start - event.touches[0].pageX;
								let translate = dir * padding - offset;

								if (Math.abs(translate) > padding) {
									translate = dir * padding;
								}

								panel.style.transform = "translateX(" + translate + "px)";
							},
							{
								passive: true,
							}
						);
						overlay.addEventListener(
							"touchend",
							function (
								/** @type {TouchEvent} */
								event
							) {
								if (!slideout.isOpen()) return;
								const offset = touch_start - event.changedTouches[0].pageX;

								if (offset === 0 || Math.abs(offset) > 70) {
									slideout.close();
								} else {
									panel.style.transform = "translateX(" + dir * padding + "px)";
								}
							}
						);
					}

					slideout.on("beforeopen", function () {
						menu.classList.remove("slideout-panel-hidden");

						if (hidden_menu) {
							hidden_menu.classList.add("slideout-panel-hidden");
						}

						if ((self.cartType !== "persistent" && !self.isMobile) || this._side !== "right" || self.isMobile) {
							overlay.classList.add("show");
							const cartClose = document.querySelector(".cart-menu-close");
							const menuClose = document.querySelector(".menu-close-icon");
							const filterClose = document.querySelector(".filter-close-icon");
							const marginTop = window.scrollY + "px";
							const stickyHeader = document.querySelector(".sticky-header-wrapper.sticky");
							if (cartClose) cartClose.focus();
							if (menuClose) menuClose.focus();
							if (filterClose) filterClose.focus();
							panel.style.position = "fixed";
							panel.style.marginTop = "-" + marginTop; // Apply opposite effect to the sticky header

							if (stickyHeader) {
								stickyHeader.style.marginTop = marginTop;
								stickyHeader.style.transform = "translateX(0)";
							}
						}
					});
					slideout.on("open", function () {
						if (self.cartType === "persistent") {
							// Enable fixed cart if re opened
							document.body.setAttribute("data-persistent-cart-state", "open");
							self.theme.sessionHandler.changeCartSessionState("open"); // Trigger resize of slideshow.

							const event = new Event("update-swipers");
							window.dispatchEvent(event);
						}
					});
					slideout.on("beforeclose", function () {
						const scrollTop = parseInt(panel.style.marginTop) * -1;
						const drawerStatus = document.querySelector(".js-cart-drawer-status");
						overlay.classList.remove("show");

						if (drawerStatus) {
							drawerStatus.innerText = "";
						}

						panel.style.position = "";
						panel.style.marginTop = "";

						if (self.cartType === "persistent" && !self.isMobile) {
							// @todo nothing at present however place for
							// on before close events in from the persisitent cart
						} else {
							// I hate this, but basically the smallest footprint without potential for knockon
							// Resets the html scroll behavior,
							document.documentElement.style.scrollBehavior = "auto";
							window.scrollTo(0, scrollTop);
							document.documentElement.style.scrollBehavior = "";
						}
					});
					slideout.on("close", function () {
						const stickyHeader = document.querySelector(".sticky-header-wrapper");

						if (stickyHeader) {
							stickyHeader.style.marginTop = "0";
							stickyHeader.style.transform = "";
						}

						menu.classList.add("slideout-panel-hidden");

						if (self.cartType === "persistent") {
							// disable fixed cart if re opened
							document.body.setAttribute("data-persistent-cart-state", "closed");
							self.theme.sessionHandler.changeCartSessionState("closed"); // Trigger resize to update any slideshows as they will have an incorrect width.

							window.dispatchEvent(new Event("resize"));
						}
					});
					slideout.on("translate", function (translated) {
						var hidden = false;

						if (translated === 0) {
							hidden = true;
						} else if (side === "left") {
							hidden = translated <= 0;
						} else if (side === "right") {
							hidden = translated >= 0;
						}

						menu.classList.toggle("slideout-panel-hidden", hidden);

						if (hidden_menu) {
							hidden_menu.classList.toggle("slideout-panel-hidden", !hidden);
						}
					});

					if (
						this.cartType === "persistent" &&
						this.cartVisible == true &&
						side === "right" &&
						this.isDesktop &&
						self.theme.sessionHandler.fixedCartShouldOpenOnLoad() // true when the cart hasnt been hidden
					) {
						slideout.open();
					}

					return slideout;
				};

				this.slideouts = {};
				this.isMobile = this.theme.breakpoint.order <= this.MOBILE_BREAKPOINT.order;
				this.isDesktop = window.innerWidth >= Breakpoints.lg.min ? true : false;
				this.lastFocus = document.activeElement;
				this.cartType = document.body.dataset.cartType;
				this.cartVisible = document.body.dataset.cartVisible == "true";
				this.swipers = document.querySelectorAll(".swiper-container");
				this.theme = theme;
				this.load();
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/AgeChecker.js
		class AgeChecker extends Component {
			constructor(theme, element) {
				super(theme, element);
				this.STORAGE_KEY = "wetheme-age-check";

				this.setTabindex = (elements, val) => {
					for (const el of elements) {
						el.setAttribute("tabIndex", val);
					}
				};

				this.resetModal = () => {
					this.modalPrompt.scrollTop = 0;
					this.popupCloseBtn.classList.remove("d-block");
					this.initialContent.classList.remove(this.hiddenClass);
					this.denyContent.classList.add(this.hiddenClass);
					this.setTabindex(this.initialBtns, "1");
					this.setTabindex(this.denyBtns, "-1");
					this.trapFocus();
				};

				this.trapFocus = () => {
					var self = this;
					setTimeout(function () {
						if (self.element) {
							var inputs = self.element.querySelectorAll('button:not([tabindex="-1"]), a:not([tabindex="-1"])');
							var firstInput;
							var lastInput;

							if (inputs[0].tagName == "A") {
								firstInput = inputs[0];
							} else if (inputs[0].tagName == "BUTTON") {
								firstInput = inputs[0];
							}

							if (inputs[0].tagName == "A") {
								lastInput = inputs[inputs.length - 1];
							} else if (inputs[0].tagName == "BUTTON") {
								lastInput = inputs[inputs.length - 1];
							}
							/*set focus on first input*/

							self.element.focus();
							/*redirect last tab to first input*/

							lastInput.addEventListener(
								"keydown",
								(
									/** @type {KeyboardEvent} */
									e
								) => {
									if (e.code === "Tab" && !e.shiftKey) {
										e.preventDefault();
										firstInput.focus();
									}
								}
							);
							/*redirect first shift+tab to last input*/

							firstInput.addEventListener("keydown", (event) => {
								const e = event;

								if (e.code === "Tab" && e.shiftKey) {
									e.preventDefault();
									lastInput.focus();
								}
							});
						}
					}, 1000);
				};

				this.load = () => {
					var self = this;

					if (this.ageTestMode) {
						// age checker is in test mode - will show immediately in editor and on live site
						this.element.classList.add("d-block");
						this.trapFocus();
					}

					const enterButton = document.getElementById("button__enter");
					const exitButton = document.getElementById("button__exit");
					const returnButton = document.getElementById("button__return");
					const modalLinks = this.element.querySelector(".modal-content__wrapper a");

					if (modalLinks) {
						modalLinks.setAttribute("tabindex", "1");
					}

					function readCookie(name) {
						var nameEQ = name + "=";
						var ca = document.cookie.split(";");

						for (var i = 0; i < ca.length; i++) {
							var c = ca[i];

							while (c.charAt(0) == " ") c = c.substring(1, c.length);

							if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
						}

						return null;
					}

					var isAnAdult = readCookie("isAnAdult");

					if (!isAnAdult) {
						this.element.classList.add("d-block");
						this.trapFocus();
					}

					if (enterButton) {
						enterButton.addEventListener("click", function () {
							document.write("<style> #prompt__background { display: none; }</style>");
							document.cookie = "isAnAdult=true; expires=0; path=/";
							location.reload();
						});
					}

					if (exitButton) {
						exitButton.addEventListener("click", function () {
							self.modalPrompt.scrollTop = 0;
							self.popupCloseBtn.classList.add("d-block");
							self.denyContent.classList.remove(self.hiddenClass);
							self.initialContent.classList.add(self.hiddenClass);
							self.setTabindex(self.initialBtns, "-1");
							self.setTabindex(self.denyBtns, "1");
							self.trapFocus();
						});
					}

					if (returnButton) {
						returnButton.addEventListener("click", function () {
							self.resetModal();
						});
					}

					if (this.popupCloseBtn) {
						this.popupCloseBtn.addEventListener("click", function () {
							self.resetModal();
						});
					}
				};

				this.ageSkipDays = parseInt(this.element.dataset.ageTime, 10);
				this.ageDelay = 0;
				this.ageTestMode = this.element.dataset.ageTestMode === "true";
				this.modalPrompt = document.getElementById("verification__prompt");
				this.popupCloseBtn = this.element.querySelector(".verification-popup__close-button");
				this.denyContent = this.element.querySelector(".modal-deny-content");
				this.initialContent = this.element.querySelector(".modal-initial-content");
				this.initialBtns = this.initialContent.querySelectorAll("button");
				this.denyBtns = this.denyContent.querySelectorAll("button");
				this.hiddenClass = "hidden";
				this.load();
			}
		} // CONCATENATED MODULE: ./src/javascripts/modules/fetchSection.js
		function fetchSection(url, section_id, el, callback) {
			if (!url || !section_id) {
				console.error("Please provide a valid url and section id.");
				return;
			}

			const urlHasParams = url.includes("?");
			url = urlHasParams ? `${url}&` : `${url}?`;
			fetch(`${url}section_id=${section_id}`)
				.then((response) => {
					if (response.ok) {
						return response.text();
					} else {
						throw new Error("Something went wrong");
					}
				})
				.then((data) => {
					if (!el) {
						console.error("No element provided.");
						return;
					}

					el.innerHTML = data;
					if (typeof callback === "function") callback();
				})
				.catch((error) => {
					console.log(error);
				});
		} // CONCATENATED MODULE: ./src/javascripts/modules/sessionStorageHandlers.js
		/**
		 * A set of methods for interacting with the session storage of the browser
		 * specifically for the interjection of drawers when a user has closed them previously.
		 */
		// Default storege items used when initiating
		// @todo move these keys to constants
		const defaultSessionValues = {
			WTSessionActive: true,
			WTcartType: "",
		};
		/**
		 * Set a session storage item
		 * @param {string} key
		 * @param {string} value
		 * @returns
		 */

		const setSessionStorageItem = (key, value) => {
			if (!key || !value) {
				return false;
			}

			sessionStorage.setItem(key, value);
		};
		/**
		 * Get a sessions torage item
		 * @param {string} key
		 * @returns {string}
		 */

		const getSessionStorageItem = (key) => {
			if (!key) {
				return undefined;
			}

			return sessionStorage.getItem(key);
		};
		/**
		 *
		 * @param {Object} defaults
		 * @returns
		 */

		const initSessionStorage = (defaults) => {
			Object.keys(defaults).forEach((key) => setSessionStorageItem(key, defaults[key]));
			return true;
		};
		/**
		 *
		 * @param {string} value -  "open" | "closed"
		 * @returns
		 */

		const changeCartSessionState = (value) => {
			const currentState = getSessionStorageItem("WTcartClosedWhenFixed");
			return setSessionStorageItem("WTcartClosedWhenFixed", value);
		};
		/**
		 * checks the open closed status and returns as a bool
		 * @returns {boolean}
		 */

		const fixedCartShouldOpenOnLoad = () => {
			const currentState = getSessionStorageItem("WTcartClosedWhenFixed");
			return currentState !== "closed";
		};
		/**
		 * Used on each theme init to make surte we have a session active to use.
		 * @param {Object} userDefaults
		 * @returns {Object}
		 */

		const sessionHandler = (userDefaults = {}) => {
			// init sessions or maintain current state if in place.
			const isActive = getSessionStorageItem("WTSessionActive"); // Merge in the user overrides

			const defaults = Object.assign({}, defaultSessionValues, userDefaults);

			if (!isActive) {
				initSessionStorage(defaults);
			}

			if (userDefaults.WTcartType) {
				setSessionStorageItem("WTcartType", userDefaults.WTcartType); // Reset the open closed status

				if (userDefaults.WTcartType !== "persistent") {
					setSessionStorageItem("WTcartClosedWhenFixed", "open");
				}
			} // @todo clean up

			return {
				changeCartSessionState,
				defaultSessionValues,
				fixedCartShouldOpenOnLoad,
				getSessionStorageItem,
				initSessionStorage,
				mergedDefaults: defaults,
				setSessionStorageItem,
				userDefaults,
			};
		};
		/* harmony default export */ const sessionStorageHandlers = sessionHandler; // CONCATENATED MODULE: ./src/javascripts/pages/LoginPage.js
		class LoginPage {
			constructor(theme) {
				this.loadPasswordRecover = () => {
					const recover = document.querySelector(".recover-form");
					if (!recover) return;
					recover.classList.remove("no-js");
					const showPasswordForm = document.querySelector(".show-password-form");

					if (window.location.hash !== "#recover") {
						recover.classList.add("hide");
					}

					showPasswordForm.addEventListener("click", (e) => {
						recover.classList.toggle("hide");
					});
					showPasswordForm.addEventListener(
						"keypress",
						(
							/** @type {KeyboardEvent} */
							e
						) => {
							if (e.code == "Enter") {
								recover.classList.toggle("hide");
								return false;
							}
						}
					);
				};

				this.theme = theme;
				this.loadPasswordRecover();
				this.forgotPasswordBox = document.querySelector("#forgot-password-box");
				this.loginBoxLink = document.querySelector("#login-box-link");
				this.customerLogin = document.querySelector("#customer-login");
				this.recoverPassword = document.querySelector("#recover-password");
				this.resetSuccess = document.querySelector("#resetSuccess");
				let self = this;

				if (this.forgotPasswordBox) {
					this.forgotPasswordBox.addEventListener("click", (e) => {
						self.customerLogin.style.display = "none";
						self.recoverPassword.style.display = "block";
					});
				}

				if (this.loginBoxLink) {
					this.loginBoxLink.addEventListener("click", (e) => {
						self.customerLogin.style.display = "block";
						self.recoverPassword.style.display = "none";
					});
				}

				if (document.querySelector(".resetSuccessful")) {
					this.resetSuccess.style.display = "block";
				}
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/QuickAdd.js
		class QuickAdd extends Component {
			constructor(theme, element) {
				var _this;

				super(theme, element);
				_this = this;

				this.updateCartFailed = (response) => {
					this.enableCartButton();
					console.error("Updating the cart failed: ", response);
				};

				this.updateCart = async function () {
					try {
						const fetchResult = await window.fetch("/cart.js", {
							method: "GET",
							headers: {
								"x-requested-with": "XMLHttpRequest",
							},
							credentials: "same-origin",
						});
						const responseJson = await fetchResult.json();

						if (!fetchResult.ok) {
							_this.updateCartFailed(fetchResult);
						} else {
							_this.updatedCart(responseJson);
						}
					} catch (error) {
						console.error(error);
					}
				};

				this.openCartPage = () => {
					window.location.href = this.addToCartForm.querySelector("#cart-link").value.toString();
				};

				this.updatedCart = (data) => {
					this.theme.updateCartDrawer(data);
					this.enableCartButton();

					if (this.cartAction === "cart" && this.cartType == "page") {
						this.openCartPage();
					} else if (this.cartAction === "added") {
						this.currentButton.innerHTML = this.theme.translations.added;

						if (this.addedTextTimeout) {
							clearTimeout(this.addedTextTimeout);
							this.addedTextTimeout = null;
						}

						this.addedTextTimeout = setTimeout(() => {
							this.currentButton.innerHTML = this.theme.translations.addToCart;
						}, 2000);
					} else {
						// this.cartAction === drawer
						this.showCart();
					}
				};

				this.showCart = () => {
					const cartDrawerTop = document.querySelector(".cart-drawer__top");
					let cartDrawerStatus = document.querySelector(".js-cart-drawer-status"); // TODO: Translate the string.

					cartDrawerStatus.textContent = `Item added to your cart`;
					cartDrawerTop.appendChild(cartDrawerStatus);
					var event = new CustomEvent("cart:open");
					document.querySelector("#cartSlideoutWrapper").dispatchEvent(event);
				};

				this.showError = (text) => {
					let cartError = document.createElement("div");
					cartError.id = "cart-error";
					cartError.classList.add("alert", "alert-danger");
					cartError.textContent = text;
					this.currentButton.parentNode.insertBefore(cartError, this.currentButton.nextSibling);
				};

				this.enableCartButton = () => {
					if (this.addedTextTimeout) {
						clearTimeout(this.addedTextTimeout);
						this.addedTextTimeout = null;
					}

					this.currentButton.classList.remove("disabled");
					this.currentButton.disabled = false;
					this.currentButton.innerHTML = this.theme.translations.addToCart;
				};

				this.addToCartFailed = (response) => {
					this.enableCartButton();
					let errorText = "Unknown error";

					if (response.status == 0) {
						errorText = "Unable to connect to server";
					} else if (response.status == 422) {
						errorText = response.description;
					} else if (response.responseJSON) {
						// Process JSON error
						if (response.responseJSON.description) {
							errorText = response.responseJSON.description;
						} else {
							errorText = response.responseJSON.message;
						}
					} else if (response.responseText) {
						// Use plain text error
						errorText = response.responseText;
					}

					this.showError(errorText);
				};

				this.theme = theme;
				this.element = element;
				this.onSubmit = this.onSubmit.bind(this);
				this.currentButton = null;
				this.cartAction = document.getElementById("PageContainer").dataset.cartAction;
				this.cartType = document.getElementById("PageContainer").dataset.cartType;
				this.formWrapper = this.element.querySelectorAll(".quick-add-wrapper.is-singular");
				this.addToCartForm = this.element.querySelector("#add-to-cart-form");

				if (!this.formWrapper) {
					return;
				}

				Array.prototype.forEach.call(this.element.querySelectorAll(".quick-add-wrapper.is-singular .shopify-product-form"), (el) => {
					el.addEventListener("submit", this.onSubmit);
				});
			}

			async onSubmit(e) {
				// Go straight to cart page, use html form submit event.
				if (this.cartType == "page" && this.cartAction != "added") {
					return;
				}

				e.preventDefault();
				this.currentButton = e.currentTarget.querySelector(".quick-add-button"); // Loading spinner.

				this.currentButton.innerHTML = `<i class="fa fa-circle-o-notch fa-spin fa-fw js"></i><span class="sr-only">${this.theme.translations.loading}</span>`;

				try {
					const formData = new FormData(e.target);
					const fetchResult = await window.fetch("/cart/add.js", {
						method: "POST",
						credentials: "same-origin",
						headers: {
							"x-requested-with": "XMLHttpRequest",
						},
						body: formData,
					}); // if (!response.ok) {
					//   // FIXME: error handling
					//   return false;
					// }

					const responseJson = await fetchResult.json();

					if (!fetchResult.ok) {
						this.addToCartFailed(responseJson);
					} else {
						this.updateCart();
					}
				} catch (e) {
					console.error("Unable to add to cart: ", e); // FIXME error handling
				}

				return false;
			}
		} // CONCATENATED MODULE: ./src/javascripts/pages/SearchPage.js
		class SearchPage {
			constructor(theme, element) {
				this.loadSearchPage = () => {
					// Remove trailing '*' character from search input.
					const removeStar = this.searchInput.value.replace(/\*$/, "");
					this.searchInput.value = removeStar;
				};

				this.loadQuickAdd = () => {
					this.quickAddButtons = new QuickAdd(this.theme, this.element);
				};

				this.theme = theme;
				this.element = element;
				this.searchForm = this.element.querySelector("#search-page-form");
				this.searchInput = this.element.querySelector("#search_text");
				this.loadSearchPage();
				this.loadQuickAdd();
			}
		} // CONCATENATED MODULE: ./src/javascripts/pages/AddressPage.js
		class AddressPage {
			constructor(theme, element) {
				this.element = element;
				this.addressTables = this.element.querySelectorAll(".address_table");
				Array.prototype.forEach.call(this.addressTables, (address) => {
					address.addEventListener("click", (e) => {
						if (e.target.classList.contains("action_edit")) {
							e.target.setAttribute("aria-expanded", "true");
						}

						if (e.target.classList.contains("action_cancel")) {
							address.querySelector(".action_edit").setAttribute("aria-expanded", "false");
						}
					});
				});
			}
		} // CONCATENATED MODULE: ./node_modules/ssr-window/dist/ssr-window.esm.js
		/**
		 * SSR Window 2.0.0
		 * Better handling for window object in SSR environment
		 * https://github.com/nolimits4web/ssr-window
		 *
		 * Copyright 2020, Vladimir Kharlampidi
		 *
		 * Licensed under MIT
		 *
		 * Released on: May 12, 2020
		 */
		/* eslint-disable no-param-reassign */
		function ssr_window_esm_isObject(obj) {
			return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
		}
		function ssr_window_esm_extend(target, src) {
			if (target === void 0) {
				target = {};
			}
			if (src === void 0) {
				src = {};
			}
			Object.keys(src).forEach(function (key) {
				if (typeof target[key] === "undefined") target[key] = src[key];
				else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) {
					ssr_window_esm_extend(target[key], src[key]);
				}
			});
		}

		var doc = typeof document !== "undefined" ? document : {};
		var ssrDocument = {
			body: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: {
				blur: function () {},
				nodeName: "",
			},
			querySelector: function () {
				return null;
			},
			querySelectorAll: function () {
				return [];
			},
			getElementById: function () {
				return null;
			},
			createEvent: function () {
				return {
					initEvent: function () {},
				};
			},
			createElement: function () {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return [];
					},
				};
			},
			createElementNS: function () {
				return {};
			},
			importNode: function () {
				return null;
			},
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: "",
			},
		};
		ssr_window_esm_extend(doc, ssrDocument);

		var win = typeof window !== "undefined" ? window : {};
		var ssrWindow = {
			document: ssrDocument,
			navigator: {
				userAgent: "",
			},
			location: {
				hash: "",
				host: "",
				hostname: "",
				href: "",
				origin: "",
				pathname: "",
				protocol: "",
				search: "",
			},
			history: {
				replaceState: function () {},
				pushState: function () {},
				go: function () {},
				back: function () {},
			},
			CustomEvent: function CustomEvent() {
				return this;
			},
			addEventListener: function () {},
			removeEventListener: function () {},
			getComputedStyle: function () {
				return {
					getPropertyValue: function () {
						return "";
					},
				};
			},
			Image: function () {},
			Date: function () {},
			screen: {},
			setTimeout: function () {},
			clearTimeout: function () {},
			matchMedia: function () {
				return {};
			},
		};
		ssr_window_esm_extend(win, ssrWindow); // CONCATENATED MODULE: ./node_modules/dom7/dist/dom7.modular.js

		/**
		 * Dom7 2.1.5
		 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
		 * http://framework7.io/docs/dom.html
		 *
		 * Copyright 2020, Vladimir Kharlampidi
		 * The iDangero.us
		 * http://www.idangero.us/
		 *
		 * Licensed under MIT
		 *
		 * Released on: May 15, 2020
		 */

		class Dom7 {
			constructor(arr) {
				const self = this;
				// Create array-like object
				for (let i = 0; i < arr.length; i += 1) {
					self[i] = arr[i];
				}
				self.length = arr.length;
				// Return collection with methods
				return this;
			}
		}

		function $(selector, context) {
			const arr = [];
			let i = 0;
			if (selector && !context) {
				if (selector instanceof Dom7) {
					return selector;
				}
			}
			if (selector) {
				// String
				if (typeof selector === "string") {
					let els;
					let tempParent;
					const html = selector.trim();
					if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
						let toCreate = "div";
						if (html.indexOf("<li") === 0) toCreate = "ul";
						if (html.indexOf("<tr") === 0) toCreate = "tbody";
						if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) toCreate = "tr";
						if (html.indexOf("<tbody") === 0) toCreate = "table";
						if (html.indexOf("<option") === 0) toCreate = "select";
						tempParent = doc.createElement(toCreate);
						tempParent.innerHTML = html;
						for (i = 0; i < tempParent.childNodes.length; i += 1) {
							arr.push(tempParent.childNodes[i]);
						}
					} else {
						if (!context && selector[0] === "#" && !selector.match(/[ .<>:~]/)) {
							// Pure ID selector
							els = [doc.getElementById(selector.trim().split("#")[1])];
						} else {
							// Other selectors
							els = (context || doc).querySelectorAll(selector.trim());
						}
						for (i = 0; i < els.length; i += 1) {
							if (els[i]) arr.push(els[i]);
						}
					}
				} else if (selector.nodeType || selector === win || selector === doc) {
					// Node/element
					arr.push(selector);
				} else if (selector.length > 0 && selector[0].nodeType) {
					// Array of elements or instance of Dom
					for (i = 0; i < selector.length; i += 1) {
						arr.push(selector[i]);
					}
				}
			}
			return new Dom7(arr);
		}

		$.fn = Dom7.prototype;
		$.Class = Dom7;
		$.Dom7 = Dom7;

		function unique(arr) {
			const uniqueArray = [];
			for (let i = 0; i < arr.length; i += 1) {
				if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
			}
			return uniqueArray;
		}
		function toCamelCase(string) {
			return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());
		}

		function dom7_modular_requestAnimationFrame(callback) {
			if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
			else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
			return window.setTimeout(callback, 1000 / 60);
		}
		function cancelAnimationFrame(id) {
			if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);
			else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);
			return window.clearTimeout(id);
		}

		// Classes and attributes
		function dom7_modular_addClass(className) {
			if (typeof className === "undefined") {
				return this;
			}
			const classes = className.split(" ");
			for (let i = 0; i < classes.length; i += 1) {
				for (let j = 0; j < this.length; j += 1) {
					if (typeof this[j] !== "undefined" && typeof this[j].classList !== "undefined") this[j].classList.add(classes[i]);
				}
			}
			return this;
		}
		function dom7_modular_removeClass(className) {
			const classes = className.split(" ");
			for (let i = 0; i < classes.length; i += 1) {
				for (let j = 0; j < this.length; j += 1) {
					if (typeof this[j] !== "undefined" && typeof this[j].classList !== "undefined") this[j].classList.remove(classes[i]);
				}
			}
			return this;
		}
		function hasClass(className) {
			if (!this[0]) return false;
			return this[0].classList.contains(className);
		}
		function toggleClass(className) {
			const classes = className.split(" ");
			for (let i = 0; i < classes.length; i += 1) {
				for (let j = 0; j < this.length; j += 1) {
					if (typeof this[j] !== "undefined" && typeof this[j].classList !== "undefined") this[j].classList.toggle(classes[i]);
				}
			}
			return this;
		}
		function attr(attrs, value) {
			if (arguments.length === 1 && typeof attrs === "string") {
				// Get attr
				if (this[0]) return this[0].getAttribute(attrs);
				return undefined;
			}

			// Set attrs
			for (let i = 0; i < this.length; i += 1) {
				if (arguments.length === 2) {
					// String
					this[i].setAttribute(attrs, value);
				} else {
					// Object
					// eslint-disable-next-line
					for (const attrName in attrs) {
						this[i][attrName] = attrs[attrName];
						this[i].setAttribute(attrName, attrs[attrName]);
					}
				}
			}
			return this;
		}
		// eslint-disable-next-line
		function removeAttr(attr) {
			for (let i = 0; i < this.length; i += 1) {
				this[i].removeAttribute(attr);
			}
			return this;
		}
		// eslint-disable-next-line
		function prop(props, value) {
			if (arguments.length === 1 && typeof props === "string") {
				// Get prop
				if (this[0]) return this[0][props];
			} else {
				// Set props
				for (let i = 0; i < this.length; i += 1) {
					if (arguments.length === 2) {
						// String
						this[i][props] = value;
					} else {
						// Object
						// eslint-disable-next-line
						for (const propName in props) {
							this[i][propName] = props[propName];
						}
					}
				}
				return this;
			}
		}
		function data(key, value) {
			let el;
			if (typeof value === "undefined") {
				el = this[0];
				// Get value
				if (el) {
					if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
						return el.dom7ElementDataStorage[key];
					}

					const dataKey = el.getAttribute(`data-${key}`);
					if (dataKey) {
						return dataKey;
					}
					return undefined;
				}
				return undefined;
			}

			// Set value
			for (let i = 0; i < this.length; i += 1) {
				el = this[i];
				if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
				el.dom7ElementDataStorage[key] = value;
			}
			return this;
		}
		function removeData(key) {
			for (let i = 0; i < this.length; i += 1) {
				const el = this[i];
				if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
					el.dom7ElementDataStorage[key] = null;
					delete el.dom7ElementDataStorage[key];
				}
			}
		}
		function dataset() {
			const el = this[0];
			if (!el) return undefined;
			const dataset = {}; // eslint-disable-line
			if (el.dataset) {
				// eslint-disable-next-line
				for (const dataKey in el.dataset) {
					dataset[dataKey] = el.dataset[dataKey];
				}
			} else {
				for (let i = 0; i < el.attributes.length; i += 1) {
					// eslint-disable-next-line
					const attr = el.attributes[i];
					if (attr.name.indexOf("data-") >= 0) {
						dataset[toCamelCase(attr.name.split("data-")[1])] = attr.value;
					}
				}
			}
			// eslint-disable-next-line
			for (const key in dataset) {
				if (dataset[key] === "false") dataset[key] = false;
				else if (dataset[key] === "true") dataset[key] = true;
				else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
			}
			return dataset;
		}
		function val(value) {
			const dom = this;
			if (typeof value === "undefined") {
				if (dom[0]) {
					if (dom[0].multiple && dom[0].nodeName.toLowerCase() === "select") {
						const values = [];
						for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
							values.push(dom[0].selectedOptions[i].value);
						}
						return values;
					}
					return dom[0].value;
				}
				return undefined;
			}

			for (let i = 0; i < dom.length; i += 1) {
				const el = dom[i];
				if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === "select") {
					for (let j = 0; j < el.options.length; j += 1) {
						el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
					}
				} else {
					el.value = value;
				}
			}
			return dom;
		}
		// Transforms
		// eslint-disable-next-line
		function transform(transform) {
			for (let i = 0; i < this.length; i += 1) {
				const elStyle = this[i].style;
				elStyle.webkitTransform = transform;
				elStyle.transform = transform;
			}
			return this;
		}
		function dom7_modular_transition(duration) {
			if (typeof duration !== "string") {
				duration = `${duration}ms`; // eslint-disable-line
			}
			for (let i = 0; i < this.length; i += 1) {
				const elStyle = this[i].style;
				elStyle.webkitTransitionDuration = duration;
				elStyle.transitionDuration = duration;
			}
			return this;
		}
		// Events
		function on(...args) {
			let [eventType, targetSelector, listener, capture] = args;
			if (typeof args[1] === "function") {
				[eventType, listener, capture] = args;
				targetSelector = undefined;
			}
			if (!capture) capture = false;

			function handleLiveEvent(e) {
				const target = e.target;
				if (!target) return;
				const eventData = e.target.dom7EventData || [];
				if (eventData.indexOf(e) < 0) {
					eventData.unshift(e);
				}
				if ($(target).is(targetSelector)) listener.apply(target, eventData);
				else {
					const parents = $(target).parents(); // eslint-disable-line
					for (let k = 0; k < parents.length; k += 1) {
						if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
					}
				}
			}
			function handleEvent(e) {
				const eventData = e && e.target ? e.target.dom7EventData || [] : [];
				if (eventData.indexOf(e) < 0) {
					eventData.unshift(e);
				}
				listener.apply(this, eventData);
			}
			const events = eventType.split(" ");
			let j;
			for (let i = 0; i < this.length; i += 1) {
				const el = this[i];
				if (!targetSelector) {
					for (j = 0; j < events.length; j += 1) {
						const event = events[j];
						if (!el.dom7Listeners) el.dom7Listeners = {};
						if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
						el.dom7Listeners[event].push({
							listener,
							proxyListener: handleEvent,
						});
						el.addEventListener(event, handleEvent, capture);
					}
				} else {
					// Live events
					for (j = 0; j < events.length; j += 1) {
						const event = events[j];
						if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
						if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
						el.dom7LiveListeners[event].push({
							listener,
							proxyListener: handleLiveEvent,
						});
						el.addEventListener(event, handleLiveEvent, capture);
					}
				}
			}
			return this;
		}
		function off(...args) {
			let [eventType, targetSelector, listener, capture] = args;
			if (typeof args[1] === "function") {
				[eventType, listener, capture] = args;
				targetSelector = undefined;
			}
			if (!capture) capture = false;

			const events = eventType.split(" ");
			for (let i = 0; i < events.length; i += 1) {
				const event = events[i];
				for (let j = 0; j < this.length; j += 1) {
					const el = this[j];
					let handlers;
					if (!targetSelector && el.dom7Listeners) {
						handlers = el.dom7Listeners[event];
					} else if (targetSelector && el.dom7LiveListeners) {
						handlers = el.dom7LiveListeners[event];
					}
					if (handlers && handlers.length) {
						for (let k = handlers.length - 1; k >= 0; k -= 1) {
							const handler = handlers[k];
							if (listener && handler.listener === listener) {
								el.removeEventListener(event, handler.proxyListener, capture);
								handlers.splice(k, 1);
							} else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
								el.removeEventListener(event, handler.proxyListener, capture);
								handlers.splice(k, 1);
							} else if (!listener) {
								el.removeEventListener(event, handler.proxyListener, capture);
								handlers.splice(k, 1);
							}
						}
					}
				}
			}
			return this;
		}
		function dom7_modular_once(...args) {
			const dom = this;
			let [eventName, targetSelector, listener, capture] = args;
			if (typeof args[1] === "function") {
				[eventName, listener, capture] = args;
				targetSelector = undefined;
			}
			function onceHandler(...eventArgs) {
				listener.apply(this, eventArgs);
				dom.off(eventName, targetSelector, onceHandler, capture);
				if (onceHandler.dom7proxy) {
					delete onceHandler.dom7proxy;
				}
			}
			onceHandler.dom7proxy = listener;
			return dom.on(eventName, targetSelector, onceHandler, capture);
		}
		function dom7_modular_trigger(...args) {
			const events = args[0].split(" ");
			const eventData = args[1];
			for (let i = 0; i < events.length; i += 1) {
				const event = events[i];
				for (let j = 0; j < this.length; j += 1) {
					const el = this[j];
					let evt;
					try {
						evt = new win.CustomEvent(event, {
							detail: eventData,
							bubbles: true,
							cancelable: true,
						});
					} catch (e) {
						evt = doc.createEvent("Event");
						evt.initEvent(event, true, true);
						evt.detail = eventData;
					}
					// eslint-disable-next-line
					el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
					el.dispatchEvent(evt);
					el.dom7EventData = [];
					delete el.dom7EventData;
				}
			}
			return this;
		}
		function transitionEnd(callback) {
			const events = ["webkitTransitionEnd", "transitionend"];
			const dom = this;
			let i;
			function fireCallBack(e) {
				/* jshint validthis:true */
				if (e.target !== this) return;
				callback.call(this, e);
				for (i = 0; i < events.length; i += 1) {
					dom.off(events[i], fireCallBack);
				}
			}
			if (callback) {
				for (i = 0; i < events.length; i += 1) {
					dom.on(events[i], fireCallBack);
				}
			}
			return this;
		}
		function animationEnd(callback) {
			const events = ["webkitAnimationEnd", "animationend"];
			const dom = this;
			let i;
			function fireCallBack(e) {
				if (e.target !== this) return;
				callback.call(this, e);
				for (i = 0; i < events.length; i += 1) {
					dom.off(events[i], fireCallBack);
				}
			}
			if (callback) {
				for (i = 0; i < events.length; i += 1) {
					dom.on(events[i], fireCallBack);
				}
			}
			return this;
		}
		// Sizing/Styles
		function width() {
			if (this[0] === window) {
				return window.innerWidth;
			}

			if (this.length > 0) {
				return parseFloat(this.css("width"));
			}

			return null;
		}
		function dom7_modular_outerWidth(includeMargins) {
			if (this.length > 0) {
				if (includeMargins) {
					// eslint-disable-next-line
					const styles = this.styles();
					return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
				}
				return this[0].offsetWidth;
			}
			return null;
		}
		function height() {
			if (this[0] === window) {
				return window.innerHeight;
			}

			if (this.length > 0) {
				return parseFloat(this.css("height"));
			}

			return null;
		}
		function dom7_modular_outerHeight(includeMargins) {
			if (this.length > 0) {
				if (includeMargins) {
					// eslint-disable-next-line
					const styles = this.styles();
					return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
				}
				return this[0].offsetHeight;
			}
			return null;
		}
		function offset() {
			if (this.length > 0) {
				const el = this[0];
				const box = el.getBoundingClientRect();
				const body = doc.body;
				const clientTop = el.clientTop || body.clientTop || 0;
				const clientLeft = el.clientLeft || body.clientLeft || 0;
				const scrollTop = el === win ? win.scrollY : el.scrollTop;
				const scrollLeft = el === win ? win.scrollX : el.scrollLeft;
				return {
					top: box.top + scrollTop - clientTop,
					left: box.left + scrollLeft - clientLeft,
				};
			}

			return null;
		}
		function hide() {
			for (let i = 0; i < this.length; i += 1) {
				this[i].style.display = "none";
			}
			return this;
		}
		function dom7_modular_show() {
			for (let i = 0; i < this.length; i += 1) {
				const el = this[i];
				if (el.style.display === "none") {
					el.style.display = "";
				}
				if (window.getComputedStyle(el, null).getPropertyValue("display") === "none") {
					// Still not visible
					el.style.display = "block";
				}
			}
			return this;
		}
		function styles() {
			if (this[0]) return win.getComputedStyle(this[0], null);
			return {};
		}
		function css(props, value) {
			let i;
			if (arguments.length === 1) {
				if (typeof props === "string") {
					if (this[0]) return win.getComputedStyle(this[0], null).getPropertyValue(props);
				} else {
					for (i = 0; i < this.length; i += 1) {
						// eslint-disable-next-line
						for (let prop in props) {
							this[i].style[prop] = props[prop];
						}
					}
					return this;
				}
			}
			if (arguments.length === 2 && typeof props === "string") {
				for (i = 0; i < this.length; i += 1) {
					this[i].style[props] = value;
				}
				return this;
			}
			return this;
		}

		// Dom manipulation
		function dom7_modular_toArray() {
			const arr = [];
			for (let i = 0; i < this.length; i += 1) {
				arr.push(this[i]);
			}
			return arr;
		}
		// Iterate over the collection passing elements to `callback`
		function each(callback) {
			// Don't bother continuing without a callback
			if (!callback) return this;
			// Iterate over the current collection
			for (let i = 0; i < this.length; i += 1) {
				// If the callback returns false
				if (callback.call(this[i], i, this[i]) === false) {
					// End the loop early
					return this;
				}
			}
			// Return `this` to allow chained DOM operations
			return this;
		}
		function forEach(callback) {
			// Don't bother continuing without a callback
			if (!callback) return this;
			// Iterate over the current collection
			for (let i = 0; i < this.length; i += 1) {
				// If the callback returns false
				if (callback.call(this[i], this[i], i) === false) {
					// End the loop early
					return this;
				}
			}
			// Return `this` to allow chained DOM operations
			return this;
		}
		function filter(callback) {
			const matchedItems = [];
			const dom = this;
			for (let i = 0; i < dom.length; i += 1) {
				if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
			}
			return new Dom7(matchedItems);
		}
		function map(callback) {
			const modifiedItems = [];
			const dom = this;
			for (let i = 0; i < dom.length; i += 1) {
				modifiedItems.push(callback.call(dom[i], i, dom[i]));
			}
			return new Dom7(modifiedItems);
		}
		// eslint-disable-next-line
		function html(html) {
			if (typeof html === "undefined") {
				return this[0] ? this[0].innerHTML : undefined;
			}

			for (let i = 0; i < this.length; i += 1) {
				this[i].innerHTML = html;
			}
			return this;
		}
		// eslint-disable-next-line
		function dom7_modular_text(text) {
			if (typeof text === "undefined") {
				if (this[0]) {
					return this[0].textContent.trim();
				}
				return null;
			}

			for (let i = 0; i < this.length; i += 1) {
				this[i].textContent = text;
			}
			return this;
		}
		function is(selector) {
			const el = this[0];
			let compareWith;
			let i;
			if (!el || typeof selector === "undefined") return false;
			if (typeof selector === "string") {
				if (el.matches) return el.matches(selector);
				else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
				else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

				compareWith = $(selector);
				for (i = 0; i < compareWith.length; i += 1) {
					if (compareWith[i] === el) return true;
				}
				return false;
			} else if (selector === doc) return el === doc;
			else if (selector === win) return el === win;

			if (selector.nodeType || selector instanceof Dom7) {
				compareWith = selector.nodeType ? [selector] : selector;
				for (i = 0; i < compareWith.length; i += 1) {
					if (compareWith[i] === el) return true;
				}
				return false;
			}
			return false;
		}
		function indexOf(el) {
			for (let i = 0; i < this.length; i += 1) {
				if (this[i] === el) return i;
			}
			return -1;
		}
		function dom7_modular_index() {
			let child = this[0];
			let i;
			if (child) {
				i = 0;
				// eslint-disable-next-line
				while ((child = child.previousSibling) !== null) {
					if (child.nodeType === 1) i += 1;
				}
				return i;
			}
			return undefined;
		}
		// eslint-disable-next-line
		function eq(index) {
			if (typeof index === "undefined") return this;
			const length = this.length;
			let returnIndex;
			if (index > length - 1) {
				return new Dom7([]);
			}
			if (index < 0) {
				returnIndex = length + index;
				if (returnIndex < 0) return new Dom7([]);
				return new Dom7([this[returnIndex]]);
			}
			return new Dom7([this[index]]);
		}
		function append(...args) {
			let newChild;

			for (let k = 0; k < args.length; k += 1) {
				newChild = args[k];
				for (let i = 0; i < this.length; i += 1) {
					if (typeof newChild === "string") {
						const tempDiv = doc.createElement("div");
						tempDiv.innerHTML = newChild;
						while (tempDiv.firstChild) {
							this[i].appendChild(tempDiv.firstChild);
						}
					} else if (newChild instanceof Dom7) {
						for (let j = 0; j < newChild.length; j += 1) {
							this[i].appendChild(newChild[j]);
						}
					} else {
						this[i].appendChild(newChild);
					}
				}
			}

			return this;
		}
		// eslint-disable-next-line
		function appendTo(parent) {
			$(parent).append(this);
			return this;
		}
		function prepend(newChild) {
			let i;
			let j;
			for (i = 0; i < this.length; i += 1) {
				if (typeof newChild === "string") {
					const tempDiv = doc.createElement("div");
					tempDiv.innerHTML = newChild;
					for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
						this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
					}
				} else if (newChild instanceof Dom7) {
					for (j = 0; j < newChild.length; j += 1) {
						this[i].insertBefore(newChild[j], this[i].childNodes[0]);
					}
				} else {
					this[i].insertBefore(newChild, this[i].childNodes[0]);
				}
			}
			return this;
		}
		// eslint-disable-next-line
		function prependTo(parent) {
			$(parent).prepend(this);
			return this;
		}
		function dom7_modular_insertBefore(selector) {
			const before = $(selector);
			for (let i = 0; i < this.length; i += 1) {
				if (before.length === 1) {
					before[0].parentNode.insertBefore(this[i], before[0]);
				} else if (before.length > 1) {
					for (let j = 0; j < before.length; j += 1) {
						before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
					}
				}
			}
		}
		function insertAfter(selector) {
			const after = $(selector);
			for (let i = 0; i < this.length; i += 1) {
				if (after.length === 1) {
					after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
				} else if (after.length > 1) {
					for (let j = 0; j < after.length; j += 1) {
						after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
					}
				}
			}
		}
		function next(selector) {
			if (this.length > 0) {
				if (selector) {
					if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
						return new Dom7([this[0].nextElementSibling]);
					}
					return new Dom7([]);
				}

				if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
				return new Dom7([]);
			}
			return new Dom7([]);
		}
		function nextAll(selector) {
			const nextEls = [];
			let el = this[0];
			if (!el) return new Dom7([]);
			while (el.nextElementSibling) {
				const next = el.nextElementSibling; // eslint-disable-line
				if (selector) {
					if ($(next).is(selector)) nextEls.push(next);
				} else nextEls.push(next);
				el = next;
			}
			return new Dom7(nextEls);
		}
		function prev(selector) {
			if (this.length > 0) {
				const el = this[0];
				if (selector) {
					if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
						return new Dom7([el.previousElementSibling]);
					}
					return new Dom7([]);
				}

				if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
				return new Dom7([]);
			}
			return new Dom7([]);
		}
		function prevAll(selector) {
			const prevEls = [];
			let el = this[0];
			if (!el) return new Dom7([]);
			while (el.previousElementSibling) {
				const prev = el.previousElementSibling; // eslint-disable-line
				if (selector) {
					if ($(prev).is(selector)) prevEls.push(prev);
				} else prevEls.push(prev);
				el = prev;
			}
			return new Dom7(prevEls);
		}
		function siblings(selector) {
			return this.nextAll(selector).add(this.prevAll(selector));
		}
		function dom7_modular_parent(selector) {
			const parents = []; // eslint-disable-line
			for (let i = 0; i < this.length; i += 1) {
				if (this[i].parentNode !== null) {
					if (selector) {
						if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
					} else {
						parents.push(this[i].parentNode);
					}
				}
			}
			return $(unique(parents));
		}
		function parents(selector) {
			const parents = []; // eslint-disable-line
			for (let i = 0; i < this.length; i += 1) {
				let parent = this[i].parentNode; // eslint-disable-line
				while (parent) {
					if (selector) {
						if ($(parent).is(selector)) parents.push(parent);
					} else {
						parents.push(parent);
					}
					parent = parent.parentNode;
				}
			}
			return $(unique(parents));
		}
		function closest(selector) {
			let closest = this; // eslint-disable-line
			if (typeof selector === "undefined") {
				return new Dom7([]);
			}
			if (!closest.is(selector)) {
				closest = closest.parents(selector).eq(0);
			}
			return closest;
		}
		function find(selector) {
			const foundElements = [];
			for (let i = 0; i < this.length; i += 1) {
				const found = this[i].querySelectorAll(selector);
				for (let j = 0; j < found.length; j += 1) {
					foundElements.push(found[j]);
				}
			}
			return new Dom7(foundElements);
		}
		function children(selector) {
			const children = []; // eslint-disable-line
			for (let i = 0; i < this.length; i += 1) {
				const childNodes = this[i].childNodes;

				for (let j = 0; j < childNodes.length; j += 1) {
					if (!selector) {
						if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
					} else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
						children.push(childNodes[j]);
					}
				}
			}
			return new Dom7(unique(children));
		}
		function dom7_modular_remove() {
			for (let i = 0; i < this.length; i += 1) {
				if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
			}
			return this;
		}
		function detach() {
			return this.remove();
		}
		function dom7_modular_add(...args) {
			const dom = this;
			let i;
			let j;
			for (i = 0; i < args.length; i += 1) {
				const toAdd = $(args[i]);
				for (j = 0; j < toAdd.length; j += 1) {
					dom[dom.length] = toAdd[j];
					dom.length += 1;
				}
			}
			return dom;
		}
		function empty() {
			for (let i = 0; i < this.length; i += 1) {
				const el = this[i];
				if (el.nodeType === 1) {
					for (let j = 0; j < el.childNodes.length; j += 1) {
						if (el.childNodes[j].parentNode) {
							el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
						}
					}
					el.textContent = "";
				}
			}
			return this;
		}

		function scrollTo(...args) {
			let [left, top, duration, easing, callback] = args;
			if (args.length === 4 && typeof easing === "function") {
				callback = easing;
				[left, top, duration, callback, easing] = args;
			}
			if (typeof easing === "undefined") easing = "swing";

			return this.each(function animate() {
				const el = this;
				let currentTop;
				let currentLeft;
				let maxTop;
				let maxLeft;
				let newTop;
				let newLeft;
				let scrollTop; // eslint-disable-line
				let scrollLeft; // eslint-disable-line
				let animateTop = top > 0 || top === 0;
				let animateLeft = left > 0 || left === 0;
				if (typeof easing === "undefined") {
					easing = "swing";
				}
				if (animateTop) {
					currentTop = el.scrollTop;
					if (!duration) {
						el.scrollTop = top;
					}
				}
				if (animateLeft) {
					currentLeft = el.scrollLeft;
					if (!duration) {
						el.scrollLeft = left;
					}
				}
				if (!duration) return;
				if (animateTop) {
					maxTop = el.scrollHeight - el.offsetHeight;
					newTop = Math.max(Math.min(top, maxTop), 0);
				}
				if (animateLeft) {
					maxLeft = el.scrollWidth - el.offsetWidth;
					newLeft = Math.max(Math.min(left, maxLeft), 0);
				}
				let startTime = null;
				if (animateTop && newTop === currentTop) animateTop = false;
				if (animateLeft && newLeft === currentLeft) animateLeft = false;
				function render(time = new Date().getTime()) {
					if (startTime === null) {
						startTime = time;
					}
					const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
					const easeProgress = easing === "linear" ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
					let done;
					if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
					if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
					if (animateTop && newTop > currentTop && scrollTop >= newTop) {
						el.scrollTop = newTop;
						done = true;
					}
					if (animateTop && newTop < currentTop && scrollTop <= newTop) {
						el.scrollTop = newTop;
						done = true;
					}
					if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
						el.scrollLeft = newLeft;
						done = true;
					}
					if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
						el.scrollLeft = newLeft;
						done = true;
					}

					if (done) {
						if (callback) callback();
						return;
					}
					if (animateTop) el.scrollTop = scrollTop;
					if (animateLeft) el.scrollLeft = scrollLeft;
					dom7_modular_requestAnimationFrame(render);
				}
				dom7_modular_requestAnimationFrame(render);
			});
		}
		// scrollTop(top, duration, easing, callback) {
		function scrollTop(...args) {
			let [top, duration, easing, callback] = args;
			if (args.length === 3 && typeof easing === "function") {
				[top, duration, callback, easing] = args;
			}
			const dom = this;
			if (typeof top === "undefined") {
				if (dom.length > 0) return dom[0].scrollTop;
				return null;
			}
			return dom.scrollTo(undefined, top, duration, easing, callback);
		}
		function scrollLeft(...args) {
			let [left, duration, easing, callback] = args;
			if (args.length === 3 && typeof easing === "function") {
				[left, duration, callback, easing] = args;
			}
			const dom = this;
			if (typeof left === "undefined") {
				if (dom.length > 0) return dom[0].scrollLeft;
				return null;
			}
			return dom.scrollTo(left, undefined, duration, easing, callback);
		}

		function animate(initialProps, initialParams) {
			const els = this;
			const a = {
				props: Object.assign({}, initialProps),
				params: Object.assign(
					{
						duration: 300,
						easing: "swing", // or 'linear'
						/* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
					},
					initialParams
				),

				elements: els,
				animating: false,
				que: [],

				easingProgress(easing, progress) {
					if (easing === "swing") {
						return 0.5 - Math.cos(progress * Math.PI) / 2;
					}
					if (typeof easing === "function") {
						return easing(progress);
					}
					return progress;
				},
				stop() {
					if (a.frameId) {
						cancelAnimationFrame(a.frameId);
					}
					a.animating = false;
					a.elements.each((index, el) => {
						const element = el;
						delete element.dom7AnimateInstance;
					});
					a.que = [];
				},
				done(complete) {
					a.animating = false;
					a.elements.each((index, el) => {
						const element = el;
						delete element.dom7AnimateInstance;
					});
					if (complete) complete(els);
					if (a.que.length > 0) {
						const que = a.que.shift();
						a.animate(que[0], que[1]);
					}
				},
				animate(props, params) {
					if (a.animating) {
						a.que.push([props, params]);
						return a;
					}
					const elements = [];

					// Define & Cache Initials & Units
					a.elements.each((index, el) => {
						let initialFullValue;
						let initialValue;
						let unit;
						let finalValue;
						let finalFullValue;

						if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

						elements[index] = {
							container: el,
						};
						Object.keys(props).forEach((prop) => {
							initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(",", ".");
							initialValue = parseFloat(initialFullValue);
							unit = initialFullValue.replace(initialValue, "");
							finalValue = parseFloat(props[prop]);
							finalFullValue = props[prop] + unit;
							elements[index][prop] = {
								initialFullValue,
								initialValue,
								unit,
								finalValue,
								finalFullValue,
								currentValue: initialValue,
							};
						});
					});

					let startTime = null;
					let time;
					let elementsDone = 0;
					let propsDone = 0;
					let done;
					let began = false;

					a.animating = true;

					function render() {
						time = new Date().getTime();
						let progress;
						let easeProgress;
						// let el;
						if (!began) {
							began = true;
							if (params.begin) params.begin(els);
						}
						if (startTime === null) {
							startTime = time;
						}
						if (params.progress) {
							// eslint-disable-next-line
							params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
						}

						elements.forEach((element) => {
							const el = element;
							if (done || el.done) return;
							Object.keys(props).forEach((prop) => {
								if (done || el.done) return;
								progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
								easeProgress = a.easingProgress(params.easing, progress);
								const { initialValue, finalValue, unit } = el[prop];
								el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
								const currentValue = el[prop].currentValue;

								if ((finalValue > initialValue && currentValue >= finalValue) || (finalValue < initialValue && currentValue <= finalValue)) {
									el.container.style[prop] = finalValue + unit;
									propsDone += 1;
									if (propsDone === Object.keys(props).length) {
										el.done = true;
										elementsDone += 1;
									}
									if (elementsDone === elements.length) {
										done = true;
									}
								}
								if (done) {
									a.done(params.complete);
									return;
								}
								el.container.style[prop] = currentValue + unit;
							});
						});
						if (done) return;
						// Then call
						a.frameId = dom7_modular_requestAnimationFrame(render);
					}
					a.frameId = dom7_modular_requestAnimationFrame(render);
					return a;
				},
			};

			if (a.elements.length === 0) {
				return els;
			}

			let animateInstance;
			for (let i = 0; i < a.elements.length; i += 1) {
				if (a.elements[i].dom7AnimateInstance) {
					animateInstance = a.elements[i].dom7AnimateInstance;
				} else a.elements[i].dom7AnimateInstance = a;
			}
			if (!animateInstance) {
				animateInstance = a;
			}

			if (initialProps === "stop") {
				animateInstance.stop();
			} else {
				animateInstance.animate(a.props, a.params);
			}

			return els;
		}

		function stop() {
			const els = this;
			for (let i = 0; i < els.length; i += 1) {
				if (els[i].dom7AnimateInstance) {
					els[i].dom7AnimateInstance.stop();
				}
			}
		}

		const noTrigger = "resize scroll".split(" ");
		function eventShortcut(name, ...args) {
			if (typeof args[0] === "undefined") {
				for (let i = 0; i < this.length; i += 1) {
					if (noTrigger.indexOf(name) < 0) {
						if (name in this[i]) this[i][name]();
						else {
							$(this[i]).trigger(name);
						}
					}
				}
				return this;
			}
			return this.on(name, ...args);
		}

		function click(...args) {
			return eventShortcut.bind(this)("click", ...args);
		}
		function dom7_modular_blur(...args) {
			return eventShortcut.bind(this)("blur", ...args);
		}
		function dom7_modular_focus(...args) {
			return eventShortcut.bind(this)("focus", ...args);
		}
		function focusin(...args) {
			return eventShortcut.bind(this)("focusin", ...args);
		}
		function focusout(...args) {
			return eventShortcut.bind(this)("focusout", ...args);
		}
		function keyup(...args) {
			return eventShortcut.bind(this)("keyup", ...args);
		}
		function keydown(...args) {
			return eventShortcut.bind(this)("keydown", ...args);
		}
		function keypress(...args) {
			return eventShortcut.bind(this)("keypress", ...args);
		}
		function dom7_modular_submit(...args) {
			return eventShortcut.bind(this)("submit", ...args);
		}
		function change(...args) {
			return eventShortcut.bind(this)("change", ...args);
		}
		function mousedown(...args) {
			return eventShortcut.bind(this)("mousedown", ...args);
		}
		function mousemove(...args) {
			return eventShortcut.bind(this)("mousemove", ...args);
		}
		function mouseup(...args) {
			return eventShortcut.bind(this)("mouseup", ...args);
		}
		function mouseenter(...args) {
			return eventShortcut.bind(this)("mouseenter", ...args);
		}
		function mouseleave(...args) {
			return eventShortcut.bind(this)("mouseleave", ...args);
		}
		function mouseout(...args) {
			return eventShortcut.bind(this)("mouseout", ...args);
		}
		function mouseover(...args) {
			return eventShortcut.bind(this)("mouseover", ...args);
		}
		function touchstart(...args) {
			return eventShortcut.bind(this)("touchstart", ...args);
		}
		function touchend(...args) {
			return eventShortcut.bind(this)("touchend", ...args);
		}
		function touchmove(...args) {
			return eventShortcut.bind(this)("touchmove", ...args);
		}
		function resize(...args) {
			return eventShortcut.bind(this)("resize", ...args);
		}
		function dom7_modular_scroll(...args) {
			return eventShortcut.bind(this)("scroll", ...args);
		} // CONCATENATED MODULE: ./node_modules/swiper/js/swiper.esm.bundle.js

		/**
		 * Swiper 5.4.5
		 * Most modern mobile touch slider and framework with hardware accelerated transitions
		 * http://swiperjs.com
		 *
		 * Copyright 2014-2020 Vladimir Kharlampidi
		 *
		 * Released under the MIT License
		 *
		 * Released on: June 16, 2020
		 */

		const Methods = {
			addClass: dom7_modular_addClass,
			removeClass: dom7_modular_removeClass,
			hasClass: hasClass,
			toggleClass: toggleClass,
			attr: attr,
			removeAttr: removeAttr,
			data: data,
			transform: transform,
			transition: dom7_modular_transition,
			on: on,
			off: off,
			trigger: dom7_modular_trigger,
			transitionEnd: transitionEnd,
			outerWidth: dom7_modular_outerWidth,
			outerHeight: dom7_modular_outerHeight,
			offset: offset,
			css: css,
			each: each,
			html: html,
			text: dom7_modular_text,
			is: is,
			index: dom7_modular_index,
			eq: eq,
			append: append,
			prepend: prepend,
			next: next,
			nextAll: nextAll,
			prev: prev,
			prevAll: prevAll,
			parent: dom7_modular_parent,
			parents: parents,
			closest: closest,
			find: find,
			children: children,
			filter: filter,
			remove: dom7_modular_remove,
			add: dom7_modular_add,
			styles: styles,
		};

		Object.keys(Methods).forEach((methodName) => {
			$.fn[methodName] = $.fn[methodName] || Methods[methodName];
		});

		const Utils = {
			deleteProps(obj) {
				const object = obj;
				Object.keys(object).forEach((key) => {
					try {
						object[key] = null;
					} catch (e) {
						// no getter for object
					}
					try {
						delete object[key];
					} catch (e) {
						// something got wrong
					}
				});
			},
			nextTick(callback, delay = 0) {
				return setTimeout(callback, delay);
			},
			now() {
				return Date.now();
			},
			getTranslate(el, axis = "x") {
				let matrix;
				let curTransform;
				let transformMatrix;

				const curStyle = win.getComputedStyle(el, null);

				if (win.WebKitCSSMatrix) {
					curTransform = curStyle.transform || curStyle.webkitTransform;
					if (curTransform.split(",").length > 6) {
						curTransform = curTransform
							.split(", ")
							.map((a) => a.replace(",", "."))
							.join(", ");
					}
					// Some old versions of Webkit choke when 'none' is passed; pass
					// empty string instead in this case
					transformMatrix = new win.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
				} else {
					transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
					matrix = transformMatrix.toString().split(",");
				}

				if (axis === "x") {
					// Latest Chrome and webkits Fix
					if (win.WebKitCSSMatrix) curTransform = transformMatrix.m41;
					// Crazy IE10 Matrix
					else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
					// Normal Browsers
					else curTransform = parseFloat(matrix[4]);
				}
				if (axis === "y") {
					// Latest Chrome and webkits Fix
					if (win.WebKitCSSMatrix) curTransform = transformMatrix.m42;
					// Crazy IE10 Matrix
					else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
					// Normal Browsers
					else curTransform = parseFloat(matrix[5]);
				}
				return curTransform || 0;
			},
			parseUrlQuery(url) {
				const query = {};
				let urlToParse = url || win.location.href;
				let i;
				let params;
				let param;
				let length;
				if (typeof urlToParse === "string" && urlToParse.length) {
					urlToParse = urlToParse.indexOf("?") > -1 ? urlToParse.replace(/\S*\?/, "") : "";
					params = urlToParse.split("&").filter((paramsPart) => paramsPart !== "");
					length = params.length;

					for (i = 0; i < length; i += 1) {
						param = params[i].replace(/#\S+/g, "").split("=");
						query[decodeURIComponent(param[0])] = typeof param[1] === "undefined" ? undefined : decodeURIComponent(param[1]) || "";
					}
				}
				return query;
			},
			isObject(o) {
				return typeof o === "object" && o !== null && o.constructor && o.constructor === Object;
			},
			extend(...args) {
				const to = Object(args[0]);
				for (let i = 1; i < args.length; i += 1) {
					const nextSource = args[i];
					if (nextSource !== undefined && nextSource !== null) {
						const keysArray = Object.keys(Object(nextSource));
						for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
							const nextKey = keysArray[nextIndex];
							const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
							if (desc !== undefined && desc.enumerable) {
								if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
									Utils.extend(to[nextKey], nextSource[nextKey]);
								} else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
									to[nextKey] = {};
									Utils.extend(to[nextKey], nextSource[nextKey]);
								} else {
									to[nextKey] = nextSource[nextKey];
								}
							}
						}
					}
				}
				return to;
			},
		};

		const Support = (function Support() {
			return {
				touch: !!("ontouchstart" in win || (win.DocumentTouch && doc instanceof win.DocumentTouch)),

				pointerEvents: !!win.PointerEvent && "maxTouchPoints" in win.navigator && win.navigator.maxTouchPoints >= 0,

				observer: (function checkObserver() {
					return "MutationObserver" in win || "WebkitMutationObserver" in win;
				})(),

				passiveListener: (function checkPassiveListener() {
					let supportsPassive = false;
					try {
						const opts = Object.defineProperty({}, "passive", {
							// eslint-disable-next-line
							get() {
								supportsPassive = true;
							},
						});
						win.addEventListener("testPassiveListener", null, opts);
					} catch (e) {
						// No support
					}
					return supportsPassive;
				})(),

				gestures: (function checkGestures() {
					return "ongesturestart" in win;
				})(),
			};
		})();

		class SwiperClass {
			constructor(params = {}) {
				const self = this;
				self.params = params;

				// Events
				self.eventsListeners = {};

				if (self.params && self.params.on) {
					Object.keys(self.params.on).forEach((eventName) => {
						self.on(eventName, self.params.on[eventName]);
					});
				}
			}

			on(events, handler, priority) {
				const self = this;
				if (typeof handler !== "function") return self;
				const method = priority ? "unshift" : "push";
				events.split(" ").forEach((event) => {
					if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
					self.eventsListeners[event][method](handler);
				});
				return self;
			}

			once(events, handler, priority) {
				const self = this;
				if (typeof handler !== "function") return self;
				function onceHandler(...args) {
					self.off(events, onceHandler);
					if (onceHandler.f7proxy) {
						delete onceHandler.f7proxy;
					}
					handler.apply(self, args);
				}
				onceHandler.f7proxy = handler;
				return self.on(events, onceHandler, priority);
			}

			off(events, handler) {
				const self = this;
				if (!self.eventsListeners) return self;
				events.split(" ").forEach((event) => {
					if (typeof handler === "undefined") {
						self.eventsListeners[event] = [];
					} else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
						self.eventsListeners[event].forEach((eventHandler, index) => {
							if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
								self.eventsListeners[event].splice(index, 1);
							}
						});
					}
				});
				return self;
			}

			emit(...args) {
				const self = this;
				if (!self.eventsListeners) return self;
				let events;
				let data;
				let context;
				if (typeof args[0] === "string" || Array.isArray(args[0])) {
					events = args[0];
					data = args.slice(1, args.length);
					context = self;
				} else {
					events = args[0].events;
					data = args[0].data;
					context = args[0].context || self;
				}
				const eventsArray = Array.isArray(events) ? events : events.split(" ");
				eventsArray.forEach((event) => {
					if (self.eventsListeners && self.eventsListeners[event]) {
						const handlers = [];
						self.eventsListeners[event].forEach((eventHandler) => {
							handlers.push(eventHandler);
						});
						handlers.forEach((eventHandler) => {
							eventHandler.apply(context, data);
						});
					}
				});
				return self;
			}

			useModulesParams(instanceParams) {
				const instance = this;
				if (!instance.modules) return;
				Object.keys(instance.modules).forEach((moduleName) => {
					const module = instance.modules[moduleName];
					// Extend params
					if (module.params) {
						Utils.extend(instanceParams, module.params);
					}
				});
			}

			useModules(modulesParams = {}) {
				const instance = this;
				if (!instance.modules) return;
				Object.keys(instance.modules).forEach((moduleName) => {
					const module = instance.modules[moduleName];
					const moduleParams = modulesParams[moduleName] || {};
					// Extend instance methods and props
					if (module.instance) {
						Object.keys(module.instance).forEach((modulePropName) => {
							const moduleProp = module.instance[modulePropName];
							if (typeof moduleProp === "function") {
								instance[modulePropName] = moduleProp.bind(instance);
							} else {
								instance[modulePropName] = moduleProp;
							}
						});
					}
					// Add event listeners
					if (module.on && instance.on) {
						Object.keys(module.on).forEach((moduleEventName) => {
							instance.on(moduleEventName, module.on[moduleEventName]);
						});
					}

					// Module create callback
					if (module.create) {
						module.create.bind(instance)(moduleParams);
					}
				});
			}

			static set components(components) {
				const Class = this;
				if (!Class.use) return;
				Class.use(components);
			}

			static installModule(module, ...params) {
				const Class = this;
				if (!Class.prototype.modules) Class.prototype.modules = {};
				const name = module.name || `${Object.keys(Class.prototype.modules).length}_${Utils.now()}`;
				Class.prototype.modules[name] = module;
				// Prototype
				if (module.proto) {
					Object.keys(module.proto).forEach((key) => {
						Class.prototype[key] = module.proto[key];
					});
				}
				// Class
				if (module.static) {
					Object.keys(module.static).forEach((key) => {
						Class[key] = module.static[key];
					});
				}
				// Callback
				if (module.install) {
					module.install.apply(Class, params);
				}
				return Class;
			}

			static use(module, ...params) {
				const Class = this;
				if (Array.isArray(module)) {
					module.forEach((m) => Class.installModule(m));
					return Class;
				}
				return Class.installModule(module, ...params);
			}
		}

		function updateSize() {
			const swiper = this;
			let width;
			let height;
			const $el = swiper.$el;
			if (typeof swiper.params.width !== "undefined") {
				width = swiper.params.width;
			} else {
				width = $el[0].clientWidth;
			}
			if (typeof swiper.params.height !== "undefined") {
				height = swiper.params.height;
			} else {
				height = $el[0].clientHeight;
			}
			if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
				return;
			}

			// Subtract paddings
			width = width - parseInt($el.css("padding-left"), 10) - parseInt($el.css("padding-right"), 10);
			height = height - parseInt($el.css("padding-top"), 10) - parseInt($el.css("padding-bottom"), 10);

			Utils.extend(swiper, {
				width,
				height,
				size: swiper.isHorizontal() ? width : height,
			});
		}

		function updateSlides() {
			const swiper = this;
			const params = swiper.params;

			const { $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
			const isVirtual = swiper.virtual && params.virtual.enabled;
			const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
			const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
			const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
			let snapGrid = [];
			const slidesGrid = [];
			const slidesSizesGrid = [];

			function slidesForMargin(slideIndex) {
				if (!params.cssMode) return true;
				if (slideIndex === slides.length - 1) {
					return false;
				}
				return true;
			}

			let offsetBefore = params.slidesOffsetBefore;
			if (typeof offsetBefore === "function") {
				offsetBefore = params.slidesOffsetBefore.call(swiper);
			}

			let offsetAfter = params.slidesOffsetAfter;
			if (typeof offsetAfter === "function") {
				offsetAfter = params.slidesOffsetAfter.call(swiper);
			}

			const previousSnapGridLength = swiper.snapGrid.length;
			const previousSlidesGridLength = swiper.snapGrid.length;

			let spaceBetween = params.spaceBetween;
			let slidePosition = -offsetBefore;
			let prevSlideSize = 0;
			let index = 0;
			if (typeof swiperSize === "undefined") {
				return;
			}
			if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
				spaceBetween = (parseFloat(spaceBetween.replace("%", "")) / 100) * swiperSize;
			}

			swiper.virtualSize = -spaceBetween;

			// reset margins
			if (rtl) slides.css({ marginLeft: "", marginTop: "" });
			else slides.css({ marginRight: "", marginBottom: "" });

			let slidesNumberEvenToRows;
			if (params.slidesPerColumn > 1) {
				if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
					slidesNumberEvenToRows = slidesLength;
				} else {
					slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
				}
				if (params.slidesPerView !== "auto" && params.slidesPerColumnFill === "row") {
					slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
				}
			}

			// Calc slides
			let slideSize;
			const slidesPerColumn = params.slidesPerColumn;
			const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
			const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
			for (let i = 0; i < slidesLength; i += 1) {
				slideSize = 0;
				const slide = slides.eq(i);
				if (params.slidesPerColumn > 1) {
					// Set slides order
					let newSlideOrderIndex;
					let column;
					let row;
					if (params.slidesPerColumnFill === "row" && params.slidesPerGroup > 1) {
						const groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
						const slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
						const columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
						row = Math.floor(slideIndexInGroup / columnsInGroup);
						column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;

						newSlideOrderIndex = column + (row * slidesNumberEvenToRows) / slidesPerColumn;
						slide.css({
							"-webkit-box-ordinal-group": newSlideOrderIndex,
							"-moz-box-ordinal-group": newSlideOrderIndex,
							"-ms-flex-order": newSlideOrderIndex,
							"-webkit-order": newSlideOrderIndex,
							order: newSlideOrderIndex,
						});
					} else if (params.slidesPerColumnFill === "column") {
						column = Math.floor(i / slidesPerColumn);
						row = i - column * slidesPerColumn;
						if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
							row += 1;
							if (row >= slidesPerColumn) {
								row = 0;
								column += 1;
							}
						}
					} else {
						row = Math.floor(i / slidesPerRow);
						column = i - row * slidesPerRow;
					}
					slide.css(`margin-${swiper.isHorizontal() ? "top" : "left"}`, row !== 0 && params.spaceBetween && `${params.spaceBetween}px`);
				}
				if (slide.css("display") === "none") continue; // eslint-disable-line

				if (params.slidesPerView === "auto") {
					const slideStyles = win.getComputedStyle(slide[0], null);
					const currentTransform = slide[0].style.transform;
					const currentWebKitTransform = slide[0].style.webkitTransform;
					if (currentTransform) {
						slide[0].style.transform = "none";
					}
					if (currentWebKitTransform) {
						slide[0].style.webkitTransform = "none";
					}
					if (params.roundLengths) {
						slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
					} else {
						// eslint-disable-next-line
						if (swiper.isHorizontal()) {
							const width = parseFloat(slideStyles.getPropertyValue("width"));
							const paddingLeft = parseFloat(slideStyles.getPropertyValue("padding-left"));
							const paddingRight = parseFloat(slideStyles.getPropertyValue("padding-right"));
							const marginLeft = parseFloat(slideStyles.getPropertyValue("margin-left"));
							const marginRight = parseFloat(slideStyles.getPropertyValue("margin-right"));
							const boxSizing = slideStyles.getPropertyValue("box-sizing");
							if (boxSizing && boxSizing === "border-box") {
								slideSize = width + marginLeft + marginRight;
							} else {
								slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
							}
						} else {
							const height = parseFloat(slideStyles.getPropertyValue("height"));
							const paddingTop = parseFloat(slideStyles.getPropertyValue("padding-top"));
							const paddingBottom = parseFloat(slideStyles.getPropertyValue("padding-bottom"));
							const marginTop = parseFloat(slideStyles.getPropertyValue("margin-top"));
							const marginBottom = parseFloat(slideStyles.getPropertyValue("margin-bottom"));
							const boxSizing = slideStyles.getPropertyValue("box-sizing");
							if (boxSizing && boxSizing === "border-box") {
								slideSize = height + marginTop + marginBottom;
							} else {
								slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
							}
						}
					}
					if (currentTransform) {
						slide[0].style.transform = currentTransform;
					}
					if (currentWebKitTransform) {
						slide[0].style.webkitTransform = currentWebKitTransform;
					}
					if (params.roundLengths) slideSize = Math.floor(slideSize);
				} else {
					slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
					if (params.roundLengths) slideSize = Math.floor(slideSize);

					if (slides[i]) {
						if (swiper.isHorizontal()) {
							slides[i].style.width = `${slideSize}px`;
						} else {
							slides[i].style.height = `${slideSize}px`;
						}
					}
				}
				if (slides[i]) {
					slides[i].swiperSlideSize = slideSize;
				}
				slidesSizesGrid.push(slideSize);

				if (params.centeredSlides) {
					slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
					if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
					if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
					if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
					if (params.roundLengths) slidePosition = Math.floor(slidePosition);
					if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
					slidesGrid.push(slidePosition);
				} else {
					if (params.roundLengths) slidePosition = Math.floor(slidePosition);
					if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
					slidesGrid.push(slidePosition);
					slidePosition = slidePosition + slideSize + spaceBetween;
				}

				swiper.virtualSize += slideSize + spaceBetween;

				prevSlideSize = slideSize;

				index += 1;
			}
			swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
			let newSlidesGrid;

			if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
				$wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
			}
			if (params.setWrapperSize) {
				if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
				else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
			}

			if (params.slidesPerColumn > 1) {
				swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
				swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
				if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
				else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
				if (params.centeredSlides) {
					newSlidesGrid = [];
					for (let i = 0; i < snapGrid.length; i += 1) {
						let slidesGridItem = snapGrid[i];
						if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
						if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
					}
					snapGrid = newSlidesGrid;
				}
			}

			// Remove last grid elements depending on width
			if (!params.centeredSlides) {
				newSlidesGrid = [];
				for (let i = 0; i < snapGrid.length; i += 1) {
					let slidesGridItem = snapGrid[i];
					if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
					if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
						newSlidesGrid.push(slidesGridItem);
					}
				}
				snapGrid = newSlidesGrid;
				if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
					snapGrid.push(swiper.virtualSize - swiperSize);
				}
			}
			if (snapGrid.length === 0) snapGrid = [0];

			if (params.spaceBetween !== 0) {
				if (swiper.isHorizontal()) {
					if (rtl) slides.filter(slidesForMargin).css({ marginLeft: `${spaceBetween}px` });
					else slides.filter(slidesForMargin).css({ marginRight: `${spaceBetween}px` });
				} else slides.filter(slidesForMargin).css({ marginBottom: `${spaceBetween}px` });
			}

			if (params.centeredSlides && params.centeredSlidesBounds) {
				let allSlidesSize = 0;
				slidesSizesGrid.forEach((slideSizeValue) => {
					allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
				});
				allSlidesSize -= params.spaceBetween;
				const maxSnap = allSlidesSize - swiperSize;
				snapGrid = snapGrid.map((snap) => {
					if (snap < 0) return -offsetBefore;
					if (snap > maxSnap) return maxSnap + offsetAfter;
					return snap;
				});
			}

			if (params.centerInsufficientSlides) {
				let allSlidesSize = 0;
				slidesSizesGrid.forEach((slideSizeValue) => {
					allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
				});
				allSlidesSize -= params.spaceBetween;
				if (allSlidesSize < swiperSize) {
					const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
					snapGrid.forEach((snap, snapIndex) => {
						snapGrid[snapIndex] = snap - allSlidesOffset;
					});
					slidesGrid.forEach((snap, snapIndex) => {
						slidesGrid[snapIndex] = snap + allSlidesOffset;
					});
				}
			}

			Utils.extend(swiper, {
				slides,
				snapGrid,
				slidesGrid,
				slidesSizesGrid,
			});

			if (slidesLength !== previousSlidesLength) {
				swiper.emit("slidesLengthChange");
			}
			if (snapGrid.length !== previousSnapGridLength) {
				if (swiper.params.watchOverflow) swiper.checkOverflow();
				swiper.emit("snapGridLengthChange");
			}
			if (slidesGrid.length !== previousSlidesGridLength) {
				swiper.emit("slidesGridLengthChange");
			}

			if (params.watchSlidesProgress || params.watchSlidesVisibility) {
				swiper.updateSlidesOffset();
			}
		}

		function updateAutoHeight(speed) {
			const swiper = this;
			const activeSlides = [];
			let newHeight = 0;
			let i;
			if (typeof speed === "number") {
				swiper.setTransition(speed);
			} else if (speed === true) {
				swiper.setTransition(swiper.params.speed);
			}
			// Find slides currently in view
			if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
				if (swiper.params.centeredSlides) {
					swiper.visibleSlides.each((index, slide) => {
						activeSlides.push(slide);
					});
				} else {
					for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
						const index = swiper.activeIndex + i;
						if (index > swiper.slides.length) break;
						activeSlides.push(swiper.slides.eq(index)[0]);
					}
				}
			} else {
				activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
			}

			// Find new height from highest slide in view
			for (i = 0; i < activeSlides.length; i += 1) {
				if (typeof activeSlides[i] !== "undefined") {
					const height = activeSlides[i].offsetHeight;
					newHeight = height > newHeight ? height : newHeight;
				}
			}

			// Update Height
			if (newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
		}

		function updateSlidesOffset() {
			const swiper = this;
			const slides = swiper.slides;
			for (let i = 0; i < slides.length; i += 1) {
				slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
			}
		}

		function updateSlidesProgress(translate = (this && this.translate) || 0) {
			const swiper = this;
			const params = swiper.params;

			const { slides, rtlTranslate: rtl } = swiper;

			if (slides.length === 0) return;
			if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();

			let offsetCenter = -translate;
			if (rtl) offsetCenter = translate;

			// Visible Slides
			slides.removeClass(params.slideVisibleClass);

			swiper.visibleSlidesIndexes = [];
			swiper.visibleSlides = [];

			for (let i = 0; i < slides.length; i += 1) {
				const slide = slides[i];
				const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
				if (params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) {
					const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
					const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
					const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1) || (slideAfter > 1 && slideAfter <= swiper.size) || (slideBefore <= 0 && slideAfter >= swiper.size);
					if (isVisible) {
						swiper.visibleSlides.push(slide);
						swiper.visibleSlidesIndexes.push(i);
						slides.eq(i).addClass(params.slideVisibleClass);
					}
				}
				slide.progress = rtl ? -slideProgress : slideProgress;
			}
			swiper.visibleSlides = $(swiper.visibleSlides);
		}

		function updateProgress(translate) {
			const swiper = this;
			if (typeof translate === "undefined") {
				const multiplier = swiper.rtlTranslate ? -1 : 1;
				// eslint-disable-next-line
				translate = (swiper && swiper.translate && swiper.translate * multiplier) || 0;
			}
			const params = swiper.params;
			const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
			let { progress, isBeginning, isEnd } = swiper;
			const wasBeginning = isBeginning;
			const wasEnd = isEnd;
			if (translatesDiff === 0) {
				progress = 0;
				isBeginning = true;
				isEnd = true;
			} else {
				progress = (translate - swiper.minTranslate()) / translatesDiff;
				isBeginning = progress <= 0;
				isEnd = progress >= 1;
			}
			Utils.extend(swiper, {
				progress,
				isBeginning,
				isEnd,
			});

			if (params.watchSlidesProgress || params.watchSlidesVisibility || (params.centeredSlides && params.autoHeight)) swiper.updateSlidesProgress(translate);

			if (isBeginning && !wasBeginning) {
				swiper.emit("reachBeginning toEdge");
			}
			if (isEnd && !wasEnd) {
				swiper.emit("reachEnd toEdge");
			}
			if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
				swiper.emit("fromEdge");
			}

			swiper.emit("progress", progress);
		}

		function updateSlidesClasses() {
			const swiper = this;

			const { slides, params, $wrapperEl, activeIndex, realIndex } = swiper;
			const isVirtual = swiper.virtual && params.virtual.enabled;

			slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);

			let activeSlide;
			if (isVirtual) {
				activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
			} else {
				activeSlide = slides.eq(activeIndex);
			}

			// Active classes
			activeSlide.addClass(params.slideActiveClass);

			if (params.loop) {
				// Duplicate to all looped slides
				if (activeSlide.hasClass(params.slideDuplicateClass)) {
					$wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
				} else {
					$wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
				}
			}
			// Next Slide
			let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
			if (params.loop && nextSlide.length === 0) {
				nextSlide = slides.eq(0);
				nextSlide.addClass(params.slideNextClass);
			}
			// Prev Slide
			let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
			if (params.loop && prevSlide.length === 0) {
				prevSlide = slides.eq(-1);
				prevSlide.addClass(params.slidePrevClass);
			}
			if (params.loop) {
				// Duplicate to all looped slides
				if (nextSlide.hasClass(params.slideDuplicateClass)) {
					$wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
				} else {
					$wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
				}
				if (prevSlide.hasClass(params.slideDuplicateClass)) {
					$wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
				} else {
					$wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
				}
			}
		}

		function updateActiveIndex(newActiveIndex) {
			const swiper = this;
			const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
			const { slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
			let activeIndex = newActiveIndex;
			let snapIndex;
			if (typeof activeIndex === "undefined") {
				for (let i = 0; i < slidesGrid.length; i += 1) {
					if (typeof slidesGrid[i + 1] !== "undefined") {
						if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
							activeIndex = i;
						} else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
							activeIndex = i + 1;
						}
					} else if (translate >= slidesGrid[i]) {
						activeIndex = i;
					}
				}
				// Normalize slideIndex
				if (params.normalizeSlideIndex) {
					if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
				}
			}
			if (snapGrid.indexOf(translate) >= 0) {
				snapIndex = snapGrid.indexOf(translate);
			} else {
				const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
				snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
			}
			if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
			if (activeIndex === previousIndex) {
				if (snapIndex !== previousSnapIndex) {
					swiper.snapIndex = snapIndex;
					swiper.emit("snapIndexChange");
				}
				return;
			}

			// Get real index
			const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);

			Utils.extend(swiper, {
				snapIndex,
				realIndex,
				previousIndex,
				activeIndex,
			});
			swiper.emit("activeIndexChange");
			swiper.emit("snapIndexChange");
			if (previousRealIndex !== realIndex) {
				swiper.emit("realIndexChange");
			}
			if (swiper.initialized || swiper.params.runCallbacksOnInit) {
				swiper.emit("slideChange");
			}
		}

		function updateClickedSlide(e) {
			const swiper = this;
			const params = swiper.params;
			const slide = $(e.target).closest(`.${params.slideClass}`)[0];
			let slideFound = false;
			if (slide) {
				for (let i = 0; i < swiper.slides.length; i += 1) {
					if (swiper.slides[i] === slide) slideFound = true;
				}
			}

			if (slide && slideFound) {
				swiper.clickedSlide = slide;
				if (swiper.virtual && swiper.params.virtual.enabled) {
					swiper.clickedIndex = parseInt($(slide).attr("data-swiper-slide-index"), 10);
				} else {
					swiper.clickedIndex = $(slide).index();
				}
			} else {
				swiper.clickedSlide = undefined;
				swiper.clickedIndex = undefined;
				return;
			}
			if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
				swiper.slideToClickedSlide();
			}
		}

		var update = {
			updateSize,
			updateSlides,
			updateAutoHeight,
			updateSlidesOffset,
			updateSlidesProgress,
			updateProgress,
			updateSlidesClasses,
			updateActiveIndex,
			updateClickedSlide,
		};

		function getTranslate(axis = this.isHorizontal() ? "x" : "y") {
			const swiper = this;

			const { params, rtlTranslate: rtl, translate, $wrapperEl } = swiper;

			if (params.virtualTranslate) {
				return rtl ? -translate : translate;
			}
			if (params.cssMode) {
				return translate;
			}

			let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
			if (rtl) currentTranslate = -currentTranslate;

			return currentTranslate || 0;
		}

		function setTranslate(translate, byController) {
			const swiper = this;
			const { rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress } = swiper;
			let x = 0;
			let y = 0;
			const z = 0;

			if (swiper.isHorizontal()) {
				x = rtl ? -translate : translate;
			} else {
				y = translate;
			}

			if (params.roundLengths) {
				x = Math.floor(x);
				y = Math.floor(y);
			}

			if (params.cssMode) {
				wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
			} else if (!params.virtualTranslate) {
				$wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
			}
			swiper.previousTranslate = swiper.translate;
			swiper.translate = swiper.isHorizontal() ? x : y;

			// Check if we need to update progress
			let newProgress;
			const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
			if (translatesDiff === 0) {
				newProgress = 0;
			} else {
				newProgress = (translate - swiper.minTranslate()) / translatesDiff;
			}
			if (newProgress !== progress) {
				swiper.updateProgress(translate);
			}

			swiper.emit("setTranslate", swiper.translate, byController);
		}

		function minTranslate() {
			return -this.snapGrid[0];
		}

		function maxTranslate() {
			return -this.snapGrid[this.snapGrid.length - 1];
		}

		function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
			const swiper = this;

			const { params, wrapperEl } = swiper;

			if (swiper.animating && params.preventInteractionOnTransition) {
				return false;
			}

			const minTranslate = swiper.minTranslate();
			const maxTranslate = swiper.maxTranslate();
			let newTranslate;
			if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
			else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
			else newTranslate = translate;

			// Update progress
			swiper.updateProgress(newTranslate);

			if (params.cssMode) {
				const isH = swiper.isHorizontal();
				if (speed === 0) {
					wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
				} else {
					// eslint-disable-next-line
					if (wrapperEl.scrollTo) {
						wrapperEl.scrollTo({
							[isH ? "left" : "top"]: -newTranslate,
							behavior: "smooth",
						});
					} else {
						wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
					}
				}
				return true;
			}

			if (speed === 0) {
				swiper.setTransition(0);
				swiper.setTranslate(newTranslate);
				if (runCallbacks) {
					swiper.emit("beforeTransitionStart", speed, internal);
					swiper.emit("transitionEnd");
				}
			} else {
				swiper.setTransition(speed);
				swiper.setTranslate(newTranslate);
				if (runCallbacks) {
					swiper.emit("beforeTransitionStart", speed, internal);
					swiper.emit("transitionStart");
				}
				if (!swiper.animating) {
					swiper.animating = true;
					if (!swiper.onTranslateToWrapperTransitionEnd) {
						swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
							if (!swiper || swiper.destroyed) return;
							if (e.target !== this) return;
							swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
							swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
							swiper.onTranslateToWrapperTransitionEnd = null;
							delete swiper.onTranslateToWrapperTransitionEnd;
							if (runCallbacks) {
								swiper.emit("transitionEnd");
							}
						};
					}
					swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
					swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
				}
			}

			return true;
		}

		var translate = {
			getTranslate,
			setTranslate,
			minTranslate,
			maxTranslate,
			translateTo,
		};

		function setTransition(duration, byController) {
			const swiper = this;

			if (!swiper.params.cssMode) {
				swiper.$wrapperEl.transition(duration);
			}

			swiper.emit("setTransition", duration, byController);
		}

		function transitionStart(runCallbacks = true, direction) {
			const swiper = this;
			const { activeIndex, params, previousIndex } = swiper;
			if (params.cssMode) return;
			if (params.autoHeight) {
				swiper.updateAutoHeight();
			}

			let dir = direction;
			if (!dir) {
				if (activeIndex > previousIndex) dir = "next";
				else if (activeIndex < previousIndex) dir = "prev";
				else dir = "reset";
			}

			swiper.emit("transitionStart");

			if (runCallbacks && activeIndex !== previousIndex) {
				if (dir === "reset") {
					swiper.emit("slideResetTransitionStart");
					return;
				}
				swiper.emit("slideChangeTransitionStart");
				if (dir === "next") {
					swiper.emit("slideNextTransitionStart");
				} else {
					swiper.emit("slidePrevTransitionStart");
				}
			}
		}

		function swiper_esm_bundle_transitionEnd(runCallbacks = true, direction) {
			const swiper = this;
			const { activeIndex, previousIndex, params } = swiper;
			swiper.animating = false;
			if (params.cssMode) return;
			swiper.setTransition(0);

			let dir = direction;
			if (!dir) {
				if (activeIndex > previousIndex) dir = "next";
				else if (activeIndex < previousIndex) dir = "prev";
				else dir = "reset";
			}

			swiper.emit("transitionEnd");

			if (runCallbacks && activeIndex !== previousIndex) {
				if (dir === "reset") {
					swiper.emit("slideResetTransitionEnd");
					return;
				}
				swiper.emit("slideChangeTransitionEnd");
				if (dir === "next") {
					swiper.emit("slideNextTransitionEnd");
				} else {
					swiper.emit("slidePrevTransitionEnd");
				}
			}
		}

		var swiper_esm_bundle_transition = {
			setTransition,
			transitionStart,
			transitionEnd: swiper_esm_bundle_transitionEnd,
		};

		function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
			const swiper = this;
			let slideIndex = index;
			if (slideIndex < 0) slideIndex = 0;

			const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl } = swiper;
			if (swiper.animating && params.preventInteractionOnTransition) {
				return false;
			}

			const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
			let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
			if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

			if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
				swiper.emit("beforeSlideChangeStart");
			}

			const translate = -snapGrid[snapIndex];

			// Update progress
			swiper.updateProgress(translate);

			// Normalize slideIndex
			if (params.normalizeSlideIndex) {
				for (let i = 0; i < slidesGrid.length; i += 1) {
					if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
						slideIndex = i;
					}
				}
			}
			// Directions locks
			if (swiper.initialized && slideIndex !== activeIndex) {
				if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
					return false;
				}
				if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
					if ((activeIndex || 0) !== slideIndex) return false;
				}
			}

			let direction;
			if (slideIndex > activeIndex) direction = "next";
			else if (slideIndex < activeIndex) direction = "prev";
			else direction = "reset";

			// Update Index
			if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
				swiper.updateActiveIndex(slideIndex);
				// Update Height
				if (params.autoHeight) {
					swiper.updateAutoHeight();
				}
				swiper.updateSlidesClasses();
				if (params.effect !== "slide") {
					swiper.setTranslate(translate);
				}
				if (direction !== "reset") {
					swiper.transitionStart(runCallbacks, direction);
					swiper.transitionEnd(runCallbacks, direction);
				}
				return false;
			}
			if (params.cssMode) {
				const isH = swiper.isHorizontal();
				let t = -translate;
				if (rtl) {
					t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
				}
				if (speed === 0) {
					wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
				} else {
					// eslint-disable-next-line
					if (wrapperEl.scrollTo) {
						wrapperEl.scrollTo({
							[isH ? "left" : "top"]: t,
							behavior: "smooth",
						});
					} else {
						wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
					}
				}
				return true;
			}

			if (speed === 0) {
				swiper.setTransition(0);
				swiper.setTranslate(translate);
				swiper.updateActiveIndex(slideIndex);
				swiper.updateSlidesClasses();
				swiper.emit("beforeTransitionStart", speed, internal);
				swiper.transitionStart(runCallbacks, direction);
				swiper.transitionEnd(runCallbacks, direction);
			} else {
				swiper.setTransition(speed);
				swiper.setTranslate(translate);
				swiper.updateActiveIndex(slideIndex);
				swiper.updateSlidesClasses();
				swiper.emit("beforeTransitionStart", speed, internal);
				swiper.transitionStart(runCallbacks, direction);
				if (!swiper.animating) {
					swiper.animating = true;
					if (!swiper.onSlideToWrapperTransitionEnd) {
						swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
							if (!swiper || swiper.destroyed) return;
							if (e.target !== this) return;
							swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
							swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
							swiper.onSlideToWrapperTransitionEnd = null;
							delete swiper.onSlideToWrapperTransitionEnd;
							swiper.transitionEnd(runCallbacks, direction);
						};
					}
					swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
					swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
				}
			}

			return true;
		}

		function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
			const swiper = this;
			let newIndex = index;
			if (swiper.params.loop) {
				newIndex += swiper.loopedSlides;
			}

			return swiper.slideTo(newIndex, speed, runCallbacks, internal);
		}

		/* eslint no-unused-vars: "off" */
		function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
			const swiper = this;
			const { params, animating } = swiper;
			const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
			if (params.loop) {
				if (animating) return false;
				swiper.loopFix();
				// eslint-disable-next-line
				swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
			}
			return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
		}

		/* eslint no-unused-vars: "off" */
		function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
			const swiper = this;
			const { params, animating, snapGrid, slidesGrid, rtlTranslate } = swiper;

			if (params.loop) {
				if (animating) return false;
				swiper.loopFix();
				// eslint-disable-next-line
				swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
			}
			const translate = rtlTranslate ? swiper.translate : -swiper.translate;
			function normalize(val) {
				if (val < 0) return -Math.floor(Math.abs(val));
				return Math.floor(val);
			}
			const normalizedTranslate = normalize(translate);
			const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
			const normalizedSlidesGrid = slidesGrid.map((val) => normalize(val));

			const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
			let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
			if (typeof prevSnap === "undefined" && params.cssMode) {
				snapGrid.forEach((snap) => {
					if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
				});
			}
			let prevIndex;
			if (typeof prevSnap !== "undefined") {
				prevIndex = slidesGrid.indexOf(prevSnap);
				if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
			}
			return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
		}

		/* eslint no-unused-vars: "off" */
		function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
			const swiper = this;
			return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
		}

		/* eslint no-unused-vars: "off" */
		function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
			const swiper = this;
			let index = swiper.activeIndex;
			const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
			const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);

			const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

			if (translate >= swiper.snapGrid[snapIndex]) {
				// The current translate is on or after the current snap index, so the choice
				// is between the current index and the one after it.
				const currentSnap = swiper.snapGrid[snapIndex];
				const nextSnap = swiper.snapGrid[snapIndex + 1];
				if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
					index += swiper.params.slidesPerGroup;
				}
			} else {
				// The current translate is before the current snap index, so the choice
				// is between the current index and the one before it.
				const prevSnap = swiper.snapGrid[snapIndex - 1];
				const currentSnap = swiper.snapGrid[snapIndex];
				if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
					index -= swiper.params.slidesPerGroup;
				}
			}
			index = Math.max(index, 0);
			index = Math.min(index, swiper.slidesGrid.length - 1);

			return swiper.slideTo(index, speed, runCallbacks, internal);
		}

		function slideToClickedSlide() {
			const swiper = this;
			const { params, $wrapperEl } = swiper;

			const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
			let slideToIndex = swiper.clickedIndex;
			let realIndex;
			if (params.loop) {
				if (swiper.animating) return;
				realIndex = parseInt($(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
				if (params.centeredSlides) {
					if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
						swiper.loopFix();
						slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();

						Utils.nextTick(() => {
							swiper.slideTo(slideToIndex);
						});
					} else {
						swiper.slideTo(slideToIndex);
					}
				} else if (slideToIndex > swiper.slides.length - slidesPerView) {
					swiper.loopFix();
					slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();

					Utils.nextTick(() => {
						swiper.slideTo(slideToIndex);
					});
				} else {
					swiper.slideTo(slideToIndex);
				}
			} else {
				swiper.slideTo(slideToIndex);
			}
		}

		var slide = {
			slideTo,
			slideToLoop,
			slideNext,
			slidePrev,
			slideReset,
			slideToClosest,
			slideToClickedSlide,
		};

		function loopCreate() {
			const swiper = this;
			const { params, $wrapperEl } = swiper;
			// Remove duplicated slides
			$wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();

			let slides = $wrapperEl.children(`.${params.slideClass}`);

			if (params.loopFillGroupWithBlank) {
				const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
				if (blankSlidesNum !== params.slidesPerGroup) {
					for (let i = 0; i < blankSlidesNum; i += 1) {
						const blankNode = $(doc.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
						$wrapperEl.append(blankNode);
					}
					slides = $wrapperEl.children(`.${params.slideClass}`);
				}
			}

			if (params.slidesPerView === "auto" && !params.loopedSlides) params.loopedSlides = slides.length;

			swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
			swiper.loopedSlides += params.loopAdditionalSlides;
			if (swiper.loopedSlides > slides.length) {
				swiper.loopedSlides = slides.length;
			}

			const prependSlides = [];
			const appendSlides = [];
			slides.each((index, el) => {
				const slide = $(el);
				if (index < swiper.loopedSlides) appendSlides.push(el);
				if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
				slide.attr("data-swiper-slide-index", index);
			});
			for (let i = 0; i < appendSlides.length; i += 1) {
				$wrapperEl.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
			}
			for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
				$wrapperEl.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
			}
		}

		function loopFix() {
			const swiper = this;

			swiper.emit("beforeLoopFix");

			const { activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl } = swiper;
			let newIndex;
			swiper.allowSlidePrev = true;
			swiper.allowSlideNext = true;

			const snapTranslate = -snapGrid[activeIndex];
			const diff = snapTranslate - swiper.getTranslate();

			// Fix For Negative Oversliding
			if (activeIndex < loopedSlides) {
				newIndex = slides.length - loopedSlides * 3 + activeIndex;
				newIndex += loopedSlides;
				const slideChanged = swiper.slideTo(newIndex, 0, false, true);
				if (slideChanged && diff !== 0) {
					swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
				}
			} else if (activeIndex >= slides.length - loopedSlides) {
				// Fix For Positive Oversliding
				newIndex = -slides.length + activeIndex + loopedSlides;
				newIndex += loopedSlides;
				const slideChanged = swiper.slideTo(newIndex, 0, false, true);
				if (slideChanged && diff !== 0) {
					swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
				}
			}
			swiper.allowSlidePrev = allowSlidePrev;
			swiper.allowSlideNext = allowSlideNext;

			swiper.emit("loopFix");
		}

		function loopDestroy() {
			const swiper = this;
			const { $wrapperEl, params, slides } = swiper;
			$wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
			slides.removeAttr("data-swiper-slide-index");
		}

		var loop = {
			loopCreate,
			loopFix,
			loopDestroy,
		};

		function setGrabCursor(moving) {
			const swiper = this;
			if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
			const el = swiper.el;
			el.style.cursor = "move";
			el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
			el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
			el.style.cursor = moving ? "grabbing" : "grab";
		}

		function unsetGrabCursor() {
			const swiper = this;
			if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
			swiper.el.style.cursor = "";
		}

		var grabCursor = {
			setGrabCursor,
			unsetGrabCursor,
		};

		function appendSlide(slides) {
			const swiper = this;
			const { $wrapperEl, params } = swiper;
			if (params.loop) {
				swiper.loopDestroy();
			}
			if (typeof slides === "object" && "length" in slides) {
				for (let i = 0; i < slides.length; i += 1) {
					if (slides[i]) $wrapperEl.append(slides[i]);
				}
			} else {
				$wrapperEl.append(slides);
			}
			if (params.loop) {
				swiper.loopCreate();
			}
			if (!(params.observer && Support.observer)) {
				swiper.update();
			}
		}

		function prependSlide(slides) {
			const swiper = this;
			const { params, $wrapperEl, activeIndex } = swiper;

			if (params.loop) {
				swiper.loopDestroy();
			}
			let newActiveIndex = activeIndex + 1;
			if (typeof slides === "object" && "length" in slides) {
				for (let i = 0; i < slides.length; i += 1) {
					if (slides[i]) $wrapperEl.prepend(slides[i]);
				}
				newActiveIndex = activeIndex + slides.length;
			} else {
				$wrapperEl.prepend(slides);
			}
			if (params.loop) {
				swiper.loopCreate();
			}
			if (!(params.observer && Support.observer)) {
				swiper.update();
			}
			swiper.slideTo(newActiveIndex, 0, false);
		}

		function addSlide(index, slides) {
			const swiper = this;
			const { $wrapperEl, params, activeIndex } = swiper;
			let activeIndexBuffer = activeIndex;
			if (params.loop) {
				activeIndexBuffer -= swiper.loopedSlides;
				swiper.loopDestroy();
				swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
			}
			const baseLength = swiper.slides.length;
			if (index <= 0) {
				swiper.prependSlide(slides);
				return;
			}
			if (index >= baseLength) {
				swiper.appendSlide(slides);
				return;
			}
			let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

			const slidesBuffer = [];
			for (let i = baseLength - 1; i >= index; i -= 1) {
				const currentSlide = swiper.slides.eq(i);
				currentSlide.remove();
				slidesBuffer.unshift(currentSlide);
			}

			if (typeof slides === "object" && "length" in slides) {
				for (let i = 0; i < slides.length; i += 1) {
					if (slides[i]) $wrapperEl.append(slides[i]);
				}
				newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
			} else {
				$wrapperEl.append(slides);
			}

			for (let i = 0; i < slidesBuffer.length; i += 1) {
				$wrapperEl.append(slidesBuffer[i]);
			}

			if (params.loop) {
				swiper.loopCreate();
			}
			if (!(params.observer && Support.observer)) {
				swiper.update();
			}
			if (params.loop) {
				swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
			} else {
				swiper.slideTo(newActiveIndex, 0, false);
			}
		}

		function removeSlide(slidesIndexes) {
			const swiper = this;
			const { params, $wrapperEl, activeIndex } = swiper;

			let activeIndexBuffer = activeIndex;
			if (params.loop) {
				activeIndexBuffer -= swiper.loopedSlides;
				swiper.loopDestroy();
				swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
			}
			let newActiveIndex = activeIndexBuffer;
			let indexToRemove;

			if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
				for (let i = 0; i < slidesIndexes.length; i += 1) {
					indexToRemove = slidesIndexes[i];
					if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
					if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
				}
				newActiveIndex = Math.max(newActiveIndex, 0);
			} else {
				indexToRemove = slidesIndexes;
				if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
				if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
				newActiveIndex = Math.max(newActiveIndex, 0);
			}

			if (params.loop) {
				swiper.loopCreate();
			}

			if (!(params.observer && Support.observer)) {
				swiper.update();
			}
			if (params.loop) {
				swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
			} else {
				swiper.slideTo(newActiveIndex, 0, false);
			}
		}

		function removeAllSlides() {
			const swiper = this;

			const slidesIndexes = [];
			for (let i = 0; i < swiper.slides.length; i += 1) {
				slidesIndexes.push(i);
			}
			swiper.removeSlide(slidesIndexes);
		}

		var manipulation = {
			appendSlide,
			prependSlide,
			addSlide,
			removeSlide,
			removeAllSlides,
		};

		const Device = (function Device() {
			const platform = win.navigator.platform;
			const ua = win.navigator.userAgent;

			const device = {
				ios: false,
				android: false,
				androidChrome: false,
				desktop: false,
				iphone: false,
				ipod: false,
				ipad: false,
				edge: false,
				ie: false,
				firefox: false,
				macos: false,
				windows: false,
				cordova: !!(win.cordova || win.phonegap),
				phonegap: !!(win.cordova || win.phonegap),
				electron: false,
			};

			const screenWidth = win.screen.width;
			const screenHeight = win.screen.height;

			const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
			let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
			const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
			const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			const ie = ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
			const edge = ua.indexOf("Edge/") >= 0;
			const firefox = ua.indexOf("Gecko/") >= 0 && ua.indexOf("Firefox/") >= 0;
			const windows = platform === "Win32";
			const electron = ua.toLowerCase().indexOf("electron") >= 0;
			let macos = platform === "MacIntel";

			// iPadOs 13 fix
			if (
				!ipad &&
				macos &&
				Support.touch &&
				((screenWidth === 1024 && screenHeight === 1366) || // Pro 12.9
					(screenWidth === 834 && screenHeight === 1194) || // Pro 11
					(screenWidth === 834 && screenHeight === 1112) || // Pro 10.5
					(screenWidth === 768 && screenHeight === 1024)) // other
			) {
				ipad = ua.match(/(Version)\/([\d.]+)/);
				macos = false;
			}

			device.ie = ie;
			device.edge = edge;
			device.firefox = firefox;

			// Android
			if (android && !windows) {
				device.os = "android";
				device.osVersion = android[2];
				device.android = true;
				device.androidChrome = ua.toLowerCase().indexOf("chrome") >= 0;
			}
			if (ipad || iphone || ipod) {
				device.os = "ios";
				device.ios = true;
			}
			// iOS
			if (iphone && !ipod) {
				device.osVersion = iphone[2].replace(/_/g, ".");
				device.iphone = true;
			}
			if (ipad) {
				device.osVersion = ipad[2].replace(/_/g, ".");
				device.ipad = true;
			}
			if (ipod) {
				device.osVersion = ipod[3] ? ipod[3].replace(/_/g, ".") : null;
				device.ipod = true;
			}
			// iOS 8+ changed UA
			if (device.ios && device.osVersion && ua.indexOf("Version/") >= 0) {
				if (device.osVersion.split(".")[0] === "10") {
					device.osVersion = ua.toLowerCase().split("version/")[1].split(" ")[0];
				}
			}

			// Webview
			device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone)) || (win.matchMedia && win.matchMedia("(display-mode: standalone)").matches);
			device.webview = device.webView;
			device.standalone = device.webView;

			// Desktop
			device.desktop = !(device.ios || device.android) || electron;
			if (device.desktop) {
				device.electron = electron;
				device.macos = macos;
				device.windows = windows;
				if (device.macos) {
					device.os = "macos";
				}
				if (device.windows) {
					device.os = "windows";
				}
			}

			// Pixel Ratio
			device.pixelRatio = win.devicePixelRatio || 1;

			// Export object
			return device;
		})();

		function onTouchStart(event) {
			const swiper = this;
			const data = swiper.touchEventsData;
			const { params, touches } = swiper;

			if (swiper.animating && params.preventInteractionOnTransition) {
				return;
			}
			let e = event;
			if (e.originalEvent) e = e.originalEvent;
			const $targetEl = $(e.target);

			if (params.touchEventsTarget === "wrapper") {
				if (!$targetEl.closest(swiper.wrapperEl).length) return;
			}
			data.isTouchEvent = e.type === "touchstart";
			if (!data.isTouchEvent && "which" in e && e.which === 3) return;
			if (!data.isTouchEvent && "button" in e && e.button > 0) return;
			if (data.isTouched && data.isMoved) return;
			if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
				swiper.allowClick = true;
				return;
			}
			if (params.swipeHandler) {
				if (!$targetEl.closest(params.swipeHandler)[0]) return;
			}

			touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
			touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
			const startX = touches.currentX;
			const startY = touches.currentY;

			// Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

			const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
			const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
			if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= win.screen.width - edgeSwipeThreshold)) {
				return;
			}

			Utils.extend(data, {
				isTouched: true,
				isMoved: false,
				allowTouchCallbacks: true,
				isScrolling: undefined,
				startMoving: undefined,
			});

			touches.startX = startX;
			touches.startY = startY;
			data.touchStartTime = Utils.now();
			swiper.allowClick = true;
			swiper.updateSize();
			swiper.swipeDirection = undefined;
			if (params.threshold > 0) data.allowThresholdMove = false;
			if (e.type !== "touchstart") {
				let preventDefault = true;
				if ($targetEl.is(data.formElements)) preventDefault = false;
				if (doc.activeElement && $(doc.activeElement).is(data.formElements) && doc.activeElement !== $targetEl[0]) {
					doc.activeElement.blur();
				}

				const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
				if (params.touchStartForcePreventDefault || shouldPreventDefault) {
					e.preventDefault();
				}
			}
			swiper.emit("touchStart", e);
		}

		function onTouchMove(event) {
			const swiper = this;
			const data = swiper.touchEventsData;
			const { params, touches, rtlTranslate: rtl } = swiper;
			let e = event;
			if (e.originalEvent) e = e.originalEvent;
			if (!data.isTouched) {
				if (data.startMoving && data.isScrolling) {
					swiper.emit("touchMoveOpposite", e);
				}
				return;
			}
			if (data.isTouchEvent && e.type !== "touchmove") return;
			const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
			const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
			const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
			if (e.preventedByNestedSwiper) {
				touches.startX = pageX;
				touches.startY = pageY;
				return;
			}
			if (!swiper.allowTouchMove) {
				// isMoved = true;
				swiper.allowClick = false;
				if (data.isTouched) {
					Utils.extend(touches, {
						startX: pageX,
						startY: pageY,
						currentX: pageX,
						currentY: pageY,
					});
					data.touchStartTime = Utils.now();
				}
				return;
			}
			if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
				if (swiper.isVertical()) {
					// Vertical
					if ((pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())) {
						data.isTouched = false;
						data.isMoved = false;
						return;
					}
				} else if ((pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
					return;
				}
			}
			if (data.isTouchEvent && doc.activeElement) {
				if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
					data.isMoved = true;
					swiper.allowClick = false;
					return;
				}
			}
			if (data.allowTouchCallbacks) {
				swiper.emit("touchMove", e);
			}
			if (e.targetTouches && e.targetTouches.length > 1) return;

			touches.currentX = pageX;
			touches.currentY = pageY;

			const diffX = touches.currentX - touches.startX;
			const diffY = touches.currentY - touches.startY;
			if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

			if (typeof data.isScrolling === "undefined") {
				let touchAngle;
				if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
					data.isScrolling = false;
				} else {
					// eslint-disable-next-line
					if (diffX * diffX + diffY * diffY >= 25) {
						touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
						data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
					}
				}
			}
			if (data.isScrolling) {
				swiper.emit("touchMoveOpposite", e);
			}
			if (typeof data.startMoving === "undefined") {
				if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
					data.startMoving = true;
				}
			}
			if (data.isScrolling) {
				data.isTouched = false;
				return;
			}
			if (!data.startMoving) {
				return;
			}
			swiper.allowClick = false;
			if (!params.cssMode && e.cancelable) {
				e.preventDefault();
			}
			if (params.touchMoveStopPropagation && !params.nested) {
				e.stopPropagation();
			}

			if (!data.isMoved) {
				if (params.loop) {
					swiper.loopFix();
				}
				data.startTranslate = swiper.getTranslate();
				swiper.setTransition(0);
				if (swiper.animating) {
					swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
				}
				data.allowMomentumBounce = false;
				// Grab Cursor
				if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
					swiper.setGrabCursor(true);
				}
				swiper.emit("sliderFirstMove", e);
			}
			swiper.emit("sliderMove", e);
			data.isMoved = true;

			let diff = swiper.isHorizontal() ? diffX : diffY;
			touches.diff = diff;

			diff *= params.touchRatio;
			if (rtl) diff = -diff;

			swiper.swipeDirection = diff > 0 ? "prev" : "next";
			data.currentTranslate = diff + data.startTranslate;

			let disableParentSwiper = true;
			let resistanceRatio = params.resistanceRatio;
			if (params.touchReleaseOnEdges) {
				resistanceRatio = 0;
			}
			if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
				disableParentSwiper = false;
				if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
			} else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
				disableParentSwiper = false;
				if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
			}

			if (disableParentSwiper) {
				e.preventedByNestedSwiper = true;
			}

			// Directions locks
			if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
				data.currentTranslate = data.startTranslate;
			}
			if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
				data.currentTranslate = data.startTranslate;
			}

			// Threshold
			if (params.threshold > 0) {
				if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
					if (!data.allowThresholdMove) {
						data.allowThresholdMove = true;
						touches.startX = touches.currentX;
						touches.startY = touches.currentY;
						data.currentTranslate = data.startTranslate;
						touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
						return;
					}
				} else {
					data.currentTranslate = data.startTranslate;
					return;
				}
			}

			if (!params.followFinger || params.cssMode) return;

			// Update active index in free mode
			if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
				swiper.updateActiveIndex();
				swiper.updateSlidesClasses();
			}
			if (params.freeMode) {
				// Velocity
				if (data.velocities.length === 0) {
					data.velocities.push({
						position: touches[swiper.isHorizontal() ? "startX" : "startY"],
						time: data.touchStartTime,
					});
				}
				data.velocities.push({
					position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
					time: Utils.now(),
				});
			}
			// Update progress
			swiper.updateProgress(data.currentTranslate);
			// Update translate
			swiper.setTranslate(data.currentTranslate);
		}

		function onTouchEnd(event) {
			const swiper = this;
			const data = swiper.touchEventsData;

			const { params, touches, rtlTranslate: rtl, $wrapperEl, slidesGrid, snapGrid } = swiper;
			let e = event;
			if (e.originalEvent) e = e.originalEvent;
			if (data.allowTouchCallbacks) {
				swiper.emit("touchEnd", e);
			}
			data.allowTouchCallbacks = false;
			if (!data.isTouched) {
				if (data.isMoved && params.grabCursor) {
					swiper.setGrabCursor(false);
				}
				data.isMoved = false;
				data.startMoving = false;
				return;
			}
			// Return Grab Cursor
			if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
				swiper.setGrabCursor(false);
			}

			// Time diff
			const touchEndTime = Utils.now();
			const timeDiff = touchEndTime - data.touchStartTime;

			// Tap, doubleTap, Click
			if (swiper.allowClick) {
				swiper.updateClickedSlide(e);
				swiper.emit("tap click", e);
				if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
					swiper.emit("doubleTap doubleClick", e);
				}
			}

			data.lastClickTime = Utils.now();
			Utils.nextTick(() => {
				if (!swiper.destroyed) swiper.allowClick = true;
			});

			if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
				data.isTouched = false;
				data.isMoved = false;
				data.startMoving = false;
				return;
			}
			data.isTouched = false;
			data.isMoved = false;
			data.startMoving = false;

			let currentPos;
			if (params.followFinger) {
				currentPos = rtl ? swiper.translate : -swiper.translate;
			} else {
				currentPos = -data.currentTranslate;
			}

			if (params.cssMode) {
				return;
			}

			if (params.freeMode) {
				if (currentPos < -swiper.minTranslate()) {
					swiper.slideTo(swiper.activeIndex);
					return;
				}
				if (currentPos > -swiper.maxTranslate()) {
					if (swiper.slides.length < snapGrid.length) {
						swiper.slideTo(snapGrid.length - 1);
					} else {
						swiper.slideTo(swiper.slides.length - 1);
					}
					return;
				}

				if (params.freeModeMomentum) {
					if (data.velocities.length > 1) {
						const lastMoveEvent = data.velocities.pop();
						const velocityEvent = data.velocities.pop();

						const distance = lastMoveEvent.position - velocityEvent.position;
						const time = lastMoveEvent.time - velocityEvent.time;
						swiper.velocity = distance / time;
						swiper.velocity /= 2;
						if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
							swiper.velocity = 0;
						}
						// this implies that the user stopped moving a finger then released.
						// There would be no events with distance zero, so the last event is stale.
						if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
							swiper.velocity = 0;
						}
					} else {
						swiper.velocity = 0;
					}
					swiper.velocity *= params.freeModeMomentumVelocityRatio;

					data.velocities.length = 0;
					let momentumDuration = 1000 * params.freeModeMomentumRatio;
					const momentumDistance = swiper.velocity * momentumDuration;

					let newPosition = swiper.translate + momentumDistance;
					if (rtl) newPosition = -newPosition;

					let doBounce = false;
					let afterBouncePosition;
					const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
					let needsLoopFix;
					if (newPosition < swiper.maxTranslate()) {
						if (params.freeModeMomentumBounce) {
							if (newPosition + swiper.maxTranslate() < -bounceAmount) {
								newPosition = swiper.maxTranslate() - bounceAmount;
							}
							afterBouncePosition = swiper.maxTranslate();
							doBounce = true;
							data.allowMomentumBounce = true;
						} else {
							newPosition = swiper.maxTranslate();
						}
						if (params.loop && params.centeredSlides) needsLoopFix = true;
					} else if (newPosition > swiper.minTranslate()) {
						if (params.freeModeMomentumBounce) {
							if (newPosition - swiper.minTranslate() > bounceAmount) {
								newPosition = swiper.minTranslate() + bounceAmount;
							}
							afterBouncePosition = swiper.minTranslate();
							doBounce = true;
							data.allowMomentumBounce = true;
						} else {
							newPosition = swiper.minTranslate();
						}
						if (params.loop && params.centeredSlides) needsLoopFix = true;
					} else if (params.freeModeSticky) {
						let nextSlide;
						for (let j = 0; j < snapGrid.length; j += 1) {
							if (snapGrid[j] > -newPosition) {
								nextSlide = j;
								break;
							}
						}

						if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
							newPosition = snapGrid[nextSlide];
						} else {
							newPosition = snapGrid[nextSlide - 1];
						}
						newPosition = -newPosition;
					}
					if (needsLoopFix) {
						swiper.once("transitionEnd", () => {
							swiper.loopFix();
						});
					}
					// Fix duration
					if (swiper.velocity !== 0) {
						if (rtl) {
							momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
						} else {
							momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
						}
						if (params.freeModeSticky) {
							// If freeModeSticky is active and the user ends a swipe with a slow-velocity
							// event, then durations can be 20+ seconds to slide one (or zero!) slides.
							// It's easy to see this when simulating touch with mouse events. To fix this,
							// limit single-slide swipes to the default slide duration. This also has the
							// nice side effect of matching slide speed if the user stopped moving before
							// lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
							// For faster swipes, also apply limits (albeit higher ones).
							const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
							const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
							if (moveDistance < currentSlideSize) {
								momentumDuration = params.speed;
							} else if (moveDistance < 2 * currentSlideSize) {
								momentumDuration = params.speed * 1.5;
							} else {
								momentumDuration = params.speed * 2.5;
							}
						}
					} else if (params.freeModeSticky) {
						swiper.slideToClosest();
						return;
					}

					if (params.freeModeMomentumBounce && doBounce) {
						swiper.updateProgress(afterBouncePosition);
						swiper.setTransition(momentumDuration);
						swiper.setTranslate(newPosition);
						swiper.transitionStart(true, swiper.swipeDirection);
						swiper.animating = true;
						$wrapperEl.transitionEnd(() => {
							if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
							swiper.emit("momentumBounce");
							swiper.setTransition(params.speed);
							setTimeout(() => {
								swiper.setTranslate(afterBouncePosition);
								$wrapperEl.transitionEnd(() => {
									if (!swiper || swiper.destroyed) return;
									swiper.transitionEnd();
								});
							}, 0);
						});
					} else if (swiper.velocity) {
						swiper.updateProgress(newPosition);
						swiper.setTransition(momentumDuration);
						swiper.setTranslate(newPosition);
						swiper.transitionStart(true, swiper.swipeDirection);
						if (!swiper.animating) {
							swiper.animating = true;
							$wrapperEl.transitionEnd(() => {
								if (!swiper || swiper.destroyed) return;
								swiper.transitionEnd();
							});
						}
					} else {
						swiper.updateProgress(newPosition);
					}

					swiper.updateActiveIndex();
					swiper.updateSlidesClasses();
				} else if (params.freeModeSticky) {
					swiper.slideToClosest();
					return;
				}

				if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
					swiper.updateProgress();
					swiper.updateActiveIndex();
					swiper.updateSlidesClasses();
				}
				return;
			}

			// Find current slide
			let stopIndex = 0;
			let groupSize = swiper.slidesSizesGrid[0];
			for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
				const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
				if (typeof slidesGrid[i + increment] !== "undefined") {
					if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
						stopIndex = i;
						groupSize = slidesGrid[i + increment] - slidesGrid[i];
					}
				} else if (currentPos >= slidesGrid[i]) {
					stopIndex = i;
					groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
				}
			}

			// Find current slide size
			const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
			const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

			if (timeDiff > params.longSwipesMs) {
				// Long touches
				if (!params.longSwipes) {
					swiper.slideTo(swiper.activeIndex);
					return;
				}
				if (swiper.swipeDirection === "next") {
					if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
					else swiper.slideTo(stopIndex);
				}
				if (swiper.swipeDirection === "prev") {
					if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
					else swiper.slideTo(stopIndex);
				}
			} else {
				// Short swipes
				if (!params.shortSwipes) {
					swiper.slideTo(swiper.activeIndex);
					return;
				}
				const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
				if (!isNavButtonTarget) {
					if (swiper.swipeDirection === "next") {
						swiper.slideTo(stopIndex + increment);
					}
					if (swiper.swipeDirection === "prev") {
						swiper.slideTo(stopIndex);
					}
				} else if (e.target === swiper.navigation.nextEl) {
					swiper.slideTo(stopIndex + increment);
				} else {
					swiper.slideTo(stopIndex);
				}
			}
		}

		function onResize() {
			const swiper = this;

			const { params, el } = swiper;

			if (el && el.offsetWidth === 0) return;

			// Breakpoints
			if (params.breakpoints) {
				swiper.setBreakpoint();
			}

			// Save locks
			const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;

			// Disable locks on resize
			swiper.allowSlideNext = true;
			swiper.allowSlidePrev = true;

			swiper.updateSize();
			swiper.updateSlides();

			swiper.updateSlidesClasses();
			if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
				swiper.slideTo(swiper.slides.length - 1, 0, false, true);
			} else {
				swiper.slideTo(swiper.activeIndex, 0, false, true);
			}

			if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
				swiper.autoplay.run();
			}
			// Return locks after resize
			swiper.allowSlidePrev = allowSlidePrev;
			swiper.allowSlideNext = allowSlideNext;

			if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
				swiper.checkOverflow();
			}
		}

		function onClick(e) {
			const swiper = this;
			if (!swiper.allowClick) {
				if (swiper.params.preventClicks) e.preventDefault();
				if (swiper.params.preventClicksPropagation && swiper.animating) {
					e.stopPropagation();
					e.stopImmediatePropagation();
				}
			}
		}

		function onScroll() {
			const swiper = this;
			const { wrapperEl, rtlTranslate } = swiper;
			swiper.previousTranslate = swiper.translate;
			if (swiper.isHorizontal()) {
				if (rtlTranslate) {
					swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
				} else {
					swiper.translate = -wrapperEl.scrollLeft;
				}
			} else {
				swiper.translate = -wrapperEl.scrollTop;
			}
			// eslint-disable-next-line
			if (swiper.translate === -0) swiper.translate = 0;

			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();

			let newProgress;
			const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
			if (translatesDiff === 0) {
				newProgress = 0;
			} else {
				newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
			}
			if (newProgress !== swiper.progress) {
				swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
			}

			swiper.emit("setTranslate", swiper.translate, false);
		}

		let dummyEventAttached = false;
		function dummyEventListener() {}

		function attachEvents() {
			const swiper = this;
			const { params, touchEvents, el, wrapperEl } = swiper;

			swiper.onTouchStart = onTouchStart.bind(swiper);
			swiper.onTouchMove = onTouchMove.bind(swiper);
			swiper.onTouchEnd = onTouchEnd.bind(swiper);
			if (params.cssMode) {
				swiper.onScroll = onScroll.bind(swiper);
			}

			swiper.onClick = onClick.bind(swiper);

			const capture = !!params.nested;

			// Touch Events
			if (!Support.touch && Support.pointerEvents) {
				el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
				doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
				doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
			} else {
				if (Support.touch) {
					const passiveListener = touchEvents.start === "touchstart" && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
					el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
					el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture } : capture);
					el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
					if (touchEvents.cancel) {
						el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
					}
					if (!dummyEventAttached) {
						doc.addEventListener("touchstart", dummyEventListener);
						dummyEventAttached = true;
					}
				}
				if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
					el.addEventListener("mousedown", swiper.onTouchStart, false);
					doc.addEventListener("mousemove", swiper.onTouchMove, capture);
					doc.addEventListener("mouseup", swiper.onTouchEnd, false);
				}
			}
			// Prevent Links Clicks
			if (params.preventClicks || params.preventClicksPropagation) {
				el.addEventListener("click", swiper.onClick, true);
			}
			if (params.cssMode) {
				wrapperEl.addEventListener("scroll", swiper.onScroll);
			}

			// Resize handler
			if (params.updateOnWindowResize) {
				swiper.on(Device.ios || Device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
			} else {
				swiper.on("observerUpdate", onResize, true);
			}
		}

		function detachEvents() {
			const swiper = this;

			const { params, touchEvents, el, wrapperEl } = swiper;

			const capture = !!params.nested;

			// Touch Events
			if (!Support.touch && Support.pointerEvents) {
				el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
				doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
				doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
			} else {
				if (Support.touch) {
					const passiveListener = touchEvents.start === "onTouchStart" && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
					el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
					el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
					el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
					if (touchEvents.cancel) {
						el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
					}
				}
				if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
					el.removeEventListener("mousedown", swiper.onTouchStart, false);
					doc.removeEventListener("mousemove", swiper.onTouchMove, capture);
					doc.removeEventListener("mouseup", swiper.onTouchEnd, false);
				}
			}
			// Prevent Links Clicks
			if (params.preventClicks || params.preventClicksPropagation) {
				el.removeEventListener("click", swiper.onClick, true);
			}

			if (params.cssMode) {
				wrapperEl.removeEventListener("scroll", swiper.onScroll);
			}

			// Resize handler
			swiper.off(Device.ios || Device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize);
		}

		var swiper_esm_bundle_events = {
			attachEvents,
			detachEvents,
		};

		function setBreakpoint() {
			const swiper = this;
			const { activeIndex, initialized, loopedSlides = 0, params, $el } = swiper;
			const breakpoints = params.breakpoints;
			if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return;

			// Get breakpoint for window width and update parameters
			const breakpoint = swiper.getBreakpoint(breakpoints);

			if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
				const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
				if (breakpointOnlyParams) {
					["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((param) => {
						const paramValue = breakpointOnlyParams[param];
						if (typeof paramValue === "undefined") return;
						if (param === "slidesPerView" && (paramValue === "AUTO" || paramValue === "auto")) {
							breakpointOnlyParams[param] = "auto";
						} else if (param === "slidesPerView") {
							breakpointOnlyParams[param] = parseFloat(paramValue);
						} else {
							breakpointOnlyParams[param] = parseInt(paramValue, 10);
						}
					});
				}

				const breakpointParams = breakpointOnlyParams || swiper.originalParams;
				const wasMultiRow = params.slidesPerColumn > 1;
				const isMultiRow = breakpointParams.slidesPerColumn > 1;
				if (wasMultiRow && !isMultiRow) {
					$el.removeClass(`${params.containerModifierClass}multirow ${params.containerModifierClass}multirow-column`);
				} else if (!wasMultiRow && isMultiRow) {
					$el.addClass(`${params.containerModifierClass}multirow`);
					if (breakpointParams.slidesPerColumnFill === "column") {
						$el.addClass(`${params.containerModifierClass}multirow-column`);
					}
				}

				const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
				const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

				if (directionChanged && initialized) {
					swiper.changeDirection();
				}

				Utils.extend(swiper.params, breakpointParams);

				Utils.extend(swiper, {
					allowTouchMove: swiper.params.allowTouchMove,
					allowSlideNext: swiper.params.allowSlideNext,
					allowSlidePrev: swiper.params.allowSlidePrev,
				});

				swiper.currentBreakpoint = breakpoint;

				if (needsReLoop && initialized) {
					swiper.loopDestroy();
					swiper.loopCreate();
					swiper.updateSlides();
					swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
				}

				swiper.emit("breakpoint", breakpointParams);
			}
		}

		function getBreakpoint(breakpoints) {
			// Get breakpoint for window width
			if (!breakpoints) return undefined;
			let breakpoint = false;

			const points = Object.keys(breakpoints).map((point) => {
				if (typeof point === "string" && point.indexOf("@") === 0) {
					const minRatio = parseFloat(point.substr(1));
					const value = win.innerHeight * minRatio;
					return { value, point };
				}
				return { value: point, point };
			});

			points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
			for (let i = 0; i < points.length; i += 1) {
				const { point, value } = points[i];
				if (value <= win.innerWidth) {
					breakpoint = point;
				}
			}
			return breakpoint || "max";
		}

		var breakpoints = { setBreakpoint, getBreakpoint };

		function addClasses() {
			const swiper = this;
			const { classNames, params, rtl, $el } = swiper;
			const suffixes = [];

			suffixes.push("initialized");
			suffixes.push(params.direction);

			if (params.freeMode) {
				suffixes.push("free-mode");
			}
			if (params.autoHeight) {
				suffixes.push("autoheight");
			}
			if (rtl) {
				suffixes.push("rtl");
			}
			if (params.slidesPerColumn > 1) {
				suffixes.push("multirow");
				if (params.slidesPerColumnFill === "column") {
					suffixes.push("multirow-column");
				}
			}
			if (Device.android) {
				suffixes.push("android");
			}
			if (Device.ios) {
				suffixes.push("ios");
			}

			if (params.cssMode) {
				suffixes.push("css-mode");
			}

			suffixes.forEach((suffix) => {
				classNames.push(params.containerModifierClass + suffix);
			});

			$el.addClass(classNames.join(" "));
		}

		function removeClasses() {
			const swiper = this;
			const { $el, classNames } = swiper;

			$el.removeClass(classNames.join(" "));
		}

		var classes = { addClasses, removeClasses };

		function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
			let image;
			function onReady() {
				if (callback) callback();
			}
			const isPicture = $(imageEl).parent("picture")[0];

			if (!isPicture && (!imageEl.complete || !checkForComplete)) {
				if (src) {
					image = new win.Image();
					image.onload = onReady;
					image.onerror = onReady;
					if (sizes) {
						image.sizes = sizes;
					}
					if (srcset) {
						image.srcset = srcset;
					}
					if (src) {
						image.src = src;
					}
				} else {
					onReady();
				}
			} else {
				// image already loaded...
				onReady();
			}
		}

		function preloadImages() {
			const swiper = this;
			swiper.imagesToLoad = swiper.$el.find("img");
			function onReady() {
				if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed) return;
				if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
				if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
					if (swiper.params.updateOnImagesReady) swiper.update();
					swiper.emit("imagesReady");
				}
			}
			for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
				const imageEl = swiper.imagesToLoad[i];
				swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
			}
		}

		var swiper_esm_bundle_images = {
			loadImage,
			preloadImages,
		};

		function checkOverflow() {
			const swiper = this;
			const params = swiper.params;
			const wasLocked = swiper.isLocked;
			const lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

			if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
				swiper.isLocked = lastSlidePosition <= swiper.size;
			} else {
				swiper.isLocked = swiper.snapGrid.length === 1;
			}

			swiper.allowSlideNext = !swiper.isLocked;
			swiper.allowSlidePrev = !swiper.isLocked;

			// events
			if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");

			if (wasLocked && wasLocked !== swiper.isLocked) {
				swiper.isEnd = false;
				if (swiper.navigation) swiper.navigation.update();
			}
		}

		var checkOverflow$1 = { checkOverflow };

		var defaults = {
			init: true,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			cssMode: false,
			updateOnWindowResize: true,
			//
			preventInteractionOnTransition: false,

			// To support iOS's swipe-to-go-back gesture (when being used in-app).
			edgeSwipeDetection: false,
			edgeSwipeThreshold: 20,

			// Free mode
			freeMode: false,
			freeModeMomentum: true,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: true,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: false,
			freeModeMinimumVelocity: 0.02,

			// Autoheight
			autoHeight: false,

			// Set wrapper width
			setWrapperSize: false,

			// Virtual Translate
			virtualTranslate: false,

			// Effects
			effect: "slide", // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

			// Breakpoints
			breakpoints: undefined,

			// Slides grid
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			slidesPerGroupSkip: 0,
			centeredSlides: false,
			centeredSlidesBounds: false,
			slidesOffsetBefore: 0, // in px
			slidesOffsetAfter: 0, // in px
			normalizeSlideIndex: true,
			centerInsufficientSlides: false,

			// Disable swiper and hide navigation when container not overflow
			watchOverflow: false,

			// Round length
			roundLengths: false,

			// Touches
			touchRatio: 1,
			touchAngle: 45,
			simulateTouch: true,
			shortSwipes: true,
			longSwipes: true,
			longSwipesRatio: 0.5,
			longSwipesMs: 300,
			followFinger: true,
			allowTouchMove: true,
			threshold: 0,
			touchMoveStopPropagation: false,
			touchStartPreventDefault: true,
			touchStartForcePreventDefault: false,
			touchReleaseOnEdges: false,

			// Unique Navigation Elements
			uniqueNavElements: true,

			// Resistance
			resistance: true,
			resistanceRatio: 0.85,

			// Progress
			watchSlidesProgress: false,
			watchSlidesVisibility: false,

			// Cursor
			grabCursor: false,

			// Clicks
			preventClicks: true,
			preventClicksPropagation: true,
			slideToClickedSlide: false,

			// Images
			preloadImages: true,
			updateOnImagesReady: true,

			// loop
			loop: false,
			loopAdditionalSlides: 0,
			loopedSlides: null,
			loopFillGroupWithBlank: false,

			// Swiping/no swiping
			allowSlidePrev: true,
			allowSlideNext: true,
			swipeHandler: null, // '.swipe-handler',
			noSwiping: true,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,

			// Passive Listeners
			passiveListeners: true,

			// NS
			containerModifierClass: "swiper-container-", // NEW
			slideClass: "swiper-slide",
			slideBlankClass: "swiper-slide-invisible-blank",
			slideActiveClass: "swiper-slide-active",
			slideDuplicateActiveClass: "swiper-slide-duplicate-active",
			slideVisibleClass: "swiper-slide-visible",
			slideDuplicateClass: "swiper-slide-duplicate",
			slideNextClass: "swiper-slide-next",
			slideDuplicateNextClass: "swiper-slide-duplicate-next",
			slidePrevClass: "swiper-slide-prev",
			slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
			wrapperClass: "swiper-wrapper",

			// Callbacks
			runCallbacksOnInit: true,
		};

		/* eslint no-param-reassign: "off" */

		const prototypes = {
			update,
			translate,
			transition: swiper_esm_bundle_transition,
			slide,
			loop,
			grabCursor,
			manipulation,
			events: swiper_esm_bundle_events,
			breakpoints,
			checkOverflow: checkOverflow$1,
			classes,
			images: swiper_esm_bundle_images,
		};

		const extendedDefaults = {};

		class Swiper extends SwiperClass {
			constructor(...args) {
				let el;
				let params;
				if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
					params = args[0];
				} else {
					[el, params] = args;
				}
				if (!params) params = {};

				params = Utils.extend({}, params);
				if (el && !params.el) params.el = el;

				super(params);

				Object.keys(prototypes).forEach((prototypeGroup) => {
					Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
						if (!Swiper.prototype[protoMethod]) {
							Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
						}
					});
				});

				// Swiper Instance
				const swiper = this;
				if (typeof swiper.modules === "undefined") {
					swiper.modules = {};
				}
				Object.keys(swiper.modules).forEach((moduleName) => {
					const module = swiper.modules[moduleName];
					if (module.params) {
						const moduleParamName = Object.keys(module.params)[0];
						const moduleParams = module.params[moduleParamName];
						if (typeof moduleParams !== "object" || moduleParams === null) return;
						if (!(moduleParamName in params && "enabled" in moduleParams)) return;
						if (params[moduleParamName] === true) {
							params[moduleParamName] = { enabled: true };
						}
						if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
							params[moduleParamName].enabled = true;
						}
						if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
					}
				});

				// Extend defaults with modules params
				const swiperParams = Utils.extend({}, defaults);
				swiper.useModulesParams(swiperParams);

				// Extend defaults with passed params
				swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
				swiper.originalParams = Utils.extend({}, swiper.params);
				swiper.passedParams = Utils.extend({}, params);

				// Save Dom lib
				swiper.$ = $;

				// Find el
				const $el = $(swiper.params.el);
				el = $el[0];

				if (!el) {
					return undefined;
				}

				if ($el.length > 1) {
					const swipers = [];
					$el.each((index, containerEl) => {
						const newParams = Utils.extend({}, params, { el: containerEl });
						swipers.push(new Swiper(newParams));
					});
					return swipers;
				}

				el.swiper = swiper;
				$el.data("swiper", swiper);

				// Find Wrapper
				let $wrapperEl;
				if (el && el.shadowRoot && el.shadowRoot.querySelector) {
					$wrapperEl = $(el.shadowRoot.querySelector(`.${swiper.params.wrapperClass}`));
					// Children needs to return slot items
					$wrapperEl.children = (options) => $el.children(options);
				} else {
					$wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);
				}
				// Extend Swiper
				Utils.extend(swiper, {
					$el,
					el,
					$wrapperEl,
					wrapperEl: $wrapperEl[0],

					// Classes
					classNames: [],

					// Slides
					slides: $(),
					slidesGrid: [],
					snapGrid: [],
					slidesSizesGrid: [],

					// isDirection
					isHorizontal() {
						return swiper.params.direction === "horizontal";
					},
					isVertical() {
						return swiper.params.direction === "vertical";
					},
					// RTL
					rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
					rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
					wrongRTL: $wrapperEl.css("display") === "-webkit-box",

					// Indexes
					activeIndex: 0,
					realIndex: 0,

					//
					isBeginning: true,
					isEnd: false,

					// Props
					translate: 0,
					previousTranslate: 0,
					progress: 0,
					velocity: 0,
					animating: false,

					// Locks
					allowSlideNext: swiper.params.allowSlideNext,
					allowSlidePrev: swiper.params.allowSlidePrev,

					// Touch Events
					touchEvents: (function touchEvents() {
						const touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
						let desktop = ["mousedown", "mousemove", "mouseup"];
						if (Support.pointerEvents) {
							desktop = ["pointerdown", "pointermove", "pointerup"];
						}
						swiper.touchEventsTouch = {
							start: touch[0],
							move: touch[1],
							end: touch[2],
							cancel: touch[3],
						};
						swiper.touchEventsDesktop = {
							start: desktop[0],
							move: desktop[1],
							end: desktop[2],
						};
						return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
					})(),
					touchEventsData: {
						isTouched: undefined,
						isMoved: undefined,
						allowTouchCallbacks: undefined,
						touchStartTime: undefined,
						isScrolling: undefined,
						currentTranslate: undefined,
						startTranslate: undefined,
						allowThresholdMove: undefined,
						// Form elements to match
						formElements: "input, select, option, textarea, button, video, label",
						// Last click time
						lastClickTime: Utils.now(),
						clickTimeout: undefined,
						// Velocities
						velocities: [],
						allowMomentumBounce: undefined,
						isTouchEvent: undefined,
						startMoving: undefined,
					},

					// Clicks
					allowClick: true,

					// Touches
					allowTouchMove: swiper.params.allowTouchMove,

					touches: {
						startX: 0,
						startY: 0,
						currentX: 0,
						currentY: 0,
						diff: 0,
					},

					// Images
					imagesToLoad: [],
					imagesLoaded: 0,
				});

				// Install Modules
				swiper.useModules();

				// Init
				if (swiper.params.init) {
					swiper.init();
				}

				// Return app instance
				return swiper;
			}

			slidesPerViewDynamic() {
				const swiper = this;
				const { params, slides, slidesGrid, size: swiperSize, activeIndex } = swiper;
				let spv = 1;
				if (params.centeredSlides) {
					let slideSize = slides[activeIndex].swiperSlideSize;
					let breakLoop;
					for (let i = activeIndex + 1; i < slides.length; i += 1) {
						if (slides[i] && !breakLoop) {
							slideSize += slides[i].swiperSlideSize;
							spv += 1;
							if (slideSize > swiperSize) breakLoop = true;
						}
					}
					for (let i = activeIndex - 1; i >= 0; i -= 1) {
						if (slides[i] && !breakLoop) {
							slideSize += slides[i].swiperSlideSize;
							spv += 1;
							if (slideSize > swiperSize) breakLoop = true;
						}
					}
				} else {
					for (let i = activeIndex + 1; i < slides.length; i += 1) {
						if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
							spv += 1;
						}
					}
				}
				return spv;
			}

			update() {
				const swiper = this;
				if (!swiper || swiper.destroyed) return;
				const { snapGrid, params } = swiper;
				// Breakpoints
				if (params.breakpoints) {
					swiper.setBreakpoint();
				}
				swiper.updateSize();
				swiper.updateSlides();
				swiper.updateProgress();
				swiper.updateSlidesClasses();

				function setTranslate() {
					const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
					const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
					swiper.setTranslate(newTranslate);
					swiper.updateActiveIndex();
					swiper.updateSlidesClasses();
				}
				let translated;
				if (swiper.params.freeMode) {
					setTranslate();
					if (swiper.params.autoHeight) {
						swiper.updateAutoHeight();
					}
				} else {
					if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
						translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
					} else {
						translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
					}
					if (!translated) {
						setTranslate();
					}
				}
				if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
					swiper.checkOverflow();
				}
				swiper.emit("update");
			}

			changeDirection(newDirection, needUpdate = true) {
				const swiper = this;
				const currentDirection = swiper.params.direction;
				if (!newDirection) {
					// eslint-disable-next-line
					newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
				}
				if (newDirection === currentDirection || (newDirection !== "horizontal" && newDirection !== "vertical")) {
					return swiper;
				}

				swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);

				swiper.params.direction = newDirection;

				swiper.slides.each((slideIndex, slideEl) => {
					if (newDirection === "vertical") {
						slideEl.style.width = "";
					} else {
						slideEl.style.height = "";
					}
				});

				swiper.emit("changeDirection");
				if (needUpdate) swiper.update();

				return swiper;
			}

			init() {
				const swiper = this;
				if (swiper.initialized) return;

				swiper.emit("beforeInit");

				// Set breakpoint
				if (swiper.params.breakpoints) {
					swiper.setBreakpoint();
				}

				// Add Classes
				swiper.addClasses();

				// Create loop
				if (swiper.params.loop) {
					swiper.loopCreate();
				}

				// Update size
				swiper.updateSize();

				// Update slides
				swiper.updateSlides();

				if (swiper.params.watchOverflow) {
					swiper.checkOverflow();
				}

				// Set Grab Cursor
				if (swiper.params.grabCursor) {
					swiper.setGrabCursor();
				}

				if (swiper.params.preloadImages) {
					swiper.preloadImages();
				}

				// Slide To Initial Slide
				if (swiper.params.loop) {
					swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
				} else {
					swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
				}

				// Attach events
				swiper.attachEvents();

				// Init Flag
				swiper.initialized = true;

				// Emit
				swiper.emit("init");
			}

			destroy(deleteInstance = true, cleanStyles = true) {
				const swiper = this;
				const { params, $el, $wrapperEl, slides } = swiper;

				if (typeof swiper.params === "undefined" || swiper.destroyed) {
					return null;
				}

				swiper.emit("beforeDestroy");

				// Init Flag
				swiper.initialized = false;

				// Detach events
				swiper.detachEvents();

				// Destroy loop
				if (params.loop) {
					swiper.loopDestroy();
				}

				// Cleanup styles
				if (cleanStyles) {
					swiper.removeClasses();
					$el.removeAttr("style");
					$wrapperEl.removeAttr("style");
					if (slides && slides.length) {
						slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
					}
				}

				swiper.emit("destroy");

				// Detach emitter events
				Object.keys(swiper.eventsListeners).forEach((eventName) => {
					swiper.off(eventName);
				});

				if (deleteInstance !== false) {
					swiper.$el[0].swiper = null;
					swiper.$el.data("swiper", null);
					Utils.deleteProps(swiper);
				}
				swiper.destroyed = true;

				return null;
			}

			static extendDefaults(newDefaults) {
				Utils.extend(extendedDefaults, newDefaults);
			}

			static get extendedDefaults() {
				return extendedDefaults;
			}

			static get defaults() {
				return defaults;
			}

			static get Class() {
				return SwiperClass;
			}

			static get $() {
				return $;
			}
		}

		var Device$1 = {
			name: "device",
			proto: {
				device: Device,
			},
			static: {
				device: Device,
			},
		};

		var Support$1 = {
			name: "support",
			proto: {
				support: Support,
			},
			static: {
				support: Support,
			},
		};

		const Browser = (function Browser() {
			function isSafari() {
				const ua = win.navigator.userAgent.toLowerCase();
				return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
			}
			return {
				isEdge: !!win.navigator.userAgent.match(/Edge/g),
				isSafari: isSafari(),
				isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
			};
		})();

		var Browser$1 = {
			name: "browser",
			proto: {
				browser: Browser,
			},
			static: {
				browser: Browser,
			},
		};

		var Resize = {
			name: "resize",
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					resize: {
						resizeHandler() {
							if (!swiper || swiper.destroyed || !swiper.initialized) return;
							swiper.emit("beforeResize");
							swiper.emit("resize");
						},
						orientationChangeHandler() {
							if (!swiper || swiper.destroyed || !swiper.initialized) return;
							swiper.emit("orientationchange");
						},
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					// Emit resize
					win.addEventListener("resize", swiper.resize.resizeHandler);

					// Emit orientationchange
					win.addEventListener("orientationchange", swiper.resize.orientationChangeHandler);
				},
				destroy() {
					const swiper = this;
					win.removeEventListener("resize", swiper.resize.resizeHandler);
					win.removeEventListener("orientationchange", swiper.resize.orientationChangeHandler);
				},
			},
		};

		const swiper_esm_bundle_Observer = {
			func: win.MutationObserver || win.WebkitMutationObserver,
			attach(target, options = {}) {
				const swiper = this;

				const ObserverFunc = swiper_esm_bundle_Observer.func;
				const observer = new ObserverFunc((mutations) => {
					// The observerUpdate event should only be triggered
					// once despite the number of mutations.  Additional
					// triggers are redundant and are very costly
					if (mutations.length === 1) {
						swiper.emit("observerUpdate", mutations[0]);
						return;
					}
					const observerUpdate = function observerUpdate() {
						swiper.emit("observerUpdate", mutations[0]);
					};

					if (win.requestAnimationFrame) {
						win.requestAnimationFrame(observerUpdate);
					} else {
						win.setTimeout(observerUpdate, 0);
					}
				});

				observer.observe(target, {
					attributes: typeof options.attributes === "undefined" ? true : options.attributes,
					childList: typeof options.childList === "undefined" ? true : options.childList,
					characterData: typeof options.characterData === "undefined" ? true : options.characterData,
				});

				swiper.observer.observers.push(observer);
			},
			init() {
				const swiper = this;
				if (!Support.observer || !swiper.params.observer) return;
				if (swiper.params.observeParents) {
					const containerParents = swiper.$el.parents();
					for (let i = 0; i < containerParents.length; i += 1) {
						swiper.observer.attach(containerParents[i]);
					}
				}
				// Observe container
				swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

				// Observe wrapper
				swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
			},
			destroy() {
				const swiper = this;
				swiper.observer.observers.forEach((observer) => {
					observer.disconnect();
				});
				swiper.observer.observers = [];
			},
		};

		var Observer$1 = {
			name: "observer",
			params: {
				observer: false,
				observeParents: false,
				observeSlideChildren: false,
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					observer: {
						init: swiper_esm_bundle_Observer.init.bind(swiper),
						attach: swiper_esm_bundle_Observer.attach.bind(swiper),
						destroy: swiper_esm_bundle_Observer.destroy.bind(swiper),
						observers: [],
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					swiper.observer.init();
				},
				destroy() {
					const swiper = this;
					swiper.observer.destroy();
				},
			},
		};

		const Virtual = {
			update(force) {
				const swiper = this;
				const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
				const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
				const { from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, renderSlide, offset: previousOffset } = swiper.virtual;
				swiper.updateActiveIndex();
				const activeIndex = swiper.activeIndex || 0;

				let offsetProp;
				if (swiper.rtlTranslate) offsetProp = "right";
				else offsetProp = swiper.isHorizontal() ? "left" : "top";

				let slidesAfter;
				let slidesBefore;
				if (centeredSlides) {
					slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
					slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
				} else {
					slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
					slidesBefore = slidesPerGroup + addSlidesAfter;
				}
				const from = Math.max((activeIndex || 0) - slidesBefore, 0);
				const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
				const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

				Utils.extend(swiper.virtual, {
					from,
					to,
					offset,
					slidesGrid: swiper.slidesGrid,
				});

				function onRendered() {
					swiper.updateSlides();
					swiper.updateProgress();
					swiper.updateSlidesClasses();
					if (swiper.lazy && swiper.params.lazy.enabled) {
						swiper.lazy.load();
					}
				}

				if (previousFrom === from && previousTo === to && !force) {
					if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
						swiper.slides.css(offsetProp, `${offset}px`);
					}
					swiper.updateProgress();
					return;
				}
				if (swiper.params.virtual.renderExternal) {
					swiper.params.virtual.renderExternal.call(swiper, {
						offset,
						from,
						to,
						slides: (function getSlides() {
							const slidesToRender = [];
							for (let i = from; i <= to; i += 1) {
								slidesToRender.push(slides[i]);
							}
							return slidesToRender;
						})(),
					});
					onRendered();
					return;
				}
				const prependIndexes = [];
				const appendIndexes = [];
				if (force) {
					swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
				} else {
					for (let i = previousFrom; i <= previousTo; i += 1) {
						if (i < from || i > to) {
							swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
						}
					}
				}
				for (let i = 0; i < slides.length; i += 1) {
					if (i >= from && i <= to) {
						if (typeof previousTo === "undefined" || force) {
							appendIndexes.push(i);
						} else {
							if (i > previousTo) appendIndexes.push(i);
							if (i < previousFrom) prependIndexes.push(i);
						}
					}
				}
				appendIndexes.forEach((index) => {
					swiper.$wrapperEl.append(renderSlide(slides[index], index));
				});
				prependIndexes
					.sort((a, b) => b - a)
					.forEach((index) => {
						swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
					});
				swiper.$wrapperEl.children(".swiper-slide").css(offsetProp, `${offset}px`);
				onRendered();
			},
			renderSlide(slide, index) {
				const swiper = this;
				const params = swiper.params.virtual;
				if (params.cache && swiper.virtual.cache[index]) {
					return swiper.virtual.cache[index];
				}
				const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
				if (!$slideEl.attr("data-swiper-slide-index")) $slideEl.attr("data-swiper-slide-index", index);
				if (params.cache) swiper.virtual.cache[index] = $slideEl;
				return $slideEl;
			},
			appendSlide(slides) {
				const swiper = this;
				if (typeof slides === "object" && "length" in slides) {
					for (let i = 0; i < slides.length; i += 1) {
						if (slides[i]) swiper.virtual.slides.push(slides[i]);
					}
				} else {
					swiper.virtual.slides.push(slides);
				}
				swiper.virtual.update(true);
			},
			prependSlide(slides) {
				const swiper = this;
				const activeIndex = swiper.activeIndex;
				let newActiveIndex = activeIndex + 1;
				let numberOfNewSlides = 1;

				if (Array.isArray(slides)) {
					for (let i = 0; i < slides.length; i += 1) {
						if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
					}
					newActiveIndex = activeIndex + slides.length;
					numberOfNewSlides = slides.length;
				} else {
					swiper.virtual.slides.unshift(slides);
				}
				if (swiper.params.virtual.cache) {
					const cache = swiper.virtual.cache;
					const newCache = {};
					Object.keys(cache).forEach((cachedIndex) => {
						const $cachedEl = cache[cachedIndex];
						const cachedElIndex = $cachedEl.attr("data-swiper-slide-index");
						if (cachedElIndex) {
							$cachedEl.attr("data-swiper-slide-index", parseInt(cachedElIndex, 10) + 1);
						}
						newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
					});
					swiper.virtual.cache = newCache;
				}
				swiper.virtual.update(true);
				swiper.slideTo(newActiveIndex, 0);
			},
			removeSlide(slidesIndexes) {
				const swiper = this;
				if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
				let activeIndex = swiper.activeIndex;
				if (Array.isArray(slidesIndexes)) {
					for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
						swiper.virtual.slides.splice(slidesIndexes[i], 1);
						if (swiper.params.virtual.cache) {
							delete swiper.virtual.cache[slidesIndexes[i]];
						}
						if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
						activeIndex = Math.max(activeIndex, 0);
					}
				} else {
					swiper.virtual.slides.splice(slidesIndexes, 1);
					if (swiper.params.virtual.cache) {
						delete swiper.virtual.cache[slidesIndexes];
					}
					if (slidesIndexes < activeIndex) activeIndex -= 1;
					activeIndex = Math.max(activeIndex, 0);
				}
				swiper.virtual.update(true);
				swiper.slideTo(activeIndex, 0);
			},
			removeAllSlides() {
				const swiper = this;
				swiper.virtual.slides = [];
				if (swiper.params.virtual.cache) {
					swiper.virtual.cache = {};
				}
				swiper.virtual.update(true);
				swiper.slideTo(0, 0);
			},
		};

		var Virtual$1 = {
			name: "virtual",
			params: {
				virtual: {
					enabled: false,
					slides: [],
					cache: true,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					virtual: {
						update: Virtual.update.bind(swiper),
						appendSlide: Virtual.appendSlide.bind(swiper),
						prependSlide: Virtual.prependSlide.bind(swiper),
						removeSlide: Virtual.removeSlide.bind(swiper),
						removeAllSlides: Virtual.removeAllSlides.bind(swiper),
						renderSlide: Virtual.renderSlide.bind(swiper),
						slides: swiper.params.virtual.slides,
						cache: {},
					},
				});
			},
			on: {
				beforeInit() {
					const swiper = this;
					if (!swiper.params.virtual.enabled) return;
					swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
					const overwriteParams = {
						watchSlidesProgress: true,
					};
					Utils.extend(swiper.params, overwriteParams);
					Utils.extend(swiper.originalParams, overwriteParams);

					if (!swiper.params.initialSlide) {
						swiper.virtual.update();
					}
				},
				setTranslate() {
					const swiper = this;
					if (!swiper.params.virtual.enabled) return;
					swiper.virtual.update();
				},
			},
		};

		const Keyboard = {
			handle(event) {
				const swiper = this;
				const { rtlTranslate: rtl } = swiper;
				let e = event;
				if (e.originalEvent) e = e.originalEvent; // jquery fix
				const kc = e.keyCode || e.charCode;
				const pageUpDown = swiper.params.keyboard.pageUpDown;
				const isPageUp = pageUpDown && kc === 33;
				const isPageDown = pageUpDown && kc === 34;
				const isArrowLeft = kc === 37;
				const isArrowRight = kc === 39;
				const isArrowUp = kc === 38;
				const isArrowDown = kc === 40;
				// Directions locks
				if (!swiper.allowSlideNext && ((swiper.isHorizontal() && isArrowRight) || (swiper.isVertical() && isArrowDown) || isPageDown)) {
					return false;
				}
				if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && isArrowLeft) || (swiper.isVertical() && isArrowUp) || isPageUp)) {
					return false;
				}
				if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
					return undefined;
				}
				if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === "input" || doc.activeElement.nodeName.toLowerCase() === "textarea")) {
					return undefined;
				}
				if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
					let inView = false;
					// Check that swiper should be inside of visible area of window
					if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
						return undefined;
					}
					const windowWidth = win.innerWidth;
					const windowHeight = win.innerHeight;
					const swiperOffset = swiper.$el.offset();
					if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
					const swiperCoord = [
						[swiperOffset.left, swiperOffset.top],
						[swiperOffset.left + swiper.width, swiperOffset.top],
						[swiperOffset.left, swiperOffset.top + swiper.height],
						[swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
					];
					for (let i = 0; i < swiperCoord.length; i += 1) {
						const point = swiperCoord[i];
						if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
							inView = true;
						}
					}
					if (!inView) return undefined;
				}
				if (swiper.isHorizontal()) {
					if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
						if (e.preventDefault) e.preventDefault();
						else e.returnValue = false;
					}
					if (((isPageDown || isArrowRight) && !rtl) || ((isPageUp || isArrowLeft) && rtl)) swiper.slideNext();
					if (((isPageUp || isArrowLeft) && !rtl) || ((isPageDown || isArrowRight) && rtl)) swiper.slidePrev();
				} else {
					if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
						if (e.preventDefault) e.preventDefault();
						else e.returnValue = false;
					}
					if (isPageDown || isArrowDown) swiper.slideNext();
					if (isPageUp || isArrowUp) swiper.slidePrev();
				}
				swiper.emit("keyPress", kc);
				return undefined;
			},
			enable() {
				const swiper = this;
				if (swiper.keyboard.enabled) return;
				$(doc).on("keydown", swiper.keyboard.handle);
				swiper.keyboard.enabled = true;
			},
			disable() {
				const swiper = this;
				if (!swiper.keyboard.enabled) return;
				$(doc).off("keydown", swiper.keyboard.handle);
				swiper.keyboard.enabled = false;
			},
		};

		var Keyboard$1 = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: false,
					onlyInViewport: true,
					pageUpDown: true,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					keyboard: {
						enabled: false,
						enable: Keyboard.enable.bind(swiper),
						disable: Keyboard.disable.bind(swiper),
						handle: Keyboard.handle.bind(swiper),
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					if (swiper.params.keyboard.enabled) {
						swiper.keyboard.enable();
					}
				},
				destroy() {
					const swiper = this;
					if (swiper.keyboard.enabled) {
						swiper.keyboard.disable();
					}
				},
			},
		};

		function isEventSupported() {
			const eventName = "onwheel";
			let isSupported = eventName in doc;

			if (!isSupported) {
				const element = doc.createElement("div");
				element.setAttribute(eventName, "return;");
				isSupported = typeof element[eventName] === "function";
			}

			if (
				!isSupported &&
				doc.implementation &&
				doc.implementation.hasFeature &&
				// always returns true in newer browsers as per the standard.
				// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
				doc.implementation.hasFeature("", "") !== true
			) {
				// This is the only way to test support for the `wheel` event in IE9+.
				isSupported = doc.implementation.hasFeature("Events.wheel", "3.0");
			}

			return isSupported;
		}
		const Mousewheel = {
			lastScrollTime: Utils.now(),
			lastEventBeforeSnap: undefined,
			recentWheelEvents: [],
			event() {
				if (win.navigator.userAgent.indexOf("firefox") > -1) return "DOMMouseScroll";
				return isEventSupported() ? "wheel" : "mousewheel";
			},
			normalize(e) {
				// Reasonable defaults
				const PIXEL_STEP = 10;
				const LINE_HEIGHT = 40;
				const PAGE_HEIGHT = 800;

				let sX = 0;
				let sY = 0; // spinX, spinY
				let pX = 0;
				let pY = 0; // pixelX, pixelY

				// Legacy
				if ("detail" in e) {
					sY = e.detail;
				}
				if ("wheelDelta" in e) {
					sY = -e.wheelDelta / 120;
				}
				if ("wheelDeltaY" in e) {
					sY = -e.wheelDeltaY / 120;
				}
				if ("wheelDeltaX" in e) {
					sX = -e.wheelDeltaX / 120;
				}

				// side scrolling on FF with DOMMouseScroll
				if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
					sX = sY;
					sY = 0;
				}

				pX = sX * PIXEL_STEP;
				pY = sY * PIXEL_STEP;

				if ("deltaY" in e) {
					pY = e.deltaY;
				}
				if ("deltaX" in e) {
					pX = e.deltaX;
				}

				if (e.shiftKey && !pX) {
					// if user scrolls with shift he wants horizontal scroll
					pX = pY;
					pY = 0;
				}

				if ((pX || pY) && e.deltaMode) {
					if (e.deltaMode === 1) {
						// delta in LINE units
						pX *= LINE_HEIGHT;
						pY *= LINE_HEIGHT;
					} else {
						// delta in PAGE units
						pX *= PAGE_HEIGHT;
						pY *= PAGE_HEIGHT;
					}
				}

				// Fall-back if spin cannot be determined
				if (pX && !sX) {
					sX = pX < 1 ? -1 : 1;
				}
				if (pY && !sY) {
					sY = pY < 1 ? -1 : 1;
				}

				return {
					spinX: sX,
					spinY: sY,
					pixelX: pX,
					pixelY: pY,
				};
			},
			handleMouseEnter() {
				const swiper = this;
				swiper.mouseEntered = true;
			},
			handleMouseLeave() {
				const swiper = this;
				swiper.mouseEntered = false;
			},
			handle(event) {
				let e = event;
				const swiper = this;
				const params = swiper.params.mousewheel;

				if (swiper.params.cssMode) {
					e.preventDefault();
				}

				let target = swiper.$el;
				if (swiper.params.mousewheel.eventsTarged !== "container") {
					target = $(swiper.params.mousewheel.eventsTarged);
				}
				if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;

				if (e.originalEvent) e = e.originalEvent; // jquery fix
				let delta = 0;
				const rtlFactor = swiper.rtlTranslate ? -1 : 1;

				const data = Mousewheel.normalize(e);

				if (params.forceToAxis) {
					if (swiper.isHorizontal()) {
						if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
						else return true;
					} else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
					else return true;
				} else {
					delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
				}

				if (delta === 0) return true;

				if (params.invert) delta = -delta;

				if (!swiper.params.freeMode) {
					// Register the new event in a variable which stores the relevant data
					const newEvent = {
						time: Utils.now(),
						delta: Math.abs(delta),
						direction: Math.sign(delta),
						raw: event,
					};

					// Keep the most recent events
					const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
					if (recentWheelEvents.length >= 2) {
						recentWheelEvents.shift(); // only store the last N events
					}
					const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
					recentWheelEvents.push(newEvent);

					// If there is at least one previous recorded event:
					//   If direction has changed or
					//   if the scroll is quicker than the previous one:
					//     Animate the slider.
					// Else (this is the first time the wheel is moved):
					//     Animate the slider.
					if (prevEvent) {
						if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
							swiper.mousewheel.animateSlider(newEvent);
						}
					} else {
						swiper.mousewheel.animateSlider(newEvent);
					}

					// If it's time to release the scroll:
					//   Return now so you don't hit the preventDefault.
					if (swiper.mousewheel.releaseScroll(newEvent)) {
						return true;
					}
				} else {
					// Freemode or scrollContainer:

					// If we recently snapped after a momentum scroll, then ignore wheel events
					// to give time for the deceleration to finish. Stop ignoring after 500 msecs
					// or if it's a new scroll (larger delta or inverse sign as last event before
					// an end-of-momentum snap).
					const newEvent = { time: Utils.now(), delta: Math.abs(delta), direction: Math.sign(delta) };
					const { lastEventBeforeSnap } = swiper.mousewheel;
					const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
					if (!ignoreWheelEvents) {
						swiper.mousewheel.lastEventBeforeSnap = undefined;

						if (swiper.params.loop) {
							swiper.loopFix();
						}
						let position = swiper.getTranslate() + delta * params.sensitivity;
						const wasBeginning = swiper.isBeginning;
						const wasEnd = swiper.isEnd;

						if (position >= swiper.minTranslate()) position = swiper.minTranslate();
						if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();

						swiper.setTransition(0);
						swiper.setTranslate(position);
						swiper.updateProgress();
						swiper.updateActiveIndex();
						swiper.updateSlidesClasses();

						if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
							swiper.updateSlidesClasses();
						}

						if (swiper.params.freeModeSticky) {
							// When wheel scrolling starts with sticky (aka snap) enabled, then detect
							// the end of a momentum scroll by storing recent (N=15?) wheel events.
							// 1. do all N events have decreasing or same (absolute value) delta?
							// 2. did all N events arrive in the last M (M=500?) msecs?
							// 3. does the earliest event have an (absolute value) delta that's
							//    at least P (P=1?) larger than the most recent event's delta?
							// 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
							// If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
							// Snap immediately and ignore remaining wheel events in this scroll.
							// See comment above for "remaining wheel events in this scroll" determination.
							// If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
							clearTimeout(swiper.mousewheel.timeout);
							swiper.mousewheel.timeout = undefined;
							const recentWheelEvents = swiper.mousewheel.recentWheelEvents;
							if (recentWheelEvents.length >= 15) {
								recentWheelEvents.shift(); // only store the last N events
							}
							const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
							const firstEvent = recentWheelEvents[0];
							recentWheelEvents.push(newEvent);
							if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
								// Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
								recentWheelEvents.splice(0);
							} else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
								// We're at the end of the deceleration of a momentum scroll, so there's no need
								// to wait for more events. Snap ASAP on the next tick.
								// Also, because there's some remaining momentum we'll bias the snap in the
								// direction of the ongoing scroll because it's better UX for the scroll to snap
								// in the same direction as the scroll instead of reversing to snap.  Therefore,
								// if it's already scrolled more than 20% in the current direction, keep going.
								const snapToThreshold = delta > 0 ? 0.8 : 0.2;
								swiper.mousewheel.lastEventBeforeSnap = newEvent;
								recentWheelEvents.splice(0);
								swiper.mousewheel.timeout = Utils.nextTick(() => {
									swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
								}, 0); // no delay; move on next tick
							}
							if (!swiper.mousewheel.timeout) {
								// if we get here, then we haven't detected the end of a momentum scroll, so
								// we'll consider a scroll "complete" when there haven't been any wheel events
								// for 500ms.
								swiper.mousewheel.timeout = Utils.nextTick(() => {
									const snapToThreshold = 0.5;
									swiper.mousewheel.lastEventBeforeSnap = newEvent;
									recentWheelEvents.splice(0);
									swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
								}, 500);
							}
						}

						// Emit event
						if (!ignoreWheelEvents) swiper.emit("scroll", e);

						// Stop autoplay
						if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
						// Return page scroll on edge positions
						if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
					}
				}

				if (e.preventDefault) e.preventDefault();
				else e.returnValue = false;
				return false;
			},
			animateSlider(newEvent) {
				const swiper = this;
				// If the movement is NOT big enough and
				// if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
				//   Don't go any further (avoid insignificant scroll movement).
				if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
					// Return false as a default
					return true;
				}
				// If user is scrolling towards the end:
				//   If the slider hasn't hit the latest slide or
				//   if the slider is a loop and
				//   if the slider isn't moving right now:
				//     Go to next slide and
				//     emit a scroll event.
				// Else (the user is scrolling towards the beginning) and
				// if the slider hasn't hit the first slide or
				// if the slider is a loop and
				// if the slider isn't moving right now:
				//   Go to prev slide and
				//   emit a scroll event.
				if (newEvent.direction < 0) {
					if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
						swiper.slideNext();
						swiper.emit("scroll", newEvent.raw);
					}
				} else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
					swiper.slidePrev();
					swiper.emit("scroll", newEvent.raw);
				}
				// If you got here is because an animation has been triggered so store the current time
				swiper.mousewheel.lastScrollTime = new win.Date().getTime();
				// Return false as a default
				return false;
			},
			releaseScroll(newEvent) {
				const swiper = this;
				const params = swiper.params.mousewheel;
				if (newEvent.direction < 0) {
					if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
						// Return true to animate scroll on edges
						return true;
					}
				} else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
					// Return true to animate scroll on edges
					return true;
				}
				return false;
			},
			enable() {
				const swiper = this;
				const event = Mousewheel.event();
				if (swiper.params.cssMode) {
					swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
					return true;
				}
				if (!event) return false;
				if (swiper.mousewheel.enabled) return false;
				let target = swiper.$el;
				if (swiper.params.mousewheel.eventsTarged !== "container") {
					target = $(swiper.params.mousewheel.eventsTarged);
				}
				target.on("mouseenter", swiper.mousewheel.handleMouseEnter);
				target.on("mouseleave", swiper.mousewheel.handleMouseLeave);
				target.on(event, swiper.mousewheel.handle);
				swiper.mousewheel.enabled = true;
				return true;
			},
			disable() {
				const swiper = this;
				const event = Mousewheel.event();
				if (swiper.params.cssMode) {
					swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
					return true;
				}
				if (!event) return false;
				if (!swiper.mousewheel.enabled) return false;
				let target = swiper.$el;
				if (swiper.params.mousewheel.eventsTarged !== "container") {
					target = $(swiper.params.mousewheel.eventsTarged);
				}
				target.off(event, swiper.mousewheel.handle);
				swiper.mousewheel.enabled = false;
				return true;
			},
		};

		var Mousewheel$1 = {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: false,
					releaseOnEdges: false,
					invert: false,
					forceToAxis: false,
					sensitivity: 1,
					eventsTarged: "container",
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					mousewheel: {
						enabled: false,
						enable: Mousewheel.enable.bind(swiper),
						disable: Mousewheel.disable.bind(swiper),
						handle: Mousewheel.handle.bind(swiper),
						handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
						handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
						animateSlider: Mousewheel.animateSlider.bind(swiper),
						releaseScroll: Mousewheel.releaseScroll.bind(swiper),
						lastScrollTime: Utils.now(),
						lastEventBeforeSnap: undefined,
						recentWheelEvents: [],
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
						swiper.mousewheel.disable();
					}
					if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
				},
				destroy() {
					const swiper = this;
					if (swiper.params.cssMode) {
						swiper.mousewheel.enable();
					}
					if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
				},
			},
		};

		const Navigation = {
			update() {
				// Update Navigation Buttons
				const swiper = this;
				const params = swiper.params.navigation;

				if (swiper.params.loop) return;
				const { $nextEl, $prevEl } = swiper.navigation;

				if ($prevEl && $prevEl.length > 0) {
					if (swiper.isBeginning) {
						$prevEl.addClass(params.disabledClass);
					} else {
						$prevEl.removeClass(params.disabledClass);
					}
					$prevEl[swiper.params.watchOverflow && swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
				}
				if ($nextEl && $nextEl.length > 0) {
					if (swiper.isEnd) {
						$nextEl.addClass(params.disabledClass);
					} else {
						$nextEl.removeClass(params.disabledClass);
					}
					$nextEl[swiper.params.watchOverflow && swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
				}
			},
			onPrevClick(e) {
				const swiper = this;
				e.preventDefault();
				if (swiper.isBeginning && !swiper.params.loop) return;
				swiper.slidePrev();
			},
			onNextClick(e) {
				const swiper = this;
				e.preventDefault();
				if (swiper.isEnd && !swiper.params.loop) return;
				swiper.slideNext();
			},
			init() {
				const swiper = this;
				const params = swiper.params.navigation;
				if (!(params.nextEl || params.prevEl)) return;

				let $nextEl;
				let $prevEl;
				if (params.nextEl) {
					$nextEl = $(params.nextEl);
					if (swiper.params.uniqueNavElements && typeof params.nextEl === "string" && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
						$nextEl = swiper.$el.find(params.nextEl);
					}
				}
				if (params.prevEl) {
					$prevEl = $(params.prevEl);
					if (swiper.params.uniqueNavElements && typeof params.prevEl === "string" && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
						$prevEl = swiper.$el.find(params.prevEl);
					}
				}

				if ($nextEl && $nextEl.length > 0) {
					$nextEl.on("click", swiper.navigation.onNextClick);
				}
				if ($prevEl && $prevEl.length > 0) {
					$prevEl.on("click", swiper.navigation.onPrevClick);
				}

				Utils.extend(swiper.navigation, {
					$nextEl,
					nextEl: $nextEl && $nextEl[0],
					$prevEl,
					prevEl: $prevEl && $prevEl[0],
				});
			},
			destroy() {
				const swiper = this;
				const { $nextEl, $prevEl } = swiper.navigation;
				if ($nextEl && $nextEl.length) {
					$nextEl.off("click", swiper.navigation.onNextClick);
					$nextEl.removeClass(swiper.params.navigation.disabledClass);
				}
				if ($prevEl && $prevEl.length) {
					$prevEl.off("click", swiper.navigation.onPrevClick);
					$prevEl.removeClass(swiper.params.navigation.disabledClass);
				}
			},
		};

		var Navigation$1 = {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,

					hideOnClick: false,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock",
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					navigation: {
						init: Navigation.init.bind(swiper),
						update: Navigation.update.bind(swiper),
						destroy: Navigation.destroy.bind(swiper),
						onNextClick: Navigation.onNextClick.bind(swiper),
						onPrevClick: Navigation.onPrevClick.bind(swiper),
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					swiper.navigation.init();
					swiper.navigation.update();
				},
				toEdge() {
					const swiper = this;
					swiper.navigation.update();
				},
				fromEdge() {
					const swiper = this;
					swiper.navigation.update();
				},
				destroy() {
					const swiper = this;
					swiper.navigation.destroy();
				},
				click(e) {
					const swiper = this;
					const { $nextEl, $prevEl } = swiper.navigation;
					if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
						let isHidden;
						if ($nextEl) {
							isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
						} else if ($prevEl) {
							isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
						}
						if (isHidden === true) {
							swiper.emit("navigationShow", swiper);
						} else {
							swiper.emit("navigationHide", swiper);
						}
						if ($nextEl) {
							$nextEl.toggleClass(swiper.params.navigation.hiddenClass);
						}
						if ($prevEl) {
							$prevEl.toggleClass(swiper.params.navigation.hiddenClass);
						}
					}
				},
			},
		};

		const Pagination = {
			update() {
				// Render || Update Pagination bullets/items
				const swiper = this;
				const rtl = swiper.rtl;
				const params = swiper.params.pagination;
				if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
				const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
				const $el = swiper.pagination.$el;
				// Current/Total
				let current;
				const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
				if (swiper.params.loop) {
					current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
					if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
						current -= slidesLength - swiper.loopedSlides * 2;
					}
					if (current > total - 1) current -= total;
					if (current < 0 && swiper.params.paginationType !== "bullets") current = total + current;
				} else if (typeof swiper.snapIndex !== "undefined") {
					current = swiper.snapIndex;
				} else {
					current = swiper.activeIndex || 0;
				}
				// Types
				if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
					const bullets = swiper.pagination.bullets;
					let firstIndex;
					let lastIndex;
					let midIndex;
					if (params.dynamicBullets) {
						swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
						$el.css(swiper.isHorizontal() ? "width" : "height", `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`);
						if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
							swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
							if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
								swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
							} else if (swiper.pagination.dynamicBulletIndex < 0) {
								swiper.pagination.dynamicBulletIndex = 0;
							}
						}
						firstIndex = current - swiper.pagination.dynamicBulletIndex;
						lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
						midIndex = (lastIndex + firstIndex) / 2;
					}
					bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`);
					if ($el.length > 1) {
						bullets.each((index, bullet) => {
							const $bullet = $(bullet);
							const bulletIndex = $bullet.index();
							if (bulletIndex === current) {
								$bullet.addClass(params.bulletActiveClass);
							}
							if (params.dynamicBullets) {
								if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
									$bullet.addClass(`${params.bulletActiveClass}-main`);
								}
								if (bulletIndex === firstIndex) {
									$bullet.prev().addClass(`${params.bulletActiveClass}-prev`).prev().addClass(`${params.bulletActiveClass}-prev-prev`);
								}
								if (bulletIndex === lastIndex) {
									$bullet.next().addClass(`${params.bulletActiveClass}-next`).next().addClass(`${params.bulletActiveClass}-next-next`);
								}
							}
						});
					} else {
						const $bullet = bullets.eq(current);
						const bulletIndex = $bullet.index();
						$bullet.addClass(params.bulletActiveClass);
						if (params.dynamicBullets) {
							const $firstDisplayedBullet = bullets.eq(firstIndex);
							const $lastDisplayedBullet = bullets.eq(lastIndex);
							for (let i = firstIndex; i <= lastIndex; i += 1) {
								bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
							}
							if (swiper.params.loop) {
								if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
									for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
										bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
									}
									bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
								} else {
									$firstDisplayedBullet.prev().addClass(`${params.bulletActiveClass}-prev`).prev().addClass(`${params.bulletActiveClass}-prev-prev`);
									$lastDisplayedBullet.next().addClass(`${params.bulletActiveClass}-next`).next().addClass(`${params.bulletActiveClass}-next-next`);
								}
							} else {
								$firstDisplayedBullet.prev().addClass(`${params.bulletActiveClass}-prev`).prev().addClass(`${params.bulletActiveClass}-prev-prev`);
								$lastDisplayedBullet.next().addClass(`${params.bulletActiveClass}-next`).next().addClass(`${params.bulletActiveClass}-next-next`);
							}
						}
					}
					if (params.dynamicBullets) {
						const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
						const bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
						const offsetProp = rtl ? "right" : "left";
						bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
					}
				}
				if (params.type === "fraction") {
					$el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1));
					$el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total));
				}
				if (params.type === "progressbar") {
					let progressbarDirection;
					if (params.progressbarOpposite) {
						progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
					} else {
						progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
					}
					const scale = (current + 1) / total;
					let scaleX = 1;
					let scaleY = 1;
					if (progressbarDirection === "horizontal") {
						scaleX = scale;
					} else {
						scaleY = scale;
					}
					$el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
				}
				if (params.type === "custom" && params.renderCustom) {
					$el.html(params.renderCustom(swiper, current + 1, total));
					swiper.emit("paginationRender", swiper, $el[0]);
				} else {
					swiper.emit("paginationUpdate", swiper, $el[0]);
				}
				$el[swiper.params.watchOverflow && swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
			},
			render() {
				// Render Container
				const swiper = this;
				const params = swiper.params.pagination;
				if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
				const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

				const $el = swiper.pagination.$el;
				let paginationHTML = "";
				if (params.type === "bullets") {
					const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
					for (let i = 0; i < numberOfBullets; i += 1) {
						if (params.renderBullet) {
							paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
						} else {
							paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
						}
					}
					$el.html(paginationHTML);
					swiper.pagination.bullets = $el.find(`.${params.bulletClass}`);
				}
				if (params.type === "fraction") {
					if (params.renderFraction) {
						paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
					} else {
						paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
					}
					$el.html(paginationHTML);
				}
				if (params.type === "progressbar") {
					if (params.renderProgressbar) {
						paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
					} else {
						paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
					}
					$el.html(paginationHTML);
				}
				if (params.type !== "custom") {
					swiper.emit("paginationRender", swiper.pagination.$el[0]);
				}
			},
			init() {
				const swiper = this;
				const params = swiper.params.pagination;
				if (!params.el) return;

				let $el = $(params.el);
				if ($el.length === 0) return;

				if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
					$el = swiper.$el.find(params.el);
				}

				if (params.type === "bullets" && params.clickable) {
					$el.addClass(params.clickableClass);
				}

				$el.addClass(params.modifierClass + params.type);

				if (params.type === "bullets" && params.dynamicBullets) {
					$el.addClass(`${params.modifierClass}${params.type}-dynamic`);
					swiper.pagination.dynamicBulletIndex = 0;
					if (params.dynamicMainBullets < 1) {
						params.dynamicMainBullets = 1;
					}
				}
				if (params.type === "progressbar" && params.progressbarOpposite) {
					$el.addClass(params.progressbarOppositeClass);
				}

				if (params.clickable) {
					$el.on("click", `.${params.bulletClass}`, function onClick(e) {
						e.preventDefault();
						let index = $(this).index() * swiper.params.slidesPerGroup;
						if (swiper.params.loop) index += swiper.loopedSlides;
						swiper.slideTo(index);
					});
				}

				Utils.extend(swiper.pagination, {
					$el,
					el: $el[0],
				});
			},
			destroy() {
				const swiper = this;
				const params = swiper.params.pagination;
				if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
				const $el = swiper.pagination.$el;

				$el.removeClass(params.hiddenClass);
				$el.removeClass(params.modifierClass + params.type);
				if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
				if (params.clickable) {
					$el.off("click", `.${params.bulletClass}`);
				}
			},
		};

		var Pagination$1 = {
			name: "pagination",
			params: {
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: false,
					hideOnClick: false,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: false,
					type: "bullets", // 'bullets' or 'progressbar' or 'fraction' or 'custom'
					dynamicBullets: false,
					dynamicMainBullets: 1,
					formatFractionCurrent: (number) => number,
					formatFractionTotal: (number) => number,
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-", // NEW
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable", // NEW
					lockClass: "swiper-pagination-lock",
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					pagination: {
						init: Pagination.init.bind(swiper),
						render: Pagination.render.bind(swiper),
						update: Pagination.update.bind(swiper),
						destroy: Pagination.destroy.bind(swiper),
						dynamicBulletIndex: 0,
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					swiper.pagination.init();
					swiper.pagination.render();
					swiper.pagination.update();
				},
				activeIndexChange() {
					const swiper = this;
					if (swiper.params.loop) {
						swiper.pagination.update();
					} else if (typeof swiper.snapIndex === "undefined") {
						swiper.pagination.update();
					}
				},
				snapIndexChange() {
					const swiper = this;
					if (!swiper.params.loop) {
						swiper.pagination.update();
					}
				},
				slidesLengthChange() {
					const swiper = this;
					if (swiper.params.loop) {
						swiper.pagination.render();
						swiper.pagination.update();
					}
				},
				snapGridLengthChange() {
					const swiper = this;
					if (!swiper.params.loop) {
						swiper.pagination.render();
						swiper.pagination.update();
					}
				},
				destroy() {
					const swiper = this;
					swiper.pagination.destroy();
				},
				click(e) {
					const swiper = this;
					if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
						const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
						if (isHidden === true) {
							swiper.emit("paginationShow", swiper);
						} else {
							swiper.emit("paginationHide", swiper);
						}
						swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
					}
				},
			},
		};

		const Scrollbar = {
			setTranslate() {
				const swiper = this;
				if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
				const { scrollbar, rtlTranslate: rtl, progress } = swiper;
				const { dragSize, trackSize, $dragEl, $el } = scrollbar;
				const params = swiper.params.scrollbar;

				let newSize = dragSize;
				let newPos = (trackSize - dragSize) * progress;
				if (rtl) {
					newPos = -newPos;
					if (newPos > 0) {
						newSize = dragSize - newPos;
						newPos = 0;
					} else if (-newPos + dragSize > trackSize) {
						newSize = trackSize + newPos;
					}
				} else if (newPos < 0) {
					newSize = dragSize + newPos;
					newPos = 0;
				} else if (newPos + dragSize > trackSize) {
					newSize = trackSize - newPos;
				}
				if (swiper.isHorizontal()) {
					$dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
					$dragEl[0].style.width = `${newSize}px`;
				} else {
					$dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
					$dragEl[0].style.height = `${newSize}px`;
				}
				if (params.hide) {
					clearTimeout(swiper.scrollbar.timeout);
					$el[0].style.opacity = 1;
					swiper.scrollbar.timeout = setTimeout(() => {
						$el[0].style.opacity = 0;
						$el.transition(400);
					}, 1000);
				}
			},
			setTransition(duration) {
				const swiper = this;
				if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
				swiper.scrollbar.$dragEl.transition(duration);
			},
			updateSize() {
				const swiper = this;
				if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

				const { scrollbar } = swiper;
				const { $dragEl, $el } = scrollbar;

				$dragEl[0].style.width = "";
				$dragEl[0].style.height = "";
				const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

				const divider = swiper.size / swiper.virtualSize;
				const moveDivider = divider * (trackSize / swiper.size);
				let dragSize;
				if (swiper.params.scrollbar.dragSize === "auto") {
					dragSize = trackSize * divider;
				} else {
					dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
				}

				if (swiper.isHorizontal()) {
					$dragEl[0].style.width = `${dragSize}px`;
				} else {
					$dragEl[0].style.height = `${dragSize}px`;
				}

				if (divider >= 1) {
					$el[0].style.display = "none";
				} else {
					$el[0].style.display = "";
				}
				if (swiper.params.scrollbar.hide) {
					$el[0].style.opacity = 0;
				}
				Utils.extend(scrollbar, {
					trackSize,
					divider,
					moveDivider,
					dragSize,
				});
				scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? "addClass" : "removeClass"](swiper.params.scrollbar.lockClass);
			},
			getPointerPosition(e) {
				const swiper = this;
				if (swiper.isHorizontal()) {
					return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX;
				}
				return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY;
			},
			setDragPosition(e) {
				const swiper = this;
				const { scrollbar, rtlTranslate: rtl } = swiper;
				const { $el, dragSize, trackSize, dragStartPos } = scrollbar;

				let positionRatio;
				positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
				positionRatio = Math.max(Math.min(positionRatio, 1), 0);
				if (rtl) {
					positionRatio = 1 - positionRatio;
				}

				const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;

				swiper.updateProgress(position);
				swiper.setTranslate(position);
				swiper.updateActiveIndex();
				swiper.updateSlidesClasses();
			},
			onDragStart(e) {
				const swiper = this;
				const params = swiper.params.scrollbar;
				const { scrollbar, $wrapperEl } = swiper;
				const { $el, $dragEl } = scrollbar;
				swiper.scrollbar.isTouched = true;
				swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
				e.preventDefault();
				e.stopPropagation();

				$wrapperEl.transition(100);
				$dragEl.transition(100);
				scrollbar.setDragPosition(e);

				clearTimeout(swiper.scrollbar.dragTimeout);

				$el.transition(0);
				if (params.hide) {
					$el.css("opacity", 1);
				}
				if (swiper.params.cssMode) {
					swiper.$wrapperEl.css("scroll-snap-type", "none");
				}
				swiper.emit("scrollbarDragStart", e);
			},
			onDragMove(e) {
				const swiper = this;
				const { scrollbar, $wrapperEl } = swiper;
				const { $el, $dragEl } = scrollbar;

				if (!swiper.scrollbar.isTouched) return;
				if (e.preventDefault) e.preventDefault();
				else e.returnValue = false;
				scrollbar.setDragPosition(e);
				$wrapperEl.transition(0);
				$el.transition(0);
				$dragEl.transition(0);
				swiper.emit("scrollbarDragMove", e);
			},
			onDragEnd(e) {
				const swiper = this;

				const params = swiper.params.scrollbar;
				const { scrollbar, $wrapperEl } = swiper;
				const { $el } = scrollbar;

				if (!swiper.scrollbar.isTouched) return;
				swiper.scrollbar.isTouched = false;
				if (swiper.params.cssMode) {
					swiper.$wrapperEl.css("scroll-snap-type", "");
					$wrapperEl.transition("");
				}
				if (params.hide) {
					clearTimeout(swiper.scrollbar.dragTimeout);
					swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
						$el.css("opacity", 0);
						$el.transition(400);
					}, 1000);
				}
				swiper.emit("scrollbarDragEnd", e);
				if (params.snapOnRelease) {
					swiper.slideToClosest();
				}
			},
			enableDraggable() {
				const swiper = this;
				if (!swiper.params.scrollbar.el) return;
				const { scrollbar, touchEventsTouch, touchEventsDesktop, params } = swiper;
				const $el = scrollbar.$el;
				const target = $el[0];
				const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
				const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
				if (!Support.touch) {
					target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
					doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
					doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
				} else {
					target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
					target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
					target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
				}
			},
			disableDraggable() {
				const swiper = this;
				if (!swiper.params.scrollbar.el) return;
				const { scrollbar, touchEventsTouch, touchEventsDesktop, params } = swiper;
				const $el = scrollbar.$el;
				const target = $el[0];
				const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
				const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
				if (!Support.touch) {
					target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
					doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
					doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
				} else {
					target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
					target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
					target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
				}
			},
			init() {
				const swiper = this;
				if (!swiper.params.scrollbar.el) return;
				const { scrollbar, $el: $swiperEl } = swiper;
				const params = swiper.params.scrollbar;

				let $el = $(params.el);
				if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
					$el = $swiperEl.find(params.el);
				}

				let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
				if ($dragEl.length === 0) {
					$dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
					$el.append($dragEl);
				}

				Utils.extend(scrollbar, {
					$el,
					el: $el[0],
					$dragEl,
					dragEl: $dragEl[0],
				});

				if (params.draggable) {
					scrollbar.enableDraggable();
				}
			},
			destroy() {
				const swiper = this;
				swiper.scrollbar.disableDraggable();
			},
		};

		var Scrollbar$1 = {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: false,
					draggable: false,
					snapOnRelease: true,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag",
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					scrollbar: {
						init: Scrollbar.init.bind(swiper),
						destroy: Scrollbar.destroy.bind(swiper),
						updateSize: Scrollbar.updateSize.bind(swiper),
						setTranslate: Scrollbar.setTranslate.bind(swiper),
						setTransition: Scrollbar.setTransition.bind(swiper),
						enableDraggable: Scrollbar.enableDraggable.bind(swiper),
						disableDraggable: Scrollbar.disableDraggable.bind(swiper),
						setDragPosition: Scrollbar.setDragPosition.bind(swiper),
						getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
						onDragStart: Scrollbar.onDragStart.bind(swiper),
						onDragMove: Scrollbar.onDragMove.bind(swiper),
						onDragEnd: Scrollbar.onDragEnd.bind(swiper),
						isTouched: false,
						timeout: null,
						dragTimeout: null,
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					swiper.scrollbar.init();
					swiper.scrollbar.updateSize();
					swiper.scrollbar.setTranslate();
				},
				update() {
					const swiper = this;
					swiper.scrollbar.updateSize();
				},
				resize() {
					const swiper = this;
					swiper.scrollbar.updateSize();
				},
				observerUpdate() {
					const swiper = this;
					swiper.scrollbar.updateSize();
				},
				setTranslate() {
					const swiper = this;
					swiper.scrollbar.setTranslate();
				},
				setTransition(duration) {
					const swiper = this;
					swiper.scrollbar.setTransition(duration);
				},
				destroy() {
					const swiper = this;
					swiper.scrollbar.destroy();
				},
			},
		};

		const Parallax = {
			setTransform(el, progress) {
				const swiper = this;
				const { rtl } = swiper;

				const $el = $(el);
				const rtlFactor = rtl ? -1 : 1;

				const p = $el.attr("data-swiper-parallax") || "0";
				let x = $el.attr("data-swiper-parallax-x");
				let y = $el.attr("data-swiper-parallax-y");
				const scale = $el.attr("data-swiper-parallax-scale");
				const opacity = $el.attr("data-swiper-parallax-opacity");

				if (x || y) {
					x = x || "0";
					y = y || "0";
				} else if (swiper.isHorizontal()) {
					x = p;
					y = "0";
				} else {
					y = p;
					x = "0";
				}

				if (x.indexOf("%") >= 0) {
					x = `${parseInt(x, 10) * progress * rtlFactor}%`;
				} else {
					x = `${x * progress * rtlFactor}px`;
				}
				if (y.indexOf("%") >= 0) {
					y = `${parseInt(y, 10) * progress}%`;
				} else {
					y = `${y * progress}px`;
				}

				if (typeof opacity !== "undefined" && opacity !== null) {
					const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
					$el[0].style.opacity = currentOpacity;
				}
				if (typeof scale === "undefined" || scale === null) {
					$el.transform(`translate3d(${x}, ${y}, 0px)`);
				} else {
					const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
					$el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
				}
			},
			setTranslate() {
				const swiper = this;
				const { $el, slides, progress, snapGrid } = swiper;
				$el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((index, el) => {
					swiper.parallax.setTransform(el, progress);
				});
				slides.each((slideIndex, slideEl) => {
					let slideProgress = slideEl.progress;
					if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") {
						slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
					}
					slideProgress = Math.min(Math.max(slideProgress, -1), 1);
					$(slideEl)
						.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
						.each((index, el) => {
							swiper.parallax.setTransform(el, slideProgress);
						});
				});
			},
			setTransition(duration = this.params.speed) {
				const swiper = this;
				const { $el } = swiper;
				$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((index, parallaxEl) => {
					const $parallaxEl = $(parallaxEl);
					let parallaxDuration = parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) || duration;
					if (duration === 0) parallaxDuration = 0;
					$parallaxEl.transition(parallaxDuration);
				});
			},
		};

		var Parallax$1 = {
			name: "parallax",
			params: {
				parallax: {
					enabled: false,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					parallax: {
						setTransform: Parallax.setTransform.bind(swiper),
						setTranslate: Parallax.setTranslate.bind(swiper),
						setTransition: Parallax.setTransition.bind(swiper),
					},
				});
			},
			on: {
				beforeInit() {
					const swiper = this;
					if (!swiper.params.parallax.enabled) return;
					swiper.params.watchSlidesProgress = true;
					swiper.originalParams.watchSlidesProgress = true;
				},
				init() {
					const swiper = this;
					if (!swiper.params.parallax.enabled) return;
					swiper.parallax.setTranslate();
				},
				setTranslate() {
					const swiper = this;
					if (!swiper.params.parallax.enabled) return;
					swiper.parallax.setTranslate();
				},
				setTransition(duration) {
					const swiper = this;
					if (!swiper.params.parallax.enabled) return;
					swiper.parallax.setTransition(duration);
				},
			},
		};

		const Zoom = {
			// Calc Scale From Multi-touches
			getDistanceBetweenTouches(e) {
				if (e.targetTouches.length < 2) return 1;
				const x1 = e.targetTouches[0].pageX;
				const y1 = e.targetTouches[0].pageY;
				const x2 = e.targetTouches[1].pageX;
				const y2 = e.targetTouches[1].pageY;
				const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
				return distance;
			},
			// Events
			onGestureStart(e) {
				const swiper = this;
				const params = swiper.params.zoom;
				const zoom = swiper.zoom;
				const { gesture } = zoom;
				zoom.fakeGestureTouched = false;
				zoom.fakeGestureMoved = false;
				if (!Support.gestures) {
					if (e.type !== "touchstart" || (e.type === "touchstart" && e.targetTouches.length < 2)) {
						return;
					}
					zoom.fakeGestureTouched = true;
					gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
				}
				if (!gesture.$slideEl || !gesture.$slideEl.length) {
					gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
					if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
					gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");
					gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
					gesture.maxRatio = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
					if (gesture.$imageWrapEl.length === 0) {
						gesture.$imageEl = undefined;
						return;
					}
				}
				if (gesture.$imageEl) {
					gesture.$imageEl.transition(0);
				}
				swiper.zoom.isScaling = true;
			},
			onGestureChange(e) {
				const swiper = this;
				const params = swiper.params.zoom;
				const zoom = swiper.zoom;
				const { gesture } = zoom;
				if (!Support.gestures) {
					if (e.type !== "touchmove" || (e.type === "touchmove" && e.targetTouches.length < 2)) {
						return;
					}
					zoom.fakeGestureMoved = true;
					gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
				}
				if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
				if (Support.gestures) {
					zoom.scale = e.scale * zoom.currentScale;
				} else {
					zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
				}
				if (zoom.scale > gesture.maxRatio) {
					zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
				}
				if (zoom.scale < params.minRatio) {
					zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
				}
				gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
			},
			onGestureEnd(e) {
				const swiper = this;
				const params = swiper.params.zoom;
				const zoom = swiper.zoom;
				const { gesture } = zoom;
				if (!Support.gestures) {
					if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
						return;
					}
					if (e.type !== "touchend" || (e.type === "touchend" && e.changedTouches.length < 2 && !Device.android)) {
						return;
					}
					zoom.fakeGestureTouched = false;
					zoom.fakeGestureMoved = false;
				}
				if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
				zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
				gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
				zoom.currentScale = zoom.scale;
				zoom.isScaling = false;
				if (zoom.scale === 1) gesture.$slideEl = undefined;
			},
			onTouchStart(e) {
				const swiper = this;
				const zoom = swiper.zoom;
				const { gesture, image } = zoom;
				if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
				if (image.isTouched) return;
				if (Device.android && e.cancelable) e.preventDefault();
				image.isTouched = true;
				image.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
				image.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
			},
			onTouchMove(e) {
				const swiper = this;
				const zoom = swiper.zoom;
				const { gesture, image, velocity } = zoom;
				if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
				swiper.allowClick = false;
				if (!image.isTouched || !gesture.$slideEl) return;

				if (!image.isMoved) {
					image.width = gesture.$imageEl[0].offsetWidth;
					image.height = gesture.$imageEl[0].offsetHeight;
					image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], "x") || 0;
					image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], "y") || 0;
					gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
					gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
					gesture.$imageWrapEl.transition(0);
					if (swiper.rtl) {
						image.startX = -image.startX;
						image.startY = -image.startY;
					}
				}
				// Define if we need image drag
				const scaledWidth = image.width * zoom.scale;
				const scaledHeight = image.height * zoom.scale;

				if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;

				image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
				image.maxX = -image.minX;
				image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
				image.maxY = -image.minY;

				image.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
				image.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;

				if (!image.isMoved && !zoom.isScaling) {
					if (swiper.isHorizontal() && ((Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x))) {
						image.isTouched = false;
						return;
					}
					if (!swiper.isHorizontal() && ((Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y))) {
						image.isTouched = false;
						return;
					}
				}
				if (e.cancelable) {
					e.preventDefault();
				}
				e.stopPropagation();

				image.isMoved = true;
				image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
				image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

				if (image.currentX < image.minX) {
					image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
				}
				if (image.currentX > image.maxX) {
					image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
				}

				if (image.currentY < image.minY) {
					image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
				}
				if (image.currentY > image.maxY) {
					image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
				}

				// Velocity
				if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
				if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
				if (!velocity.prevTime) velocity.prevTime = Date.now();
				velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
				velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
				if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
				if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
				velocity.prevPositionX = image.touchesCurrent.x;
				velocity.prevPositionY = image.touchesCurrent.y;
				velocity.prevTime = Date.now();

				gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
			},
			onTouchEnd() {
				const swiper = this;
				const zoom = swiper.zoom;
				const { gesture, image, velocity } = zoom;
				if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
				if (!image.isTouched || !image.isMoved) {
					image.isTouched = false;
					image.isMoved = false;
					return;
				}
				image.isTouched = false;
				image.isMoved = false;
				let momentumDurationX = 300;
				let momentumDurationY = 300;
				const momentumDistanceX = velocity.x * momentumDurationX;
				const newPositionX = image.currentX + momentumDistanceX;
				const momentumDistanceY = velocity.y * momentumDurationY;
				const newPositionY = image.currentY + momentumDistanceY;

				// Fix duration
				if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
				if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
				const momentumDuration = Math.max(momentumDurationX, momentumDurationY);

				image.currentX = newPositionX;
				image.currentY = newPositionY;

				// Define if we need image drag
				const scaledWidth = image.width * zoom.scale;
				const scaledHeight = image.height * zoom.scale;
				image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
				image.maxX = -image.minX;
				image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
				image.maxY = -image.minY;
				image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
				image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

				gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
			},
			onTransitionEnd() {
				const swiper = this;
				const zoom = swiper.zoom;
				const { gesture } = zoom;
				if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
					if (gesture.$imageEl) {
						gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
					}
					if (gesture.$imageWrapEl) {
						gesture.$imageWrapEl.transform("translate3d(0,0,0)");
					}

					zoom.scale = 1;
					zoom.currentScale = 1;

					gesture.$slideEl = undefined;
					gesture.$imageEl = undefined;
					gesture.$imageWrapEl = undefined;
				}
			},
			// Toggle Zoom
			toggle(e) {
				const swiper = this;
				const zoom = swiper.zoom;

				if (zoom.scale && zoom.scale !== 1) {
					// Zoom Out
					zoom.out();
				} else {
					// Zoom In
					zoom.in(e);
				}
			},
			in(e) {
				const swiper = this;

				const zoom = swiper.zoom;
				const params = swiper.params.zoom;
				const { gesture, image } = zoom;

				if (!gesture.$slideEl) {
					if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
						gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
					} else {
						gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
					}
					gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");
					gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
				}
				if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

				gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);

				let touchX;
				let touchY;
				let offsetX;
				let offsetY;
				let diffX;
				let diffY;
				let translateX;
				let translateY;
				let imageWidth;
				let imageHeight;
				let scaledWidth;
				let scaledHeight;
				let translateMinX;
				let translateMinY;
				let translateMaxX;
				let translateMaxY;
				let slideWidth;
				let slideHeight;

				if (typeof image.touchesStart.x === "undefined" && e) {
					touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
					touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
				} else {
					touchX = image.touchesStart.x;
					touchY = image.touchesStart.y;
				}

				zoom.scale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
				zoom.currentScale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
				if (e) {
					slideWidth = gesture.$slideEl[0].offsetWidth;
					slideHeight = gesture.$slideEl[0].offsetHeight;
					offsetX = gesture.$slideEl.offset().left;
					offsetY = gesture.$slideEl.offset().top;
					diffX = offsetX + slideWidth / 2 - touchX;
					diffY = offsetY + slideHeight / 2 - touchY;

					imageWidth = gesture.$imageEl[0].offsetWidth;
					imageHeight = gesture.$imageEl[0].offsetHeight;
					scaledWidth = imageWidth * zoom.scale;
					scaledHeight = imageHeight * zoom.scale;

					translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
					translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
					translateMaxX = -translateMinX;
					translateMaxY = -translateMinY;

					translateX = diffX * zoom.scale;
					translateY = diffY * zoom.scale;

					if (translateX < translateMinX) {
						translateX = translateMinX;
					}
					if (translateX > translateMaxX) {
						translateX = translateMaxX;
					}

					if (translateY < translateMinY) {
						translateY = translateMinY;
					}
					if (translateY > translateMaxY) {
						translateY = translateMaxY;
					}
				} else {
					translateX = 0;
					translateY = 0;
				}
				gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
				gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
			},
			out() {
				const swiper = this;

				const zoom = swiper.zoom;
				const params = swiper.params.zoom;
				const { gesture } = zoom;

				if (!gesture.$slideEl) {
					if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
						gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
					} else {
						gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
					}
					gesture.$imageEl = gesture.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target");
					gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
				}
				if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

				zoom.scale = 1;
				zoom.currentScale = 1;
				gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
				gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
				gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
				gesture.$slideEl = undefined;
			},
			// Attach/Detach Events
			enable() {
				const swiper = this;
				const zoom = swiper.zoom;
				if (zoom.enabled) return;
				zoom.enabled = true;

				const passiveListener = swiper.touchEvents.start === "touchstart" && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
				const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

				const slideSelector = `.${swiper.params.slideClass}`;

				// Scale image
				if (Support.gestures) {
					swiper.$wrapperEl.on("gesturestart", slideSelector, zoom.onGestureStart, passiveListener);
					swiper.$wrapperEl.on("gesturechange", slideSelector, zoom.onGestureChange, passiveListener);
					swiper.$wrapperEl.on("gestureend", slideSelector, zoom.onGestureEnd, passiveListener);
				} else if (swiper.touchEvents.start === "touchstart") {
					swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
					swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
					swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
					if (swiper.touchEvents.cancel) {
						swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
					}
				}

				// Move image
				swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
			},
			disable() {
				const swiper = this;
				const zoom = swiper.zoom;
				if (!zoom.enabled) return;

				swiper.zoom.enabled = false;

				const passiveListener = swiper.touchEvents.start === "touchstart" && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
				const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

				const slideSelector = `.${swiper.params.slideClass}`;

				// Scale image
				if (Support.gestures) {
					swiper.$wrapperEl.off("gesturestart", slideSelector, zoom.onGestureStart, passiveListener);
					swiper.$wrapperEl.off("gesturechange", slideSelector, zoom.onGestureChange, passiveListener);
					swiper.$wrapperEl.off("gestureend", slideSelector, zoom.onGestureEnd, passiveListener);
				} else if (swiper.touchEvents.start === "touchstart") {
					swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
					swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
					swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
					if (swiper.touchEvents.cancel) {
						swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
					}
				}

				// Move image
				swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
			},
		};

		var Zoom$1 = {
			name: "zoom",
			params: {
				zoom: {
					enabled: false,
					maxRatio: 3,
					minRatio: 1,
					toggle: true,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed",
				},
			},
			create() {
				const swiper = this;
				const zoom = {
					enabled: false,
					scale: 1,
					currentScale: 1,
					isScaling: false,
					gesture: {
						$slideEl: undefined,
						slideWidth: undefined,
						slideHeight: undefined,
						$imageEl: undefined,
						$imageWrapEl: undefined,
						maxRatio: 3,
					},
					image: {
						isTouched: undefined,
						isMoved: undefined,
						currentX: undefined,
						currentY: undefined,
						minX: undefined,
						minY: undefined,
						maxX: undefined,
						maxY: undefined,
						width: undefined,
						height: undefined,
						startX: undefined,
						startY: undefined,
						touchesStart: {},
						touchesCurrent: {},
					},
					velocity: {
						x: undefined,
						y: undefined,
						prevPositionX: undefined,
						prevPositionY: undefined,
						prevTime: undefined,
					},
				};

				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((methodName) => {
					zoom[methodName] = Zoom[methodName].bind(swiper);
				});
				Utils.extend(swiper, {
					zoom,
				});

				let scale = 1;
				Object.defineProperty(swiper.zoom, "scale", {
					get() {
						return scale;
					},
					set(value) {
						if (scale !== value) {
							const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
							const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
							swiper.emit("zoomChange", value, imageEl, slideEl);
						}
						scale = value;
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					if (swiper.params.zoom.enabled) {
						swiper.zoom.enable();
					}
				},
				destroy() {
					const swiper = this;
					swiper.zoom.disable();
				},
				touchStart(e) {
					const swiper = this;
					if (!swiper.zoom.enabled) return;
					swiper.zoom.onTouchStart(e);
				},
				touchEnd(e) {
					const swiper = this;
					if (!swiper.zoom.enabled) return;
					swiper.zoom.onTouchEnd(e);
				},
				doubleTap(e) {
					const swiper = this;
					if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
						swiper.zoom.toggle(e);
					}
				},
				transitionEnd() {
					const swiper = this;
					if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
						swiper.zoom.onTransitionEnd();
					}
				},
				slideChange() {
					const swiper = this;
					if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
						swiper.zoom.onTransitionEnd();
					}
				},
			},
		};

		const Lazy = {
			loadInSlide(index, loadInDuplicate = true) {
				const swiper = this;
				const params = swiper.params.lazy;
				if (typeof index === "undefined") return;
				if (swiper.slides.length === 0) return;
				const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

				const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);

				let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
				if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
					$images = $images.add($slideEl[0]);
				}
				if ($images.length === 0) return;

				$images.each((imageIndex, imageEl) => {
					const $imageEl = $(imageEl);
					$imageEl.addClass(params.loadingClass);

					const background = $imageEl.attr("data-background");
					const src = $imageEl.attr("data-src");
					const srcset = $imageEl.attr("data-srcset");
					const sizes = $imageEl.attr("data-sizes");
					const $pictureEl = $imageEl.parent("picture");

					swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
						if (typeof swiper === "undefined" || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return;
						if (background) {
							$imageEl.css("background-image", `url("${background}")`);
							$imageEl.removeAttr("data-background");
						} else {
							if (srcset) {
								$imageEl.attr("srcset", srcset);
								$imageEl.removeAttr("data-srcset");
							}
							if (sizes) {
								$imageEl.attr("sizes", sizes);
								$imageEl.removeAttr("data-sizes");
							}
							if ($pictureEl.length) {
								$pictureEl.children("source").each((sourceIndex, sourceEl) => {
									const $source = $(sourceEl);

									if ($source.attr("data-srcset")) {
										$source.attr("srcset", $source.attr("data-srcset"));
										$source.removeAttr("data-srcset");
									}
								});
							}
							if (src) {
								$imageEl.attr("src", src);
								$imageEl.removeAttr("data-src");
							}
						}

						$imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
						$slideEl.find(`.${params.preloaderClass}`).remove();
						if (swiper.params.loop && loadInDuplicate) {
							const slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
							if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
								const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
								swiper.lazy.loadInSlide(originalSlide.index(), false);
							} else {
								const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
								swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
							}
						}
						swiper.emit("lazyImageReady", $slideEl[0], $imageEl[0]);
						if (swiper.params.autoHeight) {
							swiper.updateAutoHeight();
						}
					});

					swiper.emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
				});
			},
			load() {
				const swiper = this;
				const { $wrapperEl, params: swiperParams, slides, activeIndex } = swiper;
				const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
				const params = swiperParams.lazy;

				let slidesPerView = swiperParams.slidesPerView;
				if (slidesPerView === "auto") {
					slidesPerView = 0;
				}

				function slideExist(index) {
					if (isVirtual) {
						if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
							return true;
						}
					} else if (slides[index]) return true;
					return false;
				}

				function slideIndex(slideEl) {
					if (isVirtual) {
						return $(slideEl).attr("data-swiper-slide-index");
					}
					return $(slideEl).index();
				}

				if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
				if (swiper.params.watchSlidesVisibility) {
					$wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
						const index = isVirtual ? $(slideEl).attr("data-swiper-slide-index") : $(slideEl).index();
						swiper.lazy.loadInSlide(index);
					});
				} else if (slidesPerView > 1) {
					for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
						if (slideExist(i)) swiper.lazy.loadInSlide(i);
					}
				} else {
					swiper.lazy.loadInSlide(activeIndex);
				}
				if (params.loadPrevNext) {
					if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
						const amount = params.loadPrevNextAmount;
						const spv = slidesPerView;
						const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
						const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
						// Next Slides
						for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
							if (slideExist(i)) swiper.lazy.loadInSlide(i);
						}
						// Prev Slides
						for (let i = minIndex; i < activeIndex; i += 1) {
							if (slideExist(i)) swiper.lazy.loadInSlide(i);
						}
					} else {
						const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
						if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));

						const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
						if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
					}
				}
			},
		};

		var Lazy$1 = {
			name: "lazy",
			params: {
				lazy: {
					enabled: false,
					loadPrevNext: false,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: false,

					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader",
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					lazy: {
						initialImageLoaded: false,
						load: Lazy.load.bind(swiper),
						loadInSlide: Lazy.loadInSlide.bind(swiper),
					},
				});
			},
			on: {
				beforeInit() {
					const swiper = this;
					if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
						swiper.params.preloadImages = false;
					}
				},
				init() {
					const swiper = this;
					if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
						swiper.lazy.load();
					}
				},
				scroll() {
					const swiper = this;
					if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
						swiper.lazy.load();
					}
				},
				resize() {
					const swiper = this;
					if (swiper.params.lazy.enabled) {
						swiper.lazy.load();
					}
				},
				scrollbarDragMove() {
					const swiper = this;
					if (swiper.params.lazy.enabled) {
						swiper.lazy.load();
					}
				},
				transitionStart() {
					const swiper = this;
					if (swiper.params.lazy.enabled) {
						if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
							swiper.lazy.load();
						}
					}
				},
				transitionEnd() {
					const swiper = this;
					if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
						swiper.lazy.load();
					}
				},
				slideChange() {
					const swiper = this;
					if (swiper.params.lazy.enabled && swiper.params.cssMode) {
						swiper.lazy.load();
					}
				},
			},
		};

		/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

		const Controller = {
			LinearSpline: function LinearSpline(x, y) {
				const binarySearch = (function search() {
					let maxIndex;
					let minIndex;
					let guess;
					return (array, val) => {
						minIndex = -1;
						maxIndex = array.length;
						while (maxIndex - minIndex > 1) {
							guess = (maxIndex + minIndex) >> 1;
							if (array[guess] <= val) {
								minIndex = guess;
							} else {
								maxIndex = guess;
							}
						}
						return maxIndex;
					};
				})();
				this.x = x;
				this.y = y;
				this.lastIndex = x.length - 1;
				// Given an x value (x2), return the expected y2 value:
				// (x1,y1) is the known point before given value,
				// (x3,y3) is the known point after given value.
				let i1;
				let i3;

				this.interpolate = function interpolate(x2) {
					if (!x2) return 0;

					// Get the indexes of x1 and x3 (the array indexes before and after given x2):
					i3 = binarySearch(this.x, x2);
					i1 = i3 - 1;

					// We have our indexes i1 & i3, so we can calculate already:
					// y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
					return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
				};
				return this;
			},
			// xxx: for now i will just save one spline function to to
			getInterpolateFunction(c) {
				const swiper = this;
				if (!swiper.controller.spline) {
					swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
				}
			},
			setTranslate(setTranslate, byController) {
				const swiper = this;
				const controlled = swiper.controller.control;
				let multiplier;
				let controlledTranslate;
				function setControlledTranslate(c) {
					// this will create an Interpolate function based on the snapGrids
					// x is the Grid of the scrolled scroller and y will be the controlled scroller
					// it makes sense to create this only once and recall it for the interpolation
					// the function does a lot of value caching for performance
					const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
					if (swiper.params.controller.by === "slide") {
						swiper.controller.getInterpolateFunction(c);
						// i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
						// but it did not work out
						controlledTranslate = -swiper.controller.spline.interpolate(-translate);
					}

					if (!controlledTranslate || swiper.params.controller.by === "container") {
						multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
						controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
					}

					if (swiper.params.controller.inverse) {
						controlledTranslate = c.maxTranslate() - controlledTranslate;
					}
					c.updateProgress(controlledTranslate);
					c.setTranslate(controlledTranslate, swiper);
					c.updateActiveIndex();
					c.updateSlidesClasses();
				}
				if (Array.isArray(controlled)) {
					for (let i = 0; i < controlled.length; i += 1) {
						if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
							setControlledTranslate(controlled[i]);
						}
					}
				} else if (controlled instanceof Swiper && byController !== controlled) {
					setControlledTranslate(controlled);
				}
			},
			setTransition(duration, byController) {
				const swiper = this;
				const controlled = swiper.controller.control;
				let i;
				function setControlledTransition(c) {
					c.setTransition(duration, swiper);
					if (duration !== 0) {
						c.transitionStart();
						if (c.params.autoHeight) {
							Utils.nextTick(() => {
								c.updateAutoHeight();
							});
						}
						c.$wrapperEl.transitionEnd(() => {
							if (!controlled) return;
							if (c.params.loop && swiper.params.controller.by === "slide") {
								c.loopFix();
							}
							c.transitionEnd();
						});
					}
				}
				if (Array.isArray(controlled)) {
					for (i = 0; i < controlled.length; i += 1) {
						if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
							setControlledTransition(controlled[i]);
						}
					}
				} else if (controlled instanceof Swiper && byController !== controlled) {
					setControlledTransition(controlled);
				}
			},
		};
		var Controller$1 = {
			name: "controller",
			params: {
				controller: {
					control: undefined,
					inverse: false,
					by: "slide", // or 'container'
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					controller: {
						control: swiper.params.controller.control,
						getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
						setTranslate: Controller.setTranslate.bind(swiper),
						setTransition: Controller.setTransition.bind(swiper),
					},
				});
			},
			on: {
				update() {
					const swiper = this;
					if (!swiper.controller.control) return;
					if (swiper.controller.spline) {
						swiper.controller.spline = undefined;
						delete swiper.controller.spline;
					}
				},
				resize() {
					const swiper = this;
					if (!swiper.controller.control) return;
					if (swiper.controller.spline) {
						swiper.controller.spline = undefined;
						delete swiper.controller.spline;
					}
				},
				observerUpdate() {
					const swiper = this;
					if (!swiper.controller.control) return;
					if (swiper.controller.spline) {
						swiper.controller.spline = undefined;
						delete swiper.controller.spline;
					}
				},
				setTranslate(translate, byController) {
					const swiper = this;
					if (!swiper.controller.control) return;
					swiper.controller.setTranslate(translate, byController);
				},
				setTransition(duration, byController) {
					const swiper = this;
					if (!swiper.controller.control) return;
					swiper.controller.setTransition(duration, byController);
				},
			},
		};

		const a11y = {
			makeElFocusable($el) {
				$el.attr("tabIndex", "0");
				return $el;
			},
			makeElNotFocusable($el) {
				$el.attr("tabIndex", "-1");
				return $el;
			},
			addElRole($el, role) {
				$el.attr("role", role);
				return $el;
			},
			addElLabel($el, label) {
				$el.attr("aria-label", label);
				return $el;
			},
			disableEl($el) {
				$el.attr("aria-disabled", true);
				return $el;
			},
			enableEl($el) {
				$el.attr("aria-disabled", false);
				return $el;
			},
			onEnterKey(e) {
				const swiper = this;
				const params = swiper.params.a11y;
				if (e.keyCode !== 13) return;
				const $targetEl = $(e.target);
				if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
					if (!(swiper.isEnd && !swiper.params.loop)) {
						swiper.slideNext();
					}
					if (swiper.isEnd) {
						swiper.a11y.notify(params.lastSlideMessage);
					} else {
						swiper.a11y.notify(params.nextSlideMessage);
					}
				}
				if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
					if (!(swiper.isBeginning && !swiper.params.loop)) {
						swiper.slidePrev();
					}
					if (swiper.isBeginning) {
						swiper.a11y.notify(params.firstSlideMessage);
					} else {
						swiper.a11y.notify(params.prevSlideMessage);
					}
				}
				if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
					$targetEl[0].click();
				}
			},
			notify(message) {
				const swiper = this;
				const notification = swiper.a11y.liveRegion;
				if (notification.length === 0) return;
				notification.html("");
				notification.html(message);
			},
			updateNavigation() {
				const swiper = this;

				if (swiper.params.loop || !swiper.navigation) return;
				const { $nextEl, $prevEl } = swiper.navigation;

				if ($prevEl && $prevEl.length > 0) {
					if (swiper.isBeginning) {
						swiper.a11y.disableEl($prevEl);
						swiper.a11y.makeElNotFocusable($prevEl);
					} else {
						swiper.a11y.enableEl($prevEl);
						swiper.a11y.makeElFocusable($prevEl);
					}
				}
				if ($nextEl && $nextEl.length > 0) {
					if (swiper.isEnd) {
						swiper.a11y.disableEl($nextEl);
						swiper.a11y.makeElNotFocusable($nextEl);
					} else {
						swiper.a11y.enableEl($nextEl);
						swiper.a11y.makeElFocusable($nextEl);
					}
				}
			},
			updatePagination() {
				const swiper = this;
				const params = swiper.params.a11y;
				if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
					swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
						const $bulletEl = $(bulletEl);
						swiper.a11y.makeElFocusable($bulletEl);
						swiper.a11y.addElRole($bulletEl, "button");
						swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
					});
				}
			},
			init() {
				const swiper = this;

				swiper.$el.append(swiper.a11y.liveRegion);

				// Navigation
				const params = swiper.params.a11y;
				let $nextEl;
				let $prevEl;
				if (swiper.navigation && swiper.navigation.$nextEl) {
					$nextEl = swiper.navigation.$nextEl;
				}
				if (swiper.navigation && swiper.navigation.$prevEl) {
					$prevEl = swiper.navigation.$prevEl;
				}
				if ($nextEl) {
					swiper.a11y.makeElFocusable($nextEl);
					swiper.a11y.addElRole($nextEl, "button");
					swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
					$nextEl.on("keydown", swiper.a11y.onEnterKey);
				}
				if ($prevEl) {
					swiper.a11y.makeElFocusable($prevEl);
					swiper.a11y.addElRole($prevEl, "button");
					swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
					$prevEl.on("keydown", swiper.a11y.onEnterKey);
				}

				// Pagination
				if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
					swiper.pagination.$el.on("keydown", `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
				}
			},
			destroy() {
				const swiper = this;
				if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();

				let $nextEl;
				let $prevEl;
				if (swiper.navigation && swiper.navigation.$nextEl) {
					$nextEl = swiper.navigation.$nextEl;
				}
				if (swiper.navigation && swiper.navigation.$prevEl) {
					$prevEl = swiper.navigation.$prevEl;
				}
				if ($nextEl) {
					$nextEl.off("keydown", swiper.a11y.onEnterKey);
				}
				if ($prevEl) {
					$prevEl.off("keydown", swiper.a11y.onEnterKey);
				}

				// Pagination
				if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
					swiper.pagination.$el.off("keydown", `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
				}
			},
		};
		var A11y = {
			name: "a11y",
			params: {
				a11y: {
					enabled: true,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}",
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					a11y: {
						liveRegion: $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`),
					},
				});
				Object.keys(a11y).forEach((methodName) => {
					swiper.a11y[methodName] = a11y[methodName].bind(swiper);
				});
			},
			on: {
				init() {
					const swiper = this;
					if (!swiper.params.a11y.enabled) return;
					swiper.a11y.init();
					swiper.a11y.updateNavigation();
				},
				toEdge() {
					const swiper = this;
					if (!swiper.params.a11y.enabled) return;
					swiper.a11y.updateNavigation();
				},
				fromEdge() {
					const swiper = this;
					if (!swiper.params.a11y.enabled) return;
					swiper.a11y.updateNavigation();
				},
				paginationUpdate() {
					const swiper = this;
					if (!swiper.params.a11y.enabled) return;
					swiper.a11y.updatePagination();
				},
				destroy() {
					const swiper = this;
					if (!swiper.params.a11y.enabled) return;
					swiper.a11y.destroy();
				},
			},
		};

		const History = {
			init() {
				const swiper = this;
				if (!swiper.params.history) return;
				if (!win.history || !win.history.pushState) {
					swiper.params.history.enabled = false;
					swiper.params.hashNavigation.enabled = true;
					return;
				}
				const history = swiper.history;
				history.initialized = true;
				history.paths = History.getPathValues();
				if (!history.paths.key && !history.paths.value) return;
				history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
				if (!swiper.params.history.replaceState) {
					win.addEventListener("popstate", swiper.history.setHistoryPopState);
				}
			},
			destroy() {
				const swiper = this;
				if (!swiper.params.history.replaceState) {
					win.removeEventListener("popstate", swiper.history.setHistoryPopState);
				}
			},
			setHistoryPopState() {
				const swiper = this;
				swiper.history.paths = History.getPathValues();
				swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
			},
			getPathValues() {
				const pathArray = win.location.pathname
					.slice(1)
					.split("/")
					.filter((part) => part !== "");
				const total = pathArray.length;
				const key = pathArray[total - 2];
				const value = pathArray[total - 1];
				return { key, value };
			},
			setHistory(key, index) {
				const swiper = this;
				if (!swiper.history.initialized || !swiper.params.history.enabled) return;
				const slide = swiper.slides.eq(index);
				let value = History.slugify(slide.attr("data-history"));
				if (!win.location.pathname.includes(key)) {
					value = `${key}/${value}`;
				}
				const currentState = win.history.state;
				if (currentState && currentState.value === value) {
					return;
				}
				if (swiper.params.history.replaceState) {
					win.history.replaceState({ value }, null, value);
				} else {
					win.history.pushState({ value }, null, value);
				}
			},
			slugify(text) {
				return text
					.toString()
					.replace(/\s+/g, "-")
					.replace(/[^\w-]+/g, "")
					.replace(/--+/g, "-")
					.replace(/^-+/, "")
					.replace(/-+$/, "");
			},
			scrollToSlide(speed, value, runCallbacks) {
				const swiper = this;
				if (value) {
					for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
						const slide = swiper.slides.eq(i);
						const slideHistory = History.slugify(slide.attr("data-history"));
						if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
							const index = slide.index();
							swiper.slideTo(index, speed, runCallbacks);
						}
					}
				} else {
					swiper.slideTo(0, speed, runCallbacks);
				}
			},
		};

		var History$1 = {
			name: "history",
			params: {
				history: {
					enabled: false,
					replaceState: false,
					key: "slides",
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					history: {
						init: History.init.bind(swiper),
						setHistory: History.setHistory.bind(swiper),
						setHistoryPopState: History.setHistoryPopState.bind(swiper),
						scrollToSlide: History.scrollToSlide.bind(swiper),
						destroy: History.destroy.bind(swiper),
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					if (swiper.params.history.enabled) {
						swiper.history.init();
					}
				},
				destroy() {
					const swiper = this;
					if (swiper.params.history.enabled) {
						swiper.history.destroy();
					}
				},
				transitionEnd() {
					const swiper = this;
					if (swiper.history.initialized) {
						swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
					}
				},
				slideChange() {
					const swiper = this;
					if (swiper.history.initialized && swiper.params.cssMode) {
						swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
					}
				},
			},
		};

		const HashNavigation = {
			onHashCange() {
				const swiper = this;
				swiper.emit("hashChange");
				const newHash = doc.location.hash.replace("#", "");
				const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr("data-hash");
				if (newHash !== activeSlideHash) {
					const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
					if (typeof newIndex === "undefined") return;
					swiper.slideTo(newIndex);
				}
			},
			setHash() {
				const swiper = this;
				if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
				if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
					win.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr("data-hash")}` || "");
					swiper.emit("hashSet");
				} else {
					const slide = swiper.slides.eq(swiper.activeIndex);
					const hash = slide.attr("data-hash") || slide.attr("data-history");
					doc.location.hash = hash || "";
					swiper.emit("hashSet");
				}
			},
			init() {
				const swiper = this;
				if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
				swiper.hashNavigation.initialized = true;
				const hash = doc.location.hash.replace("#", "");
				if (hash) {
					const speed = 0;
					for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
						const slide = swiper.slides.eq(i);
						const slideHash = slide.attr("data-hash") || slide.attr("data-history");
						if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
							const index = slide.index();
							swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
						}
					}
				}
				if (swiper.params.hashNavigation.watchState) {
					$(win).on("hashchange", swiper.hashNavigation.onHashCange);
				}
			},
			destroy() {
				const swiper = this;
				if (swiper.params.hashNavigation.watchState) {
					$(win).off("hashchange", swiper.hashNavigation.onHashCange);
				}
			},
		};
		var HashNavigation$1 = {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: false,
					replaceState: false,
					watchState: false,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					hashNavigation: {
						initialized: false,
						init: HashNavigation.init.bind(swiper),
						destroy: HashNavigation.destroy.bind(swiper),
						setHash: HashNavigation.setHash.bind(swiper),
						onHashCange: HashNavigation.onHashCange.bind(swiper),
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					if (swiper.params.hashNavigation.enabled) {
						swiper.hashNavigation.init();
					}
				},
				destroy() {
					const swiper = this;
					if (swiper.params.hashNavigation.enabled) {
						swiper.hashNavigation.destroy();
					}
				},
				transitionEnd() {
					const swiper = this;
					if (swiper.hashNavigation.initialized) {
						swiper.hashNavigation.setHash();
					}
				},
				slideChange() {
					const swiper = this;
					if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
						swiper.hashNavigation.setHash();
					}
				},
			},
		};

		/* eslint no-underscore-dangle: "off" */

		const Autoplay = {
			run() {
				const swiper = this;
				const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
				let delay = swiper.params.autoplay.delay;
				if ($activeSlideEl.attr("data-swiper-autoplay")) {
					delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
				}
				clearTimeout(swiper.autoplay.timeout);
				swiper.autoplay.timeout = Utils.nextTick(() => {
					if (swiper.params.autoplay.reverseDirection) {
						if (swiper.params.loop) {
							swiper.loopFix();
							swiper.slidePrev(swiper.params.speed, true, true);
							swiper.emit("autoplay");
						} else if (!swiper.isBeginning) {
							swiper.slidePrev(swiper.params.speed, true, true);
							swiper.emit("autoplay");
						} else if (!swiper.params.autoplay.stopOnLastSlide) {
							swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
							swiper.emit("autoplay");
						} else {
							swiper.autoplay.stop();
						}
					} else if (swiper.params.loop) {
						swiper.loopFix();
						swiper.slideNext(swiper.params.speed, true, true);
						swiper.emit("autoplay");
					} else if (!swiper.isEnd) {
						swiper.slideNext(swiper.params.speed, true, true);
						swiper.emit("autoplay");
					} else if (!swiper.params.autoplay.stopOnLastSlide) {
						swiper.slideTo(0, swiper.params.speed, true, true);
						swiper.emit("autoplay");
					} else {
						swiper.autoplay.stop();
					}
					if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
				}, delay);
			},
			start() {
				const swiper = this;
				if (typeof swiper.autoplay.timeout !== "undefined") return false;
				if (swiper.autoplay.running) return false;
				swiper.autoplay.running = true;
				swiper.emit("autoplayStart");
				swiper.autoplay.run();
				return true;
			},
			stop() {
				const swiper = this;
				if (!swiper.autoplay.running) return false;
				if (typeof swiper.autoplay.timeout === "undefined") return false;

				if (swiper.autoplay.timeout) {
					clearTimeout(swiper.autoplay.timeout);
					swiper.autoplay.timeout = undefined;
				}
				swiper.autoplay.running = false;
				swiper.emit("autoplayStop");
				return true;
			},
			pause(speed) {
				const swiper = this;
				if (!swiper.autoplay.running) return;
				if (swiper.autoplay.paused) return;
				if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
				swiper.autoplay.paused = true;
				if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
					swiper.autoplay.paused = false;
					swiper.autoplay.run();
				} else {
					swiper.$wrapperEl[0].addEventListener("transitionend", swiper.autoplay.onTransitionEnd);
					swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.autoplay.onTransitionEnd);
				}
			},
		};

		var Autoplay$1 = {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: false,
					delay: 3000,
					waitForTransition: true,
					disableOnInteraction: true,
					stopOnLastSlide: false,
					reverseDirection: false,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					autoplay: {
						running: false,
						paused: false,
						run: Autoplay.run.bind(swiper),
						start: Autoplay.start.bind(swiper),
						stop: Autoplay.stop.bind(swiper),
						pause: Autoplay.pause.bind(swiper),
						onVisibilityChange() {
							if (document.visibilityState === "hidden" && swiper.autoplay.running) {
								swiper.autoplay.pause();
							}
							if (document.visibilityState === "visible" && swiper.autoplay.paused) {
								swiper.autoplay.run();
								swiper.autoplay.paused = false;
							}
						},
						onTransitionEnd(e) {
							if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
							if (e.target !== this) return;
							swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.autoplay.onTransitionEnd);
							swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.autoplay.onTransitionEnd);
							swiper.autoplay.paused = false;
							if (!swiper.autoplay.running) {
								swiper.autoplay.stop();
							} else {
								swiper.autoplay.run();
							}
						},
					},
				});
			},
			on: {
				init() {
					const swiper = this;
					if (swiper.params.autoplay.enabled) {
						swiper.autoplay.start();
						document.addEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
					}
				},
				beforeTransitionStart(speed, internal) {
					const swiper = this;
					if (swiper.autoplay.running) {
						if (internal || !swiper.params.autoplay.disableOnInteraction) {
							swiper.autoplay.pause(speed);
						} else {
							swiper.autoplay.stop();
						}
					}
				},
				sliderFirstMove() {
					const swiper = this;
					if (swiper.autoplay.running) {
						if (swiper.params.autoplay.disableOnInteraction) {
							swiper.autoplay.stop();
						} else {
							swiper.autoplay.pause();
						}
					}
				},
				touchEnd() {
					const swiper = this;
					if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
						swiper.autoplay.run();
					}
				},
				destroy() {
					const swiper = this;
					if (swiper.autoplay.running) {
						swiper.autoplay.stop();
					}
					document.removeEventListener("visibilitychange", swiper.autoplay.onVisibilityChange);
				},
			},
		};

		const Fade = {
			setTranslate() {
				const swiper = this;
				const { slides } = swiper;
				for (let i = 0; i < slides.length; i += 1) {
					const $slideEl = swiper.slides.eq(i);
					const offset = $slideEl[0].swiperSlideOffset;
					let tx = -offset;
					if (!swiper.params.virtualTranslate) tx -= swiper.translate;
					let ty = 0;
					if (!swiper.isHorizontal()) {
						ty = tx;
						tx = 0;
					}
					const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
					$slideEl
						.css({
							opacity: slideOpacity,
						})
						.transform(`translate3d(${tx}px, ${ty}px, 0px)`);
				}
			},
			setTransition(duration) {
				const swiper = this;
				const { slides, $wrapperEl } = swiper;
				slides.transition(duration);
				if (swiper.params.virtualTranslate && duration !== 0) {
					let eventTriggered = false;
					slides.transitionEnd(() => {
						if (eventTriggered) return;
						if (!swiper || swiper.destroyed) return;
						eventTriggered = true;
						swiper.animating = false;
						const triggerEvents = ["webkitTransitionEnd", "transitionend"];
						for (let i = 0; i < triggerEvents.length; i += 1) {
							$wrapperEl.trigger(triggerEvents[i]);
						}
					});
				}
			},
		};

		var EffectFade = {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: false,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					fadeEffect: {
						setTranslate: Fade.setTranslate.bind(swiper),
						setTransition: Fade.setTransition.bind(swiper),
					},
				});
			},
			on: {
				beforeInit() {
					const swiper = this;
					if (swiper.params.effect !== "fade") return;
					swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
					const overwriteParams = {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: true,
						spaceBetween: 0,
						virtualTranslate: true,
					};
					Utils.extend(swiper.params, overwriteParams);
					Utils.extend(swiper.originalParams, overwriteParams);
				},
				setTranslate() {
					const swiper = this;
					if (swiper.params.effect !== "fade") return;
					swiper.fadeEffect.setTranslate();
				},
				setTransition(duration) {
					const swiper = this;
					if (swiper.params.effect !== "fade") return;
					swiper.fadeEffect.setTransition(duration);
				},
			},
		};

		const Cube = {
			setTranslate() {
				const swiper = this;
				const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize } = swiper;
				const params = swiper.params.cubeEffect;
				const isHorizontal = swiper.isHorizontal();
				const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
				let wrapperRotate = 0;
				let $cubeShadowEl;
				if (params.shadow) {
					if (isHorizontal) {
						$cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
						if ($cubeShadowEl.length === 0) {
							$cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
							$wrapperEl.append($cubeShadowEl);
						}
						$cubeShadowEl.css({ height: `${swiperWidth}px` });
					} else {
						$cubeShadowEl = $el.find(".swiper-cube-shadow");
						if ($cubeShadowEl.length === 0) {
							$cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
							$el.append($cubeShadowEl);
						}
					}
				}
				for (let i = 0; i < slides.length; i += 1) {
					const $slideEl = slides.eq(i);
					let slideIndex = i;
					if (isVirtual) {
						slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
					}
					let slideAngle = slideIndex * 90;
					let round = Math.floor(slideAngle / 360);
					if (rtl) {
						slideAngle = -slideAngle;
						round = Math.floor(-slideAngle / 360);
					}
					const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
					let tx = 0;
					let ty = 0;
					let tz = 0;
					if (slideIndex % 4 === 0) {
						tx = -round * 4 * swiperSize;
						tz = 0;
					} else if ((slideIndex - 1) % 4 === 0) {
						tx = 0;
						tz = -round * 4 * swiperSize;
					} else if ((slideIndex - 2) % 4 === 0) {
						tx = swiperSize + round * 4 * swiperSize;
						tz = swiperSize;
					} else if ((slideIndex - 3) % 4 === 0) {
						tx = -swiperSize;
						tz = 3 * swiperSize + swiperSize * 4 * round;
					}
					if (rtl) {
						tx = -tx;
					}

					if (!isHorizontal) {
						ty = tx;
						tx = 0;
					}

					const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
					if (progress <= 1 && progress > -1) {
						wrapperRotate = slideIndex * 90 + progress * 90;
						if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
					}
					$slideEl.transform(transform);
					if (params.slideShadows) {
						// Set shadows
						let shadowBefore = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
						let shadowAfter = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
						if (shadowBefore.length === 0) {
							shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
							$slideEl.append(shadowBefore);
						}
						if (shadowAfter.length === 0) {
							shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
							$slideEl.append(shadowAfter);
						}
						if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
						if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
					}
				}
				$wrapperEl.css({
					"-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
					"-moz-transform-origin": `50% 50% -${swiperSize / 2}px`,
					"-ms-transform-origin": `50% 50% -${swiperSize / 2}px`,
					"transform-origin": `50% 50% -${swiperSize / 2}px`,
				});

				if (params.shadow) {
					if (isHorizontal) {
						$cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
					} else {
						const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
						const multiplier = 1.5 - (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 + Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
						const scale1 = params.shadowScale;
						const scale2 = params.shadowScale / multiplier;
						const offset = params.shadowOffset;
						$cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
					}
				}
				const zFactor = Browser.isSafari || Browser.isWebView ? -swiperSize / 2 : 0;
				$wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
			},
			setTransition(duration) {
				const swiper = this;
				const { $el, slides } = swiper;
				slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
				if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
					$el.find(".swiper-cube-shadow").transition(duration);
				}
			},
		};

		var EffectCube = {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: true,
					shadow: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					cubeEffect: {
						setTranslate: Cube.setTranslate.bind(swiper),
						setTransition: Cube.setTransition.bind(swiper),
					},
				});
			},
			on: {
				beforeInit() {
					const swiper = this;
					if (swiper.params.effect !== "cube") return;
					swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
					swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
					const overwriteParams = {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: true,
						resistanceRatio: 0,
						spaceBetween: 0,
						centeredSlides: false,
						virtualTranslate: true,
					};
					Utils.extend(swiper.params, overwriteParams);
					Utils.extend(swiper.originalParams, overwriteParams);
				},
				setTranslate() {
					const swiper = this;
					if (swiper.params.effect !== "cube") return;
					swiper.cubeEffect.setTranslate();
				},
				setTransition(duration) {
					const swiper = this;
					if (swiper.params.effect !== "cube") return;
					swiper.cubeEffect.setTransition(duration);
				},
			},
		};

		const Flip = {
			setTranslate() {
				const swiper = this;
				const { slides, rtlTranslate: rtl } = swiper;
				for (let i = 0; i < slides.length; i += 1) {
					const $slideEl = slides.eq(i);
					let progress = $slideEl[0].progress;
					if (swiper.params.flipEffect.limitRotation) {
						progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
					}
					const offset = $slideEl[0].swiperSlideOffset;
					const rotate = -180 * progress;
					let rotateY = rotate;
					let rotateX = 0;
					let tx = -offset;
					let ty = 0;
					if (!swiper.isHorizontal()) {
						ty = tx;
						tx = 0;
						rotateX = -rotateY;
						rotateY = 0;
					} else if (rtl) {
						rotateY = -rotateY;
					}

					$slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

					if (swiper.params.flipEffect.slideShadows) {
						// Set shadows
						let shadowBefore = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
						let shadowAfter = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
						if (shadowBefore.length === 0) {
							shadowBefore = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? "left" : "top"}"></div>`);
							$slideEl.append(shadowBefore);
						}
						if (shadowAfter.length === 0) {
							shadowAfter = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? "right" : "bottom"}"></div>`);
							$slideEl.append(shadowAfter);
						}
						if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
						if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
					}
					$slideEl.transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
				}
			},
			setTransition(duration) {
				const swiper = this;
				const { slides, activeIndex, $wrapperEl } = swiper;
				slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
				if (swiper.params.virtualTranslate && duration !== 0) {
					let eventTriggered = false;
					// eslint-disable-next-line
					slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
						if (eventTriggered) return;
						if (!swiper || swiper.destroyed) return;
						// if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
						eventTriggered = true;
						swiper.animating = false;
						const triggerEvents = ["webkitTransitionEnd", "transitionend"];
						for (let i = 0; i < triggerEvents.length; i += 1) {
							$wrapperEl.trigger(triggerEvents[i]);
						}
					});
				}
			},
		};

		var EffectFlip = {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: true,
					limitRotation: true,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					flipEffect: {
						setTranslate: Flip.setTranslate.bind(swiper),
						setTransition: Flip.setTransition.bind(swiper),
					},
				});
			},
			on: {
				beforeInit() {
					const swiper = this;
					if (swiper.params.effect !== "flip") return;
					swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
					swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
					const overwriteParams = {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: true,
						spaceBetween: 0,
						virtualTranslate: true,
					};
					Utils.extend(swiper.params, overwriteParams);
					Utils.extend(swiper.originalParams, overwriteParams);
				},
				setTranslate() {
					const swiper = this;
					if (swiper.params.effect !== "flip") return;
					swiper.flipEffect.setTranslate();
				},
				setTransition(duration) {
					const swiper = this;
					if (swiper.params.effect !== "flip") return;
					swiper.flipEffect.setTransition(duration);
				},
			},
		};

		const Coverflow = {
			setTranslate() {
				const swiper = this;
				const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid } = swiper;
				const params = swiper.params.coverflowEffect;
				const isHorizontal = swiper.isHorizontal();
				const transform = swiper.translate;
				const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
				const rotate = isHorizontal ? params.rotate : -params.rotate;
				const translate = params.depth;
				// Each slide offset from center
				for (let i = 0, length = slides.length; i < length; i += 1) {
					const $slideEl = slides.eq(i);
					const slideSize = slidesSizesGrid[i];
					const slideOffset = $slideEl[0].swiperSlideOffset;
					const offsetMultiplier = ((center - slideOffset - slideSize / 2) / slideSize) * params.modifier;

					let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
					let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
					// var rotateZ = 0
					let translateZ = -translate * Math.abs(offsetMultiplier);

					let stretch = params.stretch;
					// Allow percentage to make a relative stretch for responsive sliders
					if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
						stretch = (parseFloat(params.stretch) / 100) * slideSize;
					}
					let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
					let translateX = isHorizontal ? stretch * offsetMultiplier : 0;

					let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

					// Fix for ultra small values
					if (Math.abs(translateX) < 0.001) translateX = 0;
					if (Math.abs(translateY) < 0.001) translateY = 0;
					if (Math.abs(translateZ) < 0.001) translateZ = 0;
					if (Math.abs(rotateY) < 0.001) rotateY = 0;
					if (Math.abs(rotateX) < 0.001) rotateX = 0;
					if (Math.abs(scale) < 0.001) scale = 0;

					const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

					$slideEl.transform(slideTransform);
					$slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
					if (params.slideShadows) {
						// Set shadows
						let $shadowBeforeEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
						let $shadowAfterEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
						if ($shadowBeforeEl.length === 0) {
							$shadowBeforeEl = $(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
							$slideEl.append($shadowBeforeEl);
						}
						if ($shadowAfterEl.length === 0) {
							$shadowAfterEl = $(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
							$slideEl.append($shadowAfterEl);
						}
						if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
						if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
					}
				}

				// Set correct perspective for IE10
				if (Support.pointerEvents || Support.prefixedPointerEvents) {
					const ws = $wrapperEl[0].style;
					ws.perspectiveOrigin = `${center}px 50%`;
				}
			},
			setTransition(duration) {
				const swiper = this;
				swiper.slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
			},
		};

		var EffectCoverflow = {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					scale: 1,
					modifier: 1,
					slideShadows: true,
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					coverflowEffect: {
						setTranslate: Coverflow.setTranslate.bind(swiper),
						setTransition: Coverflow.setTransition.bind(swiper),
					},
				});
			},
			on: {
				beforeInit() {
					const swiper = this;
					if (swiper.params.effect !== "coverflow") return;

					swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
					swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

					swiper.params.watchSlidesProgress = true;
					swiper.originalParams.watchSlidesProgress = true;
				},
				setTranslate() {
					const swiper = this;
					if (swiper.params.effect !== "coverflow") return;
					swiper.coverflowEffect.setTranslate();
				},
				setTransition(duration) {
					const swiper = this;
					if (swiper.params.effect !== "coverflow") return;
					swiper.coverflowEffect.setTransition(duration);
				},
			},
		};

		const Thumbs = {
			init() {
				const swiper = this;
				const { thumbs: thumbsParams } = swiper.params;
				const SwiperClass = swiper.constructor;
				if (thumbsParams.swiper instanceof SwiperClass) {
					swiper.thumbs.swiper = thumbsParams.swiper;
					Utils.extend(swiper.thumbs.swiper.originalParams, {
						watchSlidesProgress: true,
						slideToClickedSlide: false,
					});
					Utils.extend(swiper.thumbs.swiper.params, {
						watchSlidesProgress: true,
						slideToClickedSlide: false,
					});
				} else if (Utils.isObject(thumbsParams.swiper)) {
					swiper.thumbs.swiper = new SwiperClass(
						Utils.extend({}, thumbsParams.swiper, {
							watchSlidesVisibility: true,
							watchSlidesProgress: true,
							slideToClickedSlide: false,
						})
					);
					swiper.thumbs.swiperCreated = true;
				}
				swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
				swiper.thumbs.swiper.on("tap", swiper.thumbs.onThumbClick);
			},
			onThumbClick() {
				const swiper = this;
				const thumbsSwiper = swiper.thumbs.swiper;
				if (!thumbsSwiper) return;
				const clickedIndex = thumbsSwiper.clickedIndex;
				const clickedSlide = thumbsSwiper.clickedSlide;
				if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
				if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
				let slideToIndex;
				if (thumbsSwiper.params.loop) {
					slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10);
				} else {
					slideToIndex = clickedIndex;
				}
				if (swiper.params.loop) {
					let currentIndex = swiper.activeIndex;
					if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
						swiper.loopFix();
						// eslint-disable-next-line
						swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
						currentIndex = swiper.activeIndex;
					}
					const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
					const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
					if (typeof prevIndex === "undefined") slideToIndex = nextIndex;
					else if (typeof nextIndex === "undefined") slideToIndex = prevIndex;
					else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
					else slideToIndex = prevIndex;
				}
				swiper.slideTo(slideToIndex);
			},
			update(initial) {
				const swiper = this;
				const thumbsSwiper = swiper.thumbs.swiper;
				if (!thumbsSwiper) return;

				const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

				const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
				const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
				if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
					let currentThumbsIndex = thumbsSwiper.activeIndex;
					let newThumbsIndex;
					let direction;
					if (thumbsSwiper.params.loop) {
						if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
							thumbsSwiper.loopFix();
							// eslint-disable-next-line
							thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
							currentThumbsIndex = thumbsSwiper.activeIndex;
						}
						// Find actual thumbs index to slide to
						const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
						const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
						if (typeof prevThumbsIndex === "undefined") newThumbsIndex = nextThumbsIndex;
						else if (typeof nextThumbsIndex === "undefined") newThumbsIndex = prevThumbsIndex;
						else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;
						else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
						else newThumbsIndex = prevThumbsIndex;
						direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
					} else {
						newThumbsIndex = swiper.realIndex;
						direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
					}
					if (useOffset) {
						newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
					}

					if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
						if (thumbsSwiper.params.centeredSlides) {
							if (newThumbsIndex > currentThumbsIndex) {
								newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
							} else {
								newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
							}
						} else if (newThumbsIndex > currentThumbsIndex) {
							newThumbsIndex = newThumbsIndex - slidesPerView + 1;
						}
						thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
					}
				}

				// Activate thumbs
				let thumbsToActivate = 1;
				const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

				if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
					thumbsToActivate = swiper.params.slidesPerView;
				}

				if (!swiper.params.thumbs.multipleActiveThumbs) {
					thumbsToActivate = 1;
				}

				thumbsToActivate = Math.floor(thumbsToActivate);

				thumbsSwiper.slides.removeClass(thumbActiveClass);
				if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
					for (let i = 0; i < thumbsToActivate; i += 1) {
						thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
					}
				} else {
					for (let i = 0; i < thumbsToActivate; i += 1) {
						thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
					}
				}
			},
		};
		var Thumbs$1 = {
			name: "thumbs",
			params: {
				thumbs: {
					swiper: null,
					multipleActiveThumbs: true,
					autoScrollOffset: 0,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs",
				},
			},
			create() {
				const swiper = this;
				Utils.extend(swiper, {
					thumbs: {
						swiper: null,
						init: Thumbs.init.bind(swiper),
						update: Thumbs.update.bind(swiper),
						onThumbClick: Thumbs.onThumbClick.bind(swiper),
					},
				});
			},
			on: {
				beforeInit() {
					const swiper = this;
					const { thumbs } = swiper.params;
					if (!thumbs || !thumbs.swiper) return;
					swiper.thumbs.init();
					swiper.thumbs.update(true);
				},
				slideChange() {
					const swiper = this;
					if (!swiper.thumbs.swiper) return;
					swiper.thumbs.update();
				},
				update() {
					const swiper = this;
					if (!swiper.thumbs.swiper) return;
					swiper.thumbs.update();
				},
				resize() {
					const swiper = this;
					if (!swiper.thumbs.swiper) return;
					swiper.thumbs.update();
				},
				observerUpdate() {
					const swiper = this;
					if (!swiper.thumbs.swiper) return;
					swiper.thumbs.update();
				},
				setTransition(duration) {
					const swiper = this;
					const thumbsSwiper = swiper.thumbs.swiper;
					if (!thumbsSwiper) return;
					thumbsSwiper.setTransition(duration);
				},
				beforeDestroy() {
					const swiper = this;
					const thumbsSwiper = swiper.thumbs.swiper;
					if (!thumbsSwiper) return;
					if (swiper.thumbs.swiperCreated && thumbsSwiper) {
						thumbsSwiper.destroy();
					}
				},
			},
		};

		// Swiper Class

		const components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

		if (typeof Swiper.use === "undefined") {
			Swiper.use = Swiper.Class.use;
			Swiper.installModule = Swiper.Class.installModule;
		}

		Swiper.use(components);

		/* harmony default export */ const swiper_esm_bundle = Swiper; // CONCATENATED MODULE: ./src/javascripts/sections/TextAdverts.js
		//# sourceMappingURL=swiper.esm.bundle.js.map

		class TextAdverts extends Section {
			constructor(theme, _element, pageLoad) {
				super(theme, _element, pageLoad);
				this.MOBILE_BREAKPOINT = Breakpoints.sm;

				this.onBlockSelect = ({ element }) => {
					// Stop animation and show block when select in Text Adverts section on mobile
					if (this.mobileSliderSwiper) {
						var index = Array.prototype.indexOf.call(element.parentElement.children, event.target);
						this.mobileSliderSwiper.autoplay.stop();
						this.mobileSliderSwiper.slideTo(index);
					}
				};

				this.onBlockDeselect = () => {
					// Resume animation when block is deselected in Text Adverts section on mobile
					if (this.mobileSliderSwiper) {
						this.mobileSliderSwiper.autoplay.start();
					}
				};

				this.onWindowResizeBreakpoint = ({ breakpoint, oldBreakpoint }) => {
					const newIsMobile = breakpoint.order <= this.MOBILE_BREAKPOINT.order;
					const oldWasMobile = oldBreakpoint.order <= this.MOBILE_BREAKPOINT.order;

					if (newIsMobile !== oldWasMobile) {
						// Switched between mobile and desktop
						if (newIsMobile && !this.mobileSliderSwiper) {
							// Switched from desktop to mobile and mobile slider is not loaded
							this.loadMobileSlider();
						}
					}
				};

				this.loadMobileSlider = () => {
					const slides = this.mobileSlider.querySelectorAll(".slides li");
					slides.forEach((slide) => {
						slide.style.width = this.element.clientWidth;
					});
					const pagination = {
						el: this.mobileSlider.querySelector(".swiper-pagination"),
						type: "bullets",
						clickable: true,
						renderBullet: (index, className) => {
							return '<span class="' + className + '"><span class="swiper-pagination-bullet-dot"></span></span>';
						},
					};
					this.mobileSliderSwiper = new swiper_esm_bundle(this.mobileSlider, {
						direction: "horizontal",
						slidesPerView: 1,
						spaceBetween: 20,
						threshold: 10,
						navigation: false,
						pagination: pagination,
					});
				};

				this.element = _element;
				this.mobileSlider = this.element.querySelector(".mobile-homepage-text-adverts");
				this.mobileSliderSwiper = null;
				const isMobile = this.theme.getBreakpoint().order <= this.MOBILE_BREAKPOINT.order;

				if (isMobile) {
					this.loadMobileSlider();
				}

				this.theme.loadIcons();
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/MobileMenu.js
		/** Mobile menu hierarchy handling */

		class MobileMenu {
			constructor(theme, element) {
				this.cloneBackBtn = (back_btn, parent_menu) => {
					// Cloning removes all existing event listeners more reliably than removing named function with removeEventListener
					var oldBtn = back_btn;
					var newBtn = oldBtn.cloneNode(true);
					newBtn.addEventListener("click", this.backClick(newBtn, parent_menu), true);
					oldBtn.parentNode.replaceChild(newBtn, oldBtn);
				};

				this.menuHandle = (link, handle) => {
					return link.classList.contains("sub-topbar") ? this.menuStructureTopbar[handle] : this.menuStructure[handle];
				};

				this.removeAllMenuTabindex = () => {
					var allMenuLinks = document.querySelectorAll(".mobile-menu .mobile-menu-link");
					allMenuLinks.forEach((el) => {
						el.setAttribute("tabIndex", "-1");
					});
				};

				this.setTabindex0 = (els) => {
					els.forEach((el) => {
						el.setAttribute("tabIndex", "0");
					});
				};

				this.linksTabbable = (activeMenu, trapFocus) => {
					/**
					 * @todo function is pretty disgusting and could do with a rewrite
					 */
					this.removeAllMenuTabindex();
					var listLinks;

					if (this.menuHasBackButton(activeMenu)) {
						var backBtn = activeMenu.querySelectorAll(":scope > .mobile-menu-back");
						this.setTabindex0(backBtn);
					}

					if (this.menuIsUl(activeMenu)) {
						listLinks = activeMenu.querySelectorAll(":scope > li > .mobile-menu-link");
					}

					if (this.menuHasUlChild(activeMenu)) {
						listLinks = activeMenu.querySelectorAll(":scope > ul:not(.sm-icons) > li > .mobile-menu-link");
					}

					if (this.menuHasFieldsetChild(activeMenu)) {
						listLinks = activeMenu.querySelectorAll(":scope > .mobile-menu__fieldset > .mobile-menu-link");
					}

					if (listLinks) {
						this.setTabindex0(listLinks);
					}

					trapFocus(this.themeMenuID);
				};

				this.menuIsUl = (menu) => {
					return menu.tagName == "UL";
				};

				this.menuHasUlChild = (menu) => {
					return menu.querySelectorAll(":scope > ul:not(.sm-icons)").length;
				};

				this.menuHasBackButton = (menu) => {
					return menu.querySelectorAll(":scope > .mobile-menu-back").length;
				};

				this.menuHasFieldsetChild = (el) => {
					return el.querySelectorAll(":scope > .mobile-menu__fieldset").length;
				};

				this.clearSubmenus = (menu) => {
					menu.querySelectorAll(":scope > li").forEach((el, i) => {
						if (i == 0) return;
						el.remove();
					});
				};

				this.backClick = (backBtn, parent_menu) => {
					backBtn.addEventListener("click", (e) => {
						e.target.closest(".mobile-menu").classList.add("mobile-menu-hidden");
						e.target.closest(".mobile-menu").classList.remove("active");
						parent_menu.classList.add("active");
						var liArray = Array.from(parent_menu.children);
						liArray.forEach((li) => {
							if (li.querySelector("button")) {
								li.querySelector("button").setAttribute("aria-expanded", "false");
							}
						});
						this.linksTabbable(parent_menu, trapFocus);
						if (this.lastClickedItem) this.lastClickedItem.focus();
					});
				};

				this.stringToHTML = (str) => {
					var parser = new DOMParser();
					var doc = parser.parseFromString(str, "text/html");
					return doc.body.children.item(0);
				};

				this.createMenuButton = (link, linkMenuStructure) => {
					const btn = `<button class="alt-focus mobile-menu-sub mobile-menu-link">${linkMenuStructure.title}<i data-feather="chevron-right" aria-hidden="true"></i></button>`;
					const btnHTML = this.stringToHTML(btn);
					btnHTML.setAttribute("aria-expanded", "false");
					btnHTML.setAttribute("data-link", link);
					/**
					 * @todo - this is getting highlighted with an error for some reason, need to fix:
					 */
					// @ts-ignore

					btnHTML.addEventListener("click", this.menuClick(btnHTML, this.submenu));
					return btnHTML;
				};

				this.createMenuLink = (linkMenuStructure) => {
					const linkEl = document.createElement("a");
					linkEl.classList.add("alt-focus", "mobile-menu-link");
					linkEl.setAttribute("href", linkMenuStructure.url);
					linkEl.innerText = linkMenuStructure.title;
					return linkEl;
				};

				this.insertChildNav = (menuWrapper, clickedItem) => {
					const self = this;
					return new Promise((resolve) => {
						setTimeout(() => {
							const backBtn = menuWrapper.querySelector(".mobile-menu-back");
							const parentMenu = self.lastClickedItem.closest(".mobile-menu");
							clickedItem.parentNode.insertBefore(menuWrapper, clickedItem.nextSibling);
							self.cloneBackBtn(backBtn, parentMenu);
							resolve();
						}, 100);
					});
				};

				this.menuClick = (el, menu) => {
					var self = this;
					el.addEventListener(
						"click",
						function (e) {
							var menuWrapper = menu.closest(".mobile-menu");
							var clickedItem = e.currentTarget;
							var handle = clickedItem.dataset.link;
							self.lastClickedItem = clickedItem;
							clickedItem.setAttribute("aria-expanded", "true");
							document.querySelector(".mobile-menu.active").scrollTop = 0;
							document.querySelectorAll(".mobile-menu").forEach((menu) => menu.classList.remove("active"));
							self.clearSubmenus(menu);

							if (handle === "mobile-menu-currency" || handle === "mobile-menu-locale") {
								menuWrapper = document.querySelector(`#${handle}`);
								menuWrapper.classList.remove("mobile-menu-hidden");
								menuWrapper.classList.add("active");
								self.linksTabbable(menuWrapper, trapFocus);
								return;
							}

							menuWrapper.classList.add("active");
							var getMenuStructure = self.menuHandle(clickedItem, handle);
							const isTopBar = el.classList.contains("sub-topbar");

							if (getMenuStructure) {
								getMenuStructure.links.forEach((link) => {
									var linkMenuStructure = self.menuHandle(clickedItem, link);
									var liElement = document.createElement("li");
									var linkHasChildren = linkMenuStructure.links.length > 0;

									if (linkHasChildren) {
										var menuBtn = self.createMenuButton(link, linkMenuStructure);
										if (isTopBar) menuBtn.classList.add("sub-topbar");
										liElement.append(menuBtn);
									} else {
										var menuLink = self.createMenuLink(linkMenuStructure);
										liElement.append(menuLink);
									}

									menu.append(liElement);
								});
								var topMenuItem = menu.querySelector(".top-link");
								topMenuItem.innerText = getMenuStructure.title;
								topMenuItem.setAttribute("href", getMenuStructure.url);
							}

							async function updateUI() {
								await self.insertChildNav(menuWrapper, clickedItem);
								self.linksTabbable(menuWrapper, trapFocus);
								menuWrapper.classList.remove("mobile-menu-hidden");
							}

							updateUI();
							self.theme.loadIcons();
						},
						false
					);
				};

				this.theme = theme;
				this.element = element;
				this.menuStructure = JSON.parse(document.querySelector("#mobile-menu-data").textContent);
				this.menuStructureTopbar = JSON.parse(document.querySelector("#mobile-menu-data-topbar").textContent);
				this.themeMenuID = "theme-menu";
				this.topmenu = this.element.querySelector("#mobile-menu--main-menu");
				this.menu = this.element.querySelector("#mobile-menu");
				this.submenu = this.element.querySelector("#mobile-submenu");
				this.lastClickedItem = null;
				this.element.querySelectorAll(".mobile-menu-sub").forEach((el) => {
					el.removeEventListener("click", this.menuClick, true);
					el.addEventListener("click", this.menuClick(el, this.menu), true);
				});
				this.element.querySelectorAll(".mobile-menu-back").forEach((backBtn) => {
					this.cloneBackBtn(backBtn, this.topmenu);
				});
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/PredictiveSearch.js
		class PredictiveSearch {
			constructor(theme, element) {
				var _this = this;

				this.loadSearch = () => {
					const self = this;
					let closeFunc = this.searchClose;

					if (this.searchElementType === "section" && this.isPredictiveSearch) {
						closeFunc = this.clearResultsClose;
						document.addEventListener("click", function (e) {
							const target = e.target;
							if (!target) return; // If click NOT in search section results, hide results panel.

							if (!self.searchWrapper.contains(target) && !self.searchResultsPanel.contains(target)) {
								self.hideResults();
							} else if (target === self.searchInput && self.searchInput.value > "") {
								self.searchOpen();
							}
						});
						this.searchInput.addEventListener("keyup", function (e) {
							if (self.searchInput.value > "" && e.code !== "Tab") {
								self.searchOpen();
							}
						});
					}

					for (const clear of this.searchClear) {
						clear.addEventListener("click", closeFunc);
						clear.addEventListener("keyup", function (e) {
							if (e.code === "Enter") {
								self.closeFunc();
							}
						});
					}

					for (const icon of this.searchIcons) {
						icon.addEventListener("click", this.searchOpen);
					}

					if (this.expandedSearch) {
						this.allowFocus();
					}

					this.element.setAttribute("data-num-groups", this.searchTypesNum);
					this.searchForm.addEventListener("submit", this.searchSubmit);
					document.addEventListener("click", this.backgroundSearchClose);
					this.searchInput.addEventListener("keyup", this.searchChanged);
					document.addEventListener("click", function (e) {
						const target = e.target;
						if (!target) return;
					});

					if (this.searchElementType === "header") {
						this.searchInput.addEventListener("click", this.showResults);
						this.searchInput.addEventListener("focus", this.showResults);
					}

					if (this.searchCloseModalBtn) {
						this.searchCloseModalBtn.addEventListener("click", this.closeSearchModal);
					}
				};

				this.allowFocus = () => {
					this.searchInput.setAttribute("tabindex", "0");
					this.searchSubmitBtn.setAttribute("tabindex", "0");
					this.searchClearBtn.setAttribute("tabindex", "0");
					this.searchWrapper.setAttribute("aria-hidden", "false");
					this.searchInput.setAttribute("aria-hidden", "false");
					this.searchSubmitBtn.setAttribute("aria-hidden", "false");
					this.searchClearBtn.setAttribute("aria-hidden", "false");

					if (this.searchCloseModalBtn) {
						this.searchCloseModalBtn.setAttribute("tabindex", "0");
						this.searchCloseModalBtn.setAttribute("aria-hidden", "false");
					}
				};

				this.hideResults = () => {
					// Hide results if predictive search is enabled
					if (this.isPredictiveSearch) {
						this.searchResultsPanel.classList.add("hide");
					}
				};

				this.showResults = () => {
					// Show results if predictive search is enabled
					if (this.isPredictiveSearch) {
						this.searchResultsPanel.classList.remove("hide");
					}
				};

				this.clearResultsClose = () => {
					this.searchResultsNum = 0;
					this.searchHasResults = false;
					this.searchResultsPanel.innerHTML = "";
					this.searchWrapper.classList.remove("has-results");
					this.searchInput.value = "";
					this.searchInput.focus();
				};

				this.searchSubmit = (e) => {
					// Search has been submitted, by a keypress or clicking the icon.
					// We need to send the search term so that the search page's
					// results match the predictive results. E.g. appending '*' so
					// the search page does a 'starts with' search.
					e.preventDefault();
					window.location.href = this.getSearchPageUrlWithQuery();
				};

				this.searchOpen = (e) => {
					if (e) e.preventDefault();

					if (this.searchElementType === "header") {
						this.lockScrolling();
						this.searchToggler = e.target.closest(".search-show");
						this.searchToggler.setAttribute("aria-expanded", "true");
						this.allowFocus();
						this.searchInput.setAttribute("aria-hidden", "false");
						this.searchSubmitBtn.setAttribute("aria-hidden", "false");
						this.searchClearBtn.setAttribute("aria-hidden", "false");
					}

					this.showResults();
					this.searchInput.setAttribute("tabindex", "0");
					this.searchSubmitBtn.setAttribute("tabindex", "0");
					this.searchClearBtn.setAttribute("tabindex", "0");
					this.searchWrapper.classList.add("expanded");
					this.moveCursorToEnd(this.searchInput);
					this.lastFocus = document.activeElement;
					setTimeout(this.trapFocus, 500);
					return false;
				};

				this.searchClose = (e) => {
					if (this.searchElementType === "header") {
						this.clearResultsClose();
						this.searchInput.setAttribute("tabindex", "-1");
						this.searchInput.setAttribute("aria-hidden", "true");
						this.searchSubmitBtn.setAttribute("aria-hidden", "true");
						this.searchClearBtn.setAttribute("aria-hidden", "true");

						if (this.searchToggler) {
							this.searchToggler.setAttribute("aria-expanded", "false");
						}
					}

					if (this.expandedSearch) {
						this.allowFocus();
					}

					this.searchInput.blur();
					this.lastFocus.focus();
					return false;
				};

				this.closeSearchModal = () => {
					// Close modal and hide results panel but retain query
					this.hideResults();
					this.unlockScrolling();
					this.searchWrapper.classList.remove("expanded");
				};

				this.handleLastInputKeydown = (e) => {
					// Redirect last tab to first input
					if (e.code === "Tab" && !e.shiftKey) {
						e.preventDefault();
						this.firstInput.focus();
					}
				};

				this.handleFirstInputKeydown = (e) => {
					// Redirect first input shift+tab to last input
					if (e.code === "Tab" && e.shiftKey) {
						e.preventDefault();
						this.lastInput.focus();
					}
				};

				this.resetCloseBtnKeydown = (e, nextElement) => {
					if (e.code === "Tab" && !e.shiftKey) {
						nextElement.focus();
					}
				};

				this.trapFocus = () => {
					let focusWithinElem;

					if (this.searchElementType === "header") {
						focusWithinElem = this.searchWrapper;
					} else {
						focusWithinElem = this.element.closest("#section-search-wrapper");
					}

					const inputs = focusWithinElem.querySelectorAll(`input:not([type=hidden]), button:not([tabindex="-1"]), a:not([tabindex="-1"]), .search-clear`);
					const inputsArr = Array.from(inputs);
					const closeBtn = this.searchElementType === "header" ? ["search-bar--close"] : ["search-bar-search-block--clear"];
					const closeBtnIndex = inputsArr.indexOf(inputsArr.find((el) => el.id == closeBtn[0] || el.id == closeBtn[1]));
					this.firstInput = inputs[0];
					this.lastInput = inputs[inputs.length - 1];
					const self = this; // If search box is there, focus on input

					if (this.element.querySelector(this.searchWrapperID) && this.initialLoad) {
						this.element.querySelector("#search_text, #search_text_search_block").focus();
					} // If the last input is not the close btn then reset the keydown handler
					// n.b. this is a workaround as could not get removeEventListener to work

					/**
					 * @todo noticed that perhaps keyup should be removed rather than keydown
					 * which might explain why removeEventListener wasn't working
					 */

					if (this.lastInput.id != closeBtn) {
						this.element.querySelector(`#${closeBtn}`).addEventListener("keydown", function (e) {
							self.resetCloseBtnKeydown(e, inputs[closeBtnIndex + 1]);
						});
					}

					this.lastInput.addEventListener("keydown", self.handleLastInputKeydown);
					this.firstInput.addEventListener("keydown", self.handleFirstInputKeydown);
					this.initialLoad = false;
				};

				this.backgroundSearchClose = (e) => {
					const target = e.target;
					if (!target) return;

					if (this.searchElementType === "section") {
						if (target !== e.currentTarget) return;
						this.searchClose();
						return;
					}

					const collapsedSearchOpen = this.searchWrapper.classList.contains("expanded");
					const expandedSearchOpen = !this.searchWrapper.classList.contains("expanded") && this.searchWrapper.classList.contains("has-results"); // Clicking search overlay closes search modal and clicking off search wrapper closes expanded search

					if (collapsedSearchOpen && target == this.searchWrapper) {
						this.closeSearchModal();
					} else if (expandedSearchOpen && !this.searchWrapper.contains(target)) {
						this.hideResults();
					}
				};

				this.moveCursorToEnd = (el) => {
					el.focus();

					if (typeof el.selectionStart == "number") {
						el.selectionStart = el.selectionEnd = el.value.length;
					} else if (typeof el.createTextRange != "undefined") {
						var range = el.createTextRange();
						range.collapse(false);
						range.select();
					}
				};

				this.searchChanged = (e) => {
					const inputText = e.target.value;

					if (this.isSearchPredictive) {
						if (this.searchChangeTimer) {
							window.clearTimeout(this.searchChangeTimer);
						}

						if (inputText.length > 0) {
							this.searchChangeTimer = window.setTimeout(() => {
								this.performSearch();
								this.searchChangeTimer = null;
							}, 250);
						} else {
							this.searchResultsNum = 0;
							this.searchHasResults = false;
							this.searchWrapper.classList.remove("has-results");
							this.searchResultsPanel.innerHTML = "";
						}
					}
				};

				this.hideLoading = () => {
					this.loadingIcon.classList.add("hide");
				};

				this.showLoading = () => {
					this.displayResults(false);
					this.loadingIcon.classList.remove("hide");
				};

				this.getSearchQuery = () => {
					return `/search/suggest.json?q=${this.searchInput.value}&resources[type]=${this.searchTypes}`;
				};

				this.getSearchPageUrlWithQuery = () => {
					return `/search?type=${this.searchTypes}&q=${encodeURIComponent(this.searchInput.value)}*`;
				};

				this.lockScrolling = () => {
					const scrollY = window.scrollY;
					document.body.style.position = "fixed";

					if (scrollY > 300) {
						document.body.style.top = `-${scrollY}px`;
					}

					document.documentElement.style.scrollBehavior = "auto";
				};

				this.unlockScrolling = () => {
					const scrollY = document.body.style.top;
					document.body.style.position = "";
					document.body.style.top = "";
					window.scrollTo(0, parseInt(scrollY || "0") * -1);
					document.documentElement.style.scrollBehavior = "";
				};

				this.performSearch = async function () {
					_this.showLoading();

					_this.searchHasResults = false;
					_this.searchResultsNum = 0;

					_this.searchWrapper.classList.remove("has-results");

					const searchUrlWithQuery = _this.getSearchQuery();

					let data;

					try {
						const response = await fetch(searchUrlWithQuery);

						if (!response.ok) {
							console.error("Search failed", response);
							window.location.href = _this.getSearchPageUrlWithQuery();
							return;
						}

						data = await response.json();
					} catch (e) {
						console.error("Search failed", e); // We'll redirect the user to /search page when ajax search fails.

						window.location.href = _this.getSearchPageUrlWithQuery();
					}

					const resultGroups = new Map(); // Loop over groups e.g. Products / Pages / Articles / Collections

					Object.keys(data.resources.results).forEach((resultType) => {
						let group = resultGroups.get(resultType);
						let result = data.resources.results[resultType];

						if (!group) {
							group = {
								name: {
									articles: _this.theme.translations.articles,
									pages: _this.theme.translations.pages,
									products: _this.theme.translations.products,
									collections: _this.theme.translations.collections,
								}[resultType],
								results: [],
							};
							resultGroups.set(resultType, group);
						} // Format price.

						let resultWithPrice = result.map((item) => {
							var temp = Object.assign({}, item);

							if (temp.price) {
								temp.price = _this.theme.formatMoney(temp.price);
							}

							return temp;
						}); // If there is more than 1 search type/group, restrict results to sensible amount.

						let groupMax = 1;
						if (_this.searchTypesNum == 1) groupMax = 4;
						else if (_this.searchTypesNum == 2) groupMax = 3;
						else if (_this.searchTypesNum == 3) groupMax = 2; // Give products a little more precedence.

						if (resultType == "product" && groupMax < 4) groupMax = groupMax++;
						group.results = resultWithPrice.slice(0, groupMax);

						if (group.results && group.results.length > 0) {
							_this.searchResultsNum += result.length;
							_this.searchHasResults = true;
						}
					});

					if (!_this.searchHasResults && _this.searchInput.value > "") {
						// UX: Hide the empty-state drop-down when there are no product suggestions
						// that match the query. The lack of feedback from predictive search should
						// encourage customers to continue their search from the results page.
						// Display 'no results found for XYZ' text.
						// this.searchSummary.innerHTML = this.theme.translations.no_results_html.replace('{{ terms }}', this.searchInput.value);
						// Display no feedback.
						_this.searchSummary.innerHTML = "";
					}

					const searchGroups = Array.from(resultGroups.values());

					_this.hideLoading();

					_this.displayResults(searchGroups, _this.trapFocus);
				};

				this.displayResults = (results, searchTrapFocus) => {
					if (!results || this.searchInput.value == "") {
						this.searchResultsPanel.innerHTML = "";
						this.searchWrapper.classList.remove("has-results");
						return;
					}

					let self = this;
					let resultsHtml = "";
					const soldOut = this.theme.translations.soldOut;
					let searchPageUrlWithQuery = this.getSearchPageUrlWithQuery();
					const resultPluralize = this.searchResultsNum == 1 ? this.theme.translations.search_result : this.theme.translations.search_result_plural;
					const noneFound = this.searchResultsNum == 0 ? this.theme.translations.none_found : "";

					if (this.searchInput.value > "" || this.searchResultsNum > 0) {
						resultsHtml = resultsHtml.concat(`<div class="search-results__meta top">`);
					}

					resultsHtml = resultsHtml.concat(`
      <div class="search-results__status ${noneFound ? "" : "sr-only"}" role="status">${noneFound} ${resultPluralize} ${this.theme.translations.search_found}.</div>`);

					if (this.searchInput.value > "" || this.searchResultsNum > 0) {
						resultsHtml = resultsHtml.concat(`</div>`);
					}

					Object.keys(results).forEach(function (groupKey) {
						const group = results[groupKey];
						const groupResults = group.results;

						if (groupResults.length > 0) {
							resultsHtml = resultsHtml.concat(`<div class="predictive-search-group">`);
							resultsHtml = resultsHtml.concat(`  <h2 class="type-subheading type-subheading--1">${group.name}</h2>`);
							resultsHtml = resultsHtml.concat(`  <div class="search--result-group">`);
							Object.keys(groupResults).forEach(function (resultKey) {
								const result = groupResults[resultKey];
								let infoColClass = "col-12";
								resultsHtml = resultsHtml.concat(`<article class="row">`);

								if (result.featured_image && result.featured_image.url > "") {
									resultsHtml = resultsHtml.concat(`<div class="col-3">`);
									resultsHtml = resultsHtml.concat(`<a href="${result.url}" tabindex="-1"><img src="${result.featured_image.url}" alt="${result.featured_image.alt}" /></a>`);
									resultsHtml = resultsHtml.concat(`</div>`);
									infoColClass = "col-9";
								}

								resultsHtml = resultsHtml.concat(`<div class="${infoColClass}">`);

								if (self.showVendor && result.vendor) {
									resultsHtml = resultsHtml.concat(`<div class="search-vendor">${result.vendor}</div>`);
								}

								resultsHtml = resultsHtml.concat(` <h5><a href="${result.url}">${result.title}</a></h5>`);

								if (!result.available && group.name == "Products") {
									resultsHtml = resultsHtml.concat(`<div>${soldOut}</div>`);
								}

								if (self.showPrices && result.price) {
									resultsHtml = resultsHtml.concat(` <div class="search-price">${result.price}</div>`);
								}

								resultsHtml = resultsHtml.concat(`</div></article>`);
								resultsHtml = resultsHtml.concat(`<span class="search-result-separator"><hr /></span>`);
							});
							resultsHtml = resultsHtml.concat(`  </div>`);
							resultsHtml = resultsHtml.concat(`</div>`);
						}
					});

					if (this.searchResultsNum > 0) {
						resultsHtml = resultsHtml.concat(`
        <div class="search-results__meta bottom">
          <div class="search-results__meta-view-all"><a href="${searchPageUrlWithQuery}">${this.theme.translations.view_all}</a></div>
        </div>
      `);
					}

					if (this.searchInput.value > "") {
						this.searchWrapper.classList.add("has-results");
					} else {
						this.searchWrapper.classList.remove("has-results");
					}

					this.searchResultsPanel.innerHTML = resultsHtml;
					searchTrapFocus();
				};

				this.theme = theme;
				this.element = element;
				this.searchElementType = "section";

				if (this.element.dataset.wethemeSectionType == "header") {
					this.searchElementType = "header";
				}

				this.searchForm = this.element.querySelector("#search-page-form, #search-page-form-header");
				this.searchWrapperID = "#top-search-wrapper";

				if (this.searchElementType == "section") {
					this.searchWrapperID = "#block-search-wrapper";
				}

				this.searchWrapper = this.element.querySelector(this.searchWrapperID);
				this.searchIcons = this.element.querySelectorAll(".search-show");
				this.searchClear = this.element.querySelectorAll(".search-clear");
				this.searchInput = this.element.querySelector("#search_text, #search_text_search_block");
				this.searchSubmitBtn = this.element.querySelector("#search_submit, #search_submit_search_block");
				this.searchClearBtn = this.element.querySelector("#search-bar--clear, #search-bar-search-block--clear");
				this.searchCloseModalBtn = this.element.querySelector("#search-bar--close");
				this.loadingIcon = this.element.querySelector(".predictive-loading");
				this.searchSummary = this.element.querySelector(".search-summary");
				this.isPredictiveSearch = this.element.querySelector("[data-predictive-search]");
				this.searchResultsPanel = this.element.querySelector(".search-results-panel");
				this.expandedSearch = document.querySelector(".header-search--expanded");
				this.searchResultsStatus = this.element.querySelector(".search-status");
				this.searchChangeTimer = null;
				this.searchToggler = null;
				this.lastFocus = document.activeElement;
				this.searchResultsNum = 0;
				this.searchHasResults = false;
				this.searchTypes = false;
				this.searchTypesNum = 0;
				this.isSearchPredictive = false;
				this.showPrices = false;
				this.showVendor = false;
				this.initialLoad = true;

				if (this.searchInput) {
					this.searchTypes = this.searchInput.dataset.searchTypes.replace(/,$/, "");
					this.searchTypesNum = this.searchTypes.split(",").length;
					this.isSearchPredictive = this.searchInput.classList.contains("is-predictive");
					this.showPrices = this.searchInput.dataset.showPrices == "true";
					this.showVendor = this.searchInput.dataset.showVendor == "true";
					this.loadSearch();
				}
			}
		} // CONCATENATED MODULE: ./src/javascripts/modules/Helpers.js
		class Helpers {
			// Usage:
			// import Helpers from '../modules/Helpers';
			// Helpers.next(x, y)

			/*
			 * Vanilla JS version of jQuery's .next()
			 * @param  {elem}   HTMLElement
			 * @param  {selector}  string   Css selector to match
			 * @return {HTMLElement}     Matching element or null
			 */
			static next(elem, selector) {
				// Get the next element
				const nextElem = elem.nextElementSibling; // If there's no selector, return the next element

				if (!selector) {
					return nextElem;
				} // Otherwise, check if the element matches the selector

				if (nextElem && nextElem.matches(selector)) {
					return nextElem;
				}

				return null;
			}
			/*
			 * Vanilla JS version of jQuery's .parents()
			 * @param  {element}   HTMLElement
			 * @param  {selector}  string   Css selector to match in parent elements
			 * @param  {includeElement}   boolean
			 * @return {Array}     Matching elements or empty array
			 */

			static parents(element, selector, includeElement = false) {
				const isWithSelector = selector !== undefined;
				const elements = [];
				let elem = element;

				if (!includeElement) {
					elem = elem.parentElement;
				}

				while (elem !== null) {
					if (elem.nodeType === Node.ELEMENT_NODE) {
						if (!isWithSelector || elem.matches(selector)) {
							elements.push(elem);
						}
					}

					elem = elem.parentElement;
				}

				return elements;
			}
			/*
			 * Vanilla JS version of jQuery's fadeOut
			 * @param  {el}       HTMLElement to fade in
			 */

			static fadeOut(el) {
				el.style.opacity = 1;

				(function fade() {
					if ((el.style.opacity -= 0.1) < 0) {
						el.style.display = "none";
					} else {
						requestAnimationFrame(fade);
					}
				})();
			}
			/*
			 * Vanilla JS version of jQuery's fadeIn
			 * @param  {el}       HTMLElement to fade in
			 * @param  {display}  STRING Value for css 'display'
			 */

			static fadeIn(el, display) {
				el.style.opacity = 0;
				el.style.display = display || "block";

				(function fade() {
					var val = parseFloat(el.style.opacity);

					if (!((val += 0.1) > 1)) {
						el.style.opacity = val;
						requestAnimationFrame(fade);
					}
				})();
			}
			/*
			 * Serialize all form data into an array of key/value pairs
			 * @param  {Node}   form The form to serialize
			 * @return {Array}       The serialized form data
			 */

			static serializeArray(form) {
				var arr = [];
				Array.prototype.slice.call(form.elements).forEach(function (field) {
					if (!field.name || field.disabled || ["file", "reset", "submit", "button"].indexOf(field.type) > -1) {
						return;
					}

					if (field.type === "select-multiple") {
						Array.prototype.slice.call(field.options).forEach(function (option) {
							if (!option.selected) return;
							arr.push({
								name: field.name,
								value: option.value,
							});
						});
						return;
					}

					if (["checkbox", "radio"].indexOf(field.type) > -1 && !field.checked) return;
					arr.push({
						name: field.name,
						value: field.value,
					});
				});
				return arr;
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/Header.js
		class Header extends Section {
			constructor(theme, _element, pageLoad) {
				super(theme, _element, pageLoad);

				this.onSectionSelect = ({ element, sectionId, load }) => {
					this.theme.loadDrawers();
				};

				this.onBlockSelect = ({ element }) => {
					// Enable hover to use proper menu colors
					this.element.classList.add("touch-hover"); // Open megamenu which is being edited (both normal menu and sticky menu)

					if (element.dataset.megaMenuBlockId) {
						var thisElement = document.querySelector(`.header-menu-wrapper [data-mega-menu-block-id="${element.dataset.megaMenuBlockId}"]`);
						const menu = thisElement.closest("li.dropdown > .mega-menu--dropdown-wrapper");
						const handler = menu.querySelector(".dropdown-fresh-toggle");
						this.openMenu(menu, handler, true);
					}
				};

				this.onBlockDeselect = () => {
					// Disable hover
					this.element.classList.remove("touch-hover"); // Close opened megamenus

					let openMenus = document.querySelectorAll(".mega-menu--dropdown-wrapper.force-open");
					openMenus.forEach((openMenu) => {
						let openMenuSubOpen = openMenu.querySelectorAll('a[aria-expanded="true"]');
						openMenuSubOpen.forEach((subOpen) => {
							subOpen.setAttribute("aria-expanded", "false");
						});
						openMenu.classList.remove("force-open");
					});
				};

				this.updateOverlayHeader = () => {
					let getIndexSections = document.querySelector(".index-sections");
					let getOverlayHeader = document.querySelector(".overlay--active");
					if (!getIndexSections || !getOverlayHeader) return;
					let getFirstSection = getIndexSections.firstElementChild;
					let isSlideshow = getFirstSection.classList.contains("homepage-section--slideshow-wrapper");
					let isImage = getFirstSection.classList.contains("homepage-section--image");
					let isImageWithText = getFirstSection.classList.contains("homepage-section--text-over-image-wrapper");
					let isImageWithTextBlock = getFirstSection.classList.contains("homepage-section-image-with-text-block--wrapper");

					if (isSlideshow || isImage || isImageWithText || isImageWithTextBlock) {
						getOverlayHeader.classList.add("header-wrapper--overlay");
					} else {
						getOverlayHeader.classList.remove("header-wrapper--overlay");
					}
				};

				this.updateStickyHeader = () => {
					// How many pixel below the menu should the sticky menu appear
					const menu_breakpoint_offset = 50; // breakpoint is where the sticky menu should appear = menu bottom + 50px

					const menu_breakpoint = this.element.clientTop + this.element.clientHeight + menu_breakpoint_offset;
					const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					const showOnScrollUp = this.element.classList.contains("sticky-scroll-up");
					const showOnScroll = showOnScrollUp ? scrollTop < this.previousScrollPosition : true;
					const isSticky = scrollTop > menu_breakpoint && showOnScroll;
					const hasResults = this.element.querySelector("#top-search-wrapper").classList.contains("has-results");
					const resultsPanel = this.element.querySelector(".search-results-panel");
					let resultsHidden = resultsPanel ? resultsPanel.classList.contains("hide") : true;
					const searchResultsOpen = hasResults && !resultsHidden;

					if (isSticky && !searchResultsOpen) {
						this.sticky.classList.add("sticky");
						this.sticky.parentElement.classList.remove("unstuck");
						this.sticky.parentElement.classList.add("stuck");
						this.sticky.parentElement.classList.remove("header-search--expanded");
						setTimeout(function () {
							const langSelectorSticky = document.querySelector(".stuck .sticky-desktop-header #header_localization_form_language_selector-button");
							const currencySelectorSticky = document.querySelector(".stuck .sticky-desktop-header #header_localization_form_currency_selector-button");

							if (langSelectorSticky) {
								langSelectorSticky.setAttribute("tabIndex", "0");
							}

							if (currencySelectorSticky) {
								currencySelectorSticky.setAttribute("tabIndex", "0");
							}
						}, 1000);
						this.sticky.querySelectorAll(".header-link").forEach((link) => {
							link.setAttribute("tabindex", "0");
						});
					} else {
						this.sticky.classList.remove("sticky");
						this.sticky.parentElement.classList.remove("stuck");
						this.sticky.parentElement.classList.add("unstuck");
						setTimeout(function () {
							const langSelector = document.querySelector(".unstuck .sticky-desktop-header #header_localization_form_language_selector-button");
							const currencySelector = document.querySelector(".unstuck .sticky-desktop-header #header_localization_form_currency_selector-button");

							if (langSelector) {
								langSelector.setAttribute("tabIndex", "-1");
							}

							if (currencySelector) {
								currencySelector.setAttribute("tabIndex", "-1");
							}
						}, 1000);
						this.sticky.querySelectorAll(".header-link").forEach((link) => {
							link.setAttribute("tabindex", "-1");
						});
					} // If expanded search is enabled, reset expanded search when main header is shown

					const expandedSearchEnabled = this.element.classList.contains("search-expand");
					const searchIsOpen = this.element.querySelector("#top-search-wrapper").classList.contains("expanded");

					if (expandedSearchEnabled && !isSticky && !searchIsOpen) {
						this.sticky.parentElement.classList.add("header-search--expanded");
					}
				};

				this.loadStickyHeader = () => {
					this.sticky = this.element.querySelector(".sticky-header-wrapper");
					if (!this.sticky) return; // copy desktop header

					const desktopHeader = document.getElementById("site-header");
					const desktopHeaderClone = desktopHeader.cloneNode(true);
					const sticky_desktop_header = document.querySelector(".sticky-desktop-header");

					if (sticky_desktop_header) {
						sticky_desktop_header.appendChild(desktopHeaderClone);
					} // copy desktop menu

					const desktopMenu = document.querySelector(".header-menu-wrapper");
					const desktopMenuClone = desktopMenu.cloneNode(true);
					const sticky_desktop_menu = document.querySelector(".sticky-desktop-menu");

					if (sticky_desktop_menu) {
						sticky_desktop_menu.appendChild(desktopMenuClone);
					}

					const sticky_search = this.sticky.querySelector(".sticky-header-search").firstElementChild;
					const sticky_icons = this.sticky.querySelector(".header-icons").firstElementChild;

					if (sticky_icons) {
						sticky_icons.appendChild(sticky_search);
					} // add in icons if top bar present but hidden in sticky header

					const addTopBarIcons = this.sticky.querySelector(".sticky-hide");
					const topBarIcons = this.sticky.querySelector(".main-icons-with-locale");
					const mainHeader = this.sticky.querySelector(".header-content");
					const searchExpanded = document.querySelector(".logo-placement--center.header-search--expanded .top-bar-enabled");
					const iconContainer = mainHeader.querySelector(".header-icons-container");

					if (searchExpanded) {
						let removeDuplicateSearchBar = searchExpanded.querySelector("#top-search-wrapper").remove();
					}

					if (addTopBarIcons) {
						const topBarIconsClone = topBarIcons.cloneNode(topBarIcons);
						sticky_icons.appendChild(sticky_search);
						iconContainer.appendChild(topBarIconsClone);
					} // move main nav inline with icons if sticky logo hidden

					const hideLogo = this.sticky.classList.contains("hide-sticky-logo");
					const stickyLogoContainer = this.sticky.querySelector(".header-logo-container");
					const mainNav = this.sticky.querySelector("#main-navigation-wrapper");

					if (hideLogo) {
						const mainNavClone = mainNav.cloneNode(true);
						stickyLogoContainer.appendChild(mainNavClone);
					} // copy mobile menu

					const mobile_menu = document.querySelector(".mobile-header--wrapper");
					const stickyMobileHeader = this.sticky.querySelector(".sticky-mobile-header");
					stickyMobileHeader.appendChild(mobile_menu.cloneNode(true));
					stickyMobileHeader.querySelector(".slide-menu-mobile").addEventListener("click", function () {
						var event = new CustomEvent("mobile:toggle");
						document.querySelector("#theme-menu").dispatchEvent(event);
					});
					var self = this;
					window.addEventListener("scroll", function () {
						self.updateStickyHeader();
						self.previousScrollPosition = window.pageYOffset <= 0 ? 0 : window.pageYOffset;
					});
					this.updateStickyHeader();
					const stickyCartDrawerBtns = this.sticky.querySelectorAll(".slide-menu-cart");

					if (stickyCartDrawerBtns.length) {
						stickyCartDrawerBtns.forEach((btn) => {
							btn.addEventListener("click", function () {
								var event = new CustomEvent("cart:toggle");
								document.querySelector("#cartSlideoutWrapper").dispatchEvent(event);
							});
						});
					}
				};

				this.loadDropdownHover = () => {
					this.dropdownTimeout = null;
					this.touchHoverTimeout = null;
					this.dropdownHandle();
				};

				this.openMenu = (menu, handler, force = false) => {
					if (!handler.matches(".dropdown-fresh-toggle")) return;
					this.closeAllDropdowns(); // Align submenu with bottom of the menu

					let offset = menu.offsetHeight + menu.offsetTop;
					let dropdownMenu = menu.querySelector(":scope > .dropdown-menu:not(dropdown-menu--mega)");
					dropdownMenu.style.marginTop = offset + "px"; // Align megamenu with bottom of the header

					let el = document.querySelector(".header-wrapper");
					const sticky = document.querySelector(".sticky");

					if (sticky) {
						el = document.querySelector(".sticky-header-wrapper");
					} // Place megamenus at the bottom of the header, rather than under their parent menu link.

					let megaOffset = el.offsetTop + el.offsetHeight - 1;
					let notificationBar = document.querySelector(".notification-bar");

					if (el.matches(".header-wrapper--overlay.unstuck") && notificationBar) {
						megaOffset = megaOffset - notificationBar.offsetHeight;
					}

					if (handler.matches("a") && Helpers.next(handler, "ul")) {
						handler.setAttribute("aria-expanded", "true");
					}

					menu.classList.add(force ? "force-open" : "open");
					menu.setAttribute("aria-expanded", "true");
					this.selectMenuDirection(menu);
				};

				this.closeMenu = (menu) => {
					const allExpanded = menu.querySelectorAll('a[aria-expanded="true"]');
					allExpanded.forEach((expanded) => {
						expanded.setAttribute("aria-expanded", "false");
					});
					menu.classList.remove("open");
				};

				this.getMenuFromHandler = (handler) => {
					return handler.matches(".dropdown-fresh-toggle") ? handler.parentElement : handler;
				};

				this.handleTouchend = (e, menu) => {
					if (e.type !== "touchend") return;

					if (this.touchHoverTimeout) {
						clearTimeout(this.touchHoverTimeout);
						this.touchHoverTimeout = null;
					}

					this.element.classList.add("touch-hover");

					if ((menu.matches(".dropdown-submenu") || menu.matches(".mega-menu--dropdown-wrapper")) && !menu.classList.contains("open")) {
						// Prevent click on link when dropdown menu is touched and not yet open
						e.preventDefault();
					}
				};

				this.clearDropdownTimeout = () => {
					if (this.dropdownTimeout) {
						clearTimeout(this.dropdownTimeout);
					}
				};

				this.handleToggleOnEvents = (e) => {
					e.stopPropagation();
					const handler = e.currentTarget || e.target;
					let menu = this.getMenuFromHandler(handler); // Get the <li> not the <a>

					if (menu.classList.contains("dropdown-submenu__link")) {
						menu.setAttribute("aria-expanded", "true");
						menu = menu.parentElement;
						menu.classList.add("open");
					}

					this.handleTouchend(e, menu); // Find neighbours and close them

					let neighbouringMenusOpen = menu.closest(".mega-menu--dropdown-wrapper").querySelectorAll(".open");

					if (neighbouringMenusOpen) {
						// Don't close the current open menu.
						const notCurrent = menu.closest(".dropdown-submenu");
						neighbouringMenusOpen.forEach((neighbouringMenuOpen) => {
							if (neighbouringMenuOpen !== notCurrent) {
								neighbouringMenuOpen.querySelectorAll('a[aria-expanded="true"]').forEach((expanded) => {
									expanded.setAttribute("aria-expanded", "false");
								});
								neighbouringMenuOpen.classList.remove("open");
							}
						});
					} // wait for some time before opening the menu

					this.clearDropdownTimeout();
					this.dropdownTimeout = setTimeout(this.openMenu, 10, menu, handler);
				};

				this.handleToggleOffEvents = (e) => {
					if (!e.currentTarget) return; // if has children visible, then leave open

					const handler = e.currentTarget;
					const menu = handler.closest(".open");

					if (!menu) {
						this.closeAllDropdowns();
						return;
					}

					if (menu.classList.contains("dropdown-fresh-toggle")) {
						menu.classList.remove("open");
					}

					if (!menu.classList.contains("open")) {
						// Wait a bit then close
						this.clearDropdownTimeout();
						this.dropdownTimeout = setTimeout(this.closeMenu, 750, menu);
					}
				};

				this.dropdownHandle = () => {
					const dropdownToggles = this.element.querySelectorAll(".dropdown-fresh-toggle, .dropdown-menu > li, .dropdown-menu--mega, .dropdown-menu:not(.dropdown-menu--mega) a.dropdown-submenu__link");
					if (!dropdownToggles) return;
					dropdownToggles.forEach((dropdownToggle) => {
						// open menu/submenu on mousehover
						dropdownToggle.addEventListener("mouseenter", this.handleToggleOnEvents);
						dropdownToggle.addEventListener("touchend", this.handleToggleOnEvents);
						dropdownToggle.addEventListener("focus", this.handleToggleOnEvents); // handle closing menu when hover ends

						dropdownToggle.addEventListener("mouseleave", this.handleToggleOffEvents);
						dropdownToggle.addEventListener("blur", this.handleToggleOffEvents);
					});
					document.querySelectorAll(".nav-pills").forEach((navPill) => {
						navPill.addEventListener("mouseleave", this.navigatedFromMenu);
					}); // hide menu when touched anywhere else than the menu

					document.body.addEventListener("touchstart", this.navigatedFromMenu, {
						passive: true,
					});
				};

				this.headerLinkHandle = () => {
					const headerLinks = this.element.querySelectorAll(".header-link:not(.dropdown-fresh-toggle)");
					headerLinks.forEach((headerLink) => {
						headerLink.addEventListener("mouseenter", this.closeAllDropdowns);
						headerLink.addEventListener("touchend", this.closeAllDropdowns);
						headerLink.addEventListener("focus", this.closeAllDropdowns);
					});
				};

				this.navigatedFromMenu = (e) => {
					if (this.touchHoverTimeout) {
						clearTimeout(this.touchHoverTimeout);
					}

					this.touchHoverTimeout = setTimeout(() => {
						this.touchHoverTimeout = null;
						this.element.classList.remove("touch-hover");
					}, 50);
					const hasOpenParents = Helpers.parents(e.target, ".mega-menu--dropdown-wrapper.open, .dropdown-submenu.open"); // don't hide menu if we touched "inside" the menu

					if (e.type === "mouseleave" || hasOpenParents.length === 0) {
						this.closeAllDropdowns();
					}
				};

				this.closeAllDropdowns = () => {
					let openMenus = document.querySelectorAll(".mega-menu--dropdown-wrapper.open, .dropdown-submenu.open");
					if (!openMenus) return;
					openMenus.forEach((openMenu) => {
						openMenu.classList.remove("open");
						let expanded = openMenu.querySelectorAll('a[aria-expanded="true"]');
						expanded.forEach((item) => {
							item.classList.remove("open");
							item.setAttribute("aria-expanded", "false");
						});
					});
				};

				this.selectMenuDirection = (menu) => {
					// Fix submenu opening outside of viewport by showing it to the left of menu
					const childMenus = menu.querySelectorAll(".dropdown-menu .dropdown-menu");
					if (!childMenus) return; // childMenus == NodeList

					Array.prototype.map.call(childMenus, function (childMenu, index) {
						// childMenu = ul.dropdown-menu
						childMenu.style.display = "block";
						childMenu.style.visibility = "hidden";
						const width = childMenu.offsetWidth;
						childMenu.style.display = "";
						childMenu.style.visibility = "";
						return width;
					});
				};

				this.fixHeaderHeight = () => {
					let announcementBarHeight = 0;
					const announcementBar = document.getElementById("shopify-section-announcement-bar");

					if (announcementBar) {
						announcementBarHeight = parseFloat(getComputedStyle(announcementBar, null).height.replace("px", ""));
					}

					let headerHeight = 0;
					const header = document.getElementById("shopify-section-header");

					if (header) {
						headerHeight = parseFloat(getComputedStyle(header, null).height.replace("px", ""));
					}

					let textAdvertsHeight = 0;
					const textAdverts2 = document.getElementById("shopify-section-text-adverts");

					if (textAdverts2) {
						textAdvertsHeight = parseFloat(getComputedStyle(textAdverts2, null).height.replace("px", ""));
					}

					const headerHeightCombined = announcementBarHeight + headerHeight + textAdvertsHeight;
					const nonOverlayHeight = announcementBarHeight + textAdvertsHeight;
					const slideshowFullScreen = document.querySelector(".homepage-section--slideshow-wrapper .slideshow--full-screen");
					const headerOverlaysSlideshow = document.querySelector(".header-wrapper--overlay");
					const indexSections = document.querySelectorAll(".index-sections .shopify-section"); // If no sections or not on homepage, don't do anything

					if (!indexSections.length) return;
					const topSectionIsSlideshow = indexSections[0].classList.contains("homepage-section--slideshow-wrapper"); // No need to amend slideshow height unless it's the top section

					if (!topSectionIsSlideshow) return; // Only apply if the slideshow is set to full screen size

					if (slideshowFullScreen) {
						// Don't apply the height if the header is overlaid on the slideshow.
						if (headerOverlaysSlideshow) {
							slideshowFullScreen.style.height = `calc(100vh - ${nonOverlayHeight}px)`;
							slideshowFullScreen.querySelectorAll("ul.slides li").forEach(
								(
									/** @type {HTMLElement} */
									slide
								) => {
									slide.style.height = `calc(100vh - ${nonOverlayHeight}px)`;
								}
							);
						} else {
							slideshowFullScreen.style.height = `calc(100vh - ${headerHeightCombined}px)`;
							slideshowFullScreen.querySelectorAll("ul.slides li").forEach(
								(
									/** @type {HTMLElement} */
									slide
								) => {
									slide.style.height = `calc(100vh - ${headerHeightCombined}px)`;
								}
							);
						}
					}
				};

				this.setSearchWidth = () => {
					const isExpandedSearch = this.element.classList.contains("header-search--expanded");
					const expandedSearchTop = this.element.querySelector(".expanded-search--top"); // If search is expanded and positioned next to logo, set search box width to the icon container width

					if (isExpandedSearch && expandedSearchTop) {
						const iconContainer = expandedSearchTop.querySelector(".header-icons-container");
						const searchContainer = expandedSearchTop.querySelector("#top-search-wrapper:not(.search-expanded--top-links)");
						if (!searchContainer) return;
						searchContainer.style.width = `${iconContainer.offsetWidth}px`;
					}
				};

				this.element = _element;
				this.previousScrollPosition = 0;
				this.loadStickyHeader();
				this.mobileMenu = new MobileMenu(theme, document.querySelector(".mobile-menu-wrapper"));
				this.predictiveSearch = new PredictiveSearch(theme, _element);
				this.loadDropdownHover();
				this.headerLinkHandle();
				this.fixHeaderHeight();
				this.setSearchWidth();
				this.updateOverlayHeader();
				this.theme.loadIcons();

				var _self = this;

				window.addEventListener("resize", function () {
					_self.setSearchWidth();
				});
				document.addEventListener("shopify:section:reorder", this.updateOverlayHeader);
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/Footer.js
		class Footer extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);

				this.toggle = (e) => {
					const container = e.currentTarget.parentElement.parentElement;
					const expanded = e.currentTarget.getAttribute("aria-expanded");
					container.classList.toggle("footer__mobile-menu-open");

					if (expanded === "true") {
						e.currentTarget.setAttribute("aria-expanded", "false");
					} else {
						e.currentTarget.setAttribute("aria-expanded", "true");
					}
				};

				this.menuTitleBtns = this.element.querySelectorAll(".footer__mobile-menu-toggle");

				if (this.menuTitleBtns.length > 0) {
					this.menuTitleBtns.forEach((item) => {
						item.addEventListener("click", this.toggle);
					});
				}
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/Slider.js
		const SLIDER_REENABLE_INTERVAL = 6000;
		class Slider {
			/**
			 * Create new slider instance
			 *
			 * @param {import('../ThemeBase').default} theme
			 * @param {HTMLElement} element
			 */
			constructor(theme, element) {
				this.setWidths = () => {
					// Prevent flickering in the slider by setting fixed width of the slides
					this.element.querySelectorAll(".slides li").forEach((slide) => {
						const currentSlide = slide;
						currentSlide.style.width = this.element.clientWidth + "px";
					});
				};

				this.attachResize = () => {
					if (!this.swiper) return;
					let self = this;
					window.addEventListener("resize", function () {
						self.swiper.update();
					});
					window.addEventListener("update-swipers", function () {
						self.swiper.update();
					});
				};

				this.initPlaypause = () => {
					const self = this;
					if (!this.playpause.btn_el) return;
					this.playpause.btn_index = this.allFocusableEls.indexOf(this.playpause.btn_el);
					this.playpause.nextFocusableEl = this.allFocusableEls[this.playpause.btn_index + 1];
					this.playpause.prevFocusableEl = this.allFocusableEls[this.playpause.btn_index - 1];
					this.playpause.btn_el.setAttribute("role", "button");
					this.playpause.btn_el.setAttribute("aria-label", this.playpause.btn_label);
					this.playpause.btn_el.setAttribute("aria-pressed", this.playpause.is_pressed);
					this.playpause.btn_el.addEventListener("click", function (e) {
						e.preventDefault();
						const targetLink = e.target;

						if (targetLink.classList.contains("slider-pause")) {
							self.pauseSwiper();
						} else {
							self.startSwiper();
						}
					});
					this.playpause.btn_el.addEventListener("keydown", function (e) {
						e.preventDefault();
						self.playpauseHandleKeydown(e);
					});
				};

				this.playpauseHandleKeydown = (e) => {
					const isTabKey = e.code == "Tab" ? true : false;
					const isEnterKey = e.code == "Enter" ? true : false;

					if (isTabKey) {
						if (e.shiftKey) {
							this.playpause.prevFocusableEl.focus();
						} else {
							this.playpause.nextFocusableEl.focus();
						}
					} else if (isEnterKey) {
						e.target.click();
					} else {
						return;
					}
				};

				this.setAriaPressed = () => {
					this.playpause.is_pressed = this.playpause.btn_el.classList.contains("slider-pause") ? "false" : "true";
					this.playpause.btn_el.setAttribute("aria-pressed", this.playpause.is_pressed);
				};

				this.getSpeed = () => {
					return parseInt(this.element.dataset.sliderSlideTime);
				};

				this.getId = () => {
					return this.element.dataset.sliderId;
				};

				this.getSmoothHeightState = () => {
					return window.outerWidth < 767;
				};

				this.getAnimation = () => {
					return this.element.dataset.sliderAnimation != "slide" ? this.element.dataset.sliderAnimation : "";
				};

				this.getDots = () => {
					return this.element.dataset.sliderDots;
				};

				this.getArrows = () => {
					return this.element.dataset.sliderArrows;
				};

				this.currentSlide = () => {
					const activeSlide = this.element.querySelector(".swiper-slide-active");
					return activeSlide.dataset.slideIndex;
				};

				this.showSlide = (index) => {
					if (this.getSpeed() > 0) {
						this.pauseSwiper();
						this.forcePause = true;
					}

					if (this.currentSlide() !== index) {
						// Change slide without animation
						this.swiper.slideTo(index);
					}
				};

				this.startAnimation = () => {
					// Don't start animation when autorotate is disabled
					this.forcePause = false;

					if (this.getSpeed() > 0) {
						this.startSwiper();
					}
				};

				this.startSwiper = () => {
					this.playpause.btn_el.classList.remove("slider-play");
					this.playpause.btn_el.classList.add("slider-pause");
					this.setAriaPressed();
					this.swiper.autoplay.start();
				};

				this.pauseSwiper = () => {
					this.playpause.btn_el.classList.remove("slider-pause");
					this.playpause.btn_el.classList.add("slider-play");
					this.setAriaPressed();
					this.swiper.autoplay.pause();
				};

				this.onSlideChange = () => {
					const self = this;
					const speed = this.getSpeed();
					this.element.querySelectorAll(".slides li a").forEach((el) => {
						el.setAttribute("tabIndex", "0");
					});
					this.element.querySelectorAll(".slides li:not(.swiper-slide-active) a").forEach((el) => {
						el.setAttribute("tabIndex", "-1");
					});

					if (!this.forcePause && !this.swiper.autoplay.running && speed > 0) {
						// restart autoscroll after given interval since last interaction
						clearTimeout(this.restartTimer);
						this.restartTimer = setTimeout(function () {
							self.startSwiper();
						}, Math.max(0, SLIDER_REENABLE_INTERVAL - speed));
					}
				};

				this.configure = (options) => {
					if (window.innerWidth === 0) {
						// the app is not yet loaded in the admin, retry later
						setTimeout(this.configure.bind(this), 200);
						return;
					}

					const self = this;
					const speed = this.getSpeed();
					const id = this.getId();
					let nextBtn = "";
					let prevBtn = "";
					const paginationEl = this.getDots() == "true" ? `.swiper-pagination.slider--${id}` : "";

					if (this.getArrows() == "true") {
						nextBtn = ".swiper-button-next";
						prevBtn = ".swiper-button-prev";
					}

					const swiper = new swiper_esm_bundle(this.element, {
						spaceBetween: 0,
						autoplay: {
							delay: speed,
							disableOnInteraction: true,
						},
						effect: this.getAnimation(),
						fadeEffect: {
							crossFade: true,
						},
						pagination: {
							el: paginationEl,
							clickable: true,
						},
						navigation: {
							nextEl: nextBtn,
							prevEl: prevBtn,
						},
						on: {
							slideChangeTransitionEnd: function () {
								self.onSlideChange();
							},
						},
					});
					return swiper;
				};

				this.theme = theme;
				this.element = element;
				this.restartTimer = null;
				this.forcePause = false;
				this.setWidths();
				this.swiper = this.configure({}); // Do not focus on any links outside the active slide.

				this.element.querySelectorAll(".slides li:not(.swiper-slide-active) a").forEach((item) => {
					item.setAttribute("tabIndex", "-1");
				});

				const _self = this;

				const paginationContainer = document.querySelector(".slider-pagination-container.slider--" + this.getId());
				const playPauseElement = paginationContainer ? paginationContainer.querySelector(".slider-pauseplay a") : null;
				const dotsContainer = document.querySelector(".swiper-pagination.slider--" + this.getId());
				const dotLinks = dotsContainer ? dotsContainer.querySelectorAll("span") : null;

				if (dotLinks != null && dotLinks.length) {
					dotLinks.forEach((dot) => {
						dot.setAttribute("aria-label", `${_self.theme.translations.slide} ${dot.innerText}`);
					});
				}
				/**
				 * @todo This selector could be more targeted to only return the els from current and next sections
				 */

				this.allFocusableEls = Array.from(document.querySelectorAll('a:not([tabindex="-1"]), area[href], input:not([type=hidden]):not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), button:not([tabindex="-1"]), iframe:not([tabindex="-1"]), object, embed, [contenteditable]')).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") != "true");
				this.playpause = {
					btn_label: _self.theme.translations.pause,
					btn_el: playPauseElement,
					is_pressed: "false",
				};
				this.initPlaypause();
				this.attachResize();
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/Slideshow.js
		class Slideshow extends Section {
			constructor(theme, _element, pageLoad) {
				super(theme, _element, pageLoad);

				this.onBlockSelect = ({ element }) => {
					const index = parseInt(element.dataset.slideIndex, 10);
					if (this.hasSlides) this.slider.showSlide(index);
				};

				this.onBlockDeselect = () => {
					if (this.hasSlides) this.slider.startAnimation();
				};

				if (!_element) return;

				const sliderElement = _element.querySelector(".slider-homepage");

				if (!sliderElement) return;
				this.hasSlides = sliderElement.querySelector(".slides");
				if (this.hasSlides) this.slider = new Slider(theme, sliderElement);
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/Testimonial.js
		class Testimonial extends Section {
			constructor(theme, _element, pageLoad) {
				super(theme, _element, pageLoad);

				this.onBlockSelect = ({ element }) => {
					const index = parseInt(element.dataset.slideIndex, 10);
					if (this.hasSlides) this.slider.showSlide(index);
				};

				this.onBlockDeselect = () => {
					if (this.hasSlides) this.slider.startAnimation();
				};

				this.element = _element;
				if (!this.element) return;
				const sliderElement = this.element.querySelector(".slider-homepage-testimonial");
				if (!sliderElement) return;
				this.hasSlides = sliderElement.querySelector(".slides");

				if (this.hasSlides) {
					this.slider = new Slider(theme, sliderElement);
					theme.testimonials = theme.testimonials || {};
					theme.testimonials[_element.dataset.sliderId] = this.slider;
				}
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/Zoom.js
		// Adapted from tutorialzine implementation here:
		// https://tutorialzine.com/2017/08/image-zoom-library-with-vanilla-javascript
		class Zoom_Zoom {
			/**
			 * @param {import('../ThemeBase').default} theme
			 * @param {HTMLElement} element
			 */
			constructor(theme, element) {
				this.DURATION = 120;

				this.init = () => {
					var self = this;

					if (!this.element) {
						console.error("No container element. Please make sure you are using the right markup.");
						return;
					}

					if (!this.zoomedImage) {
						console.error("No zoomed image element. Please make sure you are using the right markup.");
						return;
					}

					if (!this.imgEl) {
						console.error("No preview images on page. Please make sure you are using the right markup.");
						return;
					} else {
						// Set the source of the zoomed image.
						this.zoomedImage.style.backgroundImage = `url(https:${this.imgEl.getAttribute("data-zoom-img")} )`;
						this.zoomedImg.src = `https:${this.imgEl.getAttribute("data-zoom-img")}`;
					} // Change the selected image to be zoomed when clicking on the previews.

					this.element.addEventListener("click", function (event) {
						var elem = event.target;

						if (elem.classList.contains("product-single__thumbnail__image")) {
							var imageSrc = elem.src;
							self.zoomedImage.style.backgroundImage = "url(" + imageSrc + ")";
						}
					}); // Zoom image on mouse enter.

					this.element.addEventListener(
						"mouseenter",
						function (e) {
							// Hide zoomed image when it's smaller then parent div,
							// it would just move but there won't be any zoom
							if (self.element.clientWidth >= self.zoomedImg.naturalWidth) {
								if (self.zoomedImage.classList.contains("hide")) return;
								self.zoomedImage.classList.add("hide");
								return;
							} else {
								self.zoomedImage.classList.remove("hide");
							} // Hide image when zoomed image is hovered - to prevent
							// both images visible when the image is too small

							self.timer = setTimeout(() => {
								self.imgEl.classList.add("product-image-hidden");
								self.timer = null;
							}, self.DURATION);
							self.zoomedImage.style.backgroundSize = `${self.zoomedImg.naturalWidth}px, ${self.zoomedImg.naturalHeight}px`;
						},
						false
					); // Show different parts of image depending on cursor position.

					this.zoomedImage.addEventListener(
						"mousemove",
						function (e) {
							// getBoundingClientReact gives us various information about the position of the element.
							var dimentions = this.getBoundingClientRect(); // Calculate the position of the cursor inside the element (in pixels).

							var x = e.clientX - dimentions.left;
							var y = e.clientY - dimentions.top; // Calculate the position of the cursor as a percentage of the total width/height of the element.

							var xpercent = Math.round(100 / (dimentions.width / x));
							var ypercent = Math.round(100 / (dimentions.height / y)); // Update the background position of the image.

							this.style.backgroundPosition = xpercent + "% " + ypercent + "%";
						},
						false
					); // When leaving the container zoom out the image back to normal size.

					this.zoomedImage.addEventListener(
						"mouseleave",
						function (e) {
							this.style.backgroundSize = "cover";
							this.style.backgroundPosition = "center";
							if (self.zoomedImage.classList.contains("hide")) return;
							self.zoomedImage.classList.add("hide");

							if (self.timer) {
								clearTimeout(self.timer);
								self.timer = null;
							}

							self.imgEl.classList.remove("product-image-hidden");
						},
						false
					);
				};

				this.element = element;
				this.timer = null;
				this.imgEl = this.element.querySelector("img");
				this.zoomedImage = this.element.querySelector(".zoomed-image");
				this.zoomedImg = document.createElement("img");
				this.init();
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/Media.js
		/* Polyfil template.content for IE11 */

		const templateContent = (template) => {
			if ("content" in template) {
				return document.importNode(template.content, true);
			} else {
				const fragment = document.createDocumentFragment();
				const children = template.childNodes;

				for (let i = 0; i < children.length; i++) {
					fragment.appendChild(children[i].cloneNode(true));
				}

				return fragment;
			}
		};

		class Media {
			/**
			 *
			 * @param {ThemeBase} theme
			 * @param {HTMLElement} parent
			 * @param {HTMLElement} targetElement
			 * @param {boolean} autoload
			 */
			constructor(theme, parent, targetElement, autoload) {
				this.isMobile = () => {
					return window.matchMedia("only screen and (max-width: 768px)").matches;
				};

				this.load = () => {
					return new Promise((resolve) => {
						if (this.loaded) {
							resolve();
							return;
						}

						const template = this.parent.querySelector("template");

						if (!template) {
							this.onLoad();
							resolve();
							return;
						}

						const fragment = templateContent(template);
						const oldMedia = this.targetElement.querySelector('[data-media-id="' + this.media_id + '"]');

						if (oldMedia) {
							try {
								this.targetElement.removeChild(oldMedia);
							} catch (e) {
								console.error(e);
							}
						}

						if (template.parentNode === this.targetElement) {
							this.targetElement.insertBefore(fragment, template);
						} else {
							this.targetElement.appendChild(fragment);
						}

						this.mediaWrapper = this.targetElement.querySelector('[data-media-id="' + this.media_id + '"]');

						if (this.selected) {
							this.mediaWrapper.classList.add("product-single__media--selected");
						}

						switch (this.type) {
							case "model":
								window.Shopify.loadFeatures(
									[
										{
											name: "model-viewer-ui",
											version: "1.0",
										},
									],
									() => {
										this.modelController = new window.Shopify.ModelViewerUI(this.mediaWrapper.querySelector("model-viewer")); // Don't interact with the rest of the page when model is not disabled

										this.modelController.viewer.parentElement.addEventListener(
											"mouseup",
											(e) => {
												e.stopPropagation = function () {};
											},
											{
												capture: true,
											}
										); // Prevent activating the viewer right after it was paused when clicked in position of the button

										this.modelController.elements.controlButton.addEventListener(
											"click",
											(e) => {
												e.stopImmediatePropagation();
											},
											{
												capture: true,
											}
										);
										this.modelController.viewer.addEventListener("shopify_model_viewer_ui_toggle_pause", this.onPause);
										this.modelController.viewer.addEventListener("shopify_model_viewer_ui_toggle_play", this.onPlay);
										this.onLoad();
										resolve();
									}
								);
								break;

							case "video":
							case "external_video":
								window.Shopify.loadFeatures([
									{
										name: "video-ui",
										version: "2.0",
										onLoad: () => {
											const video = this.mediaWrapper.querySelector("iframe, video");
											const loop = video.parentNode.dataset.videoLoop === "true";
											this.plyrController = new window.Shopify.Video(video, {
												loop: {
													active: loop,
												},
												focusOnPlay: false,
												autoplay: this.autoplay(),
											});
											video.addEventListener("play", this.onPlay);
											video.addEventListener("pause", this.onPause);
											video.addEventListener("ended", this.onPause);
											this.onLoad();
											resolve();
										},
									},
								]);
								break;

							case "image":
								this.mediaWrapper.querySelector(".product-single__media img").addEventListener("load", () => {
									if (this.parent.dataset.imageZoomEnable === "true" && !this.isMobile()) {
										new Zoom_Zoom(this.theme, this.mediaWrapper.querySelector(".product-single__media__image"));
									}

									this.onLoad();
									resolve();
								});
								break;

							default:
								this.onLoad();
								resolve();
						}
					});
				};

				this.onLoad = () => {
					if (!this.mediaWrapper.parentNode) return;
					this.loaded = true;
					this.mediaWrapper.parentNode.classList.add("product-single__media--loaded");
					const e = new CustomEvent("media-load", {
						detail: {
							parent: this.parent,
							media: this,
						},
					});
					this.parent.dispatchEvent(e);

					if (window.ShopifyXR && window.ShopifyXR.setupXRElements) {
						window.ShopifyXR.setupXRElements();
					}
				};

				this.play = () => {
					if (!this.loaded) {
						this.load().then(this._play);
					} else {
						this._play();
					}
				};

				this._play = () => {
					switch (this.type) {
						case "model":
							this.modelController.play();
							this.onPlay();
							break;

						case "video":
							this.plyrController.play().then(this.onPlay).catch(console.warn);
							break;

						case "external_video":
							this.plyrController.play();
							this.onPlay();
							break;
					}
				};

				this.onPlay = () => {
					this.active = true;
					this.mediaWrapper.classList.add("product-single__media--active");

					if (!this.loaded) {
						this.loaded = true;
						this.mediaWrapper.parentNode.classList.add("product-single__media--loaded");
					}

					const e = new CustomEvent("media-play", {
						detail: {
							parent: this.parent,
							media: this,
						},
					});
					this.parent.dispatchEvent(e);

					if (document.activeElement === document.body) {
						// No element has focus, focus this media
						this.focus();
					}
				};

				this.autoplay = () => {
					const thumbnailElem = document.querySelector(`.swiper-slide[data-media-id="${this.media_id}"]`);
					let isFirstMedia = false;

					if (thumbnailElem) {
						isFirstMedia = Number(thumbnailElem.dataset.mediaIndex) === 0;
					}

					if (window.innerWidth > 768 && !this.fullSizeMedia && !isFirstMedia) {
						return 1;
					} else {
						return 0;
					}
				};

				this.pause = () => {
					if (!this.active) {
						return;
					}

					switch (this.type) {
						case "model":
							break;

						case "video":
							this.plyrController.pause();
							break;

						case "external_video":
							this.plyrController.pause();
							break;
					}

					this.onPause();
				};

				this.togglePlay = () => {
					if (this.active) {
						this.pause();
					} else {
						this.play();
					}
				};

				this.onPause = () => {
					this.active = false;
					this.mediaWrapper.classList.remove("product-single__media--active");
					const e = new CustomEvent("media-pause", {
						detail: {
							parent: this.parent,
							media: this,
						},
					});
					this.parent.dispatchEvent(e);
				};

				this.select = () => {
					this.selected = true;

					if (this.mediaWrapper) {
						this.mediaWrapper.classList.add("product-single__media--selected");
					}
				};

				this.deselect = () => {
					if (this.selected) {
						this.selected = false;

						if (this.mediaWrapper) {
							this.mediaWrapper.classList.remove("product-single__media--selected");
						}
					}
				};

				this.reattach = (newTarget) => {
					this.targetElement = newTarget;

					if (this.mediaWrapper) {
						newTarget.appendChild(this.mediaWrapper);

						if (this.selected) {
							newTarget.classList.add("product-single__media--selected");
						} else {
							newTarget.classList.remove("product-single__media--selected");
						}
					}
				};

				this.scrollIntoView = (element) => {
					requestAnimationFrame(function () {
						const stickyHeader = document.querySelector(".sticky-header-wrapper");

						if (stickyHeader) {
							const stickyHeaderStyles = window.getComputedStyle(stickyHeader, null);
							const stickyHeaderHeight = stickyHeader ? stickyHeader.clientHeight - parseInt(stickyHeaderStyles.getPropertyValue("padding-top")) - parseInt(stickyHeaderStyles.getPropertyValue("padding-bottom")) : 0;
							const y = element.getBoundingClientRect().top + window.pageYOffset - stickyHeaderHeight;
							window.scrollTo(0, y);
						}
					});
				};

				this.focus = () => {
					switch (this.type) {
						case "video":
						case "external_video": {
							const plyr = this.mediaWrapper.querySelector(".plyr");

							if (plyr) {
								this.scrollIntoView(plyr);
								plyr.focus();
							}

							break;
						}

						case "model": {
							const viewer = this.mediaWrapper.querySelector("model-viewer");

							if (viewer && viewer.shadowRoot) {
								this.scrollIntoView(viewer);
								viewer.focus();
							} else {
								// Not yet loaded, try later
								setTimeout(this.focus, 1000);
							}

							break;
						}

						default: {
							if (this.mediaWrapper) {
								this.scrollIntoView(this.mediaWrapper);
								this.mediaWrapper.focus();
							}
						}
					}
				};

				this.destroy = () => {};

				this.theme = theme;
				this.parent = parent;
				this.media_id = parent.dataset.mediaId;
				this.type = parent.dataset.mediaType;
				this.loaded = false;
				this.active = false;
				this.fullSizeMedia = document.querySelector("[data-media-size]");
				this.plyrController = null;
				this.modelController = null;
				this.youtubeController = null;
				this.targetElement = targetElement;
				this.mediaWrapper = null;
				this.selected = this.parent.classList.contains("product-single__thumbnail--selected");

				if (this.selected && autoload) {
					this.load();
				}
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/QuantityControls.js
		class QuantityControls {
			constructor(theme, element, updateCart) {
				var _this = this;

				this.updatePrices = (response) => {
					// Note: We don't currently construct the Cart page's rows dynamically
					//       (like we do in Cart drawer).
					//       If there are any discounts, refresh the form to let the existing
					//       logic handle it since we may need to add/remove line items.
					if (response.total_discount > 0) {
						// Quick fix: submit form (non-ajax)
						const updateQuantities = document.querySelector("#update_quantities");
						updateQuantities.click();
						return false;
					}

					response.items.forEach((item, index) => {
						var row = this.element.querySelector(".id-" + item.id);

						if (row) {
							if (response.total_discount === 0) {
								// Remove discount lines / divs
								row.querySelector(".cart-table-price").innerHTML = '<div class="money">--</div>';
							}
							// Item singular price.
							row.querySelector(".cart-table-price .money").innerHTML = this.theme.formatMoney(item.original_price); // Line item total.

							row.querySelector(".cart-table-line-price").innerHTML = this.theme.formatMoney(item.final_line_price);
						}
					});
					this.element.querySelector("#cart-total-final-price").innerHTML = this.theme.formatMoney(response.total_price); // Free shipping msg update

					const freeShippingContainer = document.querySelector("[data-free-shipping-msg]");

					if (freeShippingContainer) {
						this.theme.fetchSection("/", "free-shipping-msg", freeShippingContainer);
					}
				};

				this.updateCartItem = (num) => {
					this.wrapper.classList.add("cart-item-quantity-active");
					var fade = num <= 0;
					var delay = fade ? this.FADE_OUT_ANIMATION_DURATION : 0; // If number of items is 1, don't do anything. We still want to use the 'remove' link.

					if (num >= 1) {
						this.cartSetQuantity(delay).finally(() => {
							this.wrapper.classList.remove("cart-item-quantity-active");
						});
					} else {
						this.wrapper.classList.remove("cart-item-quantity-active");
					}
				};

				this.cartSetQuantity = async function (delay) {
					const self = _this;
					const form = document.querySelector("#cartform");
					const formData = new FormData(form);
					const errorMessage = document.querySelector(".cart-error-box");
					errorMessage.innerText = "";

					try {
						const response = await (
							await fetch("/cart/update.js", {
								method: "POST",
								body: formData,
							})
						).json();

						if (response) {
							setTimeout(() => {
								self.updatePrices(response);
							}, delay);
						}
					} catch (error) {
						console.log(error);
						errorMessage.innerText = "Unable to update item quantity";
					}
				};

				this.theme = theme;
				this.element = element;
				this.wrapper = this.element.querySelector(".quantity-controls");
				this.FADE_OUT_ANIMATION_DURATION = 800; // ms

				var _self = this;

				this.element.querySelectorAll(".quantity-controls button.qty-plus").forEach((item) => {
					item.addEventListener("click", function (e) {
						e.preventDefault();
						var qtyInput = this.closest(".quantity-controls").querySelector("input.quantity-selector");
						let stockAmt = this.closest(".quantity-controls").dataset.stockCount;
						let inventoryPolicy = this.closest(".quantity-controls").dataset.inventoryPolicy;
						let inventoryManagement = this.closest(".quantity-controls").dataset.inventoryManagement;
						let errorMsg = this.parentElement.nextElementSibling;
						const val = parseInt(qtyInput.value.toString(), 10);

						if (stockAmt && stockAmt > 0) {
							if (val < stockAmt || inventoryPolicy == "continue" || inventoryManagement != "shopify") {
								var newVal = val + 1;
							} else {
								errorMsg.classList.remove("d-none");
								newVal = stockAmt;
							}
						} else {
							newVal = val + 1;
						}

						qtyInput.value = newVal;

						if (updateCart) {
							_self.updateCartItem(newVal);
						}
					});
				});
				this.element.querySelectorAll(".quantity-controls button.qty-minus").forEach((item) => {
					item.addEventListener("click", function (e) {
						e.preventDefault();
						var qtyInput = this.closest(".quantity-controls").querySelector("input.quantity-selector");
						let stockAmt = this.closest(".quantity-controls").dataset.stockCount;
						let inventoryPolicy = this.closest(".quantity-controls").dataset.inventoryPolicy;
						let inventoryManagement = this.closest(".quantity-controls").dataset.inventoryManagement;
						let errorMsg = this.parentElement.nextElementSibling;
						const val = parseInt(qtyInput.value.toString(), 10);
						var newQty = val - 1 < 1 ? 1 : val - 1; // Never go below 1.

						qtyInput.value = newQty;

						if (stockAmt && stockAmt > 0) {
							if (newQty <= stockAmt || inventoryPolicy == "continue" || inventoryManagement != "shopify") {
								errorMsg.classList.add("d-none");
							}
						}

						if (updateCart) {
							_self.updateCartItem(newQty);
						}
					});
				});
				this.element.querySelectorAll("input.quantity-selector").forEach((item) => {
					item.addEventListener("change", function (e) {
						let stockAmt = this.closest(".quantity-controls").dataset.stockCount;
						let inventoryPolicy = this.closest(".quantity-controls").dataset.inventoryPolicy;
						let inventoryManagement = this.closest(".quantity-controls").dataset.inventoryManagement;
						let errorMsg = this.parentElement.nextElementSibling;
						var val = parseInt(e.currentTarget.value.toString(), 10);
						var qtyInput = this.closest(".quantity-controls").querySelector("input.quantity-selector");

						if (stockAmt && stockAmt > 0) {
							if (val > stockAmt && (inventoryPolicy !== "continue" || inventoryManagement == "shopify")) {
								qtyInput.value = stockAmt;
								errorMsg.classList.remove("d-none");
							} else {
								qtyInput.value = val;
								errorMsg.classList.add("d-none");
							}
						} else {
							qtyInput.value = val;
						}

						if (updateCart) {
							_self.updateCartItem(val);
						}
					});
				});
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/Product.js
		class Product extends Section {
			constructor(theme, _element, pageLoad, isFeaturedProduct = false) {
				var _this;

				super(theme, _element, pageLoad);
				_this = this;

				this.applyMasonryLayout = () => {
					if (!document.body.querySelector(".template-product")) return;
					const detailsCol = document.querySelector("[data-details-col]");
					let colOffset = "0";

					if (!this.isMobile()) {
						const galleryHeight = document.querySelector("[data-media-col]").offsetHeight;
						const formHeight = document.querySelector("[data-form-col]").offsetHeight; // Calc the height difference between the two top columns

						if (galleryHeight < formHeight) colOffset = "-" + (formHeight - galleryHeight) + "px";
					}

					detailsCol.style.marginTop = colOffset;
				};

				this.isMobile = () => {
					return window.matchMedia("only screen and (max-width: 768px)").matches;
				};

				this.loadSecondaryMedia = () => {
					const showFullSizeMedia = this.fullSizeMediaWrapper && !this.isMobile();

					if (showFullSizeMedia) {
						this.thumbnails.forEach((thumbnail) => {
							this.onMediaElementSelect(thumbnail, {
								load: true,
								togglePlay: false,
								focus: false,
							});
						});
					} else {
						this.slider = this.initializeSlider();
					}
				};

				this.handleThumbnailMediaClick = (e) => {
					if (e.type === "keydown") {
						if (e.code !== "Enter" && e.code !== "Escape") return;

						if (e.target.classList.contains("shopify-model-viewer-ui__button") || e.target.classList.contains("plyr__control")) {
							return;
						}
					}

					e.preventDefault(); // Don't do anything on "view in your space" click, it's handled by Shopify XR library

					if (e.target.classList.contains("product-single__view-in-space")) return; // Don't do anything on 3d model overlay click, it will trigger an event itself

					if (e.target.tagName === "MODEL-VIEWER" || e.target.classList.contains("shopify-model-viewer-ui__controls-overlay")) return; // Don't do anything on plyr button click

					if (e.target.classList.contains("plyr__control")) return; // Image is clicked when there are no thumbnails, do nothing

					if (e.currentTarget.dataset.mediaType === "image" && this.slider.slidesPerViewDynamic() === 1) return;
					const isLoaded = e.currentTarget.classList.contains("product-single__media--loaded");
					const isActive = e.currentTarget.classList.contains("product-single__media--active");
					this.onThumbnailClick(e.currentTarget); // Loaded and active media will handle click internally in the component itself

					if (isLoaded && isActive) return;
					this.onMediaElementSelect(e.currentTarget, {
						load: true,
						togglePlay: true,
						focus: true,
					});
					this.applyMasonryLayout();
				};

				this.initializeSlider = () => {
					let product = this;
					let thumbnails = this.element.querySelector(".product-single__thumbnails");
					if (!thumbnails) return;
					const numItems = this.element.querySelectorAll(".product-single__thumbnail").length;
					const el = thumbnails.querySelector(".swiper-container");
					if (!el) return; // Do not show arrows or pagination if there is a single media item.

					const pagination = {
						el: el.parentNode.querySelector(".swiper-pagination"),
						type: "bullets",
						clickable: true,
						renderBullet: (index, className) => {
							return '<span class="' + className + '"><span class="swiper-pagination-bullet-dot"></span></span>';
						},
					};
					var productThumbSlider = new swiper_esm_bundle(el, {
						updateOnImagesReady: true,
						spaceBetween: 20,
						threshold: 10,
						navigation: {
							nextEl: ".thumbs-direction-nav--next",
							prevEl: ".thumbs-direction-nav--prev",
						},
						pagination: pagination,
						loop: !thumbnails.classList.contains("no-arrows"),
						autoHeight: true,
						loopedSlides: 1,
						slidesPerView: el.dataset.slidesPerView,
						direction: el.dataset.direction || "horizontal",
					});
					productThumbSlider.on("slideChange", function () {
						// Go to first/last slide when prev/next is clicked on first/last slide
						var slidesPerView = this.slidesPerViewDynamic();

						if (slidesPerView === 1) {
							// One element is displayed => make it active
							product.onMediaElementSelect(this.slides[this.activeIndex], {}); // Select variant based on selected image

							if (product.thumbnailChangesVariant) {
								const variantId = this.slides[this.activeIndex].querySelector(".product-single__thumbnail").dataset.variant;

								if (variantId) {
									product.onVariantSelected(variantId);
								}
							}
						} else {
							// Multiple elements in view, moving to next should animate to first
							if (this.isEnd) {
								this.slideTo(1);
							} else if (this.isBeginning) {
								this.slideTo(this.slides.length - 1 - slidesPerView);
							}
						}

						fixThumbSliderTabindex(this);
					});
					fixThumbSliderTabindex(productThumbSlider);

					if (numItems <= 1) {
						thumbnails.querySelector(".swiper-pagination-bullets").classList.add("hide");
					}

					const parent = el.parentNode;

					if (productThumbSlider.slidesPerViewDynamic() > 1) {
						parent.classList.add("product-single__thumbnails--carousel");
					}

					let lastBreakpoint = productThumbSlider.currentBreakpoint;
					productThumbSlider.on("resize", function (e) {
						if (this.slidesPerViewDynamic() > 1) {
							parent.classList.add("product-single__thumbnails--carousel");
						} else {
							parent.classList.remove("product-single__thumbnails--carousel");
						}

						if (this.currentBreakpoint != lastBreakpoint) {
							lastBreakpoint = this.currentBreakpoint;

							if (this.currentBreakpoint === "max") {
								thumbnails.classList.toggle("hide", numItems < 1);
							} else {
								thumbnails.classList.toggle("hide", numItems <= 1);
							}
						}
					});

					if (productThumbSlider.currentBreakpoint === "max") {
						thumbnails.classList.toggle("hide", numItems < 1);
					} else if (productThumbSlider.currentBreakpoint !== undefined) {
						thumbnails.classList.toggle("hide", numItems <= 1);
					}

					const paginationEl = el.parentNode.querySelector(".swiper-pagination");
					paginationEl.addEventListener(
						"keydown",
						(e) => {
							// Pressing enter on active bullet will activate the media and focus it.
							if (
								/** @type {KeyboardEvent} */
								e.code === "Enter"
							) {
								const elem = e.target;
								const index = Array.from(elem.parentElement.children).indexOf(elem);

								if (index === productThumbSlider.activeIndex) {
									this.onMediaElementSelect(productThumbSlider.slides[productThumbSlider.activeIndex], {
										forcePlay: true,
										focus: true,
									});
								}
							}
						},
						{
							capture: true,
						}
					);

					if (productThumbSlider.device.ios) {
						paginationEl.classList.add("swiper-pagination-hide-focus");
					}

					return productThumbSlider;
				};

				this.mediaToDesktop = () => {
					// We've switched to desktop, move medias from thumbnains into separate box
					var parent = this.element.querySelector(".product-single__medias");
					this.mediaById.forEach((media) => {
						media.reattach(parent);

						if (media.loaded) {
							parent.classList.add("product-single__thumbnail--loaded");
						} else if (media.selected) {
							parent.classList.add("product-single__media--selected");
							media.load();
						}
					});
				};

				this.setVariantOptions = (values) => {
					let matchingVariants = this.product.variants.filter((variant) => {
						for (var i = 0; i < values.length; i++) {
							if (values[i] !== variant.options[i]) {
								return false;
							}
						}

						return true;
					});

					if (matchingVariants.length === 0) {
						this.updateVariant(null);
					} else {
						this.updateVariant(matchingVariants[0]);
					}
				};

				this.onSelectChange = () => {
					const selectsArray = Array.from(this.selects);
					const values = selectsArray.map((select, index) => {
						return select.value;
					});
					this.setVariantOptions(values);
				};

				this.onThumbnailClick = (thumbnail) => {
					if (this.thumbnailChangesVariant) {
						const variant_id = thumbnail.dataset.variant;

						if (variant_id) {
							this.onVariantSelected(variant_id);
						}
					}
				};

				this.onMediaElementSelect = (element, options) => {
					const media = this.mediaById.get(element.dataset.mediaId); // Pause all others.

					this.mediaById.forEach((otherMedia) => {
						if (otherMedia.media_id !== media.media_id) {
							otherMedia.pause();
							otherMedia.deselect();
						}
					});
					media.select();

					if (options.togglePlay) {
						media.togglePlay();
					} else if (options.forcePlay) {
						media.play();
					} else if (options.load) {
						media.load().then(function () {
							if (options.focus) {
								media.focus();
							}
						});
					}

					if (options.focus) {
						media.focus();
					}
				};

				this.onVariantSelected = (variant_id) => {
					const matchingVariants = this.product.variants.filter((variant) => {
						return variant.id == variant_id;
					});

					if (matchingVariants.length === 0) {
						this.updateVariant(null);
					} else {
						const variant = matchingVariants[0];
						this.updateVariant(matchingVariants[0]);

						for (var i = 0; i < variant.options.length; i++) {
							const select = this.element.querySelector("#SingleOptionSelector-" + i);
							if (!select) continue;
							select.value = variant.options[i];
							const e = new CustomEvent("change");
							select.dispatchEvent(e);
						}
					}
				};

				this.storeAvailability = (variantId, productTitle) => {
					const variantSectionUrl = "/variants/" + variantId + "/?section_id=store-availability";
					const storePickupEnabled = document.querySelector(".store-pickup-enabled");
					if (!storePickupEnabled) return;
					let availabilityContainer = document.createElement("div");
					availabilityContainer.classList.add("product__store__availability__container");
					let availabilityModal = document.createElement("div");
					availabilityModal.setAttribute("data-store-availability-modal-container", "");
					const targetFP = document.querySelector(".featured-product--submit-action");
					const targetEl = document.querySelector(".product-page--local-pickup");
					if (!availabilityContainer) return;
					availabilityContainer.innerHTML = "";
					fetch(variantSectionUrl)
						.then(function (response) {
							return response.text();
						})
						.then(function (storeAvailabilityHTML) {
							if (storeAvailabilityHTML.trim() === "" || !storeAvailabilityHTML.includes('"store-availability-information"')) {
								return;
							} // Remove existing content.

							const prevContent = document.querySelector(".product__store__availability__container");

							if (prevContent) {
								prevContent.remove();
							}

							availabilityContainer.innerHTML = storeAvailabilityHTML;
							const stripInnerSection = availabilityContainer.querySelector(".store-availability-container");
							availabilityContainer.innerHTML = stripInnerSection.innerHTML;

							if (targetFP) {
								targetFP.after(availabilityContainer);
								availabilityContainer.after(availabilityModal);
							} else if (targetEl) {
								targetEl.after(availabilityContainer);
								availabilityContainer.after(availabilityModal);
							}

							let storeAvailabilityModalOpen = document.querySelector("a[data-store-availability-modal-open]");
							let storeAvailabilityModalProductTitle = document.querySelector("h2[data-store-availability-modal-product-title]"); // Only create modal if open modal element exists

							if (!storeAvailabilityModalOpen) {
								return;
							} else {
								// Open modal
								storeAvailabilityModalOpen.addEventListener("click", function () {
									// Trap focus within modal
									setTimeout(function () {
										var focusableEls = availabilityModal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
										var firstFocusableEl = focusableEls[0];
										var lastFocusableEl = focusableEls[focusableEls.length - 1];
										var KEYCODE_TAB = "Tab";
										/** @type {HTMLElement} */

										availabilityModal.focus();
										availabilityModal.addEventListener("keydown", function (e) {
											const isTabPressed = e.key === "Tab" || e.code === KEYCODE_TAB;
											if (!isTabPressed) return; // Shift + tab.

											if (e.shiftKey) {
												if (document.activeElement === firstFocusableEl) {
													/** @type {HTMLElement} */
													lastFocusableEl.focus();
													e.preventDefault();
												}
											} else {
												// Tab.
												if (document.activeElement === lastFocusableEl) {
													/** @type {HTMLElement} */
													firstFocusableEl.focus();
													e.preventDefault();
												}
											}
										});
									}, 500);
									let modalContainer = document.querySelector("div[data-store-availability-modal-container]");
									let availabilityModal = document.querySelector("#StoreAvailabilityModal");
									let htmlBody = document.querySelector("body");
									htmlBody.classList.add("availability-modal--open");
									modalContainer.classList.add("store-availabilities-modal--open");
									availabilityModal.classList.add("open");
									availabilityModal.style.visibility = "visible"; // Modal close button

									const availabilityModalCloseButton = document.querySelector(".store-availabilities-modal__close");

									if (availabilityModalCloseButton) {
										availabilityModalCloseButton.addEventListener("click", function () {
											modalContainer.classList.remove("store-availabilities-modal--open");
											htmlBody.classList.remove("availability-modal--open");
											availabilityModal.classList.remove("open");
											availabilityModal.style.visibility = "visible";
										});
									}
								});
							} // Update product title

							if (!storeAvailabilityModalProductTitle) {
								return;
							} else {
								storeAvailabilityModalProductTitle.textContent = productTitle;
							}
						});
				};

				this.handleVariant = (variant) => {
					this.originalSelect.value = variant.id;
					this.storeAvailability(variant.id, this.product.title);
					const is_sale = variant.compare_at_price && variant.compare_at_price > variant.price;
					this.sale.forEach((saleElem) => {
						saleElem.classList.toggle("hide", !is_sale); // If the compare at price is hidden we don't want to change the color of the variant price

						if (!this.sale_price.classList.contains("visually--hidden")) {
							// When we click through variants, we only want the price color to change if the variant is on sale
							this.priceContainer.classList.toggle("sale--color", is_sale);
						}
					});

					if (this.sku) {
						if (variant.sku) {
							this.sku.textContent = variant.sku;
						}

						this.sku.classList.toggle("hide", !variant.sku);
					}

					if (variant.unit_price_measurement) {
						this.pricePerUnit.innerHTML = '<span class="price">(' + this.theme.formatMoney(variant.unit_price) + " / " + (variant.unit_price_measurement.reference_value != 1 ? variant.unit_price_measurement.reference_value : "") + " " + variant.unit_price_measurement.reference_unit + ")";
					} else {
						this.pricePerUnit.textContent = "";
					}

					if (!variant.available) {
						setTimeout(() => {
							let getAvailabilityContainer = document.querySelector(".product__store__availability__container");

							if (getAvailabilityContainer) {
								getAvailabilityContainer.classList.add("hide");
							}
						}, 500);
						this.showVariantOutOfStockForm(this.product.title, variant.title);
						this.price.textContent = this.theme.translations.soldOut;
						this.sale_price.textContent = "";

						if (this.cart) {
							this.cart.disabled = true;
							this.cart.textContent = this.theme.translations.soldOut;
						}

						this.spb.forEach((spb) => {
							spb.style.opacity = 1;
							Helpers.fadeOut(spb);
							spb.style.display = "none";
						});

						if (this.variantPercentageWrapper) {
							this.variantPercentageWrapper.classList.add("hide");
						} else if (this.variantValueWrapper) {
							this.variantValueWrapper.classList.add("hide");
						}

						const event = new CustomEvent("variantUnavailable", {
							detail: {
								type: "variantUnavailable",
								time: new Date(),
								variant: variant,
							},
						});
						document.dispatchEvent(event);
					} else {
						const emailEnabled = document.querySelector(".variant-out-of-stock");

						if (emailEnabled) {
							this.hideVariantOutOfStockForm();
						}

						this.price.innerHTML = this.theme.formatMoney(variant.price);
						this.sale_price.innerHTML = is_sale ? this.theme.formatMoney(variant.compare_at_price) : "";

						if (this.cart) {
							this.cart.disabled = false;
							this.cart.textContent = this.theme.translations.addToCart;
						}

						this.spb.forEach((spb) => {
							spb.style.display = "block";
							Helpers.fadeIn(spb);
						});

						if (this.variantPercentageWrapper && variant.compare_at_price > variant.price) {
							this.variantPercentageWrapper.classList.remove("hide");
							const percentage = ((variant.compare_at_price - variant.price) * 100.0) / variant.compare_at_price;
							this.variantPercentageWrapper.querySelector(".variant-percentage").textContent = percentage.toFixed(0) + "%";
						} else {
							if (this.variantPercentageWrapper) {
								this.variantPercentageWrapper.classList.add("hide");
							}
						}

						if (this.variantValueWrapper && variant.compare_at_price > variant.price) {
							this.variantValueWrapper.classList.remove("hide");
							const value = variant.compare_at_price - variant.price;
							this.variantValueWrapper.querySelector(".variant-value").innerHTML = this.theme.formatMoney(value);
						} else {
							if (this.variantValueWrapper) {
								this.variantValueWrapper.classList.add("hide");
							}
						}

						const event = new CustomEvent("variantAvailable", {
							detail: {
								type: "variantAvailable",
								time: new Date(),
							},
						});
						document.dispatchEvent(event);
					}

					if (variant.featured_media) {
						const mediaIndex = this.product.media.findIndex((m) => m.id === variant.featured_media.id);

						if (mediaIndex >= 0) {
							const newImageThumb = this.element.querySelector('.product-single__thumbnail[data-media-id$="' + variant.featured_media.id + '"]');
							this.onMediaElementSelect(newImageThumb, {
								load: true,
							});

							if (this.slider && this.slider.slidesPerViewDynamic() === 1) {
								// Mobile view active
								this.slider.slideToLoop(mediaIndex);
							}
						}
					}

					const closestSection = this.element.closest(".shopify-section");
					let isIndivProduct = false;
					if (closestSection) isIndivProduct = closestSection.classList.contains("homepage-section--indiv-product-wrapper");
					const hasMoreVariants = this.product.variants.length > 1;

					if (window.history.replaceState && !isIndivProduct && hasMoreVariants) {
						// Change url to include variant if we're not on homepage
						var search = [];

						if (window.location.search.length > 1) {
							// select non-variant query params
							search = window.location.search
								.slice(1)
								.split("&")
								.filter(function (q) {
									return q.indexOf("variant=") !== 0;
								});
						} // add current variant

						search.push("variant=" + variant.id); // set the url to include the variant

						var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + search.join("&");
						window.history.replaceState(
							{
								path: newurl,
							},
							"",
							newurl
						);
					}
				};

				this.handleNullVariant = () => {
					const makeASelection =
						Array.from(this.selects).filter(function (select) {
							return select.value === "";
						}).length > 0;

					if (makeASelection) {
						this.price.textContent = this.theme.translations.makeASelection;
					} else {
						setTimeout(() => {
							let getAvailabilityContainer = document.querySelector(".product__store__availability__container");

							if (getAvailabilityContainer) {
								getAvailabilityContainer.classList.add("hide");
							}
						}, 500);
						this.price.textContent = this.theme.translations.unavailable;
						this.hideVariantOutOfStockForm();
					}

					if (this.cart) {
						this.cart.disabled = true;
					}

					if (this.sale.length > 0) {
						this.sale.forEach((saleElem) => {
							saleElem.classList.add("hide");
						});
					}

					if (this.variantPercentageWrapper) this.variantPercentageWrapper.classList.add("hide");
					if (this.variantValueWrapper) this.variantValueWrapper.classList.add("hide");
					if (this.sku) this.sku.classList.add("hide");
				};

				this.updateVariant = (variant) => {
					if (variant) {
						this.handleVariant(variant);
					} else {
						this.handleNullVariant();
					}
				};

				this.CART_LOADING = `<div class="lds-dual-ring"></div><span class="sr-only">${this.theme.translations.products.loading}</span>`;

				this.addToCart = async function () {
					_this.clearError();

					let self = _this;
					const formData = new FormData(_this.addToCartForm);

					try {
						const fetchResult = await fetch(_this.config.shopifyAjaxAddUrl, {
							method: "POST",
							headers: {
								"x-requested-with": "XMLHttpRequest",
							},
							credentials: "same-origin",
							body: formData,
						});
						const responseJson = await fetchResult.json();

						if (!fetchResult.ok) {
							_this.addToCartFailed(responseJson);
						} else {
							_this.addedToCart();
						}
					} catch (error) {
						console.error(error);
					}
				};

				this.disableCartButton = () => {
					if (this.addedTextTimeout) {
						clearTimeout(this.addedTextTimeout);
						this.addedTextTimeout = null;
					}

					this.cart.classList.add("disabled");
					this.cart.disabled = true;
					this.cart.innerHTML = this.CART_LOADING;
				};

				this.enableCartButton = () => {
					if (this.addedTextTimeout) {
						clearTimeout(this.addedTextTimeout);
						this.addedTextTimeout = null;
					}

					this.cart.classList.remove("disabled");
					this.cart.disabled = false;
					this.cart.innerHTML = this.theme.translations.addToCart;
				};

				this.addedToCart = (itemData) => {
					this.updateCart();
				};

				this.openCartPage = () => {
					window.location.href = this.addToCartForm.querySelector("#cart-link").value.toString();
				};

				this.showCart = () => {
					const cartDrawerTop = document.querySelector(".cart-drawer__top");
					let cartDrawerStatus = document.querySelector(".js-cart-drawer-status"); // TODO: Translate the string.

					cartDrawerStatus.textContent = `Item added to your cart`;
					cartDrawerTop.appendChild(cartDrawerStatus);
					var event = new CustomEvent("cart:open");
					document.querySelector("#cartSlideoutWrapper").dispatchEvent(event);
				};

				this.updateCart = async function () {
					try {
						const getResult = await fetch(_this.config.shopifyAjaxUrl, {
							method: "GET",
							headers: {
								"x-requested-with": "XMLHttpRequest",
							},
							credentials: "same-origin",
						});
						const responseJson = await getResult.json();

						if (!getResult.ok) {
							_this.updateCartFailed(getResult);
						} else {
							_this.updatedCart(responseJson);
						}
					} catch (error) {
						console.error(error);
					}
				};

				this.updatedCart = (data) => {
					this.theme.updateCartDrawer(data);
					this.enableCartButton();
					const cart_action = document.getElementById("PageContainer").dataset.cartAction;
					const cart_type = document.getElementById("PageContainer").dataset.cartType;

					if (cart_action === "cart" && cart_type == "page") {
						this.openCartPage();
					} else if (cart_action === "added") {
						this.cart.innerHTML = this.theme.translations.added;

						if (this.addedTextTimeout) {
							clearTimeout(this.addedTextTimeout);
							this.addedTextTimeout = null;
						}

						this.addedTextTimeout = setTimeout(() => {
							this.cart.innerHTML = this.theme.translations.addToCart;
						}, 2000);
					} else if (cart_type === "drawer" || cart_type === "persistent") {
						// cart_action === drawer
						this.showCart();
					}
				};

				this.updateCartFailed = (response) => {
					this.enableCartButton();
					console.error("Updating the cart failed: ", response);
				};

				this.addToCartFailed = (response) => {
					this.enableCartButton();
					let errorText = "Unknown error";

					if (response.status == 0) {
						errorText = "Unable to connect to server";
					} else if (response.status == 422) {
						errorText = response.description;
					} else if (response.responseJSON) {
						// Process JSON error
						if (response.responseJSON.description) {
							errorText = response.responseJSON.description;
						} else {
							errorText = response.responseJSON.message;
						}
					} else if (response.responseText) {
						// Use plain text error
						errorText = response.responseText;
					}

					this.showError(errorText);
				};

				this.showError = (text) => {
					let cartError = document.createElement("div");
					cartError.id = "cart-error";
					cartError.classList.add("alert", "alert-danger");
					cartError.textContent = text;
					this.cart.parentNode.insertBefore(cartError, this.cart.nextSibling);
				};

				this.clearError = () => {
					const cartError = document.querySelector("#cart-error");

					if (cartError) {
						cartError.parentNode.removeChild(cartError);
					}
				};

				this.showVariantOutOfStockForm = (productTitle, variantTitle) => {
					if (this.stockEmailEnabled) {
						const outOfStockEmailBody = this.element.querySelector('#notify-me-wrapper input[name="contact[body]"]');
						const getform = document.querySelector("#sold-out");
						let varTitleContainer = document.querySelector("#variant_title");

						if (!varTitleContainer) {
							return;
						} else {
							varTitleContainer.innerText = "- " + variantTitle;
						}

						getform.addEventListener("submit", function () {
							let btnElem = document.querySelector("#notify-me-wrapper .btn");
							btnElem.value = "";
						}); // TODO: This needs translating.

						outOfStockEmailBody.value = `Please notify me when ${productTitle}, variant: ${variantTitle} becomes available.`;
						const outOfStockElem = this.element.querySelector(".variant-out-of-stock");
						Helpers.fadeIn(outOfStockElem);
					}
				};

				this.hideVariantOutOfStockForm = () => {
					if (this.stockEmailEnabled) {
						this.element.querySelector(".variant-out-of-stock").style.display = "none";
						this.element.querySelector(".product-page--submit-action").classList.remove("hidden");
					}
				};

				this.responsiveTables = () => {
					this.element.querySelectorAll(".product-description-wrapper table").forEach((table) => {
						let wrapper = document.createElement("div");
						wrapper.classList.add("rte__table-wrapper");
						table.parentNode.insertBefore(wrapper, table);
						wrapper.appendChild(table);
					});
				};

				this.isFeaturedProduct = isFeaturedProduct; // Settings

				this.config = {
					shopifyAjaxAddUrl: "/cart/add.js",
					shopifyAjaxUrl: "/cart.js",
				};
				this.element = _element;
				this.sectionId = this.element.dataset.sectionId;
				var productScript = this.element.querySelector(".product-json"); // Product is not loaded, there is either no product section or the product is not selected

				if (!productScript) return;
				let self = this;
				this.addToCartForm = this.element.querySelector("#add-to-cart-form");
				this.product = JSON.parse(productScript.textContent);
				this.selects = this.element.querySelectorAll(".selector-wrapper select, .product-option-select select");
				this.selects.forEach((select) => {
					select.addEventListener("change", self.onSelectChange); // Ensure the change event is fired on the form when variants changed (for Shop Pay Installments)

					select.addEventListener("change", function () {
						const event = new Event("change");
						self.addToCartForm.dispatchEvent(event);
					});
				});
				this.originalSelect = this.element.querySelector(".original-select");
				this.price = this.element.querySelector("#price-field");
				this.priceContainer = this.element.querySelector(".product-page--pricing");
				this.cart = this.element.querySelector("#purchase");
				this.spb = this.element.querySelectorAll(".shopify-payment-button");
				this.sale = this.element.querySelectorAll(".sale-badge, .compare-at-price");
				this.sale_price = this.element.querySelector(".compare-at-price");
				this.productBox = document.getElementById("product-box");
				this.isAvailable = this.productBox ? this.productBox.getAttribute("data-instock") : false;
				this.pricePerUnit = this.element.querySelector(".product-page--pricing--price-per-unit");
				this.variantPercentageWrapper = this.element.querySelector(".product-page--pricing--discount");
				this.variantValueWrapper = this.element.querySelector(".variant-value-wrapper");
				this.thumbnails = this.element.querySelectorAll(".product-single__thumbnail");
				this.sku = this.element.querySelector(".indiv-product-sku-text");
				this.storeAvailabilityContainer = this.element.querySelector("[data-store-availability-container]");
				this.zoomSelector = ".zoomImg";
				this.addedTextTimeout = null;
				this.activeTab = null;
				this.activeTabContent = null;
				this.thumbnailChangesVariant = false;
				this.thumbnailChangesVariantElem = this.element.querySelector("#thumbnail_changes_variant");

				if (this.thumbnailChangesVariantElem) {
					this.thumbnailChangesVariant = this.thumbnailChangesVariantElem.value === "true";
				}

				this.fullSizeMediaWrapper = this.element.querySelector(".product-media--full-size");
				this.stockEmailEnabled = false;
				this.stockEmailEnabledElem = this.element.querySelector(".product-page--submit-action");

				if (this.stockEmailEnabledElem) {
					this.stockEmailEnabled = this.stockEmailEnabledElem.dataset.stockEmailEnabled;
				} // Load media

				this.mediaById = new Map();
				var autoload = true;
				this.mediaTarget = this.element.querySelector(".product-single__medias");
				Array.prototype.forEach.call(this.element.querySelectorAll(".product-single__thumbnail:not(.swiper-slide-duplicate)"), (media_root) => {
					var media = new Media(this.theme, media_root, this.isFeaturedProduct ? media_root : this.mediaTarget, autoload);
					this.mediaById.set(media_root.dataset.mediaId, media); // Enable/disable drag to next slide when media is paused/playing

					media_root.addEventListener("media-play", () => {
						this.slider.allowTouchMove = false;
					});
					media_root.addEventListener("media-pause", () => {
						this.slider.allowTouchMove = true;
					});
				});
				this.has3dModel = this.element.querySelectorAll(".product-single__view-in-space");

				if (this.has3dModel.length > 0) {
					// The "View in your space" button is there => we have a model. Load XR library so
					// it can show/hide the button based on browser/device support
					window.Shopify.loadFeatures([
						{
							name: "shopify-xr",
							version: "1.0",
						},
					]);
				} // Load secondary media

				this.loadSecondaryMedia();
				window.addEventListener("resize", self.loadSecondaryMedia); // Add to cart click.

				if (this.cart) {
					this.cart.addEventListener("click", (e) => {
                        let form = e.target.closest('form');
                        let location = form.querySelector('select[name="properties[location]"]');
                        if(location && (location.value == "" || !location.value)){
                            return; 
                        }
						e.preventDefault();
						self.disableCartButton();
						self.addToCart();
						let featuredProductSubmit = this.cart.dataset.submitType;

						if (featuredProductSubmit) {
							setTimeout(() => {
								location.reload();
							}, 1000);
						}
					});
				} // Handle thumbnail and media click

				this.thumbnails.forEach((thumbnail) => {
					thumbnail.addEventListener("keydown", (e) => {
						self.handleThumbnailMediaClick(e);
					});
					thumbnail.addEventListener("click", (e) => {
						self.handleThumbnailMediaClick(e);
					});
				});
				this.quantityControls = new QuantityControls(this.theme, this.element); // Handle out of stock email form on page load

				if (!this.isAvailable) {
					let oosForm = document.querySelector(".variant-out-of-stock");

					if (oosForm) {
						oosForm.style.display = "block";
					}
				} // Run store availablity on page load

				const productBox = document.getElementById("product-box");
				const selectedVar = productBox.getAttribute("data-selected-variant");
				let defaultVariantId;

				if (!selectedVar) {
					return;
				} else {
					defaultVariantId = selectedVar;
				}

				self.storeAvailability(defaultVariantId, self.product.title);
				this.responsiveTables();
				this.applyMasonryLayout();
				window.addEventListener("resize", this.applyMasonryLayout);
			}
		}

		function toHandle(o) {
			return o.toLowerCase().replace(/[()]/g, "").replace(/[\W]/g, "-");
		}

		function fixThumbSliderTabindex(slider) {
			// Only make thumbnails from current view tab-navigable
			var slidesPerView = slider.slidesPerViewDynamic();
			var activeStart = slider.activeIndex;
			var activeEnd = activeStart + slidesPerView;
			Array.from(slider.slides).forEach((slide, index) => {
				var tabindex = index >= activeStart && index < activeEnd ? "0" : "-1";
				var icon = slide.querySelector(".product-single__media__icon");

				if (icon) {
					icon.setAttribute("tabindex", tabindex);
				}

				const tabindexes = slide.querySelectorAll(".product-single__media__icon, button, model-viewer, input:not([hidden]), .plyr, iframe, a, select, textarea");
				tabindexes.forEach((tabitem) => {
					tabitem.tabIndex = tabindex;
				});
			});
		} // CONCATENATED MODULE: ./src/javascripts/sections/FeaturedProduct.js
		class FeaturedProduct extends Product {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad, true);

				this.loadQuickAdd = () => {
					this.quickAddButtons = new QuickAdd(this.theme, this.element);
				};

				this.loadQuickAdd();
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/ProductRecommendations.js
		class ProductRecommendations extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);

				this.load = () => {
					// Read product id from data attribute
					var productId = this.element.dataset.productId; // Read limit from data attribute

					var limit = this.element.dataset.limit; // Build request URL

					var requestUrl = `${this.element.dataset.recommendationsUrl}?section_id=${this.element.dataset.sectionId}&limit=${limit}&product_id=${productId}`; // Create request and submit it using Ajax

					var request = new XMLHttpRequest();
					request.open("GET", requestUrl);

					request.onload = () => this.onLoad(request);

					request.send();
				};

				this.onLoad = (request) => {
					if (request.status >= 200 && request.status < 300) {
						var container = document.createElement("div");
						container.innerHTML = request.response;
						this.element.parentElement.innerHTML = container.querySelector(".product-recommendations").innerHTML;
					} else {
						console.warn("Recommend products cannot be loaded:", request.responseText);
					}
				};

				this.load();
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/Parallax.js
		class Parallax_Parallax extends Component {
			constructor(theme, element) {
				super(theme, element);

				this.onWindowResize = () => {
					var imgMinHeight = this.img_styles.getPropertyValue("min-height");
					var multiplier = parseFloat(imgMinHeight) / 100.0;
					this.img_height = this.el_height * multiplier;
					this.container_height = (this.element.clientHeight > 0 ? this.element.clientHeight : this.img_height) || 500; // Parallax is disabled on mobile

					this.active = !window.matchMedia("screen and (max-width: 767px)").matches;
					this.update();
				};

				this.update = () => {
					if (!this.active) {
						this.img.style.transform = "";

						if (this.placeholder_svg) {
							this.placeholder_svg.style.height = "auto";
						}

						return;
					}

					var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
					var parallax_dist = this.img_height - this.container_height;
					var top = this.element.getBoundingClientRect().top + scrollTop;
					var bottom = top + this.container_height;
					var windowHeight = window.innerHeight;
					var windowBottom = scrollTop + windowHeight;
					var percentScrolled = (windowBottom - top) / (this.container_height + windowHeight);
					var parallax = parallax_dist * percentScrolled;
					if (this.placeholder_svg) parallax = parallax * 2;

					if (bottom > scrollTop && top < scrollTop + windowHeight) {
						this.img.style.transform = "translate3D(-50%," + parallax + "px, 0)";
					}
				};

				this.theme = theme;
				this.element = element;
				this.el_height = this.element.clientHeight;
				this.img = this.element.querySelector(".img");
				this.placeholder_svg = this.img.querySelector(".icon--placeholder");
				this.img_styles = window.getComputedStyle(this.img);
				this.active = false; // Wait for image load

				var self = this;
				var imgBgimage = this.img_styles.getPropertyValue("background-image");

				if (imgBgimage && imgBgimage !== "none") {
					var imageUrl = imgBgimage.slice(4, -1).replace(/["']/g, "");
					var image = document.createElement("img");
					image.src = imageUrl;

					image.onload = function (e) {
						self.onWindowResize();
						self.img.style.display = "block";
					};
				} else if (this.placeholder_svg) {
					this.onWindowResize();
					this.img.style.display = "block";
				}

				window.addEventListener("scroll", this.update.bind(this), {
					capture: true,
					passive: true,
				});
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/Image.js
		class Image extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);
				const parallaxEl = element.querySelector(".parallax");

				if (parallaxEl) {
					this.parallax = new Parallax_Parallax(theme, parallaxEl);
				}
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/ImageWithTextOverlay.js
		class ImageWithTextOverlay extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);
				const parallaxEl = element.querySelector(".parallax");

				if (parallaxEl) {
					this.parallax = new Parallax_Parallax(theme, parallaxEl);
				}
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/ImageWithTextBlock.js
		class ImageWithTextBlock extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);

				this.resizeSection = () => {
					const sectionHeight = this.element.getBoundingClientRect().height;
					const textWrapperHeight = this.textWrapper.getBoundingClientRect().height;
					const offset = 100; // relates to 50px margin above and below text wrapper

					if (this.image && textWrapperHeight > sectionHeight - offset) {
						this.element.style.height = `${textWrapperHeight + offset}px`;
					}

					if (this.image && textWrapperHeight > sectionHeight - offset) {
						this.image.style.height = `${textWrapperHeight + offset}px`;
					}
				};

				this.element = element;
				this.textWrapper = this.element.querySelector(".homepage-image-text-block--text-wrapper");
				this.image = this.element.querySelector(".feature-row__image");
				this.resizeSection(); // allows tall text content to be contained within the image

				const self = this;
				window.addEventListener("resize", function () {
					self.resizeSection();
				});
			}
		} // CONCATENATED MODULE: ./node_modules/ajaxinate/src/ajaxinate.js
		/* @preserve
		 * https://github.com/Elkfox/Ajaxinate
		 * Copyright (c) 2017 Elkfox Co Pty Ltd (elkfox.com)
		 * MIT License (do not remove above copyright!)
		 */

		/* Configurable options;
		 *
		 * method: scroll or click
		 * container: selector of repeating content
		 * pagination: selector of pagination container
		 * offset: number of pixels before the bottom to start loading more on scroll
		 * loadingText: 'Loading', The text shown during when appending new content
		 * callback: null, callback function after new content is appended
		 *
		 * Usage;
		 *
		 * import {Ajaxinate} from 'ajaxinate';
		 *
		 * new Ajaxinate({
		 *   offset: 5000,
		 *   loadingText: 'Loading more...',
		 * });
		 */

		/* eslint-env browser */
		function Ajaxinate(config) {
			const settings = config || {};

			const defaults = {
				method: "scroll",
				container: "#AjaxinateContainer",
				pagination: "#AjaxinatePagination",
				offset: 0,
				loadingText: "Loading",
				callback: null,
			};

			// Merge custom configs with defaults
			this.settings = Object.assign(defaults, settings);

			// Functions
			this.addScrollListeners = this.addScrollListeners.bind(this);
			this.addClickListener = this.addClickListener.bind(this);
			this.checkIfPaginationInView = this.checkIfPaginationInView.bind(this);
			this.preventMultipleClicks = this.preventMultipleClicks.bind(this);
			this.removeClickListener = this.removeClickListener.bind(this);
			this.removeScrollListener = this.removeScrollListener.bind(this);
			this.removePaginationElement = this.removePaginationElement.bind(this);
			this.destroy = this.destroy.bind(this);

			// Selectors
			this.containerElement = document.querySelector(this.settings.container);
			this.paginationElement = document.querySelector(this.settings.pagination);
			this.initialize();
		}

		Ajaxinate.prototype.initialize = function initialize() {
			if (!this.containerElement) {
				return;
			}

			const initializers = {
				click: this.addClickListener,
				scroll: this.addScrollListeners,
			};

			initializers[this.settings.method]();
		};

		Ajaxinate.prototype.addScrollListeners = function addScrollListeners() {
			if (!this.paginationElement) {
				return;
			}

			document.addEventListener("scroll", this.checkIfPaginationInView);
			window.addEventListener("resize", this.checkIfPaginationInView);
			window.addEventListener("orientationchange", this.checkIfPaginationInView);
		};

		Ajaxinate.prototype.addClickListener = function addClickListener() {
			if (!this.paginationElement) {
				return;
			}

			this.nextPageLinkElement = this.paginationElement.querySelector("a");
			this.clickActive = true;

			if (typeof this.nextPageLinkElement !== "undefined" && this.nextPageLinkElement !== null) {
				this.nextPageLinkElement.addEventListener("click", this.preventMultipleClicks);
			}
		};

		Ajaxinate.prototype.preventMultipleClicks = function preventMultipleClicks(event) {
			event.preventDefault();

			if (!this.clickActive) {
				return;
			}

			this.nextPageLinkElement.innerText = this.settings.loadingText;
			this.nextPageUrl = this.nextPageLinkElement.href;
			this.clickActive = false;

			this.loadMore();
		};

		Ajaxinate.prototype.checkIfPaginationInView = function checkIfPaginationInView() {
			const top = this.paginationElement.getBoundingClientRect().top - this.settings.offset;
			const bottom = this.paginationElement.getBoundingClientRect().bottom + this.settings.offset;

			if (top <= window.innerHeight && bottom >= 0) {
				this.nextPageLinkElement = this.paginationElement.querySelector("a");
				this.removeScrollListener();

				if (this.nextPageLinkElement) {
					this.nextPageLinkElement.innerText = this.settings.loadingText;
					this.nextPageUrl = this.nextPageLinkElement.href;

					this.loadMore();
				}
			}
		};

		Ajaxinate.prototype.loadMore = function loadMore() {
			this.request = new XMLHttpRequest();

			this.request.onreadystatechange = function success() {
				if (!this.request.responseXML) {
					return;
				}
				if (!this.request.readyState === 4 || !this.request.status === 200) {
					return;
				}

				const newContainer = this.request.responseXML.querySelectorAll(this.settings.container)[0];
				const newPagination = this.request.responseXML.querySelectorAll(this.settings.pagination)[0];

				this.containerElement.insertAdjacentHTML("beforeend", newContainer.innerHTML);

				if (typeof newPagination === "undefined") {
					this.removePaginationElement();
				} else {
					this.paginationElement.innerHTML = newPagination.innerHTML;

					if (this.settings.callback && typeof this.settings.callback === "function") {
						this.settings.callback(this.request.responseXML);
					}

					this.initialize();
				}
			}.bind(this);

			this.request.open("GET", this.nextPageUrl);
			this.request.responseType = "document";
			this.request.send();
		};

		Ajaxinate.prototype.removeClickListener = function removeClickListener() {
			this.nextPageLinkElement.removeEventListener("click", this.preventMultipleClicks);
		};

		Ajaxinate.prototype.removePaginationElement = function removePaginationElement() {
			this.paginationElement.innerHTML = "";
			this.destroy();
		};

		Ajaxinate.prototype.removeScrollListener = function removeScrollListener() {
			document.removeEventListener("scroll", this.checkIfPaginationInView);
			window.removeEventListener("resize", this.checkIfPaginationInView);
			window.removeEventListener("orientationchange", this.checkIfPaginationInView);
		};

		Ajaxinate.prototype.destroy = function destroy() {
			const destroyers = {
				click: this.removeClickListener,
				scroll: this.removeScrollListener,
			};

			destroyers[this.settings.method]();

			return this;
		};

		/* harmony default export */ const ajaxinate = /* unused pure expression or super */ null && Ajaxinate; // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/javascripts/components/Dropdown.vue?vue&type=template&id=e34664f8&

		var render = function () {
			var _vm = this;
			var _h = _vm.$createElement;
			var _c = _vm._self._c || _h;
			return _c("div", { ref: "component", staticClass: "wetheme-dropdown", class: ["fit-" + this.fit, _vm.isOpen ? "wetheme-dropdown--open" : "wetheme-dropdown--closed", "wetheme-dropdown--" + _vm.direction] }, [
				_vm.title ? _c("label", { staticClass: "wetheme-dropdown__label", attrs: { for: _vm.id }, domProps: { textContent: _vm._s(_vm.title) }, on: { click: _vm.toggleDropdown } }) : _vm._e(),
				_vm._v(" "),
				_c(
					"div",
					{ staticClass: "wetheme-dropdown__wrapper" },
					[
						_c(
							"button",
							{
								ref: "button",
								staticClass: "alt-focus",
								attrs: { type: "button", readonly: "true", id: _vm.id + "-button", "aria-haspopup": "listbox", "aria-label": _vm.buttonLabel },
								on: {
									click: _vm.toggleDropdown,
									keydown: [
										function ($event) {
											if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
												return null;
											}
											$event.preventDefault();
											return _vm.toggleDropdown.apply(null, arguments);
										},
										function ($event) {
											if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
												return null;
											}
											$event.preventDefault();
											return _vm.toggleDropdown.apply(null, arguments);
										},
										function ($event) {
											if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
												return null;
											}
											$event.preventDefault();
											return _vm.moveFocusedIndex(-1);
										},
										function ($event) {
											if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
												return null;
											}
											$event.preventDefault();
											return _vm.moveFocusedIndex(1);
										},
										function ($event) {
											if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
												return null;
											}
											$event.preventDefault();
											return _vm.close.apply(null, arguments);
										},
									],
								},
							},
							[_c("span", { domProps: { textContent: _vm._s(_vm.hasStaticBtnText ? _vm.buttonLabel : _vm.selectedOption.label || "\xa0") } })]
						),
						_vm._v(" "),
						_c("transition", { attrs: { name: "wetheme-dropdown-fade" } }, [
							_c(
								"ul",
								{
									directives: [{ name: "show", rawName: "v-show", value: _vm.isOpen, expression: "isOpen" }],
									ref: "ul",
									attrs: { id: _vm.dropdownId, role: "listbox", "aria-activedescendant": _vm.id + "_" + _vm.focusedOption, tabindex: "0" },
									on: {
										keydown: [
											function ($event) {
												if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) {
													return null;
												}
												$event.preventDefault();
												return _vm.moveFocusedIndex(-1);
											},
											function ($event) {
												if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) {
													return null;
												}
												$event.preventDefault();
												return _vm.moveFocusedIndex(1);
											},
											function ($event) {
												if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
													return null;
												}
												$event.preventDefault();
												return _vm.applyFocused(false);
											},
											function ($event) {
												if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
													return null;
												}
												$event.preventDefault();
												return _vm.applyFocused(false);
											},
											function ($event) {
												if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
													return null;
												}
												$event.preventDefault();
												return _vm.exitList.apply(null, arguments);
											},
										],
										blur: _vm.exitList,
									},
								},
								_vm._l(_vm.options, function (option) {
									return _c("li", {
										key: option.value,
										class: { selected: _vm.optionIsSelected(option) },
										attrs: { role: "option", id: _vm.id + "_" + option.value, value: option.value, "aria-selected": _vm.optionIsSelected(option) },
										domProps: { textContent: _vm._s(option.label) },
										on: {
											click: _vm.toggleDropdown,
											mousedown: function ($event) {
												return _vm.optionClicked(option);
											},
										},
									});
								}),
								0
							),
						]),
					],
					1
				),
			]);
		};
		var staticRenderFns = []; // CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/javascripts/components/Dropdown.vue?vue&type=script&lang=js&

		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//

		const getElementWidth = (el) => {
			var clone = el.cloneNode(true);
			clone.style.cssText = "position: fixed; top: 0; left: 0; overflow: auto; visibility: hidden; pointer-events: none; height: unset; max-height: unset";
			document.body.appendChild(clone);
			var width = clone.getBoundingClientRect().width;
			document.body.removeChild(clone);
			return width;
		};

		let dropdown_last_id = 0;
		/* harmony default export */ const Dropdownvue_type_script_lang_js_ = vue_runtime_esm.extend({
			props: {
				fit: {
					type: String,
					default: "parent",
					validator: function (value) {
						return ["parent", "current", "longest"].indexOf(value) !== -1;
					},
				},
				direction: {
					type: String,
					default: "down",
					validator: function (value) {
						return ["down", "up"].indexOf(value) !== -1;
					},
				},
			},
			data: function () {
				return {
					theme: null,
					id: "",
					title: "",
					isOpen: false,
					options: [],
					selectedOption: undefined,
					// focusedIndex is index of option that user navigated to using keyboard,
					// it's equal to index of selected option when keyboard was not used
					focusedIndex: 0,
					selectComponent: undefined,
				};
			},
			computed: {
				hasStaticBtnText: function () {
					if (this.id == "sort-by") return true;
					return false;
				},
				buttonLabel: function () {
					if (this.hasStaticBtnText) return this.title;
					return `${this.title} ${this.selectedOption.label}`;
				},
				dropdownId: function () {
					return this.id + "-dropdown";
				},
				focusedOption: function () {
					return this.options[this.focusedIndex].value;
				},
			},

			beforeMount() {
				// Convert a <select> and <label> into options and other properties
				const select = this.$root.$el.querySelector("select");

				if (select.id) {
					this.id = select.id;
				} else {
					dropdown_last_id += 1;
					this.id = "wetheme-dropdown-" + dropdown_last_id;
				}

				const labelEl = this.$root.$el.querySelector("label");
				this.title = labelEl ? labelEl.textContent : undefined;
				const options = [];
				Array.prototype.forEach.call(
					select.querySelectorAll("option"),
					function (option, index) {
						if (option.dataset.placeholder === undefined) {
							options.push({
								value: option.value,
								label: option.textContent,
							});
						}

						if (option.defaultSelected) {
							this.selectedOption = option;
							this.focusedIndex = index;
						}
					}.bind(this)
				);
				this.options = options;

				if (!this.selectedOption) {
					this.selectedOption = options[0];
					this.focusedIndex = 0;
				}

				this.selectWidth = getElementWidth(select);
				this.selectComponent = select;
				this.selectComponent.style.display = "none";
				select.addEventListener("input", this.onSelectChange);
				select.addEventListener("change", this.onSelectChange);
			},

			mounted: function () {
				if (this.fit === "longest") {
					const w = this.selectWidth + 20; // 20px for caret

					this.$el.style.width = w + "px";
					this.$refs.ul.style.width = w + "px";
				}

				this.$el.appendChild(this.selectComponent);
			},
			methods: {
				findOptionIndex: function (option) {
					let index;
					this.options.forEach(function (o, i) {
						if (o.value === option.value) {
							index = i;
						}
					});
					return index;
				},
				optionClicked: function (option) {
					this.selectedOption = option;
					this.focusedIndex = this.findOptionIndex(option);
					this.selectComponent.value = option.value;
					this.$nextTick(function () {
						// Emit the event when input value is already changed
						const e = new CustomEvent("change");
						this.selectComponent.dispatchEvent(e);
					});
				},
				moveFocusedIndex: function (offset) {
					const focusedIndex = this.focusedIndex + offset;

					if (focusedIndex >= 0 && focusedIndex < this.options.length) {
						this.focusedIndex = focusedIndex;
					} // document.getElementById( this.options[this.focusedIndex].value ).focus();

					if (!this.isOpen) {
						this.applyFocused(true);
					}
				},
				applyFocused: function (force) {
					if (!this.isOpen && !force) {
						this.isOpen = true;
						return;
					}

					this.optionClicked(this.options[this.focusedIndex]);
					this.isOpen = false;
				},
				close: function () {
					this.isOpen = false;
				},
				focusList: function () {
					this.$nextTick(function () {
						this.$refs.ul.focus();
					});
				},
				exitList: function () {
					this.isOpen = false;
					this.$refs.button.focus();
				},
				toggleDropdown: function () {
					this.isOpen = !this.isOpen;

					if (this.isOpen) {
						this.focusList();
					} else {
						this.$refs.button.focus();
					}
				},
				onSelectChange: function (e) {
					const val = this.selectComponent.value;

					if (val !== this.selectedOption.value) {
						let index;
						let option;
						this.options.forEach((o, i) => {
							if (val === o.value) {
								index = i;
								option = o;
							}
						});
						this.selectedOption = option;
						this.focusedIndex = index;
					}
				},
				optionIsSelected: function (option) {
					return option.value === this.options[this.focusedIndex].value;
				},
			},
		}); // CONCATENATED MODULE: ./src/javascripts/components/Dropdown.vue?vue&type=script&lang=js&
		/* harmony default export */ const components_Dropdownvue_type_script_lang_js_ = Dropdownvue_type_script_lang_js_; // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
		/* globals __VUE_SSR_CONTEXT__ */

		// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
		// This module is a runtime utility for cleaner component module output and will
		// be included in the final webpack user bundle.

		function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier /* server only */, shadowMode /* vue-cli only */) {
			// Vue.extend constructor export interop
			var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;

			// render functions
			if (render) {
				options.render = render;
				options.staticRenderFns = staticRenderFns;
				options._compiled = true;
			}

			// functional template
			if (functionalTemplate) {
				options.functional = true;
			}

			// scopedId
			if (scopeId) {
				options._scopeId = "data-v-" + scopeId;
			}

			var hook;
			if (moduleIdentifier) {
				// server build
				hook = function (context) {
					// 2.3 injection
					context =
						context || // cached call
						(this.$vnode && this.$vnode.ssrContext) || // stateful
						(this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
					// 2.2 with runInNewContext: true
					if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
						context = __VUE_SSR_CONTEXT__;
					}
					// inject component styles
					if (injectStyles) {
						injectStyles.call(this, context);
					}
					// register component module identifier for async chunk inferrence
					if (context && context._registeredComponents) {
						context._registeredComponents.add(moduleIdentifier);
					}
				};
				// used by ssr in case component is cached and beforeCreate
				// never gets called
				options._ssrRegister = hook;
			} else if (injectStyles) {
				hook = shadowMode
					? function () {
							injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
					  }
					: injectStyles;
			}

			if (hook) {
				if (options.functional) {
					// for template-only hot-reload because in that case the render fn doesn't
					// go through the normalizer
					options._injectStyles = hook;
					// register for functional component in vue file
					var originalRender = options.render;
					options.render = function renderWithStyleInjection(h, context) {
						hook.call(context);
						return originalRender(h, context);
					};
				} else {
					// inject component registration as beforeCreate hook
					var existing = options.beforeCreate;
					options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
				}
			}

			return {
				exports: scriptExports,
				options: options,
			};
		} // CONCATENATED MODULE: ./src/javascripts/components/Dropdown.vue

		/* normalize component */
		var component = normalizeComponent(components_Dropdownvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);

		/* harmony default export */ const Dropdown = component.exports; // CONCATENATED MODULE: ./src/javascripts/sections/Collection.js
		// Used on Collections for Infinite Scroll & Load More
		// Note:  This function is overriding the version in the npm package, because
		//        that version breaks in the Theme editor.
		//        Github issue reference: https://github.com/Elkfox/Ajaxinate/issues/26

		Ajaxinate.prototype.loadMore = function getTheHtmlOfTheNextPageWithAnAjaxRequest() {
			this.request = new XMLHttpRequest();

			this.request.onreadystatechange = function success() {
				var parser = new DOMParser();
				var htmlDoc = parser.parseFromString(this.request.responseText, "text/html");

				if (this.request.readyState === 4 && this.request.status === 200) {
					var newContainer = htmlDoc.querySelectorAll(this.settings.container)[0];
					var newPagination = htmlDoc.querySelectorAll(this.settings.pagination)[0];
					this.containerElement.insertAdjacentHTML("beforeend", newContainer.innerHTML);
					this.paginationElement.innerHTML = newPagination.innerHTML;

					if (this.settings.callback && typeof this.settings.callback === "function") {
						this.settings.callback(this.request.responseXML);
					}

					this.initialize();
				}
			}.bind(this);

			this.request.open("GET", this.nextPageUrl);
			this.request.overrideMimeType("text/html");
			this.request.send();
		};

		class Collection extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);

				this.init = () => {
					this.initParallax();
				};

				this.initParallax = () => {
					const parallaxEl = document.querySelector(".parallax");
					if (!parallaxEl) return;
					this.parallax = new Parallax_Parallax(this.theme, parallaxEl);
				};

				this.loadQuickAdd = () => {
					this.quickAddButtons = new QuickAdd(this.theme, this.element);
				};

				this.loadVueComponent = (element, tagName, Component) => {
					Array.prototype.forEach.call(document.querySelectorAll(`.js-collection-sort-by ${tagName}`), (el) => {
						const attr = {
							theme: this,
						};

						if (el.hasAttributes()) {
							var attrs = el.attributes;

							for (let i = attrs.length - 1; i >= 0; i--) {
								const { name, value } = attrs[i];

								if (value === "true") {
									attr[name] = true;
								} else if (value === "false") {
									attr[name] = false;
								} else {
									attr[name] = value;
								}
							}
						}

						const c = new vue_runtime_esm({
							el: el,
							render: (h) => {
								return h(Component, {
									attrs: attr,
								});
							},
						});
						this.vueComponents.push(c);
					});
				};

				this.loadPaging = () => {
					const isInfinite = document.getElementById("AjaxinateInfiniteScrolling");

					if (isInfinite) {
						new Ajaxinate({
							container: "#AjaxinateContainer",
							pagination: "#AjaxinateInfiniteScrolling",
							method: "scroll",
							loadingText: "Loading",
							offset: 500,
						});
						return;
					}

					const isLoadMore = document.getElementById("AjaxinateLoadMore");

					if (isLoadMore) {
						new Ajaxinate({
							container: "#AjaxinateContainer",
							pagination: "#AjaxinateLoadMore",
							method: "click",
							loadingText: "Loading",
						});
						return;
					}
				};

				this.loadTagFilter = () => {
					// Product Tag Filters - Good for any number of filters on any
					// type of collection pages
					const collFilters = document.querySelectorAll(".coll-filter");
					collFilters.forEach((collFilter) => {
						collFilter.addEventListener("change", (event) => {
							let newTags = [];
							collFilters.forEach(
								(
									/** @type {HTMLSelectElement} */
									currentFilter
								) => {
									const val = currentFilter.value;

									if (val) {
										newTags.push(val);
									}

									if (newTags.length) {
										const query = newTags.join("+");
										const genericLink = document.querySelector("#link-to-tag-generic a");
										const href = genericLink.href;
										window.location.href = href.replace(/\/tag($|\?)/, "/" + query + "$1");
									} else {
										const linkToCollection = document.getElementById("link-to-collection");
										window.location.href = linkToCollection.value.toString();
									}
								}
							);
						});
					});
				};

				this.mobileSidebar = () => {
					const mobileSidebarHeadings = document.querySelectorAll(".collection-sidebar--section h2");
					mobileSidebarHeadings.forEach((mobileSidebarHeading) => {
						mobileSidebarHeading.addEventListener("click", (event) => {
							const target = event.target;
							target.parentElement.classList.toggle("expanded");
						});
					});
				};

				this.pageLoad = pageLoad;
				this.init();

				if (window.Shopify.designMode) {
					document.addEventListener("shopify:section:load", this.init);
				} // Initialise Sort by Vue component

				/** Array of initialized vue components
				 * @type {Array<Object>}
				 */

				this.vueComponents = [];
				const _tagName = "wetheme-dropdown";
				const VueComponent = Dropdown;
				const gridElement = document.querySelector(`[data-wetheme-section-type=template--collection]`);
				this.loadQuickAdd();
				this.loadVueComponent(element, _tagName, VueComponent);
				this.loadTagFilter();
				this.mobileSidebar();
				this.loadPaging();
				document.addEventListener("paginate", this.loadPaging);
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/CollectionsList.js
		class CollectionsList extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);

				this.loadQuickAdd = () => {
					this.quickAddButtons = new QuickAdd(this.theme, this.element);
				};

				this.loadQuickAdd();
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/FeaturedCollection.js
		class FeaturedCollection extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);

				this.loadQuickAdd = () => {
					this.quickAddButtons = new QuickAdd(this.theme, this.element);
				};

				this.loadQuickAdd();
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/Cart.js
		class Cart extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);
				this.quantityControls = new QuantityControls(this.theme, this.element, true);
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/DeliveryPartners.js
		class DeliveryPartners extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);

				this.resizeSection = () => {
					const sectionHeight = this.element.getBoundingClientRect().height;
					const textWrapperHeight = this.textWrapper.getBoundingClientRect().height;
					const offset = 100; // relates to 50px margin above and below text wrapper

					if (textWrapperHeight > sectionHeight - offset) {
						this.element.style.height = `${textWrapperHeight + offset}px`;
					}

					if (this.image && textWrapperHeight > sectionHeight - offset) {
						this.image.style.height = `${textWrapperHeight + offset}px`;
					}
				};

				this.element = element;
				this.textWrapper = this.element.querySelector(".homepage-delivery-partners--text-wrapper");
				this.image = this.element.querySelector(".feature-row__image");
				this.resizeSection(); // allows tall text content to be contained within the image

				const self = this;
				window.addEventListener("resize", function () {
					self.resizeSection();
				});
			}
		} // CONCATENATED MODULE: ./src/javascripts/sections/SearchBlock.js
		class SearchBlock extends Section {
			constructor(theme, element, pageLoad) {
				super(theme, element, pageLoad);

				this.onSectionSelect = ({ element, sectionId, load }) => {
					this.theme.loadIcons();
				};

				this.theme = theme;
				this.element = element;
				this.theme.loadIcons();
				this.predictiveSearch = new PredictiveSearch(theme, element);
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/Newsletter.js
		class Newsletter {
			constructor(theme) {
				this.onSubmit = (event) => {
					event.preventDefault();
					var self = this;
					const form = event.target;
					const formData = new FormData(form);
					const formSpinner = form.querySelector(".newsletter-spinner");
					const inputWrapper = form.querySelector('#newsletter-wrapper, [id^="newsletter-wrapper"]');
					formSpinner.classList.remove("hide");
					if (inputWrapper) inputWrapper.classList.add("hide");
					fetch("/contact", {
						method: "post",
						body: formData,
					})
						.then((response) => {
							if (typeof response.url === "string" && response.url.includes("/challenge")) {
								form.removeEventListener("submit", self.onSubmit);
								form.submit();
								return false;
							} else {
								return response;
							}
						})
						.then((data) => {
							if (data !== false) {
								formSpinner.classList.add("hide");
								if (inputWrapper) inputWrapper.classList.remove("hide");
							}
						});
				};

				this.showAlert = (content) => {
					const pageAlert = document.createElement("div");
					pageAlert.classList.add("page-alert", "page-alert--hidden");
					pageAlert.append(content.cloneNode(true));
					document.body.append(pageAlert);
					const getPageAlert = document.querySelector(".page-alert");
					document.querySelectorAll(".success-msg").forEach((el) => el.classList.remove("hidden"));
					setTimeout(() => {
						getPageAlert.classList.remove("page-alert--hidden");
					}, 1000);
					setTimeout(() => {
						getPageAlert.classList.add("page-alert--hidden");
					}, 8000);
				};

				this.theme = theme; // Use AJAX for submitting the contact form

				this.forms = document.querySelector("#newsletter_footer_form, #newsletter_section_form");
				if (!this.forms) return;
				this.forms.addEventListener("submit", this.onSubmit);
				const success = document.querySelector("#newsletter_footer_form .form-success, #newsletter_section_form .form-success");
				const errors = document.querySelector("#newsletter_footer_form .errors, #newsletter_section_form .errors");

				if (errors && errors.length > 0 && errors[0].children.length > 0) {
					this.showAlert(errors[0]);
				} else if (success.length > 0) {
					this.showAlert(success[0]);
				}
			}
		} // CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/javascripts/components/Video.vue?vue&type=template&id=798ba14a&
		var Videovue_type_template_id_798ba14a_render = function () {
			var _vm = this;
			var _h = _vm.$createElement;
			var _c = _vm._self._c || _h;
			return _c("div", { ref: "video", staticClass: "video" }, [_vm.videoType === "mp4" ? _c("video", { ref: "videoMP4", staticClass: "hero-video-mp4", attrs: { playsinline: "", controls: "" } }, [_c("source", { attrs: { src: _vm.url, type: "video/mp4" } })]) : _vm._e()]);
		};
		var Videovue_type_template_id_798ba14a_staticRenderFns = []; // CONCATENATED MODULE: ./src/javascripts/global/VideoBase.js

		/**
		 * @typedef {Object} VideoParams
		 * @param {boolean} autoplay
		 * @param {boolean} mute
		 * @param {boolean} loop
		 * @param {boolean} hideControls
		 * @param {string} url
		 */
		class VideoBase {
			constructor(theme, element) {
				this.getAutoplay = (autoplay) => {
					// Autoplay if Save-Data is not set
					if ("connection" in navigator) {
						if (navigator.connection.saveData) {
							return false;
						}
					} // Autoplay if reduced motion is not set

					if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
						return false;
					} // Prevent autoplay on mobile devices

					if (window.matchMedia("only screen and (max-width: 768px)").matches) {
						return false;
					}

					return autoplay;
				};

				this._load = async function () {};

				this.init = (params) => {};

				this.play = () => {};

				this.pause = () => {};

				this.theme = theme;
				this.element = element;
			}
			/**
			 * Get autoplay with overrides
			 *
			 * @param {boolean} autoplay User autoplay preference
			 * @return {boolean}
			 */
		} // CONCATENATED MODULE: ./src/javascripts/global/Youtube.js
		/** Get ID of a youtube video from URL
		 * @param {string} url
		 * @return {string} youtube video ID
		 */

		const youtubeGetId = (url) => {
			const parts = url.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

			if (parts[2] !== undefined) {
				return parts[2].split(/[^0-9a-z_-]/i)[0];
			}

			return url;
		};
		class Youtube extends VideoBase {
			constructor(...args) {
				super(...args);

				this._load = () => {
					return this.theme.loadYoutubeApi();
				};

				this.init = ({ autoplay, hideControls, url, mute, loop, onPlay, onEnd, hero }) => {
					autoplay = this.getAutoplay(autoplay);
					const videoId = youtubeGetId(url);
					return new Promise((resolve) => {
						this._load().then((YT) => {
							this.player = new YT.Player(this.element, {
								videoId: videoId,
								playerVars: {
									showinfo: 0,
									modestbranding: 1,
									rel: 0,
									autoplay: autoplay ? 1 : 0,
									controls: hideControls ? 0 : 1,
									mute: mute || autoplay ? 1 : 0,
									playlist: videoId,
									cc_load_policy: 0,
									fs: 0,
									iv_load_policy: 3,
									playsinline: 1,
									branding: 0,
									origin: window.location.origin,
								},
								events: {
									onReady: (event) => {
										this.player = event.target;

										if (hero) {
											// Don't allow tab stops in autoplaying videos. Makes the video jump out of
											// its container when tabbing through page.
											const iframeKey = Object.keys(this.player).find((key) => this.player[key].tagName == "IFRAME");
											this.player[iframeKey].tabIndex = -1;
										}

										if (mute || autoplay) {
											this.player.mute();
										}

										if (autoplay) {
											// Force play just in case that the option didn't work
											this.player.playVideo();
										}

										resolve(this.player);
									},
									onStateChange: (event) => {
										if (event.data === YT.PlayerState.PLAYING) {
											onPlay();
										}

										if (event.data === YT.PlayerState.ENDED && loop) {
											this.player.playVideo();
											onEnd();
										}
									},
								},
							});
						});
					});
				};
			}
		} // CONCATENATED MODULE: ./src/javascripts/global/Vimeo.js
		/** Get ID of a vimeo video from URL
		 * @param {string} url
		 * @return {string} vimeo video ID
		 */

		function vimeoGetId(url) {
			const regex = /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/; // eslint-disable-line

			const parts = url.match(regex);

			if (parts && parts[2] !== undefined) {
				var vimeoID = parts[2];

				if (parts[2].includes("/")) {
					var bits = parts[2].split("/");
					vimeoID = bits[0];
				}

				return vimeoID;
			}

			return url;
		}

		class Vimeo extends VideoBase {
			constructor(...args) {
				super(...args);

				this._load = () => {
					return this.theme.loadVimeoApi();
				};

				this.init = ({ autoplay, hideControls, url, mute, loop, onPlay, onEnd, hero }) => {
					autoplay = this.getAutoplay(autoplay);
					const videoId = vimeoGetId(url);
					return new Promise((resolve, reject) => {
						this._load().then((Vimeo) => {
							this.player = new Vimeo.Player(this.element, {
								id: videoId,
								autoplay: autoplay,
								controls: !hideControls,
							});
							this.player.ready().then(() => {
								if (hero) {
									// Don't allow tab stops in autoplaying videos
									this.player.element.tabIndex = -1;
								}

								if (mute || autoplay) {
									this.player.setVolume(0);
								}

								if (loop) {
									this.player.setLoop(true);
								}

								if (autoplay) {
									this.player.play();
								}

								resolve(this.player);
							});
							this.player.on("play", () => {
								onPlay();
							});
							this.player.on("ended", () => {
								onEnd();
							});
						});
					});
				};
			}
			/*
      player.ready().then(function(){
          registerVideoPlayButton(element, 'vimeo', player, isVideoHero);
      }).catch(function (e) {
          document.getElementById(element.id).innerText = e;
      });
      */
		} // CONCATENATED MODULE: ./src/javascripts/global/MP4Video.js
		/// <reference path="../window.d.ts" />

		class MP4Video extends VideoBase {
			constructor(...args) {
				super(...args);

				this._load = () => {
					return new Promise((resolve) => {
						window.Shopify.loadFeatures([
							{
								name: "video-ui",
								version: "1.0",
								onLoad: function () {
									resolve(window.Shopify.Plyr);
								},
							},
						]);
					});
				};

				this.init = ({ autoplay, hideControls, url, mute, loop, onPlay, onEnd, hero }) => {
					autoplay = this.getAutoplay(autoplay);
					return new Promise((resolve, reject) => {
						this._load().then((Plyr) => {
							this.player = new Plyr(this.element, {
								loop: {
									active: loop,
								},
								autoplay: autoplay,
								muted: mute,
								fullscreen: {
									enabled: false,
								},
								focusOnPlay: false,
							});
							this.player.on("ready", (event) => {
								this.player = event.detail.plyr;

								if (hero) {
									this.player.elements.container.tabIndex = -1;
								}

								if (autoplay) {
									this.player.play();
								}

								if (hideControls) {
									// this.player.toggleControls(false);
									// Prevent hidden controls being keyboard-tab-able.
									this.player.media.closest(".plyr--video").querySelector(".plyr__controls").remove();
								}

								resolve();
							});
							this.player.on("playing", () => {
								onPlay();
							});
							this.player.on("ended", () => {
								onEnd();
							});
						});
					});
				};
			}
		} // CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/javascripts/components/Video.vue?vue&type=script&lang=js&
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//
		//

		/* harmony default export */ const Videovue_type_script_lang_js_ = vue_runtime_esm.extend({
			props: {
				theme: ThemeBase,
				hero: Boolean,
				videoType: {
					type: String,
					required: true,
					validator: function (value) {
						return ["youtube", "vimeo", "mp4", "invalid"].indexOf(value) !== -1;
					},
				},
				url: {
					type: String,
					required: true,
				},
				autoplay: {
					type: Boolean,
					required: true,
				},
				loop: Boolean,
				mute: Boolean,
				hideControls: {
					type: Boolean,
					default: false,
				},
			},

			data() {
				return {
					/** @type {VideoBase} */
					player: null,
				};
			},

			mounted() {
				if (this.videoType === "youtube") {
					this.player = new Youtube(this.theme, this.$refs.video);
				} else if (this.videoType === "vimeo") {
					this.player = new Vimeo(this.theme, this.$refs.video);
				} else if (this.videoType === "mp4") {
					this.player = new MP4Video(this.theme, this.$refs.videoMP4);
				} else if (this.videoType === "invalid") {
					return;
				}

				this.player.init({
					autoplay: this.autoplay,
					hideControls: this.hideControls,
					url: this.url,
					mute: this.mute,
					loop: this.loop,
					onPlay: this.onPlay,
					onEnd: this.onEnd,
					hero: this.hero,
				});
			},

			methods: {
				onPlay() {},

				onEnd() {},
			},
		}); // CONCATENATED MODULE: ./src/javascripts/components/Video.vue?vue&type=script&lang=js&
		/* harmony default export */ const components_Videovue_type_script_lang_js_ = Videovue_type_script_lang_js_; // CONCATENATED MODULE: ./src/javascripts/components/Video.vue
		/* normalize component */
		var Video_component = normalizeComponent(components_Videovue_type_script_lang_js_, Videovue_type_template_id_798ba14a_render, Videovue_type_template_id_798ba14a_staticRenderFns, false, null, null, null);

		/* harmony default export */ const Video = Video_component.exports; // CONCATENATED MODULE: ./src/javascripts/Theme.js
		/**
		 * @typedef {Object} ShopifyEventDetail
		 * @property {string} sectionId
		 * @property {string} [blockId]
		 * @property {boolean} [load]
		 */

		/**
		 * @typedef {CustomEvent<ShopifyEventDetail>} ShopifyEvent
		 */

		class Theme extends ThemeBase {
			constructor() {
				super();
				this.RESIZE_DEBOUNCE_INTERVAL = 400;
				this.SECTIONS = {
					header: Header,
					footer: Footer,
					"collection--featured-collection": FeaturedCollection,
					"image--image": Image,
					"image--slideshow": Slideshow,
					"image--image-with-text-overlay": ImageWithTextOverlay,
					"image--image-with-text-block": ImageWithTextBlock,
					"product--featured-product": FeaturedProduct,
					"store-information--delivery-partners": DeliveryPartners,
					"template--collection": Collection,
					"template--collections-list": CollectionsList,
					"template--product": Product,
					"template--product--recommandations": ProductRecommendations,
					"template--cart": Cart,
					"text--testimonials": Testimonial,
					"text--text-adverts": TextAdverts,
					"video--video": Section,
					"video--video-with-text-overlay": Section,
					"search--block": SearchBlock,
				};
				this.VUE_COMPONENTS = {
					"wetheme-dropdown": Dropdown,
					"wetheme-video": Video,
				};

				this.loadDrawers = () => {
					if (!document.body.classList.contains("password-page")) {
						this.drawer = new Drawer(this);
						this.cartDrawer = this.drawer.slideouts.right ? new CartDrawer(this, this.drawer.slideouts.right.menu) : null;
					}
				};

				this.loadGlobal = () => {
					const globalEl = document.querySelector("#wetheme-global");

					if (!globalEl) {
						console.warn("Script #wetheme-global with global definitions not found");
						return;
					}

					let global;

					try {
						global = JSON.parse(globalEl.textContent);
					} catch (e) {
						console.warn("Invalid syntax in #wetheme-global", e);
						return;
					}

					this.translations = global.translations;
					this.moneyFormat = global.moneyFormat;
				};

				this.loadVueComponents = (element) => {
					Object.entries(this.VUE_COMPONENTS).forEach(([tagName, VueComponent]) => {
						this.loadVueComponent(element, tagName, VueComponent);
					});
				};

				this.loadVueComponent = (element, tagName, Component) => {
					Array.prototype.forEach.call(element.querySelectorAll(tagName), (el) => {
						const attr = {
							theme: this,
						};

						if (el.hasAttributes()) {
							var attrs = el.attributes;

							for (let i = attrs.length - 1; i >= 0; i--) {
								const { name, value } = attrs[i];

								if (value === "true") {
									attr[name] = true;
								} else if (value === "false") {
									attr[name] = false;
								} else {
									attr[name] = value;
								}
							}
						}

						const c = new vue_runtime_esm({
							el: el,
							render: (h) => {
								return h(Component, {
									attrs: attr,
								});
							},
						});
						this.vueComponents.push(c);
					});
				};

				this.loadSection = (element, SectionClass, pageLoad) => {
					const c = new SectionClass(this, element, pageLoad);
					this.sectionById.set(element.dataset.wethemeSectionId, c);
					const type = element.dataset.wethemeSectionType;
					let sections = this.sectionsByType.get(type);

					if (!sections) {
						sections = [];
						this.sectionsByType.set(type, sections);
					}

					sections.push(c);
					this.loadVueComponents(element);
				};

				this.loadSectionsByType = (type, SectionClass, pageLoad) => {
					const selector = `[data-wetheme-section-type="${type}"]`;
					Array.prototype.forEach.call(document.querySelectorAll(selector), (element) => {
						try {
							this.loadSection(element, SectionClass, pageLoad);
						} catch (e) {
							console.error(`Unable to load section ${type} on element`, element, e);
						}
					});
				};

				this.onLoadAll = () => {
					this.load();
					Object.entries(this.SECTIONS).forEach(([type, SectionClass]) => {
						this.loadSectionsByType(type, SectionClass, true);
					});
				};

				this.onSectionLoad = (event) => {
					const { sectionId } = event.detail;
					const selector = `[data-wetheme-section-id="${sectionId}"]`;
					const element = document.querySelector(selector);

					if (!element) {
						console.warn(`Element with ${selector} not found, section won't be loaded`);
						return;
					}

					const type = element.dataset.wethemeSectionType;
					const SectionClass = this.SECTIONS[type];

					if (!SectionClass) {
						console.warn(`Cannot find class with type "${type}"`);
						return;
					}

					this.loadSection(element, SectionClass, false);
				};

				this.onSectionUnload = (event) => {
					const element = event.target;
					const { sectionId } = event.detail;
					const section = this.sectionById.get(sectionId);

					if (!section) {
						console.warn(`No section with id ${sectionId}, nothing will be unloaded`);
						return;
					}

					section.destroy({
						element,
					});
				};

				this.onSectionSelect = (event) => {
					const element = event.target;
					const { sectionId, load } = event.detail;
					const section = this.sectionById.get(sectionId);

					if (!section) {
						console.warn(`No section with id ${sectionId}, nothing will be selected`);
						return;
					}

					section.onSectionSelect({
						element,
						sectionId,
						load,
					});
				};

				this.onSectionDeselect = (event) => {
					const element = event.target;
					const { sectionId } = event.detail;
					const section = this.sectionById.get(sectionId);

					if (!section) {
						console.warn(`No section with id ${sectionId}, nothing will be deselected`);
						return;
					}

					section.onSectionDeselect({
						element,
						sectionId,
					});
				};

				this.onSectionReorder = (event) => {
					const element = event.target;
					const { sectionId } = event.detail;
					const section = this.sectionById.get(sectionId);

					if (!section) {
						console.warn(`No section with id ${sectionId}, nothing will be done on reorder`);
						return;
					}

					section.onSectionReorder({
						element,
						sectionId,
					});
				};

				this.onBlockSelect = (event) => {
					const element = event.target;
					const { sectionId, blockId, load } = event.detail;
					const section = this.sectionById.get(sectionId);

					if (!section) {
						console.warn(`No section with id ${sectionId}, block select will do nothing`);
						return;
					}

					section.onBlockSelect({
						element,
						sectionId,
						blockId,
						load,
					});
				};

				this.onBlockDeselect = (event) => {
					const element = event.target;
					const { sectionId, blockId } = event.detail;
					const section = this.sectionById.get(sectionId);

					if (!section) {
						console.warn(`No section with id ${sectionId}, block deselect will do nothing`);
						return;
					}

					section.onBlockDeselect({
						element,
						sectionId,
						blockId,
					});
				};

				this.onResize = (event) => {
					const width = this.getWindowWidth();
					const oldWidth = this.previousWidth; // Trigger non-debounced event on all components

					this.registeredComponents.forEach((c) =>
						c.onWindowResizeRaw({
							width,
						})
					); // Trigger debounced event on all sections

					if (this.resizeDebounceTimer) {
						clearTimeout(this.resizeDebounceTimer);
					}

					this.resizeDebounceTimer = setTimeout(() => {
						this.resizeDebounceTimer = null;
						const breakpoint = this.getBreakpoint(width);
						this.registeredComponents.forEach((c) => {
							c.onWindowResize({
								width,
								oldWidth,
								breakpoint,
							});

							if (breakpoint !== this.breakpoint) {
								// Breakpoint has changed, trigger the event
								c.onWindowResizeBreakpoint({
									breakpoint,
									oldBreakpoint: this.breakpoint,
									width,
								});
							}
						});
						this.previousWidth = width;
						this.breakpoint = breakpoint;
					}, this.RESIZE_DEBOUNCE_INTERVAL);
				};

				this.loadIcons = (element = null) => {
					const parent = element || document; // If we use wrong icon, whole feather will crash and no further icons will be loaded
					// this will check if icons are vaild and will remove the feather if not

					var icons = Object.keys(feather_default().icons);
					Array.prototype.forEach.call(parent.querySelectorAll("[data-feather]"), function (el) {
						var icon = el.dataset.feather;

						if (icons.indexOf(icon) < 0) {
							console.warn('No such icon "' + icon + '" in feather, element', el);
							el.dataset.featherInvalid = icon;
							delete el.dataset.feather;
						}
					});

					try {
						feather_default().replace();
					} catch (e) {
						console.error("Unable to load icons:", e);
					}
				};

				this.handleAccordions = () => {
					let detailsElements = document.querySelectorAll("details");

					for (let item of detailsElements) {
						item.addEventListener("click", (e) => {
							const target = e.currentTarget;
							setTimeout(() => {
								const isExpanded = item.open ? "true" : "false";
								item.firstElementChild.setAttribute("aria-expanded", isExpanded);
							}, 0);
						});
					}
				};

				this.loadYoutubeApi = () => {
					return new Promise((resolve, reject) => {
						if (window.YT) {
							// We already have youtube API loaded, we're done
							resolve(window.YT);
						} else if (!document.querySelector("#youtube_api")) {
							// Resolve once youtube is loaded
							this.youtubeLoadedCallbacks.push({
								resolve,
								reject,
							});
							const embedContainer = document.querySelectorAll(".embed-container")[0];
							const editorOpen = document.querySelector("#main-body").dataset.editorOpen;

							var isInViewport = function isInViewport(el) {
								const rect = el.getBoundingClientRect();
								return rect.top >= 101 && rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
							};

							var visibleElement = function visibleElement(el) {
								const section = el.offsetTop;
								return section;
							};

							if (embedContainer && editorOpen == "false") {
								let isVisible = visibleElement(embedContainer);
								let isInView = isInViewport(embedContainer); //Check if the video section is visible on initial load

								if (isVisible > 10 && isVisible <= 100) {
									// Youtube API is not yet loaded, create script that loads it
									this.createScript("youtube_api", "https://www.youtube.com/player_api", true);
								} else {
									document.addEventListener(
										"scroll",
										function () {
											if (isInView) {
												// Youtube API is not yet loaded, create script that loads it
												this.createScript("youtube_api", "https://www.youtube.com/player_api", true);
											}
										}.bind(this),
										{
											passive: true,
										}
									);
								}
							} else {
								// Youtube API is not yet loaded, create script that loads it
								this.createScript("youtube_api", "https://www.youtube.com/player_api", true);
							}
						} else {
							// Script for loading youtube API is there, but youtube is not yet loaded
							this.youtubeLoadedCallbacks.push({
								resolve,
								reject,
							});
						}
					});
				};

				this.onYoutubeLoaded = () => {
					this.youtubeLoadedCallbacks.forEach(({ resolve }) => {
						resolve(window.YT);
					});
					this.youtubeLoadedCallbacks.splice(0);
				};

				this.loadVimeoApi = () => {
					return new Promise((resolve, reject) => {
						if (window.Vimeo) {
							// Already loaded
							resolve(window.Vimeo);
						} else if (!document.querySelector("#vimeo_api")) {
							// Vimeo API is not yet loaded, create script that loads it
							const script = this.createScript("vimeo_api", "https://player.vimeo.com/api/player.js");

							script.onload = () => {
								resolve(window.Vimeo);
								this.onVimeoLoaded();
							};
						} else {
							this.vimeoLoadedCallbacks.push({
								resolve,
								reject,
							});
						}
					});
				};

				this.onVimeoLoaded = () => {
					this.vimeoLoadedCallbacks.forEach(({ resolve }) => {
						resolve(window.Vimeo);
					});
					this.vimeoLoadedCallbacks.splice(0);
				};

				this._loadCartKey = () => {
					const cerberusKey = "18a865da-09b5-45c8-97bf-462fa0b70cb3";
					return cerberusKey;
				};

				this.updateCartDrawer = (cart) => {
					if (!this.cartDrawer) {
						return;
					}

					this.cartDrawer.updateCartDrawer(cart);
				};

				this.createScript = (id, src, async = false) => {
					const tag = document.createElement("script");
					tag.id = id;
					tag.src = src;

					if (async) {
						tag.defer = true;
						tag.async = true;
					}

					const firstScriptTag = document.getElementsByTagName("script")[0];
					firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
					return tag;
				};

				this.registerComponent = (component) => {
					this.registeredComponents.push(component);
				};

				this.makeVideoEmbedsResponsive = () => {
					const iframes = document.querySelectorAll(".template-page iframe, .template-blog iframe, .template-article iframe");
					iframes.forEach(
						(
							/** @type {HTMLIFrameElement} */
							iframe
						) => {
							const source = iframe.src;

							if (source.indexOf("youtube.com") >= 0 || source.indexOf("vimeo.com") >= 0 || source.indexOf("dailymotion.com") >= 0) {
								let embedWrapper = document.createElement("div");
								embedWrapper.classList.add("embed-container");
								iframe.parentNode.insertBefore(embedWrapper, iframe);
								embedWrapper.appendChild(iframe);
							}
						}
					);
				};

				this.fetchSection = (url, section_id, el, callback) => {
					fetchSection(url, section_id, el, callback);
				};

				this.sessionHandler = sessionStorageHandlers({
					WTcartType: document.body.dataset.cartType,
				});
				this.name = "Inspire";
				/* Section by it's unique ID
				 * @type {Map<string, Section>}
				 */

				this.sectionById = new Map();
				/** Array of sections by given section type
				 * @type {Map<string, Section[]>}
				 */

				this.sectionsByType = new Map();
				/** Array of registed components
				 * @type {Array<import('./Component').default>}
				 */

				this.registeredComponents = [];
				/** Array of initialized vue components
				 * @type {Array<Object>}
				 */

				this.vueComponents = [];
				/** @type {Array<{ resolve: (YoutubeApi) => void, reject: (string) => void }>} */

				this.youtubeLoadedCallbacks = [];
				/** @type {Array<{ resolve: (VimeoApi) => void, reject: (string) => void }>} */

				this.vimeoLoadedCallbacks = [];
				this.resizeDebounceTimer = null;
				document.addEventListener("shopify:section:load", this.onSectionLoad);
				document.addEventListener("shopify:section:unload", this.onSectionUnload);
				document.addEventListener("shopify:section:select", this.onSectionSelect);
				document.addEventListener("shopify:section:deselect", this.onSectionDeselect);
				document.addEventListener("shopify:section:reorder", this.onSectionReorder);
				document.addEventListener("shopify:block:select", this.onBlockSelect);
				document.addEventListener("shopify:block:deselect", this.onBlockDeselect);
				document.addEventListener("DOMContentLoaded", this.onLoadAll);
				window.addEventListener("resize", this.onResize);
			}
			/** This will be execute when whole DOM is loaded */

			load() {
				this.loadGlobal();
				this.breakpoint = this.getBreakpoint();
				this.wow = new (wow_default())().init();
				this.loadDrawers();
				this.popup = null;
				const popupEl = document.querySelector("#popup");

				if (popupEl && window.location.pathname !== "/challenge") {
					// Don't show popup when we're filling CAPTCHA for contact form
					this.popup = new Popup(this, popupEl);
				}

				this.ageCheck = null;
				const ageEl = document.querySelector(".verification-popup-container");

				if (ageEl && window.location.pathname !== "/challenge") {
					// Don't show age-checker when we're filling CAPTCHA for contact form
					this.ageCheck = new AgeChecker(this, ageEl);
				}

				this.loadIcons();
				this.handleAccordions(); // Newsletter form could be on contact-us page, so outside of sections

				this.newsletter = new Newsletter(this); // Login page doesn't have sections, load it here

				if (document.body.classList.contains("template-customers-login")) {
					this.login = new LoginPage(this);
				}

				if (document.body.classList.contains("template-search")) {
					this.searchPage = new SearchPage(this, document.querySelector("#search_results"));
				}

				if (document.body.classList.contains("template-customers-addresses")) {
					this.addressPage = new AddressPage(this, document.querySelector("#addresses"));
				} // This is for all video embeds, even outside sections

				this.makeVideoEmbedsResponsive();
			}
		} // Make the theme object instance globally available

		window.wetheme = new Theme();

		window.onYouTubePlayerAPIReady = () => {
			window.wetheme.onYoutubeLoaded();
		};
	})();

	/******/
})();
//# sourceMappingURL=theme.js.map
