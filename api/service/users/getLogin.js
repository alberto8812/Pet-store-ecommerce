const axios=require('axios')

const getLoginResponse =async(req)=>{
   
    const accessToken=req.headers.authorization.split(' ')[1];
    const response=await axios.get(`https://dev-nzbce16c.us.auth0.com/userinfo`,{headers:{
          authorization:`Bearer ${accessToken}`
    }})
    const userInfo=response.data
    return userInfo
}

module.exports = {
    getLoginResponse
}