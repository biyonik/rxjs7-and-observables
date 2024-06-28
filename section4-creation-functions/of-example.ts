/**
 * of() - creates an observable from a list of values
 *  - emits each value synchronously one after the other and then completes
 *  - can take any number of arguments
 */

import { of } from 'rxjs';

// Create an observable that emits 1, 2, and 3
const source$ = of(1, 2, 3);
source$.subscribe(x => console.log(x));

// Output:
// 1
// 2
// 3

// Create an observable that emits 'Hello', 'World', and 'Goodbye'
const source2$ = of('Hello', 'World', 'Goodbye');
source2$.subscribe(x => console.log(x));