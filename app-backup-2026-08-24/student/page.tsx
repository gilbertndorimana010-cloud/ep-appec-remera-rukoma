import Link from "next/link";

export default function StudentPage() {
  return (
    <main className="student-home-page">

      {/* NAVBAR */}
      <nav className="student-home-navbar">

        <Link href="/student" className="student-home-logo">

          <div className="student-home-logo-mark">
            EP
          </div>

          <div className="student-home-logo-text">
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>

        </Link>

        <div className="student-home-nav">

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

          <Link href="/student/performance">
            Performance
          </Link>

          <Link
            href="/"
            className="student-home-logout"
          >
            Logout
          </Link>

        </div>

      </nav>


      {/* HERO */}

      <section className="student-home-hero">

        <div className="student-home-hero-content">

          <span className="student-home-label">
            STUDENT DASHBOARD
          </span>

          <h1>
            Welcome back,
            <br />
            <strong>Student.</strong>
          </h1>

          <p>
            Continue your learning journey, access your courses,
            complete assignments and monitor your academic progress.
          </p>

          <div className="student-home-hero-buttons">

            <Link
              href="/student/courses"
              className="student-primary-btn"
            >
              Continue Learning →
            </Link>

            <Link
              href="/student/performance"
              className="student-secondary-btn"
            >
              View Performance
            </Link>

          </div>

        </div>


        <div className="student-home-hero-card">

          <div className="student-dashboard-card-top">

            <span>
              YOUR PROGRESS
            </span>

            <strong>
              72%
            </strong>

          </div>

          <div className="student-progress-track">
            <div></div>
          </div>

          <p>
            Mathematics · Primary 6
          </p>

          <div className="student-progress-info">

            <span>
              <strong>10</strong>
              Completed
            </span>

            <span>
              <strong>4</strong>
              Remaining
            </span>

            <span>
              <strong>14</strong>
              Lessons
            </span>

          </div>

        </div>

      </section>


      {/* QUICK ACCESS */}

      <section className="student-home-content">

        <div className="student-home-heading">

          <span>
            LEARNING CENTER
          </span>

          <h2>
            Everything you need to learn
          </h2>

          <p>
            Access your courses, assignments, learning materials
            and academic performance from one place.
          </p>

        </div>


        <div className="student-home-grid">

          {/* COURSES */}

          <Link
            href="/student/courses"
            className="student-home-feature-card"
          >

            <div className="student-feature-number">
              01
            </div>

            <div className="student-feature-icon">
              📚
            </div>

            <h3>
              My Courses
            </h3>

            <p>
              Access your courses and continue studying your
              lessons and educational content.
            </p>

            <span>
              Open Courses →
            </span>

          </Link>


          {/* ASSIGNMENTS */}

          <Link
            href="/student/assignments"
            className="student-home-feature-card"
          >

            <div className="student-feature-number">
              02
            </div>

            <div className="student-feature-icon">
              📝
            </div>

            <h3>
              Assignments
            </h3>

            <p>
              Complete exercises, assignments and academic
              activities provided by your teacher.
            </p>

            <span>
              View Assignments →
            </span>

          </Link>


          {/* MATERIALS */}

          <Link
            href="/student/materials"
            className="student-home-feature-card"
          >

            <div className="student-feature-number">
              03
            </div>

            <div className="student-feature-icon">
              📖
            </div>

            <h3>
              Learning Materials
            </h3>

            <p>
              Read notes, review exercises and access resources
              that support your learning.
            </p>

            <span>
              Open Materials →
            </span>

          </Link>


          {/* PERFORMANCE */}

          <Link
            href="/student/performance"
            className="student-home-feature-card"
          >

            <div className="student-feature-number">
              04
            </div>

            <div className="student-feature-icon">
              📊
            </div>

            <h3>
              My Performance
            </h3>

            <p>
              Monitor your progress, completed lessons and
              academic achievements.
            </p>

            <span>
              View Performance →
            </span>

          </Link>

        </div>

      </section>


      {/* CURRENT COURSE */}

      <section className="student-current-course">

        <div className="student-current-course-inner">

          <div>

            <span>
              CONTINUE YOUR COURSE
            </span>

            <h2>
              Mathematics
            </h2>

            <p>
              Primary 6 · 14 lessons · 72% completed
            </p>

            <Link
              href="/student/courses"
              className="student-course-btn"
            >
              Continue Mathematics →
            </Link>

          </div>


          <div className="student-course-progress">

            <div className="student-course-circle">
              72%
            </div>

            <span>
              Course Progress
            </span>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="student-home-footer">

        <div>

          <strong>
            EP APPEC Remera Rukoma
          </strong>

          <p>
            Modern digital learning for better education.
          </p>

        </div>

        <div className="student-footer-links">

          <Link href="/student">
            Home
          </Link>

          <Link href="/student/courses">
            Courses
          </Link>

          <Link href="/student/assignments">
            Assignments
          </Link>

          <Link href="/student/materials">
            Materials
          </Link>

          <Link href="/student/performance">
            Performance
          </Link>

        </div>

        <span>
          © 2026 · District Kamonyi · Sector Rukoma
        </span>

      </footer>

    </main>
  );
}