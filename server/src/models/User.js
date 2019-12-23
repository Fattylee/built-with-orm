import Sequelize from 'sequelize';
import db from '../db';
import Category from './Category';

const User = db.define(
  'user',
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fullname: {
      type: Sequelize.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
    },
  },
  { underscored: true },
);
Category.belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: 'ownerId',
});
User.hasMany(Category, {
  foreignKey: 'ownerId',
});

export default User;
