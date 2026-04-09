import React, { useState, useEffect } from "react";
import Logo from "./images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0  w-full z-[1000] transition-all duration-500 ${
        scrolled 
          ? "bg-[#02040a]/70 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-[hsla(240,81%,4%,1)] py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        <a href="/" className="relative z-[1100] group flex items-center gap-2">
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img src={Logo} alt="Logo" className="relative w-auto h-8 lg:h-10 object-contain transition-transform group-hover:scale-105" />
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  className="px-5 py-2 text-gray-400 hover:text-white font-medium transition-all text-sm tracking-wide block"
                >
                  {link.name}
                  <span className="absolute bottom-0  left-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a 
            href="/signin" 
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-xl group hover:bg-blue-500 shadow-lg shadow-blue-900/40 active:scale-95"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 opacity-0  transition-opacity"></span>
            <span className="relative text-sm">Sign In</span>
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden z-[1100] w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 active:scale-90 transition-all"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-3 ml-auto"}`}></span>
            <span className={`h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>


        <div className={`fixed inset-0 bg-[#02040a]/95 backdrop-blur-3xl transition-all duration-700 lg:hidden flex flex-col items-center justify-center ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}>
          <div className="flex flex-col items-center gap-10">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-white  font-black tracking-tighter hover:text-blue-500 transition-all transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/signin" 
              className={`mt-6 px-14 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-black text-xl shadow-2xl transition-all active:scale-95 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;