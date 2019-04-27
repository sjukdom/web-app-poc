const {
  Router
} = require("express");
const connectionADB = require("../database/artistDB");
const router = Router();

router.get("/test/:zz/:num", (req, res) => {
  var data = req.params;
  var num = req.params.num;
  res.json({
    title: "hello fucking world! " + data.zz + num
  });
});

router.get("/artist/all", (req, res) => {
  connectionADB.query('select * from artista', (err, data) => {
    if (err) {
      console.log('Error in the query');
      console.log(err);
    } else {
      res.json(data);
    }
  })
});

router.get("/artist/:name", (req, res) => {
  const name = req.params.name;
  connectionADB.query('select * from artista where nombre = ?', [name], (err, data) => {
    if (err) {
      console.log('Error in the query');
    } else {
      res.json(data);
    }
  })
});

// {}

router.post('/artist/add', (req, res) => {
  const {
    name,
    age
  } = req.body;
  res.json({
    nombre: name,
    edad: age
  });
});

module.exports = router;
