import colors from 'colors';
import guardarDB from './helpers/guardarArchivo.js';
//==========================================================
import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
// import {Tarea} from './models/tarea.js';
 
console.clear();
 
const main = async () => {
  
  let opt = '';

  const tareas = new Tareas();
  do {
    //Esta opcion imprime el menú
    opt = await inquirerMenu();
    // console.log({ opt });

    switch (opt) {
      case '1':
        //Crear la opcion
        const desc = await leerInput('Descripcion: ');
        tareas.crearTarea(desc);
      break;
    
      case '2':
          console.log(tareas.ListadoArr) 
      break;
    }


    // guardarDB( tareas.ListadoArr);



    await pausa();

  } while (opt !== '0');
};
 
main();