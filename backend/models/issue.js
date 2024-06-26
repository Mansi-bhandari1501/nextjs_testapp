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
    static userAssociation;
    static associate(models) {
      // define association here
      this.userAssociation = Issue.belongsTo(models.User,{
        foreignKey:"userId",
        // as: 'user'
      })
      Issue.belongsTo(models.Books,{
        foreignKey:"bookId",
        as: 'book'
      })
    }
    }
  
  Issue.init({
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'User',
        key:'id'
      } 
    },
    uuId:{
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'Books',
        key:'id'
      } 
    },
    issueDate: DataTypes.DATE,
    dueDate: {
      type:DataTypes.DATE,
    }
    ,
    returnDate: DataTypes.DATE,
    status:{
      type: DataTypes.ENUM('issued', 'returned',"pending"),
      allowNull: true,
      defaultValue:"pending" ,
    }
  }, {
    sequelize,
    modelName: 'Issue',
  });
  return Issue;
};