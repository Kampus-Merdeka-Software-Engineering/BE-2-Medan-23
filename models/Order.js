import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Order = sequelize.define(
  'Order',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'orders',
    timestamps: true,
    underscored: true,
  }
);

export default Order;
