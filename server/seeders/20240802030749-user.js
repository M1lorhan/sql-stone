'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'Dude',
        last_name: 'McDude',
        phone: '123-456-7890',
        user_email: 'Dude@Dude.com',
        user_password: 'The1Dude!',
        street: '123 Main St',
        additional_info: 'Apt 4B',
        city: 'Springfield',
        state_or_province: 'IL',
        postal_code: '62701',
        country: 'USA'
      }, {
        first_name: 'Steve',
        last_name: 'McSteve',
        phone: '234-567-8901',
        user_email: 'steve@steve.com',
        user_password: '456DEF?',
        street: '456 Elm St',
        additional_info: 'Suite 5A',
        city: 'New York',
        state_or_province: 'NY',
        postal_code: '10001',
        country: 'USA',
      }, {
        first_name: 'Creepy',
        last_name: 'Dave',
        phone: '345-678-9012',
        user_email: 'dave@creepydave.com',
        user_password: 'creepyDave1',
        street: 'Avenue des Champs-Élysées',
        additional_info: '',
        city: 'Paris',
        state_or_province: 'Paris',
        postal_code: '75008',
        country: 'France'
      }, {
        first_name: 'Ted',
        last_name: 'McTed',
        phone: '456-789-0123',
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
