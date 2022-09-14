const {DataTypes, UUIDV4} = require ('sequelize') 
module.exports = (sequelize) => {

  sequelize.define('genre', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false, 
    },
    
    name:{
      type: DataTypes.String,
      allowNull: false
    }
  }
  )}
