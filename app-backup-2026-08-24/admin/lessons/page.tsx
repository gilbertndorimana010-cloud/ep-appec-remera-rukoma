"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Lesson = {
  id: number;
  title: string;
  course: string;
  className: string;
  content: string;
};

type Course = {
  id: number;
  name: string;
  subject: string;
  className: string;
  description: string;
};

export default function AdminLessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [className, setClassName] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedLessons = localStorage.getItem("epAppecLessons");
    const savedCourses = localStorage.getItem("epAppecCourses");

    if (savedLessons) {
      setLessons(JSON.parse(savedLessons));
    }

    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  function saveLessons(updatedLessons: Lesson[]) {
    setLessons(updatedLessons);

    localStorage.setItem(
      "epAppecLessons",
      JSON.stringify(updatedLessons)
    );
  }

  function handleAddLesson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !title.trim() ||
      !course.trim() ||
      !className.trim() ||
      !content.trim()
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newLesson: Lesson = {
      id: Date.now(),
      title: title.trim(),
      course: course.trim(),
      className: className.trim(),
      content: content.trim(),
    };

    saveLessons([...lessons, newLesson]);

    setTitle("");
    setCourse("");
    setClassName("");
    setContent("");

    setMessage("Lesson added successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function deleteLesson(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lesson?"
    );

    if (!confirmed) {
      return;
    }

    const updatedLessons = lessons.filter(
      (lesson) => lesson.id !== id
    );

    saveLessons(updatedLessons);

    setMessage("Lesson deleted successfully.");

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
            📖 Manage Lessons
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Add and manage lessons for EP APPEC Remera Rukoma.
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
        {/* ADD LESSON */}
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
            Add New Lesson
          </h2>

          <form onSubmit={handleAddLesson}>
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
                <label htmlFor="lesson-title" style={labelStyle}>
                  Lesson Title
                </label>

                <input
                  id="lesson-title"
                  type="text"
                  placeholder="Example: Introduction to Fractions"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* COURSE */}
              <div>
                <label htmlFor="lesson-course" style={labelStyle}>
                  Course
                </label>

                <select
                  id="lesson-course"
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                  style={inputStyle}
                >
                  <option value="">Select a course</option>

                  {courses.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                {courses.length === 0 && (
                  <small style={{ color: "#777" }}>
                    No courses found. You can enter a course manually below.
                  </small>
                )}
              </div>

              {/* CLASS */}
              <div>
                <label htmlFor="lesson-class" style={labelStyle}>
                  Class
                </label>

                <input
                  id="lesson-class"
                  type="text"
                  placeholder="Example: P5"
                  value={className}
                  onChange={(event) =>
                    setClassName(event.target.value)
                  }
                  style={inputStyle}
                />
              </div>
            </div>

            {/* CONTENT */}
            <div style={{ marginTop: "15px" }}>
              <label htmlFor="lesson-content" style={labelStyle}>
                Lesson Content
              </label>

              <textarea
                id="lesson-content"
                placeholder="Enter the lesson content here..."
                value={content}
                onChange={(event) =>
                  setContent(event.target.value)
                }
                rows={7}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
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
              ➕ Add Lesson
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

        {/* LESSON LIST */}
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
              Lesson List
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
              {lessons.length} lesson
              {lessons.length !== 1 ? "s" : ""}
            </span>
          </div>

          {lessons.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "#777",
                border: "1px dashed #ccc",
                borderRadius: "8px",
              }}
            >
              No lessons have been added yet.
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
                    <th style={thStyle}>Title</th>
                    <th style={thStyle}>Course</th>
                    <th style={thStyle}>Class</th>
                    <th style={thStyle}>Content</th>
                    <th style={thStyle}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {lessons.map((lesson, index) => (
                    <tr key={lesson.id}>
                      <td style={tdStyle}>{index + 1}</td>
                      <td style={tdStyle}>{lesson.title}</td>
                      <td style={tdStyle}>{lesson.course}</td>
                      <td style={tdStyle}>{lesson.className}</td>
                      <td style={tdStyle}>
                        <div
                          style={{
                            maxWidth: "300px",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {lesson.content}
                        </div>
                      </td>

                      <td style={tdStyle}>
                        <button
                          onClick={() => deleteLesson(lesson.id)}
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