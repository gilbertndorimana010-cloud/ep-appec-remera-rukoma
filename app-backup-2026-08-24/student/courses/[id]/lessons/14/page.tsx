"use client";

import Link from "next/link";
import { useState } from "react";

export default function LessonFourteenPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the perimeter of a square with a side of 5 cm?",
      options: ["10 cm", "15 cm", "20 cm", "25 cm"],
      correct: 2,
    },
    {
      id: 2,
      question: "What is the area of a rectangle 8 cm long and 3 cm wide?",
      options: ["11 cm²", "24 cm²", "22 cm²", "16 cm²"],
      correct: 1,
    },
    {
      id: 3,
      question: "How many centimetres are in 1 metre?",
      options: ["10 cm", "50 cm", "100 cm", "1,000 cm"],
      correct: 2,
    },
    {
      id: 4,
      question: "How many minutes are in 1 hour?",
      options: ["30", "45", "60", "100"],
      correct: 2,
    },
    {
      id: 5,
      question: "A book costs 2,000 Frw. How much do 3 books cost?",
      options: ["4,000 Frw", "5,000 Frw", "6,000 Frw", "8,000 Frw"],
      correct: 2,
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
          LESSON 14
        </div>

        <div className="subject-label">
          🔢 MATHEMATICS <span>•</span> PRIMARY 6
        </div>

        <h1>
          Measurement and Everyday Mathematics
        </h1>

        <p>
          Learn how mathematics is used to measure, calculate
          and solve problems in everyday life.
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
              100%
            </strong>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "100%" }}
              ></div>
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
              What is Measurement?
            </h2>

            <p className="main-text">
              Measurement is the process of finding the size,
              amount, length, weight, time or capacity of
              something using standard units.
            </p>

            <div className="info-highlight">

              <span className="highlight-icon">
                💡
              </span>

              <p>
                Measurement helps us describe the world around
                us accurately and solve practical problems.
              </p>

            </div>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  📏
                </div>

                <h4>
                  Length
                </h4>

                <p>
                  Used to measure distance or size.
                </p>

                <strong>
                  metre (m)
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  ⚖️
                </div>

                <h4>
                  Mass
                </h4>

                <p>
                  Used to measure how heavy something is.
                </p>

                <strong>
                  kilogram (kg)
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  ⏰
                </div>

                <h4>
                  Time
                </h4>

                <p>
                  Used to measure duration.
                </p>

                <strong>
                  hour / minute
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🥛
                </div>

                <h4>
                  Capacity
                </h4>

                <p>
                  Used to measure the amount of liquid.
                </p>

                <strong>
                  litre (L)
                </strong>

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
              Perimeter and Area
            </h2>

            <p className="main-text">
              Perimeter is the distance around a shape. Area is
              the amount of surface covered by a shape.
            </p>

            <div className="math-areas">

              <div className="math-area-card">

                <div className="area-icon">
                  ⬜
                </div>

                <div>

                  <h3>
                    Perimeter of a Square
                  </h3>

                  <p>
                    A square has four equal sides.
                  </p>

                  <strong>
                    Perimeter = 4 × side
                  </strong>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  ▭
                </div>

                <div>

                  <h3>
                    Perimeter of a Rectangle
                  </h3>

                  <p>
                    Add all four sides of the rectangle.
                  </p>

                  <strong>
                    P = 2 × (length + width)
                  </strong>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  📐
                </div>

                <div>

                  <h3>
                    Area of a Rectangle
                  </h3>

                  <p>
                    Multiply the length by the width.
                  </p>

                  <strong>
                    Area = length × width
                  </strong>

                </div>

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
              Everyday Mathematics
            </h2>

            <p className="main-text">
              Mathematics is used every day when we buy things,
              measure objects, tell time and solve problems.
            </p>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  💰
                </div>

                <h4>
                  Money
                </h4>

                <p>
                  We use mathematics to calculate prices,
                  change and totals.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🛒
                </div>

                <h4>
                  Shopping
                </h4>

                <p>
                  We compare prices and calculate the cost of
                  items.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🏠
                </div>

                <h4>
                  Construction
                </h4>

                <p>
                  Builders use measurement and geometry when
                  constructing buildings.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🚌
                </div>

                <h4>
                  Travel
                </h4>

                <p>
                  Mathematics helps us calculate distance,
                  time and speed.
                </p>

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
                  Find the perimeter of a square with a side of
                  <strong> 5 cm</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`Perimeter = 4 × side

= 4 × 5

= 20 cm`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 The perimeter is{" "}
                  <strong>
                    20 cm.
                  </strong>
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
                  Find the area of a rectangle with length{" "}
                  <strong>8 cm</strong> and width{" "}
                  <strong>3 cm</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`Area = length × width

= 8 × 3

= 24 cm²`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 The area is{" "}
                  <strong>
                    24 cm².
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
                  A pupil has <strong>2,000 Frw</strong> and
                  buys a book costing <strong>1,500 Frw</strong>.
                  How much money remains?
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`Money remaining
= 2,000 − 1,500

= 500 Frw`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 The pupil has{" "}
                  <strong>
                    500 Frw
                  </strong>{" "}
                  remaining.
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
                  Final Quick Exercise
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
                      ? "Excellent work! You completed the final lesson perfectly. 🎉"
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

        {/* ================= COURSE COMPLETION ================= */}

        <section className="completion-card">

          <div className="completion-icon">
            🎓
          </div>

          <div className="completion-content">

            <span>
              FINAL LESSON COMPLETE
            </span>

            <h2>
              Congratulations!
            </h2>

            <p>
              You have reached the end of the Mathematics
              Primary 6 course at EP APPEC Remera Rukoma.
              Excellent work!
            </p>

            <div className="completion-progress">

              <div className="completion-progress-top">

                <span>
                  Course Progress
                </span>

                <strong>
                  100%
                </strong>

              </div>

              <div className="completion-bar">

                <div
                  style={{ width: "100%" }}
                ></div>

              </div>

            </div>

            <div className="completion-actions">

              <Link
                href="/student/courses/1/lessons"
                className="all-lessons-btn"
              >
                📖 View All Lessons
              </Link>

              <Link
                href="/student/courses/1"
                className="next-lesson-btn"
              >
                🏠 Course Home
              </Link>

            </div>

          </div>

        </section>

        {/* ================= COURSE INFORMATION ================= */}

        <section className="lesson-info">

          <h2>
            Course Information
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
                Lessons
              </span>

              <strong>
                14 Lessons
              </strong>

            </div>

            <div>

              <span>
                Status
              </span>

              <strong className="completed-status">
                ✓ Course Completed
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