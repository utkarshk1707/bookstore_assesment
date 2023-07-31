import { default as orderRepository } from "../repository/OrderRepository.js";

class OrderService {
  async createOrder(customer_id, book_id) {
    return orderRepository.createOrder(customer_id, book_id);
  }

  async cancelOrder(order_id) {
    return orderRepository.cancelOrder(order_id);
  }

  async getOrdersByCustomerId(customer_id, limit, offset) {
    return orderRepository.getOrdersByCustomerId(customer_id, limit, offset);
  }
}

export default new OrderService();
