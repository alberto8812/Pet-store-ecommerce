const axios=require('axios')
const express=require("express"),
      router=express.Router();


router
        .get('/', (req,res)=>{
           // const accessToken=req.headers.authorization.split(' ')[1];
                
           // const response=await axios.get(`https://dev-nzbce16c.us.auth0.com/userinfo`,{headers:{
            //authorization:`Bearer ${accessToken}`
            //}})
             //const userInfo=response.data
             console.log("tiene permiso")
           //res.status(200).json({msg:"tiene permiso"}) 
      }) 

module.exports=router;