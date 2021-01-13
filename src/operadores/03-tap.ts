import { range } from "rxjs";
import { map, tap } from "rxjs/operators";


const numeros$ = range(1,10);

numeros$.pipe(
  tap( x => console.log('antes',x)),
  map( val => val * 5),
  tap( {next: x => console.log('despues'),
        complete: () => console.log('completado')})
).subscribe(val => console.log('subs',val))

