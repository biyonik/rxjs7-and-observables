import {ajax} from "rxjs/internal/ajax/ajax";
import {AjaxResponse} from "rxjs/internal/ajax/AjaxResponse";


const ajax$ = ajax('https://random-data-api.com/api/users/random_user');

ajax$.subscribe(
    (data: AjaxResponse<any>) => console.log('Sub 1: ', data.response.first_name),
)

ajax$.subscribe(
    (data: AjaxResponse<any>) => console.log('Sub 2: ', data.response.first_name),
)

ajax$.subscribe(
    (data: AjaxResponse<any>) => console.log('Sub 3: ', data.response.first_name),
)



