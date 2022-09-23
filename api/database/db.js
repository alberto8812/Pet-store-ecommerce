require('dotenv').config()
const {Sequelize,Op}=require('sequelize');
const{DB_USER, DB_PASSWORD, DB_HOST,DB_NAME}=process.env
const fs = require('fs');
const path = require('path');



const  sequelize =
process.env.NODE_ENV==="production"
   ? new Sequelize({
    database:DB_NAME,
    dialect:"postgres",
    host:DB_HOST,
    port:5432,
    username:DB_USER,
    password:DB_PASSWORD,
    pool:{
      max:3,
      min:1,
      idle:10000,
    },
    dialectOptions:{
      ssl:{
        require:true,
        rejectUnauthorized:false,
      },
      keepAlive:true,
    },
    ssl:true
   })
   : 
  new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    });

    
    const basename = path.basename(__filename);

    const modelDefiners = [];
    
    // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
    fs.readdirSync(path.join(__dirname, '/models'))
      .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
      .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
      });
    
    // Injectamos la conexion (sequelize) a todos los modelos
    modelDefiners.forEach(model => model(sequelize));
    // Capitalizamos los nombres de los modelos ie: product => Product
    let entries = Object.entries(sequelize.models);
    let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
    sequelize.models = Object.fromEntries(capsEntries);
    
    // En sequelize.models están todos los modelos importados como propiedades
    // Para relacionarlos hacemos un destructuring


    // Aca vendrian las relaciones
    // Product.hasMany(Reviews);
const { User, Sale, SaleDetail, Genre, Category , Product, Review} = sequelize.models

User.hasMany(Sale, { foreingKey: "userId",  sourceKey: "id" })
Sale.belongsTo(User, { foreingKey: "userId", targetId: "id" })

Sale.hasMany(SaleDetail, { foreingKey: "saleId",  sourceKey: "id"})
SaleDetail.belongsTo(Sale, { foreingKey: "saleId", targetId: "id"})

SaleDetail.belongsToMany(Product, {through: 'product_saledetail'})//SaleDetail.hasMany(Product, { foreingKey: "saleDetailId", sourceKey: "id" })
Product.belongsToMany(SaleDetail, {through: 'product_saledetail'})//Product.belongsTo(SaleDetail, { foreingKey: "saleDetailId", targetId: "id"})

Genre.hasMany(Product, { foreingKey: "genreId", sourceKey: "id"})///adicional
Product.belongsTo(Genre, { foreingKey: "genreId", targetId: "id"} )//adicional

Genre.belongsToMany(Category, {through: 'genre_category'})
Category.belongsToMany(Genre, {through: 'genre_category'})

Category.hasMany(Product, { foreingKey: "categoryId", sourceKey: "id"})
Product.belongsTo(Category, { foreingKey: "categoryId", targetId: "id"})

User.hasMany(Review, { foreingKey: "userId", sourceKey: "id"} )
Review.belongsTo(User, { foreingKey: "userId", targetId: "id"} )

Product.hasMany(Review, { foreingKey: "productId", sourceKey: "id"} )
Review.belongsTo(Product, { foreingKey: "productId", targetId: "id"})


 

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  db:sequelize,   // para importart la conexión { conn } = require('./db.js');
  Op
};
