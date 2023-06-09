import colors from 'colors';
import  {guardarDB, leerDB } from './helpers/guardarArchivo.js';
//==========================================================
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklists } from './helpers/inquirer.js';
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

      case '4':
        tareas.ListarPendientesCompletadas(false);
      break;

      case '5': //Completado o pendiente
        const ids = await mostrarListadoChecklists(tareas.ListadoArr);
        tareas.toggleCompletadas(ids);
      break;

      case '6':
        const id = await listadoTareasBorrar(tareas.ListadoArr);
        if (id !== '0'){
          const ok = await confirmar('Esta seguro de que desea borrar la tarea?')
          if (ok ){
            tareas.borrarTarea(id);
            console.log('Tarea borrada correctamente')
          }
        }
      break;
    }


    guardarDB( tareas.ListadoArr);
    await pausa();

  } while (opt !== '0');
};
 
main();