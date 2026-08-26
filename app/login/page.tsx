"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../utils/supabase/client";

export default function StudentLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const identifier = usernameOrEmail.trim();

    if (!identifier || !password) {
      setError("Please enter your username/email and password.");
      return;
    }

    setLoading(true);

    let email = identifier;

    // Allow students to log in using either username or email.
    if (!identifier.includes("@")) {
      const { data: student, error: studentError } = await supabase
        .from("students")
        .select("email")
        .eq("username", identifier)
        .maybeSingle();

      if (studentError || !student?.email) {
        setError("Invalid username/email or password.");
        setLoading(false);
        return;
      }

      email = student.email;
    }

    const { error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (loginError) {
      setError("Invalid username/email or password.");
      setLoading(false);
      return;
    }

    // Return to the page the student originally requested.
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect && redirect.startsWith("/student")) {
      router.push(redirect);
    } else {
      router.push("/student");
    }

    router.refresh();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
        }}
      >
        {/* BRAND */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              margin: "0 auto 16px",
              borderRadius: "50%",
              background: "#123c69",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              boxShadow: "0 5px 15px rgba(18,60,105,0.18)",
            }}
          >
            EP
          </div>

          <h1
            style={{
              margin: 0,
              color: "#123c69",
              fontSize: "23px",
              fontWeight: "700",
            }}
          >
            EP APPEC
          </h1>

          <p
            style={{
              margin: "5px 0 0",
              color: "#555",
              fontSize: "15px",
            }}
          >
            Remera Rukoma E-Learning Platform
          </p>
        </div>

        {/* LOGIN CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            padding: "38px 35px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#222",
                fontSize: "28px",
              }}
            >
              Welcome Back
            </h2>

            <p
              style={{
                margin: "9px 0 0",
                color: "#777",
                fontSize: "15px",
                lineHeight: "1.5",
              }}
            >
              Sign in to continue to your account.
            </p>
          </div>

          <form onSubmit={handleLogin}>
            {/* USERNAME */}
            <label
              htmlFor="username"
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#333",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Username or Email
            </label>

            <input
              id="username"
              type="text"
              value={usernameOrEmail}
              onChange={(event) =>
                setUsernameOrEmail(event.target.value)
              }
              placeholder="Enter your username or email"
              autoComplete="username"
              required
              style={{
                width: "100%",
                padding: "13px 14px",
                marginBottom: "20px",
                border: "1px solid #d1d5db",
                borderRadius: "7px",
                boxSizing: "border-box",
                fontSize: "15px",
                outline: "none",
              }}
            />

            {/* PASSWORD */}
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#333",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              style={{
                width: "100%",
                padding: "13px 14px",
                marginBottom: "18px",
                border: "1px solid #d1d5db",
                borderRadius: "7px",
                boxSizing: "border-box",
                fontSize: "15px",
                outline: "none",
              }}
            />

            {/* ERROR */}
            {error && (
              <div
                style={{
                  background: "#fee2e2",
                  color: "#991b1b",
                  padding: "12px 14px",
                  borderRadius: "7px",
                  marginBottom: "18px",
                  fontSize: "14px",
                  lineHeight: "1.4",
                }}
              >
                {error}
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "13px",
                background: loading ? "#7d96ad" : "#123c69",
                color: "#ffffff",
                border: "none",
                borderRadius: "7px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: loading ? "not-allowed" : "pointer",
                marginTop: "4px",
              }}
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          {/* LOST PASSWORD */}
          <div
            style={{
              textAlign: "center",
              marginTop: "22px",
            }}
          >
            <a
              href="/login/forgot-password"
              style={{
                color: "#123c69",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Lost password?
            </a>
          </div>

          {/* ACCOUNT MESSAGE */}
          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              paddingTop: "22px",
              borderTop: "1px solid #eeeeee",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                color: "#777",
                fontSize: "14px",
              }}
            >
              Don't have an account?
            </p>

            <p
              style={{
                margin: 0,
                color: "#555",
                fontSize: "13px",
                lineHeight: "1.5",
              }}
            >
              Contact the school administration to create
              your student account.
            </p>
          </div>

          {/* BACK HOME */}
          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
            }}
          >
            <a
              href="/"
              style={{
                color: "#123c69",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              ← Back to Home
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#888",
            fontSize: "12px",
            lineHeight: "1.5",
          }}
        >
          <div>EP APPEC Remera Rukoma</div>
          <div>District Kamonyi · Sector Rukoma</div>
        </div>
      </div>
    </main>
  );
}
