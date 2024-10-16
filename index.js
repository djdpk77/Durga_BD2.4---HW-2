const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let books = [
  { title: 'Moby Jonas', author: 'Herman Melville', publication_year: 2023 },
  { title: '1984', author: 'George Orwell', publication_year: 1984 },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Jonas',
    publication_year: 2000,
  },
];

let employees = [
  { name: 'John', salary: 75000 },
  { name: 'Doe', salary: 30000 },
  { name: 'Jane', salary: 50000 },
];

let products = [
  { name: 'Product A', price: 15 },
  { name: 'Product B', price: 25 },
  { name: 'Product C', price: 10 },
];

let movies = [
  { title: 'Movie A', rating: 9.0 },
  { title: 'Movie C', rating: 7.0 },
  { title: 'Movie B', rating: 8.5 },
];

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Function to sort books by their year in ascending order
function sortBooksByYear(book1, book2) {
  return book1.publication_year - book2.publication_year;
}

//Endpoint 1: Sort Books by Year in ascending order
app.get('/books/sort-by-year', (req, res) => {
  let booksCopy = books.slice();
  booksCopy.sort(sortBooksByYear);

  res.json(booksCopy);
});

// Function to sort employees by salary in descending order
function sortEmployeesBySalary(emp1, emp2) {
  return emp2.salary - emp1.salary;
}

//Endpoint 2: Sort Employees by Salary in Descending Order
app.get('/employees/sort-by-salary', (req, res) => {
  let employeesCopy = employees.slice();
  employeesCopy.sort(sortEmployeesBySalary);

  res.json(employeesCopy);
});

// Function to sort products by price in ascending order
function sortProductsByPrice(prod1, prod2) {
  return prod1.price - prod2.price;
}

//Endpoint 3: Sort Products by Price in Ascending Order
app.get('/products/sort-by-price', (req, res) => {
  let productsCopy = products.slice();
  productsCopy.sort(sortProductsByPrice);

  res.json(productsCopy);
});

// Function to sort movies by rating in descending order
function sortMoviesByRating(movie1, movie2) {
  return movie2.rating - movie1.rating;
}

//Endpoint 4: Sort Movies by Rating in Descending Order
app.get('/movies/sort-by-rating', (req, res) => {
  let moviesCopy = movies.slice();
  moviesCopy.sort(sortMoviesByRating);

  res.json(moviesCopy);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
