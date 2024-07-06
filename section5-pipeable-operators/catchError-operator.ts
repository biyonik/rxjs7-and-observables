/**
 * catchError operator is a pipeable operator that allows you to handle an error that occurs in a chain of operators.
 * Also, that is useful when you want to handle an error that occurs in a chain of operators and return a new Observable that emits a different set of values.
 * It takes an error handler function as an argument and returns an Observable that emits the same values as the source Observable,
 * but if an error occurs, it will call the error handler function and return an Observable that emits the values returned by the error handler function.
 *
 *
 *
 * For example,
 *
 * - catchError((error) => of(error.message)) will handle the error and return an Observable that emits the error message.
 * - catchError((error) => throwError('An error occurred')) will handle the error and return an Observable that emits an error.
 * - catchError((error) => empty()) will handle the error and return an Observable that emits no values.
 */
import {catchError, Observable, of, throwError} from "rxjs";

const failingHttpRequest$ = new Observable((observer) => {
  setTimeout(() => {
      observer.error(new Error('Timeout!'));
  }, 3000);
});

console.log('App started!');
failingHttpRequest$.pipe(
  catchError((error) => of(error.message))
).subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error),
  complete: () => console.log('Complete!')
});