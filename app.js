import colors from 'colors';
import  {guardarDB, leerDB } from './helpers/guardarArchivo.js';
//==========================================================
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar } from './helpers/inquirer.js';
import Tareas from './models/tareas.js';
// import {Tarea} from './models/tarea.js';
 
console.clear();
 
const main = async () => {
  
  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB){ //Establecer las tareas
    tareas.cargarTareasFromArray(tareasDB); 
    
  }
  await pausa();
  
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
        tareas.listadoCompleto();
      break;

      case '3': //Listar completadasx
        tareas.ListarPendientesCompletadas(true);
      break;

      case '4': //Listar las tareas pendientes 
      tareas.ListarPendientesCompletadas(false);
      break;

      case '6': //Borrar tareas 
      const id = await listadoTareasBorrar(tareas.ListadoArr)
      console.log({id})
      break;
    }


    guardarDB( tareas.ListadoArr);
    await pausa();

  } while (opt !== '0');
};
 
main();