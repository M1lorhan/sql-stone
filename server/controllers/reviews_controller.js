const reviews = require('express').Router()
const db = require('../models')
const { Reviews } = db

//get all reviews
reviews.get('/', async(req, res) => {
    try {
        const foundReviews = await Reviews.findAll()
        res.status(200).json(foundReviews)
    } catch (error) {
        res.status(500).send("Server error")
        console.log(error)
    }
})

//add review
reviews.post('/:review_id', async (req, res) =>{
    res.status(201).json({
        status: "sucess",
        data: {
            reviews: "great job"
        }
    })
})

//update review
reviews.put('/:review_id', async (req, res) =>{
    console.log(req.params.review_id)
    res.status(200).json({
        status: "sucess",
        data: {
            reviews: "great job"
        }
    })
})

//delete reviews
reviews.delete('/:review_id', async (req, res) =>{
    res.status(204).json({
        status: "sucess",
    })
})

module.exports = reviews