import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";


/* const rango = range(1,20).pipe(
  map<number,string>( val => (val * 10).toString())
);

rango.subscribe(console.log); */

const keyUp$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
  map<KeyboardEvent,string>(evento => evento.code)
)
keyUp$.subscribe(console.log);

//misma salida que el anterior
const keyUp2$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
  pluck('code')
)

keyUp2$.subscribe(val => console.log('pluck',val));

const keyUp3$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
  pluck('target','baseURI')
)

keyUp3$.subscribe(val => console.log('pluck 3',val));

const keyUp4$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
  mapTo<KeyboardEvent,string>('constante')
)

keyUp4$.subscribe(val => console.log('mapTo',val));