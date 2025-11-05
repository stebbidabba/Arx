import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../mock';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <div className="relative w-full h-full">
          <iframe 
            src='https://my.spline.design/reactiveorb-m2oJsOxWwUGEVk5N6KywRUbE/?t=1730515000' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full"
            style={{ 
              pointerEvents: 'none',
              border: 'none',
              outline: 'none'
            }}
            title="Spline 3D Animation"
            allow="autoplay"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 -mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Tagline with tech styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Code comment style */}
              <div className="flex items-center gap-2 text-sm font-mono text-[#9c54f3]/60 mb-2">
                <span className="text-[#9c54f3]">{'// '}</span>
                <span className="animate-pulse">Okkar markmið</span>
              </div>
              
              {/* Main tagline with gradient and glow */}
              <h1 className="relative">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[#e0d0ff] to-white bg-clip-text text-transparent animate-gradient">
                  {companyInfo.tagline}
                </span>
                {/* Glowing underline */}
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#9c54f3] to-transparent mt-4 rounded-full blur-sm animate-pulse" />
              </h1>
            </motion.div>

            {/* Description with terminal-style box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28ca42]" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#9c54f3]/50 to-transparent ml-2" />
              </div>
              
              {/* Text content with code style */}
              <div className="relative p-6 rounded-lg backdrop-blur-sm bg-white/[0.02] border border-[#9c54f3]/20">
                {/* Bracket decoration */}
                <div className="absolute -left-2 top-0 text-5xl text-[#9c54f3]/30 font-mono leading-none">{'{'}</div>
                <div className="absolute -right-2 bottom-0 text-5xl text-[#9c54f3]/30 font-mono leading-none">{'}'}</div>
                
                <p className="text-lg md:text-xl text-white/70 leading-relaxed relative z-10">
                  <span className="text-[#9c54f3] font-mono text-sm mr-2">{'>'}</span>
                  {companyInfo.description}
                  <span className="inline-block w-2 h-5 bg-[#9c54f3] ml-1 animate-blink" />
                </p>
              </div>
            </motion.div>

            {/* Tech badges/pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {['Gervigreind', 'Skýjalausnir', 'Skalanlegt'].map((badge, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full bg-[#9c54f3]/10 border border-[#9c54f3]/30 backdrop-blur-sm hover:bg-[#9c54f3]/20 transition-all duration-300 cursor-default group"
                >
                  <span className="text-sm font-mono text-[#9c54f3] group-hover:text-white transition-colors">
                    {badge}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Robot animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
            style={{ zIndex: 20 }}
          >
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-pQGoBoMiaLLe4q7FDrsQW1Lf/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="w-full h-full rounded-lg"
              style={{ 
                pointerEvents: 'auto',
                border: 'none',
                outline: 'none',
                background: 'transparent'
              }}
              title="Robot Animation"
              allow="autoplay"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;