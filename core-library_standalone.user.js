// ==UserScript==
// @name         GeoFS-V3.9_Core-Library
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Shared logic and utilities for standalone GeoFS addons.
// @author       AwesomeOddEven-NightKeys-LunarBlink
// @match        https://www.geo-fs.com/geofs.php*
// @match        https://*.geo-fs.com/geofs.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const libUrl = 'https://raw.githack.com/AwesomeOddEven-NightKeys-LunarBlink/GeoFS-V3.9_Core-Library/blob/main/core-library.js';

    function injectLibrary() {
        if (window.SafeInit) return; // Already loaded
        const script = document.createElement('script');
        script.src = libUrl;
        document.head.appendChild(script);
        console.log('GeoFS Core: [Library] Loaded from CDN.');
    }

    injectLibrary();
})();
