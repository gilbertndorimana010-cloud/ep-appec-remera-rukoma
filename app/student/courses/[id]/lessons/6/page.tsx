"use client";

import Link from "next/link";
import { useState } from "react";

export default function LessonSixPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Which list shows the numbers in ascending order?",
      options: [
        "25, 15, 10, 5",
        "5, 10, 15, 25",
        "10, 5, 25, 15",
        "15, 25, 5, 10",
      ],
      correct: 1,
    },
    {
      id: 2,
      question: "Which list shows the numbers in descending order?",
      options: [
        "20, 30, 40, 50",
        "10, 20, 30, 40",
        "50, 40, 30, 20",
        "20, 50, 30, 40",
      ],
      correct: 2,
    },
    {
      id: 3,
      question: "Arrange these numbers from smallest to largest: 45, 12, 30, 8",
      options: [
        "45, 30, 12, 8",
        "8, 12, 30, 45",
        "12, 8, 45, 30",
        "30, 45, 8, 12",
      ],
      correct: 1,
    },
    {
      id: 4,
      question: "Which number comes first when ordering from smallest to largest?",
      options: ["9,500", "9,050", "9,005", "9,550"],
      correct: 2,
    },
    {
      id: 5,
      question: "Arrange 7,500, 7,050, 7,800 and 7,250 from largest to smallest.",
      options: [
        "7,050, 7,250, 7,500, 7,800",
        "7,800, 7,500, 7,250, 7,050",
        "7,500, 7,800, 7,050, 7,250",
        "7,250, 7,050, 7,800, 7,500",
      ],
      correct: 1,
    },
  ];

  const handleAnswer = (
    questionId: number,
    optionIndex: number
  ) => {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: optionIndex,
    }));

    setSubmitted(false);
  };

  const checkAnswers = () => {
    let total = 0;

    questions.forEach((question) => {
      if (answers[question.id] === question.correct) {
        total++;
      }
    });

    setScore(total);
    setSubmitted(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <main className="lesson-page">

      {/* NAVBAR */}

      <nav className="lesson-navbar">

        <div className="lesson-logo">
          🎓 <strong>EP APPEC</strong>
          <span>Remera Rukoma</span>
        </div>

        <div className="lesson-nav-actions">

          <Link
            href="/student/courses/1/lessons"
            className="back-btn"
          >
            ← All Lessons
          </Link>

          <Link
            href="/"
            className="logout-btn"
          >
            Logout
          </Link>

        </div>

      </nav>

      {/* HERO */}

      <section className="lesson-hero">

        <div className="lesson-badge">
          LESSON 6
        </div>

        <div className="subject-label">
          🔢 MATHEMATICS <span>•</span> PRIMARY 6
        </div>

        <h1>
          Ordering Whole Numbers
        </h1>

        <p>
          Learn how to arrange whole numbers from smallest
          to largest and from largest to smallest.
        </p>

      </section>

      {/* MAIN */}

      <section className="lesson-container">

        {/* PROGRESS */}

        <div className="progress-card">

          <div>

            <span className="progress-label">
              COURSE PROGRESS
            </span>

            <h3>
              Mathematics • Primary 6
            </h3>

          </div>

          <div className="progress-right">

            <strong>
              72%
            </strong>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

          </div>

        </div>

        {/* SECTION 1 */}

        <section className="lesson-section">

          <div className="section-number">
            01
          </div>

          <div className="section-content">

            <h2>
              What Does Ordering Mean?
            </h2>

            <p className="main-text">
              Ordering numbers means arranging them according
              to their size.
            </p>

            <div className="info-highlight">

              <span className="highlight-icon">
                💡
              </span>

              <p>
                Numbers can be arranged from{" "}
                <strong>smallest to largest</strong> or from{" "}
                <strong>largest to smallest</strong>.
              </p>

            </div>

          </div>

        </section>

        {/* SECTION 2 */}

        <section className="lesson-section">

          <div className="section-number">
            02
          </div>

          <div className="section-content">

            <h2>
              Two Ways of Ordering Numbers
            </h2>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  ⬆️
                </div>

                <h4>
                  Ascending Order
                </h4>

                <p>
                  Arrange numbers from the smallest to the
                  largest.
                </p>

                <strong>
                  Example: 5, 10, 15, 20
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  ⬇️
                </div>

                <h4>
                  Descending Order
                </h4>

                <p>
                  Arrange numbers from the largest to the
                  smallest.
                </p>

                <strong>
                  Example: 20, 15, 10, 5
                </strong>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 3 */}

        <section className="lesson-section">

          <div className="section-number">
            03
          </div>

          <div className="section-content">

            <h2>
              How to Order Numbers
            </h2>

            <div className="math-areas">

              <div className="math-area-card">

                <div className="area-icon">
                  1️⃣
                </div>

                <div>

                  <h3>
                    Compare the numbers
                  </h3>

                  <p>
                    Find the smallest and largest numbers.
                  </p>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  2️⃣
                </div>

                <div>

                  <h3>
                    Arrange them
                  </h3>

                  <p>
                    Put the numbers in the required order.
                  </p>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  3️⃣
                </div>

                <div>

                  <h3>
                    Check your order
                  </h3>

                  <p>
                    Make sure each number follows the correct
                    sequence.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 4 */}

        <section className="lesson-section">

          <div className="section-number">
            04
          </div>

          <div className="section-content">

            <h2>
              Worked Examples
            </h2>

            <div className="example-card">

              <div className="example-title">
                📝 Example 1
              </div>

              <div className="question-box">

                <h3>
                  Problem
                </h3>

                <p>
                  Arrange <strong>45, 12, 30 and 8</strong>
                  from smallest to largest.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">
                  8 &lt; 12 &lt; 30 &lt; 45
                </div>

                <div className="answer">
                  🎯 Answer:{" "}
                  <strong>
                    8, 12, 30, 45
                  </strong>
                </div>

              </div>

            </div>

            <br />

            <div className="example-card">

              <div className="example-title">
                📝 Example 2
              </div>

              <div className="question-box">

                <h3>
                  Problem
                </h3>

                <p>
                  Arrange <strong>7,500, 7,050, 7,800 and
                  7,250</strong> from largest to smallest.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">
                  7,800 &gt; 7,500 &gt; 7,250 &gt; 7,050
                </div>

                <div className="answer">
                  🎯 Answer:{" "}
                  <strong>
                    7,800, 7,500, 7,250, 7,050
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* EXERCISE */}

        <section className="lesson-section exercise-section">

          <div className="section-number">
            05
          </div>

          <div className="section-content">

            <div className="exercise-heading">

              <div>

                <span className="practice-label">
                  PRACTICE
                </span>

                <h2>
                  Quick Exercise
                </h2>

              </div>

              <span className="question-count">
                {answeredCount}/5 Answered
              </span>

            </div>

            <p className="main-text">
              Answer all five questions and check your score.
            </p>

            <div className="mcq-questions">

              {questions.map((question) => {

                const selected = answers[question.id];

                return (

                  <div
                    key={question.id}
                    className="mcq-card"
                  >

                    <div className="mcq-question">

                      <span className="mcq-number">
                        {question.id}
                      </span>

                      <h3>
                        {question.question}
                      </h3>

                    </div>

                    <div className="mcq-options">

                      {question.options.map(
                        (option, index) => {

                          const isSelected =
                            selected === index;

                          const isCorrect =
                            submitted &&
                            index === question.correct;

                          const isWrong =
                            submitted &&
                            isSelected &&
                            index !== question.correct;

                          return (

                            <button
                              key={index}
                              type="button"
                              onClick={() =>
                                handleAnswer(
                                  question.id,
                                  index
                                )
                              }
                              className={`mcq-option ${
                                isSelected
                                  ? "selected"
                                  : ""
                              } ${
                                isCorrect
                                  ? "correct"
                                  : ""
                              } ${
                                isWrong
                                  ? "wrong"
                                  : ""
                              }`}
                            >

                              <span className="option-letter">
                                {String.fromCharCode(
                                  65 + index
                                )}
                              </span>

                              <span className="option-text">
                                {option}
                              </span>

                              {submitted &&
                                isCorrect && (
                                  <span className="option-result">
                                    ✓
                                  </span>
                                )}

                              {submitted &&
                                isWrong && (
                                  <span className="option-result">
                                    ✕
                                  </span>
                                )}

                            </button>

                          );

                        }
                      )}

                    </div>

                    {submitted && (

                      <div
                        className={
                          selected === question.correct
                            ? "question-feedback correct-feedback"
                            : "question-feedback wrong-feedback"
                        }
                      >

                        {selected === question.correct
                          ? "✓ Correct answer!"
                          : `✕ Incorrect. The correct answer is ${question.options[question.correct]}.`}

                      </div>

                    )}

                  </div>

                );

              })}

            </div>

            <div className="exercise-submit">

              <button
                type="button"
                onClick={checkAnswers}
                className="check-answer-btn"
                disabled={answeredCount < 5}
              >
                ✓ Check My Answers
              </button>

            </div>

            {answeredCount < 5 && (

              <p className="answer-reminder">
                Please answer all 5 questions before checking
                your answers.
              </p>

            )}

            {submitted && (

              <div className="score-card">

                <div className="score-icon">

                  {score === 5
                    ? "🏆"
                    : score >= 3
                    ? "👏"
                    : "📚"}

                </div>

                <div>

                  <span>
                    YOUR SCORE
                  </span>

                  <h3>
                    {score} / 5
                  </h3>

                  <p>

                    {score === 5
                      ? "Excellent work! You answered all five questions correctly. 🎉"
                      : score >= 3
                      ? "Good work! Review the lesson and try again to improve your score."
                      : "Keep practicing! Review the lesson carefully and try again."}

                  </p>

                </div>

              </div>

            )}

            {submitted && (

              <div className="retry-container">

                <button
                  type="button"
                  onClick={resetExercise}
                  className="retry-btn"
                >
                  ↻ Try Again
                </button>

              </div>

            )}

          </div>

        </section>

        {/* COMPLETION */}

        <section className="completion-card">

          <div className="completion-icon">
            🎉
          </div>

          <div className="completion-content">

            <span>
              LESSON 6 COMPLETE
            </span>

            <h2>
              Congratulations!
            </h2>

            <p>
              You have reached the end of this lesson.
              Review the exercise and continue to the next
              lesson.
            </p>

            <div className="completion-progress">

              <div className="completion-progress-top">

                <span>
                  Course Progress
                </span>

                <strong>
                  72%
                </strong>

              </div>

              <div className="completion-bar">

                <div></div>

              </div>

            </div>

            <div className="completion-actions">

              <Link
                href="/student/courses/1/lessons"
                className="all-lessons-btn"
              >
                📖 All Lessons
              </Link>

              <Link
                href="/student/courses/1/lessons/7"
                className="next-lesson-btn"
              >
                Next Lesson →
              </Link>

            </div>

          </div>

        </section>

        {/* LESSON INFORMATION */}

        <section className="lesson-info">

          <h2>
            Lesson Information
          </h2>

          <div className="lesson-info-grid">

            <div>

              <span>
                Subject
              </span>

              <strong>
                Mathematics
              </strong>

            </div>

            <div>

              <span>
                Class
              </span>

              <strong>
                Primary 6
              </strong>

            </div>

            <div>

              <span>
                Lesson
              </span>

              <strong>
                6 of 14
              </strong>

            </div>

            <div>

              <span>
                Status
              </span>

              <strong className="completed-status">
                ✓ Completed
              </strong>

            </div>

          </div>

        </section>

      </section>

      {/* FOOTER */}

      <footer className="lesson-footer">
        © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
      </footer>

    </main>
  );
}