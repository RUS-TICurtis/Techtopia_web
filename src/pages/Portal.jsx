import React, { useState } from "react";
import { Lock, FileText, CheckCircle, Clock } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_NAME } from "../types";

export default function Portal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-12 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-neutral-dark mb-2">Client Portal</h2>
          <p className="text-sm text-slate-500 text-center mb-8">Secure access to your {BRAND_NAME} dashboard.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                placeholder="client@company.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                placeholder="••••••••" 
              />
            </div>
            <button type="submit" className="w-full theme-btn py-3 rounded-xl text-center flex justify-center mt-2">
              Secure Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-dark">Welcome back, {email.split('@')[0]}</h1>
            <p className="text-slate-500 mt-1">Here is the status of your current projects and tickets.</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-sm font-semibold text-slate-500 hover:text-red-500 transition-colors">
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Active Projects
              </h3>
              <div className="border border-slate-100 rounded-xl p-4 flex justify-between items-center bg-slate-50/50">
                <div>
                  <h4 className="font-semibold text-slate-800">Enterprise CRM Migration</h4>
                  <p className="text-xs text-slate-500">Phase 2: Database Synchronization</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">On Track</span>
                  <p className="text-xs text-slate-400 mt-1">Updated 2 days ago</p>
                </div>
              </div>
            </div>
            
            {/* SLAs */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Service Level Agreement (SLA)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase">Uptime this month</span>
                  <p className="text-2xl font-black text-emerald-500 mt-1">99.98%</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase">Avg Response Time</span>
                  <p className="text-2xl font-black text-primary mt-1">12m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Tickets */}
          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Support Tickets</h3>
              
              <div className="space-y-3 mb-6">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800">API Webhook Issue</h5>
                    <p className="text-xs text-slate-500">Ticket #1042 • In Progress</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800">Add new admin user</h5>
                    <p className="text-xs text-slate-500">Ticket #1041 • Resolved</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-white border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors py-2.5 rounded-xl font-semibold text-sm">
                Submit New Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
