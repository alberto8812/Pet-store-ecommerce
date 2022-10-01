const {db,Op}=require('../../database/db')
const {Product,Genre,Category}=db.models

const editProductsDb = async (req) => {
  let id = req.params.id
  console.log(id)
  let {name, price, detail, image, stock, rating, age } = req.body
  console.log(req.body, 'asxjsbcdhb')
  const edit = await Product.update({name, price, detail, image, stock, rating, age},
    {
      where:{
        id,
      }
  })
  console.log(edit, 'holiii')
  return 'Producto actualizado exitosamente'
}

module.exports = {
  editProductsDb
}