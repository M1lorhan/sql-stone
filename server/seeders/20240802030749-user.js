'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        user_name: 'Dude',
        user_email: 'Dude@Dude.com',
        user_password: 'The1Dude!',
        street: '123 Main St',
        additional_info: 'Apt 4B',
        city: 'Springfield',
        state_or_province: 'IL',
        postal_code: '62701',
        country: 'USA'
      }, {
        user_name: 'Steve',
        user_email: 'steve@steve.com',
        user_password: '456DEF?',
        street: '456 Elm St',
        additional_info: 'Suite 5A',
        city: 'New York',
        state_or_province: 'NY',
        postal_code: '10001',
        country: 'USA',
      }, {
        user_name: 'Dave',
        user_email: 'dave@creepydave.com',
        user_password: 'creepyDave1',
        street: 'Avenue des Champs-Élysées',
        additional_info: '',
        city: 'Paris',
        state_or_province: 'Paris',
        postal_code: '75008',
        country: 'France'
      }, {
        user_name: 'Ted',
        user_email: 'Ted@ted.com',
        user_password: 'ABC123$',
        street: 'Shibuya 2-21-1',
        additional_info: '',
        city: 'Tokyo',
        state_or_province: '',
        postal_code: '150-0002',
        country: 'Japan',
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
