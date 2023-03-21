// const fs = require('fs');
// import writeFile from 'fs';

import fs from 'fs'
// import * as fs from 'fs'; //Forma correcta de utilizarla
const archivo = '../BaseDatos.txt'


const guardarDB = (data) => {    
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if ( !fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'})
    const data = JSON.parse(info);

    // console.log(data);


    return data;

}

export {guardarDB, leerDB}