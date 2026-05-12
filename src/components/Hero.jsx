import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Gradient Blob (Optimized for performance) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent rounded-full opacity-50 pointer-events-none" />

      <div className="container mx-auto max-w-6xl z-10 grid md:grid-cols-2 gap-12 items-center text-center md:text-left mt-8 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center md:items-start"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2">
            Available for new opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-gradient">Himanshu Sharma</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium">
            Front-End Developer | Web Developer | CSE Student
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed text-sm sm:text-base">
            Passionate Front-End Developer skilled in modern web and mobile application development. Focused on building responsive, user-friendly, and visually appealing digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-medium transition-colors flex items-center justify-center gap-2">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors flex items-center justify-center gap-2">
              <FileText size={18} />
              Resume
            </a>
            <a href="#contact" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors flex items-center justify-center gap-2">
              Contact Me
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-6 pt-6 text-gray-400">
            <a href="https://github.com/HimanshuKaushikk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/himanshu-sharma-a98b22294" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sharma.himanshu8886@gmail.com" className="hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center w-full order-first md:order-last mb-8 md:mb-0"
        >
          {/* Profile Photo */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 group">
            {/* Animated Glow Behind Image (Optimized) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Image Container with Gradient Border */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-primary to-accent overflow-hidden shadow-2xl">
              <img 
                src="/IMG_20250927_171514.jpg" 
                alt="Himanshu Sharma" 
                className="w-full h-full object-cover rounded-full border-4 border-darker bg-darker transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors"
      >
        <a href="#about"><ChevronDown size={32} /></a>
      </motion.div>
    </section>
  );
};

export default Hero;
