import Link from "next/link";

export default async function AddDocumentPage({
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
            href={`/teacher/courses/mathematics/lessons/${id}/documents`}
            className="teacher-content-back"
          >
            ← Back to Documents
          </Link>

          <span>LESSON MANAGEMENT</span>

          <h1>Add Document</h1>

          <p>
            Upload a learning resource for Lesson {id}.
          </p>

        </div>

        <div className="teacher-content-icon">
          DOCUMENT
        </div>
      </header>

      <section className="teacher-content-card">

        <div className="teacher-content-card-top">

          <div>
            <span>DOCUMENT INFORMATION</span>

            <h2>
              New Learning Resource
            </h2>
          </div>

        </div>

        <form className="teacher-content-form">

          <label>
            Document Title

            <input
              type="text"
              placeholder="Enter document title"
            />
          </label>

          <label>
            Description

            <textarea
              rows={5}
              placeholder="Describe this learning resource..."
            />
          </label>

          <label>
            Select Document

            <input
              type="file"
              accept=".pdf,.doc,.docx,.ppt,.pptx"
            />
          </label>

          <div className="teacher-content-form-actions">

            <Link
              href={`/teacher/courses/mathematics/lessons/${id}/documents`}
              className="teacher-content-secondary"
            >
              Cancel
            </Link>

            <button
              type="button"
              className="teacher-content-primary"
            >
              Save Document
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