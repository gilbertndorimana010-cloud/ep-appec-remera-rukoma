import Link from "next/link";

const lessons = [
  {
    id: "1",
    title: "Numbers in Words",
    description: "Read and write numbers correctly in words.",
  },
  {
    id: "2",
    title: "Place Value",
    description: "Understand the value of digits in whole numbers.",
  },
  {
    id: "3",
    title: "Addition of Whole Numbers",
    description: "Learn different methods of adding whole numbers.",
  },
  {
    id: "4",
    title: "Subtraction of Whole Numbers",
    description: "Practice subtraction using different strategies.",
  },
  {
    id: "5",
    title: "Multiplication",
    description: "Understand multiplication and solve related problems.",
  },
  {
    id: "6",
    title: "Division",
    description: "Learn division and solve division problems.",
  },
  {
    id: "7",
    title: "Fractions",
    description: "Introduction to fractions and their applications.",
  },
  {
    id: "8",
    title: "Decimals",
    description: "Understand decimal numbers and their operations.",
  },
  {
    id: "9",
    title: "Percentages",
    description: "Learn percentages and solve practical problems.",
  },
  {
    id: "10",
    title: "Geometry",
    description: "Explore shapes, angles and geometric concepts.",
  },
  {
    id: "11",
    title: "Measurement",
    description: "Learn units and solve measurement problems.",
  },
  {
    id: "12",
    title: "Data Handling",
    description: "Read, organize and interpret simple data.",
  },
  {
    id: "13",
    title: "Problem Solving",
    description: "Use mathematical reasoning to solve problems.",
  },
  {
    id: "14",
    title: "Revision and Assessment",
    description: "Review the course and prepare for assessment.",
  },
];

export default async function StudentLessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lesson =
    lessons.find((item) => item.id === id) || lessons[0];

  return (
    <main className="student-lesson-page">

      <nav className="student-lesson-navbar">

        <Link
          href="/student/courses"
          className="student-lesson-logo"
        >
          🎓 EP APPEC
          <span>Remera Rukoma</span>
        </Link>

        <div className="student-lesson-nav-actions">

          <Link href="/student/courses">
            ← My Courses
          </Link>

          <Link href="/">
            Logout
          </Link>

        </div>

      </nav>


      <section className="student-lesson-container">

        <div className="student-lesson-breadcrumb">
          Mathematics / Lesson {lesson.id}
        </div>


        <div className="student-lesson-hero">

          <div className="student-lesson-icon">
            📖
          </div>

          <div>

            <span>
              PRIMARY 6 · MATHEMATICS
            </span>

            <h1>
              {lesson.title}
            </h1>

            <p>
              {lesson.description}
            </p>

          </div>

        </div>


        <div className="student-lesson-card">

          <span className="student-lesson-label">
            LESSON {lesson.id}
          </span>

          <h2>
            {lesson.title}
          </h2>

          <p>
            Welcome to this lesson. Study the material carefully,
            complete the examples and practice exercises, then
            continue to the next lesson.
          </p>

        </div>


        <div className="student-lesson-actions">

          <Link
            href="/student/courses"
            className="student-lesson-back-btn"
          >
            ← Back to Course
          </Link>

          {Number(lesson.id) < 14 && (
            <Link
              href={`/student/courses/mathematics/lessons/${
                Number(lesson.id) + 1
              }`}
              className="student-lesson-next-btn"
            >
              Next Lesson →
            </Link>
          )}

        </div>

      </section>


      <footer className="student-lesson-footer">
        © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
      </footer>

    </main>
  );
}