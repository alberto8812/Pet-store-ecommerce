const {DataTypes} = require ('sequelize') 
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
    direction:{
      type: DataTypes.STRING,
     
       
    },
   city:{
      type: DataTypes.STRING,
     
       
    },
    blockUser:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false             
    },
    

    flagAdmin:{
      type: DataTypes.BOOLEAN,
      allowNull: true,                
    }

  })
}
