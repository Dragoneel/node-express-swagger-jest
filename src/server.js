const log = require('./logger.js')
const app = require('./app.js')
const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")

const swaggerJsDocOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rest API documentation",
      version: "0.0.1",
      description:
        "This is a simple rest API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "DCHAR",
        url: "https://dchar.me",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["src/routes/*.js"],
}
const specs = swaggerJsdoc(swaggerJsDocOptions)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

const port = process.env.PORT || 3000
app.listen(port)

log.info(`Server listening on ${port}...`)
process.env.LOG_LEVEL === 'debug' && log.debug(`Debug activated`)
