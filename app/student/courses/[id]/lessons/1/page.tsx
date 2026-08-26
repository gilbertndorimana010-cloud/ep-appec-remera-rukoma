import Link from "next/link";

export default function StudentLessonOnePage() {
  return (
    <main className="student-lesson-page">

      {/* NAVBAR */}
      <nav className="student-lesson-navbar">

        <Link
          href="/student/courses/mathematics"
          className="student-lesson-logo"
        >
          🎓 EP APPEC
          <span>Remera Rukoma</span>
        </Link>

        <div className="student-lesson-nav-actions">

          <Link href="/student/courses/mathematics">
            ← My Course
          </Link>

          <Link href="/">
            Logout
          </Link>

        </div>

      </nav>


      {/* MAIN CONTENT */}
      <section className="student-lesson-container">

        <div className="student-lesson-breadcrumb">
          Mathematics / Lesson 1
        </div>


        {/* HEADER */}
        <div className="student-lesson-hero">

          <div className="student-lesson-icon">
            📖
          </div>

          <div>

            <span>
              PRIMARY 6 · MATHEMATICS
            </span>

            <h1>
              Numbers in Words
            </h1>

            <p>
              Read and write numbers correctly in words.
            </p>

          </div>

        </div>


        {/* INTRODUCTION */}
        <article className="student-lesson-card">

          <span className="student-lesson-label">
            LESSON 01
          </span>

          <h2>
            Introduction
          </h2>

          <p>
            Numbers can be written using digits or words.
            Writing numbers in words helps learners understand
            the value and meaning of numbers.
          </p>

        </article>


        {/* LEARNING OBJECTIVES */}
        <article className="student-lesson-card">

          <span className="student-lesson-label">
            LEARNING OBJECTIVES
          </span>

          <h2>
            What you will learn
          </h2>

          <ul className="student-lesson-objectives">

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

        </article>


        {/* EXAMPLES */}
        <article className="student-lesson-card">

          <span className="student-lesson-label">
            EXAMPLES
          </span>

          <h2>
            Numbers in Words
          </h2>

          <div className="student-lesson-examples">

            <div>
              <strong>25</strong>
              <span>Twenty-five</span>
            </div>

            <div>
              <strong>100</strong>
              <span>One hundred</span>
            </div>

            <div>
              <strong>250</strong>
              <span>Two hundred and fifty</span>
            </div>

            <div>
              <strong>1,000</strong>
              <span>One thousand</span>
            </div>

          </div>

        </article>


        {/* PRACTICE */}
        <article className="student-lesson-card">

          <span className="student-lesson-label">
            PRACTICE
          </span>

          <h2>
            Try these questions
          </h2>

          <div className="student-lesson-question">

            <p>
              <strong>1.</strong> Write 45 in words.
            </p>

            <p>
              <strong>2.</strong> Write 125 in words.
            </p>

            <p>
              <strong>3.</strong> Write 500 in words.
            </p>

            <p>
              <strong>4.</strong> Write 1,250 in words.
            </p>

          </div>

        </article>


        {/* NAVIGATION */}
        <div className="student-lesson-actions">

          <Link
            href="/student/courses/mathematics"
            className="student-lesson-back-btn"
          >
            ← Back to Course
          </Link>

          <Link
            href="/student/courses/mathematics/lessons/2"
            className="student-lesson-next-btn"
          >
            Next Lesson →
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="student-lesson-footer">

        <strong>
          EP APPEC Remera Rukoma
        </strong>

        <span>
          E-Learning Platform · © 2026
        </span>

      </footer>

    </main>
  );
}