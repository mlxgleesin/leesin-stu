var express = require('express');
var router = express.Router();

/* GET users listing. */
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

module.exports = router;
