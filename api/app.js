const express=require("express"),
      app=express(),
      morgan = require('morgan'),
      cors=require('cors'),// providing a Connect/Express middleware that can be used to enable CORS with various options.
      v1ProducstRouter=require('./V1/routes/allProductsRouter'),
      v1ProductCreate=require('./V1/routes/CreateProductRouter'),
      v1UsersRouter=require('./v1/routes/usersRouter'),
      v1ProductsUsersRouter=require('./v1/routes/productsUsersRouter'),
      jwtCheck=require('./middleware/jwtLoginUser');

      

app.use(morgan('dev'));
app.use(express.json());

app.use(cors())

//middlewere JSON WEB TOKEN


app.use("/products",v1ProducstRouter);

app.use("/create",v1ProductCreate)

app.use("/users",v1UsersRouter)

app.use("/products/users",jwtCheck,v1ProductsUsersRouter)

module.exports=app