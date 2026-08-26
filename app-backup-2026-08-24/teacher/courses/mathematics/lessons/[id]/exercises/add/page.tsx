import Link from "next/link";

export default async function AddExercisePage({
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
            href={`/teacher/courses/mathematics/lessons/${id}/exercises`}
            className="teacher-content-back"
          >
            ← Back to Exercises
          </Link>

          <span>LESSON MANAGEMENT</span>

          <h1>Create Exercise</h1>

          <p>
            Create a practice question for Lesson {id}.
          </p>

        </div>

        <div className="teacher-content-icon">
          EXERCISE
        </div>
      </header>

      <section className="teacher-content-card">

        <div className="teacher-content-card-top">

          <div>
            <span>EXERCISE INFORMATION</span>

            <h2>
              New Practice Exercise
            </h2>
          </div>

        </div>

        <form className="teacher-content-form">

          <label>
            Question

            <textarea
              rows={5}
              placeholder="Write the exercise question..."
            />
          </label>

          <label>
            Instructions

            <textarea
              rows={4}
              placeholder="Add instructions for students..."
            />
          </label>

          <label>
            Marks

            <input
              type="number"
              min="1"
              placeholder="e.g. 5"
            />
          </label>

          <div className="teacher-content-form-actions">

            <Link
              href={`/teacher/courses/mathematics/lessons/${id}/exercises`}
              className="teacher-content-secondary"
            >
              Cancel
            </Link>

            <button
              type="button"
              className="teacher-content-primary"
            >
              Save Exercise
            </button>

          </div>

        </form>

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