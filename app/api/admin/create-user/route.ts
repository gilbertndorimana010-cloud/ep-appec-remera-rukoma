import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type CreateUserRequest = {
  full_name: string;
  email: string;
  password: string;
  role: "teacher" | "student";
  subject?: string;
  class_name?: string;
  username?: string;
};

export async function POST(request: Request) {
  try {
    const body: CreateUserRequest = await request.json();

    const {
      full_name,
      email,
      password,
      role,
      subject,
      class_name,
      username,
    } = body;

    // Validate full name
    if (!full_name || !full_name.trim()) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }

    // Validate email
    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Validate password
    if (!password || password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    // Validate role
    if (role !== "teacher" && role !== "student") {
      return NextResponse.json(
        { error: "Invalid user role." },
        { status: 400 }
      );
    }

    // Get Supabase environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_SUPABASE_URL is missing." },
        { status: 500 }
      );
    }

    if (!supabaseSecretKey) {
      return NextResponse.json(
        { error: "SUPABASE_SECRET_KEY is missing." },
        { status: 500 }
      );
    }

    // Create Supabase admin client
    const supabaseAdmin = createClient(
      supabaseUrl,
      supabaseSecretKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Create Supabase Auth user
    const { data: authData, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email: email.trim(),
        password,
        email_confirm: true,
        user_metadata: {
          full_name: full_name.trim(),
          role,
        },
      });

    if (authError) {
      console.error("Supabase Auth error:", authError);

      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      );
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: "User was not created." },
        { status: 500 }
      );
    }

    const userId = authData.user.id;

    // =========================
    // CREATE TEACHER RECORD
    // =========================
    if (role === "teacher") {
      const { error: teacherError } = await supabaseAdmin
        .from("teachers")
        .insert({
          id: userId,
          full_name: full_name.trim(),
          email: email.trim(),
          subject: subject?.trim() || null,
        });

      if (teacherError) {
        console.error("Teacher database error:", teacherError);

        // Delete Auth account if database insert fails
        await supabaseAdmin.auth.admin.deleteUser(userId);

        return NextResponse.json(
          { error: teacherError.message },
          { status: 400 }
        );
      }
    }

    // =========================
    // CREATE STUDENT RECORD
    // =========================
    if (role === "student") {
      const { error: studentError } = await supabaseAdmin
        .from("students")
        .insert({
          id: userId,
          full_name: full_name.trim(),
          email: email.trim(),
          class_name: class_name?.trim() || null,
          username: username?.trim() || null,
        });

      if (studentError) {
        console.error("Student database error:", studentError);

        // Delete Auth account if database insert fails
        await supabaseAdmin.auth.admin.deleteUser(userId);

        return NextResponse.json(
          { error: studentError.message },
          { status: 400 }
        );
      }
    }

    // =========================
    // SUCCESS
    // =========================
    return NextResponse.json(
      {
        success: true,
        message:
          role === "teacher"
            ? "Teacher account created successfully."
            : "Student account created successfully.",
        user: {
          id: userId,
          full_name: full_name.trim(),
          email: email.trim(),
          role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create user error:", error);

    return NextResponse.json(
      {
        error: "An unexpected server error occurred.",
      },
      { status: 500 }
    );
  }
}