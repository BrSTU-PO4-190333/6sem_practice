'use strict';
// sequelize model:create --name TP_Refresh_token --attributes RBUserId:integer,RefreshToken:string
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TP_Refresh_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TP_Refresh_token.init(
    {
      RBUserId: DataTypes.INTEGER,
      RefreshToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'TP_Refresh_token',
    }
  );
  return TP_Refresh_token;
};
