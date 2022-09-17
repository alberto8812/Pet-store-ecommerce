const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User}=db.models
const axios=require('axios');

const getLoginResponse =async(req)=>{
   /////require token enviado atravez del front 
    const accessToken=req.headers.authorization.split(' ')[1];
    ///peticion a auth0 para traer datos de usuario
    const response=await axios.get(`https://dev-nzbce16c.us.auth0.com/userinfo`,{headers:{
          authorization:`Bearer ${accessToken}`
    }})
    const userInfo=response.data
    

    ///crear usuarios en la base de datos
    const createUserDB= await User.findOrCreate({where:{
        name:userInfo.name,
        email:userInfo.email,
        userName:userInfo.nickname?userInfo.nickname:"NC",
        name:userInfo.name,
    }
    })
   
    return  createUserDB
}

module.exports = {
    getLoginResponse
}