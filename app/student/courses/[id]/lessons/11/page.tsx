"use client";

import Link from "next/link";
import { useState } from "react";

export default function LessonElevenPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Which number is a multiple of 5?",
      options: ["12", "15", "17", "23"],
      correct: 1,
    },
    {
      id: 2,
      question: "Which number is divisible by 2?",
      options: ["15", "21", "34", "47"],
      correct: 2,
    },
    {
      id: 3,
      question: "What are the factors of 12?",
      options: [
        "1, 2, 3, 4, 6, 12",
        "1, 2, 5, 12",
        "2, 4, 8, 12",
        "1, 3, 5, 12",
      ],
      correct: 0,
    },
    {
      id: 4,
      question: "Which number is a prime number?",
      options: ["9", "12", "15", "17"],
      correct: 3,
    },
    {
      id: 5,
      question: "Which number is divisible by 10?",
      options: ["25", "35", "40", "47"],
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
          LESSON 11
        </div>

        <div className="subject-label">
          🔢 MATHEMATICS <span>•</span> PRIMARY 6
        </div>

        <h1>
          Factors and Multiples
        </h1>

        <p>
          Learn about factors, multiples, divisibility and
          prime numbers.
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
              What is a Factor?
            </h2>

            <p className="main-text">
              A factor is a whole number that divides another
              number exactly without leaving a remainder.
            </p>

            <div className="info-highlight">

              <span className="highlight-icon">
                💡
              </span>

              <p>
                For example, <strong>3</strong> is a factor of
                12 because <strong>12 ÷ 3 = 4</strong>.
              </p>

            </div>

            <div className="math-example">

              <strong>
                Factors of 12
              </strong>

              <span>
                are
              </span>

              <strong>
                1, 2, 3, 4, 6 and 12
              </strong>

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
              What is a Multiple?
            </h2>

            <p className="main-text">
              A multiple is a number obtained by multiplying a
              whole number by another whole number.
            </p>

            <div className="benefits-grid">

              <div className="benefit-card">

                <div className="benefit-icon">
                  ✖️
                </div>

                <h4>
                  Multiples of 2
                </h4>

                <p>
                  Multiply 2 by whole numbers.
                </p>

                <strong>
                  2, 4, 6, 8, 10...
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  🔢
                </div>

                <h4>
                  Multiples of 5
                </h4>

                <p>
                  Multiply 5 by whole numbers.
                </p>

                <strong>
                  5, 10, 15, 20, 25...
                </strong>

              </div>

              <div className="benefit-card">

                <div className="benefit-icon">
                  💯
                </div>

                <h4>
                  Multiples of 10
                </h4>

                <p>
                  Multiply 10 by whole numbers.
                </p>

                <strong>
                  10, 20, 30, 40, 50...
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
              Divisibility
            </h2>

            <p className="main-text">
              A number is divisible by another number when it
              can be divided exactly without a remainder.
            </p>

            <div className="math-areas">

              <div className="math-area-card">

                <div className="area-icon">
                  2️⃣
                </div>

                <div>

                  <h3>
                    Divisible by 2
                  </h3>

                  <p>
                    A number is divisible by 2 if its last digit
                    is even: 0, 2, 4, 6 or 8.
                  </p>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  5️⃣
                </div>

                <div>

                  <h3>
                    Divisible by 5
                  </h3>

                  <p>
                    A number is divisible by 5 if it ends in
                    0 or 5.
                  </p>

                </div>

              </div>

              <div className="math-area-card">

                <div className="area-icon">
                  🔟
                </div>

                <div>

                  <h3>
                    Divisible by 10
                  </h3>

                  <p>
                    A number is divisible by 10 if it ends in
                    0.
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
                  Find the factors of <strong>12</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`1 × 12 = 12
2 × 6  = 12
3 × 4  = 12

Factors of 12:
1, 2, 3, 4, 6, 12`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 Therefore, the factors of{" "}
                  <strong>
                    12
                  </strong>{" "}
                  are{" "}
                  <strong>
                    1, 2, 3, 4, 6 and 12.
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
                  Write the first five multiples of{" "}
                  <strong>6</strong>.
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`6 × 1 = 6
6 × 2 = 12
6 × 3 = 18
6 × 4 = 24
6 × 5 = 30`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 The first five multiples of 6 are{" "}
                  <strong>
                    6, 12, 18, 24 and 30.
                  </strong>
                </div>

              </div>

            </div>

            <br />

            <div className="example-card">

              <div className="example-title">
                📝 Example 3
              </div>

              <div className="question-box">

                <h3>
                  Problem
                </h3>

                <p>
                  Is <strong>40</strong> divisible by 5?
                </p>

              </div>

              <div className="solution-box">

                <h3>
                  Solution
                </h3>

                <div className="calculation">

                  <pre>
{`40 ÷ 5 = 8`}
                  </pre>

                </div>

                <div className="answer">
                  🎯 Yes. <strong>40 is divisible by 5</strong>{" "}
                  because the division has no remainder.
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
              LESSON 11 COMPLETE
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
                href="/student/courses/1/lessons/12"
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
                11 of 14
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