class Book {
    constructor(id, title, writer, cover_image, point, tags, discount) {
      this.id = id;
      this.title = title;
      this.author = writer;
      this.coverImage = cover_image;
      this.price = point;
      this.tags = tags;
      this.discount = discount > 1 ? discount : discount * 100;
    }
  }
  
  export default Book;
  