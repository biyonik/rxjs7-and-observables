/**
 * forkJoin is a creation function that takes an array of Observables and returns an Observable that emits the last value of each passed Observable when all of them have completed.
 * For example:
 * - If you have an Observable that emits 1, 2, 3, 4, 5 and another Observable that emits 6, 7, 8, 9, 10, the forkJoin will emit [5, 10] when both of them have completed.
 * - If one of the Observables never completes, the forkJoin will never emit any value.
 * - If one of the Observables emits an error, the forkJoin will emit that error.
 *
 * The forkJoin is useful when you need to wait for multiple Observables to complete before doing something with their values.
 * Code example:
 * forkJoin([observable1, observable2]).subscribe(([value1, value2]) => {
 *   // do something with both values
 * });
 */
import {ajax} from "rxjs/internal/ajax/ajax";
import {forkJoin, Observable} from "rxjs";
import {AjaxResponse} from "rxjs/internal/ajax/AjaxResponse";


// Mike is from New Delhi and likes to eat pasta

const randomName$: Observable<AjaxResponse<any>> = ajax('https://random-data-api.com/api/name/random_name');
const randomNation$: Observable<AjaxResponse<any>> = ajax('https://random-data-api.com/api/nation/random_nation');
const randomFood$: Observable<AjaxResponse<any>> = ajax('https://random-data-api.com/api/food/random_food');

const joined$ = forkJoin([randomName$, randomNation$, randomFood$]);

joined$.subscribe(([name, nation, food]) => {
  console.log(`${name.response.first_name} is from ${nation.response.country} and likes to eat ${food.response.dish}`);
});

// Output:
// Mike is from New Delhi and likes to eat pasta
// Jane is from Canada and likes to eat pizza