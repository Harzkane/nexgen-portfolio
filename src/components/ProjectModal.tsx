"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectLogo from "@/components/ProjectLogo";

interface Project {
  name: string;
  image: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  stat: string;
  url: string;
  caseStudyPath?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/72 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="w-full max-w-3xl overflow-hidden rounded-[34px] border border-white/10 bg-[#0f1519] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} p-6 sm:p-8`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_34%)]" />
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full border border-white/18 bg-black/18 px-3 py-2 text-sm text-white"
          >
            Close
          </button>

          <div className="relative z-10 max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/72">{project.stat}</p>
            <h3 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-white">
              {project.name}
            </h3>
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/65">{project.category}</p>
          </div>

          <div className="relative z-10 mt-8 rounded-[28px] bg-[#f6f0e6]/88 p-6 backdrop-blur">
            <ProjectLogo name={project.name} className="h-24 w-full sm:h-28" />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="max-w-2xl text-base leading-8 text-white/72">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/68"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.caseStudyPath && (
              <Link
                href={project.caseStudyPath}
                className="inline-flex items-center justify-center rounded-full bg-[#d7ff64] px-6 py-4 font-semibold text-[#091014]"
              >
                View work
              </Link>
            )}
            {project.url && (
              <button
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 font-semibold text-white"
                onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
              >
                Visit project
              </button>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 font-semibold text-white"
            >
              Back to portfolio
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
