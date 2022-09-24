const {db,Op}=require('../../database/db')
const {Review,Product}=db.models

const postCommentUser = async(req, res)=>{

  //const accessToken=req.headers.authorization.split(' ')[1];
  //const Userdata=await dataUser(accessToken);

  const {comment,punctuation}= req.body
  console.log(punctuation)
    let commentUser = await Review.findOne({
      where: {
        id: "6e89d268-7b78-4802-bfb1-28bd0c53427b"
      }
    })

    await commentUser.update({comment, punctuation})

    return  await Product.findOne({where:{id:"7351cc30-62f1-4c84-87db-8dbef5378446"},include:{model:Review}})

}


module.exports={
  postCommentUser
}


