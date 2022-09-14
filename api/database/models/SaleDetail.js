const {DataTypes} = require ('sequelize')
module.exports = (sequelize)=>{

  sequelize.define('saleDetail', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    quantity:{
      type: DataTypes.NUMBER,
      allowNull: true,
    },

    price:{
      type: DataTypes.NUMBER,
      allowNull: false
    }, 

    subtotal: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  })
}