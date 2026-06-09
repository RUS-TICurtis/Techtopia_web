import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Award, ShieldCheck, HelpCircle } from "lucide-react";
import { PROJECTS, BRAND_NAME, CORE_PHONE } from "../types";

export default function ProjectDetail() {
  const { projectId } = useParams();

  // Find the exact project details based on the params
  const project = PROJECTS.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="w-full bg-neutral-light">
      {/* 1. BREADCRUMB HEADER */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(55,114,255,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-1 text-center md:text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Project Details</span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{project.title}</h1>
          <div className="flex justify-center md:justify-start items-center space-x-2 text-xs font-semibold text-slate-400 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-200">{project.title}</span>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SIDEBAR METADATA COLUMN (col-span-4) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* Project Specs Card */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6">
              <h4 className="font-extrabold text-neutral-dark text-sm mb-4 uppercase tracking-wider">Project Specifications</h4>
              <ul className="space-y-4 text-xs font-semibold text-slate-500">
                <li className="flex justify-between py-2 border-b border-slate-150">
                  <span>Client Name</span>
                  <span className="text-neutral-dark font-bold">{project.client}</span>
                </li>
                <li className="flex justify-between py-2 border-b border-slate-150">
                  <span>Category</span>
                  <span className="text-neutral-dark font-bold">{project.category}</span>
                </li>
                <li className="flex justify-between py-2 border-b border-slate-150">
                  <span>Delivery SLA</span>
                  <span className="text-neutral-dark font-bold">100% On Time</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Project Status</span>
                  <span className="text-emerald-600 font-bold uppercase tracking-wider">Active / Shipped</span>
                </li>
              </ul>
            </div>

            {/* Impact Metric Banner */}
            <div className="bg-primary/95 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
              <Award className="w-10 h-10 text-white/50 mb-4" />
              <h4 className="font-extrabold text-xs uppercase tracking-wider mb-1">Measurable Impact</h4>
              <h3 className="text-2xl font-black mb-3">{project.impact}</h3>
              <p className="text-[11px] text-white/70 leading-relaxed">
                This project represents a concrete implementation yielding high ROI for the client organization.
              </p>
            </div>

            {/* Back Button */}
            <Link
              to="/projects"
              className="flex items-center justify-center space-x-2 text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 font-semibold py-3 px-6 rounded-xl transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </aside>

          {/* MAIN DESCRIPTION COLUMN (col-span-8) */}
          <article className="lg:col-span-8 space-y-8 text-left">
            <div className="relative h-[350px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/assets/images/thumbs/coming-soon-img.png";
                }}
              />
            </div>

            <div>
              <span className="text-primary text-xs font-extrabold uppercase tracking-widest block mb-2">Detailed Scoping</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-dark mb-4">
                How We Built It
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                {project.details}
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Every component was crafted using best-in-class technologies, verifying data safety and cloud high availability. Our localized Accra monitoring center handles ongoing updates, ensuring minimal operational downtime.
              </p>
            </div>

            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-8 space-y-4">
              <h3 className="text-lg font-bold text-neutral-dark">Platform Delivery Goals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                  <span>ISO SLA Security-by-Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4.5 h-4.5 text-emerald-500" />
                  <span>Agile Implementation Timeline</span>
                </div>
              </div>
            </div>

            {/* Scoping request CTA bottom */}
            <div className="border-t border-slate-100 pt-8 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="font-bold text-neutral-dark text-sm mb-1">Interested in a similar build?</h4>
                <p className="text-xs text-slate-400 font-semibold leading-none">Consult with our local agents or request a scoping consultation.</p>
              </div>
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/95 text-white text-sm font-semibold py-3.5 px-6 rounded-xl transition-all shadow"
              >
                Scoping Consultation
              </Link>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
