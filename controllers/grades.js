const Grade = require("../models/Grade")
const Student = require("../models/Student")

const gradeStudent = async (req, res) => {
  const studentId = req.params.studentId
  try {
    let grades = await Grade.find({ studentId: studentId })
    res.json(grades)
  } catch (error) {
    res.json({ error: error.message })
  }
}

const gradeCourse = async (req, res) => {
  const courseId = req.params.courseId
  try {
    let grades = await Grade.find({ courseId: courseId })
    res.json(grades)
  } catch (error) {
    res.json({ error: error.message })
  }
}

const createGrade = async (req, res) => {
  try {
    const studentId = req.params.studentId
    const courseId = req.params.courseId
    const gpa = Math.floor(Math.random() * 5)
    let gpaLetter = ""
    if (gpa === 0) {
      gpaLetter = "F"
    } else if (gpa === 1) {
      gpaLetter = "D"
    } else if (gpa === 2) {
      gpaLetter = "C"
    } else if (gpa === 3) {
      gpaLetter = "B"
    } else if (gpa === 4) {
      gpaLetter = "A"
    }

    let newGrade = await Grade.create({
      score: gpa,
      letter: gpaLetter,
      studentId: studentId,
      courseId: courseId,
    })
    res.json(newGrade)
  } catch (error) {
    res.json({ error: error.message })
  }
}

module.exports = {
  gradeStudent,
  gradeCourse,
  createGrade,
}
