const express = require("express")
const router = express.Router()
const gradesCTRL = require("../controllers/grades")

router.get("/coursegrades/:courseId", gradesCTRL.gradeCourse)
router.get("/studentgrades/:studentId", gradesCTRL.gradeStudent)
router.post("/:studentId/:courseId", gradesCTRL.createGrade)

module.exports = router
