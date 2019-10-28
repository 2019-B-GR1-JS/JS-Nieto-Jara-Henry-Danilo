// 07-promesas

const fs = require('fs')

const sumarDosNumeros = (correcto)=>{
    return new Promise(
        (resolve,reject)=>{
            if(correcto){
                resolve('YEII');
            }
            else{
                reject('BUUU');
            }
            //resolve('YEII'); //ejecuta then
            //reject('BUUU'); //ejecuta catch
    }
    )
}

const promesaSumarDosNumeros = sumarDosNumeros(false);
console.log('01) Inicial');
promesaSumarDosNumeros
    .then(
        (ok)=>{
            console.log('Ok', ok)
        }
    )
    .catch(
        (error) => {
            console.log('Error', error)
        }
    )


console.log('02) Terminar');

const leerArchivo = (pathArchivo)=>{
    return new Promise(
        (resolve,reject)=>{
            //res, rej
            fs.readFile(
                pathArchivo,
                'utf8',
                (error, archivo) => {
                    if(error){
                        reject(error);
                    }else {
                        resolve(archivo);
                    }

                }
            )
        }
    )
}

leerArchivo('./01-variables.js')
    .then(
        (contendoCallbackjs)=>{
            console.log(contendoCallbackjs);
            return leerArchivo('./01-variables.js') //promesa
        }
    )
    .then(
        (contenido2js)=>{
            console.log(contenido2js);
        }
    )
    .catch();






