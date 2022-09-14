const express=require("express"),
      app=express(),
      morgan = require('morgan'),
      cors=require('cors'),// providing a Connect/Express middleware that can be used to enable CORS with various options.
      v1DogsProducstRouter=require('./v1/routes/dogsProductsRouter'),
      v1UsersRouter=require('./v1/routes/usersRouter'),
      jwtCheck=require('./middleware/jwtLoginUser');

      

app.use(morgan('dev'));
app.use(express.json());

app.use(cors())

//middlewere JSON WEB TOKEN
app.use(jwtCheck)

app.use("/dogs",v1DogsProducstRouter);


//rote is all relation with users login,register
app.use("/users",v1UsersRouter)

module.exports=app