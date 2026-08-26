"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function LessonNotesPage() {
  const params = useParams();

  const courseId = params.courseId;
  const lessonId = params.lessonId;

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Introduction Notes",
      content:
        "These notes introduce students to mathematics and basic mathematical concepts.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleCreateNote(e: React.FormEvent) {
    e.preventDefault();

    if (!newNote.title || !newNote.content) {
      alert("Please fill in the note title and content.");
      return;
    }

    const note: Note = {
      id: Date.now(),
      title: newNote.title,
      content: newNote.content,
    };

    setNotes([...notes, note]);

    setNewNote({
      title: "",
      content: "",
    });

    setShowForm(false);
  }

  function handleDeleteNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <main className="notes-page">

      {/* HEADER */}

      <header className="notes-header">

        <div>
          <h1>📄 Lesson Notes</h1>

          <p>
            EP APPEC Remera Rukoma E-Learning Platform
          </p>
        </div>

        <a
          href={`/teacher/courses/${courseId}/lessons/${lessonId}`}
          className="back-btn"
        >
          ← Lesson
        </a>

      </header>


      {/* CONTENT */}

      <section className="notes-content">

        <div className="notes-title-row">

          <div>
            <h2>Lesson Notes</h2>

            <p>
              Create and manage notes for your students.
            </p>
          </div>

          <button
            type="button"
            className="add-note-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Note
          </button>

        </div>


        {/* CREATE NOTE FORM */}

        {showForm && (

          <form
            className="note-form"
            onSubmit={handleCreateNote}
          >

            <h2>Create New Note</h2>

            <label>
              Note Title *
            </label>

            <input
              type="text"
              placeholder="Example: Introduction to Mathematics"
              value={newNote.title}
              onChange={(e) =>
                setNewNote({
                  ...newNote,
                  title: e.target.value,
                })
              }
            />


            <label>
              Note Content *
            </label>

            <textarea
              placeholder="Write your lesson notes here..."
              value={newNote.content}
              onChange={(e) =>
                setNewNote({
                  ...newNote,
                  content: e.target.value,
                })
              }
            />


            <div className="form-buttons">

              <button
                type="submit"
                className="save-btn"
              >
                Create Note
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


        {/* NOTES LIST */}

        <div className="notes-grid">

          {notes.map((note) => (

            <div
              className="note-card"
              key={note.id}
            >

              <div className="note-icon">
                📄
              </div>


              <div className="note-card-content">

                <h3>
                  {note.title}
                </h3>

                <p>
                  {note.content}
                </p>


                <div className="note-actions">

                  <button
                    type="button"
                    className="open-btn"
                    onClick={() =>
                      alert(`Opening note: ${note.title}`)
                    }
                  >
                    Open Note
                  </button>


                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() =>
                      handleDeleteNote(note.id)
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


      {/* FOOTER */}

      <footer className="teacher-footer">

        <p>
          © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}