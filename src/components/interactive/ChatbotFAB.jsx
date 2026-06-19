import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_NAME } from "../../types";
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
    if (lower.includes("pricing") || lower.includes("cost") || lower.includes("how much")) {
      return "Our pricing depends on the scope of the project. We have Starter, Growth, and Premium packages. Check out our Pricing page or book a scoping consultation!";
    }
    if (lower.includes("contact") || lower.includes("phone") || lower.includes("email")) {
      return "You can reach us at info@techtopiagh.com or call +233 2004 46877.";
    }
    if (lower.includes("support") || lower.includes("help") || lower.includes("ticket")) {
      return "If you are an existing client, please log in to the Client Portal to submit a support ticket. Our SLA guarantees a quick response!";
    }
    if (lower.includes("service") || lower.includes("do you do")) {
      return "We offer Web & App Development, UI/UX Design, IT Support, and Digital Marketing. What are you looking for?";
    }
    return "Thanks for reaching out! One of our experts will get back to you shortly. Feel free to browse our website in the meantime.";
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
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-96"
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
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
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
