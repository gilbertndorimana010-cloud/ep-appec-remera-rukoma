import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

const resultsFile = path.join(
  process.cwd(),
  "data",
  "quiz-results.json"
);

type QuizResult = {
  id: string;
  quizId: string;
  lessonId: string;
  studentId: string;
  studentName: string;
  score: number;
  totalMarks: number;
  percentage: number;
  answers: number[];
  createdAt: string;
  updatedAt: string;
};

type ResultsData = {
  results: QuizResult[];
};

export async function GET() {
  try {
    const file = await fs.readFile(resultsFile, "utf8");
    const data: ResultsData = JSON.parse(file);

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { results: [] },
      { status: 200 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      quizId,
      lessonId,
      studentId,
      studentName,
      score,
      totalMarks,
      percentage,
      answers,
    } = body;

    if (
      !quizId ||
      !lessonId ||
      score === undefined ||
      totalMarks === undefined
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required quiz result information.",
        },
        { status: 400 }
      );
    }

    let data: ResultsData = {
      results: [],
    };

    try {
      const file = await fs.readFile(resultsFile, "utf8");
      data = JSON.parse(file);
    } catch {
      data = {
        results: [],
      };
    }

    const now = new Date().toISOString();

    const result: QuizResult = {
      id: crypto.randomUUID(),
      quizId: String(quizId),
      lessonId: String(lessonId),
      studentId: studentId
        ? String(studentId)
        : "student-1",
      studentName: studentName
        ? String(studentName)
        : "Primary 6 Student",
      score: Number(score),
      totalMarks: Number(totalMarks),
      percentage:
        percentage !== undefined
          ? Number(percentage)
          : Number(totalMarks) > 0
            ? Math.round(
                (Number(score) / Number(totalMarks)) * 100
              )
            : 0,
      answers: Array.isArray(answers)
        ? answers.map(Number)
        : [],
      createdAt: now,
      updatedAt: now,
    };

    data.results.push(result);

    await fs.writeFile(
      resultsFile,
      JSON.stringify(data, null, 2),
      "utf8"
    );

    return NextResponse.json(
      {
        success: true,
        result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quiz result save error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save quiz result.",
      },
      { status: 500 }
    );
  }
}
