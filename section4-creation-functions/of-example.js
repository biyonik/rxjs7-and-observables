"use strict";
/**
 * of() - creates an observable from a list of values
 *  - emits each value synchronously one after the other and then completes
 *  - can take any number of arguments
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// Create an observable that emits 1, 2, and 3
var source$ = (0, rxjs_1.of)(1, 2, 3);
source$.subscribe(function (x) { return console.log(x); });
// Output:
// 1
// 2
// 3
// Create an observable that emits 'Hello', 'World', and 'Goodbye'
var source2$ = (0, rxjs_1.of)('Hello', 'World', 'Goodbye');
source2$.subscribe(function (x) { return console.log(x); });
