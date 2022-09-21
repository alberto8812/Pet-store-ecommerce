const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User}=db.models
const axios=require('axios');
const dataUser=require('../../middleware/loginUser')


const postUserDataResponse=async(req)=>{
     
    const accessToken=req.headers.authorization.split(' ')[1];
    const dataEmail=await dataUser(accessToken);
    
    const updateUser=await User.findOne({where:{email:dataEmail}})
     await updateUser.update({city:req.body.city,direction:req.body.direction})
 
   

    return updateUser;
}

module.exports={postUserDataResponse}