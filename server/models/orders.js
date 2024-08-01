'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Glasses, Users }) {
      // define association here
      Orders.belongsTo(Glasses, {
        foreignKey: "glasses_id",
        as: "glasses"
      }),
      Orders.belongsTo(Users, {
        foreignKey: "user_id",
        as: "users"
        })
    }
  }
  Orders.init({
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    glasses_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Orders',
    tableName: 'Orders',
    timestamps: false
  });
  return Orders;
};