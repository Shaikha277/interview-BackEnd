const Student = require("../models/Student")

const createStudent = async (req, res) => {
  try {
    let newStudent = await Student.create(req.body)
    res.json(newStudent)
  } catch (error) {
    res.json({ error: error.message })
  }
}

const updateStudent = async (req, res) => {
  try {
    let updatedStudent = await Student.updateOne(
      { _id: req.params.id },
      req.body
    )
    res.json(updatedStudent)
  } catch (error) {
    res.json({ error: error.message })
  }
}

module.exports = {
  createStudent,
  updateStudent,
}
