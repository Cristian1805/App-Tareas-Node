import Tarea from "./tarea";


class Tareas {

    _listado = {};

    constructor(){
        this._listado = {};
    }


    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado [tarea.id] = tarea;

    }

}


export default Tareas;