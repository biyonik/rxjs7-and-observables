"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/**
 *
 * from: Convert some other objects or data structure into an Observable.
 */
(0, rxjs_1.from)(['Alice', 'Ben', 'Charlie'])
    .subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log('Completed!'); }
});
var somePromise = new Promise(function (resolve, reject) {
    resolve('Resolved!');
});
var observableFromPromise = (0, rxjs_1.from)(somePromise);
observableFromPromise.subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log('Completed!'); }
});
