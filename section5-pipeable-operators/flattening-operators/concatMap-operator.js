"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * concatMap is a pipeable operator that allows you to flatten an Observable that emits Observables.
 * It takes an observable factory function as an argument and returns an Observable that emits the values from all the Observables emitted by the observable factory function.
 *
 * concatMap is similar to mergeMap, but it will only subscribe to the next Observable once the current one completes.
 *
 * concatMap is useful when you want to maintain the order of the emitted values.
 *
 * For example,
 * - If you have an Observable that emits 1, 2, 3, 4, 5 and another Observable that emits 6, 7, 8, 9, 10, the concatMap will emit 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
 * - If one of the Observables never completes, the concatMap will never emit any value.
 * - If one of the Observables emits an error, the concatMap will emit that error.
 */
var rxjs_1 = require("rxjs");
var source$ = new rxjs_1.Observable(function (subscriber) {
    setTimeout(function () { return subscriber.next('A'); }, 2000);
    setTimeout(function () { return subscriber.next('B'); }, 5000);
});
console.log('App has started');
source$.pipe((0, rxjs_1.concatMap)(function (value) { return (0, rxjs_1.of)(1, 2); })).subscribe(function (value) { return console.log(value); });
