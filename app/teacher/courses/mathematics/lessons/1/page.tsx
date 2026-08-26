import Link from "next/link";

export default function TeacherLessonOnePage() {
  return (
    <main className="teacher-lesson-page">

      {/* SIDEBAR */}

      <aside className="teacher-lesson-sidebar">

        <Link href="/teacher" className="teacher-lesson-brand">
          <div className="teacher-lesson-brand-mark">
            EP
          </div>

          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>
        </Link>

        <div className="teacher-lesson-label">
          TEACHER PORTAL
        </div>

        <nav className="teacher-lesson-nav">

          <Link href="/teacher">
            <span>âŒ‚</span>
            Dashboard
          </Link>

          <Link
            href="/teacher/courses"
            className="teacher-lesson-active"
          >
            <span>ðŸ“š</span>
            Courses
          </Link>

          <Link href="/teacher/assignments">
            <span>ðŸ“</span>
            Assignments
          </Link>

          <Link href="/teacher/materials">
            <span>ðŸ“–</span>
            Learning Materials
          </Link>

          <Link href="/teacher/students">
            <span>ðŸ‘¨â€ðŸŽ“</span>
            Students
          </Link>

          <Link href="/teacher/performance">
            <span>ðŸ“Š</span>
            Performance
          </Link>

        </nav>

        <div className="teacher-lesson-sidebar-bottom">

          <Link href="/">
            <span>ðŸ </span>
            School Home
          </Link>

          <Link href="/">
            <span>â†ª</span>
            Logout
          </Link>

        </div>

      </aside>


      {/* MAIN */}

      <section className="teacher-lesson-main">

        {/* TOPBAR */}

        <header className="teacher-lesson-topbar">

          <div>

            <Link
              href="/teacher/courses/mathematics/lessons"
              className="teacher-lesson-back"
            >
              â† Back to Lessons
            </Link>

            <span>
              LESSON MANAGEMENT
            </span>

            <h1>
              Lesson 1
            </h1>

          </div>

          <div className="teacher-lesson-profile">

            <div className="teacher-lesson-avatar">
              G
            </div>

            <div>
              <strong>
                NDORIMANA Gilbert
              </strong>

              <span>
                Mathematics Teacher
              </span>
            </div>

          </div>

        </header>


        {/* LESSON HEADER */}

        <section className="teacher-lesson-header">

          <div className="teacher-lesson-number">
            01
          </div>

          <div className="teacher-lesson-title">

            <span>
              PRIMARY 6 Â· MATHEMATICS
            </span>

            <h2>
              Numbers in Words
            </h2>

            <p>
              Read and write numbers correctly in words.
            </p>

          </div>

          <div className="teacher-lesson-published">
            PUBLISHED
          </div>

        </section>


        {/* CONTENT GRID */}

        <section className="teacher-lesson-content-grid">


          {/* LESSON CONTENT */}

          <article className="teacher-lesson-content-card">

            <div className="teacher-lesson-card-heading">

              <div>
                <span>LESSON CONTENT</span>

                <h2>
                  Numbers in Words
                </h2>
              </div>

              <button>
                Edit Lesson
              </button>

            </div>


            <div className="teacher-lesson-body">

              <h3>
                Introduction
              </h3>

              <p>
                Numbers can be written using digits or words.
                Writing numbers in words helps learners understand
                the value and meaning of numbers.
              </p>


              <h3>
                Learning Objectives
              </h3>

              <ul>
                <li>
                  Read numbers correctly.
                </li>

                <li>
                  Write numbers using words.
                </li>

                <li>
                  Identify the place value of digits.
                </li>

                <li>
                  Convert numbers from figures to words.
                </li>
              </ul>


              <h3>
                Examples
              </h3>

              <div className="teacher-lesson-example">

                <p>
                  <strong>25</strong> = Twenty-five
                </p>

                <p>
                  <strong>100</strong> = One hundred
                </p>

                <p>
                  <strong>250</strong> = Two hundred and fifty
                </p>

                <p>
                  <strong>1,000</strong> = One thousand
                </p>

              </div>


              <h3>
                Practice
              </h3>

              <p>
                Write the following numbers in words:
              </p>

              <ol>
                <li>45</li>
                <li>125</li>
                <li>500</li>
                <li>1,250</li>
              </ol>

            </div>

          </article>


          {/* RIGHT SIDE */}

          <aside className="teacher-lesson-right">


            {/* LESSON DETAILS */}

            <div className="teacher-lesson-side-card">

              <span>LESSON DETAILS</span>

              <div className="teacher-lesson-detail">
                <small>Course</small>
                <strong>Mathematics</strong>
              </div>

              <div className="teacher-lesson-detail">
                <small>Class</small>
                <strong>Primary 6</strong>
              </div>

              <div className="teacher-lesson-detail">
                <small>Lesson</small>
                <strong>1 of 14</strong>
              </div>

              <div className="teacher-lesson-detail">
                <small>Status</small>
                <strong className="teacher-lesson-green">
                  Published
                </strong>
              </div>

            </div>


            {/* ACTIONS */}

            <div className="teacher-lesson-side-card">

              <span>QUICK ACTIONS</span>

              <button className="teacher-lesson-action-primary">
                Edit Lesson
              </button>

              <button className="teacher-lesson-action-secondary">
                Preview as Student
              </button>

              <button className="teacher-lesson-action-secondary">
                Duplicate Lesson
              </button>

            </div>


            {/* NAVIGATION */}

            <div className="teacher-lesson-side-card">

              <span>LESSON NAVIGATION</span>

              <Link
                href="/teacher/courses/mathematics/lessons"
                className="teacher-lesson-nav-link"
              >
                â† All Lessons
              </Link>

              <Link
                href="/teacher/courses/mathematics/lessons/2"
                className="teacher-lesson-nav-link"
              >
                Next Lesson â†’
              </Link>

            </div>

          </aside>

        </section>


        {/* FOOTER */}

        <footer className="teacher-lesson-footer">

          <strong>
            EP APPEC Remera Rukoma
          </strong>

          <span>
            Teacher Portal Â· Â© 2026
          </span>

        </footer>

      </section>

    </main>
  );
}
