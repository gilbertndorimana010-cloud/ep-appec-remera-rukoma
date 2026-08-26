import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const userId = body?.id;

    if (!userId) {
      return NextResponse.json(
        { error: "Teacher ID is required." },
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

    // Delete teacher record from the database
    const { error: teacherError } = await supabaseAdmin
      .from("teachers")
      .delete()
      .eq("id", userId);

    if (teacherError) {
      console.error("Teacher delete error:", teacherError);

      return NextResponse.json(
        { error: teacherError.message },
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
            "Teacher record was deleted, but the login account could not be deleted: " +
            authError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Teacher account deleted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete teacher error:", error);

    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}