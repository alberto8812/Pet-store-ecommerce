const {db,Op}=require('../../database/db')
const {Review,Product}=db.models

const postCommentUser = async(req, res)=>{

  //const accessToken=req.headers.authorization.split(' ')[1];
  ///const Userdata=await dataUser(accessToken);

  const {id,comment,punctuation}= req.body
  console.log(punctuation,comment,id)
    let commentUser = await Review.findOne({
      where: {
        idProduct:id 
      }
    })
 console.log(commentUser)
    await commentUser.update({comment, punctuation})

    return  await Product.findOne({where:{id:id},include:{model:Review}})

}


module.exports={
  postCommentUser
}


