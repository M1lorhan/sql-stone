const users = require('express').Router();
const db = require('../models');
const { Glasses, Orders, Reviews, Users } = db
const { Op } = require('sequelize');

//GET ALL USERS
users.get('/', async (req, res) => {
    try {
        const foundUsers = await Users.findAll({
            include: [
                {
                    model: Reviews,
                    as: 'reviews'
                },
                {
                    model: Orders,
                    as: "orders",
                }]
        });
        res.status(200).json(foundUsers);
    } catch (error) {
        res.status(500).send("Server error");
        console.error(error);
    }
});

//GET INDIVIDUAL USER
users.get('/:user_id', async (req, res) => {
    try {
        const foundUsers = await Users.findOne({
            where: { user_id: req.params.user_id },
            include: [
                {
                    model: Orders,
                    as: "orders",
                },
                {
                    model: Reviews,
                    as: "reviews",
                }]
        });
        if (foundUsers) {
            res.status(200).json(foundUsers);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// CREATE NEW USER
users.post('/', async (req, res) => {
    try {
        const newUser = await Users.create(req.body);
        res.status(201).json({
            message: 'Successfully created new user',
            data: newUser
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// UPDATE INDIVIDUAL USER
users.put('/:user_id', async (req, res) => {
    try {
        const [updatedRows] = await Users.update(req.body, {
            where: { user_id: req.params.user_id }
        });

        if (updatedRows > 0) {
            res.status(200).json({
                message: 'Successfully updated user'
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// DELETE INDIVIDUAL USER
users.delete('/:user_id', async (req, res) => {
    try {
        const deletedRows = await Users.destroy({
            where: { user_id: req.params.user_id }
        });

        if (deletedRows > 0) {
            res.status(200).json({
                message: 'Successfully deleted user'
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = users