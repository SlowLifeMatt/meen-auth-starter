// Dependencies
const express = require("express")
const userRouter = express.Router()
const User = require("../models/user.js")
const bcrypt = require("bcrypt")

//I N D U C E S

// New (registration page)
userRouter.get("/new", (req, res) => {
    res.render("users/new.ejs", {
      currentUser: req.session.currentUser,
    })
  })


// Create (registration route)
userRouter.post("/", (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser) => {
      console.log(error)
      res.redirect("/")
      
    })
  })

// Export User Router
module.exports = userRouter
