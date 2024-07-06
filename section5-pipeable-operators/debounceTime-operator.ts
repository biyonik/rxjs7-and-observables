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
import {debounceTime, fromEvent, map} from "rxjs";

const sliderInput = document.querySelector('input#slider');

/**
 * It demonstrates how debounceTime works.
 * The slider input emits values when the user stops sliding the slider.
 * debounceTime(1000) waits for 1 second before emitting the last value.
 * The map operator extracts the value from the event and logs it to the console.
 * The value is logged after 1 second of the user stopping sliding the slider.
 */

fromEvent(sliderInput, 'input')
    .pipe(
        debounceTime(1000),
        map(event => (event.target as HTMLInputElement).value),
    )
    .subscribe(value => console.log(value));