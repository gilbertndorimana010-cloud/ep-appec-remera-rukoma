"use client";

import Link from "next/link";
import { useState } from "react";

export default function LessonThreePage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Which number is written as twenty-five?",
      options: ["52", "25", "205", "250"],
      correct: 1,
    },
    {
      id: 2,
      question: "Which number is written as one hundred and eight?",
      options: ["180", "108", "118", "1,008"],
      correct: 1,
    },
    {
      id: 3,
      question: "Which number is written as two thousand five hundred?",
      options: ["2,050", "25,000", "2,500", "250"],
      correct: 2,
    },
    {
      id: 4,
      question:
        "Which number is written as ten thousand and five?",
      options: ["10,050", "1,005", "10,005", "100,005"],
      correct: 2,
    },
    {
      id: 5,
      question:
        "Which number is written as three hundred and forty-two thousand?",
      options: ["342,000", "34,200", "3,420", "342"],
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
          LESSON 3
        </div>

        <div className="subject-label">
          🔢 MATHEMATICS <span>•</span> PRIMARY 6
        </div>

        <h1>
          Writing Numbers in Figures
        </h1>

        <p>
          Learn how to change numbers written in words into
          numerical figures correctly.
        </p>

      </section>

      {/* MAIN CONTENT */}
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
              What Are Figures?
            </h2>

            <p className="main-text">
              Figures are symbols used to represent numbers.
              The ten digits used in our number system are
              <strong> 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.</strong>
            </p>

            <div className="info-highlight">

              <span className="highlight-icon">
                💡
              </span>

              <p>
                For example, the words{" "}
                <strong>twenty-five</strong> are written in
                figures as <strong>25</strong>.
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
              How to Write Numbers in Figures
            </h2>

            <p className="main-text">
              To write a number in figures, identify the value
              of each part of the number and put the digits in
              their correct places.
            </p>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  1️⃣
                </div>

                <h4>
                  Read the number
                </h4>

                <p>
                  Read the number carefully from left to right.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🔢
                </div>

                <h4>
                  Identify place values
                </h4>

                <p>
                  Identify thousands, hundreds, tens and units.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  ✍️
                </div>

                <h4>
                  Write the digits
                </h4>

                <p>
                  Write each digit in its correct place.
                </p>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  ✅
                </div>

                <h4>
                  Check your answer
                </h4>

                <p>
                  Read the number again to make sure it is
                  correct.
                </p>

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
              Examples
            </h2>

            <div className="math-areas">

              <div className="math-area-card">

                <div className="area-icon">
                  🔢
                </div>

                <div>
                  <h3>
                    Twenty-five
                  </h3>

                  <p>
                    <strong>25</strong>
                  </p>
                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  💯
                </div>

                <div>
                  <h3>
                    One hundred and eight
                  </h3>

                  <p>
                    <strong>108</strong>
                  </p>
                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  🧮
                </div>

                <div>
                  <h3>
                    Two thousand five hundred
                  </h3>

                  <p>
                    <strong>2,500</strong>
                  </p>
                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  📚
                </div>

                <div>
                  <h3>
                    Ten thousand and five
                  </h3>

                  <p>
                    <strong>10,005</strong>
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
                  Write <strong>three hundred and forty-two</strong>
                  {" "}in figures.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">
                  Three hundred and forty-two = 342
                </div>

                <div className="answer">
                  🎯 The answer is{" "}
                  <strong>342.</strong>
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
                  Write <strong>two thousand five hundred
                  and six</strong> in figures.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">
                  Two thousand five hundred and six = 2,506
                </div>

                <div className="answer">
                  🎯 The answer is{" "}
                  <strong>2,506.</strong>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SECTION 5 */}
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
              LESSON 3 COMPLETE
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
                href="/student/courses/1/lessons/4"
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
                3 of 14
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