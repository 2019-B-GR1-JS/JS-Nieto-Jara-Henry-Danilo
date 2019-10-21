// funciones

//funciones que no devuelven nada VOID

function imprimirMensaje(mensaje){
    if (typeof mensaje === "string" || typeof mensaje === 'number'){
        console.log(`Mensaje ${mensaje}`);
        console.log(impresión);
        return impresión;
    }else{
        console.log("Error")
    }

}

const respuesta = imprimirMensaje({a:1});
console.log(respuesta); //undefined


function sumarDosElementos (nuemrouno, numerodos) {
    return numerouno + numerodos;
}

//console.log(
    //eturn sumarDosElementos(1,6)
//)



function sumarElementos(numerouno, ...parametrosInfinitos){
    console.log(parametrosInfinitos) // [2,3,4,5]
    if(parametrosInfinitos){
        return parametrosInfinitos(
            (valorInicial, valorActual)=>{
                return valorInicial + valorActual;
            },
            numerouno
        );
    }else{
        return numerouno
    }
}


const restar = function restarF(a,b) {
    return a-b;
}
console.log(restar(4,2))

//fat arrow function

const restar1 = function(a,b){
    return a-b
}

function restar2(a,b){

}
const restar3 ={
    nombre: 'restar',
    restarNumeros: (a,b) =>{
        return a - b;
    },
    //restarNumeros: function (a,b) {//Anonymous function
        //return a - b;

};

const  transformarAMayuscula = (letra) => {
    return letra.toUpperCase();
}
const transformarAMayuscula2 = (letra) => letra.toUpperCase();
const  transformarAMayuscula3 = letra => letra.toUpperCase();
//const filtrarArreglo = arreglo.filter(a => a.id > 4);


const objetoDanilo = {
    nombre: 'Danilo',
}
const objetoNieto = {
    nombre: 'Nieto',
}

const arregloNumerosUno = [1,2,3,4,5,6];
const arregloNumeroDos = [7,8,9,10,11,12];
const arregloUnido = [...arregloNumerosUno,...arregloNumeroDos]
//Destructurar el arreglo
sumarElementos(...arregloNumerosUno);
sumarDosElementos(...arregloNumerosUno);
// sumarElementos([1,2,3,4,5,6]); // como que quita los corchetes
// sumarElementos(1,2,3,4,5,6);
// sumarDosElemtos(1,2,3,4,5,6);

const unir = [...objetoDanilo,...objetoNieto]

console.log(unir)

const objetoDaniloNieto = {
    ...objetoDanilo,
    ...objetoNieto,
    edad: 12,
};


const oAEEnString = JSON.stringify(objetoDaniloNieto);
console.log(oAEEnString);
const oAEClonado = JSON.parse(oAEEnString);
console.log(oAEEnString);
oAEEnString.edad = 21;
console.log(oAEClonado);
console.log(objetoDaniloNieto);
function cambiaredad(edad, objeto) {
    objeto.edad = edad;
    return objeto;
}
const clonadoAE = {
    ...objetoDaniloNieto
}

console.log(clonadoAE);
clonadoAE.edad = 21;
console.log(clonadoAE);
console.log(objetoDaniloNieto);










