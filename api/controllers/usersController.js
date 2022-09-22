const { getLoginResponse } = require("../service/users/getLoginService")
const { postUserDataResponse } = require("../service/users/postUserDataResponse")


////login de usuario registro en base de datos y retorna infomracion de usuario
const getUserLogin=async(req,res)=>{

    try {
        const getLoginUser=await getLoginResponse(req)
    
        res.status(200).json(getLoginUser)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}

//actualiza y/o retorna informacion del usuario
const postUserData=async (req,res)=>{
    try {
        const userData=await postUserDataResponse(req)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports={
    getUserLogin,
    postUserData
}
