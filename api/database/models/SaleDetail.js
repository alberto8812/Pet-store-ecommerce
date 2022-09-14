const {DataTypes} = require ('sequelize')
module.exports = (sequelize)=>{

  sequelize.define('saleDetail', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    id_genre:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,  //revisar 
      primaryKey: true,
      allowNull: false

    },
    id_sale:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,  // revisar
      primaryKey: true,
      allowNull: false

    },

    quantity:{
      type: DataTypes.NUMBER,
      allowNull: true,
    },

    price:{
      type: DataTypes.Number,
      allowNull: false
    }, 

    subtotal: {
      type: DataTypes.NUMBER,
      allowNull: false
    }
  })
}