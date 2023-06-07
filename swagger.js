import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todoist API',
      description: 'nFactorial Incubator 2023 React Day 3 Homework',
      version: '0.0.0.1',
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                in: "header"
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
  },
  // looks for configuration in specified directories
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

export default swaggerDocs