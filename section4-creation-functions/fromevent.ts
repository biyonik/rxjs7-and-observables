/**
 * fromEvent is a creation function that creates an observable from an event on a target.
 * For example, you can create an observable from a click event on a button.
 * Or Node.js developers can create an observable from a file read stream.
 * Or Jquery developers can create an observable from a Jquery event.
 */

import {fromEvent, Observable} from 'rxjs';


const triggerButton:HTMLButtonElement = document.createElement('button');
triggerButton.id = 'trigger';
document.body.appendChild(triggerButton);

const triggerClick$: Observable<MouseEvent> = fromEvent<MouseEvent>(triggerButton, 'click');

const observer = {
    next: (value: Event) => console.log(value),
    error: (error: Error) => console.log(error),
    complete: () => console.log('Completed')
};

triggerClick$.subscribe(observer);