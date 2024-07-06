"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * filter is a pipeable operator that creates an observable that emits only those items from the source observable that pass a predicate test.
 * For example,
 * - filter(x => x % 2 === 0) will emit only even numbers.
 * - filter(x => x % 2 !== 0) will emit only odd numbers.
 */
var rxjs_1 = require("rxjs");
var newsFeed$ = new rxjs_1.Observable(function (subscriber) {
    setTimeout(function () {
        subscriber.next({ category: 'Business', content: 'Business news 1' });
    }, 1000);
    setTimeout(function () {
        subscriber.next({ category: 'Sports', content: 'Sports news 1' });
    }, 3000);
    setTimeout(function () {
        subscriber.next({ category: 'Business', content: 'Business news 2' });
    }, 4000);
    setTimeout(function () {
        subscriber.next({ category: 'Sports', content: 'Sports news 2' });
    }, 6000);
    setTimeout(function () {
        subscriber.next({ category: 'Business', content: 'Business news 3' });
    }, 7000);
});
var sportsNewsFeed$ = newsFeed$.pipe((0, rxjs_1.filter)(function (item) { return item.category === 'Sports'; }));
sportsNewsFeed$.subscribe(function (item) { return console.log(item); });
