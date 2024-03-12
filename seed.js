require("./config/database")
const Grade = require("./models/Grade")
const Course = require("./models/Course")
const Student = require("./models/Student")

const studentEnroll = async () => {}

const createCourse = async () => {
  let newCourse = await Course.create(
    { name: "Modern Quantum Mechanics" },
    { name: "Algorithms in C++" },
    { name: "Programming Languages Concepts and Constructs" },
    { name: "Chemical Process Industries" },
    { name: "Differential Equations" },
    { name: "Organic Chemistry" },
    { name: "Physics & Beyond" },
    { name: "A Handbook of Philosophy" },
    { name: "Object Oriented Information System" },
    { name: "Chemistry" },
    { name: "Mathematical Analysis of Physical Problems" },
    { name: "An Introduction to Mathematics" },
    { name: "Differential Space, Quantum Systems & Predictions" },
    { name: "Quantum Computing & Quantum Communications" }
  )
  console.log(newCourse)
}
// createCourse()

const createStudent = async () => {
  let newStudent = await Student.create(
    {
      name: "Olwen Obal",
      email: "oobal0@cbslocal.com",
    },
    {
      name: "Becki Llorente",
      email: "bllorente1@stanford.edu",
    },
    {
      name: "Jacinta Lavallin",
      email: "jlavallin2@hibu.com",
    },
    {
      name: "Galvan Kubanek",
      email: "gkubanek3@naver.com",
    },
    {
      name: "Ernest Commin",
      email: "ecommin4@addtoany.com",
    },
    {
      name: "Cynthy Searson",
      email: "csearson5@europa.eu",
    },
    {
      name: "Regen Mangenet",
      email: "rmangenet6@icq.com",
    },
    {
      name: "Alvy Minchinden",
      email: "aminchinden7@bigcartel.com",
    },
    {
      name: "Elane McGeagh",
      email: "emcgeagh8@example.com",
    },
    {
      name: "Modesta Bernaldez",
      email: "mbernaldez9@over-blog.com",
    }
  )
  console.log(newStudent)
}

// createStudent()
