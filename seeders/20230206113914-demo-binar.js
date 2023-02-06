"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        email: "bijakamien@gmail.com",
        username: "amienbijak",
        name: "Bijak",
        password: "amienbijak",
        address: "puri aloha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "gembulmeong@gmail.com",
        username: "gembulmeong",
        name: "Gembul",
        password: "gembulmeong",
        address: "puri aloha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Categories", [
      {
        category_name: "Mainan Anak",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Pakaian Laki-laki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Items", [
      {
        item_name: "Gundam",
        descriptions: "Mainan gundam",
        item_price: 250000,
        qty_stock: 10,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: "Ham kerah merah",
        descriptions: "Ham keren kerah warna merah",
        item_price: 250000,
        qty_stock: 5,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Orders", [
      {
        total_price: 500000,
        payment_method: "Debit Kartu",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_price: 750000,
        payment_method: "Binar Wallet",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Order_Details", [
      {
        order_id: 1,
        item_id: 1,
        qty_order: 2,
        item_price: 250000,
        total_price: 500000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        item_id: 2,
        qty_order: 3,
        item_price: 250000,
        total_price: 750000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Order_Detail", null, {});
    await queryInterface.bulkDelete("Orders", null, {});
    await queryInterface.bulkDelete("Items", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};
