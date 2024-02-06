const { v4: uudiv4 } = require('uuid');

class Tarea {

    id = '';
    descr = '';
    completadoEn = null;

    constructor( desc ) {

        this.id = uuidv4();
        this.descr = desc;
        this.completadoEn = null; 

    }

}

module.exports = Tarea;