const glasses = require('express').Router();
const db = require('../models');
const { Glasses, Orders, Reviews, Users } = db
const { Op } = require('sequelize');

// GET ALL GLASSES
glasses.get('/', async (req, res) => {
    try {
        const foundGlasses = await Glasses.findAll({
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
        res.status(200).json(foundGlasses);
    } catch (error) {
        res.status(500).send("Server error");
        console.error(error);
    }
});


// GET GLASSES BY NAME
glasses.get('/:glasses_name', async (req, res) => {
    try {
        const foundGlasses = await Glasses.findOne({
            where: { glasses_name: req.params.glasses_name },
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
        if (foundGlasses) {
            res.status(200).json(foundGlasses);
        } else {
            res.status(404).json({ message: "Glasses not found" });
        }
    } catch (error) {
        console.error('Error fetching glasses:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// CREATE NEW GLASSES
glasses.post('/', async (req, res) => {
    try {
        const newGlasses = await Glasses.create(req.body);
        res.status(201).json({
            message: 'Successfully created new glasses',
            data: newGlasses
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


// UPDATE INDIVIDUAL GLASSES
glasses.put('/:glasses_id', async (req, res) => {
    try {
        const [updatedRows] = await Glasses.update(req.body, {
            where: { glasses_id: req.params.glasses_id }
        });

        if (updatedRows > 0) {
            res.status(200).json({
                message: 'Successfully updated glasses'
            });
        } else {
            res.status(404).json({ message: 'Glasses not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


// DELETE INDIVIDUAL GLASSES
glasses.delete('/:glasses_id', async (req, res) => {
    try {
        const deletedRows = await Glasses.destroy({
            where: { glasses_id: req.params.glasses_id }
        });

        if (deletedRows > 0) {
            res.status(200).json({
                message: 'Successfully deleted glasses'
            });
        } else {
            res.status(404).json({ message: 'Glasses not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = glasses;