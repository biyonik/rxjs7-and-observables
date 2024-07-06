"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * catchError operator is a pipeable operator that allows you to handle an error that occurs in a chain of operators.
 * Also, that is useful when you want to handle an error that occurs in a chain of operators and return a new Observable that emits a different set of values.
 * It takes an error handler function as an argument and returns an Observable that emits the same values as the source Observable,
 * but if an error occurs, it will call the error handler function and return an Observable that emits the values returned by the error handler function.
 *
 *
 *
 * For example,
 *
 * - catchError((error) => of(error.message)) will handle the error and return an Observable that emits the error message.
 * - catchError((error) => throwError('An error occurred')) will handle the error and return an Observable that emits an error.
 * - catchError((error) => empty()) will handle the error and return an Observable that emits no values.
 */
var rxjs_1 = require("rxjs");
var failingHttpRequest$ = new rxjs_1.Observable(function (observer) {
    setTimeout(function () {
        observer.error(new Error('Timeout!'));
    }, 3000);
});
failingHttpRequest$.pipe((0, rxjs_1.catchError)(function (error) { return (0, rxjs_1.throwError)(error.message); })).subscribe({
    next: function (value) { return console.log(value); },
    error: function (error) { return console.error(error); },
    complete: function () { return console.log('Complete!'); }
});
