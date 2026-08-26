import Link from "next/link";

export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#123c69",
          color: "white",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "24px" }}>
            EP APPEC Remera Rukoma
          </h1>
          <p style={{ margin: "5px 0 0", opacity: 0.85 }}>
            Admin Dashboard
          </p>
        </div>

        <Link
          href="/admin/login"
          style={{
            color: "white",
            textDecoration: "none",
            background: "#e74c3c",
            padding: "10px 18px",
            borderRadius: "6px",
          }}
        >
          Logout
        </Link>
      </header>

      <section style={{ padding: "40px" }}>
        <h2 style={{ color: "#123c69", marginBottom: "10px" }}>
          Welcome, Administrator
        </h2>

        <p style={{ color: "#555", marginBottom: "30px" }}>
          Manage the EP APPEC Remera Rukoma E-Learning Platform from here.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "35px",
          }}
        >
          <StatCard title="Students" value="0" />
          <StatCard title="Teachers" value="0" />
          <StatCard title="Courses" value="0" />
          <StatCard title="Lessons" value="0" />
        </div>

        <h2 style={{ color: "#123c69", marginBottom: "20px" }}>
          Management
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <ManagementLink
            href="/admin/students"
            icon="👨‍🎓"
            title="Manage Students"
          />

          <ManagementLink
            href="/admin/teachers"
            icon="👨‍🏫"
            title="Manage Teachers"
          />

          <ManagementLink
            href="/admin/courses"
            icon="📚"
            title="Manage Courses"
          />

          <ManagementLink
            href="/admin/lessons"
            icon="📖"
            title="Manage Lessons"
          />
        </div>
      </section>
    </main>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#123c69" }}>{title}</h3>
      <p style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
        {value}
      </p>
    </div>
  );
}

function ManagementLink({
  href,
  icon,
  title,
}: {
  href: string;
  icon: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      style={{
        padding: "25px",
        background: "white",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "17px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        textDecoration: "none",
        color: "#222",
        display: "block",
        textAlign: "center",
      }}
    >
      <span style={{ display: "block", fontSize: "30px", marginBottom: "10px" }}>
        {icon}
      </span>

      <strong>{title}</strong>
    </Link>
  );
}