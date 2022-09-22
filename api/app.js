const express = require("express"),
    app = express(),
    morgan = require('morgan'),
    cors = require('cors'), // providing a Connect/Express middleware that can be used to enable CORS with various options.
    helmet = require("helmet"),
    v1ProducstRouter = require('./V1/routes/allProductsRouter'),
    v1UsersRouter = require('./v1/routes/usersRouter'),
    v1AdminRouter = require('./V1/routes/adminRouter'),
   //v1contactUs = require('./V1/routes/contactUsRouter'),
    { jwtCheck, checkpermissions } = require('./middleware/jwtLoginUser');


//let nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// const path = require("path");

// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cors());


//middlewere JSON WEB TOKEN

//app.use('/aboutus', v1contactUs);

//ruta general  sin registro
app.use("/products", v1ProducstRouter);

//ruta para usuarios registrados
app.use("/loginUsers", v1UsersRouter);
// jwtCheck

///proximamente ruta para roll admi
app.use("/loginAdmin", jwtCheck, checkpermissions, v1AdminRouter)


module.exports = app