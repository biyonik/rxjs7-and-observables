/**
 * concatMap is a pipeable operator that allows you to flatten an Observable that emits Observables.
 * It takes an observable factory function as an argument and returns an Observable that emits the values from all the Observables emitted by the observable factory function.
 *
 * concatMap is similar to mergeMap, but it will only subscribe to the next Observable once the current one completes.
 *
 * concatMap is useful when you want to maintain the order of the emitted values.
 *
 * For example,
 * - If you have an Observable that emits 1, 2, 3, 4, 5 and another Observable that emits 6, 7, 8, 9, 10, the concatMap will emit 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
 * - If one of the Observables never completes, the concatMap will never emit any value.
 * - If one of the Observables emits an error, the concatMap will emit that error.
 */
import {concatMap, Observable, of} from "rxjs";


const source$ = new Observable(subscriber => {
    setTimeout(() => subscriber.next('A'), 2000);
    setTimeout(() => subscriber.next('B'), 5000);
})

console.log('App has started')

source$.pipe(
    concatMap(value => of(1, 2))
).subscribe(value => console.log(value))