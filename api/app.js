const express=require("express"),
      app=express(),
      morgan = require('morgan'),
      cors=require('cors'),// providing a Connect/Express middleware that can be used to enable CORS with various options.
      v1ProducstRouter=require('./V1/routes/allProductsRouter'),
      v1UsersRouter=require('./v1/routes/usersRouter'),
      jwtCheck=require('./middleware/jwtLoginUser');

      

app.use(morgan('dev'));
app.use(express.json());

app.use(cors())

//middlewere JSON WEB TOKEN
//app.use(jwtCheck)

app.use("/products",v1ProducstRouter);

//app.use(jwtCheck)
//rote is all relation with users login,register
app.use("/users",v1UsersRouter)

module.exports=app