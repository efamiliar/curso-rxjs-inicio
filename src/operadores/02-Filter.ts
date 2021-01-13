import { from, fromEvent, range } from "rxjs";
import { filter, map, mapTo } from "rxjs/operators";

/* const observable$ = range(1,10).pipe(
  filter( val => val % 2 === 1  )
) */


const observable$ = range(1,10).pipe(
  filter( (val,i) => {
          console.log('indice:',i)
          return val % 2 === 1
        }  )
)

observable$.subscribe(
  console.log
)

const personajes = [
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'Robin'
  },
  {
    tipo: 'villano',
    nombre: 'Jocker'
  }
];
const personajes$ = from(personajes).pipe(
  filter( val => val.tipo === 'heroe')
)

personajes$.subscribe(console.log)


//encadenados 
const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
  map<KeyboardEvent,string>( event => event.code),
  filter<string>(key => key === 'Enter'),
  mapTo<string,boolean>(true)
)
keyUp$.subscribe(console.log);

