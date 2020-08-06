var express = require('express');
var router = express.Router();

router.get('/foods', function(req, res) {
  res.render('hates/foods', {title: 'Gross Foods', foods: ['crab', 'avocado']});
});

router.get('/animals', function(req, res) {
  res.render('hates/animals', {title: 'Worst Animals', animals: ['geese', 'duck']})
});

module.exports = router;