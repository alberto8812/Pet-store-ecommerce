const { getLoginResponse } = require("../service/users/getLoginService")


const getUserLogin=async(req,res)=>{

    try {
        const getLoginUser=await getLoginResponse(req)
    
        res.status(200).json(getLoginUser)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}

module.exports={
    getUserLogin
}
