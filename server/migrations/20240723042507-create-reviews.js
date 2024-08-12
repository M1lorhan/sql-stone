'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      review_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      glasses_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'glasses',
          },
          key: 'glasses_id',
        },
        allowNull: false,
      },
      user_id: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'users_id',
        },
        allowNull: false,
      },
      review: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};