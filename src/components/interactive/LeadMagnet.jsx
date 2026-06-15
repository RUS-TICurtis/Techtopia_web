import React, { useState } from "react";
import { Download, CheckCircle, Mail } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_NAME } from "../../types";

export default function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Free Resource
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            The 2026 Ultimate IT Strategy Blueprint
          </h2>
          <p className="text-white/80 mb-6 text-sm md:text-base max-w-lg">
            Discover how leading Accra enterprises are optimizing their infrastructure, reducing cloud costs, and securing their data. Download our exclusive 25-page guide tailored for business leaders.
          </p>
          <ul className="space-y-2 mb-8 text-sm font-medium">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Cloud Cost Optimization Tactics</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Advanced Cybersecurity Frameworks</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Custom Software ROI Metrics</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="font-bold text-xl mb-2">Get Your Copy Instantly</h3>
              <div>
                <label className="text-xs font-semibold text-white/70 mb-1 block">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <button type="submit" className="bg-white text-primary hover:bg-slate-50 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2">
                <Download className="w-5 h-5" /> Download Blueprint
              </button>
              <p className="text-[10px] text-center text-white/50 mt-2">
                By downloading, you agree to receive {BRAND_NAME} newsletters. You can unsubscribe at any time.
              </p>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-2xl mb-2">Check Your Inbox!</h3>
              <p className="text-white/80 text-sm">
                We've just sent the IT Strategy Blueprint to <strong>{email}</strong>.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
