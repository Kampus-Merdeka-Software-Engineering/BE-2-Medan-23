const express = require('express')
const router = express.Router()

// Hello world
router.get('/', (req, res, next) => {
  res.send("Hello World")
})

module.exports = router;