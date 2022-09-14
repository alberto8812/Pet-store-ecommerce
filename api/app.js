const express=require("express"),
      app=express(),
      morgan = require('morgan'),
      v1DogsProducstRouter=require('./v1/routes/dogsProductsRouter'),
      v1UsersRouter=require('./v1/routes/usersRouter'),
      { expressjwt: jwt } = require("express-jwt"),//Express middleware for validating JWTs (JSON Web Tokens)
      jwks=require('jwks-rsa');
  
app.use(morgan('dev'));
app.use(express.json());

app.use("/dogs",v1DogsProducstRouter);


//rote is all relation with users login,register
app.use("/users",v1UsersRouter)

module.exports=app