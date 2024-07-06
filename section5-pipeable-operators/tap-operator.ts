/**
 * tap is a pipeable operator that takes an observer as an argument and returns an observer
 * The tap operator is used to perform side effects on the observable sequence without modifying the sequence
 *
 * For example
 * - Logging
 * - Updating a variable
 * - Making an HTTP request
 * - Writing to a file
 */

import {filter, map, of, tap} from 'rxjs';

of(1, 7, 3, 6, 2)
    .pipe(
        map(value => value * 2),
        tap(value => console.log(`Input Value: ${value}`)),
        filter(value => value > 5),
    )
    .subscribe(value => console.log(`Output Value: ${value}`));