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

module.exports = reviews