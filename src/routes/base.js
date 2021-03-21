const log = require('../logger.js')
const express = require('express')
const router  = express.Router()

/**
 * @swagger
 * /:
 *   get:
 *     summary: Root API.
 *     description: Display a welcome message.
 *     responses:
 *       200:
 *         description: Welcome message.
 */
router.get('/', (req, res) => {
  log.debug('Handling request for endpoint: GET /')
  res.send(`Hello World`)
})

module.exports = router