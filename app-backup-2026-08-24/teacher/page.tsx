import Link from "next/link";

export default function TeacherPage() {
  return (
    <main className="teacher-dashboard-page">

      {/* SIDEBAR */}

      <aside className="teacher-sidebar">

        <Link href="/teacher" className="teacher-brand">

          <div className="teacher-brand-mark">
            EP
          </div>

          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>

        </Link>


        <div className="teacher-sidebar-label">
          TEACHER PORTAL
        </div>


        <nav className="teacher-sidebar-nav">

          <Link
            href="/teacher"
            className="teacher-active-link"
          >
            <span>⌂</span>
            Dashboard
          </Link>

          <Link href="/student/courses">
            <span>📚</span>
            Courses
          </Link>

          <Link href="/student/assignments">
            <span>📝</span>
            Assignments
          </Link>

          <Link href="/student/materials">
            <span>📖</span>
            Learning Materials
          </Link>

          <Link href="/student/performance">
            <span>📊</span>
            Student Performance
          </Link>

        </nav>


        <div className="teacher-sidebar-bottom">

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

      <section className="teacher-main">

        {/* TOP BAR */}

        <header className="teacher-topbar">

          <div>

            <span>
              TEACHER DASHBOARD
            </span>

            <h1>
              Good morning, Mr. Gilbert
            </h1>

          </div>


          <div className="teacher-profile">

            <div className="teacher-avatar">
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


        {/* WELCOME */}

        <section className="teacher-welcome">

          <div>

            <span>
              EP APPEC REMERA RUKOMA
            </span>

            <h2>
              Manage your classroom
              <br />
              <strong>with confidence.</strong>
            </h2>

            <p>
              Create lessons, manage assignments, share learning
              materials and monitor your students' progress from
              one organized dashboard.
            </p>

          </div>

          <div className="teacher-welcome-icon">
            👨‍🏫
          </div>

        </section>


        {/* STATISTICS */}

        <section className="teacher-stats">

          <div className="teacher-stat">

            <div className="teacher-stat-icon">
              📚
            </div>

            <div>
              <strong>
                1
              </strong>

              <span>
                Active Course
              </span>
            </div>

          </div>


          <div className="teacher-stat">

            <div className="teacher-stat-icon">
              📖
            </div>

            <div>
              <strong>
                14
              </strong>

              <span>
                Lessons
              </span>
            </div>

          </div>


          <div className="teacher-stat">

            <div className="teacher-stat-icon">
              👨‍🎓
            </div>

            <div>
              <strong>
                32
              </strong>

              <span>
                Students
              </span>
            </div>

          </div>


          <div className="teacher-stat">

            <div className="teacher-stat-icon">
              📝
            </div>

            <div>
              <strong>
                6
              </strong>

              <span>
                Assignments
              </span>
            </div>

          </div>

        </section>


        {/* QUICK ACTIONS */}

        <section className="teacher-section">

          <div className="teacher-section-heading">

            <div>

              <span>
                MANAGEMENT
              </span>

              <h2>
                Quick Actions
              </h2>

            </div>

          </div>


          <div className="teacher-actions-grid">

            <Link
              href="/student/courses"
              className="teacher-action-card"
            >

              <div className="teacher-action-icon">
                📚
              </div>

              <h3>
                Manage Courses
              </h3>

              <p>
                Organize courses and access your lesson content.
              </p>

              <span>
                Open Courses →
              </span>

            </Link>


            <Link
              href="/student/assignments"
              className="teacher-action-card"
            >

              <div className="teacher-action-icon">
                📝
              </div>

              <h3>
                Assignments
              </h3>

              <p>
                Create and manage academic assignments.
              </p>

              <span>
                Manage Assignments →
              </span>

            </Link>


            <Link
              href="/student/materials"
              className="teacher-action-card"
            >

              <div className="teacher-action-icon">
                📖
              </div>

              <h3>
                Learning Materials
              </h3>

              <p>
                Organize notes, exercises and resources.
              </p>

              <span>
                Manage Materials →
              </span>

            </Link>


            <Link
              href="/student/performance"
              className="teacher-action-card"
            >

              <div className="teacher-action-icon">
                📊
              </div>

              <h3>
                Student Performance
              </h3>

              <p>
                Monitor student progress and academic results.
              </p>

              <span>
                View Performance →
              </span>

            </Link>

          </div>

        </section>


        {/* COURSE OVERVIEW */}

        <section className="teacher-section">

          <div className="teacher-section-heading">

            <div>

              <span>
                CURRENT COURSE
              </span>

              <h2>
                Mathematics · Primary 6
              </h2>

            </div>

            <span className="teacher-course-status">
              ACTIVE
            </span>

          </div>


          <div className="teacher-course-overview">

            <div className="teacher-course-main">

              <div className="teacher-course-icon">
                📐
              </div>

              <div>

                <h3>
                  Mathematics
                </h3>

                <p>
                  Primary 6 · 14 lessons
                </p>

              </div>

            </div>


            <div className="teacher-course-progress">

              <span>
                COURSE PROGRESS
              </span>

              <strong>
                72%
              </strong>

              <div>
                <i></i>
              </div>

            </div>


            <Link
              href="/student/courses"
              className="teacher-course-button"
            >
              Open Course →
            </Link>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="teacher-footer">

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