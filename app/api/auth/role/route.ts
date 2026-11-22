import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Please sign in first." },
        { status: 401 }
      );
    }

    // Check administrator account.
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (
      adminEmail &&
      user.email?.trim().toLowerCase() === adminEmail
    ) {
      return NextResponse.json({ role: "admin" });
    }

    // Check teacher account.
    const { data: teacher, error: teacherError } = await supabase
      .from("teachers")
      .select("id")
      .eq("id", user.id)
      .maybeSingle();

    if (teacherError) {
      console.error("Teacher role lookup error:", teacherError);
      return NextResponse.json(
        { error: "Unable to verify account role." },
        { status: 500 }
      );
    }

    if (teacher) {
      return NextResponse.json({ role: "teacher" });
    }

    // Check student account.
    const { data: student, error: studentError } = await supabase
      .from("students")
      .select("id")
      .eq("email", user.email ?? "")
      .maybeSingle();

    if (studentError) {
      console.error("Student role lookup error:", studentError);
      return NextResponse.json(
        { error: "Unable to verify account role." },
        { status: 500 }
      );
    }

    if (student) {
      return NextResponse.json({ role: "student" });
    }

    return NextResponse.json(
      { error: "No registered school account was found." },
      { status: 403 }
    );
  } catch (error) {
    console.error("Role detection error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
