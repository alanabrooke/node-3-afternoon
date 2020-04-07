const express = require('express');
const massive = require('massive');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

let { CONNECTION_STRING, SERVER_PORT } = process.env;
app.listen( SERVER_PORT, () => console.log(`Party on, Wayne!`) );

app.use(express.json());

massive(CONNECTION_STRING)
.then( db => {
        app.set('db', db);
        console.log('Connection to database successful');
    } 
)
.catch( err => console.log(err) )

var controller = require('./controller/product_controller');

let { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = controller;

app.get(`/api/products`, getProducts);
app.post(`/api/products`, createProduct);
app.get(`/api/products/:id`, getProduct);
app.put(`/api/products/:id`, updateProduct);
app.delete(`/api/products/:id`, deleteProduct);