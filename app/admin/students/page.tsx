"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/client";

type Student = {
  id: string;
  full_name: string;
  email: string;
  class_name: string | null;
  username: string | null;
};

export default function AdminStudentsPage() {
  const supabase = createClient();

  const [students, setStudents] = useState<Student[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [className, setClassName] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function loadStudents() {
    setLoading(true);

    const { data, error } = await supabase
      .from("students")
      .select("id, full_name, email, class_name, username")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Load students error:", error);
      setMessage("Error loading students: " + error.message);
      setLoading(false);
      return;
    }

    setStudents(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleAddStudent(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setMessage("");

    if (
      !fullName.trim() ||
      !email.trim() ||
      !password ||
      !className.trim() ||
      !username.trim()
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setCreating(true);

    try {
      const response = await fetch("/api/admin/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName.trim(),
          email: email.trim(),
          password,
          role: "student",
          class_name: className.trim(),
          username: username.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(
          "Error: " +
            (result.error || "Failed to create student account.")
        );
        setCreating(false);
        return;
      }

      setFullName("");
      setEmail("");
      setPassword("");
      setClassName("");
      setUsername("");

      setMessage("Student account created successfully.");

      await loadStudents();

      setTimeout(() => {
        setMessage("");
      }, 4000);
    } catch (error) {
      console.error("Create student error:", error);
      setMessage("Error: Could not connect to the server.");
    } finally {
      setCreating(false);
    }
  }

  async function deleteStudent(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student account?\n\nThis will delete both the student record and the student's login account."
    );

    if (!confirmed) {
      return;
    }

    setDeleting(id);
    setMessage("");

    try {
      const response = await fetch(
        "/api/admin/delete-student",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setMessage(
          "Error: " +
            (result.error || "Failed to delete student account.")
        );
        setDeleting(null);
        return;
      }

      setMessage("Student account deleted successfully.");

      await loadStudents();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Delete student error:", error);
      setMessage("Error: Could not connect to the server.");
    } finally {
      setDeleting(null);
    }
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
            Manage Students
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Create and manage student login accounts.
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
          Back to Admin
        </Link>
      </header>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {message && (
          <div
            style={{
              padding: "14px 18px",
              marginBottom: "20px",
              borderRadius: "8px",
              background: message.startsWith("Error")
                ? "#fee2e2"
                : "#dcfce7",
              color: message.startsWith("Error")
                ? "#991b1b"
                : "#166534",
              fontWeight: "bold",
            }}
          >
            {message}
          </div>
        )}

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 3px 15px rgba(0,0,0,0.06)",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              color: "#123c69",
              marginTop: 0,
            }}
          >
            Create Student Account
          </h2>

          <form onSubmit={handleAddStudent}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px",
              }}
            >
              <div>
                <label style={labelStyle}>
                  Student Name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                  placeholder="Enter student name"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="student@example.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Minimum 6 characters"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  Class
                </label>

                <input
                  type="text"
                  value={className}
                  onChange={(event) =>
                    setClassName(event.target.value)
                  }
                  placeholder="Example: Primary 6"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  Username
                </label>

                <input
                  type="text"
                  value={username}
                  onChange={(event) =>
                    setUsername(event.target.value)
                  }
                  placeholder="Student username"
                  style={inputStyle}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={creating}
              style={{
                marginTop: "20px",
                background: creating
                  ? "#8aa1b8"
                  : "#123c69",
                color: "white",
                border: "none",
                padding: "12px 22px",
                borderRadius: "6px",
                cursor: creating
                  ? "not-allowed"
                  : "pointer",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {creating
                ? "Creating Account..."
                : "Create Student Account"}
            </button>
          </form>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 3px 15px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              color: "#123c69",
            }}
          >
            Student List
          </h2>

          {loading ? (
            <p>Loading students...</p>
          ) : students.length === 0 ? (
            <p style={{ color: "#777" }}>
              No students have been added yet.
            </p>
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
                    <th style={thStyle}>Email</th>
                    <th style={thStyle}>Class</th>
                    <th style={thStyle}>Username</th>
                    <th style={thStyle}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id}>
                      <td style={tdStyle}>
                        {index + 1}
                      </td>

                      <td style={tdStyle}>
                        {student.full_name}
                      </td>

                      <td style={tdStyle}>
                        {student.email}
                      </td>

                      <td style={tdStyle}>
                        {student.class_name || "-"}
                      </td>

                      <td style={tdStyle}>
                        {student.username || "-"}
                      </td>

                      <td style={tdStyle}>
                        <button
                          type="button"
                          disabled={deleting === student.id}
                          onClick={() =>
                            deleteStudent(student.id)
                          }
                          style={{
                            background:
                              deleting === student.id
                                ? "#fca5a5"
                                : "#dc2626",
                            color: "white",
                            border: "none",
                            padding: "8px 13px",
                            borderRadius: "5px",
                            cursor:
                              deleting === student.id
                                ? "not-allowed"
                                : "pointer",
                          }}
                        >
                          {deleting === student.id
                            ? "Deleting..."
                            : "Delete"}
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