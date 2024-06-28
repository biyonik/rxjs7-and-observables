/**
 * timer creation function that creates an observable that emits a value after a specified amount of time
 */

import {Observable, timer} from 'rxjs';

console.log('App started!')
// emit 0 after 1 second
const timer$ = new Observable<number>(subscriber => {
    const timeoutId = setTimeout(() => {
        subscriber.next(0);
        subscriber.complete();
    }, 1000);

    return () => {
        clearTimeout(timeoutId);
    }
})

const subscription = timer$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete!')
});

setTimeout(() => {
    subscription.unsubscribe();
}, 3000);


// emit value after 1 second
const source = timer(1000, 1000);
source.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete!')
});

console.log('App ended!')