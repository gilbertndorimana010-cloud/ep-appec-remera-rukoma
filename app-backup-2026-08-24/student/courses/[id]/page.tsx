"use client";

import Link from "next/link";

export default function CoursePage() {
  return (
    <main className="course-home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="course-home-navbar">

        <div className="course-home-logo">
          🎓
          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>
        </div>

        <div className="course-home-nav">

          <Link
            href="/student/courses"
            className="my-courses-btn"
          >
            ← My Courses
          </Link>

          <Link
            href="/"
            className="course-logout-btn"
          >
            Logout
          </Link>

        </div>

      </nav>


      {/* ================= COURSE HERO ================= */}

      <section className="course-home-hero">

        <div className="course-hero-icon">
          📐
        </div>

        <span className="course-class">
          PRIMARY 6
        </span>

        <h1>
          Mathematics
        </h1>

        <p>
          Learn mathematics concepts through lessons,
          examples, exercises and assessments.
        </p>

      </section>


      {/* ================= MAIN CONTENT ================= */}

      <section className="course-home-container">

        {/* ================= COURSE INFORMATION ================= */}

        <div className="course-information">

          <div className="course-section-heading">

            <span>
              COURSE INFORMATION
            </span>

            <h2>
              Course Overview
            </h2>

          </div>


          <div className="course-information-grid">

            {/* SUBJECT */}

            <div className="course-info-card">

              <div className="course-info-icon">
                📚
              </div>

              <div>
                <span>
                  Subject
                </span>

                <strong>
                  Mathematics
                </strong>
              </div>

            </div>


            {/* CLASS */}

            <div className="course-info-card">

              <div className="course-info-icon">
                🎓
              </div>

              <div>
                <span>
                  Class
                </span>

                <strong>
                  Primary 6
                </strong>
              </div>

            </div>


            {/* TEACHER */}

            <div className="course-info-card">

              <div className="course-info-icon">
                👨‍🏫
              </div>

              <div>
                <span>
                  Teacher
                </span>

                <strong>
                  Mr. Gilbert
                </strong>
              </div>

            </div>


            {/* PROGRESS */}

            <div className="course-info-card progress-info-card">

              <div className="course-info-icon">
                📊
              </div>

              <div className="course-progress-content">

                <span>
                  Your Course Progress
                </span>

                <strong>
                  72%
                </strong>

                <div className="course-home-progress-bar">

                  <div
                    className="course-home-progress-fill"
                    style={{ width: "72%" }}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= LEARNING CENTER ================= */}

        <div className="learning-center">

          <div className="course-section-heading">

            <span>
              LEARNING CENTER
            </span>

            <h2>
              Start Learning
            </h2>

            <p>
              Continue your studies and improve your
              academic performance.
            </p>

          </div>


          <div className="learning-center-grid">

            {/* LESSONS */}

            <Link
              href="/student/courses/1/lessons"
              className="learning-card"
            >

              <div className="learning-card-icon">
                📚
              </div>

              <div className="learning-card-content">

                <span>
                  LEARN
                </span>

                <h3>
                  Lessons
                </h3>

                <p>
                  Access your lessons and study the topics
                  included in this course.
                </p>

                <strong>
                  Open Lessons →
                </strong>

              </div>

            </Link>


            {/* ASSIGNMENTS */}

            <Link
              href="/student/courses/1/assignments"
              className="learning-card"
            >

              <div className="learning-card-icon">
                📝
              </div>

              <div className="learning-card-content">

                <span>
                  PRACTICE
                </span>

                <h3>
                  Assignments
                </h3>

                <p>
                  Complete assignments and academic
                  activities given by your teacher.
                </p>

                <strong>
                  View Assignments →
                </strong>

              </div>

            </Link>


            {/* MATERIALS */}

            <Link
              href="/student/courses/1/materials"
              className="learning-card"
            >

              <div className="learning-card-icon">
                📖
              </div>

              <div className="learning-card-content">

                <span>
                  RESOURCES
                </span>

                <h3>
                  Learning Materials
                </h3>

                <p>
                  Read notes, exercises and other
                  educational resources.
                </p>

                <strong>
                  Open Materials →
                </strong>

              </div>

            </Link>


            {/* PERFORMANCE */}

            <Link
              href="/student/courses/1/performance"
              className="learning-card"
            >

              <div className="learning-card-icon">
                📊
              </div>

              <div className="learning-card-content">

                <span>
                  RESULTS
                </span>

                <h3>
                  My Performance
                </h3>

                <p>
                  Check your progress, completed work
                  and academic achievements.
                </p>

                <strong>
                  View Performance →
                </strong>

              </div>

            </Link>

          </div>

        </div>


        {/* ================= QUICK START ================= */}

        <div className="quick-start-card">

          <div className="quick-start-icon">
            🚀
          </div>

          <div className="quick-start-content">

            <span>
              READY TO LEARN?
            </span>

            <h2>
              Continue Your Mathematics Journey
            </h2>

            <p>
              Start with your lessons and learn mathematics
              step by step through explanations, examples
              and exercises.
            </p>

          </div>

          <Link
            href="/student/courses/1/lessons"
            className="quick-start-btn"
          >
            Start Learning →
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="course-home-footer">
        © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
      </footer>

    </main>
  );
}