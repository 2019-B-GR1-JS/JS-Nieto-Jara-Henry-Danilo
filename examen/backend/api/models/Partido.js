/**
 * Partido.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    equipoLocal: {
      type: 'string'
    },
    equipoVisitante: {
      type: 'string'
    },
    fechaPartido: {
      type: 'string'
    },
    estadio: {
      type: 'string'
    },
    disciplina: {
      type: 'string'
    },
    boletos: {
      collection: 'boleto',
      via: 'idPartido'
    }
  },

};

