const {db,Op}=require('../../database/db')
const {Review,Product}=db.models

const postCommentUser = async(req, res)=>{

  //const accessToken=req.headers.authorization.split(' ')[1];
  //const Userdata=await dataUser(accessToken);

  const {comment,punctuation}= req.body
  console.log(punctuation,comment)
    let commentUser = await Review.findOne({
      where: {
        idProduct:"d770bd1b-9276-4ac8-9109-0900c5a686c7"
      }
    })
 console.log(commentUser)
    await commentUser.update({comment, punctuation})

    return  await Product.findOne({where:{id:"d770bd1b-9276-4ac8-9109-0900c5a686c7"},include:{model:Review}})

}


module.exports={
  postCommentUser
}


