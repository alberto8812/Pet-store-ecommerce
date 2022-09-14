const {DataTypes} = require ('sequelize')

module.exports = (sequelize) =>{

  sequelize.define('sale', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    id_user:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,  //revisar
      allowNull: false 
    }

  })
}