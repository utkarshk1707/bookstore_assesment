import express from 'express';
import controller from './controller/controller.js';


const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API endpoints for managing books
 * 
 * /books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Successful operation
 *       500:
 *         description: Internal server error
 */
router.get('/books', controller.bookController.getAllBooks);

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints for managing orders
 * 
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: integer
 *               bookId:
 *                 type: integer
 *               points:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Order created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/orders', controller.orderController.createOrder);

/**
 * @swagger
 * /orders/{order_id}:
 *   delete:
 *     summary: Cancel an order
 *     tags: [Orders]
 *     parameters:
 *       - name: order_id
 *         in: path
 *         description: ID of the order to cancel
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order cancelled successfully
 *       500:
 *         description: Internal server error
 */
router.delete('/orders/:order_id', controller.orderController.cancelOrder);

/**
 * @swagger
 * /orders/{customer_id}:
 *   get:
 *     summary: Get all orders by customer ID
 *     tags: [Orders]
 *     parameters:
 *       - name: customer_id
 *         in: path
 *         description: ID of the customer
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *       500:
 *         description: Internal server error
 */
router.get('/orders/:customer_id', controller.orderController.getOrdersByCustomerId);



export default router;