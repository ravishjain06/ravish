import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const theme = {
  bg: "#fafafa",
  cardBg: "#ffffff",
  border: "#e5e7eb",
  accent: "#3b82f6",
  accentLight: "#dbeafe",
  text: "#111827",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  shadow: "rgba(0, 0, 0, 0.04)",
  shadowHover: "rgba(0, 0, 0, 0.12)"
};

const ProjectSection = ({ title, description, images, bullets, link, tags }) => {
  const containerRef = React.useRef(null);

  return (
    <section
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "120vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "32px 0",
        gap: "28px",
      }}
    >
      {/* LEFT: RECTANGLE CARD */}
      <div
        style={{
          width: "40%",
          position: "sticky",
          top: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            background: theme.cardBg,
            borderRadius: "18px",
            boxShadow: `0 4px 24px ${theme.shadowHover}`,
            padding: "32px 28px",
            width: "100%",
            marginBottom: "24px",
            border: `1px solid ${theme.border}`,
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "8px",
              color: theme.text,
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "1.08rem",
              color: theme.textSecondary,
              marginBottom: "12px",
              lineHeight: "1.7",
            }}
          >
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              background: theme.accent,
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "0.98rem",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(59,130,246,0.08)",
              border: "none",
              letterSpacing: "0.2px",
            }}
          >
            View Project
          </a>
        </div>
        {/* Bullet points and tags below the card */}
        <ul
          style={{
            marginBottom: "10px",
            paddingLeft: "16px",
            color: theme.text,
            fontSize: "0.98rem",
            lineHeight: "1.7",
          }}
        >
          {bullets && bullets.map((b, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: "7px",
                color: theme.textSecondary,
                listStyle: "disc",
              }}
            >
              {b}
            </li>
          ))}
        </ul>
        {tags && (
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  padding: "7px 18px",
                  borderRadius: "20px",
                  background: theme.accentLight,
                  color: theme.accent,
                  fontSize: "0.98rem",
                  border: `1px solid ${theme.accent}`,
                  marginBottom: "6px",
                  display: "inline-block",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* RIGHT: IMAGES WITH EQUAL GAP */}
      <div
        style={{
          width: "54%",
          paddingLeft: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "44vh",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
              marginBottom: "0px",
            }}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Projects() {
  return (
    <section
      className="w-full py-8 px-2 sm:px-4 md:px-8"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight"
            style={{ color: theme.text }}
          >
            Projects & Case Studies
          </h2>
          <p
            className="text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: theme.textSecondary }}
          >
            Explore a selection of my professional work, including modern platforms, e-commerce experiences, and minimal blog solutions. Each project demonstrates my focus on clean UI, performance, and best practices.
          </p>
        </motion.div>

        <ProjectSection
          title="Movya AI Platform"
          description="An advanced AI platform for enterprise solutions, featuring real-time analytics, secure authentication, and seamless integration."
          bullets={[
            "⚡ Fast and scalable architecture",
            "🔒 Secure authentication and user management",
            "📊 Real-time analytics dashboard",
            "🧠 Integrates with multiple AI models",
          ]}
          images={[
            "/public/Movya-ai1.png",
            "/public/Movya-ai2.png",
                       "/public/Movya-Attendace4.png",

          ]}
          link="https://example.com/movya-ai"
        />

        <ProjectSection
          title="Movya Attendance System"
          description="A robust attendance management system with multi-device support, analytics, and a clean, minimal UI for HR and employees."
          bullets={[
            "🛡️ Secure attendance tracking",
            "📱 Mobile and desktop support",
            "📊 Attendance analytics and reports",
            "🎨 Clean, minimal UI",
          ]}
          images={[
            "/public/Movya-Attendace1.png",
            "/public/Movya-Attendace2.png",
            "/public/Movya-Attendace5.png",
          ]}
          link="https://example.com/movya-attendance"
        />

        {/* Example third project, you can update/remove as needed */}
        <ProjectSection
          title="Blog Platform"
          description="A minimal blog platform with markdown support, user profiles, and smooth transitions. Designed for performance and readability."
          bullets={[
            "✍️ Markdown editor for posts",
            "👤 User profiles and comments",
            "🚀 Fast page loads and SEO optimized",
            "🎨 Clean, minimal UI",
          ]}
          images={[
            "/images/p3-1.jpg",
            "/images/p3-2.jpg",
          ]}
          link="https://example.com/project3"
        />
      </div>
    </section>
  );
}
