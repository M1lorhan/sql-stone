'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reviews, Orders }) {
      // define association here
        Users.hasMany(Reviews, {
            foreignKey: "user_id",
            as: "reviews"
            }),
        Users.hasMany(Orders, {
          foreignKey: "order_id",
          as: "orders"
          });
      }
    }
  Users.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users',
    timestamps: false
  });
  return Users;
};