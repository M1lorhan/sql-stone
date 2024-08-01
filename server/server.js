//dependencies
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors')

//middleware
require('dotenv').config()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//controller
const glassesController = require('./controllers/glasses_controller');
const reviewsController = require('./controllers/reviews_controller');
const ordersController = require('./controllers/orders_controller');
const usersController = require('./controllers/users_controller');
app.use('/api/glasses', glassesController);
app.use('/api/reviews', reviewsController);
app.use('/api/orders', ordersController);
app.use('/api/users', usersController);

//listen
app.listen(4005, () => {
    console.log('server is running on port 4005')
})