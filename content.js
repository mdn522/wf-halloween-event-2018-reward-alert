"use strict";

var js = [
    chrome.extension.getURL('xhook.min.js'),
    chrome.extension.getURL('inject.js')
];

for (var i = 0; i < js.length; i++) {
    var s = document.createElement('script');
    s.src = js[i];
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}