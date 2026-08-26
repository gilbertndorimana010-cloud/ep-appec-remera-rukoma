"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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

const MAX_FILE_SIZE = 500 * 1024 * 1024;

export default function AdminMaterialsPage() {
  const supabase = createClient();

  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [className, setClassName] = useState("");
  const [materialType, setMaterialType] = useState("Book");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
    } else {
      setMaterials(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadMaterials();
  }, []);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null;

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setMessage("The file is too large. Maximum size is 500 MB.");
      event.target.value = "";
      setSelectedFile(null);
      return;
    }

    setMessage("");
    setSelectedFile(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setMessage("Please enter a title.");
      return;
    }

    if (!selectedFile) {
      setMessage("Please select a file.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setMessage("The file is too large. Maximum size is 500 MB.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const fileExtension =
        selectedFile.name.split(".").pop()?.toLowerCase() || "file";

      const safeFileName = selectedFile.name
        .replace(/[^a-zA-Z0-9._-]/g, "_")
        .replace(/\s+/g, "_");

      const filePath = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}-${safeFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("learning-materials")
        .upload(filePath, selectedFile, {
          cacheControl: "3600",
          upsert: false,
          contentType: selectedFile.type || undefined,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        setMessage(`Upload failed: ${uploadError.message}`);
        setUploading(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("learning-materials")
        .getPublicUrl(filePath);

      const fileUrl = publicUrlData.publicUrl;

      const { error: databaseError } = await supabase
        .from("learning_materials")
        .insert({
          title: title.trim(),
          description: description.trim() || null,
          subject: subject.trim() || null,
          class_name: className.trim() || null,
          material_type: materialType,
          file_url: fileUrl,
          file_name: selectedFile.name,
        });

      if (databaseError) {
        console.error("Database error:", databaseError);

        await supabase.storage
          .from("learning-materials")
          .remove([filePath]);

        setMessage(`Unable to save material: ${databaseError.message}`);
        setUploading(false);
        return;
      }

      setTitle("");
      setDescription("");
      setSubject("");
      setClassName("");
      setMaterialType("Book");
      setSelectedFile(null);

      const fileInput = document.getElementById(
        "material-file"
      ) as HTMLInputElement | null;

      if (fileInput) {
        fileInput.value = "";
      }

      setMessage("Material uploaded successfully.");

      await loadMaterials();
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong while uploading the material.");
    }

    setUploading(false);
  }

  async function handleDelete(material: Material) {
    const confirmed = window.confirm(
      `Delete "${material.title}"? This cannot be undone.`
    );

    if (!confirmed) {
      return;
    }

    setMessage("");

    try {
      const fileName = material.file_url.split("/").pop();

      if (fileName) {
        await supabase.storage
          .from("learning-materials")
          .remove([decodeURIComponent(fileName)]);
      }

      const { error } = await supabase
        .from("learning_materials")
        .delete()
        .eq("id", material.id);

      if (error) {
        console.error("Delete error:", error);
        setMessage(`Unable to delete material: ${error.message}`);
        return;
      }

      setMessage("Material deleted successfully.");
      await loadMaterials();
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong while deleting the material.");
    }
  }

  function formatFileSize(fileSize: string | null) {
    if (!fileSize) {
      return "";
    }

    return fileSize;
  }

  function getMaterialIcon(type: string) {
    switch (type.toLowerCase()) {
      case "book":
        return "📚";
      case "pdf":
        return "📄";
      case "photo":
        return "🖼️";
      case "video":
        return "🎬";
      default:
        return "📁";
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
      }}
    >
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto 30px",
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

          <p style={{ color: "#666", marginTop: "8px" }}>
            Upload books, PDFs, photos and videos for students.
          </p>
        </div>

        <Link
          href="/admin"
          style={{
            background: "#123c69",
            color: "white",
            textDecoration: "none",
            padding: "11px 18px",
            borderRadius: "6px",
          }}
        >
          ← Admin Dashboard
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
            padding: "28px",
            borderRadius: "12px",
            boxShadow: "0 3px 15px rgba(0,0,0,0.06)",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#123c69",
            }}
          >
            Upload Learning Material
          </h2>

          <p
            style={{
              color: "#666",
              marginBottom: "20px",
            }}
          >
            Maximum file size: <strong>500 MB</strong>.
          </p>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "18px",
              }}
            >
              <div>
                <label>
                  <strong>Title</strong>
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Example: Mathematics Book"
                  style={inputStyle}
                />
              </div>

              <div>
                <label>
                  <strong>Material Type</strong>
                </label>

                <select
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value)}
                  style={inputStyle}
                >
                  <option value="Book">Book</option>
                  <option value="PDF">PDF</option>
                  <option value="Photo">Photo</option>
                  <option value="Video">Video</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label>
                  <strong>Subject</strong>
                </label>

                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Example: Mathematics"
                  style={inputStyle}
                />
              </div>

              <div>
                <label>
                  <strong>Class</strong>
                </label>

                <input
                  type="text"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  placeholder="Example: Primary 6"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginTop: "18px" }}>
              <label>
                <strong>Description</strong>
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe this learning material..."
                rows={4}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ marginTop: "18px" }}>
              <label>
                <strong>File</strong>
              </label>

              <input
                id="material-file"
                type="file"
                onChange={handleFileChange}
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: "8px",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  background: "#fafafa",
                }}
              />

              {selectedFile && (
                <p style={{ color: "#555", marginTop: "8px" }}>
                  Selected: <strong>{selectedFile.name}</strong>
                  {" — "}
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={uploading}
              style={{
                marginTop: "20px",
                background: uploading ? "#999" : "#123c69",
                color: "white",
                border: "none",
                padding: "13px 22px",
                borderRadius: "7px",
                cursor: uploading ? "not-allowed" : "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {uploading ? "Uploading..." : "Upload Material"}
            </button>
          </form>

          {message && (
            <div
              style={{
                marginTop: "20px",
                padding: "14px",
                background: "#f5f7fa",
                border: "1px solid #ddd",
                borderRadius: "8px",
                color: "#333",
              }}
            >
              {message}
            </div>
          )}
        </div>

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
              marginTop: 0,
              color: "#123c69",
            }}
          >
            Uploaded Materials
          </h2>

          {loading ? (
            <p>Loading materials...</p>
          ) : materials.length === 0 ? (
            <p style={{ color: "#777" }}>
              No learning materials have been uploaded yet.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "18px",
              }}
            >
              {materials.map((material) => (
                <div
                  key={material.id}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "35px",
                      marginBottom: "10px",
                    }}
                  >
                    {getMaterialIcon(material.material_type)}
                  </div>

                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#666",
                    }}
                  >
                    {material.material_type.toUpperCase()}
                  </span>

                  <h3
                    style={{
                      color: "#123c69",
                      margin: "8px 0",
                    }}
                  >
                    {material.title}
                  </h3>

                  {material.description && (
                    <p
                      style={{
                        color: "#666",
                        lineHeight: 1.5,
                      }}
                    >
                      {material.description}
                    </p>
                  )}

                  <div
                    style={{
                      color: "#777",
                      fontSize: "14px",
                      marginBottom: "15px",
                    }}
                  >
                    {material.subject && (
                      <div>📘 Subject: {material.subject}</div>
                    )}

                    {material.class_name && (
                      <div>🎓 Class: {material.class_name}</div>
                    )}

                    {material.file_name && (
                      <div>📎 {material.file_name}</div>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href={material.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#123c69",
                        color: "white",
                        textDecoration: "none",
                        padding: "9px 14px",
                        borderRadius: "6px",
                      }}
                    >
                      Open
                    </a>

                    <button
                      onClick={() => handleDelete(material)}
                      style={{
                        background: "#b42318",
                        color: "white",
                        border: "none",
                        padding: "9px 14px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer
        style={{
          maxWidth: "1200px",
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

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  marginTop: "8px",
  padding: "11px",
  border: "1px solid #ddd",
  borderRadius: "7px",
  fontSize: "15px",
  boxSizing: "border-box",
};