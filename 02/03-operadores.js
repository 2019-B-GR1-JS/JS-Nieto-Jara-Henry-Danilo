const arreglo = [1,2,3,4,5,6,7,8,9,10];

for (const i in arreglo){//recorre indices
    console.log(i);
}

for (let i of arreglo){//recorre valores
    console.log(i);
}

//el for es más rápido q los otros

const  respuestaForEach = arreglo.forEach(
    function (valorActual, indiceActual, arreglo) {
        console.log('valorActual', valorActual);
        //console.log('indiceActual',indiceActual);
        //console.log('arreglo',arreglo);
    }
);

console.log('respuestaForEach',respuestaForEach); //función void devuelve undefined

//sumar 5 a todos los elementos

for(let i = 0;i<arreglo.length;i++){
    arreglo.splice(i,1,i+5)
}
console.log(arreglo)

const respuestaMap = arreglo.map( //transforma -> Mutar ARREGLO
function (valorActual,indiceActual,arreglo){
    return valorActual + 5;
}//devolver un elemento
); // devuelve un **NUEVO** ARREGLO TRANSFORMADO
const respuestaMap2 = arreglo.map(r => r+5);
console.log('respuestaMap',respuestaMap);
console.log('arreglo',arreglo);
console.log('respuestaMap2',respuestaMap2);

const respuestaFilter = arreglo
    .filter(
        function (valorActual, indiceActual, arreglo){
            return valorActual > 7 && valorActual < 11;
        } //Devolver -> Expresión -> Truty o Falsy
    );  // NUEVO ARREGLO -> Filtrado

console.log('respuestaFilter',respuestaFilter)

//OR -> SOME
const respuestaSome = arreglo
    .some(
        function (valorActual,indiceActual,arreglo) {
            return valorActual > 9 && valorActual < 11;
        } //expresión
    ); //devuelve -> Booleano

console.log('respuestaSome',respuestaSome)

//AND -> EVERY
const respuestaEvery = arreglo
    .every(
        function (valorActual,indiceActual,arreglo) {
            return valorActual > 1;
        } //expresión
    ); //devuelve -> Booleano

console.log('respuestaEvery',respuestaEvery)

//dividido 2 y sumar 7 saber si alguno es menor a 10 -> en una misma operación


const respuesta = arreglo
    .map(
        function (valorActual, indice,arreglo) {
            return (valorActual / 2)+7;
        }
    ).some(
        function (valorActual, indice,arreglo) {
            return valorActual < 10
        }
    );

const respuestaMenoresADiez = arreglo.map( (x) => (x / 2) + 7)
    .filter((y) => y < 10);
console.log('respuesta',respuesta)
console.log('respuestaMonoresADiez',respuestaMenoresADiez)


const respuestaFind =
    arreglo.find(
        (valorActual, indice, arreglo) => {
            return valorActual === 8;
        }
    );
console.log('respuestaFind',respuestaFind)
const respuestaFindIndex =
    arreglo.findIndex(
        (valorActual) => {
            return valorActual === 8;
        }
    );

console.log('respuestaFind',respuestaFindIndex)

// operar

const respuestaReduce =
    arreglo
        .reduce(
            (valorInicial, valorActual, indice, array) => {
                return valorInicial + valorActual;
            },0 //el valor inicial
        );



















