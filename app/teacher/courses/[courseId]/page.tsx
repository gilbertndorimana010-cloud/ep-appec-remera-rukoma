"use client";

import { useParams } from "next/navigation";

export default function CourseDetailsPage() {
  const params = useParams();

  const courseId = params.courseId;

  return (
    <main className="course-details-page">

      {/* HEADER */}
      <header className="course-details-header">

        <div>
          <h1>📚 Course Details</h1>

          <p>
            EP APPEC Remera Rukoma E-Learning Platform
          </p>
        </div>

        <a
          href="/teacher/courses"
          className="back-btn"
        >
          ← My Courses
        </a>

      </header>


      {/* COURSE CONTENT */}
      <section className="course-details-content">


        {/* COURSE INFORMATION */}
        <div className="course-details-card">

          <div className="course-details-icon">
            📐
          </div>

          <span className="class-badge">
            Primary 6
          </span>

          <h2>
            Mathematics
          </h2>

          <p className="course-details-subject">
            Mathematics
          </p>

          <p className="course-details-description">
            Mathematics lessons, exercises and assessments.
          </p>

          <div className="course-details-info">
            👨‍🎓 32 Students
          </div>

        </div>


        {/* COURSE MANAGEMENT */}
        <div className="course-management-section">

          <h2>
            Course Management
          </h2>

          <p>
            Manage everything related to this course.
          </p>


          <div className="course-management-grid">


            {/* LESSONS */}
            <div className="management-card">

              <div className="management-icon">
                📖
              </div>

              <h3>
                Lessons
              </h3>

              <p>
                Create and manage mathematics lessons.
              </p>

              <a
                href={`/teacher/courses/${courseId}/lessons`}
                className="manage-btn"
              >
                Manage Lessons
              </a>

            </div>


            {/* ASSIGNMENTS */}
            <div className="management-card">

              <div className="management-icon">
                📝
              </div>

              <h3>
                Assignments
              </h3>

              <p>
                Create assignments and review student work.
              </p>

              <button
                type="button"
                className="manage-btn"
                onClick={() =>
                  alert("Assignments section coming next.")
                }
              >
                Manage Assignments
              </button>

            </div>


            {/* LEARNING MATERIALS */}
            <div className="management-card">

              <div className="management-icon">
                📚
              </div>

              <h3>
                Learning Materials
              </h3>

              <p>
                Upload notes, documents and learning resources.
              </p>

              <button
                type="button"
                className="manage-btn"
                onClick={() =>
                  alert("Learning Materials section coming next.")
                }
              >
                Manage Materials
              </button>

            </div>


            {/* STUDENTS */}
            <div className="management-card">

              <div className="management-icon">
                👨‍🎓
              </div>

              <h3>
                Students
              </h3>

              <p>
                View students enrolled in this course.
              </p>

              <button
                type="button"
                className="manage-btn"
                onClick={() =>
                  alert("Students section coming next.")
                }
              >
                View Students
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