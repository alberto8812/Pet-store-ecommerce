


const getUserLogin=async(req,res)=>{
    const allproducts=await getAllProductsDogService()
    
    res.status(200).json({msg:allproducts})
}
