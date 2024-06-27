// What would happen if we subscribe to the same observable multiple times?
// Will it emit the same value multiple times?

import {Observable, Subscriber, Subscription} from "rxjs";

const observable$: Observable<string> = new Observable<string>((subscriber: Subscriber<string>) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout(() => {
        subscriber.next('Bob');
    }, 2000);

    setTimeout(() => {
        subscriber.next('Charlie');
    }, 4000);
})

console.log('Subscription1 starts');
const subscription1: Subscription = observable$.subscribe((value) => {
    console.log('Subscriber 1:', value);
});

setTimeout(() => {
    console.log('Subscription2 starts');
    const subscription2: Subscription = observable$.subscribe((value) => {
        console.log('Subscriber 2:', value);
    });
}, 1000);

/**
 * Output:
 * Subscription1 starts
 * Observable executed
 * Subscriber 1: Alice
 * Subscription2 starts
 * Observable executed
 * Subscriber 2: Alice
 * Subscriber 1: Bob
 * Subscriber 2: Bob
 * Subscriber 1: Charlie
 * Subscriber 2: Charlie
 */