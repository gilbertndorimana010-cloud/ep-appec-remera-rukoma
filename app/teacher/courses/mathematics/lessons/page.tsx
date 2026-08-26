import Link from "next/link";

const lessons = [
  {
    number: 1,
    title: "Numbers in Words",
    description: "Read and write numbers correctly in words.",
    status: "Published",
  },
  {
    number: 2,
    title: "Place Value",
    description: "Understand the value of digits in whole numbers.",
    status: "Published",
  },
  {
    number: 3,
    title: "Addition of Whole Numbers",
    description: "Learn different methods of adding whole numbers.",
    status: "Published",
  },
  {
    number: 4,
    title: "Subtraction of Whole Numbers",
    description: "Practice subtraction using different strategies.",
    status: "Published",
  },
  {
    number: 5,
    title: "Multiplication",
    description: "Understand multiplication and solve related problems.",
    status: "Published",
  },
  {
    number: 6,
    title: "Division",
    description: "Learn division and solve division problems.",
    status: "Published",
  },
  {
    number: 7,
    title: "Fractions",
    description: "Introduction to fractions and their applications.",
    status: "Published",
  },
  {
    number: 8,
    title: "Decimals",
    description: "Understand decimal numbers and their operations.",
    status: "Published",
  },
  {
    number: 9,
    title: "Percentages",
    description: "Learn percentages and solve practical problems.",
    status: "Published",
  },
  {
    number: 10,
    title: "Geometry",
    description: "Explore shapes, angles and geometric concepts.",
    status: "Published",
  },
  {
    number: 11,
    title: "Measurement",
    description: "Learn units and solve measurement problems.",
    status: "Published",
  },
  {
    number: 12,
    title: "Data Handling",
    description: "Read, organize and interpret simple data.",
    status: "Published",
  },
  {
    number: 13,
    title: "Problem Solving",
    description: "Use mathematical reasoning to solve problems.",
    status: "Published",
  },
  {
    number: 14,
    title: "Revision and Assessment",
    description: "Review the course and prepare for assessment.",
    status: "Published",
  },
];

export default function TeacherLessonsPage() {
  return (
    <main className="teacher-lessons-page">

      {/* SIDEBAR */}

      <aside className="teacher-lessons-sidebar">

        <Link href="/teacher" className="teacher-lessons-brand">
          <div className="teacher-lessons-brand-mark">
            EP
          </div>

          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>
        </Link>

        <div className="teacher-lessons-label">
          TEACHER PORTAL
        </div>

        <nav className="teacher-lessons-nav">

          <Link href="/teacher">
            <span>âŒ‚</span>
            Dashboard
          </Link>

          <Link
            href="/teacher/courses"
            className="teacher-lessons-active"
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

        <div className="teacher-lessons-sidebar-bottom">

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

      <section className="teacher-lessons-main">

        {/* TOPBAR */}

        <header className="teacher-lessons-topbar">

          <div>

            <Link
              href="/teacher/courses/mathematics"
              className="teacher-lessons-back"
            >
              â† Back to Mathematics
            </Link>

            <span>
              COURSE LESSONS
            </span>

            <h1>
              Mathematics Lessons
            </h1>

          </div>

          <div className="teacher-lessons-profile">

            <div className="teacher-lessons-avatar">
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


        {/* PAGE HEADER */}

        <section className="teacher-lessons-header">

          <div>

            <span>
              PRIMARY 6 Â· MATHEMATICS
            </span>

            <h2>
              Manage your lessons
            </h2>

            <p>
              Create, organize and update lessons for your
              Primary 6 Mathematics students.
            </p>

          </div>

          <button className="teacher-lessons-add">
            + Add New Lesson
          </button>

        </section>


        {/* SUMMARY */}

        <section className="teacher-lessons-summary">

          <div>
            <span>TOTAL LESSONS</span>
            <strong>14</strong>
          </div>

          <div>
            <span>PUBLISHED</span>
            <strong>14</strong>
          </div>

          <div>
            <span>DRAFTS</span>
            <strong>0</strong>
          </div>

          <div>
            <span>COURSE PROGRESS</span>
            <strong>72%</strong>
          </div>

        </section>


        {/* LESSON LIST */}

        <section className="teacher-lessons-list">

          <div className="teacher-lessons-list-heading">

            <div>
              <span>LESSON LIBRARY</span>

              <h2>
                All Mathematics Lessons
              </h2>
            </div>

            <span className="teacher-lessons-count">
              14 Lessons
            </span>

          </div>


          <div className="teacher-lessons-items">

            {lessons.map((lesson) => (

              <article
                key={lesson.number}
                className="teacher-lesson-item"
              >

                <div className="teacher-lesson-number">
                  {String(lesson.number).padStart(2, "0")}
                </div>

                <div className="teacher-lesson-content">

                  <span>
                    LESSON {lesson.number}
                  </span>

                  <h3>
                    {lesson.title}
                  </h3>

                  <p>
                    {lesson.description}
                  </p>

                </div>

                <span className="teacher-lesson-status">
                  {lesson.status}
                </span>

                <div className="teacher-lesson-actions">

                  <Link
                    href={`/teacher/courses/mathematics/lessons/${lesson.number}`}
                  >
                    Manage
                  </Link>

                  <button>
                    Edit
                  </button>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* FOOTER */}

        <footer className="teacher-lessons-footer">

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
