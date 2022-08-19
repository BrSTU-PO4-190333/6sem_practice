'use strict';

const { Model } = require('sequelize');

// sequelize model:create --name TP_Task --attributes RBUserId:integer,Name:string,Description:string,
// StartDate:date,EndDate:date,isCompleted:boolean

/**
 *  @openapi
 *  definitions:
 *    TP_Task:
 *      properties:
 *        RBUserId:
 *          type: integer
 *        Name:
 *          type: string
 *        Description:
 *          type: string
 *        StartDate:
 *          type: string
 *        EndDate:
 *          type: string
 *        IsCompleted:
 *          type: boolean
 */
module.exports = (sequelize, DataTypes) => {
  class TP_Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TP_Task.init(
    {
      RBUserId: DataTypes.INTEGER,
      Name: DataTypes.STRING,
      Description: DataTypes.STRING,
      StartDate: DataTypes.DATE,
      EndDate: DataTypes.DATE,
      IsCompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'TP_Task',
    }
  );
  return TP_Task;
};
