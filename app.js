import colors from 'colors';
//==========================================================
import { inquirerMenu, pausa } from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
import Tarea from './models/tarea.js';
 
console.clear();
 
const main = async () => {
  
  let opt = '';
  do {
    // opt = await inquirerMenu();
    // console.log({ opt });

    
    // console.log(tarea);
    const tareas = new Tareas();
    const tarea = new Tarea('Comprar articulos');

    tareas._listado[tarea.id] = tarea;

    console.log(tareas);


    await pausa();

  } while (opt !== '0');
};
 
main();