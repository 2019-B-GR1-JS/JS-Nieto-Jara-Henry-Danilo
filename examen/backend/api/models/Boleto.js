/**
 * Boleto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    localidad: {
      type: 'string'
    },
    bloque: {
      type: 'string'
    },
    fila: {
      type: 'string'
    },
    numeroAsiento: {
      type: 'number'
    },
    codigoBoleto: {
      type: 'string'
    },
    precio: {
      type: 'number'
    },
    idPartido: {
      model: 'partido',
      required: true
    }
  },

};

