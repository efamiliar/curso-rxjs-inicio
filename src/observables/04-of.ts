import { of } from "rxjs";


//Por defecto es síncrono
const obs$ = of(1,2,3,4,5,6,7,8,9);

console.log('Inicio');
obs$.subscribe(
    next => console.log(next),
    null,
    () => console.log('termina secuencia')
)
console.log('Fin');