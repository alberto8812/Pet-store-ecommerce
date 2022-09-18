const express=require("express"),
      app=express(),
      morgan = require('morgan'),
      cors=require('cors'),// providing a Connect/Express middleware that can be used to enable CORS with various options.
      helmet = require("helmet"),
      v1ProducstRouter=require('./V1/routes/allProductsRouter'),
      v1ProductCreate=require('./V1/routes/CreateProductRouter'),
      v1UsersRouter=require('./v1/routes/usersRouter'),
      {jwtCheck,checkpermissions}=require('./middleware/jwtLoginUser')
   


app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());
app.use(cors())

//middlewere JSON WEB TOKEN

//ruta general  sin registro
app.use("/products",v1ProducstRouter);

//ruta para usuarios registrados
app.use("/loginUsers",jwtCheck,v1UsersRouter);


///proximamente ruta para roll admi
app.use("/create",v1ProductCreate)


module.exports=app