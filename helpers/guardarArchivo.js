const fs = require('fs');
// import * as fs from 'fs'; //Forma correcta de utilizarla
const archivo = './BaseDatos/data.json'


export const guardarDB = ( data ) => {    
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if ( !fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);

    // console.log(data);


    return data;

}

module.exports = {
    guardarDB, 
    leerDB
}
