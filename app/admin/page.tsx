
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../../utils/supabase/client";

export default function AdminDashboardPage() {
  const supabase = createClient();

  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCounts() {
      setLoading(true);

      const [
        studentsResult,
        teachersResult,
        coursesResult,
      ] = await Promise.all([
        supabase
          .from("students")
          .select("*", { count: "exact", head: true }),

        supabase
          .from("teachers")
          .select("*", { count: "exact", head: true }),

        supabase
          .from("courses")
          .select("*", { count: "exact", head: true }),
      ]);

      if (!studentsResult.error) {
        setStudentCount(studentsResult.count || 0);
      }

      if (!teachersResult.error) {
        setTeacherCount(teachersResult.count || 0);
      }

      if (!coursesResult.error) {
        setCourseCount(coursesResult.count || 0);
      }

      setLoading(false);
    }

    loadCounts();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          maxWidth: "1150px",
          margin: "0 auto 35px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "#123c69",
              fontSize: "32px",
            }}
          >
            🛠️ Admin Dashboard
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            EP APPEC Remera Rukoma E-Learning Platform
          </p>
        </div>

        <Link
          href="/"
          style={{
            background: "#123c69",
            color: "white",
            textDecoration: "none",
            padding: "11px 18px",
            borderRadius: "6px",
          }}
        >
          ← Website
        </Link>
      </header>

      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        {/* STAT CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <StatCard
            title="Students"
            value={loading ? "..." : String(studentCount)}
            icon="👨‍🎓"
          />

          <StatCard
            title="Teachers"
            value={loading ? "..." : String(teacherCount)}
            icon="👨‍🏫"
          />

          <StatCard
            title="Courses"
            value={loading ? "..." : String(courseCount)}
            icon="📚"
          />

          <StatCard
            title="Platform"
            value="Active"
            icon="🌐"
          />
        </div>

        {/* MANAGEMENT */}
        <div
          style={{
            background: "white",
            padding: "28px",
            borderRadius: "12px",
            boxShadow: "0 3px 15px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            style={{
              color: "#123c69",
              marginTop: 0,
            }}
          >
            Management
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "18px",
            }}
          >
            <ManagementCard
              href="/admin/students"
              icon="👨‍🎓"
              title="Manage Students"
              description="Add, view and remove students."
            />

            <ManagementCard
              href="/admin/teachers"
              icon="👨‍🏫"
              title="Manage Teachers"
              description="Add, view and remove teachers."
            />

            <ManagementCard
              href="/admin/courses"
              icon="📚"
              title="Manage Courses"
              description="Create and manage learning courses."
            />

            <ManagementCard
              href="/admin/lessons"
              icon="📖"
              title="Manage Lessons"
              description="Create and manage lessons."
            />

            <ManagementCard
              href="/admin/assignments"
              icon="📝"
              title="Assignments"
              description="Create and manage assignments."
            />

            <ManagementCard
              href="/admin/quizzes"
              icon="❓"
              title="Quizzes"
              description="Create and manage quizzes."
            />

            <ManagementCard
              href="/admin/materials"
              icon="📚"
              title="Learning Materials"
              description="Upload and manage books, PDFs, photos and videos."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          maxWidth: "1150px",
          margin: "40px auto 0",
          textAlign: "center",
          color: "#777",
          fontSize: "14px",
        }}
      >
        © 2026 EP APPEC Remera Rukoma · District Kamonyi · Sector Rukoma
      </footer>
    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 3px 15px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          marginBottom: "12px",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          color: "#666",
          fontSize: "15px",
          marginBottom: "5px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#123c69",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function ManagementCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        padding: "20px",
        transition: "0.2s",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          marginBottom: "10px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#123c69",
          margin: "0 0 8px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#777",
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
    </Link>
  );
}

