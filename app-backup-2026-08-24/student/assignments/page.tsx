import Link from "next/link";

export default function AssignmentsPage() {
  return (
    <main className="student-feature-page">

      <nav className="student-feature-navbar">
        <Link href="/student" className="student-feature-logo">
          <div>EP</div>
          <span>
            <strong>EP APPEC</strong>
            Remera Rukoma
          </span>
        </Link>

        <div className="student-feature-nav">
          <Link href="/student">Home</Link>
          <Link href="/student/courses">My Courses</Link>
          <Link href="/student/assignments">Assignments</Link>
          <Link href="/">Logout</Link>
        </div>
      </nav>

      <section className="student-feature-hero">
        <span>STUDENT LEARNING PLATFORM</span>

        <h1>
          Your Assignments
        </h1>

        <p>
          Complete your academic activities and keep track of
          the work assigned by your teacher.
        </p>
      </section>

      <section className="student-feature-content">

        <div className="feature-page-heading">
          <span>ACADEMIC WORK</span>
          <h2>Assignments & Practice</h2>
          <p>
            Your assignments will appear here when they are
            provided by your teacher.
          </p>
        </div>

        <div className="assignment-grid">

          <div className="assignment-card">

            <div className="assignment-icon">
              📝
            </div>

            <div className="assignment-info">

              <span className="assignment-status">
                AVAILABLE
              </span>

              <h3>
                Mathematics Practice
              </h3>

              <p>
                Practice questions related to your Mathematics
                lessons.
              </p>

              <div className="assignment-details">
                <span>📚 Mathematics</span>
                <span>🎓 Primary 6</span>
              </div>

            </div>

            <button className="assignment-btn">
              Start Assignment →
            </button>

          </div>


          <div className="assignment-card">

            <div className="assignment-icon">
              📖
            </div>

            <div className="assignment-info">

              <span className="assignment-status">
                PRACTICE
              </span>

              <h3>
                Lesson Exercises
              </h3>

              <p>
                Review exercises designed to help you understand
                the topics studied in class.
              </p>

              <div className="assignment-details">
                <span>📚 Mathematics</span>
                <span>14 Lessons</span>
              </div>

            </div>

            <Link
              href="/student/courses"
              className="assignment-btn"
            >
              Open Lessons →
            </Link>

          </div>

        </div>

      </section>

      <footer className="student-feature-footer">
        <strong>EP APPEC Remera Rukoma</strong>
        <span>
          © 2026 · District Kamonyi · Sector Rukoma
        </span>
      </footer>

    </main>
  );
}