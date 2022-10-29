// Dependencies
const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const hashedString = bcrypt.hashSync("yourPasswordStringHere", bcrypt.genSaltSync(10))

// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }))

// Routes / Controllers
const userController = require("./controllers/users")
app.use("/users", userController)

// Database Connection Error / Success
const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

// Listener
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))