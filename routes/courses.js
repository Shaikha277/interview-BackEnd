const express = require("express")
const router = express.Router()

const coursesCTRL = require("../controllers/courses")

// router.get("/",)

router.post("/", coursesCTRL.createCourse)

module.exports = router
