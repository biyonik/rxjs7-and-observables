import {Observable} from "rxjs";

// Observable is a class that takes a function as an argument
// The function takes a subscriber as an argument and the subscriber has a method called next
// The next method is used to emit values from the observable
const observable$ = new Observable(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
});

// The observable is cold, meaning it does not emit values until it is subscribed to by an observer subscription
const observer = {
    next: (value) => console.log(value),
}

// Subscribe to the observable with the observer object
observable$.subscribe(observer);

// Output:
// Alice
// Ben
