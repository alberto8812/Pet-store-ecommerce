const {db,Op}=require('../../database/db')
const {Review}=db.models

const postCommentUser = async(req, res)=>{

  const accessToken=req.headers.authorization.split(' ')[1];
  const Userdata=await dataUser(accessToken);

  const {comment}= req.body

    let commentUser = await Review.findOne({
      where: {
        user: Userdata
      }
    })

    commentUser.update(comment, punctuation)

}


module.exports={
  postCommentUser
}


