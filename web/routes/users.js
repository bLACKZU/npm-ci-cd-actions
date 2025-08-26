const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/user', function (req, res, next) {
  res.send('respond with resources')
})
module.exports = router
