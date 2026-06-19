import React, { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_NAME } from "../../types";
import { supabase } from "../../lib/supabase";

export default function ChatbotFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: `Hi there! 👋 Welcome to ${BRAND_NAME}. How can we help you today?`, sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    // Generate a simple unique session ID for this user's browser session
    setSessionId(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
  }, []);

  const saveMessage = async (text, sender) => {
    if (!sessionId) return;
    await supabase.from('chatbot_messages').insert([{
      session_id: "00000000-0000-0000-0000-000000000000", // Fallback if uuid needed, but session_id is uuid in schema. Let's fix this to generate proper uuid or change schema.
      message: text,
      sender: sender
    }]);
  };

  const saveMessageWithUUID = async (text, sender) => {
    // To conform to UUID schema
    const uuidStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    
    await supabase.from('chatbot_messages').insert([{
      session_id: sessionId || uuidStr,
      message: text,
      sender: sender
    }]);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const userText = inputValue;
    const newMsg = { id: Date.now(), text: userText, sender: 'user' };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");

    // Save user message to Supabase
    saveMessageWithUUID(userText, 'user');

    // Simulate bot reply
    setTimeout(() => {
      const botText = "Thanks for reaching out! One of our experts will get back to you shortly. In the meantime, feel free to browse our services.";
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: botText,
        sender: 'bot'
      }]);
      saveMessageWithUUID(botText, 'bot');
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
