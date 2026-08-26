import Link from "next/link";

export default async function LessonDocumentsPage({
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

          <h1>Lesson Documents</h1>

          <p>
            Upload and manage learning documents and resources for
            Primary 6 students.
          </p>

        </div>

        <div className="teacher-content-icon">
          DOCUMENTS
        </div>
      </header>

      <section className="teacher-content-card">

        <div className="teacher-content-card-top">

          <div>
            <span>LEARNING RESOURCES</span>

            <h2>
              Documents for Lesson {id}
            </h2>
          </div>

          <Link
            href={`/teacher/courses/mathematics/lessons/${id}/documents/add`}
            className="teacher-content-primary"
          >
            + Add Document
          </Link>

        </div>

        <div className="teacher-content-empty">

          <div className="teacher-content-empty-icon">
            DOC
          </div>

          <h3>
            No documents added yet
          </h3>

          <p>
            Upload PDF files, worksheets, reading materials and other
            resources for students.
          </p>

          <Link
            href={`/teacher/courses/mathematics/lessons/${id}/documents/add`}
            className="teacher-content-primary"
          >
            + Upload First Document
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