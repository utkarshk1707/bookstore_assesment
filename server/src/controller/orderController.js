import OrderService from '../service/orderService.js';

class OrderController {
  async createOrder(req, res) {
    const { customer_id, book_id } = req.body;

    try {
      const order = await OrderService.createOrder(customer_id, book_id);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async cancelOrder(req, res) {
    const { order_id } = req.params;

    try {
      await OrderService.cancelOrder(order_id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getOrdersByCustomerId(req, res) {
    const { customer_id } = req.params;
    const { limit, offset } = req.query;

    try {
      const orders = await OrderService.getOrdersByCustomerId(
        customer_id,
        limit,
        offset
      );
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new OrderController();
