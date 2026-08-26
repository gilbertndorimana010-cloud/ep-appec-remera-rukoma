import Link from "next/link";

export default async function EditLessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="teacher-edit-lesson-page">

      {/* NAVBAR */}
      <nav className="teacher-edit-navbar">

        <Link
          href={`/teacher/courses/mathematics/lessons/${id}`}
          className="teacher-edit-logo"
        >
          EP EP APPEC
          <span>Remera Rukoma</span>
        </Link>

        <div className="teacher-edit-nav-actions">
          <Link href={`/teacher/courses/mathematics/lessons/${id}`}>
            â† Lesson Details
          </Link>

          <Link href="/">
            Logout
          </Link>
        </div>

      </nav>

      {/* MAIN */}
      <section className="teacher-edit-container">

        <div className="teacher-edit-breadcrumb">
          Teacher Dashboard / Mathematics / Lessons / Edit
        </div>

        {/* HEADER */}
        <div className="teacher-edit-header">

          <div className="teacher-edit-icon">
            ¸
          </div>

          <div>
            <span>LESSON MANAGEMENT</span>

            <h1>
              Edit Lesson
            </h1>

            <p>
              Update the information and learning content for this lesson.
            </p>
          </div>

        </div>

        {/* FORM */}
        <div className="teacher-edit-card">

          <div className="teacher-edit-card-heading">
            <h2>Lesson Information</h2>

            <p>
              Update the basic information students will see.
            </p>
          </div>

          <form>

            <div className="teacher-edit-form-group">

              <label htmlFor="title">
                Lesson Title
              </label>

              <input
                id="title"
                type="text"
                defaultValue="Numbers in Words"
                placeholder="Enter lesson title"
              />

            </div>

            <div className="teacher-edit-form-group">

              <label htmlFor="description">
                Lesson Description
              </label>

              <textarea
                id="description"
                rows={5}
                defaultValue="Read and write numbers correctly in words."
                placeholder="Enter lesson description"
              />

            </div>

            <div className="teacher-edit-form-row">

              <div className="teacher-edit-form-group">

                <label htmlFor="course">
                  Course
                </label>

                <input
                  id="course"
                  type="text"
                  value="Mathematics"
                  readOnly
                />

              </div>

              <div className="teacher-edit-form-group">

                <label htmlFor="lessonId">
                  Lesson ID
                </label>

                <input
                  id="lessonId"
                  type="text"
                  value={id}
                  readOnly
                />

              </div>

            </div>

            <div className="teacher-edit-form-actions">

              <Link
                href={`/teacher/courses/mathematics/lessons/${id}`}
                className="teacher-edit-cancel"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="teacher-edit-save"
              >
                Save Changes
              </button>

            </div>

          </form>

        </div>

        {/* CONTENT MANAGEMENT */}
        <div className="teacher-edit-content-card">

          <div>
            <span className="teacher-edit-small-label">
              CONTENT
            </span>

            <h2>
              Manage Learning Content
            </h2>

            <p>
              Add notes, videos, documents, exercises and quizzes
              to this lesson.
            </p>
          </div>

          <Link
            href={`/teacher/courses/mathematics/lessons/${id}`}
            className="teacher-edit-content-button"
          >
            Manage Content â†’
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="teacher-edit-footer">

        <strong>
          EP APPEC Remera Rukoma
        </strong>

        <span>
          Â© 2026 E-Learning Platform. All Rights Reserved.
        </span>

      </footer>

    </main>
  );
}


