const express = require('express')
const router = express.Router()

/* GET user listings. */
router.get('/user', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
