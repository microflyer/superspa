var express = require('express');
var router = express.Router();

function validateUser(token) {
  if (token === "Ajut9kGNByipqwABZ") {
    return true;
  }

  return false;
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/playground', function(req, res) {
  res.render('playground', { title: 'Playground' });
});

router.get('/people', function (req, res, next) {
  var authToken = req.get('authorizaion-token');
  if (validateUser(authToken)) {
    res.json([{name: "Neil", age: 32}, {name: "Jill", age: 30}]);
  } else {
    res.status(401).end();
  }
});

router.post('/authorize', function (req, res, next) {
  res.json({authorizaionToken: "Ajut9kGNByipqwABZ"});
});

module.exports = router;
