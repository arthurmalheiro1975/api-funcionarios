'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Adiciona a coluna salario na tabela Funcionarios
    await queryInterface.addColumn('Funcionarios', 'salario', {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove a coluna caso precise desfazer a alteração
    await queryInterface.removeColumn('Funcionarios', 'salario');
  }
};