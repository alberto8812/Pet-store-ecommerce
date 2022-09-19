const express = require("express"),
    app = express(),
    morgan = require('morgan'),
    cors = require('cors'), // providing a Connect/Express middleware that can be used to enable CORS with various options.
    v1ProducstRouter = require('./V1/routes/allProductsRouter'),
    v1ProductCreate = require('./V1/routes/CreateProductRouter'),
    v1UsersRouter = require('./v1/routes/usersRouter'),
    jwtCheck = require('./middleware/jwtLoginUser'),
    V1testRouter = require('./V1/routes/testRouter'),
    v1contactUs = require('./V1/routes/contactUsRouter');


let nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// const path = require("path");

// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(morgan('dev'));
app.use(express.json());

app.use(cors())

//middlewere JSON WEB TOKEN


app.use("/products", v1ProducstRouter);

app.use("/create", v1ProductCreate);

app.use("/test", V1testRouter);

app.use('/aboutus', v1contactUs);



//app.use(jwtCheck)
//rote is all relation with users login,register
app.use("/users", v1UsersRouter)

module.exports = app