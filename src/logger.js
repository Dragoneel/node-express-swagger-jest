const bunyan = require('bunyan')

const log = bunyan.createLogger({
  name: 'node-service',
  streams: [
    {
      level: process.env.LOG_LEVEL || 'info',
      stream: process.stdout,
    },
  ],
})

module.exports = log