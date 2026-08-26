import Link from "next/link";

export default function TeacherCoursesPage() {
  return (
    <main className="teacher-courses-page">

      {/* SIDEBAR */}
      <aside className="teacher-courses-sidebar">

        <Link href="/teacher" className="teacher-courses-brand">
          <div className="teacher-courses-brand-mark">
            EP
          </div>

          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>
        </Link>

        <div className="teacher-courses-label">
          TEACHER PORTAL
        </div>

        <nav className="teacher-courses-nav">

          <Link href="/teacher">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link
            href="/teacher/courses"
            className="teacher-courses-active"
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

        <div className="teacher-courses-sidebar-bottom">

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


      {/* MAIN CONTENT */}
      <section className="teacher-courses-main">

        {/* TOPBAR */}
        <header className="teacher-courses-topbar">

          <div>
            <span>TEACHER PORTAL</span>

            <h1>
              My Courses
            </h1>
          </div>

          <div className="teacher-courses-profile">

            <div className="teacher-courses-avatar">
              G
            </div>

            <div>
              <strong>Mr. Gilbert</strong>
              <span>Mathematics Teacher</span>
            </div>

          </div>

        </header>


        {/* PAGE INTRO */}
        <section className="teacher-courses-intro">

          <div>

            <span>
              COURSE MANAGEMENT
            </span>

            <h2>
              Manage your courses
            </h2>

            <p>
              Organize your subjects, lessons and learning content
              for your students from one place.
            </p>

          </div>

          <button className="teacher-add-course-btn">
            + Add New Course
          </button>

        </section>


        {/* COURSE LIST */}
        <section className="teacher-course-list">

          <div className="teacher-course-list-heading">

            <div>
              <span>ACTIVE COURSES</span>

              <h2>
                Your Courses
              </h2>
            </div>

            <span className="teacher-course-count">
              1 Course
            </span>

          </div>


          {/* MATHEMATICS COURSE */}
          <article className="teacher-course-card">

            <div className="teacher-course-card-icon">
              📐
            </div>

            <div className="teacher-course-card-info">

              <span className="teacher-course-subject">
                MATHEMATICS
              </span>

              <h3>
                Mathematics
              </h3>

              <p>
                Primary 6
              </p>

              <div className="teacher-course-meta">

                <span>
                  📖 14 Lessons
                </span>

                <span>
                  👨‍🎓 32 Students
                </span>

                <span>
                  📝 6 Assignments
                </span>

              </div>

            </div>


            <div className="teacher-course-card-progress">

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


            <div className="teacher-course-card-actions">

              <Link href="/teacher/courses/mathematics">
                Manage Course
              </Link>

              <button>
                Edit
              </button>

            </div>

          </article>

        </section>


        {/* INFORMATION */}
        <section className="teacher-course-info-box">

          <div className="teacher-course-info-icon">
            💡
          </div>

          <div>

            <h3>
              Course Management
            </h3>

            <p>
              From here you can manage lessons, assignments,
              learning materials and other resources associated
              with your courses.
            </p>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="teacher-courses-footer">

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