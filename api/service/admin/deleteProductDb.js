const {db}=require('../../database/db')
const {Product}=db.models

const deleteProductsDb = async (req, res)=>{

    let id = req.params.id 
    await Product.destroy({where:{
      id, 
    }   }) //Aca en lugar de destroy es update actualizando la prop deleted a true 
    // await Product.update({deleted:true}, 
    //{where:{
    //   id, 
    // }})
   //CREAR LA PROP DELETED EN EL MODELO DE PRODUCTOS, CON UN DEFAULT VALUE EN FALSE
    return 'producto borrado exitosamente'
    
}

module.exports={
  deleteProductsDb
}