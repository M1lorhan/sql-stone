const express = require('express');
const users = express.Router();
const db = require('../models')
const { Users } = db

users.get('/', async(req, res) => {
    try {
        const foundUsers = await Users.findAll()
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).send("Server error")
        console.log(error)
    }
})

module.exports = users