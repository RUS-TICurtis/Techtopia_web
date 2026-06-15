import React, { useState } from "react";
import { ArrowRight, Settings, Code, ShieldCheck, ChevronLeft, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function NeedsQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ size: "", challenge: "" });

  const handleSizeSelect = (size) => {
    setAnswers({ ...answers, size });
    setStep(2);
  };

  const handleChallengeSelect = (challenge) => {
    setAnswers({ ...answers, challenge });
    setStep(3);
  };

  const getRecommendation = () => {
    if (answers.challenge === "outdated") return {
      title: "Digital Transformation & Custom Software",
      icon: <Code className="w-10 h-10 text-primary" />,
      desc: "Based on your need to replace outdated systems, we recommend our Custom Software Development package to build a scalable, modern foundation."
    };
    if (answers.challenge === "security") return {
      title: "Managed IT & Cybersecurity",
      icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
      desc: "Security and uptime are critical. Our Managed IT Services provide 24/7 monitoring, robust firewalls, and ISO-compliant data protection."
    };
    return {
      title: "Growth & Digital Marketing",
      icon: <Settings className="w-10 h-10 text-amber-500" />,
      desc: "To scale your operations efficiently, we recommend our integrated Digital Marketing and CRM automation solutions."
    };
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          Interactive Assessment
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-neutral-dark">Find Your Perfect IT Solution</h2>
        <p className="text-slate-500 mt-2">Answer two quick questions to get a personalized recommendation.</p>
      </div>

      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800">What is your company size?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
                {["1-10 Employees (Startup)", "11-50 Employees (Growing)", "50+ Employees (Enterprise)"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className="p-4 border-2 border-slate-100 hover:border-primary hover:bg-primary/5 rounded-2xl text-left font-semibold text-slate-700 transition-all group"
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-primary mb-3 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800">What is your biggest current challenge?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                <button onClick={() => handleChallengeSelect("outdated")} className="p-5 border-2 border-slate-100 hover:border-primary hover:bg-primary/5 rounded-2xl text-left transition-all">
                  <Code className="w-8 h-8 text-slate-400 mb-3" />
                  <h4 className="font-bold text-slate-800 mb-1">Outdated Systems</h4>
                  <p className="text-xs text-slate-500">Legacy software is slowing us down.</p>
                </button>
                <button onClick={() => handleChallengeSelect("security")} className="p-5 border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 rounded-2xl text-left transition-all">
                  <ShieldCheck className="w-8 h-8 text-slate-400 mb-3" />
                  <h4 className="font-bold text-slate-800 mb-1">Security & Uptime</h4>
                  <p className="text-xs text-slate-500">We need reliable, secure IT infrastructure.</p>
                </button>
                <button onClick={() => handleChallengeSelect("growth")} className="p-5 border-2 border-slate-100 hover:border-amber-500 hover:bg-amber-50 rounded-2xl text-left transition-all">
                  <Settings className="w-8 h-8 text-slate-400 mb-3" />
                  <h4 className="font-bold text-slate-800 mb-1">Scaling Operations</h4>
                  <p className="text-xs text-slate-500">We need automation and digital marketing.</p>
                </button>
              </div>
              <button onClick={() => setStep(1)} className="mt-8 flex items-center gap-1 text-sm text-slate-400 hover:text-slate-600 font-semibold">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            </motion.div>
          )}

          {/* STEP 3 (RESULTS) */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-2xl bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
                <div className="flex justify-center mb-6">
                  {getRecommendation().icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">{getRecommendation().title}</h3>
                <p className="text-slate-600 mb-8">{getRecommendation().desc}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="theme-btn">
                    Book a Free Consultation
                  </button>
                  <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:border-slate-300 transition-colors">
                    Retake Quiz
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        <div className={`h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-slate-200'} transition-colors`} />
        <div className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-slate-200'} transition-colors`} />
        <div className={`h-1.5 w-8 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-slate-200'} transition-colors`} />
      </div>
    </div>
  );
}
