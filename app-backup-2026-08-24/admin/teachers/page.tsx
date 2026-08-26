"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Teacher = {
  id: number;
  name: string;
  subject: string;
  username: string;
};

export default function AdminTeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedTeachers = localStorage.getItem("epAppecTeachers");

    if (savedTeachers) {
      setTeachers(JSON.parse(savedTeachers));
    }
  }, []);

  function saveTeachers(updatedTeachers: Teacher[]) {
    setTeachers(updatedTeachers);
    localStorage.setItem(
      "epAppecTeachers",
      JSON.stringify(updatedTeachers)
    );
  }

  function handleAddTeacher(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !subject.trim() || !username.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newTeacher: Teacher = {
      id: Date.now(),
      name: name.trim(),
      subject: subject.trim(),
      username: username.trim(),
    };

    saveTeachers([...teachers, newTeacher]);

    setName("");
    setSubject("");
    setUsername("");
    setMessage("Teacher added successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function deleteTeacher(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (!confirmed) {
      return;
    }

    const updatedTeachers = teachers.filter(
      (teacher) => teacher.id !== id
    );

    saveTeachers(updatedTeachers);
    setMessage("Teacher deleted successfully.");

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
            👨‍🏫 Manage Teachers
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Add and manage teachers of EP APPEC Remera Rukoma.
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
        {/* ADD TEACHER */}
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
            Add New Teacher
          </h2>

          <form onSubmit={handleAddTeacher}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "15px",
              }}
            >
              <div>
                <label htmlFor="teacher-name" style={labelStyle}>
                  Teacher Name
                </label>

                <input
                  id="teacher-name"
                  type="text"
                  placeholder="Enter teacher name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="teacher-subject" style={labelStyle}>
                  Subject
                </label>

                <input
                  id="teacher-subject"
                  type="text"
                  placeholder="Example: Mathematics"
                  value={subject}
                  onChange={(event) =>
                    setSubject(event.target.value)
                  }
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="teacher-username" style={labelStyle}>
                  Username
                </label>

                <input
                  id="teacher-username"
                  type="text"
                  placeholder="Teacher username"
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
              ➕ Add Teacher
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

        {/* TEACHER LIST */}
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
              Teacher List
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
              {teachers.length} teacher
              {teachers.length !== 1 ? "s" : ""}
            </span>
          </div>

          {teachers.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "#777",
                border: "1px dashed #ccc",
                borderRadius: "8px",
              }}
            >
              No teachers have been added yet.
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
                    <th style={thStyle}>Subject</th>
                    <th style={thStyle}>Username</th>
                    <th style={thStyle}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {teachers.map((teacher, index) => (
                    <tr key={teacher.id}>
                      <td style={tdStyle}>{index + 1}</td>
                      <td style={tdStyle}>{teacher.name}</td>
                      <td style={tdStyle}>{teacher.subject}</td>
                      <td style={tdStyle}>{teacher.username}</td>
                      <td style={tdStyle}>
                        <button
                          onClick={() => deleteTeacher(teacher.id)}
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