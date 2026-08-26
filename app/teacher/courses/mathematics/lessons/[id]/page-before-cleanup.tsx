import Link from "next/link";

const lessons = [
  {
    id: "1",
    title: "Numbers in Words",
    description: "Read and write numbers correctly in words.",
    introduction:
      "Numbers can be written using digits or words. Writing numbers in words helps learners understand the value and meaning of numbers.",
    objectives: [
      "Read numbers correctly.",
      "Write numbers using words.",
      "Identify the place value of digits.",
      "Convert numbers from figures to words.",
    ],
    examples: [
      "25 = Twenty-five",
      "100 = One hundred",
      "250 = Two hundred and fifty",
      "1,000 = One thousand",
    ],
  },
  {
    id: "2",
    title: "Place Value",
    description: "Understand the value of digits in whole numbers.",
    introduction:
      "Place value tells us the value of a digit according to its position in a number.",
    objectives: [
      "Identify place values.",
      "Identify the value of a digit.",
      "Read large numbers correctly.",
      "Break numbers into place values.",
    ],
    examples: [
      "5 in 50 = 50",
      "7 in 700 = 700",
      "3 in 3,000 = 3,000",
    ],
  },
  {
    id: "3",
    title: "Addition of Whole Numbers",
    description: "Learn different methods of adding whole numbers.",
    introduction:
      "Addition combines two or more numbers to find their total.",
    objectives: [
      "Add whole numbers correctly.",
      "Arrange numbers according to place value.",
      "Solve addition problems.",
      "Check addition answers.",
    ],
    examples: [
      "25 + 15 = 40",
      "125 + 75 = 200",
      "350 + 150 = 500",
    ],
  },
  {
    id: "4",
    title: "Subtraction of Whole Numbers",
    description: "Practice subtraction using different strategies.",
    introduction:
      "Subtraction is used to find the difference between numbers or to take one number away from another.",
    objectives: [
      "Subtract whole numbers.",
      "Use borrowing when necessary.",
      "Solve subtraction problems.",
      "Check subtraction answers.",
    ],
    examples: [
      "50 - 20 = 30",
      "100 - 45 = 55",
      "500 - 125 = 375",
    ],
  },
  {
    id: "5",
    title: "Multiplication",
    description: "Understand multiplication and solve related problems.",
    introduction:
      "Multiplication is repeated addition and is used to find the total of equal groups.",
    objectives: [
      "Understand multiplication.",
      "Use multiplication tables.",
      "Multiply whole numbers.",
      "Solve practical multiplication problems.",
    ],
    examples: [
      "5 Ã— 2 = 10",
      "10 Ã— 5 = 50",
      "25 Ã— 4 = 100",
    ],
  },
  {
    id: "6",
    title: "Division",
    description: "Learn division and solve division problems.",
    introduction:
      "Division is the process of sharing a quantity into equal groups.",
    objectives: [
      "Understand division.",
      "Use division facts.",
      "Divide whole numbers.",
      "Solve practical division problems.",
    ],
    examples: [
      "10 Ã· 2 = 5",
      "20 Ã· 4 = 5",
      "100 Ã· 10 = 10",
    ],
  },
  {
    id: "7",
    title: "Fractions",
    description: "Introduction to fractions and their applications.",
    introduction:
      "A fraction represents a part of a whole or a part of a group.",
    objectives: [
      "Understand fractions.",
      "Identify numerator and denominator.",
      "Compare simple fractions.",
      "Use fractions in everyday situations.",
    ],
    examples: [
      "1/2 = one half",
      "1/4 = one quarter",
      "3/4 = three quarters",
    ],
  },
  {
    id: "8",
    title: "Decimals",
    description: "Understand decimal numbers and their operations.",
    introduction:
      "Decimals are another way of representing parts of a whole.",
    objectives: [
      "Read decimal numbers.",
      "Write decimals correctly.",
      "Compare decimal numbers.",
      "Perform basic decimal operations.",
    ],
    examples: [
      "0.5 = five tenths",
      "0.25 = twenty-five hundredths",
      "1.5 = one and five tenths",
    ],
  },
  {
    id: "9",
    title: "Percentages",
    description: "Learn percentages and solve practical problems.",
    introduction:
      "A percentage is a number expressed as a fraction of 100.",
    objectives: [
      "Understand percentages.",
      "Convert fractions to percentages.",
      "Calculate simple percentages.",
      "Solve percentage problems.",
    ],
    examples: [
      "50% = 50/100",
      "25% = 25/100",
      "10% of 100 = 10",
    ],
  },
  {
    id: "10",
    title: "Geometry",
    description: "Explore shapes, angles and geometric concepts.",
    introduction:
      "Geometry is the study of shapes, sizes, positions and properties of objects.",
    objectives: [
      "Identify common shapes.",
      "Identify different angles.",
      "Understand basic geometric properties.",
      "Solve simple geometry problems.",
    ],
    examples: [
      "Triangle = 3 sides",
      "Square = 4 equal sides",
      "Rectangle = 4 sides",
    ],
  },
  {
    id: "11",
    title: "Measurement",
    description: "Learn units and solve measurement problems.",
    introduction:
      "Measurement helps us describe the size, length, mass and capacity of objects.",
    objectives: [
      "Identify measurement units.",
      "Measure length.",
      "Measure mass.",
      "Measure capacity.",
    ],
    examples: [
      "100 cm = 1 m",
      "1,000 g = 1 kg",
      "1,000 ml = 1 litre",
    ],
  },
  {
    id: "12",
    title: "Data Handling",
    description: "Read, organize and interpret simple data.",
    introduction:
      "Data handling involves collecting, organizing, presenting and interpreting information.",
    objectives: [
      "Collect simple data.",
      "Organize data.",
      "Read tables and charts.",
      "Interpret simple information.",
    ],
    examples: [
      "Tables",
      "Bar charts",
      "Pictograms",
      "Simple graphs",
    ],
  },
  {
    id: "13",
    title: "Problem Solving",
    description: "Use mathematical reasoning to solve problems.",
    introduction:
      "Problem solving involves understanding a question, choosing a suitable method and finding the correct answer.",
    objectives: [
      "Understand mathematical problems.",
      "Identify important information.",
      "Choose suitable operations.",
      "Explain solutions clearly.",
    ],
    examples: [
      "Read the problem.",
      "Choose the operation.",
      "Calculate the answer.",
      "Check the result.",
    ],
  },
  {
    id: "14",
    title: "Revision and Assessment",
    description: "Review the course and prepare for assessment.",
    introduction:
      "Revision helps learners review important concepts and prepare for assessments.",
    objectives: [
      "Review important mathematics concepts.",
      "Practice different types of questions.",
      "Identify areas that need improvement.",
      "Prepare for assessment.",
    ],
    examples: [
      "Review lessons 1â€“5",
      "Review lessons 6â€“10",
      "Review lessons 11â€“14",
      "Complete assessment exercises",
    ],
  },
];

