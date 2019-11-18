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
            //console.log('Ok', ok)
        }
    )
    .catch(
        (error) => {
            //console.log('Error', error)
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
            //console.log(contendoCallbackjs);
            return leerArchivo('./01-variables.js') //promesa
        }
    )
    .then(
        (contenido2js)=>{
            //console.log(contenido2js);
        }
    )
    .catch(
        (error)=> {
            //console.log('Error',error);
        }
    );


const nombreArchivo = './01-variables.js';
//codigo sync puede producir un error
//usar un bloque try y catch
console.log('Inicia Syncrono')
try{
    const contenidoArchivo = fs.readFileSync(nombreArchivo,'utf-8')
    console.log(contenidoArchivo)
    console.log('Se leyo sincronamente')
}catch(error){
    console.log("Error",error)
}
console.log('Termina Syncrono')

//Transformar una promesa a codigo Sincrono!
//Function a Function Anonymous
// 1) "async" (Permite usar codigo sincrono dentro de la function
// 2) Para transformar Promesa -> Sincrono
//  await
async function leerARchivoSync() {
    try{
        const contenido = await leerArchivo(nombreArchivo); //promesa
        console.log(contenido);
        console.log('Leimos con async await');
        return 1
    }catch(error){
        console.log("Error",error);
        return 0
    }
}

leerARchivoSync().then(
    (numero)=>{
        console.log(numero); // 1
    }
).catch(
    (numero)=>{
        console.log(numero); // 0
    }
); //Promesa








