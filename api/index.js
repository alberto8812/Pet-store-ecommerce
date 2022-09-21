require('dotenv').config()
const PORT = process.env.PORT || 3001,
    app = require('./app'),
    { db } = require('./database/db');


<<<<<<< HEAD
db.sync({ force:false}).then(() => {
=======
db.sync({ force: false }).then(() => {
>>>>>>> 36071238376541a64a5d42862b5c4beb79a390a7
    app.listen(PORT, () => { console.log(`Server listeng on port ${PORT}`) });
}).catch(err => console.log(err))