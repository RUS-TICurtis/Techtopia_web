import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_NAME, CORE_EMAIL, CORE_PHONE } from "../../types";
import { supabase } from "../../lib/supabase";

export default function ChatbotFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sessionId, setSessionId] = useState("");
  const messagesEndRef = useRef(null);

  // Helper to generate a valid UUID v4
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  useEffect(() => {
    // Load or initialize session
    let sid = localStorage.getItem("techtopia_chat_session_id");
    if (!sid) {
      sid = generateUUID();
      localStorage.setItem("techtopia_chat_session_id", sid);
    }
    setSessionId(sid);

    // Load or initialize messages
    const savedMessages = localStorage.getItem("techtopia_chat_messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      const initMessage = { id: Date.now(), text: `Hi there! 👋 Welcome to ${BRAND_NAME}. How can we help you today?`, sender: 'bot' };
      setMessages([initMessage]);
      localStorage.setItem("techtopia_chat_messages", JSON.stringify([initMessage]));
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // Update localStorage
    if (messages.length > 0) {
      localStorage.setItem("techtopia_chat_messages", JSON.stringify(messages));
    }
  }, [messages, isOpen]);

  const saveMessageToDB = async (text, sender) => {
    if (!sessionId) return;
    try {
      await supabase.from('chatbot_messages').insert([{
        session_id: sessionId,
        message: text,
        sender: sender
      }]);
    } catch (e) {
      console.error("Failed to save chat message", e);
    }
  };

  const getAutoResponse = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("pricing") || lower.includes("cost") || lower.includes("how much") || lower.includes("quote")) {
      return "Our pricing depends on your project scope. We offer Starter, Growth, and Premium packages — all custom-quoted. Visit our Pricing page or drop us a message at " + CORE_EMAIL + " for a free estimate!";
    }
    if (lower.includes("contact") || lower.includes("phone") || lower.includes("email") || lower.includes("reach")) {
      return `You can reach us at ${CORE_EMAIL} or call ${CORE_PHONE}. We're available Mon–Fri, 9am–5pm (GMT).`;
    }
    if (lower.includes("support") || lower.includes("ticket") || lower.includes("issue") || lower.includes("problem")) {
      return "For existing clients, please log in to the Client Portal to submit a support ticket — our team monitors it closely. Not a client yet? Email us at " + CORE_EMAIL;
    }
    if (lower.includes("service") || lower.includes("what do you") || lower.includes("do you do") || lower.includes("offer")) {
      return "We offer: ✅ Web & App Development ✅ UI/UX & Brand Design ✅ IT Support & Infrastructure ✅ Digital Marketing. Which one interests you?";
    }
    if (lower.includes("location") || lower.includes("where") || lower.includes("office") || lower.includes("accra")) {
      return "We're based in Accra, Ghana and serve clients remotely across Africa and globally. We can set up a virtual consultation anytime!";
    }
    if (lower.includes("project") || lower.includes("portfolio") || lower.includes("work") || lower.includes("example")) {
      return "Check out our Projects page to see case studies from clients like AHG Properties, Ellys Jewelry, Fortress Renewables, and Everybody Matters Foundation!";
    }
    if (lower.includes("urgent") || lower.includes("asap") || lower.includes("emergency")) {
      return `For urgent matters, please call us directly at ${CORE_PHONE}. We'll do our best to assist you right away.`;
    }
    // Human handoff fallback
    return `Thanks for reaching out to ${BRAND_NAME}! 🙂 Our team will review your message and get back to you within 1 business day. For faster assistance, email us directly at ${CORE_EMAIL} or call ${CORE_PHONE}.`;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const userText = inputValue;
    const newMsg = { id: Date.now(), text: userText, sender: 'user' };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");

    // Save user message to Supabase
    saveMessageToDB(userText, 'user');

    // Simulate bot typing and auto-reply
    setTimeout(() => {
      const botText = getAutoResponse(userText);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botText,
        sender: 'bot'
      }]);
      saveMessageToDB(botText, 'bot');
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-theme-surface rounded-2xl shadow-2xl border border-theme-border overflow-hidden flex flex-col h-96"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold">{BRAND_NAME} Support</h4>
                <p className="text-xs text-primary-content/80">Typically replies in minutes</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-theme-bg space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-theme-surface border border-theme-border text-theme-heading rounded-bl-none shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-theme-surface border-t border-theme-border flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-theme-bg border border-theme-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors flex-shrink-0"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center focus:outline-none"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
