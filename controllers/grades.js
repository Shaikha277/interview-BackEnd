const Grade = require("../models/Grade")
const Student = require("../models/Student")

const gradeStudent = async (req, res) => {
  const studentId = req.params.id
  try {
    let grades = await Grade.find({ studentId: studentId })
    res.json(grades)
  } catch (error) {
    res.json({ error: error.message })
  }
}

const gradeCourse = async (req, res) => {
  courseId = req.params.id
  try {
    let grades = await Grade.find({ courseId: courseId })
    res.json(grades)
  } catch (error) {
    res.json({ error: error.message })
  }
}

module.exports = {
  gradeStudent,
  gradeCourse,
}
