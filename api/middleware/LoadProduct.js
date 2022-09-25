const { db } = require('../database/db')
const { Product, Genre, Category } = db.models


const LoadProduct=async(db1,db2,datatype)=>{
    let dbfilltable = [];
    for (let iterator of datatype) {
        dbfilltable = await Product.create({
            name: iterator.name,
            price: iterator.price,
            stock: iterator.stock,
            detail: iterator.detail,
            image: iterator.image,
            rating: iterator.rating ? iterator.rating : '1',
            age:iterator.age

        })

        await db1.addProducts(dbfilltable);
     

        await db2.addProducts(dbfilltable);
       
}
}

module.exports=LoadProduct;