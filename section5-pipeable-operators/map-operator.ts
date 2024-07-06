/**
 * map is a piepable operator that creates an observable that emits the results of applying a function to each item emitted by the source observable.
 * For example,
 * - map(x => x * 2) will emit all even numbers multiplied by 2.
 * - map(x => x * 3) will emit all odd numbers multiplied by 3.
 * - map(x => x + 1) will emit all numbers incremented by 1.
 *
 * map operator is used to transform the items emitted by an Observable by applying a function to each item.
 */


import {forkJoin, map, Observable} from "rxjs";
import {AjaxResponse} from "rxjs/internal/ajax/AjaxResponse";
import {ajax} from "rxjs/internal/ajax/ajax";

// First example

const observable = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
});
const mappedObservable = observable.pipe(map(x => x * 2));
mappedObservable.subscribe(x => console.log(x));





// Second example

const randomName$: Observable<AjaxResponse<any>> = ajax('https://random-data-api.com/api/name/random_name')
    .pipe(map((response: AjaxResponse<any>) => response.response.first_name));
const randomNation$: Observable<AjaxResponse<any>> = ajax('https://random-data-api.com/api/nation/random_nation')
    .pipe(map((response: AjaxResponse<any>) => response.response.country));
const randomFood$: Observable<AjaxResponse<any>> = ajax('https://random-data-api.com/api/food/random_food')
    .pipe(map((response: AjaxResponse<any>) => response.response.dish));

const joined$ = forkJoin([randomName$, randomNation$, randomFood$]);

joined$.subscribe(([name, nation, food]) => {
    console.log(`${name} is from ${nation} and likes to eat ${food}`);
});
