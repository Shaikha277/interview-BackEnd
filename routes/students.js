const express = require("express")
const router = express.Router()

const studentCTRL = require("../controllers/students")

router.get("/", studentCTRL.allStudents)

router.post("/", studentCTRL.createStudent)

router.put("/:id", studentCTRL.updateStudent)

module.exports = router
