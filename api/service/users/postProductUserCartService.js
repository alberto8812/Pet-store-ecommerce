const { db, Op } = require('../../database/db')
const { Product, Genre, Category, User, Sale, SaleDetail, Review } = db.models
const axios = require('axios');
const dataUser = require('../../middleware/loginUser');
const { confirmationEmail } = require('../../middleware/confirmRoute');


const postProductUserCartService = async(req) => {
    //console.log(req.body)
    const { payment, products } = req.body
        // const { id, total, products } = req.body;
    const accessToken = req.headers.authorization.split(' ')[1];
    const userData = await dataUser(accessToken);
    console.log(userData, 'USERDATAAAAAA');
    ///console.log(payment.id)
    const updateUser = await User.findOne({ where: { email: userData } })
    const date = new Date


    // console.log(payment.id,payment.amount)
    const saleDb = await Sale.create({ invoice: payment.id, total: payment.amount, month: date.getMonth(), year: date.getFullYear() })


    await updateUser.addSale(saleDb)
        //  console.log(Object.keys(saleDb.__proto__));


    //console.log(products)
    //ciclo for para destructurar los productos
    for (const iterator of products) {
        const saleDetailDb = await SaleDetail.create({ price: iterator.price, quantity: iterator.quantity, subtotal: iterator.quantity * iterator.price })


        const productDb = await Product.findOne({ where: { id: iterator.id } })


        //consulta que permite indagar si el usuario ya exite en la tabla de reviews
        const findReviews = await Review.findOne({ where: { user: userData, idProduct: iterator.id } });

        if (findReviews == null) { //si el valor es null ingresa para registrar el usuario en la tabla
            const reviews = await Review.create({ user: userData, idProduct: iterator.id })
            await productDb.addReview(reviews) //se realiza la relacion con la tabla de productos
        }

        //relaciones  de ña tablas  venta y detalle, relacion entre producto y detalle
        await saleDb.addSaleDetails(saleDetailDb)
        await saleDetailDb.addProduct(productDb)

        //descontamos el stock 
        await productDb.update({ stock: productDb.stock - iterator.quantity })


    }


    const dbSearchProduct = await User.findAll({
        attributes: ['email'],
        where: { email: userData },
        include: [{
                model: Sale,
                attributes: ['id', 'total', 'invoice'],
                where: { invoice: payment.id },
                include: [{ model: SaleDetail, attributes: ['id', 'quantity', 'price', 'subtotal'], include: { model: Product, attributes: ['id', 'name'], include: [{ model: Category, attributes: ['name'] }, { model: Genre, attributes: ['name'] }] } }]
            }] ///tra todso los productos
    })

    const emailConfirm = confirmationEmail({ userData, products });

    return dbSearchProduct //dbSearchProduct; //updateUser;
}

module.exports = { postProductUserCartService }