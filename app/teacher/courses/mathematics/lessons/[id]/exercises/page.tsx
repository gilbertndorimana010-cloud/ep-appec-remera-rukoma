import Link from "next/link";

export default async function LessonExercisesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="teacher-content-page">

      <header className="teacher-content-header">
        <div>

          <Link
            href={`/teacher/courses/mathematics/lessons/${id}`}
            className="teacher-content-back"
          >
            ← Back to Lesson
          </Link>

          <span>LESSON MANAGEMENT</span>

          <h1>Lesson Exercises</h1>

          <p>
            Create and manage practice exercises for Primary 6 students.
          </p>

        </div>

        <div className="teacher-content-icon">
          EXERCISES
        </div>
      </header>

      <section className="teacher-content-card">

        <div className="teacher-content-card-top">

          <div>
            <span>PRACTICE ACTIVITIES</span>

            <h2>
              Exercises for Lesson {id}
            </h2>
          </div>

          <Link
            href={`/teacher/courses/mathematics/lessons/${id}/exercises/add`}
            className="teacher-content-primary"
          >
            + Add Exercise
          </Link>

        </div>

        <div className="teacher-content-empty">

          <div className="teacher-content-empty-icon">
            EX
          </div>

          <h3>
            No exercises added yet
          </h3>

          <p>
            Create practice questions to help students test and
            strengthen their understanding of this lesson.
          </p>

          <Link
            href={`/teacher/courses/mathematics/lessons/${id}/exercises/add`}
            className="teacher-content-primary"
          >
            + Create First Exercise
          </Link>

        </div>

      </section>

      <footer className="teacher-content-footer">

        <strong>
          EP APPEC Remera Rukoma
        </strong>

        <span>
          Teacher Portal · © 2026
        </span>

      </footer>

    </main>
  );
}