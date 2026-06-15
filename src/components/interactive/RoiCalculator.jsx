import React, { useState } from "react";
import { Calculator, TrendingDown, Clock, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function RoiCalculator() {
  const [employees, setEmployees] = useState(25);
  const [hourlyRate, setHourlyRate] = useState(40);
  const [downtimeHours, setDowntimeHours] = useState(5);

  // Simple ROI calculation logic
  const annualDowntimeCost = employees * hourlyRate * downtimeHours * 12; // cost per year
  const techtopiaCost = 1500 * 12; // arbitrary managed IT base cost $1500/mo
  const estimatedSavings = annualDowntimeCost - techtopiaCost;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mt-12 mb-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4">
          <Calculator className="w-6 h-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-neutral-dark">Calculate Your ROI</h2>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
          See how much your business could save annually by switching to our proactive Managed IT Services, eliminating costly downtime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-slate-700 text-sm">Number of Employees</label>
              <span className="font-bold text-primary">{employees}</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="200" 
              value={employees} 
              onChange={(e) => setEmployees(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-slate-700 text-sm">Average Hourly Cost per Employee ($)</label>
              <span className="font-bold text-primary">${hourlyRate}</span>
            </div>
            <input 
              type="range" 
              min="15" 
              max="150" 
              value={hourlyRate} 
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="font-semibold text-slate-700 text-sm">IT Downtime Hours / Month</label>
              <span className="font-bold text-primary">{downtimeHours} hrs</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="40" 
              value={downtimeHours} 
              onChange={(e) => setDowntimeHours(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <p className="text-xs text-slate-400 mt-2">Includes internet issues, software crashes, and server downtime.</p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-center border border-slate-100">
          <div className="mb-8">
            <h4 className="text-slate-500 font-medium text-sm mb-1">Current Annual Cost of IT Downtime</h4>
            <p className="text-3xl font-black text-slate-800">${annualDowntimeCost.toLocaleString()}</p>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <h4 className="text-slate-500 font-medium text-sm mb-1">Estimated Annual Savings with Us</h4>
            <motion.p 
              key={estimatedSavings}
              initial={{ scale: 1.1, color: '#10b981' }}
              animate={{ scale: 1, color: estimatedSavings > 0 ? '#10b981' : '#ef4444' }}
              className={`text-5xl font-black ${estimatedSavings > 0 ? 'text-emerald-500' : 'text-red-500'}`}
            >
              {estimatedSavings > 0 ? '+' : ''}${Math.max(0, estimatedSavings).toLocaleString()}
            </motion.p>
            {estimatedSavings > 0 ? (
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 py-2 px-3 rounded-lg border border-emerald-100 inline-flex">
                <TrendingDown className="w-4 h-4" /> You are losing money on downtime!
              </div>
            ) : (
              <p className="text-sm text-slate-400 mt-2">Your current setup is highly efficient.</p>
            )}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <ShieldCheck className="w-4 h-4 text-primary" /> Proactive Security
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <Clock className="w-4 h-4 text-primary" /> 24/7 Monitoring
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
