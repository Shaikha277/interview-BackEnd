const express = require("express")
const router = express.Router()

const studentCTRL = require("../controllers/students")

router.post("/", studentCTRL.createStudent)

router.put("/:id", studentCTRL.updateStudent)

module.exports = router
