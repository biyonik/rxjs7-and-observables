/**
 * filter is a pipeable operator that creates an observable that emits only those items from the source observable that pass a predicate test.
 * For example,
 * - filter(x => x % 2 === 0) will emit only even numbers.
 * - filter(x => x % 2 !== 0) will emit only odd numbers.
 */
import {filter, Observable} from "rxjs";

type Category = 'Business' | 'Sports';

interface NewsItem {
    category: Category;
    content: string;
}

const newsFeed$ = new Observable<NewsItem>(subscriber => {
    setTimeout(() => {
        subscriber.next({category: 'Business', content: 'Business news 1'});
    }, 1000);
    setTimeout(() => {
        subscriber.next({category: 'Sports', content: 'Sports news 1'});
    }, 3000);
    setTimeout(() => {
        subscriber.next({category: 'Business', content: 'Business news 2'});
    }, 4000);
    setTimeout(() => {
        subscriber.next({category: 'Sports', content: 'Sports news 2'});
    }, 6000);
    setTimeout(() => {
        subscriber.next({category: 'Business', content: 'Business news 3'});
    }, 7000);
});

const sportsNewsFeed$ = newsFeed$.pipe(
    filter(item => item.category === 'Sports')
);

sportsNewsFeed$.subscribe(item => console.log(item));