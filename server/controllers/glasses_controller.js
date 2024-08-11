const glasses = require('express').Router();
const { data } = require('autoprefixer');
const db = require('../models');
const { Glasses } = db

// Get all glasses
glasses.get('/', async (req, res) => {
    try {
        const foundGlasses = await Glasses.findAll();
        res.status(200).json(foundGlasses)
    } catch (error) {
        res.status(500).send("Server error");
        console.log(error)
    }
});

// Get glasses by ID
glasses.get('/:glasses_id', async (req, res) =>{
    const { glasses_id } = req.params
    const glasses = await Glasses.fingById(glasses_id).populate('glasses')
    res.render('glassesId', {
        glasses
    })
})

//add glasses
glasses.post('/:glasses_id', async (req, res) =>{
    res.status(201).json({
        status: "sucess",
        data: {
            glasses: "sunglasses"
        }
    })
})

//updated glasses
glasses.put('/:glasses_id', async (req, res) =>{
    console.log(req.params.glasses_id)
    res.status(200).json({
        status: "sucess",
        data: {
            glasses: "sunglasses"
        }
    })
})

//delete glasses
glasses.delete('/:glasses_id', async (req, res) =>{
    res.status(204).json({
        status: "sucess",
    })
})

module.exports = glasses;