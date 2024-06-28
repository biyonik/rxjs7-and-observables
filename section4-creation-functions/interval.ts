/**
 * interval is a creation function that creates an observable that emits a sequence of numbers in a specified range at regular time intervals.
 * For example:
 * - interval(1000) will emit a number every second.
 * - interval(1000, 5000) will emit a number every second, but only for the first 5 seconds.
 * - interval(1000, 5000, asyncScheduler) will emit a number every second, but only for the first 5 seconds, using the asyncScheduler.
 *
 * interval is a static creation function that returns an observable.
 */

import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
});

// Unsubscribe after 10 seconds
setTimeout(() => {
    console.log('Unsubscribed');
    subscription.unsubscribe();
}, 10000);

// Output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// Unsubscribed

