const orders = require('express').Router();
const db = require('../models');
const { Glasses, Orders, Reviews, Users } = db
const { Op } = require('sequelize');

//GET ALL ORDERS
orders.get('/', async (req, res) => {
    try {
        const foundOrders = await Orders.findAll({
            include: [
                {
                    model: Glasses,
                    as: 'glasses'
                },
                {
                    model: Users,
                    as: "users",
                }]
        });
        res.status(200).json(foundOrders);
    } catch (error) {
        res.status(500).send("Server error");
        console.error(error);
    }
});

//GET INDIVIDUAL ORDER
orders.get('/:order_id', async (req, res) => {
    try {
        const foundOrder = await Orders.findOne({
            where: { order_id: req.params.order_id },
            include: [
                {
                    model: Glasses,
                    as: "glasses",
                },
                {
                    model: Users,
                    as: "users",
                }]
        });
        if (foundOrder) {
            res.status(200).json(foundOrder);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// CREATE NEW ORDER
orders.post('/', async (req, res) => {
    try {
        const newOrder = await Orders.create(req.body);
        res.status(201).json({
            message: 'Successfully created new order',
            data: newOrder
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// UPDATE INDIVIDUAL ORDER
orders.put('/:order_id', async (req, res) =>{
    try {
        const [updatedRows] = await Orders.update(req.body, {
            where: { order_id: req.params.order_id }
        });

        if (updatedRows > 0) {
            res.status(200).json({
                message: 'Successfully updated order'
            });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// DELETE INDIVIDUAL ORDER
orders.delete('/:order_id', async (req, res) =>{
    try {
        const deletedRows = await Orders.destroy({
            where: { order_id: req.params.order_id }
        });

        if (deletedRows > 0) {
            res.status(200).json({
                message: 'Successfully deleted order'
            });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = orders