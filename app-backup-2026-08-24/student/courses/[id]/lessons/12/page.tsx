"use client";

import Link from "next/link";
import { useState } from "react";

export default function LessonTwelvePage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the numerator in the fraction 3/5?",
      options: ["3", "5", "8", "2"],
      correct: 0,
    },
    {
      id: 2,
      question: "What is the denominator in the fraction 7/9?",
      options: ["7", "2", "9", "16"],
      correct: 2,
    },
    {
      id: 3,
      question: "Which fraction is equivalent to 1/2?",
      options: ["2/4", "1/3", "3/5", "4/5"],
      correct: 0,
    },
    {
      id: 4,
      question: "What is 1/4 + 2/4?",
      options: ["1/4", "2/4", "3/4", "4/4"],
      correct: 2,
    },
    {
      id: 5,
      question: "Which fraction is greater?",
      options: ["1/4", "3/4", "1/2", "2/4"],
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

      {/* ================= NAVBAR ================= */}

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

      {/* ================= HERO ================= */}

      <section className="lesson-hero">

        <div className="lesson-badge">
          LESSON 12
        </div>

        <div className="subject-label">
          🔢 MATHEMATICS <span>•</span> PRIMARY 6
        </div>

        <h1>
          Fractions
        </h1>

        <p>
          Learn how to understand, identify, compare and
          calculate with fractions.
        </p>

      </section>

      {/* ================= MAIN CONTENT ================= */}

      <section className="lesson-container">

        {/* ================= PROGRESS ================= */}

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

        {/* ================= SECTION 1 ================= */}

        <section className="lesson-section">

          <div className="section-number">
            01
          </div>

          <div className="section-content">

            <h2>
              What is a Fraction?
            </h2>

            <p className="main-text">
              A fraction represents a part of a whole or a
              part of a group. It is written using two numbers
              separated by a line.
            </p>

            <div className="info-highlight">

              <span className="highlight-icon">
                💡
              </span>

              <p>
                The number above the line is the{" "}
                <strong>numerator</strong>, while the number
                below the line is the{" "}
                <strong>denominator</strong>.
              </p>

            </div>

            <div className="fraction-display">

              <div className="fraction-box">

                <span className="fraction-top">
                  3
                </span>

                <span className="fraction-line"></span>

                <span className="fraction-bottom">
                  5
                </span>

              </div>

              <div className="fraction-labels">

                <div>
                  <strong>
                    3 = Numerator
                  </strong>

                  <p>
                    Number of parts being considered.
                  </p>
                </div>

                <div>
                  <strong>
                    5 = Denominator
                  </strong>

                  <p>
                    Total number of equal parts.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SECTION 2 ================= */}

        <section className="lesson-section">

          <div className="section-number">
            02
          </div>

          <div className="section-content">

            <h2>
              Types of Fractions
            </h2>

            <p className="main-text">
              Fractions can be classified into different types.
            </p>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  🟢
                </div>

                <h4>
                  Proper Fraction
                </h4>

                <p>
                  The numerator is smaller than the denominator.
                </p>

                <strong>
                  3/5
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🔵
                </div>

                <h4>
                  Improper Fraction
                </h4>

                <p>
                  The numerator is equal to or greater than the
                  denominator.
                </p>

                <strong>
                  7/5
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🟣
                </div>

                <h4>
                  Mixed Number
                </h4>

                <p>
                  A whole number together with a proper fraction.
                </p>

                <strong>
                  1 2/5
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🟠
                </div>

                <h4>
                  Equivalent Fractions
                </h4>

                <p>
                  Fractions that have the same value.
                </p>

                <strong>
                  1/2 = 2/4
                </strong>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SECTION 3 ================= */}

        <section className="lesson-section">

          <div className="section-number">
            03
          </div>

          <div className="section-content">

            <h2>
              Comparing Fractions
            </h2>

            <p className="main-text">
              We can compare fractions to find which one is
              greater, smaller or equal.
            </p>

            <div className="math-areas">

              <div className="math-area-card">

                <div className="area-icon">
                  1️⃣
                </div>

                <div>

                  <h3>
                    Same denominator
                  </h3>

                  <p>
                    Compare the numerators. The larger numerator
                    represents the larger fraction.
                  </p>

                  <strong>
                    3/5 &gt; 2/5
                  </strong>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  2️⃣
                </div>

                <div>

                  <h3>
                    Equivalent fractions
                  </h3>

                  <p>
                    Equivalent fractions have the same value.
                  </p>

                  <strong>
                    1/2 = 2/4
                  </strong>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  3️⃣
                </div>

                <div>

                  <h3>
                    Use common denominators
                  </h3>

                  <p>
                    Convert fractions to equivalent fractions
                    with the same denominator when necessary.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SECTION 4 ================= */}

        <section className="lesson-section">

          <div className="section-number">
            04
          </div>

          <div className="section-content">

            <h2>
              Worked Examples
            </h2>

            {/* Example 1 */}

            <div className="example-card">

              <div className="example-title">
                📝 Example 1
              </div>

              <div className="question-box">

                <h3>
                  Problem
                </h3>

                <p>
                  Identify the numerator and denominator in{" "}
                  <strong>3/5</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`3/5

Numerator = 3
Denominator = 5`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 Therefore, <strong>3</strong> is the
                  numerator and <strong>5</strong> is the
                  denominator.
                </div>

              </div>

            </div>

            <br />

            {/* Example 2 */}

            <div className="example-card">

              <div className="example-title">
                📝 Example 2
              </div>

              <div className="question-box">

                <h3>
                  Problem
                </h3>

                <p>
                  Calculate <strong>1/4 + 2/4</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`1/4 + 2/4

= (1 + 2)/4

= 3/4`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 Therefore,{" "}
                  <strong>
                    1/4 + 2/4 = 3/4.
                  </strong>
                </div>

              </div>

            </div>

            <br />

            {/* Example 3 */}

            <div className="example-card">

              <div className="example-title">
                📝 Example 3
              </div>

              <div className="question-box">

                <h3>
                  Problem
                </h3>

                <p>
                  Which is greater:{" "}
                  <strong>1/4</strong> or{" "}
                  <strong>3/4</strong>?
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`1/4 < 3/4`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 Therefore,{" "}
                  <strong>
                    3/4
                  </strong>{" "}
                  is greater than{" "}
                  <strong>
                    1/4.
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= EXERCISE ================= */}

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

        {/* ================= COMPLETION ================= */}

        <section className="completion-card">

          <div className="completion-icon">
            🎉
          </div>

          <div className="completion-content">

            <span>
              LESSON 12 COMPLETE
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
                href="/student/courses/1/lessons/13"
                className="next-lesson-btn"
              >
                Next Lesson →
              </Link>

            </div>

          </div>

        </section>

        {/* ================= LESSON INFORMATION ================= */}

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
                12 of 14
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

      {/* ================= FOOTER ================= */}

      <footer className="lesson-footer">
        © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
      </footer>

    </main>
  );
}