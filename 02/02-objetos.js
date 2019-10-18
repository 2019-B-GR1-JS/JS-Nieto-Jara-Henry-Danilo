// 02-objetos.js
//let const
// -> INMUTABLE (NO CAMBIA)
// NO PUEDE SER REAGSIGNADO = igualar a algo
const arreglo = [1,4,2,3,4,5,6,7,8,9,10];

//arreglo.push(); //cambian mediante métodos
console.log(arreglo)
arreglo.push(11)
//cambiar una variable const depende de los métodos de las variables
console.log(arreglo)

//let arregloNumber = [1,2,3]
//rregloNumber = ["a","b","c"];
//arregloNumber = [true,false,true,true]
//arregloNumber = [1,"a",true,false];
//console.log(typeof arregloNumber);

arreglo.pop();
console.log(arreglo)
//JS no es bueno para programas serios pero typescript si

//function suma(a,b) {
    //if(typeof a === 'number')
//}
arreglo.splice(1,0,1.1);
//arreglo.splice(1,0,1.1)
console.log(arreglo)
arreglo.unshift(0)//ingresa al inicio del arreglo
console.log(arreglo);

//indice de un elemento
const respuestaIndice = arreglo.indexOf(4); //encuentra la primera ocurrencia
console.log(respuestaIndice);
arreglo.splice(respuestaIndice,1);
console.log(arreglo);








