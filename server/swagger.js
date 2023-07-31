import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
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
};

const specs = swaggerJsdoc(options);

export default specs;
