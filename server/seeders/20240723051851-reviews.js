'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews',[
      {
        glasses_id: 1,
        user_id: 1,
        review: 'Greatest sunglasses ever',
        stars: 5
      },
      {
        glasses_id: 2,
        user_id: 2,
        review: 'Excellent sound and video',
        stars: 5
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {})
  }
};
