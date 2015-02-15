var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'AngularJS' });
});

router.get('/playground', function(req, res) {
  res.render('playground', { title: 'AngularJS Playground' });
});

router.get('/reactindex', function(req, res) {
  res.render('reactindex', { title: 'ReactJS' });
});

router.get('/reactplayground', function(req, res) {
  res.render('reactplayground', { title: 'ReactJS Playground' });
});

module.exports = router;
