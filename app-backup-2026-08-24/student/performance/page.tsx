import Link from "next/link";

export default function PerformancePage() {
  return (
    <main className="student-performance-page">

      {/* NAVBAR */}
      <nav className="student-performance-navbar">

        <Link href="/student" className="performance-logo">

          <div className="performance-logo-mark">
            EP
          </div>

          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>

        </Link>

        <div className="performance-nav">

          <Link href="/student">
            Home
          </Link>

          <Link href="/student/courses">
            My Courses
          </Link>

          <Link href="/student/assignments">
            Assignments
          </Link>

          <Link href="/student/materials">
            Materials
          </Link>

          <Link href="/">
            Logout
          </Link>

        </div>

      </nav>


      {/* HERO */}

      <section className="performance-hero">

        <span>
          STUDENT PROGRESS
        </span>

        <h1>
          My Performance
        </h1>

        <p>
          Monitor your learning progress and see how far you
          have progressed through your courses.
        </p>

      </section>


      {/* CONTENT */}

      <section className="performance-content">

        <div className="performance-heading">

          <span>
            LEARNING OVERVIEW
          </span>

          <h2>
            Your Academic Progress
          </h2>

          <p>
            Keep studying regularly to improve your performance.
          </p>

        </div>


        {/* STATISTICS */}

        <div className="performance-stats">

          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              📚
            </div>

            <strong>
              1
            </strong>

            <span>
              Active Course
            </span>

          </div>


          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              📖
            </div>

            <strong>
              14
            </strong>

            <span>
              Total Lessons
            </span>

          </div>


          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              ✓
            </div>

            <strong>
              72%
            </strong>

            <span>
              Course Progress
            </span>

          </div>


          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              🏆
            </div>

            <strong>
              Good
            </strong>

            <span>
              Current Status
            </span>

          </div>

        </div>


        {/* COURSE PERFORMANCE */}

        <div className="performance-course-card">

          <div className="performance-course-header">

            <div>

              <span>
                COURSE PERFORMANCE
              </span>

              <h3>
                Mathematics
              </h3>

              <p>
                Primary 6 · 14 Lessons
              </p>

            </div>

            <div className="performance-circle">
              72%
            </div>

          </div>


          <div className="performance-large-bar">

            <div></div>

          </div>


          <div className="performance-breakdown">

            <div>
              <strong>
                10
              </strong>

              <span>
                Lessons Completed
              </span>
            </div>

            <div>
              <strong>
                4
              </strong>

              <span>
                Lessons Remaining
              </span>
            </div>

            <div>
              <strong>
                72%
              </strong>

              <span>
                Overall Progress
              </span>
            </div>

          </div>


          <Link
            href="/student/courses"
            className="performance-continue-btn"
          >
            Continue Learning →
          </Link>

        </div>


        {/* MOTIVATION */}

        <div className="performance-motivation">

          <div className="performance-motivation-icon">
            🎓
          </div>

          <div>

            <span>
              KEEP GOING
            </span>

            <h2>
              You are making good progress.
            </h2>

            <p>
              Continue studying your Mathematics lessons and
              complete your remaining activities to reach
              your learning goals.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="student-performance-footer">

        <strong>
          EP APPEC Remera Rukoma
        </strong>

        <span>
          © 2026 · District Kamonyi · Sector Rukoma
        </span>

      </footer>

    </main>
  );
}