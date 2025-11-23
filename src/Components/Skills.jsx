import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Consistent luxury black theme
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

// Map each skill to its SVG file
const skillIcons = {
  React: "/react-svgrepo-com.svg",
  TypeScript: "/typescript.png",
  HTML: "/html-5-svgrepo-com.svg",
  CSS: "/css-3-svgrepo-com.svg",
  Tailwind: "/tailwindcss-icon-svgrepo-com.svg",
  Redux: "/redux-svgrepo-com.svg",
  "Node.js": "/nodejs-icon-svgrepo-com.svg",
  Express: "/icons8-express-js-48.png",
  MongoDB: "/mongodb-svgrepo-com.svg",
  Git: "/github.svg",
  Docker: "/docker.png",
  JavaScript: "/js-svgrepo-com.svg",
  AWS: "/icons8-aws-logo.svg",
  Azure: "/icons8-azure.svg",
  Firebase: "/icons8-firebase.svg",
  MySQL: "/icons8-mysql.svg",
  PostgreSQL: "/icons8-postgresql.svg",
  Postman: "/postman-icon-svgrepo-com.svg",
  Stripe: "/stripe-svgrepo-com.svg",
  Vercel: "/vercel-fill-svgrepo-com.svg",
  VSCode: "/vscode-svgrepo-com.svg",
  RESTAPI: "/rest-api-svgrepo-com.svg",
  Leetcode: "/Leetcode--Streamline-Simple-Icons.svg",
};

const skillCategories = {
  Frontend: {
    skills: ["React", "TypeScript", "HTML", "CSS", "Tailwind", "Redux"],
    description: "Modern web technologies and frameworks"
  },
  Backend: {
    skills: ["Node.js", "Express", "MongoDB"],
    description: "Server-side technologies and databases"
  },
  "Tools & Cloud": {
    skills: ["Git", "Docker", "JavaScript", "AWS", "Azure", "Firebase", "MySQL", "PostgreSQL", "Postman", "Stripe", "Vercel", "VSCode", "RESTAPI", "Leetcode"],
    description: "Development tools and cloud platforms"
  },
};

function SkillCard({ skill, index }) {
  const iconSrc = skillIcons[skill];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="group"
    >
      <div
        className="p-4 transition-all duration-200 cursor-default flex flex-col items-center space-y-3"
        style={{
          background: theme.cardBg,
          border: `1px solid ${theme.border}`,
          borderRadius: "14px",
          boxShadow: `0 1px 3px ${theme.shadow}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 4px 12px ${theme.shadowHover}`;
          e.currentTarget.style.borderColor = theme.accent;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 1px 3px ${theme.shadow}`;
          e.currentTarget.style.borderColor = theme.border;
        }}
      >
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={skill}
            className="w-8 h-8 object-contain"
            draggable={false}
          />
        ) : (
          <div
            className="w-8 h-8 flex items-center justify-center rounded-md font-medium text-sm"
            style={{ backgroundColor: theme.accentLight, color: theme.accent }}
          >
            {skill[0]}
          </div>
        )}
        <span
          className="text-sm font-medium text-center leading-tight"
          style={{ color: theme.text }}
        >
          {skill}
        </span>
      </div>
    </motion.div>
  );
}

function TabButton({ category, isActive, onClick, description }) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="relative px-6 py-3 rounded-lg font-medium transition-all duration-200 text-left"
      style={{
        background: isActive ? theme.accentLight : theme.cardBg,
        border: `1px solid ${isActive ? theme.accent : theme.border}`,
        color: isActive ? theme.text : theme.textSecondary,
        boxShadow: isActive ? `0 2px 8px ${theme.shadowHover}` : `0 1px 3px ${theme.shadow}`,
      }}
    >
      <div>
        <div className="text-sm font-semibold mb-1">{category}</div>
        <div
          className="text-xs"
          style={{ color: isActive ? theme.textMuted : theme.textSecondary }}
        >
          {description}
        </div>
      </div>
    </motion.button>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      className="w-full py-16 px-4 sm:px-8 md:px-16"
      style={{ background: theme.bg }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: theme.text }}
          >
            Skills & Technologies
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: theme.textSecondary }}
          >
            A comprehensive overview of my technical expertise across different domains.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center items-stretch gap-3 mb-10"
        >
          {Object.entries(skillCategories).map(([category, data]) => (
            <TabButton
              key={category}
              category={category}
              isActive={activeTab === category}
              onClick={() => setActiveTab(category)}
              description={data.description}
            />
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-xl p-8"
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              boxShadow: `0 2px 8px ${theme.shadow}`,
            }}
          >
            <div className="mb-8">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: theme.text }}
              >
                {activeTab}
              </h3>
              <p style={{ color: theme.textSecondary }}>
                {skillCategories[activeTab].description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skillCategories[activeTab].skills.map((skill, index) => (
                <SkillCard key={skill} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
}