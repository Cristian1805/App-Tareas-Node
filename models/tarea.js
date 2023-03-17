import { v4 as uuidv4 } from 'uuid';

class Tarea {

    id = '';
    descr = '';
    completadoEn = null;

    constructor(desc) {

        this.id = uuidv4();
        this.descr = desc;
        this.completadoEn = null;

    }

}

export default Tarea;