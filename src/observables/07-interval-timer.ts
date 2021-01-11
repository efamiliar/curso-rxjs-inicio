import { interval, Observer, timer } from "rxjs";



const observer: Observer<any>  = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
    error: (error) => console.log(error)
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

//Asíncronos por defecto
const interval$ = interval(1000);
//const timer$ =  timer(2000);
//const timer$ =  timer(2000, 1000);
const timer$ =  timer(hoyEn5);

console.log('inicio');
//interval$.subscribe(observer);
console.log('fin');


console.log('inicio');
timer$.subscribe(observer)
console.log('fin');

