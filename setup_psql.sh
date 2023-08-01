#!/bin/bash

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    # PostgreSQL is not installed, install PostgreSQL 13 (for macOS using Homebrew)
    brew install postgresql@13
    # Start PostgreSQL service
    brew services start postgresql@13
fi

# Create database "bookstore_assesment" and connect to PostgreSQL
createdb bookstore_assesment

# Connect to the database
psql bookstore_assesment

# Create a table for books with discount field and insert dummy data
echo "CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  writer VARCHAR(255),
  cover_image VARCHAR(255),
  price INT,
  discount DECIMAL(5, 2),
  tags VARCHAR(255));" | psql bookstore_assesment

echo "INSERT INTO books (title, writer, cover_image, point, discount, tags)
  VALUES
    ('Book 1', 'Author 1', 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg', 100, 0.1, 'fiction'),
    ('Book 2', 'Author 2', 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg', 150, 0.2, 'non-fiction'),
    ('Book 3', 'Author 3', 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg', 200, 0.15, 'science'),
    ('Book 4', 'Author 4', 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg', 120, 0.05, 'essay');" | psql bookstore_assesment

# Exit from PostgreSQL
\q
