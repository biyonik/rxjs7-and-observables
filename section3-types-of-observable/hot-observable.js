"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var helloButton = document.querySelector('button#hello');
var helloClick$ = new rxjs_1.Observable(function (subscriber) {
    helloButton.addEventListener('click', function (e) {
        subscriber.next(e);
    });
});
helloClick$.subscribe(function (e) {
    console.log('Hello clicked');
    console.log('Event Type:', e.type, 'X:', e.x, 'Y:', e.y);
});
