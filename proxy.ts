import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Login pages must remain accessible.
  if (
    pathname === "/login" ||
    pathname === "/teacher/login" ||
    pathname === "/admin/login"
  ) {
    return response;
  }

  // --------------------------------------------------
  // STUDENT AREA
  // --------------------------------------------------

  if (pathname.startsWith("/student")) {
    if (!user) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }

    // A student must have a student record.
    const { data: student } = await supabase
      .from("students")
      .select("id")
      .eq("id", user.id)
      .maybeSingle();

    if (!student) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }
  }

  // --------------------------------------------------
  // TEACHER AREA
  // --------------------------------------------------

  if (pathname.startsWith("/teacher")) {
    if (!user) {
      return NextResponse.redirect(
        new URL("/teacher/login", request.url)
      );
    }

    // A teacher must have a teacher record.
    const { data: teacher } = await supabase
      .from("teachers")
      .select("id")
      .eq("id", user.id)
      .maybeSingle();

    if (!teacher) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }
  }

  // --------------------------------------------------
  // ADMIN AREA
  // --------------------------------------------------

  if (pathname.startsWith("/admin")) {
    if (!user) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }

    /*
     * Admin authentication is handled by the existing
     * admin login/session system.
     *
     * We only require an authenticated Supabase user here.
     */
  }

  return response;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/teacher/:path*",
    "/student/:path*",
  ],
};