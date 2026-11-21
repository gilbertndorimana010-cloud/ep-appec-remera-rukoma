"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

type Course = {
  id: string;
  title: string;
  description: string | null;
  class_name: string | null;
  created_at: string;
};

export default function MyCoursesPage() {
  const supabase = createClient();

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [studentClass, setStudentClass] = useState("");

  async function loadCourses() {
    setLoading(true);
    setMessage("");

    try {
      // Get the currently signed-in student
      const { data: authData, error: authError } =
        await supabase.auth.getUser();

      if (authError || !authData.user?.email) {
        setMessage("Please sign in to view your courses.");
        setLoading(false);
        return;
      }

      // Find the student's registered class
      const { data: student, error: studentError } = await supabase
        .from("students")
        .select("full_name, class_name")
        .eq("email", authData.user.email)
        .maybeSingle();

      if (studentError) {
        console.error("Student lookup error:", studentError);
        setMessage("Unable to identify your student account.");
        setLoading(false);
        return;
      }

      if (!student || !student.class_name) {
        setMessage(
          "Your class has not been assigned yet. Please contact the administrator."
        );
        setLoading(false);
        return;
      }

      setStudentClass(student.class_name);

      // Load only courses assigned to this student's class
      const { data, error } = await supabase
        .from("courses")
        .select("id, title, description, class_name, created_at")
        .eq("class_name", student.class_name)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading courses:", error);
        setMessage("Unable to load courses.");
        setLoading(false);
        return;
      }

      setCourses(data || []);
    } catch (error) {
      console.error("Unexpected error:", error);
      setMessage("Something went wrong while loading your courses.");
    }

    setLoading(false);
  }

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <main className="my-courses-page">
      <nav className="my-courses-navbar">
        <div className="my-courses-logo">
          <div>
            <strong>EP APPEC</strong>
            <span>Remera Rukoma</span>
          </div>
        </div>

        <div className="my-courses-nav">
          <Link href="/student" className="student-home-btn">
            Student Home
          </Link>

          <Link href="/login" className="my-courses-logout">
            Logout
          </Link>
        </div>
      </nav>

      <section className="my-courses-hero">
        <div className="my-courses-hero-content">
          <span className="my-courses-label">
            STUDENT LEARNING CENTER
          </span>

          <h1>My Courses</h1>

          <p>
            Access your courses, continue learning and track your academic
            progress.
          </p>
        </div>
      </section>

      <section className="my-courses-container">
        <div className="my-courses-heading">
          <div>
            <span>YOUR LEARNING</span>

            <h2>Available Courses</h2>

            <p>
              Select a course to continue your studies.
            </p>

            {studentClass && (
              <p>
                Your assigned class: <strong>{studentClass}</strong>
              </p>
            )}
          </div>

          <div className="course-total">
            {courses.length}{" "}
            {courses.length === 1 ? "Course" : "Courses"}
          </div>
        </div>

        {loading && (
          <div className="learning-tip">
            <div className="learning-tip-icon">...</div>
            <div>
              <span>LOADING</span>
              <h2>Loading Your Courses...</h2>
              <p>Please wait while we load your class courses.</p>
            </div>
          </div>
        )}

        {!loading && message && (
          <div className="learning-tip">
            <div className="learning-tip-icon">!</div>
            <div>
              <span>NOTICE</span>
              <h2>Unable to Display Courses</h2>
              <p>{message}</p>
              {message.includes("sign in") && (
                <Link href="/login">Sign in here</Link>
              )}
            </div>
          </div>
        )}

        {!loading && !message && courses.length === 0 && (
          <div className="learning-tip">
            <div className="learning-tip-icon">Books</div>
            <div>
              <span>YOUR LEARNING</span>
              <h2>No Courses Available</h2>
              <p>
                No courses have been added for your class yet.
                Please check again later.
              </p>
            </div>
          </div>
        )}

        {!loading && !message && courses.length > 0 && (
          <div className="my-course-grid">
            {courses.map((course) => (
              <article
                key={course.id}
                className="my-course-card"
              >
                <div className="my-course-card-header">
                  <div className="my-course-icon">Books</div>

                  <div className="my-course-class">
                    {course.class_name || studentClass}
                  </div>
                </div>

                <div className="my-course-content">
                  <span className="my-course-subject">
                    EP APPEC REMERA RUKOMA
                  </span>

                  <h3>{course.title}</h3>

                  <p>
                    {course.description ||
                      "Continue learning through lessons, exercises and assessments."}
                  </p>

                  <div className="my-course-teacher">
                    <div className="teacher-icon">Course</div>
                    <div>
                      <span>Subject</span>
                      <strong>{course.title}</strong>
                    </div>
                  </div>

                  <div className="my-course-progress">
                    <div className="my-course-progress-top">
                      <span>Learning Progress</span>
                      <strong>New</strong>
                    </div>

                    <div className="my-course-progress-bar">
                      <div
                        className="my-course-progress-fill"
                        style={{ width: "0%" }}
                      />
                    </div>

                    <p>Start this course to begin learning.</p>
                  </div>
                </div>

                <div className="my-course-card-footer">
                  <Link
                    href={`/student/courses/${course.id}`}
                    className="continue-course-btn"
                  >
                    Continue Learning
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <section className="learning-tip">
          <div className="learning-tip-icon">Tip</div>
          <div>
            <span>LEARNING TIP</span>
            <h2>Keep Learning Every Day</h2>
            <p>
              Regular practice helps you understand your subjects
              better. Complete your lessons and exercises step by
              step to improve your performance.
            </p>
          </div>
        </section>
      </section>

      <footer className="my-courses-footer">
        Copyright 2026 EP APPEC Remera Rukoma. All Rights Reserved.
      </footer>
    </main>
  );
}