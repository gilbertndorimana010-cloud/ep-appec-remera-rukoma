"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

type Lesson = {
  id: number;
  title: string;
  topic: string;
  description: string;
};

export default function LessonsPage() {
  const params = useParams();

  const courseId = params.courseId;

  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: 1,
      title: "Introduction to Mathematics",
      topic: "Introduction",
      description:
        "Introduction to mathematics and basic mathematical concepts.",
    },
    {
      id: 2,
      title: "Numbers and Operations",
      topic: "Numbers",
      description:
        "Learn about numbers and basic mathematical operations.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newLesson, setNewLesson] = useState({
    title: "",
    topic: "",
    description: "",
  });

  function handleAddLesson(e: React.FormEvent) {
    e.preventDefault();

    if (!newLesson.title || !newLesson.topic) {
      alert("Please enter the lesson title and topic.");
      return;
    }

    const lesson: Lesson = {
      id: Date.now(),
      title: newLesson.title,
      topic: newLesson.topic,
      description: newLesson.description,
    };

    setLessons([...lessons, lesson]);

    setNewLesson({
      title: "",
      topic: "",
      description: "",
    });

    setShowForm(false);
  }

  function handleDeleteLesson(id: number) {
    const confirmed = confirm(
      "Are you sure you want to delete this lesson?"
    );

    if (!confirmed) {
      return;
    }

    setLessons(
      lessons.filter((lesson) => lesson.id !== id)
    );
  }

  return (
    <main className="lessons-page">

      <header className="lessons-header">

        <div>
          <h1>📖 Course Lessons</h1>

          <p>
            EP APPEC Remera Rukoma E-Learning Platform
          </p>
        </div>

        <a
          href={`/teacher/courses/${courseId}`}
          className="back-btn"
        >
          ← Course
        </a>

      </header>

      <section className="lessons-content">

        <div className="lessons-title-row">

          <div>
            <h2>Lessons</h2>

            <p>
              Create and manage lessons for this course.
            </p>
          </div>

          <button
            type="button"
            className="add-lesson-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Lesson
          </button>

        </div>

        {showForm && (
          <form
            className="lesson-form"
            onSubmit={handleAddLesson}
          >

            <h2>Create New Lesson</h2>

            <label>
              Lesson Title *
            </label>

            <input
              type="text"
              placeholder="Example: Fractions"
              value={newLesson.title}
              onChange={(e) =>
                setNewLesson({
                  ...newLesson,
                  title: e.target.value,
                })
              }
            />

            <label>
              Topic *
            </label>

            <input
              type="text"
              placeholder="Example: Fractions"
              value={newLesson.topic}
              onChange={(e) =>
                setNewLesson({
                  ...newLesson,
                  topic: e.target.value,
                })
              }
            />

            <label>
              Description
            </label>

            <textarea
              placeholder="Describe this lesson..."
              value={newLesson.description}
              onChange={(e) =>
                setNewLesson({
                  ...newLesson,
                  description: e.target.value,
                })
              }
            />

            <div className="form-buttons">

              <button
                type="submit"
                className="save-btn"
              >
                Create Lesson
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

            </div>

          </form>
        )}

        <div className="lessons-grid">

          {lessons.map((lesson) => (

            <div
              className="lesson-card"
              key={lesson.id}
            >

              <div className="lesson-icon">
                📖
              </div>

              <div className="lesson-card-content">

                <span className="lesson-topic">
                  {lesson.topic}
                </span>

                <h3>
                  {lesson.title}
                </h3>

                <p>
                  {lesson.description}
                </p>

                <div className="lesson-actions">

                  <button
                    type="button"
                    className="open-lesson-btn"
                    onClick={() =>
                      alert(
                        `Opening ${lesson.title}...`
                      )
                    }
                  >
                    Open Lesson
                  </button>

                  <button
                    type="button"
                    className="delete-lesson-btn"
                    onClick={() =>
                      handleDeleteLesson(lesson.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <footer className="teacher-footer">

        <p>
          © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}