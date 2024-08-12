const users = require('express').Router();
const { where } = require('sequelize')
const db = require('../models');
const { Glasses, Orders, Reviews, Users } = db
const { Op } = require('sequelize');
const { data } = require('autoprefixer');
const { use } = require('./glasses_controller');

//get all users
users.get('/users', async(req, res) => {
    try {
        const foundUsers = await Users.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).send("Server error")
        console.log(error)
    }
})

//add user
users.post('/:user_id', async (req, res) =>{
    res.status(201).json({
        status: "sucess",
        data: {
            users: "Steve"
        }
    })
})

//update user
users.put('/:user_id', async (req, res) =>{
    console.log(req.params.user_id)
    res.status(200).json({
        status: "sucess",
        data: {
            users: "Steve"
        }
    })
})

//delete user
users.delete('/:user_id', async (req, res) =>{
    res.status(204).json({
        status: "sucess",
    })
})

module.exports = users