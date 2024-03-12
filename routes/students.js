const express = require("express")
const router = express.Router()

const studentCTRL = require("../controllers/students")

router.post("/", studentCTRL.createStudent)

module.exports = router
