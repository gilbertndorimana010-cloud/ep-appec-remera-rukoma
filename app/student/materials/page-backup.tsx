import Link from "next/link";

export default function MaterialsPage() {
  return (
    <main className="student-materials-page">

      {/* NAVBAR */}
      <nav className="student-materials-navbar">

        <Link href="/student" className="student-materials-logo">

          <div className="materials-logo-mark">
            EP
          </div>

          <div className="materials-logo-text">
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>

        </Link>

        <div className="student-materials-nav">

          <Link href="/student">
            Home
          </Link>

          <Link href="/student/courses">
            My Courses
          </Link>

          <Link href="/student/assignments">
            Assignments
          </Link>

          <Link href="/">
            Logout
          </Link>

        </div>

      </nav>


      {/* HERO */}

      <section className="student-materials-hero">

        <span>
          LEARNING RESOURCES
        </span>

        <h1>
          Learning Materials
        </h1>

        <p>
          Access notes, exercises and educational resources
          prepared to support your learning.
        </p>

      </section>


      {/* CONTENT */}

      <section className="student-materials-content">

        <div className="materials-heading">

          <span>
            YOUR RESOURCES
          </span>

          <h2>
            Study Materials
          </h2>

          <p>
            Select a resource below to continue studying.
          </p>

        </div>


        <div className="materials-grid">

          {/* MATHEMATICS NOTES */}

          <div className="material-card">

            <div className="material-icon">
              📘
            </div>

            <span className="material-type">
              COURSE NOTES
            </span>

            <h3>
              Mathematics Notes
            </h3>

            <p>
              Review important Mathematics concepts and
              explanations from your Primary 6 course.
            </p>

            <div className="material-meta">

              <span>
                📚 Mathematics
              </span>

              <span>
                🎓 Primary 6
              </span>

            </div>

            <Link
              href="/student/courses"
              className="material-btn"
            >
              Open Course →
            </Link>

          </div>


          {/* EXERCISES */}

          <div className="material-card">

            <div className="material-icon">
              📝
            </div>

            <span className="material-type">
              EXERCISES
            </span>

            <h3>
              Practice Exercises
            </h3>

            <p>
              Practice what you have learned through exercises
              connected to your Mathematics lessons.
            </p>

            <div className="material-meta">

              <span>
                ✏️ Practice
              </span>

              <span>
                14 Lessons
              </span>

            </div>

            <Link
              href="/student/assignments"
              className="material-btn"
            >
              Practice Now →
            </Link>

          </div>


          {/* LESSON RESOURCES */}

          <div className="material-card">

            <div className="material-icon">
              📚
            </div>

            <span className="material-type">
              LESSON RESOURCES
            </span>

            <h3>
              Lesson Resources
            </h3>

            <p>
              Access learning resources connected to your
              individual course lessons.
            </p>

            <div className="material-meta">

              <span>
                📖 Lessons
              </span>

              <span>
                14 Available
              </span>

            </div>

            <Link
              href="/student/courses"
              className="material-btn"
            >
              View Lessons →
            </Link>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="student-materials-footer">

        <div>
          <strong>
            EP APPEC Remera Rukoma
          </strong>

          <p>
            Modern digital learning for better education.
          </p>
        </div>

        <span>
          © 2026 · District Kamonyi · Sector Rukoma
        </span>

      </footer>

    </main>
  );
}