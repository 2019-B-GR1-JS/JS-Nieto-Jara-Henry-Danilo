/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


};

// HTTP
// RESTFULL
// Find
// Metodo HTTP + URL + *Parametros

// *Parametros
// Ruta -> Requeridos
// http://localhost:1337/usuario
// http://localhost:1337/usuario/1 -> id
// http://localhost:1337/usuario/2 -> id
// Query -> SIEMPRE OPCIONALES
// http://localhost:1337/usuario?nombre=Danilo&apellido=Nieto
// http://localhost:1337/usuario?nombre=Danilo
// Consulta y Ruta -> llegan como "TEXTO"
// Body
// http://localhost:1337/usuario
  /*
  const nuevoUsuario = {
    nombre; "Danilo",
    apellido: "Nieto",
    correo: "prueba@a.com",
    edad: 1,
    casadp : true,
  }
{
  pedido: 5,
  detallePEdido:{
  producto;: 1,
  cantidad: 5,
  estadoHabilitado: true,
  descripción: "Compro al contadoo" -> string
  }
   */

  //Metodo http
// get
// post
// put
// delete

//Codigo http (servidor)
//1xx información
//2xx Ok
//3xx redirecciones
//4xx Error cliente
//5xx Errores del servidor

// Find
// GET http://localhost:1337 + modelo
// Ej: GET http://localhost:1337/usuario

// FindOne
// GET http://localhost:1337/ + modelo/:id
// Ej: GET http://localhost:1337/usuario/1

// CreateOne
// Post http://localhost:1337/usuario
//Ej: http://localhost:1337/usuario

// UpdateOne
// Put http://localhost:1337/ + modelo/:id
//Ej: PUT http://localhost:1337/usuario/1

// DeleteOne
// Delete http://localhost:1337/ + modelo/:id
// Ej: delete http://localhost:1337/usuario/1
