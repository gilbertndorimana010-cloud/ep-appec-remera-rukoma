"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

type Quiz = {
  id: string;
  lessonId: string;
  title: string;
  instructions: string;
  timeLimit: number;
  totalMarks: number;
  questions: Question[];
};

export default function StudentQuizPage() {
  const params = useParams();

  const courseId = String(params.id);
  const lessonId = String(params.lessonId);

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Loading quiz...");

  useEffect(() => {
    async function loadQuiz() {
      try {
        const response = await fetch("/api/quizzes");

        if (!response.ok) {
          throw new Error("Failed to load quizzes.");
        }

        const data = await response.json();

        const foundQuiz = data.quizzes?.find(
          (item: Quiz) =>
            String(item.lessonId) === String(lessonId)
        );

        if (!foundQuiz) {
          setMessage("No Quiz Available");
          return;
        }

        setQuiz(foundQuiz);

        setAnswers(
          new Array(foundQuiz.questions.length).fill(-1)
        );

        setMessage("");
      } catch (error) {
        console.error(error);
        setMessage("Unable to load quiz.");
      }
    }

    loadQuiz();
  }, [lessonId]);

  function selectAnswer(
    questionIndex: number,
    optionIndex: number
  ) {
    if (submitted) {
      return;
    }

    setAnswers((current) => {
      const updated = [...current];
      updated[questionIndex] = optionIndex;
      return updated;
    });
  }

  async function submitQuiz(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!quiz) {
      return;
    }

    const unanswered = answers.filter(
      (answer) => answer === -1
    ).length;

    if (unanswered > 0) {
      setMessage(
        `Please answer all questions before submitting. ${unanswered} question(s) remaining.`
      );
      return;
    }

    let correct = 0;

    quiz.questions.forEach((question, index) => {
      if (
        answers[index] === question.correctAnswer
      ) {
        correct++;
      }
    });

    const totalQuestions = quiz.questions.length;

    const percentage =
      totalQuestions > 0
        ? Math.round(
            (correct / totalQuestions) * 100
          )
        : 0;

    setScore(correct);

    try {
      const response = await fetch(
        "/api/quiz-results",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quizId: quiz.id,
            lessonId,
            studentId: "student-1",
            studentName: "Primary 6 Student",
            score: correct,
            totalMarks: totalQuestions,
            percentage,
            answers,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(
          data.message ||
            "Quiz result could not be saved."
        );
        return;
      }

      setSubmitted(true);
      setMessage("");
    } catch (error) {
      console.error(
        "Quiz result save error:",
        error
      );

      setMessage(
        "Quiz submitted, but the result could not be saved."
      );
    }
  }

  function tryAgain() {
    if (!quiz) {
      return;
    }

    setAnswers(
      new Array(quiz.questions.length).fill(-1)
    );

    setScore(0);
    setSubmitted(false);
    setMessage("");
  }

  if (message === "No Quiz Available") {
    return (
      <main className="student-lesson-page">

        <nav className="student-lesson-navbar">

          <div className="student-lesson-logo">
            🎓 EP APPEC{" "}
            <span>Remera Rukoma</span>
          </div>

          <Link
            href={`/student/courses/${courseId}/lessons/${lessonId}`}
            className="teacher-content-secondary"
          >
            Back to Lesson
          </Link>

        </nav>

        <section className="student-lesson-content">

          <div className="teacher-content-empty">

            <div className="teacher-content-empty-icon">
              QUIZ
            </div>

            <h2>
              No Quiz Available
            </h2>

            <p>
              There is currently no quiz available
              for this lesson.
            </p>

          </div>

        </section>

        <footer className="teacher-content-footer">

          <strong>
            EP APPEC Remera Rukoma
          </strong>

          <span>
            E-Learning Platform · © 2026
          </span>

        </footer>

      </main>
    );
  }

  if (!quiz) {
    return (
      <main className="student-lesson-page">

        <section className="student-lesson-content">

          <div className="teacher-content-empty">

            <h2>
              Loading Quiz...
            </h2>

          </div>

        </section>

      </main>
    );
  }

  const percentage =
    quiz.questions.length > 0
      ? Math.round(
          (score / quiz.questions.length) * 100
        )
      : 0;

  return (
    <main className="student-lesson-page">

      <nav className="student-lesson-navbar">

        <div className="student-lesson-logo">
          🎓 EP APPEC{" "}
          <span>Remera Rukoma</span>
        </div>

        <Link
          href={`/student/courses/${courseId}/lessons/${lessonId}`}
          className="teacher-content-secondary"
        >
          Back to Lesson
        </Link>

      </nav>

      <section className="student-lesson-content">

        {!submitted ? (
          <>

            <div className="student-lesson-header">

              <span>
                PRIMARY 6 · MATHEMATICS
              </span>

              <h1>
                {quiz.title}
              </h1>

              {quiz.instructions && (
                <p>
                  {quiz.instructions}
                </p>
              )}

              <div>

                <strong>
                  Questions:{" "}
                  {quiz.questions.length}
                </strong>

                {quiz.timeLimit > 0 && (
                  <span>
                    {" "}· Time Limit:{" "}
                    {quiz.timeLimit} minutes
                  </span>
                )}

              </div>

            </div>

            <form onSubmit={submitQuiz}>

              {quiz.questions.map(
                (question, questionIndex) => (

                  <div
                    key={questionIndex}
                    className="teacher-content-card"
                    style={{
                      marginBottom: "20px",
                    }}
                  >

                    <h2>
                      Question{" "}
                      {questionIndex + 1}
                    </h2>

                    <p>
                      {question.question}
                    </p>

                    <div
                      style={{
                        marginTop: "15px",
                      }}
                    >

                      {question.options.map(
                        (
                          option,
                          optionIndex
                        ) => (

                          <label
                            key={optionIndex}
                            style={{
                              display: "block",
                              padding: "12px",
                              marginBottom: "10px",
                              border:
                                "1px solid #ddd",
                              borderRadius:
                                "8px",
                              cursor: "pointer",
                            }}
                          >

                            <input
                              type="radio"
                              name={`question-${questionIndex}`}
                              checked={
                                answers[
                                  questionIndex
                                ] ===
                                optionIndex
                              }
                              onChange={() =>
                                selectAnswer(
                                  questionIndex,
                                  optionIndex
                                )
                              }
                            />

                            {" "}

                            <strong>
                              {String.fromCharCode(
                                65 +
                                  optionIndex
                              )}
                              .
                            </strong>

                            {" "}

                            {option}

                          </label>

                        )
                      )}

                    </div>

                  </div>

                )
              )}

              {message && (
                <p
                  style={{
                    marginBottom: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {message}
                </p>
              )}

              <div className="teacher-content-form-actions">

                <Link
                  href={`/student/courses/${courseId}/lessons/${lessonId}`}
                  className="teacher-content-secondary"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="teacher-content-primary"
                >
                  Submit Quiz
                </button>

              </div>

            </form>

          </>
        ) : (

          <div
            className="teacher-content-card"
            style={{
              maxWidth: "700px",
              margin: "40px auto",
              textAlign: "center",
            }}
          >

            <div
              style={{
                fontSize: "50px",
                marginBottom: "15px",
              }}
            >
              🎉
            </div>

            <span>
              QUIZ COMPLETED
            </span>

            <h1
              style={{
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              {quiz.title}
            </h1>

            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "30px",
                marginBottom: "25px",
              }}
            >

              <h2>
                Your Score
              </h2>

              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  margin: "15px 0",
                }}
              >
                {score} /{" "}
                {quiz.questions.length}
              </div>

              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {percentage}%
              </p>

            </div>

            <div
              style={{
                textAlign: "left",
                marginBottom: "25px",
              }}
            >

              <h3>
                Answer Review
              </h3>

              {quiz.questions.map(
                (question, index) => {

                  const isCorrect =
                    answers[index] ===
                    question.correctAnswer;

                  return (
                    <div
                      key={index}
                      style={{
                        padding: "15px",
                        marginTop: "12px",
                        border:
                          "1px solid #ddd",
                        borderRadius: "8px",
                      }}
                    >

                      <strong>
                        Question {index + 1}
                      </strong>

                      <p>
                        {question.question}
                      </p>

                      <p>
                        Your answer:{" "}
                        <strong>
                          {answers[index] >= 0
                            ? question.options[
                                answers[index]
                              ]
                            : "Not answered"}
                        </strong>
                      </p>

                      <p>
                        Correct answer:{" "}
                        <strong>
                          {
                            question.options[
                              question.correctAnswer
                            ]
                          }
                        </strong>
                      </p>

                      <p
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {isCorrect
                          ? "✓ Correct"
                          : "✗ Incorrect"}
                      </p>

                    </div>
                  );
                }
              )}

            </div>

            <div
              className="teacher-content-form-actions"
              style={{
                justifyContent: "center",
              }}
            >

              <button
                type="button"
                className="teacher-content-secondary"
                onClick={tryAgain}
              >
                Try Again
              </button>

              <Link
                href={`/student/courses/${courseId}/lessons/${lessonId}`}
                className="teacher-content-primary"
              >
                Back to Lesson
              </Link>

            </div>

          </div>

        )}

      </section>

      <footer className="teacher-content-footer">

        <strong>
          EP APPEC Remera Rukoma
        </strong>

        <span>
          E-Learning Platform · © 2026
        </span>

      </footer>

    </main>
  );
}
