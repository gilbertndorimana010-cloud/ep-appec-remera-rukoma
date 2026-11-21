"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

type Course = {
  id: string;
  title: string;
  description: string | null;
  class_name: string | null;
  created_at: string;
};

const classes = ["P1", "P2", "P3", "P4", "P5", "P6"];

export default function AdminCoursesPage() {
  const supabase = createClient();

  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [className, setClassName] = useState("P1");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function loadCourses() {
    setLoading(true);

    const { data, error } = await supabase
      .from("courses")
      .select("id, title, description, class_name, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading courses:", error);
      setMessage("Unable to load courses: " + error.message);
      setLoading(false);
      return;
    }

    setCourses((data || []) as Course[]);
    setLoading(false);
  }

  useEffect(() => {
    loadCourses();
  }, []);

  async function handleAddCourse(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim() || !description.trim() || !className) {
      setMessage("Please complete all course fields.");
      return;
    }

    setSaving(true);
    setMessage("");

    const { data, error } = await supabase
      .from("courses")
      .insert({
        title: title.trim(),
        description: description.trim(),
        class_name: className,
      })
      .select("id, title, description, class_name, created_at")
      .single();

    if (error) {
      console.error("Error adding course:", error);
      setMessage("Unable to add course: " + error.message);
      setSaving(false);
      return;
    }

    setCourses((current) => [data as Course, ...current]);
    setTitle("");
    setDescription("");
    setClassName("P1");
    setMessage("Course added successfully.");
    setSaving(false);
  }

  async function deleteCourse(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("courses")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting course:", error);
      setMessage("Unable to delete course: " + error.message);
      return;
    }

    setCourses((current) => current.filter((course) => course.id !== id));
    setMessage("Course deleted successfully.");
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f4f7fb",
      fontFamily: "Arial, sans-serif",
      padding: "30px",
    }}>
      <header style={{
        maxWidth: "1100px",
        margin: "0 auto 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}>
        <div>
          <h1 style={{ color: "#123c69", margin: 0 }}>
            Manage Courses
          </h1>
          <p style={{ color: "#666", marginTop: "8px" }}>
            Manage courses for EP APPEC Remera Rukoma.
          </p>
        </div>

        <Link href="/admin" style={{
          background: "#123c69",
          color: "white",
          textDecoration: "none",
          padding: "11px 18px",
          borderRadius: "6px",
        }}>
          Back to Admin
        </Link>
      </header>

      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {message && (
          <div style={{
            background: "#e8f5e9",
            color: "#2e7d32",
            padding: "12px 16px",
            borderRadius: "6px",
            marginBottom: "20px",
          }}>
            {message}
          </div>
        )}

        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          marginBottom: "30px",
        }}>
          <h2 style={{ color: "#123c69", marginTop: 0 }}>
            Add New Course
          </h2>

          <form onSubmit={handleAddCourse}>
            <div style={{ marginBottom: "18px" }}>
              <label style={labelStyle}>Course Title</label>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter course title"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label style={labelStyle}>Description</label>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Enter course description"
                rows={5}
                required
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label style={labelStyle}>Assign to Class</label>
              <select
                value={className}
                onChange={(event) => setClassName(event.target.value)}
                style={inputStyle}
              >
                {classes.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={saving}
              style={{
                background: saving ? "#999" : "#123c69",
                color: "white",
                border: "none",
                padding: "12px 22px",
                borderRadius: "6px",
                cursor: saving ? "not-allowed" : "pointer",
                fontSize: "15px",
              }}
            >
              {saving ? "Saving..." : "Add Course"}
            </button>
          </form>
        </div>

        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}>
          <h2 style={{ color: "#123c69", marginTop: 0 }}>
            Existing Courses
          </h2>

          {loading ? (
            <p>Loading courses...</p>
          ) : courses.length === 0 ? (
            <p style={{ color: "#777" }}>No courses have been added yet.</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={thStyle}>Course Title</th>
                    <th style={thStyle}>Class</th>
                    <th style={thStyle}>Description</th>
                    <th style={thStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td style={tdStyle}>
                        <strong>{course.title}</strong>
                      </td>
                      <td style={tdStyle}>
                        <strong>{course.class_name || "Not assigned"}</strong>
                      </td>
                      <td style={tdStyle}>
                        {course.description || "No description"}
                      </td>
                      <td style={tdStyle}>
                        <button
                          type="button"
                          onClick={() => deleteCourse(course.id)}
                          style={{
                            background: "#c62828",
                            color: "white",
                            border: "none",
                            padding: "8px 14px",
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