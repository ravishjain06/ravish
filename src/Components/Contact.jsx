import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const theme = {
  bg: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
  border: "rgba(255,255,255,0.18)",
  accent: "#3b82f6",
  text: "#fff",
  textSecondary: "#b3b3b3",
};

const FloatingLabelInput = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  required,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative", marginBottom: "32px" }}>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={e => setFocused(!!e.target.value)}
        style={{
          width: "100%",
          padding: "14px 0 8px 0",
          fontSize: "1rem",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${theme.border}`,
          color: theme.text,
          outline: "none",
          transition: "border-color 0.2s",
        }}
        autoComplete="off"
      />
      <label
        htmlFor={name}
        style={{
          position: "absolute",
          left: 0,
          top: focused || value ? "-18px" : "12px",
          fontSize: focused || value ? "0.92rem" : "1rem",
          color: theme.textSecondary, // Removed accent blue
          fontWeight: 500,
          pointerEvents: "none",
          transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
          background: "transparent",
        }}
      >
        {label}
      </label>
    </div>
  );
};

const FloatingLabelTextarea = ({
  label,
  value,
  onChange,
  name,
  required,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative", marginBottom: "32px" }}>
      <textarea
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={e => setFocused(!!e.target.value)}
        style={{
          width: "100%",
          padding: "14px 0 8px 0",
          fontSize: "1rem",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${theme.border}`,
          color: theme.text,
          outline: "none",
          minHeight: "90px",
          resize: "vertical",
        }}
        autoComplete="off"
      />
      <label
        htmlFor={name}
        style={{
          position: "absolute",
          left: 0,
          top: focused || value ? "-18px" : "12px",
          fontSize: focused || value ? "0.92rem" : "1rem",
          color: theme.textSecondary, // Removed accent blue
          fontWeight: 500,
          pointerEvents: "none",
          transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
          background: "transparent",
        }}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const socialLinks = [
    { icon: FaLinkedin, url: "https://linkedin.com/in/ravishjain988" },
    { icon: FaGithub, url: "https://github.com/ravishjain988" },
    { icon: FaFacebook, url: "https://facebook.com/" },
    { icon: FaInstagram, url: "https://instagram.com/" },
    { icon: SiLeetcode, url: "https://leetcode.com/ravishjain988/" },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .contact-section {
            padding: 60px 32px !important; /* Proper spacing for iPad Pro from all sides */
          }
          .contact-container {
            gap: 48px !important;
            padding: 0 !important;
          }
          .contact-heading {
            font-size: 2.2rem !important; /* Reduced for iPad Air/Pro */
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 0 !important;
          }
          .contact-container {
            flex-direction: column !important;
            gap: 48px !important;
            padding: 0 24px !important;
          }
          .contact-left {
            padding-right: 0 !important;
            min-width: auto !important;
          }
          .contact-right {
            padding-left: 0 !important;
            min-width: auto !important;
          }
          .contact-heading {
            font-size: 2.4rem !important;
            margin-bottom: 28px !important;
          }
          .social-links {
            gap: 18px !important;
            margin-top: 32px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 40px 0 !important;
          }
          .contact-container {
            padding: 0 20px !important;
          }
          .contact-heading {
            font-size: 2rem !important;
            margin-bottom: 24px !important;
          }
          .info-title {
            font-size: 1rem !important;
          }
          .info-text {
            font-size: 0.95rem !important;
          }
          .social-links {
            gap: 16px !important;
            margin-top: 28px !important;
          }
          .social-icon {
            font-size: 1.3rem !important;
            padding: 12px !important;
          }
          .submit-button {
            padding: 12px 22px !important;
            font-size: 0.95rem !important;
          }
        }

        @media (max-width: 360px) {
          .contact-heading {
            font-size: 1.75rem !important;
          }
          .social-links {
            gap: 12px !important;
          }
          .social-icon {
            font-size: 1.2rem !important;
            padding: 10px !important;
          }
        }
      `}</style>

      <section
        id="contact" // <-- Add this line for smooth scroll target
        className="contact-section"
        style={{
          background: theme.bg,
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 0",
        }}
      >
        <div
          className="contact-container"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1200px",
            gap: "64px",
          }}
        >
          {/* LEFT SIDE */}
          <div
            className="contact-left"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "340px",
              paddingRight: "32px",
            }}
          >
            <h1
              className="contact-heading"
              style={{
                fontSize: "3.2rem",
                fontWeight: 700,
                color: theme.text,
                marginBottom: "38px",
                letterSpacing: "-1px",
                lineHeight: "1.1",
              }}
            >
              Let's build what's next, together.
            </h1>
            <div style={{ marginBottom: "32px" }}>
              <h3 className="info-title" style={{ fontSize: "1.15rem", fontWeight: 600, color: theme.text, marginBottom: "8px" }}>
                Location
              </h3>
              <div className="info-text" style={{ color: theme.textSecondary, marginBottom: "18px" }}>
                Based in India · Working Worldwide
              </div>

              <h3 className="info-title" style={{ fontSize: "1.15rem", fontWeight: 600, color: theme.text, marginBottom: "8px" }}>
                Availability
              </h3>
              <div className="info-text" style={{ color: theme.textSecondary, marginBottom: "18px" }}>
                Open for freelance & long-term projects
              </div>

              <h3 className="info-title" style={{ fontSize: "1.15rem", fontWeight: 600, color: theme.text, marginBottom: "8px" }}>
                Email
              </h3>
              <div className="info-text" style={{ color: theme.textSecondary, marginBottom: "18px" }}>
                ravishjain988@gmail.com
              </div>

              <h3 className="info-title" style={{ fontSize: "1.15rem", fontWeight: 600, color: theme.text, marginBottom: "8px" }}>
                Phone
              </h3>
              <div className="info-text" style={{ color: theme.textSecondary, marginBottom: "18px" }}>
                +91 9316572829
              </div>

              <div 
                className="social-links"
                style={{ 
                  display: "flex",
                  justifyContent: "center",
                  gap: "22px",
                  alignItems: "center",
                  marginTop: "40px"
                }}
              >
                {socialLinks.map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{
                      color: theme.textSecondary,
                      fontSize: "1.5rem",
                      padding: "14px",
                      borderRadius: "10px",
                      background: "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)",
                      transition: "all 0.25s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(180deg, #222222 0%, #3a3a3a 100%)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.color = theme.textSecondary;
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form
            className="contact-right"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "340px",
              paddingLeft: "32px",
              position: "relative",
              minHeight: "340px",
            }}
            onSubmit={e => {
              e.preventDefault();
              // handle form submission here
            }}
          >
            <FloatingLabelInput
              label="Full Name"
              name="name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <FloatingLabelInput
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <FloatingLabelTextarea
              label="Message"
              name="message"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="submit-button"
              style={{
                padding: "10px 26px",
                background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
                color: "#fff",
                borderRadius: "10px",
                fontSize: "1rem",
                fontWeight: "500",
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(0,0,0,0.4)",
                letterSpacing: "0.2px",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
                marginTop: "18px",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;