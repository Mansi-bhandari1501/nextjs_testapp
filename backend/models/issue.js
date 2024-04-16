'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
      Issue.belongsTo(model.User,{
        foreignKey:"userId",
        as: 'user'
      })
    }
  }
  Issue.init({
    userId:{
      type:DataTypes.STRING,
      allowNull:false,
      references:{
        model:'Users',
        key:'id'
      } 
    },
    bookId: DataTypes.STRING,
    issueDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    returnDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Issue',
  });
  return Issue;
};