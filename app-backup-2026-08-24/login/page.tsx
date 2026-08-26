"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function LoginPage() {
  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Temporary login for the current version
    window.location.href = "/student/courses";
  }

  return (
    <main className="login-page">

      <div className="login-background"></div>

      <section className="login-container">

        {/* LEFT SIDE */}

        <div className="login-introduction">

          <Link href="/" className="login-brand">
            <div className="login-brand-mark">
              EP
            </div>

            <div>
              <strong>EP APPEC</strong>
              <span>Remera Rukoma</span>
            </div>
          </Link>

          <div className="login-message">

            <span className="login-label">
              STUDENT LEARNING PLATFORM
            </span>

            <h1>
              Welcome back.
              <br />
              <span>Continue learning.</span>
            </h1>

            <p>
              Sign in to access your courses, lessons,
              assignments and learning progress.
            </p>

            <div className="login-features">

              <div>
                <span>✓</span>
                <p>Access your courses</p>
              </div>

              <div>
                <span>✓</span>
                <p>Continue your lessons</p>
              </div>

              <div>
                <span>✓</span>
                <p>Track your progress</p>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="login-card">

          <Link
            href="/"
            className="login-back"
          >
            ← Back to Home
          </Link>

          <div className="login-card-header">

            <h2>
              Student Login
            </h2>

            <p>
              Enter your details to continue.
            </p>

          </div>


          <form onSubmit={handleLogin}>

            <div className="login-field">

              <label htmlFor="student-id">
                Student ID
              </label>

              <input
                id="student-id"
                type="text"
                placeholder="Enter your student ID"
                required
              />

            </div>


            <div className="login-field">

              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />

            </div>


            <div className="login-options">

              <label className="remember-me">

                <input
                  type="checkbox"
                />

                <span>
                  Remember me
                </span>

              </label>

              <a href="#">
                Forgot password?
              </a>

            </div>


            <button
              type="submit"
              className="login-submit"
            >
              Sign In
              <span>→</span>
            </button>

          </form>


          <div className="login-divider">
            <span>EP APPEC REMERA RUKOMA</span>
          </div>

          <p className="login-footer-text">
            Need help accessing your account?
            <br />
            Contact your teacher or school administration.
          </p>

        </div>

      </section>


      <footer className="login-page-footer">
        © 2026 EP APPEC Remera Rukoma · District Kamonyi · Sector Rukoma
      </footer>

    </main>
  );
}