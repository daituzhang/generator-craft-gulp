/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + ({"0":"app"}[chunkId]||chunkId) + "-" + {"0":"eaac24e0b839bedb42fb"}[chunkId] + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(exports) {
	
	  'use strict';
	
	  var device = function(userAgent, classContainer) {
	
	    var device = {};
	
	    var docElement = classContainer || window.document.documentElement;
	    userAgent = (userAgent || window.navigator.userAgent).toLowerCase();
	
	    function find(needle) {
	      return userAgent.indexOf(needle) !== -1;
	    }
	
	    function hasClass(className) {
	      var regex;
	      regex = new RegExp(className, 'i');
	      return docElement.className.match(regex);
	    }
	
	    function addClass(className) {
	      if (!hasClass(className)) {
	        docElement.className += ' ' + className;
	      }
	    }
	
	    function removeClass(className) {
	      if (hasClass(className)) {
	        docElement.className = docElement.className.replace(className, '');
	      }
	    }
	
	    function getFirstMatch(regex) {
	      var match = userAgent.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    device.ios = function() {
	      return device.iphone() || device.ipod() || device.ipad();
	    };
	
	    device.iphone = function() {
	      return find('iphone');
	    };
	
	    device.ipod = function() {
	      return find('ipod');
	    };
	
	    device.ipad = function() {
	      return find('ipad');
	    };
	
	    device.android = function() {
	      return find('android');
	    };
	
	    device.androidPhone = function() {
	      return device.android() && find('mobile');
	    };
	
	    device.androidTablet = function() {
	      return device.android() && !find('mobile');
	    };
	
	    device.blackberry = function() {
	      return find('blackberry') || find('bb10') || find('rim');
	    };
	
	    device.blackberryPhone = function() {
	      return device.blackberry() && !find('tablet');
	    };
	
	    device.blackberryTablet = function() {
	      return device.blackberry() && find('tablet');
	    };
	
	    device.windows = function() {
	      return find('windows');
	    };
	
	    device.windowsPhone = function() {
	      return device.windows() && find('phone');
	    };
	
	    device.windowsTablet = function() {
	      return device.windows() && (find('touch') && !device.windowsPhone());
	    };
	
	    device.fxos = function() {
	      return (find('(mobile;') || find('(tablet;')) && find('; rv:');
	    };
	
	    device.fxosPhone = function() {
	      return device.fxos() && find('mobile');
	    };
	
	    device.fxosTablet = function() {
	      return device.fxos() && find('tablet');
	    };
	
	    device.meego = function() {
	      return find('meego');
	    };
	
	    device.cordova = function() {
	      return window.cordova && location.protocol === 'file:';
	    };
	
	    device.nodeWebkit = function() {
	      return typeof window.process === 'object';
	    };
	
	    device.bada = function() {
	      return find('bada');
	    };
	
	    device.mobile = function() {
	      return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
	    };
	
	    device.tablet = function() {
	      return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
	    };
	
	    device.desktop = function() {
	      return !device.tablet() && !device.mobile();
	    };
	
	    device.portrait = function() {
	      return (window.innerHeight / window.innerWidth) > 1;
	    };
	
	    device.landscape = function() {
	      return (window.innerHeight / window.innerWidth) < 1;
	    };
	
	    device.standAlone = function() {
	      return window.navigator.standalone === true;
	    };
	
	
	    device.addClasses = function() {
	
	      if (device._hasAddClasses) {
	        return;
	      }
	      device._hasAddClasses = true;
	
	      if (device.ios()) {
	        if (device.ipad()) {
	          addClass('ios ipad tablet');
	        } else if (device.iphone()) {
	          addClass('ios iphone mobile');
	        } else if (device.ipod()) {
	          addClass('ios ipod mobile');
	        }
	      } else if (device.android()) {
	        if (device.androidTablet()) {
	          addClass('android tablet');
	        } else {
	          addClass('android mobile');
	        }
	      } else if (device.blackberry()) {
	        if (device.blackberryTablet()) {
	          addClass('blackberry tablet');
	        } else {
	          addClass('blackberry mobile');
	        }
	      } else if (device.windows()) {
	        if (device.windowsTablet()) {
	          addClass('windows tablet');
	        } else if (device.windowsPhone()) {
	          addClass('windows mobile');
	        } else {
	          addClass('desktop');
	        }
	      } else if (device.fxos()) {
	        if (device.fxosTablet()) {
	          addClass('fxos tablet');
	        } else {
	          addClass('fxos mobile');
	        }
	      } else if (device.meego()) {
	        addClass('meego mobile');
	      } else if (device.nodeWebkit()) {
	        addClass('node-webkit');
	      } else {
	        addClass('desktop');
	      }
	
	      if (device.cordova()) {
	        addClass('cordova');
	      }
	
	      if (device.standAlone()) {
	        addClass('standalone');
	      }
	    };
	
	
	    // OS version extraction
	    var osVersion = '';
	    if (device.ios()) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (device.android()) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (device.windowsPhone()) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    }
	    /*else if (device.webos()) {
	          osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i); }*/
	    else if (device.blackberry()) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (device.bada()) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    }
	    /*else if (result.tizen) {
	          osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	        }*/
	
	    if (osVersion) {
	      device.osversion = osVersion;
	    }
	
	
	
	
	    device.addOrientationClasses = function() {
	
	      if (device.hasOrientationListener) {
	        return;
	      }
	
	      device.hasOrientationListener = true;
	
	      var onOrientationChange = function() {
	        if (device.landscape()) {
	          removeClass('portrait');
	          return addClass('landscape');
	        } else {
	          removeClass('landscape');
	          return addClass('portrait');
	        }
	      };
	
	      var orientationEvent = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	
	      if (window.addEventListener) {
	        window.addEventListener(orientationEvent, onOrientationChange, false);
	      } else if (window.attachEvent) {
	        window.attachEvent(orientationEvent, onOrientationChange);
	      } else {
	        window[orientationEvent] = onOrientationChange;
	      }
	
	      onOrientationChange();
	
	    };
	
	    return device;
	  };
	
	  (typeof module !== 'undefined' && module.exports) ? (module.exports = device) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return device;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : (exports.device = device));
	
	}(this));


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGQyOTQwYmUyNzE1ZTQ2ZjVjNjgiLCJ3ZWJwYWNrOi8vLy4vfi9kZXZpY2UuanMvZGV2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBZ0QsVUFBVSw2QkFBNkIsMkJBQTJCO0FBQ2xIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNEIsb0JBQW9CLGNBQWM7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzRUFBcUUsRUFBRTtBQUN2RTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVILEVBQUMiLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRjYWxsYmFja3MucHVzaC5hcHBseShjYWxsYmFja3MsIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKGNhbGxiYWNrcy5sZW5ndGgpXG4gXHRcdFx0Y2FsbGJhY2tzLnNoaWZ0KCkuY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0aWYobW9yZU1vZHVsZXNbMF0pIHtcbiBcdFx0XHRpbnN0YWxsZWRNb2R1bGVzWzBdID0gMDtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0Ly8gQXJyYXkgbWVhbnMgXCJsb2FkaW5nXCIsIGFycmF5IGNvbnRhaW5zIGNhbGxiYWNrc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTowXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkLCBjYWxsYmFjaykge1xuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKVxuIFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIGFuIGFycmF5IG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0ucHVzaChjYWxsYmFjayk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtjYWxsYmFja107XG4gXHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gXHRcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiMFwiOlwiYXBwXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLVwiICsge1wiMFwiOlwiZWFhYzI0ZTBiODM5YmVkYjQyZmJcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDhkMjk0MGJlMjcxNWU0NmY1YzY4XG4gKiovIiwiKGZ1bmN0aW9uKGV4cG9ydHMpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGRldmljZSA9IGZ1bmN0aW9uKHVzZXJBZ2VudCwgY2xhc3NDb250YWluZXIpIHtcblxuICAgIHZhciBkZXZpY2UgPSB7fTtcblxuICAgIHZhciBkb2NFbGVtZW50ID0gY2xhc3NDb250YWluZXIgfHwgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB1c2VyQWdlbnQgPSAodXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgZnVuY3Rpb24gZmluZChuZWVkbGUpIHtcbiAgICAgIHJldHVybiB1c2VyQWdlbnQuaW5kZXhPZihuZWVkbGUpICE9PSAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgIHZhciByZWdleDtcbiAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChjbGFzc05hbWUsICdpJyk7XG4gICAgICByZXR1cm4gZG9jRWxlbWVudC5jbGFzc05hbWUubWF0Y2gocmVnZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFoYXNDbGFzcyhjbGFzc05hbWUpKSB7XG4gICAgICAgIGRvY0VsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgIGlmIChoYXNDbGFzcyhjbGFzc05hbWUpKSB7XG4gICAgICAgIGRvY0VsZW1lbnQuY2xhc3NOYW1lID0gZG9jRWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShjbGFzc05hbWUsICcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGaXJzdE1hdGNoKHJlZ2V4KSB7XG4gICAgICB2YXIgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2gocmVnZXgpO1xuICAgICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoWzFdKSB8fCAnJztcbiAgICB9XG5cbiAgICBkZXZpY2UuaW9zID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmlwaG9uZSgpIHx8IGRldmljZS5pcG9kKCkgfHwgZGV2aWNlLmlwYWQoKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmlwaG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZpbmQoJ2lwaG9uZScpO1xuICAgIH07XG5cbiAgICBkZXZpY2UuaXBvZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZpbmQoJ2lwb2QnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmlwYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmaW5kKCdpcGFkJyk7XG4gICAgfTtcblxuICAgIGRldmljZS5hbmRyb2lkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmluZCgnYW5kcm9pZCcpO1xuICAgIH07XG5cbiAgICBkZXZpY2UuYW5kcm9pZFBob25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmFuZHJvaWQoKSAmJiBmaW5kKCdtb2JpbGUnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmFuZHJvaWRUYWJsZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXZpY2UuYW5kcm9pZCgpICYmICFmaW5kKCdtb2JpbGUnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmJsYWNrYmVycnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmaW5kKCdibGFja2JlcnJ5JykgfHwgZmluZCgnYmIxMCcpIHx8IGZpbmQoJ3JpbScpO1xuICAgIH07XG5cbiAgICBkZXZpY2UuYmxhY2tiZXJyeVBob25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmJsYWNrYmVycnkoKSAmJiAhZmluZCgndGFibGV0Jyk7XG4gICAgfTtcblxuICAgIGRldmljZS5ibGFja2JlcnJ5VGFibGV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmJsYWNrYmVycnkoKSAmJiBmaW5kKCd0YWJsZXQnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLndpbmRvd3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmaW5kKCd3aW5kb3dzJyk7XG4gICAgfTtcblxuICAgIGRldmljZS53aW5kb3dzUGhvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXZpY2Uud2luZG93cygpICYmIGZpbmQoJ3Bob25lJyk7XG4gICAgfTtcblxuICAgIGRldmljZS53aW5kb3dzVGFibGV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLndpbmRvd3MoKSAmJiAoZmluZCgndG91Y2gnKSAmJiAhZGV2aWNlLndpbmRvd3NQaG9uZSgpKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmZ4b3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZmluZCgnKG1vYmlsZTsnKSB8fCBmaW5kKCcodGFibGV0OycpKSAmJiBmaW5kKCc7IHJ2OicpO1xuICAgIH07XG5cbiAgICBkZXZpY2UuZnhvc1Bob25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmZ4b3MoKSAmJiBmaW5kKCdtb2JpbGUnKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLmZ4b3NUYWJsZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXZpY2UuZnhvcygpICYmIGZpbmQoJ3RhYmxldCcpO1xuICAgIH07XG5cbiAgICBkZXZpY2UubWVlZ28gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmaW5kKCdtZWVnbycpO1xuICAgIH07XG5cbiAgICBkZXZpY2UuY29yZG92YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jb3Jkb3ZhICYmIGxvY2F0aW9uLnByb3RvY29sID09PSAnZmlsZTonO1xuICAgIH07XG5cbiAgICBkZXZpY2Uubm9kZVdlYmtpdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cucHJvY2VzcyA9PT0gJ29iamVjdCc7XG4gICAgfTtcblxuICAgIGRldmljZS5iYWRhID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmluZCgnYmFkYScpO1xuICAgIH07XG5cbiAgICBkZXZpY2UubW9iaWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmFuZHJvaWRQaG9uZSgpIHx8IGRldmljZS5pcGhvbmUoKSB8fCBkZXZpY2UuaXBvZCgpIHx8IGRldmljZS53aW5kb3dzUGhvbmUoKSB8fCBkZXZpY2UuYmxhY2tiZXJyeVBob25lKCkgfHwgZGV2aWNlLmZ4b3NQaG9uZSgpIHx8IGRldmljZS5tZWVnbygpO1xuICAgIH07XG5cbiAgICBkZXZpY2UudGFibGV0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLmlwYWQoKSB8fCBkZXZpY2UuYW5kcm9pZFRhYmxldCgpIHx8IGRldmljZS5ibGFja2JlcnJ5VGFibGV0KCkgfHwgZGV2aWNlLndpbmRvd3NUYWJsZXQoKSB8fCBkZXZpY2UuZnhvc1RhYmxldCgpO1xuICAgIH07XG5cbiAgICBkZXZpY2UuZGVza3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICFkZXZpY2UudGFibGV0KCkgJiYgIWRldmljZS5tb2JpbGUoKTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLnBvcnRyYWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKHdpbmRvdy5pbm5lckhlaWdodCAvIHdpbmRvdy5pbm5lcldpZHRoKSA+IDE7XG4gICAgfTtcblxuICAgIGRldmljZS5sYW5kc2NhcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAod2luZG93LmlubmVySGVpZ2h0IC8gd2luZG93LmlubmVyV2lkdGgpIDwgMTtcbiAgICB9O1xuXG4gICAgZGV2aWNlLnN0YW5kQWxvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmUgPT09IHRydWU7XG4gICAgfTtcblxuXG4gICAgZGV2aWNlLmFkZENsYXNzZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKGRldmljZS5faGFzQWRkQ2xhc3Nlcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkZXZpY2UuX2hhc0FkZENsYXNzZXMgPSB0cnVlO1xuXG4gICAgICBpZiAoZGV2aWNlLmlvcygpKSB7XG4gICAgICAgIGlmIChkZXZpY2UuaXBhZCgpKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ2lvcyBpcGFkIHRhYmxldCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGRldmljZS5pcGhvbmUoKSkge1xuICAgICAgICAgIGFkZENsYXNzKCdpb3MgaXBob25lIG1vYmlsZScpO1xuICAgICAgICB9IGVsc2UgaWYgKGRldmljZS5pcG9kKCkpIHtcbiAgICAgICAgICBhZGRDbGFzcygnaW9zIGlwb2QgbW9iaWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGV2aWNlLmFuZHJvaWQoKSkge1xuICAgICAgICBpZiAoZGV2aWNlLmFuZHJvaWRUYWJsZXQoKSkge1xuICAgICAgICAgIGFkZENsYXNzKCdhbmRyb2lkIHRhYmxldCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZENsYXNzKCdhbmRyb2lkIG1vYmlsZScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRldmljZS5ibGFja2JlcnJ5KCkpIHtcbiAgICAgICAgaWYgKGRldmljZS5ibGFja2JlcnJ5VGFibGV0KCkpIHtcbiAgICAgICAgICBhZGRDbGFzcygnYmxhY2tiZXJyeSB0YWJsZXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDbGFzcygnYmxhY2tiZXJyeSBtb2JpbGUnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkZXZpY2Uud2luZG93cygpKSB7XG4gICAgICAgIGlmIChkZXZpY2Uud2luZG93c1RhYmxldCgpKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ3dpbmRvd3MgdGFibGV0Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGV2aWNlLndpbmRvd3NQaG9uZSgpKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ3dpbmRvd3MgbW9iaWxlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ2Rlc2t0b3AnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkZXZpY2UuZnhvcygpKSB7XG4gICAgICAgIGlmIChkZXZpY2UuZnhvc1RhYmxldCgpKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ2Z4b3MgdGFibGV0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2xhc3MoJ2Z4b3MgbW9iaWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGV2aWNlLm1lZWdvKCkpIHtcbiAgICAgICAgYWRkQ2xhc3MoJ21lZWdvIG1vYmlsZScpO1xuICAgICAgfSBlbHNlIGlmIChkZXZpY2Uubm9kZVdlYmtpdCgpKSB7XG4gICAgICAgIGFkZENsYXNzKCdub2RlLXdlYmtpdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2xhc3MoJ2Rlc2t0b3AnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRldmljZS5jb3Jkb3ZhKCkpIHtcbiAgICAgICAgYWRkQ2xhc3MoJ2NvcmRvdmEnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRldmljZS5zdGFuZEFsb25lKCkpIHtcbiAgICAgICAgYWRkQ2xhc3MoJ3N0YW5kYWxvbmUnKTtcbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvLyBPUyB2ZXJzaW9uIGV4dHJhY3Rpb25cbiAgICB2YXIgb3NWZXJzaW9uID0gJyc7XG4gICAgaWYgKGRldmljZS5pb3MoKSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvb3MgKFxcZCsoW19cXHNdXFxkKykqKSBsaWtlIG1hYyBvcyB4L2kpO1xuICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uLnJlcGxhY2UoL1tfXFxzXS9nLCAnLicpO1xuICAgIH0gZWxzZSBpZiAoZGV2aWNlLmFuZHJvaWQoKSkge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvYW5kcm9pZFsgXFwvLV0oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAoZGV2aWNlLndpbmRvd3NQaG9uZSgpKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC93aW5kb3dzIHBob25lICg/Om9zKT9cXHM/KFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9XG4gICAgLyplbHNlIGlmIChkZXZpY2Uud2Vib3MoKSkge1xuICAgICAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goLyg/OndlYnxocHcpb3NcXC8oXFxkKyhcXC5cXGQrKSopL2kpOyB9Ki9cbiAgICBlbHNlIGlmIChkZXZpY2UuYmxhY2tiZXJyeSgpKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9yaW1cXHN0YWJsZXRcXHNvc1xccyhcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChkZXZpY2UuYmFkYSgpKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9iYWRhXFwvKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9XG4gICAgLyplbHNlIGlmIChyZXN1bHQudGl6ZW4pIHtcbiAgICAgICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC90aXplbltcXC9cXHNdKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICAgICAgfSovXG5cbiAgICBpZiAob3NWZXJzaW9uKSB7XG4gICAgICBkZXZpY2Uub3N2ZXJzaW9uID0gb3NWZXJzaW9uO1xuICAgIH1cblxuXG5cblxuICAgIGRldmljZS5hZGRPcmllbnRhdGlvbkNsYXNzZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKGRldmljZS5oYXNPcmllbnRhdGlvbkxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGV2aWNlLmhhc09yaWVudGF0aW9uTGlzdGVuZXIgPSB0cnVlO1xuXG4gICAgICB2YXIgb25PcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZGV2aWNlLmxhbmRzY2FwZSgpKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoJ3BvcnRyYWl0Jyk7XG4gICAgICAgICAgcmV0dXJuIGFkZENsYXNzKCdsYW5kc2NhcGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW1vdmVDbGFzcygnbGFuZHNjYXBlJyk7XG4gICAgICAgICAgcmV0dXJuIGFkZENsYXNzKCdwb3J0cmFpdCcpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgb3JpZW50YXRpb25FdmVudCA9ICdvbm9yaWVudGF0aW9uY2hhbmdlJyBpbiB3aW5kb3cgPyAnb3JpZW50YXRpb25jaGFuZ2UnIDogJ3Jlc2l6ZSc7XG5cbiAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihvcmllbnRhdGlvbkV2ZW50LCBvbk9yaWVudGF0aW9uQ2hhbmdlLCBmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5hdHRhY2hFdmVudCkge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQob3JpZW50YXRpb25FdmVudCwgb25PcmllbnRhdGlvbkNoYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3dbb3JpZW50YXRpb25FdmVudF0gPSBvbk9yaWVudGF0aW9uQ2hhbmdlO1xuICAgICAgfVxuXG4gICAgICBvbk9yaWVudGF0aW9uQ2hhbmdlKCk7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIGRldmljZTtcbiAgfTtcblxuICAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpID8gKG1vZHVsZS5leHBvcnRzID0gZGV2aWNlKSA6ICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyAoZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGV2aWNlO1xuICB9KSkgOiAoZXhwb3J0cy5kZXZpY2UgPSBkZXZpY2UpKTtcblxufSh0aGlzKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZXZpY2UuanMvZGV2aWNlLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==