"use strict";
// What would happen if we subscribe to the same observable multiple times?
// Will it emit the same value multiple times?
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (subscriber) {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout(function () {
        subscriber.next('Bob');
    }, 2000);
    setTimeout(function () {
        subscriber.next('Charlie');
    }, 4000);
});
console.log('Subscription1 starts');
var subscription1 = observable$.subscribe(function (value) {
    console.log('Subscriber 1:', value);
});
setTimeout(function () {
    console.log('Subscription2 starts');
    var subscription2 = observable$.subscribe(function (value) {
        console.log('Subscriber 2:', value);
    });
}, 1000);
