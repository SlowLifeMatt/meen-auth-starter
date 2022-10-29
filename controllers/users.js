// Dependencies
const express = require("express")
const userRouter = express.Router()
const User = require("../models/user.js")
const bcrypt = require("bcrypt")
//I N D U C E S

// New (registration page)
userRouter.post("/", (req, res) => {
    //overwrite the user password with the hashed password, then pass that in to our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    res.send(req.body)
  })

// Create (registration route)

// Export User Router
module.exports = userRouter