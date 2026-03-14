"use client";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section style={{ padding: "50px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        My Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              padding: "20px",
              borderRadius: "12px",
              background: "#1e293b",
              color: "white",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              style={{ color: "#38bdf8" }}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}