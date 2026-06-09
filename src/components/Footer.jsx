import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, MessageSquareCode } from "lucide-react";
import { BRAND_NAME, CORE_EMAIL, CORE_PHONE, CORE_LOCATION } from "../types";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-neutral-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-slate-800 pb-12">
        {/* About column */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/images/logo/Full logo (white).svg" 
              alt={BRAND_NAME} 
              className="h-8 md:h-10 w-auto max-w-[200px] object-contain" 
            />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Our team of experts is dedicated to providing cutting-edge solutions that help businesses thrive in the digital age. Partner with the best tech company for your custom software, development, and support needs.
          </p>
          <div className="flex space-x-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61557210615278"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-slate-400"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/techtopia_gh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-slate-400"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/software-technology-agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-slate-400"
              aria-label="LinkedIn Company"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/message/53Q3DYXJKLMOB1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-slate-400"
              aria-label="WhatsApp Chat"
            >
              <MessageSquareCode className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="https://leads.techtopiagh.online/authentication/login"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors text-slate-400 flex items-center space-x-1"
              >
                <span>&rsaquo; Dashboard</span>
              </a>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary transition-colors text-slate-400">
                &rsaquo; Our Solutions
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition-colors text-slate-400">
                &rsaquo; About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors text-slate-400">
                &rsaquo; Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions Column */}
        <div className="lg:col-span-3 flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Solutions</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/services/development" className="hover:text-primary transition-colors text-slate-400">
                &rsaquo; Web & Mobile Apps
              </Link>
            </li>
            <li>
              <Link to="/services/creative" className="hover:text-primary transition-colors text-slate-400">
                &rsaquo; Creative & UI/UX Design
              </Link>
            </li>
            <li>
              <Link to="/services/solution" className="hover:text-primary transition-colors text-slate-400">
                &rsaquo; IT Support Solutions
              </Link>
            </li>
            <li>
              <Link to="/services/digital" className="hover:text-primary transition-colors text-slate-400">
                &rsaquo; Digital Marketing
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact Column */}
        <div className="lg:col-span-3 flex flex-col space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Newsletter</h4>
          <p className="text-xs leading-relaxed text-slate-400">
            Sign up for our weekly newsletter to get the latest tech insights and corporate updates direct from Accra.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="relative mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 text-slate-200 text-xs rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-primary border border-transparent placeholder-slate-500"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bg-primary text-white p-2 rounded-lg hover:bg-primary/95 transition-colors cursor-pointer"
              aria-label="Subscribe"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Quick Contact Footer details */}
          <div className="pt-4 flex flex-col space-y-2 text-xs text-slate-400">
            <span className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>{CORE_LOCATION}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <a href={`mailto:${CORE_EMAIL}`} className="hover:underline">{CORE_EMAIL}</a>
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright branding bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
        <div>
          <span>Copyright &copy; {currentYear} <strong>{BRAND_NAME}</strong>. All rights reserved.</span>
        </div>
        <div className="flex space-x-6">
          <Link to="/terms" className="hover:underline hover:text-slate-400">Terms & Conditions</Link>
          <Link to="/terms" className="hover:underline hover:text-slate-400">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
