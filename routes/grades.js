const express = require("express")
const router = express.Router()
const gradesCTRL = require("../controllers/grades")

router.get("/coursegrades/:courseId", gradesCTRL.gradeCourse)
router.get("/studentgrades/:Id", gradesCTRL.gradeStudent)

module.exports = router
