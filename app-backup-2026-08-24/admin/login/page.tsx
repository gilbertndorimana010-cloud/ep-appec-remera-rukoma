"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    // Temporary admin login
    if (username === "admin" && password === "Admin@123") {
      sessionStorage.setItem("adminLoggedIn", "true");
      router.push("/admin");
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{ fontSize: "45px" }}>🎓</div>

          <h1
            style={{
              margin: "10px 0 5px",
              color: "#123c69",
              fontSize: "26px",
            }}
          >
            EP APPEC Remera Rukoma
          </h1>

          <p style={{ color: "#666", margin: 0 }}>
            Administrator Login
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <label
            htmlFor="username"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Username
          </label>

          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <label
            htmlFor="password"
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          {error && (
            <p
              style={{
                color: "#d32f2f",
                background: "#ffebee",
                padding: "10px",
                borderRadius: "6px",
                marginBottom: "20px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              background: "#123c69",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <a
            href="/"
            style={{
              color: "#123c69",
              textDecoration: "none",
            }}
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </main>
  );
}