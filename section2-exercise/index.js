"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (subscriber) {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(function () {
        subscriber.next('Charlie');
        subscriber.complete();
    }, 4000);
    setTimeout(function () { return subscriber.error(new Error('Something went wrong')); }, 2000);
    return function () {
        console.log('Teardown');
    };
});
console.log('Before subscription');
observable$.subscribe({
    next: function (value) { return console.log("Received value: ".concat(value)); },
    error: function (error) { return console.error("Error: ".concat(error.message)); },
    complete: function () { return console.log('Observable completed'); }
});
console.log('After subscription');
