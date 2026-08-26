import Link from "next/link";

export default async function LessonVideosPage({
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
            â† Back to Lesson
          </Link>

          <span>LESSON MANAGEMENT</span>

          <h1>Lesson Videos</h1>

          <p>
            Add and manage educational videos for Primary 6 students.
          </p>
        </div>

        <div className="teacher-content-icon">
          VIDEO
        </div>
      </header>

      <section className="teacher-content-card">
        <div className="teacher-content-card-top">
          <div>
            <span>VIDEO CONTENT</span>
            <h2>Videos for Lesson {id}</h2>
          </div>

          <Link href={`/teacher/courses/mathematics/lessons/${id}/videos/add`} className="teacher-content-primary">+ Add Video</Link>
        </div>

        <div className="teacher-content-empty">
          <div className="teacher-content-empty-icon">
            VIDEO
          </div>

          <h3>No videos added yet</h3>

          <p>
            Add educational videos here to help students understand
            this lesson more easily.
          </p>

          <Link href={`/teacher/courses/mathematics/lessons/${id}/videos/add`} className="teacher-content-primary">+ Add First Video</Link>
        </div>
      </section>

      <footer className="teacher-content-footer">
        <strong>EP APPEC Remera Rukoma</strong>
        <span>Teacher Portal Â· Â© 2026</span>
      </footer>
    </main>
  );
}