export default async function TeacherLessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lesson =
    lessons.find((item) => item.id === id) || lessons[0];

  const lessonNumber = Number(lesson.id);

  const previousLesson =
    lessonNumber > 1 ? lessonNumber - 1 : null;

  const nextLesson =
    lessonNumber < lessons.length ? lessonNumber + 1 : null;

  return (
    <main className="teacher-lesson-page">

      {/* SIDEBAR */}

      <aside className="teacher-lesson-sidebar">

        <Link
          href="/teacher"
          className="teacher-lesson-brand"
        >
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
              Lesson {lesson.id}
            </h1>

          </div>

          <div className="teacher-lesson-profile">

            <div className="teacher-lesson-avatar">
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


        {/* LESSON HEADER */}

        <section className="teacher-lesson-header">

          <div className="teacher-lesson-number">
            {String(lesson.id).padStart(2, "0")}
          </div>

          <div className="teacher-lesson-title">

            <span>
              PRIMARY 6 Â· MATHEMATICS
            </span>

            <h2>
              {lesson.title}
            </h2>

            <p>
              {lesson.description}
            </p>

          </div>

          <div className="teacher-lesson-published">
            PUBLISHED
          </div>

        </section>


        {/* CONTENT */}

        <section className="teacher-lesson-content-grid">

          <article className="teacher-lesson-content-card">

            <div className="teacher-lesson-card-heading">

              <div>

                <span>
                  LESSON CONTENT
                </span>

                <h2>
                  {lesson.title}
                </h2>

              </div>

              <Link
                href={`/teacher/courses/mathematics/lessons/${lesson.id}/edit`}
                className="teacher-lesson-edit-button"
              >
                Edit Lesson
              </Link>

            </div>


            <div className="teacher-lesson-body">

              <h3>
                Introduction
              </h3>

              <p>
                {lesson.introduction}
              </p>


              <h3>
                Learning Objectives
              </h3>

              <ul>
                {lesson.objectives.map((objective) => (
                  <li key={objective}>
                    {objective}
                  </li>
                ))}
              </ul>


              <h3>
                Examples
              </h3>

              <div className="teacher-lesson-example">

                {lesson.examples.map((example) => (
                  <p key={example}>
                    <strong>{example}</strong>
                  </p>
                ))}

              </div>


              <h3>
                Practice
              </h3>

              <p>
                Prepare exercises related to{" "}
                <strong>{lesson.title}</strong>{" "}
                for Primary 6 learners.
              </p>

            </div>

          </article>


          {/* RIGHT SIDE */}

          <aside className="teacher-lesson-right">

            <div className="teacher-lesson-side-card">

              <span>
                LESSON DETAILS
              </span>

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
                <strong>
                  {lesson.id} of {lessons.length}
                </strong>
              </div>

              <div className="teacher-lesson-detail">
                <small>Status</small>

                <strong className="teacher-lesson-green">
                  Published
                </strong>
              </div>

            </div>


            <div className="teacher-lesson-side-card">

              <span>
                QUICK ACTIONS
              </span>

              <Link href={`/teacher/courses/mathematics/lessons/${lesson.id}/edit`} className="teacher-lesson-action-primary">Edit Lesson</Link>

              <Link href={`/student/courses/mathematics/lessons/${lesson.id}`} className="teacher-lesson-action-secondary">Preview as Student</Link>

              <button className="teacher-lesson-action-secondary">
                Duplicate Lesson
              </button>

            </div>


            <div className="teacher-lesson-side-card">

              <span>
                LESSON NAVIGATION
              </span>

              {previousLesson ? (
                <Link
                  href={`/teacher/courses/mathematics/lessons/${previousLesson}`}
                  className="teacher-lesson-nav-link"
                >
                  â† Previous Lesson
                </Link>
              ) : null}

              <Link
                href="/teacher/courses/mathematics/lessons"
                className="teacher-lesson-nav-link"
              >
                All Lessons
              </Link>

              {nextLesson ? (
                <Link
                  href={`/teacher/courses/mathematics/lessons/${nextLesson}`}
                  className="teacher-lesson-nav-link"
                >
                  Next Lesson â†’
                </Link>
              ) : null}

            </div>

          </aside>

        </section>


        {/* LESSON CONTENT MANAGEMENT */}

        <section className="teacher-lesson-management">

          <div className="teacher-lesson-management-header">
            <span>LEARNING CONTENT</span>
            <h2>Manage Lesson Content</h2>
            <p>
              Add and manage learning resources for your students.
            </p>
          </div>

          <div className="teacher-lesson-management-grid">

            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/notes`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                NOTES
              </div>
              <div>
                <h3>Lesson Notes</h3>
                <p>Add and manage notes for students.</p>
              </div>
              <strong>Manage Notes →</strong>
            </Link>

            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/videos`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                VIDEO
              </div>
              <div>
                <h3>Videos</h3>
                <p>Add educational videos for students.</p>
              </div>
              <strong>Manage Videos →</strong>
            </Link>

            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/documents`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                DOCUMENTS
              </div>
              <div>
                <h3>Documents</h3>
                <p>Upload documents and learning resources.</p>
              </div>
              <strong>Manage Documents →</strong>
            </Link>

            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/exercises`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                EXERCISES
              </div>
              <div>
                <h3>Exercises</h3>
                <p>Create exercises for students.</p>
              </div>
              <strong>Manage Exercises →</strong>
            </Link>

            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/quiz`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                QUIZ
              </div>
              <div>
                <h3>Quiz</h3>
                <p>Create quizzes to test student understanding.</p>
              </div>
              <strong>Manage Quiz →</strong>
            </Link>

          </div>

        </section>

        {/* LESSON CONTENT MANAGEMENT */}

        <section className="teacher-lesson-management">

          <div className="teacher-lesson-management-header">
            <span>LEARNING CONTENT</span>

            <h2>Manage Lesson Content</h2>

            <p>
              Add and manage learning resources for your students.
            </p>
          </div>

          <div className="teacher-lesson-management-grid">

            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/notes`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                NOTES
              </div>

              <div>
                <h3>Lesson Notes</h3>
                <p>Add and manage notes for students.</p>
              </div>

              <strong>Manage Notes →</strong>
            </Link>


            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/videos`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                VIDEO
              </div>

              <div>
                <h3>Videos</h3>
                <p>Add educational videos for students.</p>
              </div>

              <strong>Manage Videos →</strong>
            </Link>


            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/documents`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                DOCUMENTS
              </div>

              <div>
                <h3>Documents</h3>
                <p>Upload documents and learning resources.</p>
              </div>

              <strong>Manage Documents →</strong>
            </Link>


            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/exercises`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                EXERCISES
              </div>

              <div>
                <h3>Exercises</h3>
                <p>Create exercises for students.</p>
              </div>

              <strong>Manage Exercises →</strong>
            </Link>


            <Link
              href={`/teacher/courses/mathematics/lessons/${lesson.id}/quiz`}
              className="teacher-lesson-management-card"
            >
              <div className="teacher-lesson-management-icon">
                QUIZ
              </div>

              <div>
                <h3>Quiz</h3>
                <p>Create quizzes to test student understanding.</p>
              </div>

              <strong>Manage Quiz →</strong>
            </Link>

          </div>

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






