
import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const intervalos$ = new Observable<number>(

    obs => {
        let cont = 0;
        const interv = setInterval( ()=> {
            cont++;
            obs.next(cont)
            console.log('intervalo:',cont)
        },1000);
        const interv2 = setInterval( ()=> {
            obs.complete()
            console.log('completado desde intevalo$:')
        },4000);
        return () => {
            clearInterval(interv);
            clearInterval(interv2);
            console.log('intervalo_destruido');
        }
    }
   
)

const subs1 = intervalos$.subscribe( observer );
const subs2 = intervalos$.subscribe( observer );
const subs3 = intervalos$.subscribe( observer );

subs1.add( subs2 ).add ( subs3);


const uns = setInterval( ()=> {
    subs1.unsubscribe();
    /* subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe(); */
    console.log('Unsubscribe');
    clearInterval(uns);
},5000);