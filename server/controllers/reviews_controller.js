const reviews = require('express').Router();
const db = require('../models');
const { Glasses, Orders, Reviews, Users } = db
const { Op } = require('sequelize');

//GET ALL REVIEWS
reviews.get('/', async (req, res) => {
    try {
        const foundReviews = await Reviews.findAll({
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
        res.status(200).json(foundReviews);
    } catch (error) {
        res.status(500).send("Server error");
        console.error(error);
    }
});

//GET INDIVIDUAL REVIEW
reviews.get('/:review_id', async (req, res) => {
    try {
        const foundReview = await Reviews.findOne({
            where: { review_id: req.params.review_id },
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
        if (foundReview) {
            res.status(200).json(foundReview);
        } else {
            res.status(404).json({ message: "Review not found" });
        }
    } catch (error) {
        console.error('Error fetching review:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// CREATE NEW REVIEW
reviews.post('/', async (req, res) => {
    try {
        const newReview = await Reviews.create(req.body);
        res.status(201).json({
            message: 'Successfully created new review',
            data: newReview
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// UPDATE INDIVIDUAL REVIEW
reviews.put('/:review_id', async (req, res) =>{
    try {
        const [updatedRows] = await Reviews.update(req.body, {
            where: { review_id: req.params.review_id }
        });

        if (updatedRows > 0) {
            res.status(200).json({
                message: 'Successfully updated review'
            });
        } else {
            res.status(404).json({ message: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// DELETE INDIVIDUAL REVIEW
reviews.delete('/:review_id', async (req, res) =>{
    try {
        const deletedRows = await Reviews.destroy({
            where: { review_id: req.params.review_id }
        });

        if (deletedRows > 0) {
            res.status(200).json({
                message: 'Successfully deleted review'
            });
        } else {
            res.status(404).json({ message: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = reviews