import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import routes from './src/routes.js';

const app = express();
const port = process.env.PORT || 3002;

// Use body-parser middleware
app.use(bodyParser.json());
app.use(routes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Bookstore API',
      version: '1.0.0',
      description: 'API documentation for the Bookstore application',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Development server - Bookstore API',
      },
    ],
  },
  apis: ['./src/routes.js'],
})));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
