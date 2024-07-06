"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * debounceTime is a pipeable operator that waits for a certain amount of time before emitting the last value.
 * It is useful when you want to wait for the user to stop typing before making an API call.
 *
 * Syntax: debounceTime(duration: number, scheduler: Scheduler): Observable<T>
 *
 * For example,
 *
 * - debounceTime(1000) waits for 1 second before emitting the last value.
 * - debounceTime(1000, asyncScheduler) waits for 1 second using the asyncScheduler before emitting the last value.
 *
 * Note: debounceTime is a filter operator.
 *
 * Example:
 *
 * const click$ = fromEvent(document, 'click');
 * const debouncedClick$ = click$.pipe(debounceTime(1000));
 * debouncedClick$.subscribe(x => console.log(x));
 */
var rxjs_1 = require("rxjs");
var sliderInput = document.querySelector('input#slider');
/**
 * It demonstrates how debounceTime works.
 * The slider input emits values when the user stops sliding the slider.
 * debounceTime(1000) waits for 1 second before emitting the last value.
 * The map operator extracts the value from the event and logs it to the console.
 * The value is logged after 1 second of the user stopping sliding the slider.
 */
(0, rxjs_1.fromEvent)(sliderInput, 'input')
    .pipe((0, rxjs_1.debounceTime)(1000), (0, rxjs_1.map)(function (event) { return event.target.value; }))
    .subscribe(function (value) { return console.log(value); });
