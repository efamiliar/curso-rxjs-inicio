import { asyncScheduler } from "rxjs";


//Version rx de setTimeout y setInterval
const saludar = () => console.log('Hola Mundo');

const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
const saludar3 = (objeto) => console.log(`Hola ${objeto.msg}`);

asyncScheduler.schedule(saludar,3000);
asyncScheduler.schedule(saludar2,6000,'majo');
asyncScheduler.schedule(saludar3,10000, { msg: 'jejeje' });

const subscripcion = asyncScheduler.schedule(
    function(state){
        console.log(state);
        this.schedule( state + 1, 1000)
    },
    9000, 0
);

/* setTimeout(
    () => {
        subscripcion.unsubscribe();
    },
    12000
) */

asyncScheduler.schedule( () => subscripcion.unsubscribe(), 12000);