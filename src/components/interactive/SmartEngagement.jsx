import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import NeedsQuiz from "./NeedsQuiz";
import LeadMagnet from "./LeadMagnet";

export default function SmartEngagement() {
  const [componentToRender, setComponentToRender] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage for previous engagement
    const quizCompleted = localStorage.getItem("techtopia_quiz_completed") === "true";
    const magnetCompleted = localStorage.getItem("techtopia_magnet_completed") === "true";

    let choice = null;
    if (!quizCompleted && !magnetCompleted) {
      // First visit, pick randomly but save the choice so it persists across reloads until completed
      const savedChoice = sessionStorage.getItem("techtopia_engagement_choice");
      if (savedChoice) {
        choice = savedChoice;
      } else {
        choice = Math.random() > 0.5 ? 'quiz' : 'magnet';
        sessionStorage.setItem("techtopia_engagement_choice", choice);
      }
    } else if (quizCompleted && !magnetCompleted) {
      choice = 'magnet'; // Prioritize the one they haven't done
    } else if (!quizCompleted && magnetCompleted) {
      choice = 'quiz'; // Prioritize the one they haven't done
    } else {
      // Both completed, we can hide the engagement section entirely to declutter the UI
      choice = 'none';
    }

    setComponentToRender(choice);
  }, []);

  // Intercept completion events by wrapping the components in a div that listens for form submissions 
  // (a slightly hacky but effective way to detect completion without modifying the child components)
  const handleInteraction = (type) => {
    localStorage.setItem(`techtopia_${type}_completed`, "true");
  };

  if (!componentToRender || componentToRender === 'none') return null;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 bg-slate-50 border-y border-slate-100"
    >
      <div 
        className="max-w-7xl mx-auto px-6"
        onClickCapture={(e) => {
          // If they click a button inside, assume some interaction/completion for tracking
          if (e.target.tagName === 'BUTTON') {
            handleInteraction(componentToRender);
          }
        }}
      >
        {componentToRender === 'quiz' ? <NeedsQuiz /> : <LeadMagnet />}
      </div>
    </motion.section>
  );
}
