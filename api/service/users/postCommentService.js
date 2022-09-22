const {db,Op}=require('../../database/db')
const {Product, Review, User}=db.models

const postCommentUser = async(req, res)=>{

  const {id} = req.params
  const {comment, userId}= req.body

    let[newComment, create] = await Review.findOrCreate({
      where: {
        comment, 
        userId,
        id
      }
    })

    if(!create){
      res.status(200).send('el comentario ya está')
    }else{
      return json(newComment)
    }
 

}


module.exports={
  postCommentUser
}


