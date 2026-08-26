import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const userId = body?.id;

    if (!userId) {
      return NextResponse.json(
        { error: "Student ID is required." },
        { status: 400 }
      );
    }

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

    // Delete student record from the database
    const { error: studentError } = await supabaseAdmin
      .from("students")
      .delete()
      .eq("id", userId);

    if (studentError) {
      console.error("Student delete error:", studentError);

      return NextResponse.json(
        { error: studentError.message },
        { status: 400 }
      );
    }

    // Delete corresponding Supabase Auth account
    const { error: authError } =
      await supabaseAdmin.auth.admin.deleteUser(userId);

    if (authError) {
      console.error("Auth delete error:", authError);

      return NextResponse.json(
        {
          error:
            "Student record was deleted, but the login account could not be deleted: " +
            authError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Student account deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete student error:", error);

    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}