"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

type Assignment = {
  id: string;
  course_id: string | null;
  title: string;
  description: string | null;
  instructions: string | null;
  due_date: string | null;
  created_at: string;
};

type Course = {
  id: string;
  title: string;
};

export default function AdminAssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function loadData() {
    setLoading(true);

    // LOAD COURSES
    const { data: courseData, error: courseError } = await supabase
      .from("courses")
      .select("id, title")
      .order("title", { ascending: true });

    if (courseError) {
      console.error("Error loading courses:", courseError);
      setMessage("Unable to load courses.");
    } else {
      setCourses(courseData || []);
    }

    // LOAD ASSIGNMENTS
    const { data: assignmentData, error: assignmentError } =
      await supabase
        .from("assignments")
        .select(
          "id, course_id, title, description, instructions, due_date, created_at"
        )
        .order("created_at", { ascending: false });

    if (assignmentError) {
      console.error("Error loading assignments:", assignmentError);
      setMessage("Unable to load assignments.");
    } else {
      setAssignments(assignmentData || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  // ADD ASSIGNMENT
  async function handleAddAssignment(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim()) {
      setMessage("Please enter the assignment title.");
      return;
    }

    if (!courseId) {
      setMessage("Please select a course.");
      return;
    }

    if (!instructions.trim()) {
      setMessage("Please enter the assignment instructions.");
      return;
    }

    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("assignments").insert({
      course_id: courseId,
      title: title.trim(),
      description: description.trim() || null,
      instructions: instructions.trim(),
      due_date: dueDate
        ? new Date(dueDate).toISOString()
        : null,
    });

    if (error) {
      console.error("Error adding assignment:", error);
      setMessage(`Unable to add assignment: ${error.message}`);
      setSaving(false);
      return;
    }

    // CLEAR FORM
    setTitle("");
    setCourseId("");
    setDescription("");
    setInstructions("");
    setDueDate("");

    setMessage("Assignment added successfully.");

    await loadData();

    setSaving(false);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  // DELETE ASSIGNMENT
  async function deleteAssignment(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this assignment?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("assignments")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting assignment:", error);
      setMessage(`Unable to delete assignment: ${error.message}`);
      return;
    }

    setMessage("Assignment deleted successfully.");

    await loadData();

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  // FIND COURSE NAME
  function getCourseTitle(courseId: string | null) {
    if (!courseId) {
      return "No course";
    }

    const course = courses.find(
      (item) => item.id === courseId
    );

    return course?.title || "Unknown course";
  }

  // FORMAT DATE
  function formatDate(date: string | null) {
    if (!date) {
      return "-";
    }

    const formatted = new Date(date);

    if (Number.isNaN(formatted.getTime())) {
      return "-";
    }

    return formatted.toLocaleString();
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
            📝 Manage Assignments
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Add and manage assignments for EP APPEC Remera Rukoma.
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
        {/* ADD ASSIGNMENT */}
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
            Add New Assignment
          </h2>

          <form onSubmit={handleAddAssignment}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "15px",
              }}
            >
              {/* TITLE */}
              <div>
                <label
                  htmlFor="assignment-title"
                  style={labelStyle}
                >
                  Assignment Title
                </label>

                <input
                  id="assignment-title"
                  type="text"
                  placeholder="Example: Fractions Exercise"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* COURSE */}
              <div>
                <label
                  htmlFor="assignment-course"
                  style={labelStyle}
                >
                  Course
                </label>

                <select
                  id="assignment-course"
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  style={inputStyle}
                >
                  <option value="">
                    Select a course
                  </option>

                  {courses.map((course) => (
                    <option
                      key={course.id}
                      value={course.id}
                    >
                      {course.title}
                    </option>
                  ))}
                </select>

                {courses.length === 0 && !loading && (
                  <small
                    style={{
                      color: "#c0392b",
                      display: "block",
                      marginTop: "5px",
                    }}
                  >
                    No courses found.
                  </small>
                )}
              </div>

              {/* DUE DATE */}
              <div>
                <label
                  htmlFor="assignment-date"
                  style={labelStyle}
                >
                  Due Date
                </label>

                <input
                  id="assignment-date"
                  type="datetime-local"
                  value={dueDate}
                  onChange={(e) =>
                    setDueDate(e.target.value)
                  }
                  style={inputStyle}
                />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div style={{ marginTop: "15px" }}>
              <label
                htmlFor="assignment-description"
                style={labelStyle}
              >
                Description
              </label>

              <textarea
                id="assignment-description"
                placeholder="Short description of the assignment..."
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                rows={3}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>

            {/* INSTRUCTIONS */}
            <div style={{ marginTop: "15px" }}>
              <label
                htmlFor="assignment-instructions"
                style={labelStyle}
              >
                Instructions
              </label>

              <textarea
                id="assignment-instructions"
                placeholder="Enter the assignment instructions..."
                value={instructions}
                onChange={(e) =>
                  setInstructions(e.target.value)
                }
                rows={7}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>

            {/* SAVE BUTTON */}
            <button
              type="submit"
              disabled={saving}
              style={{
                marginTop: "20px",
                background: "#123c69",
                color: "white",
                border: "none",
                padding: "12px 22px",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: saving
                  ? "not-allowed"
                  : "pointer",
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving
                ? "Saving..."
                : "➕ Add Assignment"}
            </button>
          </form>

          {/* MESSAGE */}
          {message && (
            <p
              style={{
                marginTop: "15px",
                color: message.includes(
                  "successfully"
                )
                  ? "#18794e"
                  : "#c0392b",
                fontWeight: "bold",
              }}
            >
              {message}
            </p>
          )}
        </div>

        {/* ASSIGNMENT LIST */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "10px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                color: "#123c69",
                margin: 0,
              }}
            >
              Assignment List
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
              {assignments.length} assignment
              {assignments.length !== 1
                ? "s"
                : ""}
            </span>
          </div>

          {/* LOADING */}
          {loading ? (
            <p>Loading assignments...</p>
          ) : assignments.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "#777",
                border:
                  "1px dashed #ccc",
                borderRadius: "8px",
              }}
            >
              No assignments have been added yet.
            </div>
          ) : (
            <div
              style={{
                overflowX: "auto",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse:
                    "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th style={thStyle}>
                      #
                    </th>

                    <th style={thStyle}>
                      Title
                    </th>

                    <th style={thStyle}>
                      Course
                    </th>

                    <th style={thStyle}>
                      Due Date
                    </th>

                    <th style={thStyle}>
                      Instructions
                    </th>

                    <th style={thStyle}>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {assignments.map(
                    (assignment, index) => (
                      <tr
                        key={
                          assignment.id
                        }
                      >
                        <td style={tdStyle}>
                          {index + 1}
                        </td>

                        <td style={tdStyle}>
                          {assignment.title}
                        </td>

                        <td style={tdStyle}>
                          {getCourseTitle(
                            assignment.course_id
                          )}
                        </td>

                        <td style={tdStyle}>
                          {formatDate(
                            assignment.due_date
                          )}
                        </td>

                        <td style={tdStyle}>
                          <div
                            style={{
                              maxWidth:
                                "300px",
                              whiteSpace:
                                "pre-wrap",
                            }}
                          >
                            {
                              assignment.instructions ||
                              ""
                            }
                          </div>
                        </td>

                        <td style={tdStyle}>
                          <button
                            onClick={() =>
                              deleteAssignment(
                                assignment.id
                              )
                            }
                            style={{
                              background:
                                "#e74c3c",
                              color:
                                "white",
                              border:
                                "none",
                              padding:
                                "8px 12px",
                              borderRadius:
                                "5px",
                              cursor:
                                "pointer",
                            }}
                          >
                            🗑️ Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* STYLES */

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