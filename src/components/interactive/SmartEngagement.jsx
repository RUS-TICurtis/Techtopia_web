import React, { useState, useEffect } from "react";
import NeedsQuiz from "./NeedsQuiz";
import LeadMagnet from "./LeadMagnet";

export default function SmartEngagement() {
  const [componentToRender, setComponentToRender] = useState(null);

  useEffect(() => {
    // Randomly select between 0 and 1
    const randomChoice = Math.floor(Math.random() * 2);
    setComponentToRender(randomChoice === 0 ? 'quiz' : 'magnet');
  }, []);

  if (!componentToRender) return null;

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {componentToRender === 'quiz' ? <NeedsQuiz /> : <LeadMagnet />}
      </div>
    </section>
  );
}
