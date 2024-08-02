const orders = require('express').Router();
const db = require('../models')
const { Orders } = db

//get all orders
orders.get('/', async(req, res) => {
    try {
        const foundOrders = await Orders.findAll()
        res.status(200).json(foundOrders)
    } catch (error) {
        res.status(500).send("Server error")
        console.log(error)
    }
})

module.exports = orders