"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * forkJoin is a creation function that takes an array of Observables and returns an Observable that emits the last value of each passed Observable when all of them have completed.
 * For example:
 * - If you have an Observable that emits 1, 2, 3, 4, 5 and another Observable that emits 6, 7, 8, 9, 10, the forkJoin will emit [5, 10] when both of them have completed.
 * - If one of the Observables never completes, the forkJoin will never emit any value.
 * - If one of the Observables emits an error, the forkJoin will emit that error.
 *
 * The forkJoin is useful when you need to wait for multiple Observables to complete before doing something with their values.
 * Code example:
 * forkJoin([observable1, observable2]).subscribe(([value1, value2]) => {
 *   // do something with both values
 * });
 */
var ajax_1 = require("rxjs/internal/ajax/ajax");
var rxjs_1 = require("rxjs");
XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// Mike is from New Delhi and likes to eat pasta
var randomName$ = (0, ajax_1.ajax)('https://random-data-api.com/api/name/random_name');
var randomNation$ = (0, ajax_1.ajax)('https://random-data-api.com/api/nation/random_nation');
var randomFood$ = (0, ajax_1.ajax)('https://random-data-api.com/api/food/random_food');
var joined$ = (0, rxjs_1.forkJoin)([randomName$, randomNation$, randomFood$]);
joined$.subscribe(function (_a) {
    var name = _a[0], nation = _a[1], food = _a[2];
    console.log("".concat(name.response.first_name, " is from ").concat(nation.response.country, " and likes to eat ").concat(food.response.dish));
});
// Output:
// Mike is from New Delhi and likes to eat pasta
// Jane is from Canada and likes to eat pizza
