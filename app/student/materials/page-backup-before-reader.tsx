
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/client";

type Material = {
  id: string;
  title: string;
  description: string | null;
  subject: string | null;
  class_name: string | null;
  material_type: string;
  file_url: string;
  file_name: string | null;
  created_at: string;
};

export default function StudentMaterialsPage() {
  const supabase = createClient();

  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [subjectFilter, setSubjectFilter] = useState("All");

  async function loadMaterials() {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("learning_materials")
      .select(
        "id,title,description,subject,class_name,material_type,file_url,file_name,created_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading learning materials:", error);
      setMessage(`Unable to load materials: ${error.message}`);
      setMaterials([]);
    } else {
      setMaterials(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadMaterials();
  }, []);

  const classes = Array.from(
    new Set(
      materials
        .map((material) => material.class_name)
        .filter((value): value is string => Boolean(value))
    )
  ).sort();

  const subjects = Array.from(
    new Set(
      materials
        .map((material) => material.subject)
        .filter((value): value is string => Boolean(value))
    )
  ).sort();

  const filteredMaterials = materials.filter((material) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      !searchText ||
      material.title.toLowerCase().includes(searchText) ||
      material.description?.toLowerCase().includes(searchText) ||
      material.subject?.toLowerCase().includes(searchText) ||
      material.class_name?.toLowerCase().includes(searchText) ||
      material.file_name?.toLowerCase().includes(searchText);

    const matchesClass =
      classFilter === "All" || material.class_name === classFilter;

    const matchesSubject =
      subjectFilter === "All" || material.subject === subjectFilter;

    return matchesSearch && matchesClass && matchesSubject;
  });

  function getIcon(type: string) {
    switch (type.toLowerCase()) {
      case "book":
        return "📚";
      case "pdf":
        return "📄";
      case "photo":
        return "🖼️";
      case "video":
        return "🎥";
      default:
        return "📎";
    }
  }

  function getActionText(type: string) {
    switch (type.toLowerCase()) {
      case "video":
        return "Watch";
      case "photo":
        return "View";
      case "book":
      case "pdf":
        return "Read";
      default:
        return "Open";
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "25px",
      }}
    >
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto 25px",
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
            📚 Learning Materials
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
              fontSize: "16px",
            }}
          >
            Books, PDFs, photos and videos for your learning.
          </p>
        </div>

        <Link
          href="/student"
          style={{
            background: "#123c69",
            color: "white",
            textDecoration: "none",
            padding: "11px 18px",
            borderRadius: "7px",
            fontWeight: "bold",
          }}
        >
          ← Student Dashboard
        </Link>
      </header>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "22px",
            borderRadius: "12px",
            boxShadow: "0 3px 15px rgba(0,0,0,0.06)",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "minmax(240px, 2fr) minmax(180px, 1fr) minmax(180px, 1fr)",
              gap: "15px",
            }}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔎 Search materials..."
              style={{
                width: "100%",
                padding: "12px 14px",
                border: "1px solid #d9dee7",
                borderRadius: "8px",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />

            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d9dee7",
                borderRadius: "8px",
                fontSize: "15px",
                background: "white",
              }}
            >
              <option value="All">All Classes</option>

              {classes.map((className) => (
                <option key={className} value={className}>
                  {className}
                </option>
              ))}
            </select>

            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d9dee7",
                borderRadius: "8px",
                fontSize: "15px",
                background: "white",
              }}
            >
              <option value="All">All Subjects</option>

              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        {message && (
          <div
            style={{
              background: "#fff4e5",
              border: "1px solid #f0c36d",
              color: "#7a4b00",
              padding: "14px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            {message}
          </div>
        )}

        {loading ? (
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#666" }}>
              Loading learning materials...
            </p>
          </div>
        ) : filteredMaterials.length === 0 ? (
          <div
            style={{
              background: "white",
              padding: "50px 25px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 3px 15px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ fontSize: "55px" }}>📚</div>

            <h2 style={{ color: "#123c69" }}>
              No learning materials found
            </h2>

            <p style={{ color: "#777" }}>
              {materials.length === 0
                ? "Learning materials will appear here when the school uploads them."
                : "Try changing your search or filters."}
            </p>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "18px",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#123c69",
                }}
              >
                Available Materials
              </h2>

              <span
                style={{
                  color: "#666",
                  fontSize: "14px",
                }}
              >
                {filteredMaterials.length} material
                {filteredMaterials.length === 1 ? "" : "s"}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {filteredMaterials.map((material) => (
                <article
                  key={material.id}
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "22px",
                    boxShadow: "0 3px 15px rgba(0,0,0,0.06)",
                    border: "1px solid #e7ebf0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      fontSize: "45px",
                      marginBottom: "10px",
                    }}
                  >
                    {getIcon(material.material_type)}
                  </div>

                  <span
                    style={{
                      display: "inline-block",
                      alignSelf: "flex-start",
                      background: "#eef4fb",
                      color: "#123c69",
                      padding: "5px 9px",
                      borderRadius: "5px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {material.material_type.toUpperCase()}
                  </span>

                  <h3
                    style={{
                      margin: "3px 0 10px",
                      color: "#123c69",
                      fontSize: "20px",
                    }}
                  >
                    {material.title}
                  </h3>

                  {material.description && (
                    <p
                      style={{
                        color: "#666",
                        lineHeight: 1.5,
                        margin: "0 0 15px",
                      }}
                    >
                      {material.description}
                    </p>
                  )}

                  <div
                    style={{
                      color: "#666",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      marginBottom: "18px",
                    }}
                  >
                    {material.subject && (
                      <div>📘 <strong>Subject:</strong> {material.subject}</div>
                    )}

                    {material.class_name && (
                      <div>🎓 <strong>Class:</strong> {material.class_name}</div>
                    )}

                    {material.file_name && (
                      <div
                        style={{
                          overflowWrap: "anywhere",
                        }}
                      >
                        📎 <strong>File:</strong> {material.file_name}
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "auto",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href={material.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        minWidth: "100px",
                        textAlign: "center",
                        background: "#123c69",
                        color: "white",
                        textDecoration: "none",
                        padding: "11px 14px",
                        borderRadius: "7px",
                        fontWeight: "bold",
                      }}
                    >
                      📖 {getActionText(material.material_type)}
                    </a>

                    <a
                      href={material.file_url}
                      download={material.file_name || true}
                      style={{
                        flex: 1,
                        minWidth: "100px",
                        textAlign: "center",
                        background: "#eef4fb",
                        color: "#123c69",
                        textDecoration: "none",
                        padding: "11px 14px",
                        borderRadius: "7px",
                        fontWeight: "bold",
                      }}
                    >
                      ⬇️ Download
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>

      <footer
        style={{
          maxWidth: "1200px",
          margin: "45px auto 0",
          textAlign: "center",
          color: "#777",
          fontSize: "14px",
          paddingBottom: "15px",
        }}
      >
        © 2026 EP APPEC Remera Rukoma · District Kamonyi · Sector Rukoma
      </footer>
    </main>
  );
}

