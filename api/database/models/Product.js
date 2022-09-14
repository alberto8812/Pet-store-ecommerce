const {DataTypes} = require ('sequelize') 
module.exports = (sequelize) => {

  sequelize.define('product', {

    id: {
      type: DataTypes.STRING,
      primaryKey: true,   //revisar
      allowNull: false
    }, 

    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    
    price: {
      type: DataTypes.NUMBER,
      allowNull: false 
    },

    stock:{
      type: DataTypes.NUMBER,
      min: 0,
      default: 0,
      allowNull: false
    }, 

    detail: {
      type: DataTypes.STRING,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    }

  })
}