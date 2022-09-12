const express=require("express"),
      app=express(),
      morgan = require('morgan'),
      v1DogsProducstRouter=require('./v1/routes/dogsProductsRouter');
  
app.use(morgan('dev'));
app.use(express.json());

app.use("/dogs",v1DogsProducstRouter);

module.exports=app