"use client";

import Link from "next/link";
import { useState } from "react";

export default function LessonFourPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the place value of 5 in 5,432?",
      options: ["Units", "Tens", "Hundreds", "Thousands"],
      correct: 3,
    },
    {
      id: 2,
      question: "What is the value of 7 in 47,215?",
      options: ["7", "70", "7,000", "70,000"],
      correct: 2,
    },
    {
      id: 3,
      question: "In 326,541, which digit is in the hundreds place?",
      options: ["3", "2", "5", "4"],
      correct: 2,
    },
    {
      id: 4,
      question: "What is the value of 9 in 294,631?",
      options: ["9,000", "90,000", "900", "9"],
      correct: 1,
    },
    {
      id: 5,
      question: "Which digit is in the ten-thousands place in 56,782?",
      options: ["5", "6", "7", "8"],
      correct: 0,
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
          LESSON 4
        </div>

        <div className="subject-label">
          🔢 MATHEMATICS <span>•</span> PRIMARY 6
        </div>

        <h1>
          Place Value of Large Numbers
        </h1>

        <p>
          Learn how the position of a digit determines its
          value in a number.
        </p>

      </section>

      {/* ================= MAIN CONTENT ================= */}

      <section className="lesson-container">

        {/* COURSE PROGRESS */}

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
              What is Place Value?
            </h2>

            <p className="main-text">
              Place value tells us the value of a digit
              according to its position in a number.
            </p>

            <div className="info-highlight">

              <span className="highlight-icon">
                💡
              </span>

              <p>
                The same digit can have different values
                depending on where it is located.
              </p>

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
              Place Value Positions
            </h2>

            <p className="main-text">
              Starting from the right, the positions of
              whole numbers are units, tens, hundreds,
              thousands, ten-thousands, hundred-thousands
              and millions.
            </p>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  1️⃣
                </div>

                <h4>
                  Units
                </h4>

                <p>
                  The first position from the right.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🔟
                </div>

                <h4>
                  Tens
                </h4>

                <p>
                  The second position from the right.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  💯
                </div>

                <h4>
                  Hundreds
                </h4>

                <p>
                  The third position from the right.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🧮
                </div>

                <h4>
                  Thousands
                </h4>

                <p>
                  The fourth position from the right.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🔢
                </div>

                <h4>
                  Ten-thousands
                </h4>

                <p>
                  The fifth position from the right.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  📊
                </div>

                <h4>
                  Hundred-thousands
                </h4>

                <p>
                  The sixth position from the right.
                </p>

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
              Example of Place Value
            </h2>

            <div className="math-areas">

              <div className="math-area-card">

                <div className="area-icon">
                  🔢
                </div>

                <div>

                  <h3>
                    47,215
                  </h3>

                  <p>
                    4 = Ten-thousands
                  </p>

                  <p>
                    7 = Thousands
                  </p>

                  <p>
                    2 = Hundreds
                  </p>

                  <p>
                    1 = Tens
                  </p>

                  <p>
                    5 = Units
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
              Worked Example
            </h2>

            <div className="example-card">

              <div className="example-title">
                📝 Example
              </div>

              <div className="question-box">

                <h3>
                  Problem
                </h3>

                <p>
                  What is the value of the digit{" "}
                  <strong>6</strong> in{" "}
                  <strong>364,215</strong>?
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">
                  364,215
                </div>

                <p>
                  The digit 6 is in the ten-thousands
                  place.
                </p>

                <div className="answer">
                  🎯 Therefore, its value is{" "}
                  <strong>60,000.</strong>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SECTION 5 ================= */}

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
              LESSON 4 COMPLETE
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
                href="/student/courses/1/lessons/5"
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
                4 of 14
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