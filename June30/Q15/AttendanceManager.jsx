import React, { useState } from "react";

function AttendanceManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", present: true },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: true },
    { id: 4, name: "Diana", present: false },
    { id: 5, name: "Ethan", present: true }
  ]);

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2>Attendance Manager</h2>
      <ul style={{ padding: 0 }}>
        {students.map((student) => (
          <li
            key={student.id}
            style={{
              listStyle: "none",
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              backgroundColor: student.present ? "#e6ffe6" : "#ffe6e6"
            }}
          >
            <strong>{student.name}</strong> —{" "}
            {student.present ? "Present" : "Absent"}
            <br />
            <button onClick={() => toggleAttendance(student.id)}>
              Toggle
            </button>
          </li>
        ))}
      </ul>
      <h3>Total Present: {presentCount}</h3>
    </div>
  );
}

export default AttendanceManager;
