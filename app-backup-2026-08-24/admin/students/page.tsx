"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Student = {
  id: number;
  name: string;
  className: string;
  username: string;
};

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedStudents = localStorage.getItem("epAppecStudents");

    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  function saveStudents(updatedStudents: Student[]) {
    setStudents(updatedStudents);
    localStorage.setItem(
      "epAppecStudents",
      JSON.stringify(updatedStudents)
    );
  }

  function handleAddStudent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !className.trim() || !username.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newStudent: Student = {
      id: Date.now(),
      name: name.trim(),
      className: className.trim(),
      username: username.trim(),
    };

    saveStudents([...students, newStudent]);

    setName("");
    setClassName("");
    setUsername("");
    setMessage("Student added successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function deleteStudent(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) {
      return;
    }

    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    saveStudents(updatedStudents);
    setMessage("Student deleted successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          maxWidth: "1100px",
          margin: "0 auto 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              color: "#123c69",
              margin: 0,
            }}
          >
            👨‍🎓 Manage Students
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Add and manage students of EP APPEC Remera Rukoma.
          </p>
        </div>

        <Link
          href="/admin"
          style={{
            background: "#123c69",
            color: "white",
            textDecoration: "none",
            padding: "11px 18px",
            borderRadius: "6px",
          }}
        >
          ← Admin Dashboard
        </Link>
      </header>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* ADD STUDENT */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#123c69",
              marginTop: 0,
            }}
          >
            Add New Student
          </h2>

          <form onSubmit={handleAddStudent}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "15px",
              }}
            >
              <div>
                <label
                  htmlFor="student-name"
                  style={labelStyle}
                >
                  Student Name
                </label>

                <input
                  id="student-name"
                  type="text"
                  placeholder="Enter student name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="student-class"
                  style={labelStyle}
                >
                  Class
                </label>

                <input
                  id="student-class"
                  type="text"
                  placeholder="Example: P5"
                  value={className}
                  onChange={(event) =>
                    setClassName(event.target.value)
                  }
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="student-username"
                  style={labelStyle}
                >
                  Username
                </label>

                <input
                  id="student-username"
                  type="text"
                  placeholder="Student username"
                  value={username}
                  onChange={(event) =>
                    setUsername(event.target.value)
                  }
                  style={inputStyle}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: "20px",
                background: "#123c69",
                color: "white",
                border: "none",
                padding: "12px 22px",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              ➕ Add Student
            </button>
          </form>

          {message && (
            <p
              style={{
                marginTop: "15px",
                color: "#18794e",
                fontWeight: "bold",
              }}
            >
              {message}
            </p>
          )}
        </div>

        {/* STUDENT LIST */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                color: "#123c69",
                margin: 0,
              }}
            >
              Student List
            </h2>

            <span
              style={{
                background: "#eaf1f8",
                color: "#123c69",
                padding: "7px 12px",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
            >
              {students.length} student
              {students.length !== 1 ? "s" : ""}
            </span>
          </div>

          {students.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "#777",
                border: "1px dashed #ccc",
                borderRadius: "8px",
              }}
            >
              No students have been added yet.
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th style={thStyle}>#</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Class</th>
                    <th style={thStyle}>Username</th>
                    <th style={thStyle}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id}>
                      <td style={tdStyle}>{index + 1}</td>
                      <td style={tdStyle}>{student.name}</td>
                      <td style={tdStyle}>{student.className}</td>
                      <td style={tdStyle}>{student.username}</td>
                      <td style={tdStyle}>
                        <button
                          onClick={() => deleteStudent(student.id)}
                          style={{
                            background: "#e74c3c",
                            color: "white",
                            border: "none",
                            padding: "8px 12px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "7px",
  fontWeight: "bold",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  boxSizing: "border-box" as const,
  fontSize: "15px",
};

const thStyle = {
  textAlign: "left" as const,
  padding: "12px",
  borderBottom: "2px solid #ddd",
  color: "#123c69",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};