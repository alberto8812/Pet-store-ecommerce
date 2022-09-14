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
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    price:{
      type: DataTypes.FLOAT,
      allowNull: false
    }, 

    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  })
}