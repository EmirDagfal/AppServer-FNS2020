const mongoose = require('mongoose');

const port = 27017;
const server_url = 'http://localhost'
const database_name = 'API_Luminarias'
 
mongoose.connect(`${server_url}:${port}/${database_name}`, function (err) {
 
   if (err) throw err;
 
   console.log(`Base de datos ${database_name} escuchando en ${server_url}:${port}`);
});

module.exports = mongoose;