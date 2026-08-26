import Link from "next/link";

export default function StudentLessonTwoPage() {
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
            Back to Mathematics
          </Link>

        </div>

      </nav>

      {/* LESSON CONTENT */}
      <section className="student-lesson-container">

        <div className="student-lesson-breadcrumb">
          Mathematics / Lesson 2
        </div>

        {/* HERO */}
        <div className="student-lesson-hero">

          <div className="student-lesson-icon">
            📖
          </div>

          <div>

            <span>
              PRIMARY 6 · MATHEMATICS
            </span>

            <h1>
              Place Value and Expanded Form
            </h1>

            <p>
              Understand the value of digits in numbers and write numbers in expanded form.
            </p>

          </div>

        </div>

        {/* INTRODUCTION */}
        <article className="student-lesson-card">

          <span className="student-lesson-label">
            LESSON 02
          </span>

          <h2>
            Introduction
          </h2>

          <p>
            Every digit in a number has a place value. Place value tells us
            how much a digit is worth depending on its position in the number.
            We can also write a number in expanded form by showing the value
            of each digit.
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
              Identify the place value of digits.
            </li>

            <li>
              Find the value of a digit in a number.
            </li>

            <li>
              Write numbers in expanded form.
            </li>

            <li>
              Convert expanded form back into standard form.
            </li>

          </ul>

        </article>

        {/* EXAMPLES */}
        <article className="student-lesson-card">

          <span className="student-lesson-label">
            EXAMPLES
          </span>

          <h2>
            Place Value and Expanded Form
          </h2>

          <div className="student-lesson-examples">

            <div>
              <strong>345</strong>
              <span>300 + 40 + 5</span>
            </div>

            <div>
              <strong>1,250</strong>
              <span>1,000 + 200 + 50</span>
            </div>

            <div>
              <strong>4,608</strong>
              <span>4,000 + 600 + 8</span>
            </div>

            <div>
              <strong>12,345</strong>
              <span>10,000 + 2,000 + 300 + 40 + 5</span>
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
              <strong>1.</strong> Write 456 in expanded form.
            </p>

            <p>
              <strong>2.</strong> Write 2,305 in expanded form.
            </p>

            <p>
              <strong>3.</strong> What is the value of 7 in 7,245?
            </p>

            <p>
              <strong>4.</strong> Write 5,000 + 600 + 20 + 4 in standard form.
            </p>

          </div>

        </article>

        {/* NAVIGATION */}
        <div className="student-lesson-actions">

          <Link
            href="/student/courses/mathematics/lessons/1"
            className="student-lesson-back-btn"
          >
            ← Previous Lesson
          </Link>

          <Link
            href="/student/courses/mathematics/lessons/3"
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
