import { from, Observer, of } from "rxjs";


const observer: Observer<any> = {
    next: (next) => console.log('Next',next),
    error: (error) => console.log(error),
    complete: () => console.log('complete')
}

//const source$ = from([1,2,3,4,5,6]);
//const source$ = of([1,2,3,4,5,6]);
/* const source$ = from('cadenas');

source$.subscribe(
    observer
)

const source2$ = from (fetch ('https://api.github.com/users/klerith'));
source2$.subscribe(
    async(resp) => {    
        console.log(resp);
        const  dataResp = await resp.json();
        console.log(dataResp);
    }
) */

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

//Modo iterable de js estandar
for (let id of  miIterable){
    console.log(id)
}

//modo con observables

from(miIterable).subscribe(observer);