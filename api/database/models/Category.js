const {DataTypes} = require ('sequelize')

module.exports=(sequelize)=>{

  sequelize.define('category',{

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false, 
    }, 

    id_Product: {
      type: DataTypes.STRING,
      primaryKey: true,   //revisar
      allowNull: false
    }, 

    name:{
      type: DataTypes.STRING,
      allowNull: false
    }

  })
}