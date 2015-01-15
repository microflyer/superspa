var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/playground', function(req, res) {
  res.render('playground', { title: 'Playground' });
});

// GET - /members
router.get('/members', function (req, res) {
  var members = [
  {
    id: 1,
    firstName: "Wei",
    lastName: "Jia",
    department: "ADM"
  },
  {
    id: 2,
    firstName: "Xiaodan",
    lastName: "Xie",
    department: "ADM"
  },
  {
    id: 3,
    firstName: "Honglei",
    lastName: "Ren",
    department: "ADM"
  }];

  return res.json(members);
});

// POST - /members
router.post('/members', function (req, res) {
  req.body.id = 4;
  return res.json(req.body);
})

// PUT - /members/
router.put('/members', function (req, res) {
  return res.json(req.body);
})

// DELETE - /members/
router.delete('/members', function (req, res) {
  return res.json(req.body.id);
})

module.exports = router;
