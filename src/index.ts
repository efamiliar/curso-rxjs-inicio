import { from, interval } from "rxjs";
import { map, reduce, scan, take } from "rxjs/operators";


/* interval(500).pipe(
  take(6),
  scan(
    (ac: number, val:number) => ac + val, 0
  )
).subscribe(console.log) */


const numeros = [1,2,3,4,5,6,7,8,9];

const totalAcumula = (ac:number, val: number) => ac + val;

from(numeros).pipe(
  scan(totalAcumula,0)
).subscribe(console.log);


from(numeros).pipe(
  reduce(totalAcumula,0)
).subscribe(console.log);

//Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?:string;
  edad?:number
}

const users: Usuario[] = [
  {id:'est', autenticado:false, token:null},
  {id:'est', autenticado:true, token:'ABC'},
  {id:'est', autenticado:false},
  {id:'est', autenticado:true, token:'SSS'},
];

const state$ = from(users).pipe(
  scan<Usuario>( ( acc, cur ) => {
    return {...acc, ...cur}
  }, { edad: 34 } )
)

const ids$ = state$.pipe(
  map( state => state.id)
);

state$.subscribe(console.log)