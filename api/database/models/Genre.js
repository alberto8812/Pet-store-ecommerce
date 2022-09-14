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

    id_category: {

      primaryKey: true, 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true
    },

    name:{
      type: DataTypes.String,
      allowNull: false
    }
  }
  )}
