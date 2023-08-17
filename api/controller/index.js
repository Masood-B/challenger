const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} =
require('../middleware/AuthenticateUser')
const routes = express.Router()
// Import all model's objects
const {users, books, orders, bookAuthors} = require('../model')

// ===== User router =====

// routes.get('^/$|/chanllenger', (req, res)=>{
//     res.sendFile(path.resolve(__direname, "../static/html/index.html"))
// })

routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register',
 bodyParser.json(),
 (req, res)=>{
    users.register(req, res)
})
routes.post('/login',
bodyParser.json(),
(req, res)=>{
    users.login(req, res)
})
routes.put('/user/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req, res)
})
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})

// ===== Book router =====

routes.get('/books', (req, res)=>{
    books.fetchBooks(req, res)
})
routes.get('/book/:id', (req, res)=>{
    books.fetchBook(req, res)
})
routes.post('/registerbook',
bodyParser.json(),
(req, res)=>{
    books.registerbook(req, res)
})
routes.put('/book/:id',bodyParser.json(),
(req, res)=>{
    books.updateBook(req, res)
})
routes.patch('/book/:id',bodyParser.json(),
(req, res)=>{
    books.updateBook(req, res)  
})
routes.delete('/book/:id', (req, res)=>{
    books.deleteBook(req, res)
})

// ===== Order router =====

routes.get('/orders', (req, res)=>{
    orders.fetchOrders(req, res)
})
routes.get('/order/:id', (req, res)=>{
    orders.fetchOrder(req, res)
})
routes.post('/registerOrder',
bodyParser.json(),
(req, res)=>{
    orders.registerOrder(req, res)
})
routes.put('/order/:id',bodyParser.json(),
(req, res)=>{
    orders.updateOrder(req, res)
})
routes.patch('/order/:id',bodyParser.json(),
(req, res)=>{
    orders.updateOrder(req, res)
})
routes.delete('/order/:id', (req, res)=>{
    orders.deleteOrder(req, res)
})


// ===== BookAuthor router =====

routes.get('/bookAuthors',(req, res)=>{
    bookAuthors.fetchBookAuthors(req, res)
})
routes.get('/bookAuthor/:id',(req, res)=>{
    bookAuthors.fetchBookAuthor(req, res)
})
routes.post('/registerBookAuthor',
bodyParser.json(),
(req, res)=>{
    bookAuthors.registerBookAuthor(req, res)
})
routes.put('/bookAuthor/:id',bodyParser.json(),
(req, res)=>{
    bookAuthors.updateBookAuthor(req, res)
})
routes.patch('/bookAuthor/:id',bodyParser.json(),
(req, res)=>{
    bookAuthors.updateBookAuthor(req, res)
})
routes.delete('/bookAuthor/:id', (req, res)=>{
    bookAuthors.deleteBookAuthor(req, res)
})
module.exports = {
    express,
    routes
}