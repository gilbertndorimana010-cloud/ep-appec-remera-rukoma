"use client";

import Link from "next/link";

const courses = [
  {
    id: 1,
    subject: "Mathematics",
    className: "Primary 6",
    teacher: "Mr. Gilbert",
    icon: "📐",
    progress: 72,
    lessons: 14,
    description:
      "Learn mathematics concepts through lessons, examples, exercises and assessments.",
  },
];

export default function MyCoursesPage() {
  return (
    <main className="my-courses-page">

      {/* ================= NAVBAR ================= */}

      <nav className="my-courses-navbar">

        <div className="my-courses-logo">
          🎓
          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>
        </div>

        <div className="my-courses-nav">

          <Link
            href="/student"
            className="student-home-btn"
          >
            🏠 Student Home
          </Link>

          <Link
            href="/"
            className="my-courses-logout"
          >
            Logout
          </Link>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="my-courses-hero">

        <div className="my-courses-hero-content">

          <span className="my-courses-label">
            🎓 STUDENT LEARNING CENTER
          </span>

          <h1>
            My Courses
          </h1>

          <p>
            Access your courses, continue learning and
            track your academic progress.
          </p>

        </div>

      </section>


      {/* ================= MAIN ================= */}

      <section className="my-courses-container">

        {/* ================= PAGE HEADING ================= */}

        <div className="my-courses-heading">

          <div>
            <span>
              YOUR LEARNING
            </span>

            <h2>
              Available Courses
            </h2>

            <p>
              Select a course to continue your studies.
            </p>
          </div>

          <div className="course-total">
            {courses.length} Course
          </div>

        </div>


        {/* ================= COURSE GRID ================= */}

        <div className="my-course-grid">

          {courses.map((course) => (

            <article
              key={course.id}
              className="my-course-card"
            >

              {/* CARD HEADER */}

              <div className="my-course-card-header">

                <div className="my-course-icon">
                  {course.icon}
                </div>

                <div className="my-course-class">
                  {course.className}
                </div>

              </div>


              {/* COURSE CONTENT */}

              <div className="my-course-content">

                <span className="my-course-subject">
                  MATHEMATICS
                </span>

                <h3>
                  {course.subject}
                </h3>

                <p>
                  {course.description}
                </p>


                {/* TEACHER */}

                <div className="my-course-teacher">

                  <div className="teacher-icon">
                    👨‍🏫
                  </div>

                  <div>
                    <span>
                      Teacher
                    </span>

                    <strong>
                      {course.teacher}
                    </strong>
                  </div>

                </div>


                {/* PROGRESS */}

                <div className="my-course-progress">

                  <div className="my-course-progress-top">

                    <span>
                      Course Progress
                    </span>

                    <strong>
                      {course.progress}%
                    </strong>

                  </div>

                  <div className="my-course-progress-bar">

                    <div
                      className="my-course-progress-fill"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />

                  </div>

                  <p>
                    {course.lessons} lessons available
                  </p>

                </div>

              </div>


              {/* CARD FOOTER */}

              <div className="my-course-card-footer">

                <Link
                  href={`/student/courses/${course.id}`}
                  className="continue-course-btn"
                >
                  Continue Learning →
                </Link>

              </div>

            </article>

          ))}

        </div>


        {/* ================= LEARNING TIP ================= */}

        <section className="learning-tip">

          <div className="learning-tip-icon">
            💡
          </div>

          <div>

            <span>
              LEARNING TIP
            </span>

            <h2>
              Keep Learning Every Day
            </h2>

            <p>
              Regular practice helps you understand mathematics
              better. Complete your lessons and exercises
              step by step to improve your performance.
            </p>

          </div>

        </section>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="my-courses-footer">
        © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
      </footer>

    </main>
  );
}