import {BehaviorSubject, fromEvent, Subject, withLatestFrom} from "rxjs";

const loggedInSpan: HTMLSpanElement = document.getElementById('span#loggedIn');
const loggedInButton: HTMLElement = document.getElementById('button#loggedIn');
const logoutButton: HTMLElement = document.getElementById('button#logout');
const printStateButton: HTMLElement = document.getElementById('button#printState');


const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loggedInButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));

isLoggedIn$.subscribe((isLoggedIn: boolean) => {
    loggedInSpan.innerText = isLoggedIn ? 'Logged In' : 'Logged Out';
});

fromEvent(printStateButton, 'click')
    .pipe(
        withLatestFrom(isLoggedIn$)
    )
    .subscribe(([_, isLoggedIn]: [any, boolean]) => {
        console.log(`User is logged in: ${isLoggedIn}`);
    });
