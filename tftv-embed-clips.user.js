// ==UserScript==
// @name tftv-embed-clips
// @description Embed clips on teamfortress.tv
// @version 1.0.0
// @include http://*.teamfortress.tv/*
// @author ldesgoui
// @license MIT
// @copyright 2017, ldesgoui
// @homepageURL https://github.com/ldesgoui/user.js
// @supportURL https://github.com/ldesgoui/user.js/issues
// ==/UserScript==

(function() {
    'use strict';
    var a;
    while ((a = document.querySelector("[href^='https://clips.twitch.tv/']"))) {
        var iframe = document.createElement("iframe");
        iframe.src = a.href.replace(".tv/", ".tv/embed?autoplay=false&clip=");
        iframe.allowFullscreen = true;
        iframe.width = a.parentNode.clientWidth;
        iframe.height = iframe.width / 16 * 9;
        a.parentNode.replaceChild(iframe, a);
    }
})();
