import express from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

let students = [
  {
    id: "S001",
    firstName: "Alice",
    lastName: "Smith",
    age: 16,
    grade: 10,
    major: "Science",
    courses: ["Physics", "Chemistry", "Biology", "Math"],
    contact: {
      email: "alice.smith@example.com",
      phone: "123-456-7890",
    },
  },
  {
    id: "S002",
    firstName: "Bob",
    lastName: "Johnson",
    age: 17,
    grade: 11,
    major: "Arts",
    courses: ["Literature", "History", "Art", "Music"],
    contact: {
      email: "bob.johnson@example.com",
      phone: "987-654-3210",
    },
  },
  {
    id: "S003",
    firstName: "Charlie",
    lastName: "Brown",
    age: 16,
    grade: 10,
    major: "Mathematics",
    courses: ["Algebra", "Geometry", "Calculus", "Statistics"],
    contact: {
      email: "charlie.brown@example.com",
      phone: "555-111-2222",
    },
  },
  {
    id: "S004",
    firstName: "Diana",
    lastName: "Prince",
    age: 18,
    grade: 12,
    major: "Computer Science",
    courses: ["Programming", "Data Structures", "Web Development"],
    contact: {
      email: "diana.prince@example.com",
      phone: "444-333-2222",
    },
  },
  {
    id: "S005",
    firstName: "Eve",
    lastName: "Adams",
    age: 17,
    grade: 11,
    major: "Business",
    courses: ["Economics", "Accounting", "Marketing"],
    contact: {
      email: "eve.adams@example.com",
      phone: "111-222-3333",
    },
  },
];

// Home route
app.get("/", (req, res) => {
  res.send("Hello I am Atharva!");
});

// Display all students
app.get("/students", (req, res) => {
  res.status(200).json(students);
  console.log(`[LOG] Displayed all students (${students.length} records)`);
});

// Get a student by ID
app.get("/student", (req, res) => {
  const id = req.query.id;
  const student = students.find((s) => s.id === id);
  if (student) {
    res.status(200).json(student);
    console.log(`[LOG] Retrieved student: ${id}`);
  } else {
    res.status(404).json({ error: "Student not found" });
    console.log(`[ERROR] Student with ID ${id} not found`);
  }
});

// Add a new student
app.post("/student", (req, res) => {
  const newStudent = req.body;

  // Prevent duplicate IDs
  if (students.find((s) => s.id === newStudent.id)) {
    return res.status(400).json({ error: "Student ID already exists" });
  }

  students.push(newStudent);
  console.log(`[LOG] Added new student: ${newStudent.id}`);
  console.table(
    students.map((s) => ({ id: s.id, name: `${s.firstName} ${s.lastName}` }))
  );

  res.status(201).json({ message: "Student added successfully", students });
});

// Update an existing student
app.put("/student/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  const index = students.findIndex((s) => s.id === id);
  if (index === -1) {
    console.log(`[ERROR] Update failed: Student with ID ${id} not found`);
    return res.status(404).json({ error: "Student not found" });
  }

  students[index] = { ...students[index], ...updatedData };
  console.log(`[LOG] Updated student: ${id}`);
  console.table(
    students.map((s) => ({ id: s.id, name: `${s.firstName} ${s.lastName}` }))
  );

  res
    .status(200)
    .json({
      message: "Student updated successfully",
      student: students[index],
    });
});

// Delete a student
app.delete("/student/:id", (req, res) => {
  const id = req.params.id;
  const initialLength = students.length;

  students = students.filter((s) => s.id !== id);

  if (students.length === initialLength) {
    console.log(`[ERROR] Delete failed: Student with ID ${id} not found`);
    return res.status(404).json({ error: "Student not found" });
  }

  console.log(`[LOG] Deleted student: ${id}`);
  console.table(
    students.map((s) => ({ id: s.id, name: `${s.firstName} ${s.lastName}` }))
  );

  res.status(200).json({ message: "Student deleted successfully", students });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
