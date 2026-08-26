"use client";

import Link from "next/link";
import { useState } from "react";

export default function LessonFivePage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Which symbol makes the statement correct? 25 ___ 35",
      options: ["<", ">", "=", "+"],
      correct: 0,
    },
    {
      id: 2,
      question: "Which symbol makes the statement correct? 500 ___ 500",
      options: ["<", ">", "=", "−"],
      correct: 2,
    },
    {
      id: 3,
      question: "Which number is greater: 7,500 or 7,050?",
      options: ["7,050", "7,500", "Both are equal", "750"],
      correct: 1,
    },
    {
      id: 4,
      question: "Which statement is correct?",
      options: [
        "45,200 < 45,020",
        "45,200 > 45,020",
        "45,200 = 45,020",
        "45,020 > 45,200",
      ],
      correct: 1,
    },
    {
      id: 5,
      question: "Which number is the smallest?",
      options: ["89,999", "90,001", "89,099", "90,000"],
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
          LESSON 5
        </div>

        <div className="subject-label">
          🔢 MATHEMATICS <span>•</span> PRIMARY 6
        </div>

        <h1>
          Comparing Whole Numbers
        </h1>

        <p>
          Learn how to compare whole numbers using the
          symbols less than, greater than and equal to.
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
              What Does Comparing Numbers Mean?
            </h2>

            <p className="main-text">
              Comparing numbers means determining whether one
              number is greater than, less than or equal to
              another number.
            </p>

            <div className="info-highlight">

              <span className="highlight-icon">
                💡
              </span>

              <p>
                We use three main symbols when comparing
                numbers: <strong>&lt;</strong>,{" "}
                <strong>&gt;</strong> and{" "}
                <strong>=</strong>.
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
              Comparing Symbols
            </h2>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  &lt;
                </div>

                <h4>
                  Less Than
                </h4>

                <p>
                  The symbol &lt; means the number on the left
                  is smaller.
                </p>

                <strong>
                  Example: 25 &lt; 35
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  &gt;
                </div>

                <h4>
                  Greater Than
                </h4>

                <p>
                  The symbol &gt; means the number on the left
                  is larger.
                </p>

                <strong>
                  Example: 50 &gt; 30
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  =
                </div>

                <h4>
                  Equal To
                </h4>

                <p>
                  The symbol = means both numbers have the
                  same value.
                </p>

                <strong>
                  Example: 500 = 500
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
              How to Compare Large Numbers
            </h2>

            <p className="main-text">
              When comparing large numbers, first count the
              number of digits. A number with more digits is
              usually greater. If both numbers have the same
              number of digits, compare the digits from left to
              right.
            </p>

            <div className="math-areas">

              <div className="math-area-card">

                <div className="area-icon">
                  1️⃣
                </div>

                <div>

                  <h3>
                    Step 1
                  </h3>

                  <p>
                    Compare the number of digits.
                  </p>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  2️⃣
                </div>

                <div>

                  <h3>
                    Step 2
                  </h3>

                  <p>
                    If equal, compare digits from the left.
                  </p>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  3️⃣
                </div>

                <div>

                  <h3>
                    Step 3
                  </h3>

                  <p>
                    Use &lt;, &gt; or = to show the result.
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

            <div className="example-card">

              <div className="example-title">
                📝 Example 1
              </div>

              <div className="question-box">

                <h3>
                  Problem
                </h3>

                <p>
                  Compare <strong>45,200</strong> and{" "}
                  <strong>45,020</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">
                  45,200 &gt; 45,020
                </div>

                <div className="answer">
                  🎯 Therefore,{" "}
                  <strong>
                    45,200 is greater than 45,020.
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
                  Compare <strong>7,500</strong> and{" "}
                  <strong>7,050</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">
                  7,500 &gt; 7,050
                </div>

                <div className="answer">
                  🎯 Therefore,{" "}
                  <strong>
                    7,500 is greater than 7,050.
                  </strong>
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
              LESSON 5 COMPLETE
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
                href="/student/courses/1/lessons/6"
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
                5 of 14
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