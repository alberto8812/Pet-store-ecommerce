const axios=require("axios")
const dataUser=async(accessToken)=>{
  
    ///peticion a auth0 para traer datos de usuario

    const response=await axios.get(`https://dev-nzbce16c.us.auth0.com/userinfo`,{headers:{
          authorization:`Bearer ${accessToken}`
    }})
    const userInfo=response.data
    return userInfo.email
}

module.exports=dataUser