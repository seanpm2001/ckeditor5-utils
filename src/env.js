/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals navigator:false */

/**
 * @module utils/env
 */

const userAgent = navigator.userAgent.toLowerCase();

/**
 * A namespace containing environment and browser information.
 *
 * @namespace
 */
const env = {
	/**
	 * Indicates that application is running on Macintosh.
	 *
	 * @static
	 * @member {Boolean} module:utils/env~env#mac
	 */
	mac: isMac( userAgent ),

	/**
	 * Indicates that application is running in a WebKit-based browser, like Safari,
	 * or Blink-based browser, like Chrome.
	 *
	 * @static
	 * @member {Boolean} module:utils/env~env#webkit
	 */
	webkit: isWebkit( userAgent )
};

export default env;

/**
 * Checks if User Agent represented by the string is running on Macintosh.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is running on Macintosh or not.
 */
export function isMac( userAgent ) {
	return userAgent.indexOf( 'macintosh' ) > -1;
}

/**
 * Checks if User Agent represented by the string is a WebKit-based browser, like Safari,
 * or Blink-based browser, like Chrome.
 *
 * @param {String} userAgent **Lowercase** `navigator.userAgent` string.
 * @returns {Boolean} Whether User Agent is running on Macintosh or not.
 */
export function isWebkit( userAgent ) {
	return userAgent.indexOf( 'applewebkit' ) > -1;
}
