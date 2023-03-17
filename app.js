import colors from 'colors';
//==========================================================
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
// import Tarea from './models/tarea.js';
 
console.clear();
 
const main = async () => {
  
  let opt = '';

  const tareas = new Tareas();
  do {
    opt = await inquirerMenu();
    // console.log({ opt });

    switch (opt) {
      case '1':
        //Crear la opcion
        const desc = await leerInput('Descripcion: ');
        tareas.crearTarea(desc);
      break;
    
      case '2':
          console.log(tareas._listado) 
      break;
    }

    
    // console.log(tarea);
    
    // const tarea = new Tarea('Comprar articulos');

    // tareas._listado[tarea.id] = tarea;

    // console.log(tareas);


    await pausa();

  } while (opt !== '0');
};
 
main();