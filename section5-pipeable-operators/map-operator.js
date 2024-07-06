"use strict";
/**
 * map is a piepable operator that creates an observable that emits the results of applying a function to each item emitted by the source observable.
 * For example,
 * - map(x => x * 2) will emit all even numbers multiplied by 2.
 * - map(x => x * 3) will emit all odd numbers multiplied by 3.
 * - map(x => x + 1) will emit all numbers incremented by 1.
 *
 * map operator is used to transform the items emitted by an Observable by applying a function to each item.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable = new rxjs_1.Observable(function (subscriber) {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
});
var mappedObservable = observable.pipe((0, rxjs_1.map)(function (x) { return x * 2; }));
mappedObservable.subscribe(function (x) { return console.log(x); });
