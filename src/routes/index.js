const { Router } = require("express");
const mongoose = require('mongoose');
const Artistas = require('../database/Models/artistas.model');

// Conectar con la base de datos de artistas
mongoose.connect('mongodb://127.0.0.1:27017/ArtistasDB', { useNewUrlParser: true });
var dbA = mongoose.connection;
dbA.on('error', console.error.bind(console, 'connection error:'));
dbA.once('open', function() {
  console.log('Connected to DBArtistas');
});

//const connectionADB = require("../database/artistDB");
const router = Router();

router.get("/artistas/all", (req, res) => {
  Artistas.find()
  .then(artists => {
    res.json(
      {
        data: artists
      }
    )
  })
  .catch(err => {
    res.json({
      status: 'fail',
      message: err.message
    })
  })
});

// router.get("/artist/all", (req, res) => {
//   connectionADB.query('select * from artista', (err, data) => {
//     if (err) {
//       console.log('Error in the query');
//       console.log(err);
//     } else {
//       res.json(data);
//     }
//   })
// });

// router.get("/artist/:name", (req, res) => {
//   const name = req.params.name;
//   connectionADB.query('select * from artista where nombre = ?', [name], (err, data) => {
//     if (err) {
//       console.log('Error in the query');
//     } else {
//       res.json(data);
//     }
//   })
// });

// {}

// router.post('/artist/add', (req, res) => {
//   const {
//     name,
//     age
//   } = req.body;
//   res.json({
//     nombre: name,
//     edad: age
//   });
// });

module.exports = router;
