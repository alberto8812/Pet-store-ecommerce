const {DataTypes} = require ('sequelize')

module.exports = (sequelize) =>{
  
  sequelize.define('review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,  
    },
    comment:{
      type: DataTypes.TEXT,
     
    }, 
    punctuation:{
      type: DataTypes.ENUM('1', '2', '3', '4', '5')
    }, 
    user:{
      type: DataTypes.STRING,
      allowNull: false
    },
    idProduct:{
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}