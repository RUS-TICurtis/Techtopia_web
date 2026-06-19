import React, { useState, useEffect } from "react";
import { Calendar as CalendarIcon, Clock, ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { supabase } from "../../lib/supabase";

export default function BookingWidget() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Generate next 14 days for the calendar slider
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  });

  const allTimes = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  useEffect(() => {
    if (selectedDate) {
      checkAvailability(selectedDate);
    } else {
      setBookedTimes([]);
    }
  }, [selectedDate]);

  const checkAvailability = async (date) => {
    setIsLoadingTimes(true);
    const dateStr = date.toISOString().split('T')[0];
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('time')
        .eq('date', dateStr);

      if (!error && data) {
        setBookedTimes(data.map(b => b.time));
      } else {
        setBookedTimes([]);
      }
    } catch (e) {
      console.error(e);
      setBookedTimes([]);
    } finally {
      setIsLoadingTimes(false);
    }
  };

  const handleBook = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const dateStr = selectedDate.toISOString().split('T')[0];

    // Double check availability before inserting
    const { data: existing } = await supabase
      .from('bookings')
      .select('id')
      .eq('date', dateStr)
      .eq('time', selectedTime);

    if (existing && existing.length > 0) {
      setErrorMsg("This time slot was just booked by someone else. Please select another time.");
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.from('bookings').insert([{
      name,
      email,
      details,
      date: dateStr,
      time: selectedTime,
    }]);

    setIsSubmitting(false);

    if (error) {
      setErrorMsg("Failed to confirm booking. Please try again.");
    } else {
      setStep(3);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 max-w-lg mx-auto w-full">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
          <CalendarIcon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800">Scoping Consultation</h3>
          <p className="text-xs text-slate-500">30 min • Free Video Call</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h4 className="text-sm font-semibold text-slate-800 mb-3">1. Select a Date & Time</h4>
            
            <div className="flex gap-2 overflow-x-auto pb-4 mb-4 snap-x hide-scrollbar">
              {dates.map((date, i) => {
                // Avoid weekends
                const day = date.getDay();
                if (day === 0 || day === 6) return null;

                return (
                  <button
                    key={i}
                    onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                    className={`flex-shrink-0 snap-center w-16 p-2 rounded-2xl border-2 transition-all flex flex-col items-center justify-center ${
                      selectedDate?.toDateString() === date.toDateString() 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-slate-100 text-slate-500 hover:border-slate-200'
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                    <span className="text-xl font-bold">{date.getDate()}</span>
                  </button>
                )
              })}
            </div>

            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6"
              >
                {isLoadingTimes ? (
                  <div className="col-span-full py-4 text-center text-sm text-slate-400">Checking availability...</div>
                ) : (
                  allTimes.map((time) => {
                    const isBooked = bookedTimes.includes(time);
                    return (
                      <button
                        key={time}
                        disabled={isBooked}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                          isBooked ? 'bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed line-through' :
                          selectedTime === time 
                            ? 'bg-primary border-primary text-white shadow-md' 
                            : 'bg-white border-slate-200 text-slate-600 hover:border-primary'
                        }`}
                      >
                        {time}
                      </button>
                    )
                  })
                )}
              </motion.div>
            )}

            <button 
              onClick={() => setStep(2)}
              disabled={!selectedDate || !selectedTime}
              className="w-full theme-btn py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <button onClick={() => setStep(1)} className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-600 mb-4">
              <ChevronLeft className="w-3 h-3" /> Back
            </button>
            <h4 className="text-sm font-semibold text-slate-800 mb-4">2. Your Details</h4>
            
            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-xs rounded-xl">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleBook} className="space-y-4">
              <input type="text" required placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary" />
              <input type="email" required placeholder="Work Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary" />
              <textarea placeholder="Tell us about your project... (Optional)" value={details} onChange={e => setDetails(e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-primary resize-none" />
              
              <button type="submit" disabled={isSubmitting} className="w-full theme-btn py-3 rounded-xl flex items-center justify-center disabled:opacity-70">
                {isSubmitting ? "Confirming..." : "Confirm Booking"}
              </button>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="font-bold text-xl text-neutral-dark mb-2">Booking Confirmed!</h3>
            <p className="text-sm text-slate-500 mb-6">
              You are scheduled for a Scoping Consultation on <strong className="text-slate-700">{selectedDate?.toLocaleDateString()} at {selectedTime}</strong>. A calendar invite has been sent to your email.
            </p>
            <button onClick={() => {setStep(1); setSelectedDate(null); setSelectedTime(null); setName(""); setEmail(""); setDetails("");}} className="text-sm font-semibold text-primary hover:underline">
              Book another session
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
