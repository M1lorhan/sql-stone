const express = require('express');
const orders = express.Router();
const db = require('../models')
const { Orders } = db

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