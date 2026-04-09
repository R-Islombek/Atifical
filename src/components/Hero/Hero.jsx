import React from "react";
import Img from "./images/img.png";

const Hero = () => {
  return (
    <section className="relative bg-[#02040a] min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden selection:bg-blue-500/30">
      
      <div className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-blue-600/20 blur-[120px] md:blur-[180px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-600/15 blur-[120px] md:blur-[180px] rounded-full opacity-50"></div>
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-4">
          
          <div className="w-full lg:w-[58%] text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-white/5 border border-white/10 mb-10 transition-transform hover:scale-105 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-xs md:text-sm font-black tracking-[0.2em] uppercase">
                Future of Intelligence
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.95] mb-10 tracking-tighter">
              AI Driven <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-cyan-300 to-indigo-500">
                Cyber Defence
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-80">
              Redefining security standards with autonomous AI. Real-time protection, zero-day threat detection, and next-gen encryption.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a 
                href="#" 
                className="group relative w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-black transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] active:scale-95 text-center overflow-hidden"
              >
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
              
              <a 
                href="#" 
                className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-4 group backdrop-blur-md"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 group-hover:bg-blue-600 rounded-full transition-colors duration-300">
                   <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                     <path d="M7 6v12l10-6z"/>
                   </svg>
                </div>
                Watch Demo
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[42%] flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[350px] sm:max-w-[500px] lg:max-w-full group">
            
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              
              <img 
                src={Img} 
                alt="AI Core" 
                className="relative z-10 w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] animate-float scale-105 group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute top-10 -right-4 md:-right-8 bg-[#0a0f1d]/80 backdrop-blur-2xl border border-white/10 p-5 rounded-3xl hidden md:block z-20 animate-bounce-slow shadow-2xl">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                       </svg>
                    </div>
                    <div>
                       <p className="text-white text-sm font-black">AI Firewall</p>
                       <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Active Now</p>
                    </div>
                 </div>
              </div>

              <div className="absolute bottom-10 -left-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl hidden md:block z-20 shadow-2xl">
                 <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Threats Blocked</p>
                 <p className="text-white text-2xl font-black">99.9%</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;