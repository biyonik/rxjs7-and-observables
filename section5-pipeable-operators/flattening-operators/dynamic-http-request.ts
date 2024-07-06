import {concatMap, fromEvent, map} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";

const endpointInput: HTMLInputElement = document.querySelector('input#endpoint');
const fetchButton: HTMLButtonElement = document.querySelector('button#fetch');

fromEvent(fetchButton, 'click')
    .pipe(
        map(() => endpointInput.value),
        concatMap(endpoint => ajax(`https://random-data-api.com/api/${endpoint}/random_${endpoint}`))
    )
    .subscribe(
        value => console.log(value)
    )