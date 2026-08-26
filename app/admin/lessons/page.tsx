"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

type Lesson = {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: string | null;
  lesson_number: number | null;
  class_name: string | null;
  created_at: string;
};

type Course = {
  id: string;
  title: string;
};

export default function AdminLessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [className, setClassName] = useState("");
  const [content, setContent] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");

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

    // LOAD LESSONS
    const { data: lessonData, error: lessonError } = await supabase
      .from("lessons")
      .select(
        "id, course_id, title, description, content, lesson_number, class_name, created_at"
      )
      .order("lesson_number", { ascending: true });

    if (lessonError) {
      console.error("Error loading lessons:", lessonError);
      setMessage("Unable to load lessons.");
    } else {
      setLessons(lessonData || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleAddLesson(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (
      !title.trim() ||
      !courseId ||
      !className.trim() ||
      !content.trim()
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    setSaving(true);
    setMessage("");

    const number =
      lessonNumber.trim() !== ""
        ? Number(lessonNumber)
        : lessons.length + 1;

    const { error } = await supabase.from("lessons").insert({
      course_id: courseId,
      title: title.trim(),
      description: "",
      content: content.trim(),
      lesson_number: number,
      class_name: className.trim(),
    });

    if (error) {
      console.error("Error adding lesson:", error);
      setMessage("Unable to add lesson.");
      setSaving(false);
      return;
    }

    setTitle("");
    setCourseId("");
    setClassName("");
    setContent("");
    setLessonNumber("");

    setMessage("Lesson added successfully.");

    await loadData();

    setSaving(false);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  async function deleteLesson(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lesson?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("lessons")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting lesson:", error);
      setMessage("Unable to delete lesson.");
      return;
    }

    setMessage("Lesson deleted successfully.");

    await loadData();

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
                <label
                  htmlFor="lesson-title"
                  style={labelStyle}
                >
                  Lesson Title
                </label>

                <input
                  id="lesson-title"
                  type="text"
                  placeholder="Example: Introduction to Fractions"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  style={inputStyle}
                />
              </div>

              {/* COURSE */}
              <div>
                <label
                  htmlFor="lesson-course"
                  style={labelStyle}
                >
                  Course
                </label>

                <select
                  id="lesson-course"
                  value={courseId}
                  onChange={(event) =>
                    setCourseId(event.target.value)
                  }
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
                      display: "block",
                      marginTop: "6px",
                      color: "#c0392b",
                    }}
                  >
                    No courses found.
                  </small>
                )}
              </div>

              {/* CLASS */}
              <div>
                <label
                  htmlFor="lesson-class"
                  style={labelStyle}
                >
                  Class
                </label>

                <input
                  id="lesson-class"
                  type="text"
                  placeholder="Example: P6"
                  value={className}
                  onChange={(event) =>
                    setClassName(event.target.value)
                  }
                  style={inputStyle}
                />
              </div>

              {/* LESSON NUMBER */}
              <div>
                <label
                  htmlFor="lesson-number"
                  style={labelStyle}
                >
                  Lesson Number
                </label>

                <input
                  id="lesson-number"
                  type="number"
                  min="1"
                  placeholder="Example: 1"
                  value={lessonNumber}
                  onChange={(event) =>
                    setLessonNumber(event.target.value)
                  }
                  style={inputStyle}
                />
              </div>
            </div>

            {/* CONTENT */}
            <div
              style={{
                marginTop: "15px",
              }}
            >
              <label
                htmlFor="lesson-content"
                style={labelStyle}
              >
                Lesson Content
              </label>

              <textarea
                id="lesson-content"
                placeholder="Enter the lesson content here..."
                value={content}
                onChange={(event) =>
                  setContent(event.target.value)
                }
                rows={8}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={saving}
              style={{
                marginTop: "20px",
                background: saving ? "#7f8c8d" : "#123c69",
                color: "white",
                border: "none",
                padding: "12px 22px",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: saving
                  ? "not-allowed"
                  : "pointer",
              }}
            >
              {saving
                ? "Saving..."
                : "➕ Add Lesson"}
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

        {/* LESSON LIST */}
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
              {lessons.length !== 1
                ? "s"
                : ""}
            </span>
          </div>

          {/* LOADING */}
          {loading ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "#777",
              }}
            >
              Loading lessons...
            </div>
          ) : lessons.length === 0 ? (
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
                      Class
                    </th>

                    <th style={thStyle}>
                      Content
                    </th>

                    <th style={thStyle}>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {lessons.map(
                    (lesson, index) => {
                      const course =
                        courses.find(
                          (item) =>
                            item.id ===
                            lesson.course_id
                        );

                      return (
                        <tr
                          key={lesson.id}
                        >
                          <td
                            style={tdStyle}
                          >
                            {lesson.lesson_number ??
                              index + 1}
                          </td>

                          <td
                            style={tdStyle}
                          >
                            {lesson.title}
                          </td>

                          <td
                            style={tdStyle}
                          >
                            {course?.title ||
                              "Unknown course"}
                          </td>

                          <td
                            style={tdStyle}
                          >
                            {lesson.class_name ||
                              "-"}
                          </td>

                          <td
                            style={tdStyle}
                          >
                            <div
                              style={{
                                maxWidth:
                                  "300px",
                                whiteSpace:
                                  "pre-wrap",
                              }}
                            >
                              {lesson.content ||
                                ""}
                            </div>
                          </td>

                          <td
                            style={tdStyle}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                deleteLesson(
                                  lesson.id
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
                      );
                    }
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