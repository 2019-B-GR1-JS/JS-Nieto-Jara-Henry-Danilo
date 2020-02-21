/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    apellido: {
      type: 'string'
    },
    correo: {
      type: 'string'
    },
    fechaNacimiento: {
      type: 'number'
    },
    username: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    rol: {
      type: 'string'
    },
    comprasUsuario: {
      collection: 'cabeceraCarrito',
      via: 'idUsuario'
    }
  },

};

