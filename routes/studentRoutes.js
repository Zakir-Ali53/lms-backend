const express = require("express");

const {
  addStudent,
  getStudents,
  getActiveStudents,
  getInactiveStudents,
  getStudent,
  updateStudent,
  changeStudentStatus,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

// ALL STUDENTS
router.get("/", getStudents);

// ACTIVE STUDENTS
router.get("/active", getActiveStudents);

// INACTIVE STUDENTS
router.get("/inactive", getInactiveStudents);

// ADD STUDENT
router.post("/", addStudent);

// SINGLE STUDENT
router.get("/:id", getStudent);

// UPDATE STUDENT
router.put("/:id", updateStudent);

// CHANGE STATUS
router.patch("/:id/status", changeStudentStatus);

// DELETE STUDENT
router.delete("/:id", deleteStudent);

module.exports = router;
