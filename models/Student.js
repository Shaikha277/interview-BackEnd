const mongoose = require("mongoose")
const Schema = mongoose.Schema

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  courses: {
    type: [Schema.Types.ObjectId],
    ref: "Courses",
  },
})

module.exports = mongoose.model("Student", studentSchema)
