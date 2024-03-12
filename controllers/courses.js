const Course = require("../models/Course")

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
}
