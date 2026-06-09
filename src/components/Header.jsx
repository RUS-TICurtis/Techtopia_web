import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone, ChevronDown, LogIn } from "lucide-react";
import { BRAND_NAME, CORE_EMAIL, CORE_PHONE } from "../types";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pages", path: "#" },
    { name: "Contact", path: "/contact" }
  ];

  const solutionsLinks = [
    { name: "Development", path: "/services/development" },
    { name: "Creative & Design", path: "/services/creative" },
    { name: "IT Solutions & Support", path: "/services/solution" },
    { name: "Digital Marketing", path: "/services/digital" }
  ];

  const pageDropdownLinks = [
    { name: "Pricing Plans", path: "/pricing" },
    { name: "App Integrations", path: "/integrations" },
    { name: "Our Projects", path: "/projects" },
    { name: "FAQ & Support", path: "/faq" },
    { name: "Privacy Policy", path: "/terms" }
  ];

  return (
    <header className="w-full z-50 bg-white border-b border-slate-100 sticky top-0 select-none">
      {/* Top Banner Context Info */}
      <div className="bg-primary text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:${CORE_EMAIL}`} className="hover:underline">{CORE_EMAIL}</a>
            </span>
            <span className="flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5" />
              <a href={`tel:${CORE_PHONE.replace(/\s+/g, "")}`} className="hover:underline">{CORE_PHONE}</a>
            </span>
          </div>
          <div>
            <span>Accra's Premium IT Services & Software Agency</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center space-x-2 group-item" id="nav-logo-link">
          <img 
            src="/assets/images/logo/Full logo (black).svg" 
            alt={BRAND_NAME} 
            className="h-8 md:h-10 w-auto max-w-[200px] object-contain" 
          />
        </Link>

        {/* Desktop Navbar Menu Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            if (link.name === "Services") {
              return (
                <div key={link.name} className="relative group py-2">
                  <button className="flex items-center text-sm font-semibold text-slate-700 hover:text-primary transition-colors cursor-pointer">
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1 text-slate-400 group-hover:text-primary transition-colors" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white border border-slate-100 shadow-lg py-2 hidden group-hover:block transition-all z-50">
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 text-xs font-bold text-slate-400 uppercase tracking-wider hover:bg-slate-55"
                    >
                      All Services
                    </Link>
                    {solutionsLinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            if (link.name === "Pages") {
              return (
                <div key={link.name} className="relative group py-2">
                  <button className="flex items-center text-sm font-semibold text-slate-700 hover:text-primary transition-colors cursor-pointer">
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1 text-slate-400 group-hover:text-primary transition-colors" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white border border-slate-100 shadow-lg py-2 hidden group-hover:block transition-all z-50">
                    {pageDropdownLinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.path}
                        className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-all py-1.5 border-b-2 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-600 hover:text-primary hover:border-slate-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Dashboard Login Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://leads.techtopiagh.online/authentication/login"
            target="_blank"
            rel="noreferrer referrer"
            className="flex items-center space-x-1.5 text-sm font-semibold text-slate-700 hover:text-primary transition-all py-2 px-4 rounded-xl border border-slate-200 hover:border-primary"
          >
            <LogIn className="w-4 h-4 text-slate-400 group-hover:text-primary" />
            <span>Login</span>
          </a>
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all shadow-sm hover:shadow"
          >
            Get A Quote
          </Link>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-6 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              if (link.name === "Pages") return null;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-primary transition-colors py-2 border-b border-slate-50"
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Quick Solutions Sub-links */}
            <div className="pl-4 py-2 border-l-2 border-slate-100 flex flex-col space-y-2">
              <span className="text-xs font-bold text-slate-400 tracking-widest block mb-1">OUR SOLUTIONS</span>
              {solutionsLinks.map((sublink) => (
                <Link
                  key={sublink.name}
                  to={sublink.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-primary"
                >
                  {sublink.name}
                </Link>
              ))}
            </div>

            {/* Additional Pages Sub-links */}
            <div className="pl-4 py-2 border-l-2 border-slate-100 flex flex-col space-y-2">
              <span className="text-xs font-bold text-slate-400 tracking-widest block mb-1">ADDITIONAL PAGES</span>
              {pageDropdownLinks.map((sublink) => (
                <Link
                  key={sublink.name}
                  to={sublink.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-primary"
                >
                  {sublink.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons in Mobile Panel */}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="https://leads.techtopiagh.online/authentication/login"
                target="_blank"
                rel="noreferrer referrer"
                className="flex items-center justify-center space-x-2 text-sm font-semibold text-slate-800 py-3 rounded-xl border border-slate-200 hover:border-primary text-center"
              >
                <LogIn className="w-4 h-4 text-slate-500" />
                <span>Client Portal Login</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary hover:bg-primary/95 text-white text-sm font-semibold py-3 px-5 rounded-xl text-center shadow"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
