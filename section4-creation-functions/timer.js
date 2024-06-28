"use strict";
/**
 * timer creation function that creates an observable that emits a value after a specified amount of time
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
console.log('App started!');
// emit 0 after 1 second
var timer$ = new rxjs_1.Observable(function (subscriber) {
    var timeoutId = setTimeout(function () {
        subscriber.next(0);
        subscriber.complete();
    }, 1000);
    return function () {
        clearTimeout(timeoutId);
    };
});
var subscription = timer$.subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log('Complete!'); }
});
setTimeout(function () {
    subscription.unsubscribe();
}, 3000);
// emit value after 1 second
// const source = timer(1000, 1000);
// source.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('Complete!')
// });
console.log('App ended!');
