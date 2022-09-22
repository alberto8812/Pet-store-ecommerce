const {DataTypes} = require ('sequelize')

module.exports = (sequelize) =>{

  sequelize.define('sale', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    }, 
    invoice:{
      type: DataTypes.STRING,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }

  })
}