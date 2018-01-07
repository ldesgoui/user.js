// ==UserScript==
// @name tftv-deprecate-streamplayer
// @description Deprecate teamfortress.tv/stream/* and directly link to Twitch
// @copyright 2017, ldesgoui
// @author ldesgoui
// @homepageURL https://github.com/ldesgoui/user.js
// @supportURL https://github.com/ldesgoui/user.js/issues
// @license MIT
// @version 1.0.0
// @include http://*.teamfortress.tv/*
// ==/UserScript==

(function() {
    'use strict';
    if (location.pathname.startsWith("/stream/")) {
        location.href = "https://twitch.tv/" + a.pathname.substr(8);
    }
    var a;
    while ((a = document.querySelector("[href^='/stream/']"))) {
        a.href = "https://twitch.tv/" + a.href.split('/').pop();
        a.target = "_blank";
    }
})();
