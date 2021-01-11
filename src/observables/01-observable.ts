import { Observable, Observer } from "rxjs";


const observer: Observer<string> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.info('completado')
}


const obs$ = new Observable<string>( 
    subs => {
        subs.next('Hola');
        subs.next('mundo');

        subs.next('Hola');
        subs.next('mundo');

        //Forzar error
        //const a = undefined;
        //a.t = 'esto falla';

        subs.complete();

        subs.next('no se trasmite');

    }
);


/* 
obs$.subscribe( 
        resp => console.log('Next:', resp),
        error => console.error('Error:',error),
        () => console.log('Complete')  
    ); */

obs$.subscribe(observer);
