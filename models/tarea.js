import { v4 as uuidv4 } from 'uuid';

class Tarea {

    id = '';
    descr = '';
    completadoEn = null;

    constructor(descr) {

        this.id = uuidv4();
        this.descr = descr;
        this.completadoEn = null;

    }

}

export default Tarea;