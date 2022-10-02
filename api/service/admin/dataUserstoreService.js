const {db,Op}=require('../../database/db')
const {Product,Genre,Category,User}=db.models

const dataUserstoreService = async (req) => {


  const AllDataUser = await User.findAll({attributes:['id','name','email','userName','direction','city','enabled']})

  return AllDataUser
}

module.exports = {
    dataUserstoreService
}