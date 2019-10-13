const express = require('express');
const PharmaRoutes = express.Router();


let PharmaData = require('./pharma.schema');
// return all the datas I need from my database. 987
PharmaRoutes.route('/').get(function (req, res) {
    PharmaData.find(function(err, results){
    if(err){
      res.json(err);
    }
    else {
      res.json(results);
    }
  });

});

PharmaRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  console.log(id);
  PharmaData.findOne({'recordid':id}, function (err, succes){
      if(err) {
        res.json(err);
        console.log(err);
      }else {
        res.json(succes);

      }

  });

});

module.exports = PharmaRoutes;
