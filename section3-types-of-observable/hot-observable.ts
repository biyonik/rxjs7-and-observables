import {Observable} from "rxjs";

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable(subscriber => {
    helloButton.addEventListener('click', (e: Event) => {
        subscriber.next(e);
    });
});

helloClick$.subscribe((e: MouseEvent) => {
    console.log('Hello clicked');
    console.log('Event Type:', e.type, 'X:', e.x, 'Y:', e.y);
});

