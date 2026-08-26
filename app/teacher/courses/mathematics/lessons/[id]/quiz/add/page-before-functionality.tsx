import Link from "next/link";

export default async function AddQuizPage({
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
            href={`/teacher/courses/mathematics/lessons/${id}/quiz`}
            className="teacher-content-back"
          >
            ← Back to Quiz
          </Link>

          <span>LESSON MANAGEMENT</span>

          <h1>Create Quiz</h1>

          <p>
            Create an assessment quiz for Lesson {id}.
          </p>

        </div>

        <div className="teacher-content-icon">
          QUIZ
        </div>
      </header>

      <section className="teacher-content-card">

        <div className="teacher-content-card-top">

          <div>
            <span>QUIZ INFORMATION</span>

            <h2>
              New Lesson Quiz
            </h2>

          </div>

        </div>

        <form className="teacher-content-form">

          <label>
            Quiz Title

            <input
              type="text"
              placeholder="Enter quiz title"
            />
          </label>

          <label>
            Instructions

            <textarea
              rows={4}
              placeholder="Write instructions for students..."
            />
          </label>

          <label>
            Time Limit (minutes)

            <input
              type="number"
              min="1"
              placeholder="e.g. 30"
            />
          </label>

          <label>
            Total Marks

            <input
              type="number"
              min="1"
              placeholder="e.g. 20"
            />
          </label>

          <div className="teacher-content-form-actions">

            <Link
              href={`/teacher/courses/mathematics/lessons/${id}/quiz`}
              className="teacher-content-secondary"
            >
              Cancel
            </Link>

            <button
              type="button"
              className="teacher-content-primary"
            >
              Save Quiz
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