import pool from '../../db.js';
import Order from '../entity/Order.js';

class OrderRepository {
  async createOrder(customer_id, book_id) {
    const query =
      'INSERT INTO orders (customer_id, book_id, ordered_at, is_cancelled) VALUES ($1, $2, NOW(), false) RETURNING *';
    const values = [customer_id, book_id];
    const { rows } = await pool.query(query, values);

    return new Order(
      rows[0].id,
      rows[0].customer_id,
      rows[0].book_id,
      rows[0].ordered_at,
      rows[0].is_cancelled
    );
  }

  async cancelOrder(order_id) {
    const query = 'UPDATE orders SET is_cancelled = true WHERE id = $1';
    const values = [order_id];
    await pool.query(query, values);
  }

  async getOrdersByCustomerId(customer_id, limit, offset) {
    const query =
      'SELECT * FROM orders WHERE customer_id = $1 ORDER BY ordered_at DESC LIMIT $2 OFFSET $3';
    const values = [customer_id, limit, offset];
    const { rows } = await pool.query(query, values);

    return rows.map(
      (row) =>
        new Order(
          row.id,
          row.customer_id,
          row.book_id,
          row.ordered_at,
          row.is_cancelled
        )
    );
  }
}

export default new OrderRepository();
