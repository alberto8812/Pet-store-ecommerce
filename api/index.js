require('dotenv').config()
const PORT=process.env.PORT || 3001,
      app=require('./app'),
      {db}=require('./database/db');


db.sync({force:false}).then(()=>{
    app.listen(PORT,()=>{console.log(`Server listeng on port ${PORT}`)});
    }).catch(err=>console.log(err))

