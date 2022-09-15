const {Category} = require('../database/db')

const allCategorys = async (req, res) => {
    let addCategory = [
        'Food',
        'accessory',
        'toy'
    ];

    addCategory.forEach(e => {
        Category.findOrCreate({ where: { name: e } })
    });
    const getCategory = await Category.findAll()
    res.status(200).json(getCategory)
}

module.exports={
    allCategorys
}