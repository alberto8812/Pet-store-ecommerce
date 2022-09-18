const {DataTypes} = require ('sequelize') 
module.exports = (sequelize) => {

  sequelize.define('product', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,   
      allowNull: false
    }, 

    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    
    price: {
      type: DataTypes.FLOAT,
      allowNull: false 
    },

    stock:{
      type: DataTypes.INTEGER,
      min: 0,
      default: 0,
      allowNull: false
    }, 

    detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    rating:{
      type: DataTypes.STRING,
      defaultValue:'1',
      allowNull: false, 
    },
    age:{
      type: DataTypes.STRING,
      allowNull: false, 
    }

  })
}