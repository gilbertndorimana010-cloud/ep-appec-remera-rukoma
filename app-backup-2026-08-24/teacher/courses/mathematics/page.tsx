import Link from "next/link";

export default function TeacherMathematicsPage() {
  return (
    <main className="teacher-math-page">

      {/* SIDEBAR */}

      <aside className="teacher-math-sidebar">

        <Link href="/teacher" className="teacher-math-brand">

          <div className="teacher-math-brand-mark">
            EP
          </div>

          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>

        </Link>


        <div className="teacher-math-label">
          TEACHER PORTAL
        </div>


        <nav className="teacher-math-nav">

          <Link href="/teacher">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            href="/teacher/courses"
            className="teacher-math-active"
          >
            <span>📚</span>
            Courses
          </Link>

          <Link href="/teacher/assignments">
            <span>📝</span>
            Assignments
          </Link>

          <Link href="/teacher/materials">
            <span>📖</span>
            Learning Materials
          </Link>

          <Link href="/teacher/students">
            <span>👨‍🎓</span>
            Students
          </Link>

          <Link href="/teacher/performance">
            <span>📊</span>
            Performance
          </Link>

        </nav>


        <div className="teacher-math-sidebar-bottom">

          <Link href="/">
            <span>🏠</span>
            School Home
          </Link>

          <Link href="/">
            <span>↪</span>
            Logout
          </Link>

        </div>

      </aside>


      {/* MAIN */}

      <section className="teacher-math-main">

        {/* TOPBAR */}

        <header className="teacher-math-topbar">

          <div>

            <Link
              href="/teacher/courses"
              className="teacher-math-back"
            >
              ← Back to Courses
            </Link>

            <span>
              COURSE MANAGEMENT
            </span>

            <h1>
              Mathematics
            </h1>

          </div>


          <div className="teacher-math-profile">

            <div className="teacher-math-avatar">
              G
            </div>

            <div>

              <strong>
                Mr. Gilbert
              </strong>

              <span>
                Mathematics Teacher
              </span>

            </div>

          </div>

        </header>


        {/* COURSE HERO */}

        <section className="teacher-math-hero">

          <div className="teacher-math-hero-icon">
            📐
          </div>

          <div>

            <span>
              PRIMARY 6 · MATHEMATICS
            </span>

            <h2>
              Mathematics
            </h2>

            <p>
              Manage lessons, assignments, learning materials
              and student activities for this course.
            </p>

          </div>

          <div className="teacher-math-status">
            ACTIVE
          </div>

        </section>


        {/* STATISTICS */}

        <section className="teacher-math-stats">

          <div>
            <span>LESSONS</span>
            <strong>14</strong>
          </div>

          <div>
            <span>STUDENTS</span>
            <strong>32</strong>
          </div>

          <div>
            <span>ASSIGNMENTS</span>
            <strong>6</strong>
          </div>

          <div>
            <span>PROGRESS</span>
            <strong>72%</strong>
          </div>

        </section>


        {/* MANAGEMENT */}

        <section className="teacher-math-section">

          <div className="teacher-math-heading">

            <span>
              COURSE MANAGEMENT
            </span>

            <h2>
              What would you like to manage?
            </h2>

          </div>


          <div className="teacher-math-grid">


            {/* LESSONS */}

            <Link
              href="/teacher/courses/mathematics/lessons"
              className="teacher-math-card"
            >

              <div className="teacher-math-card-icon">
                📖
              </div>

              <h3>
                Lessons
              </h3>

              <p>
                Create, edit and organize the 14 mathematics
                lessons for Primary 6 students.
              </p>

              <span>
                Manage Lessons →
              </span>

            </Link>


            {/* ASSIGNMENTS */}

            <Link
              href="/teacher/assignments"
              className="teacher-math-card"
            >

              <div className="teacher-math-card-icon">
                📝
              </div>

              <h3>
                Assignments
              </h3>

              <p>
                Create assignments and academic activities
                for your students.
              </p>

              <span>
                Manage Assignments →
              </span>

            </Link>


            {/* MATERIALS */}

            <Link
              href="/teacher/materials"
              className="teacher-math-card"
            >

              <div className="teacher-math-card-icon">
                📚
              </div>

              <h3>
                Learning Materials
              </h3>

              <p>
                Upload notes, exercises and other educational
                resources.
              </p>

              <span>
                Manage Materials →
              </span>

            </Link>


            {/* STUDENTS */}

            <Link
              href="/teacher/students"
              className="teacher-math-card"
            >

              <div className="teacher-math-card-icon">
                👨‍🎓
              </div>

              <h3>
                Students
              </h3>

              <p>
                View students enrolled in Mathematics Primary 6
                and monitor their activity.
              </p>

              <span>
                View Students →
              </span>

            </Link>


          </div>

        </section>


        {/* COURSE PROGRESS */}

        <section className="teacher-math-progress-section">

          <div>

            <span>
              COURSE PROGRESS
            </span>

            <h2>
              Mathematics Learning Progress
            </h2>

          </div>


          <div className="teacher-math-progress">

            <div className="teacher-math-progress-top">

              <strong>
                72%
              </strong>

              <span>
                10 of 14 lessons completed
              </span>

            </div>

            <div className="teacher-math-progress-bar">
              <i></i>
            </div>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="teacher-math-footer">

          <strong>
            EP APPEC Remera Rukoma
          </strong>

          <span>
            Teacher Portal · © 2026
          </span>

        </footer>

      </section>

    </main>
  );
}