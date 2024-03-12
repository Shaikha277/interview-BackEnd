const mongoose = require("mongoose")
const Schema = mongoose.Schema

const gradeSchema = new Schema({
  score: Number,
  letter: String,
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
})

module.exports = mongoose.model("Grade", gradeSchema)
