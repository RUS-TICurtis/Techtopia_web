import React from "react";
import { Link } from "react-router-dom";
import { Laptop, Palette, ShieldCheck, Megaphone, ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  // Map relevant visual themes and icons for each card
  const getTheme = (id) => {
    switch (id) {
      case "development":
        return {
          icon: <Laptop className="w-8 h-8 text-primary" />,
          bgColor: "bg-blue-500/5 group-hover:bg-primary/10",
          borderColor: "hover:border-primary/30",
          badgeColor: "bg-primary/10 text-primary",
          bgGradient: "from-blue-500/5 to-indigo-500/5",
          highlight: "border-primary"
        };
      case "creative":
        return {
          icon: <Palette className="w-8 h-8 text-secondary" />,
          bgColor: "bg-purple-500/5 group-hover:bg-secondary/10",
          borderColor: "hover:border-secondary/30",
          badgeColor: "bg-secondary/10 text-secondary",
          bgGradient: "from-fuchsia-500/5 to-purple-500/5",
          highlight: "border-secondary"
        };
      case "solution":
        return {
          icon: <ShieldCheck className="w-8 h-8 text-accent-cyan" />,
          bgColor: "bg-teal-500/5 group-hover:bg-accent-cyan/10",
          borderColor: "hover:border-accent-cyan/30",
          badgeColor: "bg-accent-cyan/10 text-accent-cyan",
          bgGradient: "from-teal-500/5 to-emerald-500/5",
          highlight: "border-accent-cyan"
        };
      case "digital":
        return {
          icon: <Megaphone className="w-8 h-8 text-accent-green" />,
          bgColor: "bg-emerald-500/5 group-hover:bg-accent-green/10",
          borderColor: "hover:border-accent-green/30",
          badgeColor: "bg-accent-green/10 text-accent-green",
          bgGradient: "from-emerald-500/5 to-teal-500/5",
          highlight: "border-accent-green"
        };
      default:
        return {
          icon: <Laptop className="w-8 h-8 text-primary" />,
          bgColor: "bg-slate-100",
          borderColor: "hover:border-primary",
          badgeColor: "bg-primary/10 text-primary",
          bgGradient: "from-slate-50 to-slate-100",
          highlight: "border-primary"
        };
    }
  };

  const theme = getTheme(service.id);

  return (
    <Link
      to={`/services/${service.id}`}
      className={`group block p-8 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg ${theme.borderColor}`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Service Icon Box */}
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${theme.bgColor}`}>
            {theme.icon}
          </div>

          <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-3">
            {service.title}
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Quick features sub-bullet list */}
        <div className="border-t border-slate-50 pt-5 mt-auto flex items-center justify-between">
          <span className="text-xs font-bold text-slate-400 group-hover:text-primary tracking-widest uppercase transition-colors flex items-center">
            <span>Explore Options</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${theme.badgeColor}`}>
            Active Solution
          </span>
        </div>
      </div>
    </Link>
  );
}
