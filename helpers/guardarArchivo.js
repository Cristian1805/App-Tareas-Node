// const fs = require('fs');
import { writeFile } from 'fs';
const guardarDB = (data) => {

    const archivo = './db/data.json'

    fs.writeFileSync(archivo, JSON.stringify(data));

}

export default guardarDB; 