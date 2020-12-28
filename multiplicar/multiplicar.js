const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            console.log(`${ base } no es un número, intente de nuevo`);
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${ i } = ${ base * i } \n`;
        }


        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }-al-${ limite }.txt`);
            }
        });
    });
}

let listarTabla = (base, limite) => {

    console.log('============================================'.green);
    console.log(`=========tabla de ${ base }=================`.green);
    console.log('============================================'.green);



    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}