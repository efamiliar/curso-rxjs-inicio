import { asyncScheduler, range } from "rxjs";

//Por defecto es síncrono
const obs$ = range(1, 10);
//Lo hacemos asíncrono
const obs2$ = range(1, 10, asyncScheduler);

console.log('Inicio sincrono');
obs$.subscribe(console.log);
console.log('Fin');

console.log('Inicio asincrono');
obs2$.subscribe(console.log);
console.log('Fin');
