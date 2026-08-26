"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

type Quiz = {
  id: string;
  lesson_id: string | null;
  title: string;
  created_at: string;
};

type Lesson = {
  id: string;
  title: string;
  lesson_number: number | null;
};

export default function AdminQuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const [title, setTitle] = useState("");
  const [lessonId, setLessonId] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function loadData() {
    setLoading(true);

    // LOAD LESSONS
    const { data: lessonData, error: lessonError } = await supabase
      .from("lessons")
      .select("id, title, lesson_number")
      .order("lesson_number", { ascending: true });

    if (lessonError) {
      console.error("Error loading lessons:", lessonError);
      setMessage(`Unable to load lessons: ${lessonError.message}`);
    } else {
      setLessons(lessonData || []);
    }

    // LOAD QUIZZES
    const { data: quizData, error: quizError } = await supabase
      .from("quizzes")
      .select("id, lesson_id, title, created_at")
      .order("created_at", { ascending: false });

    if (quizError) {
      console.error("Error loading quizzes:", quizError);
      setMessage(`Unable to load quizzes: ${quizError.message}`);
    } else {
      setQuizzes(quizData || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  // ADD QUIZ
  async function handleAddQuiz(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setMessage("Please enter the quiz title.");
      return;
    }

    if (!lessonId) {
      setMessage("Please select a lesson.");
      return;
    }

    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("quizzes").insert({
      lesson_id: lessonId,
      title: title.trim(),
    });

    if (error) {
      console.error("Error adding quiz:", error);
      setMessage(`Unable to add quiz: ${error.message}`);
      setSaving(false);
      return;
    }

    setTitle("");
    setLessonId("");

    setMessage("Quiz added successfully.");

    await loadData();

    setSaving(false);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  // DELETE QUIZ
  async function deleteQuiz(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this quiz?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("quizzes")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting quiz:", error);
      setMessage(`Unable to delete quiz: ${error.message}`);
      return;
    }

    setMessage("Quiz deleted successfully.");

    await loadData();

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  // FIND LESSON
  function getLessonTitle(lessonId: string | null) {
    if (!lessonId) {
      return "No lesson";
    }

    const lesson = lessons.find((item) => item.id === lessonId);

    if (!lesson) {
      return "Unknown lesson";
    }

    if (lesson.lesson_number !== null) {
      return `Lesson ${lesson.lesson_number}: ${lesson.title}`;
    }

    return lesson.title;
  }

  // FORMAT DATE
  function formatDate(date: string) {
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
            🧠 Manage Quizzes
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Add and manage quizzes for EP APPEC Remera Rukoma.
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
        {/* ADD QUIZ */}
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
            Add New Quiz
          </h2>

          <form onSubmit={handleAddQuiz}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "15px",
              }}
            >
              {/* QUIZ TITLE */}
              <div>
                <label htmlFor="quiz-title" style={labelStyle}>
                  Quiz Title
                </label>

                <input
                  id="quiz-title"
                  type="text"
                  placeholder="Example: Fractions Quiz"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* LESSON */}
              <div>
                <label htmlFor="quiz-lesson" style={labelStyle}>
                  Lesson
                </label>

                <select
                  id="quiz-lesson"
                  value={lessonId}
                  onChange={(e) => setLessonId(e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Select a lesson</option>

                  {lessons.map((lesson) => (
                    <option key={lesson.id} value={lesson.id}>
                      {lesson.lesson_number !== null
                        ? `Lesson ${lesson.lesson_number}: ${lesson.title}`
                        : lesson.title}
                    </option>
                  ))}
                </select>

                {lessons.length === 0 && !loading && (
                  <small
                    style={{
                      color: "#c0392b",
                      display: "block",
                      marginTop: "5px",
                    }}
                  >
                    No lessons found. Add lessons first.
                  </small>
                )}
              </div>
            </div>

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
                cursor: saving ? "not-allowed" : "pointer",
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving ? "Saving..." : "➕ Add Quiz"}
            </button>
          </form>

          {message && (
            <p
              style={{
                marginTop: "15px",
                color: message.includes("successfully")
                  ? "#18794e"
                  : "#c0392b",
                fontWeight: "bold",
              }}
            >
              {message}
            </p>
          )}
        </div>

        {/* QUIZ LIST */}
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
              Quiz List
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
              {quizzes.length} quiz
              {quizzes.length !== 1 ? "zes" : ""}
            </span>
          </div>

          {loading ? (
            <p>Loading quizzes...</p>
          ) : quizzes.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "#777",
                border: "1px dashed #ccc",
                borderRadius: "8px",
              }}
            >
              No quizzes have been added yet.
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
                    <th style={thStyle}>Quiz Title</th>
                    <th style={thStyle}>Lesson</th>
                    <th style={thStyle}>Created</th>
                    <th style={thStyle}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {quizzes.map((quiz, index) => (
                    <tr key={quiz.id}>
                      <td style={tdStyle}>{index + 1}</td>

                      <td style={tdStyle}>{quiz.title}</td>

                      <td style={tdStyle}>
                        {getLessonTitle(quiz.lesson_id)}
                      </td>

                      <td style={tdStyle}>
                        {formatDate(quiz.created_at)}
                      </td>

                      <td style={tdStyle}>
                        <button
                          onClick={() => deleteQuiz(quiz.id)}
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