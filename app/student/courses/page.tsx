"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

type Course = {
  id: number;
  title: string;
  description: string | null;
  created_at: string;
};

export default function MyCoursesPage() {
  const supabase = createClient();

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadCourses() {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("courses")
      .select("id, title, description, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading courses:", error);
      setMessage("Unable to load courses.");
      setLoading(false);
      return;
    }

    setCourses(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <main className="my-courses-page">

      {/* NAVBAR */}
      <nav className="my-courses-navbar">

        <div className="my-courses-logo">
          🎓
          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>
        </div>

        <div className="my-courses-nav">

          <Link
            href="/student"
            className="student-home-btn"
          >
            🏠 Student Home
          </Link>

          <Link
            href="/"
            className="my-courses-logout"
          >
            Logout
          </Link>

        </div>

      </nav>

      {/* HERO */}
      <section className="my-courses-hero">

        <div className="my-courses-hero-content">

          <span className="my-courses-label">
            🎓 STUDENT LEARNING CENTER
          </span>

          <h1>
            My Courses
          </h1>

          <p>
            Access your courses, continue learning and
            track your academic progress.
          </p>

        </div>

      </section>

      {/* MAIN */}
      <section className="my-courses-container">

        {/* HEADING */}
        <div className="my-courses-heading">

          <div>
            <span>
              YOUR LEARNING
            </span>

            <h2>
              Available Courses
            </h2>

            <p>
              Select a course to continue your studies.
            </p>
          </div>

          <div className="course-total">
            {courses.length}{" "}
            {courses.length === 1 ? "Course" : "Courses"}
          </div>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="learning-tip">
            <div className="learning-tip-icon">
              ⏳
            </div>

            <div>
              <span>
                LOADING
              </span>

              <h2>
                Loading Courses...
              </h2>

              <p>
                Please wait while we load your courses.
              </p>
            </div>
          </div>
        )}

        {/* ERROR */}
        {!loading && message && (
          <div className="learning-tip">
            <div className="learning-tip-icon">
              ⚠️
            </div>

            <div>
              <span>
                ERROR
              </span>

              <h2>
                Unable to Load Courses
              </h2>

              <p>
                {message}
              </p>
            </div>
          </div>
        )}

        {/* NO COURSES */}
        {!loading && !message && courses.length === 0 && (
          <div className="learning-tip">
            <div className="learning-tip-icon">
              📚
            </div>

            <div>
              <span>
                YOUR LEARNING
              </span>

              <h2>
                No Courses Available
              </h2>

              <p>
                No courses have been added yet. Please check again
                later.
              </p>
            </div>
          </div>
        )}

        {/* COURSE GRID */}
        {!loading && !message && courses.length > 0 && (
          <div className="my-course-grid">

            {courses.map((course) => (

              <article
                key={course.id}
                className="my-course-card"
              >

                {/* CARD HEADER */}
                <div className="my-course-card-header">

                  <div className="my-course-icon">
                    📚
                  </div>

                  <div className="my-course-class">
                    Course
                  </div>

                </div>

                {/* COURSE CONTENT */}
                <div className="my-course-content">

                  <span className="my-course-subject">
                    EP APPEC REMERA RUKOMA
                  </span>

                  <h3>
                    {course.title}
                  </h3>

                  <p>
                    {course.description ||
                      "Continue learning this course through lessons, exercises and assessments."}
                  </p>

                  {/* COURSE INFORMATION */}
                  <div className="my-course-teacher">

                    <div className="teacher-icon">
                      🎓
                    </div>

                    <div>
                      <span>
                        Course
                      </span>

                      <strong>
                        {course.title}
                      </strong>
                    </div>

                  </div>

                  {/* LESSON INFORMATION */}
                  <div className="my-course-progress">

                    <div className="my-course-progress-top">

                      <span>
                        Learning Progress
                      </span>

                      <strong>
                        New
                      </strong>

                    </div>

                    <div className="my-course-progress-bar">

                      <div
                        className="my-course-progress-fill"
                        style={{
                          width: "0%",
                        }}
                      />

                    </div>

                    <p>
                      Start this course to begin learning.
                    </p>

                  </div>

                </div>

                {/* CARD FOOTER */}
                <div className="my-course-card-footer">

                  <Link
                    href={`/student/courses/${course.id}`}
                    className="continue-course-btn"
                  >
                    Continue Learning →
                  </Link>

                </div>

              </article>

            ))}

          </div>
        )}

        {/* LEARNING TIP */}
        <section className="learning-tip">

          <div className="learning-tip-icon">
            💡
          </div>

          <div>

            <span>
              LEARNING TIP
            </span>

            <h2>
              Keep Learning Every Day
            </h2>

            <p>
              Regular practice helps you understand your subjects
              better. Complete your lessons and exercises step by
              step to improve your performance.
            </p>

          </div>

        </section>

      </section>

      {/* FOOTER */}
      <footer className="my-courses-footer">
        © 2026 EP APPEC Remera Rukoma. All Rights Reserved.
      </footer>

    </main>
  );
}