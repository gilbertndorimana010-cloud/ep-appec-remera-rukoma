"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/client";

type Teacher = {
  id: string;
  full_name: string;
  email: string;
  subject: string | null;
};

export default function AdminTeachersPage() {
  const supabase = createClient();

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  async function loadTeachers() {
    setLoading(true);

    const { data, error } = await supabase
      .from("teachers")
      .select("id, full_name, email, subject")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading teachers:", error);
      setMessage("Error loading teachers: " + error.message);
      setLoading(false);
      return;
    }

    setTeachers(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadTeachers();
  }, []);

  async function handleAddTeacher(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setMessage("");

    if (
      !fullName.trim() ||
      !email.trim() ||
      !password ||
      !subject.trim()
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
          role: "teacher",
          subject: subject.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(
          "Error: " +
            (result.error || "Failed to create teacher account.")
        );
        setCreating(false);
        return;
      }

      setFullName("");
      setEmail("");
      setPassword("");
      setSubject("");

      setMessage("Teacher account created successfully.");

      await loadTeachers();

      setTimeout(() => {
        setMessage("");
      }, 4000);
    } catch (error) {
      console.error("Create teacher error:", error);
      setMessage("Error: Could not connect to the server.");
    }

    setCreating(false);
  }

  async function deleteTeacher(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this teacher?"
    );

    if (!confirmed) {
      return;
    }

    setMessage("");

    try {
      const response = await fetch(
        "/api/admin/delete-teacher",
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
            (result.error || "Failed to delete teacher account.")
        );
        return;
      }

      setMessage("Teacher account deleted successfully.");

      await loadTeachers();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Delete teacher error:", error);
      setMessage("Error: Could not connect to the server.");
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
            Manage Teachers
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Create and manage teacher login accounts.
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
            Create Teacher Account
          </h2>

          <form onSubmit={handleAddTeacher}>
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
                  Teacher Name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                  placeholder="Enter teacher name"
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
                  placeholder="teacher@example.com"
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
                  Subject
                </label>

                <input
                  type="text"
                  value={subject}
                  onChange={(event) =>
                    setSubject(event.target.value)
                  }
                  placeholder="Example: Mathematics"
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
                : "Create Teacher Account"}
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
          <h2 style={{ color: "#123c69" }}>
            Teacher List
          </h2>

          {loading ? (
            <p>Loading teachers...</p>
          ) : teachers.length === 0 ? (
            <p style={{ color: "#777" }}>
              No teachers have been added yet.
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
                    <th style={thStyle}>Subject</th>
                    <th style={thStyle}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {teachers.map((teacher, index) => (
                    <tr key={teacher.id}>
                      <td style={tdStyle}>
                        {index + 1}
                      </td>

                      <td style={tdStyle}>
                        {teacher.full_name}
                      </td>

                      <td style={tdStyle}>
                        {teacher.email}
                      </td>

                      <td style={tdStyle}>
                        {teacher.subject || "-"}
                      </td>

                      <td style={tdStyle}>
                        <button
                          type="button"
                          onClick={() =>
                            deleteTeacher(teacher.id)
                          }
                          style={{
                            background: "#dc2626",
                            color: "white",
                            border: "none",
                            padding: "8px 13px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Delete
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