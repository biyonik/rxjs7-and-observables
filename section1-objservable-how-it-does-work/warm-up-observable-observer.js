"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (subscriber) {
    console.log('Observable is executed');
    subscriber.next('Hello');
    setTimeout(function () { return subscriber.next('World'); }, 2000);
    setTimeout(function () { return subscriber.next('!'); }, 4000);
    // subscriber.complete();
});
var observer = {
    next: function (value) { return console.log(value); },
};
var subscription = observable$.subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log('Completed'); }
});
setTimeout(function () {
    console.log('Unsubscribed');
    subscription.unsubscribe();
}, 3000);
