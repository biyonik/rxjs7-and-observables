import {Observable, Subscriber} from "rxjs";


const observable$: Observable<string> = new Observable<string>((subscriber: Subscriber<string>) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(() => {
        subscriber.next('Charlie')
        subscriber.complete();
    }, 4000);

    setTimeout(() => subscriber.error(new Error('Something went wrong')), 2000);

    return () => {
        console.log('Teardown');
    }
});

console.log('Before subscription');
observable$.subscribe({
    next: (value: string) => console.log(`Received value: ${value}`),
    error: (error: Error) => console.error(`Error: ${error.message}`),
    complete: () => console.log('Observable completed')
});
console.log('After subscription');