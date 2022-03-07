'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pregunta', [
      {
       nombre: 'Manuel',
       interrogacion: "¿Quien es el animal mas grande de la tierra?",
       fecha: new Date(),
       createdAt: new Date(),
       updatedAt : new Date()
     }

     ], {});      
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
