import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const quizzesFile = path.join(process.cwd(), "data", "quizzes.json");

export async function GET() {
  try {
    const file = await fs.readFile(quizzesFile, "utf8");
    const data = JSON.parse(file);

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { quizzes: [] },
      { status: 200 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      lessonId,
      title,
      instructions,
      timeLimit,
      totalMarks,
      questions,
    } = body;

    if (!lessonId || !title || !questions?.length) {
      return NextResponse.json(
        {
          success: false,
          message: "Lesson ID, quiz title and questions are required.",
        },
        { status: 400 }
      );
    }

    let data = { quizzes: [] as any[] };

    try {
      const file = await fs.readFile(quizzesFile, "utf8");
      data = JSON.parse(file);
    } catch {
      data = { quizzes: [] };
    }

    const quiz = {
      id: crypto.randomUUID(),
      lessonId: String(lessonId),
      title: String(title),
      instructions: String(instructions || ""),
      timeLimit: Number(timeLimit || 0),
      totalMarks: Number(totalMarks || 0),
      questions,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    data.quizzes.push(quiz);

    await fs.writeFile(
      quizzesFile,
      JSON.stringify(data, null, 2),
      "utf8"
    );

    return NextResponse.json(
      {
        success: true,
        quiz,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quiz save error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save quiz.",
      },
      { status: 500 }
    );
  }
}
