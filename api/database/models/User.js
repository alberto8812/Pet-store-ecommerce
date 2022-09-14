const {DataTypes, UUIDV4} = require ('sequelize') 
module.exports = (sequelize) => {

  sequelize.define('user', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true, 
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false
    }, 
    
    userName:{
      type: DataTypes.STRING,
      allowNull: false, 
    },

    password:{
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },

    flagAdmin:{
      type: DataTypes.BOOLEAN,
      allowNull: true,                
    }

  })
}
