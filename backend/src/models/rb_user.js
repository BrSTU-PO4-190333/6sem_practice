'use strict';
// sequelize model:create --name RB_User --attributes Name:string,Login:string,HashPassword:string
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RB_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RB_User.init(
    {
      Name: DataTypes.STRING,
      Email: DataTypes.STRING,
      Login: DataTypes.STRING,
      HashPassword: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'RB_User',
    }
  );
  return RB_User;
};
