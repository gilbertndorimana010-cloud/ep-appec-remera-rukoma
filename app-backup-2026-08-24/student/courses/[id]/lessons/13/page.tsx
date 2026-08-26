"use client";

import Link from "next/link";
import { useState } from "react";

export default function LessonThirteenPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the value of the digit 5 in 3.52?",
      options: ["5 tenths", "5 hundredths", "5 units", "5 thousandths"],
      correct: 0,
    },
    {
      id: 2,
      question: "Which decimal is equal to 1/2?",
      options: ["0.2", "0.25", "0.5", "1.5"],
      correct: 2,
    },
    {
      id: 3,
      question: "Calculate: 2.5 + 1.3",
      options: ["3.5", "3.8", "4.8", "2.8"],
      correct: 1,
    },
    {
      id: 4,
      question: "Calculate: 5.6 − 2.4",
      options: ["2.2", "3.0", "3.2", "4.2"],
      correct: 2,
    },
    {
      id: 5,
      question: "Which decimal is the greatest?",
      options: ["0.4", "0.75", "0.6", "0.25"],
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
          LESSON 13
        </div>

        <div className="subject-label">
          🔢 MATHEMATICS <span>•</span> PRIMARY 6
        </div>

        <h1>
          Decimals
        </h1>

        <p>
          Learn how to read, write, compare and calculate with
          decimal numbers.
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
              What is a Decimal?
            </h2>

            <p className="main-text">
              A decimal is a number that represents a whole
              number and a part of a whole. A decimal point
              separates the whole-number part from the fractional
              part.
            </p>

            <div className="info-highlight">

              <span className="highlight-icon">
                💡
              </span>

              <p>
                In <strong>3.52</strong>, the number{" "}
                <strong>3</strong> is the whole-number part,
                while <strong>52</strong> represents the
                fractional part.
              </p>

            </div>

            <div className="decimal-display">

              <div className="decimal-number">
                <span>3</span>
                <span className="decimal-point">.</span>
                <span>52</span>
              </div>

              <div className="decimal-labels">

                <div>
                  <strong>3</strong>
                  <p>Whole number</p>
                </div>

                <div>
                  <strong>.</strong>
                  <p>Decimal point</p>
                </div>

                <div>
                  <strong>52</strong>
                  <p>Decimal part</p>
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
              Decimal Place Values
            </h2>

            <p className="main-text">
              Each digit after the decimal point has a specific
              place value.
            </p>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  1️⃣
                </div>

                <h4>
                  Tenths
                </h4>

                <p>
                  The first digit after the decimal point.
                </p>

                <strong>
                  0.5
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  2️⃣
                </div>

                <h4>
                  Hundredths
                </h4>

                <p>
                  The second digit after the decimal point.
                </p>

                <strong>
                  0.05
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  3️⃣
                </div>

                <h4>
                  Thousandths
                </h4>

                <p>
                  The third digit after the decimal point.
                </p>

                <strong>
                  0.005
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
              Comparing Decimals
            </h2>

            <p className="main-text">
              To compare decimals, first compare the whole-number
              parts. If they are equal, compare the digits after
              the decimal point from left to right.
            </p>

            <div className="math-areas">

              <div className="math-area-card">

                <div className="area-icon">
                  1️⃣
                </div>

                <div>

                  <h3>
                    Compare whole numbers
                  </h3>

                  <p>
                    A larger whole-number part means a larger
                    decimal.
                  </p>

                  <strong>
                    4.2 &gt; 3.9
                  </strong>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  2️⃣
                </div>

                <div>

                  <h3>
                    Compare tenths
                  </h3>

                  <p>
                    If the whole numbers are equal, compare the
                    tenths.
                  </p>

                  <strong>
                    2.7 &gt; 2.4
                  </strong>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  3️⃣
                </div>

                <div>

                  <h3>
                    Compare hundredths
                  </h3>

                  <p>
                    If necessary, continue comparing the
                    hundredths and thousandths.
                  </p>

                  <strong>
                    0.75 &gt; 0.70
                  </strong>

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
                  What is the value of the digit{" "}
                  <strong>5</strong> in <strong>3.52</strong>?
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`3.52

3 = units
5 = tenths
2 = hundredths`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 Therefore, the value of 5 is{" "}
                  <strong>5 tenths</strong>, or{" "}
                  <strong>0.5</strong>.
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
                  Calculate <strong>2.5 + 1.3</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`  2.5
+ 1.3
-----
  3.8`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 Therefore,{" "}
                  <strong>
                    2.5 + 1.3 = 3.8.
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
                  Calculate <strong>5.6 − 2.4</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`  5.6
- 2.4
-----
  3.2`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 Therefore,{" "}
                  <strong>
                    5.6 − 2.4 = 3.2.
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
              LESSON 13 COMPLETE
            </span>

            <h2>
              Congratulations!
            </h2>

            <p>
              You have reached the end of this lesson.
              Review the exercise and continue to the final
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
                href="/student/courses/1/lessons/14"
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
                13 of 14
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