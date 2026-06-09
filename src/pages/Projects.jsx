import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "../types";

export default function Projects() {
  return (
    <div className="w-full bg-neutral-light">
      {/* 1. BREADCRUMB HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,114,255,0.15),transparent)] pointer-events-none z-0" />
        <img 
          src="/assets/images/shapes/wave-line-shadow.png" 
          alt="Wave Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-1 text-center md:text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Our Portfolio</span>
          <h1 className="text-4xl font-extrabold tracking-tight">Our Projects</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">Projects</span>
          </div>
        </div>
      </section>

      {/* 2. PROJECTS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-2xl mb-16">
            <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-3">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-dark mb-4 leading-tight">
              Bringing Innovation, Creativity & Tech Together
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Explore how we have engineered custom platforms and custom marketing campaigns that deliver concrete business growth for organizations in Ghana and internationally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback image if file not found
                      e.currentTarget.src = "/assets/images/thumbs/coming-soon-img.png";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 text-primary text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Core description block */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider mb-1">
                      Client: {project.client}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-dark mb-3">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-150/50">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{project.impact}</span>
                    </span>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary hover:bg-primary/95 text-white transition-all shadow shadow-primary/10"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
