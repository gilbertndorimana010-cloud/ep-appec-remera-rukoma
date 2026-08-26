"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

type Course = {
  id: number;
  name: string;
  subject: string;
  className: string;
  description: string;
};

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedCourses = localStorage.getItem("epAppecCourses");

    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  function saveCourses(updatedCourses: Course[]) {
    setCourses(updatedCourses);

    localStorage.setItem(
      "epAppecCourses",
      JSON.stringify(updatedCourses)
    );
  }

  function handleAddCourse(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !name.trim() ||
      !subject.trim() ||
      !className.trim() ||
      !description.trim()
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newCourse: Course = {
      id: Date.now(),
      name: name.trim(),
      subject: subject.trim(),
      className: className.trim(),
      description: description.trim(),
    };

    saveCourses([...courses, newCourse]);

    setName("");
    setSubject("");
    setClassName("");
    setDescription("");

    setMessage("Course added successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  function deleteCourse(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmed) {
      return;
    }

    const updatedCourses = courses.filter(
      (course) => course.id !== id
    );

    saveCourses(updatedCourses);

    setMessage("Course deleted successfully.");

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
            📚 Manage Courses
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Add and manage courses for EP APPEC Remera Rukoma.
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
        {/* ADD COURSE */}
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
            Add New Course
          </h2>

          <form onSubmit={handleAddCourse}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "15px",
              }}
            >
              {/* COURSE NAME */}
              <div>
                <label htmlFor="course-name" style={labelStyle}>
                  Course Name
                </label>

                <input
                  id="course-name"
                  type="text"
                  placeholder="Example: Mathematics"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label htmlFor="course-subject" style={labelStyle}>
                  Subject
                </label>

                <input
                  id="course-subject"
                  type="text"
                  placeholder="Example: Mathematics"
                  value={subject}
                  onChange={(event) =>
                    setSubject(event.target.value)
                  }
                  style={inputStyle}
                />
              </div>

              {/* CLASS */}
              <div>
                <label htmlFor="course-class" style={labelStyle}>
                  Class
                </label>

                <input
                  id="course-class"
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

            {/* DESCRIPTION */}
            <div style={{ marginTop: "15px" }}>
              <label
                htmlFor="course-description"
                style={labelStyle}
              >
                Description
              </label>

              <textarea
                id="course-description"
                placeholder="Enter course description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                rows={4}
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
              ➕ Add Course
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

        {/* COURSE LIST */}
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
              Course List
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
              {courses.length} course
              {courses.length !== 1 ? "s" : ""}
            </span>
          </div>

          {courses.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "#777",
                border: "1px dashed #ccc",
                borderRadius: "8px",
              }}
            >
              No courses have been added yet.
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
                    <th style={thStyle}>Course</th>
                    <th style={thStyle}>Subject</th>
                    <th style={thStyle}>Class</th>
                    <th style={thStyle}>Description</th>
                    <th style={thStyle}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {courses.map((course, index) => (
                    <tr key={course.id}>
                      <td style={tdStyle}>{index + 1}</td>
                      <td style={tdStyle}>{course.name}</td>
                      <td style={tdStyle}>{course.subject}</td>
                      <td style={tdStyle}>{course.className}</td>
                      <td style={tdStyle}>{course.description}</td>
                      <td style={tdStyle}>
                        <button
                          onClick={() => deleteCourse(course.id)}
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