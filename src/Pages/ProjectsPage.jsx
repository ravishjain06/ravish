import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../Components/project.json";

const ProjectCard = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: idx * 0.08 }}
    className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[rgba(18,18,18,0.7)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-2xl"
  >
    {project.images?.[0] && (
      <div className="w-full h-44 overflow-hidden shrink-0 relative">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.tag && (
          <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md bg-black/70 text-zinc-300 border border-white/10 backdrop-blur-sm">
            {project.tag}
          </span>
        )}
      </div>
    )}
    <div className="flex flex-col flex-1 gap-3 p-5">
      <h2 className="text-white font-semibold text-base leading-snug">{project.title}</h2>
      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {project.tech.slice(0, 3).map((tag, i) => (
          <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/8 font-medium">{tag}</span>
        ))}
      </div>
      <Link
        to={`/projects/${idx}`}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
      >
        View Details <span className="text-base">→</span>
      </Link>
    </div>
  </motion.div>
);

const ProjectsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "linear-gradient(180deg,#000 0%,#0a0a0a 50%,#000 100%)" }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.08)",
            borderTop: "3px solid #ffffff",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
  <div className="min-h-screen px-4 pt-24 pb-16" style={{ background: "linear-gradient(180deg,#000 0%,#0a0a0a 50%,#000 100%)" }}>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-2">Portfolio</p>
        <h1 className="text-white font-bold text-3xl sm:text-4xl tracking-tight">All Projects</h1>
        <div className="w-10 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent mx-auto mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProjectsPage;
