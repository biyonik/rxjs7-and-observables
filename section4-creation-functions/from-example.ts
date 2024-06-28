import {from} from "rxjs";


/**
 *
 * from: Convert some other objects or data structure into an Observable.
 */

from(['Alice', 'Ben', 'Charlie'])
    .subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('Completed!')
    });


const somePromise = new Promise((resolve, reject) => {
    resolve('Resolved!');
})

const observableFromPromise = from(somePromise);
observableFromPromise.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed!')
})