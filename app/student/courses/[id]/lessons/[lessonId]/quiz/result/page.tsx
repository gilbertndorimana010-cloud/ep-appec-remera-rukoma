"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Result = {
  quizId: string;
  lessonId: string;
  score: number;
  total: number;
  percentage: number;
};

export default function StudentQuizResultPage() {
  const params = useParams();

  const courseId = String(params.id);
  const lessonId = String(params.lessonId);

  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(
      `quiz-result-${lessonId}`
    );

    if (stored) {
      try {
        setResult(JSON.parse(stored));
      } catch {
        setResult(null);
      }
    }
  }, [lessonId]);

  if (!result) {
    return (
      <main className="student-lesson-page">

        <nav className="student-lesson-navbar">
          <div className="student-lesson-logo">
            🎓 EP APPEC <span>Remera Rukoma</span>
          </div>
        </nav>

        <section className="student-lesson-content">

          <div className="teacher-content-empty">

            <div className="teacher-content-empty-icon">
              QUIZ
            </div>

            <h1>Result Not Found</h1>

            <p>
              No quiz result is available yet.
            </p>

            <Link
              href={`/student/courses/${courseId}/lessons/${lessonId}`}
              className="teacher-content-primary"
            >
              Back to Lesson
            </Link>

          </div>

        </section>

      </main>
    );
  }

  const passed = result.percentage >= 50;

  return (
    <main className="student-lesson-page">

      <nav className="student-lesson-navbar">

        <div className="student-lesson-logo">
          🎓 EP APPEC <span>Remera Rukoma</span>
        </div>

        <Link
          href={`/student/courses/${courseId}/lessons/${lessonId}`}
          className="teacher-content-secondary"
        >
          Back to Lesson
        </Link>

      </nav>

      <section className="student-lesson-content">

        <div className="student-lesson-header">

          <span>QUIZ RESULT</span>

          <h1>
            Quiz Completed
          </h1>

          <p>
            Your quiz has been submitted successfully.
          </p>

        </div>

        <section className="teacher-content-card">

          <div
            style={{
              textAlign: "center",
              padding: "30px 20px",
            }}
          >

            <div
              style={{
                fontSize: "64px",
                fontWeight: "800",
                marginBottom: "10px",
              }}
            >
              {result.percentage}%
            </div>

            <h2>
              {passed ? "Well Done!" : "Keep Practicing!"}
            </h2>

            <p>
              You answered{" "}
              <strong>{result.score}</strong>{" "}
              out of{" "}
              <strong>{result.total}</strong>{" "}
              questions correctly.
            </p>

            <p>
              {passed
                ? "You passed this quiz."
                : "Review the lesson and try again."}
            </p>

          </div>

        </section>

        <div className="teacher-content-form-actions">

          <Link
            href={`/student/courses/${courseId}/lessons/${lessonId}`}
            className="teacher-content-secondary"
          >
            Back to Lesson
          </Link>

          <Link
            href={`/student/courses/${courseId}/lessons/${lessonId}/quiz`}
            className="teacher-content-primary"
          >
            Try Quiz Again
          </Link>

        </div>

      </section>

      <footer className="teacher-content-footer">

        <strong>
          EP APPEC Remera Rukoma
        </strong>

        <span>
          E-Learning Platform · © 2026
        </span>

      </footer>

    </main>
  );
}
