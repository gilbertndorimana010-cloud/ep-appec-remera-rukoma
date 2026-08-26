"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

export default function AddQuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const [lessonId, setLessonId] = useState("");
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: 0,
    },
  ]);

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    params.then((value) => setLessonId(value.id));
  }, [params]);

  function updateQuestion(
    questionIndex: number,
    value: string
  ) {
    setQuestions((current) =>
      current.map((question, index) =>
        index === questionIndex
          ? { ...question, question: value }
          : question
      )
    );
  }

  function updateOption(
    questionIndex: number,
    optionIndex: number,
    value: string
  ) {
    setQuestions((current) =>
      current.map((question, index) => {
        if (index !== questionIndex) {
          return question;
        }

        const options = [...question.options];
        options[optionIndex] = value;

        return {
          ...question,
          options,
        };
      })
    );
  }

  function updateCorrectAnswer(
    questionIndex: number,
    optionIndex: number
  ) {
    setQuestions((current) =>
      current.map((question, index) =>
        index === questionIndex
          ? {
              ...question,
              correctAnswer: optionIndex,
            }
          : question
      )
    );
  }

  function addQuestion() {
    setQuestions((current) => [
      ...current,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
      },
    ]);
  }

  function removeQuestion(questionIndex: number) {
    setQuestions((current) =>
      current.filter((_, index) => index !== questionIndex)
    );
  }

  async function saveQuiz(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");

    if (!lessonId) {
      setMessage("Lesson ID is missing.");
      return;
    }

    if (!title.trim()) {
      setMessage("Please enter a quiz title.");
      return;
    }

    if (questions.length === 0) {
      setMessage("Please add at least one question.");
      return;
    }

    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].question.trim()) {
        setMessage(`Please enter Question ${i + 1}.`);
        return;
      }

      if (questions[i].options.some((option) => !option.trim())) {
        setMessage(
          `Please complete all options for Question ${i + 1}.`
        );
        return;
      }
    }

    setSaving(true);

    try {
      const response = await fetch("/api/quizzes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lessonId,
          title,
          instructions,
          timeLimit,
          totalMarks,
          questions,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(
          result.message || "Failed to save quiz."
        );
        return;
      }

      setMessage("Quiz saved successfully.");

      router.push(
        `/teacher/courses/mathematics/lessons/${lessonId}/quiz`
      );

      router.refresh();
    } catch (error) {
      console.error(error);
      setMessage(
        "Could not connect to the quiz server."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="teacher-content-page">

      <header className="teacher-content-header">

        <div>

          <Link
            href={`/teacher/courses/mathematics/lessons/${lessonId}/quiz`}
            className="teacher-content-back"
          >
            ← Back to Quiz
          </Link>

          <span>LESSON MANAGEMENT</span>

          <h1>Create Lesson Quiz</h1>

          <p>
            Create questions and answers for Primary 6 students.
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

        {message && (
          <div
            style={{
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              background: "#f3f4f6",
            }}
          >
            {message}
          </div>
        )}

        <form
          className="teacher-content-form"
          onSubmit={saveQuiz}
        >

          <label>
            Quiz Title

            <input
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              placeholder="Enter quiz title"
            />
          </label>

          <label>
            Instructions

            <textarea
              rows={4}
              value={instructions}
              onChange={(event) =>
                setInstructions(event.target.value)
              }
              placeholder="Write instructions for students..."
            />
          </label>

          <label>
            Time Limit (minutes)

            <input
              type="number"
              min="1"
              value={timeLimit}
              onChange={(event) =>
                setTimeLimit(event.target.value)
              }
              placeholder="e.g. 30"
            />
          </label>

          <label>
            Total Marks

            <input
              type="number"
              min="1"
              value={totalMarks}
              onChange={(event) =>
                setTotalMarks(event.target.value)
              }
              placeholder="e.g. 20"
            />
          </label>

          <div>

            <h2>
              Questions
            </h2>

          </div>

          {questions.map(
            (question, questionIndex) => (

              <div
                key={questionIndex}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >

                  <h3>
                    Question {questionIndex + 1}
                  </h3>

                  {questions.length > 1 && (
                    <button
                      type="button"
                      className="teacher-content-secondary"
                      onClick={() =>
                        removeQuestion(questionIndex)
                      }
                    >
                      Remove
                    </button>
                  )}

                </div>

                <label>
                  Question

                  <textarea
                    rows={3}
                    value={question.question}
                    onChange={(event) =>
                      updateQuestion(
                        questionIndex,
                        event.target.value
                      )
                    }
                    placeholder="Enter the question..."
                  />
                </label>

                <div
                  style={{
                    marginTop: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <strong>
                    Answer Options
                  </strong>
                </div>

                {question.options.map(
                  (option, optionIndex) => (

                    <label key={optionIndex}>

                      Option{" "}
                      {String.fromCharCode(
                        65 + optionIndex
                      )}

                      <input
                        type="text"
                        value={option}
                        onChange={(event) =>
                          updateOption(
                            questionIndex,
                            optionIndex,
                            event.target.value
                          )
                        }
                        placeholder={`Enter option ${String.fromCharCode(
                          65 + optionIndex
                        )}`}
                      />

                      <span
                        style={{
                          display: "block",
                          marginTop: "5px",
                        }}
                      >

                        <input
                          type="radio"
                          name={`correct-${questionIndex}`}
                          checked={
                            question.correctAnswer ===
                            optionIndex
                          }
                          onChange={() =>
                            updateCorrectAnswer(
                              questionIndex,
                              optionIndex
                            )
                          }
                        />{" "}
                        Correct answer

                      </span>

                    </label>

                  )
                )}

              </div>

            )
          )}

          <button
            type="button"
            className="teacher-content-secondary"
            onClick={addQuestion}
          >
            + Add Another Question
          </button>

          <div className="teacher-content-form-actions">

            <Link
              href={`/teacher/courses/mathematics/lessons/${lessonId}/quiz`}
              className="teacher-content-secondary"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="teacher-content-primary"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Quiz"}
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
