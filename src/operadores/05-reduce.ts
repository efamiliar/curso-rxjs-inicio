
//JS6
/* const numbers = [1, 2, 3, 4, 5];

const reducer = ( acumulador: number, siguiente: number) => {
  return acumulador + siguiente;
}

const total = numbers.reduce( reducer, 0 );

console.log('total:', total); */

import { from, interval, of } from "rxjs";
import { reduce, take } from "rxjs/operators";

const numbers$ = from([1, 2, 3, 4, 5]).pipe(
  reduce<number,number>(
    (ac:number, next:number) => (ac + next)
  )
)

numbers$.subscribe(console.log)

interval(500).pipe(
  take(6),
  reduce(
    (ac: number, val:number) => ac + val
  )
).subscribe(console.log)
