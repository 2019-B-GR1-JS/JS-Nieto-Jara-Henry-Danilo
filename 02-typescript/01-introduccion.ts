//TRasnpilador
// Tipo de compilador que transforma de un lenguaje a otro

// TYPESCRIIPT
// 1) Tipos de datos (tipado)
// 2) Decoradores
// 3) Clases

// const
const numero: number = 0;
//let nombre: string = "Danilo"ng server
//let nombre: string = "Danilo"

// DUCK TYPING
//Infiriendo el tipo de dato
let nombre: string = "Danilo"

let fecha: Date; // Date -> Clase
                 // Tipo de dato "Date"

fecha = new Date()
fecha = 1;
fecha = "1"
//SE pueden tipar los datos con clases
//y con interfces

let danilo: Estudiante; // EStudiante -> Interfaz
                        // Tipo de dato "Estudiante"
danilo = {
    nombre: "Danilo",
    edad: 19,
};
//En JS un objeto es un JSON
interface Estudiante {
    nombre: string;
    edad?: number; //opcional
}

function holaMundo(): void{
    console.log('Hola');
}
function mensaje(nombre: string): void{
    console.log('Hola',nombre)
}

function calculadora(
    numUno: number,
    ... numeros: any[]
): number{
    console.log('Hacer calculadora');
    return numUno;
}

function universidad(
    nombre: string,
    edad?: number, // Opcional
): string {
    return `${nombre} Edad: ${edad}`;
}

universidad("Danilo");


interface Facultad{
    nombre: string;
    id: number;
}

interface Departamento {
    nombre: string;
    id: number;
    facultad: Facultad | number;
}

const departamentoSistemas = {
    nombre:  "Sistemas",
    id: 1,
    facultad: { // Facultad está relacionada
        nombre: "Sistemas",
        id:1
    }
}

const departamentoSistemasSinRelaciones: Departamento = {
    nombre:  "Sistemas",
    id: 1,
    facultad: 1
}

function imprimirDepartamento(
    departamento: Departamento
){
    //const departamentoId = departamento.facultad as number + 1;
    const departamentoId = <number> departamento.facultad + 1;
}








