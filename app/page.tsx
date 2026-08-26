import Link from "next/link";

const categories = [
  {
    name: "Mathematics",
    description: "Numbers, calculations, geometry and problem solving.",
    icon: "M",
  },
  {
    name: "English",
    description: "Reading, writing, grammar and communication skills.",
    icon: "E",
  },
  {
    name: "Kinyarwanda",
    description: "Language, reading, writing and communication.",
    icon: "K",
  },
  {
    name: "Science",
    description: "Science, health, nature and the environment.",
    icon: "S",
  },
  {
    name: "Social Studies",
    description: "History, geography, society and citizenship.",
    icon: "SS",
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f6f8",
        color: "#333",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* ================= HEADER ================= */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* SCHOOL LOGO / BRAND */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "6px",
                background: "#123c69",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "800",
                fontSize: "19px",
                border: "3px solid #e6eef6",
              }}
            >
              EP
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  color: "#123c69",
                  fontSize: "19px",
                }}
              >
                EP APPEC
              </strong>

              <span
                style={{
                  display: "block",
                  color: "#666",
                  fontSize: "13px",
                  marginTop: "2px",
                }}
              >
                Remera Rukoma E-Learning Platform
              </span>
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#home"
              style={{
                color: "#123c69",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              Home
            </a>

            <Link
              href="/student"
              style={{
                color: "#444",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Student Dashboard
            </Link>

            <Link
              href="/teacher"
              style={{
                color: "#444",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Teacher Dashboard
            </Link>

            <Link
              href="/admin"
              style={{
                color: "#444",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Admin Dashboard
            </Link>

            <Link
              href="/login"
              style={{
                background: "#123c69",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              Log in
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <div
        id="home"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "28px 24px 45px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px minmax(0, 1fr)",
            gap: "25px",
            alignItems: "start",
          }}
        >
          {/* ================= LEFT SIDEBAR ================= */}
          <aside
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#123c69",
                color: "#fff",
                padding: "16px 18px",
                fontSize: "17px",
                fontWeight: "700",
              }}
            >
              Course categories
            </div>

            {categories.map((category) => (
              <a
                key={category.name}
                href={`#${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                style={{
                  display: "block",
                  padding: "14px 18px",
                  borderBottom: "1px solid #eee",
                  color: "#444",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                {category.name}
              </a>
            ))}

            <Link
              href="/student/courses"
              style={{
                display: "block",
                padding: "15px 18px",
                color: "#123c69",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "14px",
              }}
            >
              All courses ...
            </Link>
          </aside>

          {/* ================= CONTENT ================= */}
          <section>
            {/* TITLE */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "32px",
                marginBottom: "22px",
              }}
            >
              <div
                style={{
                  color: "#777",
                  fontSize: "13px",
                  marginBottom: "8px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                EP APPEC REMERA RUKOMA
              </div>

              <h1
                style={{
                  margin: "0 0 12px",
                  color: "#123c69",
                  fontSize: "30px",
                  lineHeight: "1.25",
                }}
              >
                EP APPEC Remera Rukoma E-Learning Platform
              </h1>

              <p
                style={{
                  margin: 0,
                  color: "#666",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                Welcome to our digital learning platform. Access your
                courses, lessons, learning materials, assignments and
                educational resources.
              </p>
            </div>

            {/* SEARCH */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "22px",
                marginBottom: "25px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 15px",
                  color: "#333",
                  fontSize: "21px",
                }}
              >
                Search courses
              </h2>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  maxWidth: "700px",
                }}
              >
                <input
                  type="search"
                  placeholder="Search courses..."
                  style={{
                    flex: 1,
                    padding: "12px 14px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />

                <Link
                  href="/student/courses"
                  style={{
                    background: "#123c69",
                    color: "#fff",
                    padding: "12px 20px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  Search
                </Link>
              </div>
            </div>

            {/* COURSE CATEGORIES */}
            <div>
              <h2
                style={{
                  margin: "0 0 6px",
                  color: "#333",
                  fontSize: "24px",
                }}
              >
                Course categories
              </h2>

              <p
                style={{
                  margin: "0 0 18px",
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                Select a subject to continue learning.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(210px, 1fr))",
                  gap: "16px",
                }}
              >
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    id={category.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}
                    href="/student/courses"
                    style={{
                      background: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      padding: "22px",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "5px",
                        background: "#e8f0f8",
                        color: "#123c69",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "800",
                        fontSize: "14px",
                        marginBottom: "14px",
                      }}
                    >
                      {category.icon}
                    </div>

                    <h3
                      style={{
                        margin: "0 0 8px",
                        color: "#123c69",
                        fontSize: "18px",
                      }}
                    >
                      {category.name}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#777",
                        fontSize: "13px",
                        lineHeight: "1.5",
                      }}
                    >
                      {category.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        style={{
          background: "#fff",
          borderTop: "1px solid #ddd",
          padding: "32px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              margin: "0 0 16px",
              color: "#123c69",
              fontSize: "22px",
            }}
          >
            Contact
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "25px",
              color: "#555",
              fontSize: "14px",
            }}
          >
            <span>Remera Rukoma, Rwanda</span>
            <span>Email: epappec@gmail.com</span>
            <span>Phone: 0792441035</span>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          background: "#123c69",
          color: "#fff",
          padding: "25px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            fontSize: "13px",
          }}
        >
          <div>
            <strong>EP APPEC Remera Rukoma</strong>

            <div style={{ marginTop: "5px", opacity: 0.8 }}>
              E-Learning Platform
            </div>
          </div>

          <div style={{ opacity: 0.85 }}>
            District Kamonyi · Sector Rukoma
          </div>

          <div style={{ opacity: 0.85 }}>
            <div style={{ opacity: 0.85 }}>
  © 2026 EP APPEC Remera Rukoma
  <div style={{ marginTop: "5px" }}>
    Developed by NDORIMANA Gilbert
  </div>
</div>

            <div style={{ marginTop: "5px" }}>
              Developed by NDORIMANA Gilbert
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}