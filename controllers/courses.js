const Course = require("../models/Course")

const allCourses = async (req, res) => {
  try {
    let courses = await Course.find()
    res.json(courses)
  } catch (error) {
    res.json({ error: error.message })
  }
}

const createCourse = async (req, res) => {
  try {
    let newCourse = await Course.create(req.body)
    res.json(newCourse)
  } catch (error) {
    res.json({ error: error.message })
  }
}

module.exports = {
  createCourse,
  allCourses,
}
