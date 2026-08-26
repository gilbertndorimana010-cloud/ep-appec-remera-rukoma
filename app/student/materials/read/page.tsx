"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function PDFReaderContent() {
  const searchParams = useSearchParams();

  const fileUrl = searchParams.get("url") || "";
  const title = searchParams.get("title") || "Learning Material";

  if (!fileUrl) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          padding: "30px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#123c69" }}>Unable to open material</h1>

          <p style={{ color: "#666" }}>
            The learning material file could not be found.
          </p>

          <Link
            href="/student/materials"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "#123c69",
              color: "white",
              padding: "11px 18px",
              borderRadius: "7px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ← Back to Learning Materials
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef2f7",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#123c69",
          color: "white",
          padding: "15px 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "22px",
            }}
          >
            📚 EP APPEC PDF Reader
          </h1>

          <p
            style={{
              margin: "5px 0 0",
              opacity: 0.9,
              fontSize: "14px",
            }}
          >
            {title}
          </p>
        </div>

        <Link
          href="/student/materials"
          style={{
            background: "white",
            color: "#123c69",
            padding: "9px 15px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Materials
        </Link>
      </header>

      <section
        style={{
          width: "100%",
          height: "calc(100vh - 91px)",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <iframe
          src={fileUrl}
          title={title}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
            background: "white",
          }}
        />
      </section>
    </main>
  );
}

export default function PDFReaderPage() {
  return (
    <Suspense
      fallback={
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f4f7fb",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <p style={{ color: "#123c69", fontSize: "18px" }}>
            Opening learning material...
          </p>
        </main>
      }
    >
      <PDFReaderContent />
    </Suspense>
  );
}