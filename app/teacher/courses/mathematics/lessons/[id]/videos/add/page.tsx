import Link from "next/link";

export default async function AddVideoPage({
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
            href={`/teacher/courses/mathematics/lessons/${id}/videos`}
            className="teacher-content-back"
          >
            ← Back to Videos
          </Link>

          <span>LESSON MANAGEMENT</span>

          <h1>Add Video</h1>

          <p>
            Add an educational video to Lesson {id}.
          </p>
        </div>

        <div className="teacher-content-icon">
          🎥
        </div>
      </header>

      <section className="teacher-content-card">

        <div className="teacher-content-card-top">
          <div>
            <span>VIDEO INFORMATION</span>
            <h2>New Lesson Video</h2>
          </div>
        </div>

        <form className="teacher-content-form">

          <label>
            Video Title
            <input
              type="text"
              placeholder="Enter video title"
            />
          </label>

          <label>
            Video URL
            <input
              type="url"
              placeholder="https://www.youtube.com/..."
            />
          </label>

          <label>
            Description
            <textarea
              rows={5}
              placeholder="Describe what students will learn from this video..."
            />
          </label>

          <div className="teacher-content-form-actions">

            <Link
              href={`/teacher/courses/mathematics/lessons/${id}/videos`}
              className="teacher-content-secondary"
            >
              Cancel
            </Link>

            <button
              type="button"
              className="teacher-content-primary"
            >
              Save Video
            </button>

          </div>

        </form>

      </section>

      <footer className="teacher-content-footer">
        <strong>EP APPEC Remera Rukoma</strong>
        <span>Teacher Portal · © 2026</span>
      </footer>

    </main>
  );
}