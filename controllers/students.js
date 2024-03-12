const Student = require("../models/Student")

const allStudents = async (req, res) => {
  try {
    let students = await Student.find()
    res.json(students)
  } catch (error) {
    res.json({ error: error.message })
  }
}

const createStudent = async (req, res) => {
  try {
    let newStudent = await Student.create(req.body)
    res.json(newStudent)
  } catch (error) {
    res.json({ error: error.message })
  }
}

const updateStudent = async (req, res) => {
  // be very careful with this function because the function name is updateStudent and the variable name is updatedStudent ----> update & updated
  try {
    let updatedStudent = await Student.findOne({ _id: req.params.id })
    courseId = req.body.courseId
    updatedStudent.courses.push(courseId)
    updatedStudent.save()
    res.json(updatedStudent)
  } catch (error) {
    res.json({ error: error.message })
  }
}

module.exports = {
  createStudent,
  updateStudent,
  allStudents,
}
