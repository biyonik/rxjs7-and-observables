import {Observable, Subscriber, Subscription} from "rxjs";


// Create an observable that emits 'Hello' and 'World' and '!' on subscription.
// But 'World' should be emitted 2 seconds after 'Hello'
// and '!' should be emitted 2 seconds after 'World'
// But the observer should be unsubscribed after 3 seconds. So the observer should only receive 'Hello' and 'World'
// If uncomment the line subscriber.complete(); the observer should receive 'Hello', 'World' and '!' and then 'Completed' should be logged

const observable$: Observable<string> = new Observable<string>((subscriber:Subscriber<string>) => {
    console.log('Observable is executed');
    subscriber.next('Hello');
    setTimeout(() => subscriber.next('World'), 2000);
    setTimeout(() => subscriber.next('!'), 4000);
    // subscriber.complete();
});

const observer = {
    next: (value: string) => console.log(value),
}


// Subscribe to the observable with the observer object and log the values to the console
const subscription: Subscription = observable$.subscribe({
    next: (value: string) => console.log(value),
    complete: () => console.log('Completed')
});


// Unsubscribe after 3 seconds to avoid memory leak
setTimeout(() => {
    console.log('Unsubscribed');
    subscription.unsubscribe();
}, 3000);

