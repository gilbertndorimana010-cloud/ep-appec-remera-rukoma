"use client";

import Link from "next/link";

const lessons = [
  {
    number: 1,
    title: "Introduction to Mathematics",
    description:
      "Learn the meaning of mathematics, its importance and the main areas of mathematics.",
    icon: "🔢",
    status: "completed",
  },
  {
    number: 2,
    title: "Writing Numbers in Words",
    description:
      "Learn how to read, write and represent numbers correctly in words.",
    icon: "🔤",
    status: "completed",
  },
  {
    number: 3,
    title: "Place Value and Number Systems",
    description:
      "Understand place value, digits and the value of numbers.",
    icon: "🏠",
    status: "completed",
  },
  {
    number: 4,
    title: "Addition and Subtraction",
    description:
      "Learn how to add and subtract whole numbers and solve everyday problems.",
    icon: "➕",
    status: "completed",
  },
  {
    number: 5,
    title: "Multiplication",
    description:
      "Learn multiplication strategies and apply multiplication to real-life problems.",
    icon: "✖️",
    status: "completed",
  },
  {
    number: 6,
    title: "Division",
    description:
      "Learn division, sharing and solving division problems.",
    icon: "➗",
    status: "completed",
  },
  {
    number: 7,
    title: "Fractions",
    description:
      "Understand fractions, equivalent fractions and operations with fractions.",
    icon: "½",
    status: "completed",
  },
  {
    number: 8,
    title: "Decimals",
    description:
      "Learn decimal numbers, place values and calculations with decimals.",
    icon: "🔢",
    status: "completed",
  },
  {
    number: 9,
    title: "Geometry",
    description:
      "Explore shapes, angles, lines and important geometric concepts.",
    icon: "📐",
    status: "completed",
  },
  {
    number: 10,
    title: "Measurement",
    description:
      "Learn about length, mass, capacity, time and standard units.",
    icon: "📏",
    status: "completed",
  },
  {
    number: 11,
    title: "Data and Statistics",
    description:
      "Learn how to collect, organize, represent and interpret data.",
    icon: "📊",
    status: "completed",
  },
  {
    number: 12,
    title: "Patterns and Sequences",
    description:
      "Identify patterns, sequences and relationships between numbers.",
    icon: "🔄",
    status: "completed",
  },
  {
    number: 13,
    title: "Problem Solving",
    description:
      "Develop mathematical reasoning and solve practical mathematical problems.",
    icon: "🧠",
    status: "completed",
  },
  {
    number: 14,
    title: "Measurement and Everyday Mathematics",
    description:
      "Apply mathematics to measurement, money and everyday situations.",
    icon: "🎓",
    status: "completed",
  },
];

export default function AllLessonsPage() {
  const completedLessons = lessons.filter(
    (lesson) => lesson.status === "completed"
  ).length;

  const progress = Math.round(
    (completedLessons / lessons.length) * 100
  );

  return (
    <main className="all-lessons-page">

      {/* ================= HEADER ================= */}

      <nav className="all-lessons-navbar">

        <div className="all-lessons-logo">
          🎓
          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>
        </div>

        <div className="all-lessons-nav-buttons">

          <Link
            href="/student/courses/1"
            className="course-home-btn"
          >
            🏠 Course Home
          </Link>

          <Link
            href="/"
            className="all-lessons-logout"
          >
            Logout
          </Link>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="all-lessons-hero">

        <div className="all-lessons-hero-content">

          <span className="all-lessons-label">
            🔢 MATHEMATICS • PRIMARY 6
          </span>

          <h1>
            Mathematics Lessons
          </h1>

          <p>
            Explore all 14 lessons and strengthen your
            mathematical knowledge step by step.
          </p>

        </div>

      </section>

      {/* ================= MAIN ================= */}

      <section className="all-lessons-container">

        {/* ================= PROGRESS ================= */}

        <div className="course-progress-card">

          <div className="course-progress-icon">
            📚
          </div>

          <div className="course-progress-information">

            <span>
              COURSE PROGRESS
            </span>

            <h2>
              Mathematics • Primary 6
            </h2>

            <div className="course-progress-track">

              <div
                className="course-progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <p>
              {completedLessons} of {lessons.length} lessons completed
            </p>

          </div>

          <div className="course-progress-percentage">
            <strong>
              {progress}%
            </strong>

            <span>
              Complete
            </span>
          </div>

        </div>

        {/* ================= LESSON HEADER ================= */}

        <div className="lessons-heading">

          <div>

            <span>
              COURSE CONTENT
            </span>

            <h2>
              All Lessons
            </h2>

          </div>

          <div className="lesson-count">
            {lessons.length} Lessons
          </div>

        </div>

        {/* ================= LESSON GRID ================= */}

        <div className="lessons-grid">

          {lessons.map((lesson) => (

            <article
              key={lesson.number}
              className="lesson-card"
            >

              {/* TOP */}

              <div className="lesson-card-top">

                <div className="lesson-card-number">
                  {String(lesson.number).padStart(2, "0")}
                </div>

                <div className="lesson-card-icon">
                  {lesson.icon}
                </div>

                <div className="lesson-status">
                  ✓ Completed
                </div>

              </div>

              {/* CONTENT */}

              <div className="lesson-card-content">

                <span className="lesson-small-title">
                  LESSON {lesson.number}
                </span>

                <h3>
                  {lesson.title}
                </h3>

                <p>
                  {lesson.description}
                </p>

              </div>

              {/* FOOTER */}

              <div className="lesson-card-footer">

                <span className="lesson-completed-text">
                  ✓ Completed
                </span>

                <Link
                  href={`/student/courses/1/lessons/${lesson.number}`}
                  className="lesson-open-btn"
                >
                  Review Lesson →
                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* ================= COMPLETION ================= */}

        <section className="all-lessons-completion">

          <div className="all-completion-icon">
            🏆
          </div>

          <div className="all-completion-content">

            <span>
              COURSE COMPLETED
            </span>

            <h2>
              Excellent Work!
            </h2>

            <p>
              You have completed all 14 Mathematics lessons.
              Keep practicing and continue improving your
              mathematical skills.
            </p>

            <div className="all-completion-progress">

              <div className="all-completion-progress-top">

                <span>
                  Mathematics • Primary 6
                </span>

                <strong>
                  100%
                </strong>

              </div>

              <div className="all-completion-bar">

                <div
                  style={{
                    width: "100%",
                  }}
                />

              </div>

            </div>

            <Link
              href="/student/courses/1"
              className="return-course-btn"
            >
              🏠 Return to Course
            </Link>

          </div>

        </section>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="all-lessons-footer">
        © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
      </footer>

    </main>
  );
}