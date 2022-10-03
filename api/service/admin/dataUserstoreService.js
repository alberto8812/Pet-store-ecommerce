const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User}=db.models

const dataUserstoreService = async (req) => {

//envia la informacion de todos los usuarios registrados
  const AllDataUser = await User.findAll({attributes:['id','name','email','userName','direction','city','enabled']})

  return AllDataUser
}

const editUsersAdminService=async(req)=>{
  const {city,id,firstName,email,userName,direction,enabled}=req.body//toma los datos por body del usuario 

  const editUser=await  User.update({city,userName,direction,enabled},{where:{id}})//actualiza los datos del usuario

  return 'status user changue'
}

module.exports = {
    dataUserstoreService,
    editUsersAdminService
}