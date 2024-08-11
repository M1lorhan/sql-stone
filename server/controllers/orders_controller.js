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

//add order
orders.post('/:order_id', async (req, res) => {
    res.status(201).json({
        status: "sucess",
        data: {
            orders: "order 1"
        }
    })
})

//update order
orders.put('/:order_id', async (req, res) =>{
    console.log(req.params.order_id)
    res.status(200).json({
        status: "sucess",
        data: {
            orders: "order 1"
        }
    })
})

//delete order
orders.delete('/:order_id', async (req, res) =>{
    res.status(204).json({
        status: "sucess",
    })
})

module.exports = orders