const mongoose = require('mongoose');

const artistaSchema = mongoose.Schema({
   rfc: String,
   nombre: String,
   direccion: String,
   telefono: String,
   email: String,
   albums: [
      {
         id: Number,
         titulo: String,
         canciones: Array,
         precio: Number
      }
   ]
});

module.exports = mongoose.model('artistas', artistaSchema);