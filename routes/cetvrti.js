var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cetvrti', { title: 'Cetvrti' });
  // IZMENI CETVRTI na oba mesta ako ti se menja ime
});

module.exports = router;
