var artista = require('./Models/artistas.model');

exports.findAll = (req, res) => {
   artista.find()
   .then(arts => {
      res.send(arts);
   })
   .catch(err => {
      res.status(500).send({
          message: err.message || "Something wrong while retrieving artists."
      });
   });
}

exports.findOne = (req, res) => {
   artista.findOne({'nombre': req.params.nombre})
   .then(art => {
       if(!art) {
           return res.status(404).send({
               message: "artist not found with name " + req.params.nombre
           });            
       }
       res.send(art);
   }).catch(err => {
       if(err.kind === 'ObjectId') {
           return res.status(404).send({
               message: "art not found with name " + req.params.nombre
           });                
       }
       return res.status(500).send({
           message: "Something wrong retrieving art with name " + req.params.nombre
       });
   });
};
