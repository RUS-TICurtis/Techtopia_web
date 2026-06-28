import React, { useState, useEffect } from "react";
import { Lock, FileText, CheckCircle, Clock, Plus, Activity } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_NAME } from "../types";
import { supabase } from "../lib/supabase";
import { Helmet } from "react-helmet-async";

export default function Portal() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  
  const [tickets, setTickets] = useState([]);
  const [projects, setProjects] = useState([]);
  const [slas, setSlas] = useState([]);
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [newTicketTitle, setNewTicketTitle] = useState("");
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchDashboardData(session.user.id);
      else setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchDashboardData(session.user.id);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchDashboardData = async (userId) => {
    setLoading(true);
    try {
      // Fetch Tickets
      const { data: ticketsData } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });
      if (ticketsData) setTickets(ticketsData);

      // Fetch Projects
      let { data: projectsData } = await supabase
        .from('client_projects')
        .select('*')
        .order('updated_at', { ascending: false });
      
      // Fetch SLAs
      let { data: slasData } = await supabase
        .from('client_slas')
        .select('*');

      // Seed data if first time login for demo purposes
      if (!projectsData || projectsData.length === 0) {
        const { data: newProj } = await supabase.from('client_projects').insert([
          { name: "Website Rebrand & Launch", phase: "Design & Discovery", user_id: userId },
          { name: "SEO Optimization", phase: "Keyword Mapping", status: "Pending Review", user_id: userId }
        ]).select();
        projectsData = newProj;
      }

      if (!slasData || slasData.length === 0) {
        const { data: newSla } = await supabase.from('client_slas').insert([
          { uptime: 99.99, avg_response_time: "10m", user_id: userId }
        ]).select();
        slasData = newSla;
      }

      if (projectsData) setProjects(projectsData);
      if (slasData) setSlas(slasData);
      
    } catch (e) {
      console.error("Error fetching dashboard data", e);
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsAuthenticating(true);
    setAuthError("");
    
    let error;
    if (isSignUp) {
      const res = await supabase.auth.signUp({ email, password });
      error = res.error;
    } else {
      const res = await supabase.auth.signInWithPassword({ email, password });
      error = res.error;
    }

    if (error) {
      setAuthError(error.message);
    }
    setIsAuthenticating(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleCreateTicket = async () => {
    if (!newTicketTitle.trim()) return;
    setIsCreatingTicket(true);

    const { error } = await supabase.from('tickets').insert([
      { title: newTicketTitle.trim(), user_id: session.user.id }
    ]);

    setIsCreatingTicket(false);
    if (!error) {
      setNewTicketTitle("");
      setShowTicketForm(false);
      fetchDashboardData(session.user.id);
    } else {
      alert("Error creating ticket: " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-bg text-theme-text font-semibold">
        <Helmet>
          <title>Loading... | {BRAND_NAME} Client Portal</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        Loading Portal...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-theme-bg py-12 px-6">
        <Helmet>
          <title>Client Portal Login | {BRAND_NAME}</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-theme-surface p-8 rounded-3xl shadow-xl border border-theme-border max-w-md w-full"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-theme-heading mb-2">
            {isSignUp ? "Create Account" : "Client Portal"}
          </h2>
          <p className="text-sm text-theme-text text-center mb-8">
            {isSignUp ? "Sign up to track your projects." : `Secure access to your ${BRAND_NAME} dashboard.`}
          </p>
          
          {authError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl">
              {authError}
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-theme-heading mb-1">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-theme-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                placeholder="client@company.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-theme-heading mb-1">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-theme-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                placeholder="••••••••" 
              />
            </div>
            <button type="submit" disabled={isAuthenticating} className="w-full theme-btn py-3 rounded-xl text-center flex justify-center mt-2 disabled:opacity-70">
              {isAuthenticating ? "Authenticating..." : (isSignUp ? "Sign Up" : "Secure Login")}
            </button>
            <div className="text-center mt-4">
              <button 
                type="button" 
                onClick={() => {setIsSignUp(!isSignUp); setAuthError("");}} 
                className="text-sm font-semibold text-primary hover:underline"
              >
                {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign up"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  const activeSla = slas.length > 0 ? slas[0] : { uptime: 100, avg_response_time: "N/A" };

  return (
    <div className="min-h-screen bg-theme-bg py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-theme-heading">Welcome back, {session.user.email.split('@')[0]}</h1>
            <p className="text-theme-text mt-1">Here is the status of your current projects and tickets.</p>
          </div>
          <button onClick={handleLogout} className="text-sm font-semibold text-theme-text hover:text-red-500 transition-colors">
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-theme-surface p-6 rounded-2xl border border-theme-border shadow-sm">
              <h3 className="text-lg font-bold text-theme-heading mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Active Projects
              </h3>
              
              {projects.length === 0 ? (
                <p className="text-sm text-theme-text text-center py-6 bg-theme-bg rounded-xl border border-theme-border">No active projects found.</p>
              ) : (
                <div className="space-y-4">
                  {projects.map(proj => (
                    <div key={proj.id} className="border border-theme-border rounded-xl p-4 flex justify-between items-center bg-theme-bg/50 hover:bg-theme-surface hover:border-primary/20 transition-all">
                      <div>
                        <h4 className="font-semibold text-theme-heading">{proj.name}</h4>
                        <p className="text-xs text-theme-text">Phase: {proj.phase}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${proj.status === 'On Track' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                          {proj.status}
                        </span>
                        <p className="text-xs text-slate-400 mt-1">
                          Updated {new Date(proj.updated_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* SLAs */}
            <div className="bg-theme-surface p-6 rounded-2xl border border-theme-border shadow-sm">
              <h3 className="text-lg font-bold text-theme-heading mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" /> Service Level Agreement (SLA)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-theme-bg rounded-xl p-4 border border-theme-border">
                  <span className="text-xs font-bold text-slate-400 uppercase">Uptime this month</span>
                  <p className="text-2xl font-black text-emerald-500 mt-1">{activeSla.uptime}%</p>
                </div>
                <div className="bg-theme-bg rounded-xl p-4 border border-theme-border">
                  <span className="text-xs font-bold text-slate-400 uppercase">Avg Response Time</span>
                  <p className="text-2xl font-black text-primary mt-1">{activeSla.avg_response_time}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Tickets */}
          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-theme-heading">Support Tickets</h3>
              </div>
              
              <div className="space-y-3 mb-6 max-h-[300px] overflow-y-auto pr-1">
                {tickets.length === 0 ? (
                  <p className="text-sm text-theme-text text-center py-4 bg-theme-surface rounded-xl border border-theme-border">No tickets found.</p>
                ) : (
                  tickets.map(ticket => (
                    <div key={ticket.id} className="bg-theme-surface p-3 rounded-xl border border-theme-border shadow-sm flex items-start gap-3">
                      {ticket.status === 'resolved' || ticket.status === 'closed' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <h5 className="text-sm font-semibold text-theme-heading">{ticket.title}</h5>
                        <p className="text-xs text-theme-text capitalize">Status: {ticket.status}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Inline ticket creation form */}
              {showTicketForm ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={newTicketTitle}
                    onChange={(e) => setNewTicketTitle(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleCreateTicket()}
                    placeholder="Briefly describe the issue..."
                    autoFocus
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-primary/30 focus:outline-none focus:ring-1 focus:ring-primary bg-theme-surface"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleCreateTicket}
                      disabled={isCreatingTicket || !newTicketTitle.trim()}
                      className="flex-1 bg-primary text-white hover:bg-primary/90 transition-colors py-2.5 rounded-xl font-semibold text-sm disabled:opacity-60"
                    >
                      {isCreatingTicket ? "Submitting..." : "Submit Ticket"}
                    </button>
                    <button
                      onClick={() => { setShowTicketForm(false); setNewTicketTitle(""); }}
                      className="px-4 py-2.5 rounded-xl font-semibold text-sm text-theme-text border border-theme-border hover:bg-theme-bg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowTicketForm(true)}
                  className="w-full bg-theme-surface border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Submit New Ticket
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
