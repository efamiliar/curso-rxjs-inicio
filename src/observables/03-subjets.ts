
import { Observable, Observer, Subject } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.info('completado')
}
const intervalo = new Observable<number>(

    subs => {
        const intervalId = setInterval( () => {
            subs.next( Math.random() )  //COLD Observable
        },1000);
        return () => {clearInterval(intervalId);
                      console.log('intervalo destruido')};
    } 

)
/**
 * 1 - Casteo Múltiple
 * 2 - Tambien es un observer
 * 3 - Maneja next, error y complete
 */
const subjects$ = new Subject()

/* const subs1 = intervalo.subscribe( res => {console.log('Subs1',res)} );
const subs2 = intervalo.subscribe( res => {console.log('Subs2',res)} ); */

const subscription = intervalo.subscribe(subjects$)


const subs1 = subjects$.subscribe( observer );
const subs2 = subjects$.subscribe( observer );


setTimeout( () => {

    subjects$.next(5000); //HOT observable

    subjects$.complete();

    subscription.unsubscribe();

},5000)