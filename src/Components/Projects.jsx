import React, { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "./project.json";

const theme = {
  bg: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
  cardBg: "rgba(20,20,20,0.65)",
  border: "rgba(255,255,255,0.05)",
  accent: "#cfcfcf",
  accentLight: "rgba(200,200,200,0.08)",
  text: "#ffffff",
  textSecondary: "#d6d6d6",
  textMuted: "#9b9b9b",
  shadow: "rgba(0, 0, 0, 0.4)",
  shadowHover: "rgba(0, 0, 0, 0.6)"
};

// Simple carousel for mobile
function ImageCarousel({ images, imgHeight = 260 }) {
  const [current, setCurrent] = useState(0);

  // Auto-scroll effect
  React.useEffect(() => {
    if (!images || images.length < 2) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;
  return (
    <div style={{ position: "relative", width: "100%", marginBottom: "18px" }}>
      <img
        src={images[current]}
        alt=""
        style={{
          width: "100%",
          height: `${imgHeight}px`,
          objectFit: "cover",
          borderRadius: "18px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
        }}
      />

      {/* Controls positioned below the image */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "12px",
            padding: "0 4px",
          }}
        >
          {/* Centered arrow buttons */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              style={{
                background: "rgba(20,20,20,0.85)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((current + 1) % images.length)}
              style={{
                background: "rgba(20,20,20,0.85)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* Right: Dots */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {images.map((_, idx) => (
              <span
                key={idx}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: idx === current ? "#fff" : "rgba(20,20,20,0.85)",
                  opacity: idx === current ? 1 : 0.7,
                  transition: "background 0.2s",
                  display: "inline-block",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                  border: idx === current ? "1px solid #fff" : "1px solid #888",
                }}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Responsive Project Section
const ProjectSection = ({ title, description, images, bullets, link, tech }) => {
  // Responsive for mobile and all iPads (including iPad Pro)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1024 // iPad Pro width is 1024px, so include it
  );

  React.useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile & Tablet & iPad Pro layout: carousel + content below
  if (isMobileOrTablet) {
    // Detect tablet (iPad Air/Mini/Pro)
    const width = window.innerWidth;
    const isTablet = width >= 600 && width <= 1024;
    const isMobile = width < 600;

    let imgHeight = 260; // default
    if (isTablet) imgHeight = 620; // tablet height
    if (isMobile) imgHeight = 260; // mobile height

    return (
      <section style={{ width: "100%", padding: "24px 0", marginBottom: "16px" }}>
        <ImageCarousel
          images={images}
          imgHeight={imgHeight}
        />
        <div style={{ padding: "0 8px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "400", color: theme.text, marginBottom: "10px" }}>{title}</h2>
          <p style={{ color: theme.textSecondary, fontSize: "1rem", marginBottom: "12px" }}>{description}</p>
          <ul style={{ marginBottom: "12px", paddingLeft: "18px", color: theme.textSecondary }}>
            {bullets.map((b, idx) => (
              <li key={idx} style={{ marginBottom: "6px" }}>{b}</li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
            {tech.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: theme.accentLight,
                  color: theme.accent,
                  border: `1px solid ${theme.accent}`,
                  fontSize: "0.92rem",
                  fontWeight: "500",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "8px",
              padding: "8px 22px",
              background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "500",
              textDecoration: "none",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            View Project
          </a>
        </div>
      </section>
    );
  }

  // Desktop layout: original
  return (
    <section
      style={{
        width: "100%",
        minHeight: "120vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 0",
        gap: "40px",
      }}
    >
      {/* LEFT: Premium Card */}
      <div
        style={{
          width: "40%",
          position: "sticky",
          top: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            background: theme.cardBg,
            backdropFilter: "blur(18px)",
            borderRadius: "24px",
            border: `1px solid ${theme.border}`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.55)",
            padding: "40px 36px",
            width: "100%",
            marginBottom: "30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle platinum glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Neutral platinum button */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              padding: "10px 26px",
              background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "500",
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(0,0,0,0.4)",
            }}
          >
            View Project
          </a>

          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "400", // Changed from 600 to 400
              marginBottom: "12px",
              color: theme.text,
              letterSpacing: "-0.6px",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: "0.93rem", // Slightly reduced font size
              color: theme.textSecondary,
              lineHeight: "1.7",
              marginBottom: "14px",
            }}
          >
            {description}
            <br />
            Uses advanced AI models for insights, automates workflows, and ensures robust security. Seamless integrations and scalable architecture help organizations operate efficiently.
          </p>
        </div>

        {/* Bullet points */}
        <ul
          style={{
            margin: "18px 0 10px 0",
            paddingLeft: "16px",
            color: theme.text,
            fontSize: "1rem",
            lineHeight: "1.8",
          }}
        >
          {bullets.map((b, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: "8px",
                color: theme.textSecondary,
                listStyle: "disc",
              }}
            >
              {b}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "10px" }}>
          {tech.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              style={{
                padding: "8px 20px",
                borderRadius: "8px", // Changed from 22px to 8px for slightly rounded
                background: theme.accentLight,
                color: theme.accent,
                border: `1px solid ${theme.accent}`,
                fontSize: "0.95rem",
                fontWeight: "500",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT: Premium Images */}
      <div
        style={{
          width: "54%",
          display: "flex",
          flexDirection: "column",
          gap: "26px",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "60vh",
              borderRadius: "22px",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              background: "#0a0a0a",
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "filter 0.6s ease", // Only filter transition remains
              }}
            />

            {/* Premium glossy overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.65))",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projects = projectsData;
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects" // <-- Add this line
      className="w-full py-8 px-2 sm:px-4 md:px-8"
      style={{
        background: theme.bg,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-none">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            style={{
              color: theme.text,
              fontSize: "2.6rem",
              fontWeight: "700",
              letterSpacing: "-0.7px",
            }}
          >
            Featured Work
          </h2>
          <p
            style={{
              color: theme.textSecondary,
              maxWidth: "720px",
              margin: "0 auto",
              marginTop: "10px",
              fontSize: "1.1rem",
              lineHeight: "1.75",
            }}
          >
            Explore a curated selection of my work – crafted with precision, premium UI, and high-performance architecture.
          </p>
        </motion.div>

        {/* PROJECT SECTIONS */}
        {displayedProjects.map((project, idx) => (
          <div key={idx} style={{ marginBottom: "64px" /* Increased space after each project */ }}>
            <ProjectSection {...project} />
          </div>
        ))}

        {/* View More Button */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              style={{
                padding: "12px 32px",
                background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
                color: "#fff",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(0,0,0,0.4)",
                transition: "background 0.2s",
              }}
            >
              View More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
