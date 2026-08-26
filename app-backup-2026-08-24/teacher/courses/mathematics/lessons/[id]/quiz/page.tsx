import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

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
  createdAt: string;
  updatedAt: string;
};

async function getQuiz(lessonId: string): Promise<Quiz | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "quizzes.json"
    );

    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);

    const quizzes: Quiz[] = Array.isArray(data.quizzes)
      ? data.quizzes
      : [];

    return (
      quizzes.find(
        (quiz) => String(quiz.lessonId) === String(lessonId)
      ) || null
    );
  } catch (error) {
    console.error("Quiz read error:", error);
    return null;
  }
}

export default async function LessonQuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const quiz = await getQuiz(id);

  return (
    <main className="teacher-content-page">

      {/* HEADER */}
      <header className="teacher-content-header">

        <div>

          <Link
            href={`/teacher/courses/mathematics/lessons/${id}`}
            className="teacher-content-back"
          >
            ← Back to Lesson
          </Link>

          <span>LESSON MANAGEMENT</span>

          <h1>Lesson Quiz</h1>

          <p>
            Create and manage quizzes to assess Primary 6 student
            understanding.
          </p>

        </div>

        <div className="teacher-content-icon">
          QUIZ
        </div>

      </header>


      {/* QUIZ CONTENT */}
      <section className="teacher-content-card">

        <div className="teacher-content-card-top">

          <div>

            <span>ASSESSMENT</span>

            <h2>
              Quiz for Lesson {id}
            </h2>

          </div>

          <Link
            href={`/teacher/courses/mathematics/lessons/${id}/quiz/add`}
            className="teacher-content-primary"
          >
            + Create Quiz
          </Link>

        </div>


        {quiz ? (

          <div>

            {/* QUIZ SUMMARY */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "25px",
              }}
            >

              <span>QUIZ CREATED</span>

              <h2 style={{ marginTop: "8px" }}>
                {quiz.title.trim() || "Mathematics Quiz"}
              </h2>

              {quiz.instructions && (
                <p style={{ marginTop: "10px" }}>
                  {quiz.instructions}
                </p>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "25px",
                  flexWrap: "wrap",
                  marginTop: "15px",
                }}
              >

                <strong>
                  Questions: {quiz.questions.length}
                </strong>

                <strong>
                  Total Marks: {quiz.totalMarks || "Not set"}
                </strong>

                <strong>
                  Time: {quiz.timeLimit || "Not set"} minutes
                </strong>

              </div>

            </div>


            {/* QUESTIONS */}
            <div>

              <h2 style={{ marginBottom: "20px" }}>
                Quiz Questions
              </h2>

              {quiz.questions.map((question, questionIndex) => (

                <div
                  key={questionIndex}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    padding: "20px",
                    marginBottom: "20px",
                  }}
                >

                  <h3>
                    Question {questionIndex + 1}
                  </h3>

                  <p style={{ marginTop: "12px" }}>
                    <strong>
                      {question.question}
                    </strong>
                  </p>


                  <div style={{ marginTop: "15px" }}>

                    {question.options.map(
                      (option, optionIndex) => (

                        <div
                          key={optionIndex}
                          style={{
                            padding: "10px",
                            marginBottom: "8px",
                            border: "1px solid #eee",
                            borderRadius: "8px",
                          }}
                        >

                          <strong>
                            {String.fromCharCode(
                              65 + optionIndex
                            )}.
                          </strong>{" "}

                          {option}

                          {optionIndex ===
                            question.correctAnswer && (
                            <span
                              style={{
                                marginLeft: "10px",
                                fontWeight: "bold",
                              }}
                            >
                              ✓ Correct Answer
                            </span>
                          )}

                        </div>

                      )
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>

        ) : (

          /* NO QUIZ */
          <div className="teacher-content-empty">

            <div className="teacher-content-empty-icon">
              QUIZ
            </div>

            <h3>
              No quiz created yet
            </h3>

            <p>
              Create a quiz to test students on the knowledge and
              skills covered in this lesson.
            </p>

            <Link
              href={`/teacher/courses/mathematics/lessons/${id}/quiz/add`}
              className="teacher-content-primary"
            >
              + Create First Quiz
            </Link>

          </div>

        )}

      </section>


      {/* FOOTER */}
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
