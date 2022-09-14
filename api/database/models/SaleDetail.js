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
<<<<<<< HEAD
      type: DataTypes.FLOAT,
=======
      type: DataTypes.NUMBER,
>>>>>>> 3539b71232d1ef9bbbe1488a393eaf18719b5bf1
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