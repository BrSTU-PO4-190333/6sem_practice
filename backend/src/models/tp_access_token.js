'use strict';
// sequelize model:create --name TP_Access_token --attributes RBUserId:integer,AccessToken:string
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TP_Access_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TP_Access_token.init(
    {
      RBUserId: DataTypes.INTEGER,
      AccessToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'TP_Access_token',
    }
  );
  return TP_Access_token;
};
