"use client";

import { useParams } from "next/navigation";

export default function LessonDetailsPage() {
  const params = useParams();

  const courseId = params.courseId;
  const lessonId = params.lessonId;

  return (
    <main className="lesson-details-page">

      {/* HEADER */}
      <header className="lesson-details-header">

        <div>
          <h1>📖 Lesson Details</h1>

          <p>
            EP APPEC Remera Rukoma E-Learning Platform
          </p>
        </div>

        <a
          href={`/teacher/courses/${courseId}/lessons`}
          className="back-btn"
        >
          ← Lessons
        </a>

      </header>


      {/* LESSON INFORMATION */}
      <section className="lesson-details-content">

        <div className="lesson-details-card">

          <div className="lesson-details-icon">
            📖
          </div>

          <span className="lesson-topic">
            Introduction
          </span>

          <h2>
            Introduction to Mathematics
          </h2>

          <p className="lesson-details-description">
            Introduction to mathematics and basic mathematical
            concepts.
          </p>

          <div className="lesson-details-info">
            📚 Course: Mathematics
          </div>

          <div className="lesson-details-info">
            🆔 Lesson ID: {lessonId}
          </div>

        </div>


        {/* LESSON CONTENT */}
        <div className="lesson-management-section">

          <h2>
            Lesson Content
          </h2>

          <p>
            Manage learning content for this lesson.
          </p>


          <div className="lesson-management-grid">


            {/* NOTES */}
            <div className="lesson-management-card">

              <div className="lesson-management-icon">
                📄
              </div>

              <h3>
                Lesson Notes
              </h3>

              <p>
                Add and manage notes for students.
              </p>

              <button
                type="button"
                onClick={() =>
                  alert("Lesson Notes section is working!")
                }
              >
                Manage Notes
              </button>

            </div>


            {/* VIDEOS */}
            <div className="lesson-management-card">

              <div className="lesson-management-icon">
                🎥
              </div>

              <h3>
                Videos
              </h3>

              <p>
                Add educational videos for students.
              </p>

              <button
                type="button"
                onClick={() =>
                  alert("Videos section is working!")
                }
              >
                Manage Videos
              </button>

            </div>


            {/* DOCUMENTS */}
            <div className="lesson-management-card">

              <div className="lesson-management-icon">
                📎
              </div>

              <h3>
                Documents
              </h3>

              <p>
                Upload documents and learning resources.
              </p>

              <button
                type="button"
                onClick={() =>
                  alert("Documents section is working!")
                }
              >
                Manage Documents
              </button>

            </div>


            {/* EXERCISES */}
            <div className="lesson-management-card">

              <div className="lesson-management-icon">
                📝
              </div>

              <h3>
                Exercises
              </h3>

              <p>
                Create exercises for students.
              </p>

              <button
                type="button"
                onClick={() =>
                  alert("Exercises section is working!")
                }
              >
                Manage Exercises
              </button>

            </div>


            {/* QUIZ */}
            <div className="lesson-management-card">

              <div className="lesson-management-icon">
                ❓
              </div>

              <h3>
                Quiz
              </h3>

              <p>
                Create quizzes to test student understanding.
              </p>

              <button
                type="button"
                onClick={() =>
                  alert("Quiz section is working!")
                }
              >
                Manage Quiz
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="teacher-footer">

        <p>
          © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}