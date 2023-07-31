class Order {
    constructor(id, customer_id, book_id, ordered_at, is_cancelled) {
      this.id = id;
      this.customer_id = customer_id;
      this.book_id = book_id;
      this.ordered_at = ordered_at;
      this.is_cancelled = is_cancelled;
    }
  }
  
  export default Order;
  