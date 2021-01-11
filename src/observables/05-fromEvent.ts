import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */


 const src1$ = fromEvent<MouseEvent>( document, 'click' );
 const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

 const observer = {
     next: (val) => console.log( 'next', val )
 } 
  // Desectructuración del evento para recuperar solo los atributos que nos interesan
 src1$.subscribe(( {x , y} ) => {
        console.log('Coord X:', x);
        console.log('Coord Y:', y);
 });

 src2$.subscribe(
    next => {
        console.log('Key:', next.key)
    }
 );
