const {DataTypes} = require ('sequelize')

module.exports = (sequelize) =>{

  sequelize.define('sale', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    }, 
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }, 
    status: {
      type: DataTypes.ENUM("PENDING", "CANCELLED", "COMPLETED"),
      allowNull: false
    }

  })
}