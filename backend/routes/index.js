var express = require('express');
var router = express.Router();
const user = require('../models/user')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/adddata', async function (req, res, next) {

  try {
    var data = await user.create(req.body)
    res.status(200).json({
      data
    })
  }
  catch (err) {
    res.status(401).json({
      err:err
    })
  }
});


router.get('/getdata', async function (req, res, next) {

  try {
    var data = await user.find()
    res.status(200).json({
      data
    })
  }
  catch (err) {
    res.status(401).json({
      err:err
    })
  }
});

module.exports = router;
