import Tarea from "./tarea.js";


class Tareas {

    _listado = {

    };

    get ListadoArr() {

        const listado = []
        Object.keys(this._listado).forEach(key =>{

            const tarea = this._listado[key];
            listado.push(tarea)
        });
        return listado; 
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray (tareas=[]) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }


    crearTarea(desc = ''){
        
        const tarea = new Tarea(desc);
        this._listado [tarea.id] = tarea;
    }

    listadoCompleto() {

        console.log();
        this.ListadoArr.forEach((tarea, idx) => {
            
            const contador = `${idx + 1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                             ? 'Completado'.green
                             : 'Pendiente'.red
            console.log(`${idx} ${desc} :: ${estado}`);
            // console.log(idx);
        }); 
    }
    
    ListarPendientesCompletadas(completadas = true ){
        console.log();
        let contador1 = 0;
        this.ListadoArr.forEach((tarea) => {
            
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                             ? 'Completado'.green
                             : 'Pendiente'.red
            if (completadas){
                //mostrar completadas
                if (completadoEn){
                    contador1 +=1;
                    console.log(`${ (contador1 + '.').green} ${desc} :: ${completadoEn}`);
                }
            } else {
                //Mostrar pendientes
                if ( !completadoEn){
                    contador1 +=1;
                    console.log(`${(contador1 + '.').green} ${desc} :: ${estado}`);
                }
            }

        }); 

        
    }

}
export default Tareas;