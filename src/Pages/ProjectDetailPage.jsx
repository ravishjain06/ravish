import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../Components/project.json";

// 3-image grid: 1 large left + 2 stacked right on md+, stacked on mobile
function ImageGrid({ images }) {
  if (!images || images.length === 0) return null;
  const [main, second, third] = images;
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-2 w-full mb-8 rounded-xl overflow-hidden"
      style={{ maxHeight: 440 }}>
      <div className="overflow-hidden rounded-xl" style={{ gridRow: second ? "1 / 3" : "auto" }}>
        <img src={main} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" style={{ minHeight: 180 }} />
      </div>
      {second && (
        <div className="overflow-hidden rounded-xl hidden md:block">
          <img src={second} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
        </div>
      )}
      {third && (
        <div className="overflow-hidden rounded-xl hidden md:block">
          <img src={third} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
        </div>
      )}
      {/* Show second + third stacked on mobile */}
      {second && (
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {second && <div className="overflow-hidden rounded-xl"><img src={second} alt="" className="w-full h-full object-cover" style={{ aspectRatio: "4/3" }} /></div>}
          {third && <div className="overflow-hidden rounded-xl"><img src={third} alt="" className="w-full h-full object-cover" style={{ aspectRatio: "4/3" }} /></div>}
        </div>
      )}
    </div>
  );
}

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData[parseInt(id, 10)];
  const allProjects = projectsData;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(180deg,#000 0%,#0a0a0a 50%,#000 100%)" }}>
      <p className="text-zinc-400 text-lg">Project not found.</p>
    </div>
  );

  return (
    <div className="min-h-screen px-2 sm:px-4 pt-24 pb-16" style={{ background: "linear-gradient(180deg,#000 0%,#0a0a0a 50%,#000 100%)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}>
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-white text-sm transition-colors mb-8">
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">Project</p>
          {project.tag && (
            <span className="inline-block mb-3 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/10">
              {project.tag}
            </span>
          )}
          <h1 className="text-white font-bold text-3xl sm:text-4xl tracking-tight mb-8">{project.title}</h1>
        </motion.div>

        {/* Image grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
          <ImageGrid images={project.images} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/6 bg-[rgba(18,18,18,0.7)] backdrop-blur-md p-6 sm:p-8 flex flex-col gap-8"
        >
          {/* Dynamic stats row */}
          <div className="flex flex-wrap gap-0 divide-x divide-white/8">
            {[
              { label: "Tech Used", value: project.tech.length + "+" },
              { label: "Features", value: project.bullets.length + "+" },
              { label: "Category", value: project.tag || "Project" },
              { label: "Images", value: project.images?.length || 0 },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5 px-5 first:pl-0">
                <p className="text-zinc-600 text-[10px] tracking-widest uppercase">{stat.label}</p>
                <p className="text-white text-base font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/6" />

          {/* About */}
          <div>
            <p className="text-zinc-600 text-xs tracking-widest uppercase mb-3">About</p>
            <p className="text-zinc-300 text-sm leading-7">{project.longDescription || project.description}</p>
          </div>

          {/* Highlights */}
          <div>
            <p className="text-zinc-600 text-xs tracking-widest uppercase mb-3">Key Features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-relaxed">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/6" />

          {/* Tech stack */}
          <div>
            <p className="text-zinc-600 text-xs tracking-widest uppercase mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 border border-white/8 font-medium">{tag}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          {project.link && project.link !== "#" && (
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/15 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Visit Project <span>↗</span>
              </a>
            </div>
          )}
        </motion.div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-14"
        >
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-5">More Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allProjects
              .map((p, i) => ({ ...p, _idx: i }))
              .filter(p => p._idx !== parseInt(id, 10))
              .slice(0, 3)
              .map(p => (
                <Link key={p._idx} to={`/projects/${p._idx}`} className="group block rounded-xl overflow-hidden border border-white/5 bg-[rgba(18,18,18,0.7)] backdrop-blur-md hover:border-white/15 hover:-translate-y-1 transition-all duration-300">
                  {p.images?.[0] && (
                    <div className="w-full h-36 overflow-hidden">
                      <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-white text-sm font-semibold mb-1">{p.title}</p>
                    <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.tech.slice(0, 3).map((tag, ti) => (
                        <span key={ti} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/8">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;
