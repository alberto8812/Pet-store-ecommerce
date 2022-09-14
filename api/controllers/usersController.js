const { getLoginResponse } = require("../service/users/getLogin")


const getUserLogin=async(req,res)=>{

    try {
        const allproducts=await getLoginResponse(req)
    
        res.status(200).json(allproducts)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

}

module.exports={
    getUserLogin
}
